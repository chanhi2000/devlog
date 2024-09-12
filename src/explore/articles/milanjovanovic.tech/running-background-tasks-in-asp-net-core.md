---
lang: ko-KR
title: Running Background Tasks In ASP.NET Core
description: Article(s) > Running Background Tasks In ASP.NET Core
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
      content: Article(s) > Running Background Tasks In ASP.NET Core
    - property: og:description
      content: Running Background Tasks In ASP.NET Core
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/running-background-tasks-in-asp-net-core.html
prev: /programming/cs/articles/README.md
date: 2022-12-03
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_014.png
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
  name="Running Background Tasks In ASP.NET Core"
  desc="In this week's newsletter we will talk about running background tasks in ASP .NET Core. After reading this newsletter, you will be able to set up a background task and have it up and running within minutes. Background tasks are used to offload some work in your application to the background, outside of the normal application flow. A typical example can be asynchronously processing messages from a queue. I will show you how to create a simple background task that runs once and completes. And you will also see how to configure a continuous background task, that repeats after a specific period."
  url="https://milanjovanovic.tech/blog/running-background-tasks-in-asp-net-core/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_014.png"/>

<!-- TODO: 작성 -->

<!--
In this week's newsletter we will talk about running **background tasks** in **ASP.NET Core**. After reading this newsletter, you will be able to set up a **background task** and have it up and running within minutes.

**Background tasks** are used to offload some work in your application to the background, outside of the normal application flow. A typical example can be asynchronously processing messages from a queue.

I will show you how to create a simple **background task** that runs once and completes.

And you will also see how to configure a continuous **background task**, that repeats after a specific period.

Let's dive in.

---

## Background Tasks With IHostedService

You can define a **background task** by implementing the `IHostedService` interface. It has only two methods.

Here's what the `IHostedService` interface looks like:

```cs
public interface IHostedService
{
    Task StartAsync(CancellationToken cancellationToken);

    Task StopAsync(CancellationToken cancellationToken);
}
```

All you have to do is implement the `StartAsync` and `StopAsync` methods.

Inside of `StartAsync` you would usually perform the background processing.
And inside of `StopAsync` you would perform any cleanup that is necessary,
such as disposing of resources.

To configure the **background task** you have to call the `AddHostedService` method:

```cs
builder.Services.AddHostedService<MyBackgroundTask>();
```

Calling `AddHostedService` will configure the **background task**
as a **singleton** service.

So does dependency injection still work in `IHostedService` implementations?<br>
Yes, but you can only inject **transient** or **singleton** services.

However, I don't like to implement the `IHostedService` interface myself.
I prefer using the `BackgroundService` class instead.

---

## Background Tasks With BackgroundService

The `BackgroundService` class already implements the `IHostedService` interface, and it has an `abstract` method that you need to override - `ExecuteAsync`. When you are using the `BackgroundService` class, you only have to think about the operation you want to implement.

Here's an example **background task** that runs **EF** migrations:

```cs
public class RunEfMigrationsBackgroundTask : BackgroundService
{
    private readonly IServiceProvider _serviceProvider;

    public RunEfMigrationsBackgroundTask(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        using IServiceScope scope = _serviceProvider.CreateScope();

        await using AppDbContext dbContext =
            scope.ServiceProvider.GetRequiredService<AppDbContext>();

        await dbContext.Database.MigrateAsync(stoppingToken);
    }
}
```

The **EF** `DbContext` is a **scoped** service, which we can't inject directly inside of `RunEfMigrationsBackgroundTask`. We have to inject an instance of `IServiceProvider` which we can use to create a custom service scope, so that we can resolve the scoped `AppDbContext`.

I would *not recommend* running the `RunEfMigrationsBackgroundTask` in production. **EF** migrations can easily fail and you'll run into problems. However, I think it's perfectly fine for local development.

---

## Periodic Background Tasks

Sometimes we want run a **background task** continuously, and have it perform some operation on repeat. For example, we want consume messages from a queue every ten seconds. How do we build this?

Here's an example `PeriodicBackgroundTask` to get you started:

```cs
public class PeriodicBackgroundTask : BackgroundService
{
    private readonly TimeSpan _period = TimeSpan.FromSeconds(5);
    private readonly ILogger<PeriodicBackgroundTask> _logger;

    public PeriodicBackgroundTask(ILogger<PeriodicBackgroundTask> logger)
    {
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        using PeriodicTimer timer = new PeriodicTimer(_period);

        while (!stoppingToken.IsCancellationRequested &&
               await timer.WaitForNextTickAsync(stoppingToken))
        {
            _logger.LogInformation("Executing PeriodicBackgroundTask");
        }
    }
}
```

We're using a <a href="https://learn.microsoft.com/en-us/dotnet/api/system.threading.periodictimer?view=net-6.0">PeriodicTimer</a> to asynchronously wait for a given period, before executing our **background task**.

---

## What If You Need A More Robust Solution?

It should be obvious by now that `IHostedService` is useful when you need simple **background tasks** that are running while your application is running.

What if you want to have a scheduled **background task** that runs at 2AM every day?

You can probably build something like this yourself, but there are existing solutions that you should consider first.

Here are two popular solutions for running **background tasks** that I worked with before:

- <a href="https://www.quartz-scheduler.net/">Quartz</a>
- <a href="https://www.hangfire.io/">Hangfire</a>

I also have an example of <a href="https://youtu.be/XALvnX7MPeo">using Quartz for processing Outbox messages</a> on my YouTube channel that you can take a look at.

-->

---

<TagLinks />