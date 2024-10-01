---
lang: ko-KR
title: Structured Logging In ASP.NET Core With Serilog
description: Article(s) > Structured Logging In ASP.NET Core With Serilog
icon: iconfont icon-csharp
category: 
  - C#
  - DotNet
  - Article(s)
tag: 
  - blog
  - milanjovanovic.tech
  - cs
  - c#
  - csharp
  - dotnet
head:
  - - meta:
    - property: og:title
      content: Article(s) > Structured Logging In ASP.NET Core With Serilog
    - property: og:description
      content: Structured Logging In ASP.NET Core With Serilog
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/structured-logging-in-asp-net-core-with-serilog.html
prev: /programming/cs/articles/README.md
date: 2023-02-18
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_025.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "C# > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/cs/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Structured Logging In ASP.NET Core With Serilog"
  desc="Structured logging is a practice where you apply the same message format to all of your application logs. The end result is that all your logs will have a similar structure, allowing them to be easily searched and analyzed. Serilog is a popular logging library in .NET, packed with many features. It provides logging to files, logging to the console, and elsewhere. However, why Serilog is unique is because it comes with support for structured logging out of the box."
  url="https://milanjovanovic.tech/blog/structured-logging-in-asp-net-core-with-serilog/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_025.png"/>

**Structured logging** is a practice where you apply the same message format to all of your application logs. The end result is that all your logs will have a similar structure, allowing them to be easily searched and analyzed.

[<FontIcon icon="fas fa-globe"/>Serilog](https://serilog.net/) is a popular logging library in .NET, packed with many features. It provides logging to files, logging to the console, and elsewhere.

However, **Serilog** is unique because it comes with support for **structured logging** out of the box.

Let's see how we can install **Serilog** and configure it an **ASP.NET Core** application.

---

## Installing Serilog

To install **Serilog** in **ASP.NET Core** you can add the following NuGet package:

```pwsh
Install-Package Serilog.AspNetCore
```

This NuGet packages comes with a simple API to integrate **Serilog** into your application. You can call the `UseSerilog` method on the `HostBuilder` instance to provide a lambda method to configure **Serilog**.

I think the most flexible way to configure Serilog is through application settings, which is achieved by calling `ReadFrom.Configuration()`.

You can also call the `UseSerilogRequestLogging()` method to introduce automatic HTTP request logging in your API.

```cs
var builder = WebApplication.CreateBuilder(args);

builder.Host.UseSerilog((context, configuration) =>
    configuration.ReadFrom.Configuration(context.Configuration));

var app = builder.Build();

app.UseSerilogRequestLogging();

app.Run();
```

The next question is how do you provide the actual configuration values to **Serilog**?

---

## Configuring Serilog With <FontIcon icon="iconfont icon-json"/>`appsettings.json`

You need to add a `Serilog` section in your <FontIcon icon="iconfont icon-json"/>`appsettings.json` file.

Here you can configure, among other things:

- Which **sinks** to use with **Serilog**
- Override default and minimum log levels
- Configure file logging arguments

In this example, we're adding the `Console` and `File` sinks to **Serilog**. And we're adding some additional configuration for the `File` sink in the `Serilog.WriteTo` configuration section. We can configure the output path for the log files, the naming format, which formatter to use for the logs and so on.

```json
"Serilog": {
  "Using": [ "Serilog.Sinks.Console", "Serilog.Sinks.File" ],
  "MinimumLevel": {
    "Default": "Information",
    "Override": {
      "Microsoft": "Warning",
      "System": "Warning"
    }
  },
  "WriteTo": [
    { "Name": "Console" },
    {
      "Name": "File",
      "Args": {
        "path": "/logs/log-.txt",
        "rollingInterval": "Day",
        "rollOnFileSizeLimit": true,
        "formatter": "Serilog.Formatting.Compact.CompactJsonFormatter, Serilog.Formatting.Compact"
      }
    }
  ],
  "Enrich": [ "FromLogContext", "WithMachineName", "WithThreadId" ]
}

```

You can get a more detailed overview of what's supported with the `Serilog.Configuration` library in the [documentation (<FontIcon icon="iconfont icon-github"/>`serilog/serilog-settings-configuration`)](https://github.com/serilog/serilog-settings-configuration).

<SiteInfo
  name="serilog/serilog-settings-configuration"
  desc="A Serilog configuration provider that reads from Microsoft.Extensions.Configuration"
  url="https://github.com/serilog/serilog-settings-configuration"
  logo="https://avatars.githubusercontent.com/u/5691010?s=88&v=4"
  preview="https://opengraph.githubassets.com/373bfe5a0337d2ec44960c172d4d9e523fbd6bbece03a5f09f61bada75ee10d0/serilog/serilog-settings-configuration"/>

---

## Using Serilog In ASP.NET Core

We managed to successfully install and configure **Serilog**. But how do we actually use it?

**Serilog** integrates with the `ILogger` interaface coming from the `Microsoft.Extensions.Logging` namespace. If you're already using `ILogger` for logging, everything will continue working correctly.

Here's a simple example of logging inside of a Minimal API endpoint:

```cs
app.MapGet("/serilog-is-cool", (ILogger logger) =>
{
    logger.LogInformation("This is a log inside of the Minimal API endpoint.");

    return Results.Ok(new { Message = "success" });
});

```

You just inject an `ILogger` or `ILogger<T>` instance and Serilog will provide its own implementation at runtime.

---

## Structured Logging Syntax

The idea behind **structured logging** is that you can introduce additional contextual information inside of your logs. **Serilog** does this using a message template syntax, where you can specify named parameters and then pass in their values separately.

Here's an example of what this message template would look like. You specify parameters inside of curly bracers and provide a name, for example `{NamedParameter}`. The value provided for the parameter will be serialized as a property inside of the corresponding structured log.

```cs
var book = new { Author = "Domain-Driven Design", Title = "Eric Evans" };
var orderNumber = 1;

log.LogInformation(
    "Processing book {@Book}, order number = {@OrderNumber}",
    book,
    orderNumber);
```

There are a few things to unpack here:

- `{@Book}` parameter which accepts an object
- `{OrderNumber}` parameter which accepts a scalar value

The `@` operator in front of `Book` tells Serilog to serialize the object passed in, instead of converting it using `ToString()`.

---

## Benefits Of Structured Logging

Lastly, I want to highlight what are some of the benefits of **structured logging** and why you should be using it.

As I said at the beginning, the main idea with **structured logging** is that all log message follow the same structure. This structure can be a JSON document for example, or a row in a relational table. Since structured logs are in a machine-readable format, it's much easier to search through them for specific information.

When an error occurs, structured logs can provide more context and details about the error, making it easier to identify the root cause and fix the problem.

It's very easy to start doing structured logging with **Serilog**, and I hope you'll give it a try.

See you next week, and have an excellent Saturday.

---

<TagLinks />