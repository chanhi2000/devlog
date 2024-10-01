---
lang: en-US
title: ".NET Aspire: A Game-Changer for Cloud-Native Development?"
description: "Article(s) > .NET Aspire: A Game-Changer for Cloud-Native Development?"
icon: iconfont icon-csharp
category:
  - Article(s)
  - C#
  - DotNet
  - DevOps
  - Docker
tag:
  - blog
  - freecodecamp.org
  - cs
  - c#
  - csharp
  - dotnet
  - devops
  - docker
head:
  - - meta:
    - property: og:title
      content: "Article(s) > .NET Aspire: A Game-Changer for Cloud-Native Development?"
    - property: og:description
      content: ".NET Aspire: A Game-Changer for Cloud-Native Development?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/dotnet-aspire-a-game-changer-for-cloud-native-development.html
prev: /programming/cs/articles/README.md
date: 2024-09-14
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_107.png
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

```component VPCard
{
  "title": "Docker > Article(s)",
  "desc": "Article(s)",
  "link": "/devops/docker/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name=".NET Aspire: A Game-Changer for Cloud-Native Development?"
  desc=".NET Aspire promises to revolutionize cloud-native development for .NET applications, but does it live up to the hype? In this hands-on review, I'll share my experience migrating a real project to Aspire, exploring its strengths, limitations, and potential impact on how we build distributed systems."
  url="https://milanjovanovic.tech/blog/dotnet-aspire-a-game-changer-for-cloud-native-development"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_107.png"/>

I've been tinkering with .NET Aspire lately, and I've got some thoughts to share. If you're curious about this new cloud-native development tool from Microsoft, stick around. I'll break down what's great, what's not, and how you can start using it.

> .NET Aspire is an opinionated, cloud-ready stack for building observable, production-ready, distributed applications.

[<FontIcon icon="fa-brands fa-microsoft"/>**.NET Aspire**](https://learn.microsoft.com/en-us/dotnet/aspire/get-started/aspire-overview) is Microsoft's latest offering for cloud-native application development. It aims to simplify the process of building, deploying, and managing distributed applications.

Distributed applications often consist of small applications that consume external services like databases, message brokers, and caching. .NET Aspire gives you a set of tools to make building distributed applications easier.

---

## .NET Aspire Orchestration

How are you setting up a local development environment? I often use **Docker Compose** to configure my applications and run external services. It's a simple setup, but you need to manage environment variables and connection strings. If you're not familiar with Docker, it can prove to be quite tricky sometimes.

Here's a `docker-compose.yml` file from a recent project:

```yml
services:
  contentplatform-api:
    image: ${DOCKER_REGISTRY-}contentplatform-api
    container_name: ContentPlatform.Api
    build:
      context: .
      dockerfile: ContentPlatform.Api/Dockerfile
    ports:
      - 5000:8080
      - 5001:8081

  contentplatform-reporting-api:
    image: ${DOCKER_REGISTRY-}contentplatform-reporting-api
    container_name: ContentPlatform.Reporting.Api
    build:
      context: .
      dockerfile: ContentPlatform.Reporting.Api/Dockerfile
    ports:
      - 6000:8080
      - 6001:8081

  contentplatform-presentation:
    image: contentplatform-ui:latest
    container_name: ContentPlatform.Presentation
    environment:
      - ASPNETCORE_ENVIRONMENT=Development
    ports:
      - 3000:80

  contentplatform-db:
    image: postgres:latest
    container_name: ContentPlatform.Db
    environment:
      - POSTGRES_DB=contentplatform
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
    volumes:
      - ./.containers/db:/var/lib/postgresql/data
    ports:
      - 5432:5432

  contentplatform-mq:
    image: rabbitmq:management
    container_name: ContentPlatform.RabbitMq
    hostname: contentplatform-mq
    volumes:
      - ./.containers/queue/data/:/var/lib/rabbitmq
      - ./.containers/queue/log/:/var/log/rabbitmq
    environment:
      RABBITMQ_DEFAULT_USER: guest
      RABBITMQ_DEFAULT_PASS: guest
```

This sets up two APIs, a client application, PostgreSQL, and RabbitMQ. I also have to configure the connection strings manually to connect to these services.

So, I decided to migrate this application to .NET Aspire and documented the process.

You can right-click an existing project in Visual Studio and select `Add > .NET Aspire Orchestrator Support...`.

![Context menu with '.NET Aspire Orchestrator Support...' highlighted.<br/>Source: [<FontIcon icon="fas fa-microsoft"/>Microsoft](https://learn.microsoft.com/en-us/dotnet/aspire/get-started/add-aspire-existing-app)](https://milanjovanovic.tech/blogs/mnw_107/aspire_orchestration.png?imwidth=750)

This will add an `AppHost` and `ServiceDefaults` project to your solution. You will then repeat this for the remaining projects in your solution to enlist them all in Aspire orchestration.

The `AppHost` project is responsible for orchestration. You can define your entire application stack in a single, readable file. Running the `AppHost` project from Visual Studio will start the required applications and services.

Here's the setup for my application using Aspire:

```cs
IDistributedApplicationBuilder builder = DistributedApplication.CreateBuilder(args);

var postgres = builder.AddPostgres("contentplatform-db")
    .WithPgAdmin();

var rabbitMq = builder.AddRabbitMQ("contentplatform-mq")
    .WithManagementPlugin();

builder.AddProject<Projects.ContentPlatform_Api>("contentplatform-api")
    .WithReference(postgres)
    .WithReference(rabbitMq);

builder.AddProject<Projects.ContentPlatform_Reporting_Api>("contentplatform-reporting-api")
    .WithReference(postgres)
    .WithReference(rabbitMq);

builder.AddProject<Projects.ContentPlatform_Presentation>("contentplatform-presentation");

builder.Build().Run();
```

The Aspire version is much more concise and readable. Adding new services or changing configurations is straightforward. You also get built-in observability. Aspire includes tools for logging, metrics, and distributed tracing out of the box, making it easier to monitor and debug your applications.

When you run the application, you can see your applications and services on the Aspire dashboard:

![Aspire dashboard resource views showing the application services and containers running.](https://milanjovanovic.tech/blogs/mnw_107/content_platfrom_resources.png?imwidth=3840)

---

## Orchestration - The Bad Parts

There are a few things I don't like with the current Aspire setup.

The `AppHost` project needs to reference all other projects to enlist them in orchestration. If your services are all in one solution, this might be fine. But what about large microservices systems?

We can go around this limitation by building a Docker image for an external service. There's an `AddContainer` method that allows us to configure container resources. However, we won't be able to debug these services.

The `ServiceDefaults` projects needs to be visible to all other applications. Again, this works perfectly fine if everything is in one solution. We can also distribute this project as a NuGet package for complex systems.

---

## .NET Aspire Integrations

If you're wondering how I configured PostgreSQL and RabbitMQ in the previous example, this is made available using Aspire Integrations. These are NuGet packages that allow you to integrate with popular services, such as Redis or PostgreSQL. Aspire integrations take care of many cloud-native concerns for you, like adding health checks and telemetry.

You can right-click on the `AppHost` project and select `Add > .NET Aspire package...` to see the list of available integrations:

![NuGet browser view showing a list of .NET Aspire integrations.](https://milanjovanovic.tech/blogs/mnw_107/aspire_integrations.png?imwidth=3840)

If we want to add Redis to our project, we can install the `Aspire.Hosting.Redis` package. Then, we would configure the Redis integration in the `AppHost` project:

```cs
var builder = DistributedApplication.CreateBuilder(args);

// Other service omitted for brevity

var redis = builder.AddRedis("contentplatform-cache");

builder.AddProject<Projects.ContentPlatform_Api>("contentplatform-api")
    .WithReference(postgres)
    .WithReference(rabbitMq)
    .WithReference(redis);

builder.Build().Run();
```

You can find a list of supported [<FontIcon icon="fa-brands fa-microsoft"/>Aspire integrations](https://learn.microsoft.com/en-us/dotnet/aspire/fundamentals/integrations-overview) in the documentation.

When you configure a resource with a known connection string format, Aspire automatically injects an environment variable. The connection string name will have the same name as the respective resource.

- `WithReference(postgres)` produces `ConnectionStrings__contentplatform-db="<VALUE>"`
- `WithReference(rabbitMq)` produces `ConnectionStrings__contentplatform-mq="<VALUE>"`
- `WithReference(redis)` produces `ConnectionStrings__contentplatform-cache="<VALUE>"`

This lets you use logical connection string names when configuring your services:

```cs
builder.Services.AddDbContext<ApplicationDbContext>(o =>
    o.UseNpgsql(builder.Configuration.GetConnectionString("contentplatform-db")));
```

---

## Service Defaults and OpenTelemetry

One of Aspire's killer features is its built-in observability stack. It integrates [**OpenTelemetry**](/explore/articles/milanjovanovic.tech/introduction-to-distributed-tracing-with-opentelemetry-in-dotnet.md), providing distributed tracing, metrics, and logging out of the box.

When you enlist a project in .NET Aspire orchestration, there are some updates made to the `Program` file automatically:

- `AddServiceDefaults` is called to configure OpenTelemetry, health checks, and service discovery
- `MapDefaultEndpoints` is called to expose the health check endpoint

```cs
var builder = WebApplication.CreateBuilder(args);

builder.AddServiceDefaults();

// Other code omitted for brevity

var app = builder.Build();

app.MapDefaultEndpoints();

// Other code omitted for brevity

app.Run();
```

You can customize `AddServiceDefaults` according to your requirements. For example, if you're using MassTransit, you can add the respective tracing configuration for this library.

Here's the distributed traces view on the Aspire dashboard. You can see a `POST` request hitting the `contentplatform-api` service, publishing an `ArticleCreatedEvent`, and consuming that message in the `contentplatform-reporting-api` service.

![Aspire dashboard traces views showing one distributed trace.](https://milanjovanovic.tech/blogs/mnw_107/content_platfrom_traces.png?imwidth=3840)

For local development, the .NET Aspire dashboard provides a UI for viewing telemetry data. In a production environment, you can configure the OpenTelemetry server to receive telemetry data using the `OTEL_EXPORTER_OTLP_ENDPOINT` environment variable.

---

## Deploying .NET Aspire Applications

.NET Aspire simplifies the deployment process for distributed applications, especially when targeting Azure. To deploy an Aspire application, you first generate a **manifest file** using the `dotnet run` command with specific parameters. This manifest is a JSON file that describes all the resources defined in your Aspire project, including services, databases, and other dependencies.

![.NET Aspire manifest JSON file example.<br/>Source: [<FontIcon icon="fa-brands fa-microsoft"/>Microsoft](https://learn.microsoft.com/en-us/dotnet/aspire/deployment/manifest-format)](https://milanjovanovic.tech/blogs/mnw_107/aspire_manifest.png?imwidth=3840)

Deployment tools can use the manifest to set up the necessary infrastructure in your target environment. Aspire generates the required configuration for Azure Container Apps or Kubernetes for Azure deployments. It handles tasks like setting up networking, scaling services, and configuring monitoring automatically.

Here's a simple example of generating a manifest:

```pwsh
dotnet run --project ContentPlatform.AppHost\ContentPlatform.AppHost.csproj `
  --publisher manifest --output-path ../aspire-manifest.json
```

This command creates a JSON manifest file that deployment tools can use to set up your application in the cloud or on-premises infrastructure.

You can learn more about [<FontIcon icon="fa-brands fa-microsoft"/>Aspire deployment](https://learn.microsoft.com/en-us/dotnet/aspire/deployment/overview) in the documentation.

---

## Summary

I've used .NET Aspire a lot lately, and I'm genuinely impressed.

Aspire makes building complex systems much easier. I can set up a distributed system with just a few lines of C# code. This is much simpler than using Docker Compose. The built-in observability and monitoring tools are also great.

While .NET Aspire is now production-ready, the ecosystem around it is still growing. Developers, particularly those new to cloud-native concepts, might face a learning curve.

Should you adopt Aspire in your .NET projects?

If you're building distributed applications, especially for Azure, I'd say give it a try. However, you might want to evaluate carefully if you work on simpler applications or use non-Azure cloud services.

That's all for today.

See you next week.

::: note P.S.

You can find the source code for this example in [this repository (<FontIcon icon="iconfont icon-github"/>`m-jovanovic/aspire-orchestration`)](https://github.com/m-jovanovic/aspire-orchestration).

<SiteInfo
  name="m-jovanovic/aspire-orchestration"
  desc="A sample application demonstrating how to use Aspire orchestration (migrating from Docker Compose)."
  url="https://github.com/m-jovanovic/aspire-orchestration"
  logo="https://avatars.githubusercontent.com/u/34191235?s=48&v=4"
  preview="https://opengraph.githubassets.com/b6a001b985225ba997fe2350fa0525207e489a68ceeab8aa2e7cea8d73a05d2d/m-jovanovic/aspire-orchestration"/>

:::

---

<TagLinks />

<!-- START: ARTICLE CARD -->
```component VPCard
{
  "title": ".NET Aspire: A Game-Changer for Cloud-Native Development?",
  "desc": ".NET Aspire promises to revolutionize cloud-native development for .NET applications, but does it live up to the hype? In this hands-on review, I'll share my experience migrating a real project to Aspire, exploring its strengths, limitations, and potential impact on how we build distributed systems.",
  "link": "/explore/articles/milanjovanovic.tech/dotnet-aspire-a-game-changer-for-cloud-native-development.md",
  "logo": "https://milanjovanovic.tech/profile_favicon.png",
  "background": "rgba(79,70,229,0.2)"
}
```
<!-- END: ARTICLE CARD -->