---
lang: ko-KR
title: "Scheduling Background Jobs With Quartz.NET"
description: "Article(s) > Scheduling Background Jobs With Quartz.NET"
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
      content: "Article(s) > Scheduling Background Jobs With Quartz.NET"
    - property: og:description
      content: "Scheduling Background Jobs With Quartz.NET"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/scheduling-background-jobs-with-quartz-net.html
prev: /programming/cs/articles/README.md
date: 2023-06-03
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_040.png
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
  name="Scheduling Background Jobs With Quartz.NET"
  desc="If you're building a scalable application, it's a common requirement to offload some work in your application to a background job. A few examples of that are: - Publishing email notifications - Generating reports - Updating a cache - Image processing How can you create a recurring background job in .NET? Quartz.NET is a full-featured, open source job scheduling system that can be used from smallest apps to large scale enterprise systems."
  url="https://milanjovanovic.tech/blog/scheduling-background-jobs-with-quartz-net/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_040.png"/>

If you're building a scalable application, it's a common requirement to offload some work in your application to a **background job**.

Here are a few examples of that:

- Publishing email notifications
- Generating reports
- Updating a cache
- Image processing

How can you create a recurring **background job** in .NET?

[<FontIcon icon="fas fa-globe"/>**Quartz.NET**](https://quartz-scheduler.net/) is a full-featured, open source job scheduling system that can be used from smallest apps to large scale enterprise systems.

There are three concepts you need to understand in **Quartz.NET**:

- **Job**: the actual background task you want to run
- **Trigger**: the trigger controlling when a job runs
- **Scheduler**: responsible for coordinating jobs and triggers

Let's see how we can use **Quartz.NET** to create and schedule **background jobs**.

---

## Adding The Quartz.NET Hosted Service

The first thing we need to do is install the **Quartz.NET** NuGet package. There are a few to pick from, but we're going to install the `Quartz.Extensions.Hosting` library:

```pwsh
Install-Package Quartz.Extensions.Hosting
```

The reason we're using this library is because it integrates nicely with .NET using an `IHostedService` instance.

To get the **Quartz.NET** hosted service up and running, we need two things:

- Add the required services with the DI container
- Add the hosted service

```cs
services.AddQuartz(configure =>
{
    configure.UseMicrosoftDependencyInjectionJobFactory();
});

services.AddQuartzHostedService(options =>
{
    options.WaitForJobsToComplete = true;
});
```

**Quartz.NET** will create jobs by fetching them from the DI container. This also means you can use scoped services in your jobs, not just singleton or transient services.

Setting the `WaitForJobsToComplete` option to `true` will ensure that **Quartz.NET** waits for the jobs to complete gracefully before exiting.

---

## Creating Background Jobs With `IJob`

To crate a background job with **Quartz.NET** you need to implement the `IJob` interface.

It only exposes a single method - `Execute` - where you can place the code for your background job.

A few things worth noting here:

- We're using DI to inject the `ApplicationDbContext` and `IPublisher` services
- The job is decorated with `DisallowConcurrentExecution` to prevent running the same job concurrently

```cs
[DisallowConcurrentExecution]
public class ProcessOutboxMessagesJob : IJob
{
    private readonly ApplicationDbContext _dbContext;
    private readonly IPublisher _publisher;

    public ProcessOutboxMessagesJob(
        ApplicationDbContext dbContext,
        IPublisher publisher)
    {
        _dbContext = dbContext;
        _publisher = publisher;
    }

    public async Task Execute(IJobExecutionContext context)
    {
        List<OutboxMessage> messages = await _dbContext
            .Set<OutboxMessage>()
            .Where(m => m.ProcessedOnUtc == null)
            .Take(20)
            .ToListAsync(context.CancellationToken);

        foreach (OutboxMessage outboxMessage in messages)
        {
            IDomainEvent? domainEvent = JsonConvert
                .DeserializeObject<IDomainEvent>(
                    outboxMessage.Content,
                    new JsonSerializerSettings
                    {
                        TypeNameHandling = TypeNameHandling.All
                    });

            if (domainEvent is null)
            {
                continue;
            }

            await _publisher.Publish(domainEvent, context.CancellationToken);

            outboxMessage.ProcessedOnUtc = DateTime.UtcNow;

            await _dbContext.SaveChangesAsync();
        }
    }
}
```

Now that the **background job** is ready, we need to register it with the **DI** container and add a trigger that will run the job.

---

## Configuring the Job

I mentioned at the start that there are three key concepts in **Quartz.NET**:

- Job
- Trigger
- Scheduler

We already implemented the `ProcessOutboxMessagesJob` background job in the previous section.

The **Quartz.NET** library will take care of the scheduler.

And this leaves us with configuring the **trigger** for our `ProcessOutboxMessagesJob`.

```cs
services.AddQuartz(configure =>
{
    var jobKey = new JobKey(nameof(ProcessOutboxMessagesJob));

    configure
        .AddJob<ProcessOutboxMessagesJob>(jobKey)
        .AddTrigger(
            trigger => trigger.ForJob(jobKey).WithSimpleSchedule(
                schedule => schedule.WithIntervalInSeconds(10).RepeatForever()));

    configure.UseMicrosoftDependencyInjectionJobFactory();
});
```

We need to uniquely identify our **background job** with a `JobKey`. I like to keep it simple and use the job name.

Calling `AddJob` will register the `ProcessOutboxMessagesJob` with DI and also with Quartz.

After that we configure a trigger for this job by calling `AddTrigger`. You need to associate the job with the trigger by calling `ForJob`, and then you configure the schedule for the background job. In this example, I'm scheduling the job to run every ten seconds and repeat forever while the hosted service is running.

**Quartz** also has support for configuring triggers using [<FontIcon icon="fas fa-globe"/>cron expressions](https://quartz-scheduler.net/documentation/quartz-3.x/tutorial/crontriggers.html).

---

## Job Persistence

By default, Quartz configures all jobs using the `RAMJobStore` which is the most performant because it keeps all of its data in RAM. However, this also means it's volatile and you can lose all scheduling information when your application stops or crashes.

It could be useful to have a persistent job store in some scenarios and there's a built in `AdoJobStore` which works with SQL databases. You need to create a set of database tables for Quartz.NET to use.

You can learn more about this in the [<FontIcon icon="fas fa-globe"/>job stores documentation](https://quartz-scheduler.net/documentation/quartz-3.x/tutorial/job-stores.html).

---

## Takeaway

**Quartz.NET** makes running **background jobs** in .NET easy, and you can use all the power of DI in your **background jobs**. It's also flexible for various scheduling requirements with configuration via code or using cron expressions.

There's some room for improvement to make scheduling jobs easier and reduce boilerplate:

- Add an extension method to simplify configuring jobs with a simple schedule
- Add an extension method to simplify configuring jobs with a cron schedule from application settings

If you want to see a tutorial on using **Quartz.NET**, I made an in-depth video about [<FontIcon icon="fa-brands fa-youtube"/>**using Quartz for processing Outbox messages**](https://youtu.be/XALvnX7MPeo).

<VidStack src="youtube/XALvnX7MPeo" />

That's all for this week.

See you next Saturday.

---

<TagLinks />