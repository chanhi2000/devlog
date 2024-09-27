---
lang: ko-KR
title: "Health Checks In ASP.NET Core For Monitoring Your Applications"
description: "Article(s) > Health Checks In ASP.NET Core For Monitoring Your Applications"
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
      content: "Article(s) > Health Checks In ASP.NET Core For Monitoring Your Applications"
    - property: og:description
      content: "Health Checks In ASP.NET Core For Monitoring Your Applications"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/health-checks-in-asp-net-core.html
prev: /programming/cs/articles/README.md
date: 2023-04-29
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_035.png
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
  name="Health Checks In ASP.NET Core For Monitoring Your Applications"
  desc="We all want to build robust and reliable applications that can scale indefinitely and handle any number of requests. But with distributed systems and microservices architectures growing in complexity, it's becoming increasingly harder to monitor the health of our applications. It's vital that you have a system in place to receive quick feedback of your application health. That's where health checks come in. Health checks provide a way to monitor and verify the health of various components of an application including: - Databases - APIs - Caches - External services"
  url="https://milanjovanovic.tech/blog/health-checks-in-asp-net-core/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_035.png"/>

We all want to build **robust** and **reliable** applications that can scale indefinitely and handle any number of requests.

But with **distributed systems** and **microservices architectures** growing in complexity, it's becoming increasingly harder to **monitor** the **health** of our applications.

It's vital that you have a system in place to receive quick feedback of your application **health.**

That's where **health checks** come in.

**Health checks** provide a way to monitor and verify the health of various components of an application including:

- Databases
- APIs
- Caches
- External services

Let's see how to implement **health checks** in **ASP.NET Core**.

---

## What Are Health Checks?

**Health checks** are a proactive mechanism for monitoring and verifying the **health** and **availability** of an application in **ASP.NET Core.**

ASP.NET Core has **built-in support** for implementing **health checks.**

Here's the basic configuration, which registers the health check services and adds the `HealthCheckMiddleware` to respond at the specified URL.

```cs{3,7}
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHealthChecks();

var app = builder.Build();

app.MapHealthChecks("/health");

app.Run();
```

The health check returns a `HealthStatus` value indicating the health of the service.

There are three distinct `HealthStatus` values:

- `HealthStatus.Healthy`
- `HealthStatus.Degraded`
- `HealthStatus.Unhealthy`

You can use the `HealthStatus` to indicate the different states of your application.

For example, if the application is functioning slower than expected you can return `HealthStatus.Degraded`.

---

## Adding Custom Health Checks

You can create **custom health checks** by implementing the `IHealthCheck` interface.

For example, you can implement a check to see if your **SQL** database is available.

It's important to use a query that can complete quickly in the database, like `SELECT 1`.

Here's a **custom health check** implementation example in the `SqlHealthCheck` class:

```cs
public class SqlHealthCheck : IHealthCheck
{
    private readonly string _connectionString;

    public SqlHealthCheck(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("Database");
    }

    public async Task<HealthCheckResult> CheckHealthAsync(
        HealthCheckContext context,
        CancellationToken cancellationToken = default)
    {
        try
        {
            using var sqlConnection = new SqlConnection(_connectionString);

            await sqlConnection.OpenAsync(cancellationToken);

            using var command = sqlConnection.CreateCommand();
            command.CommandText = "SELECT 1";

            await command.ExecuteScalarAsync(cancellationToken);

            return HealthCheckResult.Healthy();
        }
        catch(Exception ex)
        {
            return HealthCheckResult.Unhealthy(
                context.Registration.FailureStatus,
                exception: ex);
        }
    }
}
```

After you implement the **custom health check**, you need to register it.

The previous call to `AddHealthChecks` now becomes:

```cs{2}
builder.Services.AddHealthChecks()
    .AddCheck<SqlHealthCheck>("custom-sql", HealthStatus.Unhealthy);
```

We're giving it a custom name and setting which status to use as the failure result in `HealthCheckContext.Registration.FailureStatus`.

But stop and think for a moment.

Do you want to implement a **custom health check** on your own for **every external service** that you have?

Of course not! There's a better solution.

---

## Using Existing Health Check Libraries

Before you start implementing a custom **health check** for everything, you should first see if there's already an **existing library.**

In the [<FontIcon icon="iconfont icon-github"/>`Xabaril/AspNetCore.Diagnostics.HealthChecks`](https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks) repository you can find a wide collection **health check** packages for frequently used services and libraries.

Here are just a few examples:

- <FontIcon icon="iconfont icon-sqlserver"/>SQL Server: `AspNetCore.HealthChecks.SqlServer`
- <FontIcon icon="iconfont icon-postgresql"/>Postgres: `AspNetCore.HealthChecks.Npgsql`
- <FontIcon icon="iconfont icon-redis"/>Redis: `AspNetCore.HealthChecks.Redis`
- <FontIcon icon="iconfont icon-rabbitmq"/>RabbitMQ: `AspNetCore.HealthChecks.RabbitMQ`
- <FontIcon icon="fa-brands fa-aws"/>AWS S3: `AspNetCore.HealthChecks.Aws.S3`
- SignalR: `AspNetCore.HealthChecks.SignalR`

Here's how to add health checks for **PostgreSQL** and **RabbitMQ**:

```cs{3-4}
builder.Services.AddHealthChecks()
    .AddCheck<SqlHealthCheck>("custom-sql", HealthStatus.Unhealthy);
    .AddNpgSql(pgConnectionString)
    .AddRabbitMQ(rabbitConnectionString)
```

---

## Formatting Health Checks Response

By default, the endpoint returning you **health check** status will return a string value representing a `HealthStatus`.

This isn't practical if you have **multiple health checks** configured, as you'd want to view the health status individually per service.

To make matters worse, if one of the services is failing the entire response will return `Unhealthy` and you don't know what's causing the issue.

You can solve this by providing a `ResponsWriter`, and there's an existing one in the `AspNetCore.HealthChecks.UI.Client` library.

Let's install the **NuGet** package:

```pwsh
Install-Package AspNetCore.HealthChecks.UI.Client
```

And you need to slightly update the call to `MapHealthChecks` to use the `ResponseWriter` coming from this library:

```cs{3-6}
app.MapHealthChecks(
    "/health",
    new HealthCheckOptions
    {
        ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
    });
```

After making these changes, here's what the response from the health check endpoint looks like:

```json
{
  "status": "Unhealthy",
  "totalDuration": "00:00:00.3285211",
  "entries": {
    "npgsql": {
      "data": {},
      "duration": "00:00:00.1183517",
      "status": "Healthy",
      "tags": []
    },
    "rabbitmq": {
      "data": {},
      "duration": "00:00:00.1189561",
      "status": "Healthy",
      "tags": []
    },
    "custom-sql": {
      "data": {},
      "description": "Unable to connect to the database.",
      "duration": "00:00:00.2431813",
      "exception": "Unable to connect to the database.",
      "status": "Unhealthy",
      "tags": []
    }
  }
}
```

---

## Takeaway

Application monitoring is important to track availability, resource usage, and changes to performance in your application.

I've used **health checks** before to implement **failover scenarios** in a **cloud deployment**. When one application instance stops responding with a healthy result, a new one is created to continue serving requests.

It's easy to monitor the health of your ASP.NET Core applications by **exposing health checks** for your services.

You can decide to implement **custom health checks**, but first consider if there are **existing solutions**.

Thank you for reading, and have an awesome Saturday.

---

<TagLinks />
