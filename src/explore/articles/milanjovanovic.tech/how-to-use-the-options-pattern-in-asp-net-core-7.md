---
lang: ko-KR
title: How To Use The Options Pattern In ASP.NET Core 7
description: Article(s) > How To Use The Options Pattern In ASP.NET Core 7
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
      content: Article(s) > How To Use The Options Pattern In ASP.NET Core 7
    - property: og:description
      content: How To Use The Options Pattern In ASP.NET Core 7
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/how-to-use-the-options-pattern-in-asp-net-core-7.html
prev: /programming/cs/articles/README.md
date: 2022-11-19
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_012.png
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
  name="How To Use The Options Pattern In ASP.NET Core 7"
  desc="In this week's newsletter I want to show you how you can use the powerful Options pattern in ASP.NET Core 7. The options pattern uses classes to provide strongly typed settings in your application at runtime. The values for the options instance can come from multiple sources. The typical use case is to provide the settings from application configuration."
  url="https://milanjovanovic.tech/blog/how-to-use-the-options-pattern-in-asp-net-core-7/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_012.png"/>

<!-- TODO: 작성 -->

<!-- 
In this week's newsletter I want to show you how you can use
the powerful **options pattern** in **ASP.NET Core 7**.

The **options pattern** uses classes to provide **strongly typed settings**
in your application at runtime.

The values for the **options** instance can come from multiple sources.
The typical use case is to provide the settings from application configuration.

You can configure the **options pattern** in a few different ways in **ASP.NET Core**.
I want to discuss some of the approaches and their potential benefits.

Let's dive in.

---

## creating-the-options-class"><a href="#creating-the-options-class">Creating The Options Class

I want to set the stage first, by creating the **options** class and
explaining what settings we want to bind to it.

We want to configure JWT Authentication for our application,
so we decided to create the `JwtOptions` class to hold that configuration:

```cs
public class JwtOptions
{
    public string Issuer { get; init; }
    public string Audience { get; init; }
    public string SecretKey { get; init; }
}

```

And let's imagine that inside of our `appsettings.json` file
we have the following configuration values:

```json
"Jwt": {
    "Issuer": "Gatherly",
    "Audience": "Gatherly",
    "SecretKey": "dont-tell-anyone!"
}

```

Alright, that's looking good. Now I want to show you a few ways to bind
the values from JSON to our `JwtOptions` class.

---

## setting-up-options-pattern-using-iconfiguration"><a href="#setting-up-options-pattern-using-iconfiguration">Setting Up Options Pattern Using IConfiguration

The most straightforward approach is to use the `IConfiguration` instance
that we can access while registering services.

We need to call the `IServiceCollection.Configure<TOptions>` method,
and specify the `JwtOptions` as the generic argument:

```cs
builder.Services.Configure<JwtOptions>(
    builder.Configuration.GetSection("Jwt"));

```

It doesn't get simpler than this, does it?

The only downside is that we are limited to the configuration
values provided through application configuration.

This can be extended to include environment variables and user secrets also.

---

## setting-up-options-pattern-using-iconfigureoptions"><a href="#setting-up-options-pattern-using-iconfigureoptions">Setting Up Options Pattern Using IConfigureOptions

If you want a more robust approach, I have you covered.
We're going to use the `IConfigureOptions` interface to define a class
to configure our **strongly typed options**.

There are two steps that we need to follow in this case:

- Create the `IConfigureOptions` implementation
<li>Call `IServiceCollection.ConfigureOptions<TOptions>` with our `IConfigureOptions`
implementation as the generic argument

To start off, we will create the `JwtOptionsSetup` class:

```cs
public class JwtOptionsSetup : IConfigureOptions<JwtOptions>
{
    private const string SectionName = "Jwt";
    private readonly IConfiguration _configuration;

    public JwtOptionsSetup(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public void Configure(JwtOptions options)
    {
        _configuration
            .GetSection(SectionName)
            .Bind(options);
    }
}

```

We wrote more code, to achieve the same thing. Was it worth it?

Perhaps, if you consider that we now have access to **dependency injection** in the `JwtOptionsSetup` class.
This means that we can resolve other services that we can use to get the configuration values.

We also need to tell the application to use the `JwtOptionsSetup` class:

```cs
builder.Services.ConfigureOptions<JwtOptionsSetup>();

```

When we try to inject our `JwtOptions` somewhere, the `JwtOptionsSetup.Configure`
method will be called first the calculate the correct values.

---

## injecting-options-with-ioptions"><a href="#injecting-options-with-ioptions">Injecting Options With IOptions

We've seen a few examples for how to configure the **options pattern** with the `JwtOptions` class.

But how do we actually use the **options pattern**?

Easy, you just need to inject `IOptions<JwtOptions>` from the constructor.

I'll just show the `JwtProvider` constructor here, for brevity.

```cs
public JwtProvider(IOptions<JwtOptions> options)
{
    _options = options.Value;
}

```

The actual `JwtOptions` instance is available on the `IOptions<JwtOptions>.Value` property.

The `IOptions` instance that we injected here is configured
as a **Singleton** in dependency injection. This is very important to be aware of.

---

## what-about-ioptionssnapshot-and-ioptionsmonitor"><a href="#what-about-ioptionssnapshot-and-ioptionsmonitor">What About IOptionsSnapshot and IOptionsMonitor?

If you want to use the latest configuration values every time
you inject an **options** class, then injecting `IOptions` won't work.

However, you can use the `IOptionsSnapshot` interface instead:

- It provides the latest configuration snapshot (cached per request)
<li>It is registered as a **Scoped** service
<li>It detects configuration changes after application start

You can also use the `IOptionsMonitor` which retrieves the current
option values at any time, and it's a **Singleton** service.

---

## wrapping-up"><a href="#wrapping-up">Wrapping up

The **options pattern** gives us a way to use strongly typed configuration classes in our application.

We can configure the options class in a simple way with <a href="#setting-up-options-pattern-using-iconfiguration">`IConfiguration`</a>,
or we can create an <a href="#setting-up-options-pattern-using-iconfigureoptions">`IConfigureOptions`</a>
implementation if we need something more powerful.

When it comes to using the **options pattern**, we have three approaches:

- <a href="https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.options.ioptions-1?view=dotnet-plat-ext-7.0">`IOptions`</a>
<li><a href="https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.options.ioptionssnapshot-1?view=dotnet-plat-ext-7.0">`IOptionsSnapshot`</a>
<li><a href="https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.options.ioptionsmonitor-1?view=dotnet-plat-ext-7.0">`IOptionsMonitor`</a>

Deciding which of them to use in your application depends on what kind of behavior you want.
If you don't need to support refreshing configuration values
after application start, <a href="#injecting-options-with-ioptions">`IOptions`</a> is a perfect solution.

-->

---

<TagLinks />