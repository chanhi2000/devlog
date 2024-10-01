---
lang: en-US
title: "Breaking It Down: How to Migrate Your Modular Monolith to Microservices"
description: "Article(s) > Breaking It Down: How to Migrate Your Modular Monolith to Microservices"
icon: iconfont icon-csharp
category:
  - Article(s)
  - C#
  - DotNet
tag:
  - blog
  - freecodecamp.org
  - cs
  - c#
  - csharp
  - dotnet
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Breaking It Down: How to Migrate Your Modular Monolith to Microservices"
    - property: og:description
      content: "Breaking It Down: How to Migrate Your Modular Monolith to Microservices"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/breaking-it-down-how-to-migrate-your-modular-monolith-to-microservices.html
prev: /programming/cs/articles/README.md
date: 2024-09-28
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_109.png
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
  name="Breaking It Down: How to Migrate Your Modular Monolith to Microservices"
  desc="Transitioning from a modular monolith to microservices can significantly enhance your system's scalability and your team's productivity, but it's a journey that requires careful planning and execution. In this practical guide, I'll walk you through the key steps of this migration process, from preparing your monolith and selecting the right module to extract, to implementing effective inter-service communication and data migration strategies, all based on real-world experience with .NET applications."
  url="https://milanjovanovic.tech/blog/breaking-it-down-how-to-migrate-your-modular-monolith-to-microservices"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_109.png"/>

As your application grows, you might find yourself considering a move from a modular monolith to microservices. This transition isn't just a technical shift. It's a strategic move that can reshape how your entire system operates. But let's be clear: it's not a magic solution and comes with its own challenges.

In this article, I'll share my experience of migrating from a modular monolith to microservices.

We'll explore why you might consider microservices, how to prepare for the migration and the critical steps in the migration process - from choosing your first module to implementing inter-service communication and managing data migration.

Let's dive in!

---

## Why Consider Microservices?

A [**modular monolith**](/explore/articles/milanjovanovic.tech/what-is-a-modular-monolith.md) serves as an excellent starting point for many applications. It's simpler to develop, easier to understand, and faster to deploy than a distributed system. But as your application grows, you might start facing some problems.

Here are the key challenges I've encountered with modular monoliths:

- High-load modules can become bottlenecks, affecting the entire system's performance
- As the monolith grows, deployments become riskier and more time-consuming
- Large teams working on a single codebase often step on each other's toes
- You're locked into a single technology stack for the entire application

Microservices can address these issues, but it's not a decision to be taken lightly.

![Modular monolith to microservices comparison.](https://milanjovanovic.tech/blogs/mnw_109/modular_monolith_vs_microservices.png?imwidth=3840)

Here's how microservices can help:

- **Scalability**: You can scale individual services based on their specific load, optimizing resource use.
- **Independent deployability**: Updates to one service don't require redeploying the entire application, reducing risk and downtime.
- **Team autonomy**: Separate teams can own different services, leading to faster development cycles.

The good news? If you've built a well-designed modular monolith, you're already halfway there. The clear boundaries between modules in your monolith can serve as a blueprint for your microservices architecture.

Remember, microservices come with their own complexities in areas like data consistency and inter-service communication. But for the right use cases, they can provide the flexibility and scalability needed for growing applications.

---

## Preparing for Migration

The success of your migration largely depends on how well you prepare. Your best starting point is a well-structured modular monolith.

Here are key areas to focus on:

1. **Review module boundaries**: I can't stress this enough: clear module boundaries are crucial. Each module should have a distinct responsibility and minimal dependencies on others. If boundaries are blurry, refactor before migrating.
2. **Ensure proper data encapsulation**: Modules should not directly access each other's data stores. I make sure each module owns and manages its data exclusively. No shared tables, no direct database access across modules. This clean separation makes it much easier to extract modules into microservices later.
3. **Implement clean public APIs**: Define clear contracts between modules to facilitate future separation. Modules should communicate through well-defined APIs, not by accessing each other's internals.

Here's an example of the above:

```cs{7,20}
// Good: Clear module boundary
namespace BookingsModule;

public class CreateBooking
{
    private readonly IBookingRepository _bookingRepository;
    private readonly IPaymentGateway _paymentGateway; // Public API

    public CreateBooking(IBookingRepository bookingRepository, IPaymentGateway paymentGateway)
    {
        _bookingRepository = bookingRepository;
        _paymentGateway = paymentGateway;
    }

    public async Task<BookingResult> CreateBookingAsync(BookingRequest request)
    {
        var booking = await _bookingRepository.CreateAsync(Booking.FromRequest(request));

        // Accessing the other module's data through an abstraction
        var paymentResult = await _paymentGateway.ProcessPaymentAsync(booking.Id, booking.TotalAmount);

        return new BookingResult(booking, paymentResult);
    }
}
```

By focusing on these areas, you're not just preparing for migration - you're improving your modular monolith. Even if you decide not to migrate, these steps will make your system more maintainable and scalable.

---

## Choosing and Extracting the First Module

Selecting the right module to extract first can set the tone for your entire migration. In my experience, it's crucial to start with a module that's self-contained and has clear boundaries.

When I'm evaluating modules, I look for these characteristics:

- Low coupling with other modules
- High cohesion within the module
- A distinct business function
- Potential performance or scalability gains from separation

For instance, in an e-commerce system, I might choose the product catalog module. It typically has a clear purpose, doesn't heavily depend on other modules, and could benefit from independent scaling.

Once you've chosen your module, here's the extraction process I follow:

1. Create a new project for the microservice.
2. Move the module's code to the new project. This often reveals hidden dependencies, which is valuable information.
3. Update the dependencies, ensuring the microservice is self-contained. This might involve copying some shared code or refactoring to remove unnecessary dependencies.
4. Set up a separate database for the microservice. This enforces data independence.
5. Implement a data migration strategy (more on this later)

Here's what this might look like in practice:

![Modular monolith extraction process into microservices.](https://milanjovanovic.tech/blogs/mnw_109/modular_monolith_extraction.png?imwidth=3840)

Remember, the goal isn't perfection on the first try. I often iterate on this process, gradually refining the separation between the new microservice and the monolith.

The first extraction is a learning experience. It'll show you how to approach subsequent modules and help you refine the overall migration strategy.

---

## Implementing Inter-Service Communication

Once you've extracted a module into a microservice, you have to update the [**module's communication**](/explore/articles/milanjovanovic.tech/modular-monolith-communication-patterns.md) with the rest of the system. This typically involves transitioning from direct method calls to network-based communication.

Here's how I approach this transition:

::: tabs

@tab:active 1.

Replace direct method calls with HTTP API calls. I often use libraries like [**Refit**](/explore/articles/milanjovanovic.tech/refit-in-dotnet-building-robust-api-clients-in-csharp.md) to simplify API interactions. Here's a before and after example:

```cs
// Before: Direct method call
BookingDto booking = await _bookingService.GetAsync(bookingId);

// After: HTTP API call
var response = await _httpClient.GetAsync($"http://bookings-service/api/bookings/{bookingId}");

var booking = await response.Content.ReadFromJsonAsync<BookingDto>();
```

@tab 2.

For asynchronous communication, consider implementing a messaging system. While the implementation details vary, tools like [**RabbitMQ**](/explore/articles/milanjovanovic.tech/using-masstransit-with-rabbitmq-and-azure-service-bus.md), [**Amazon SQS and SNS**](/explore/articles/milanjovanovic.tech/complete-guide-to-amazon-sqs-and-amazon-sns-with-masstransit.md), or [**Azure Service Bus**](/explore/articles/milanjovanovic.tech/messaging-made-easy-with-azure-service-bus.md) can significantly improve system resilience and decoupling.

@tab 3.

Network communication introduces new failure modes, so I always implement [**resilience patterns**](building-resilient-cloud-applications-with-dotnet). Here's how I use Polly with resilience pipelines:

```cs
sing Polly;

var pipeline = new ResiliencePipelineBuilder<HttpResponseMessage>()
    .AddRetry(new RetryStrategyOptions
    {
        ShouldHandle = new PredicateBuilder().Handle<ConflictException>(),
        Delay = TimeSpan.FromSeconds(1),
        MaxRetryAttempts = 2,
        BackoffType = DelayBackoffType.Exponential,
        UseJitter = true
    })
    .AddTimeout(new TimeoutStrategyOptions
    {
        Timeout = TimeSpan.FromSeconds(10)
    })
    .Build();

var response = await pipeline.ExecuteAsync(
    async ct => await _httpClient.GetAsync($"http://bookings-service/api/bookings/{bookingId}", ct),
    cancellationToken);
```

:::

Transitioning to HTTP-based communication always brings new problems to solve. Serialization, error handling, and [**API versioning**](/explore/articles/milanjovanovic.tech/api-versioning-in-aspnetcore.md) become crucial. I've learned to plan for these aspects from the start to avoid headaches down the line.

---

## Implementing an API Gateway

As you extract more services, managing the communication between clients and your microservices can become complex. An API Gateway can help manage this complexity by providing a single entry point for all clients.

YARP (Yet Another Reverse Proxy) is an excellent tool for [**implementing an API Gateway**](/explore/articles/milanjovanovic.tech/implementing-an-api-gateway-for-microservices-with-yarp.md) in .NET. Here's how I typically set it up:

```cs
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddReverseProxy()
    .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));

var app = builder.Build();

app.MapReverseProxy();

app.Run();
```

Then, I configure the routing in <FontIcon icon="iconfont icon-json"/>`appsettings.json`:

```json
{
  "ReverseProxy": {
    "Routes": {
      "bookings-route": {
        "ClusterId": "bookings-cluster",
        "Match": {
          "Path": "/api/bookings/{**catch-all}"
        }
      },
      "payments-route": {
        "ClusterId": "payments-cluster",
        "Match": {
          "Path": "/api/payments/{**catch-all}"
        }
      }
    },
    "Clusters": {
      "bookings-cluster": {
        "Destinations": {
          "destination1": {
            "Address": "http://bookings-service/"
          }
        }
      },
      "payments-cluster": {
        "Destinations": {
          "destination1": {
            "Address": "http://payments-service/"
          }
        }
      }
    }
  }
}
```

This setup routes requests to the appropriate microservice based on the path. For example, any request to `/api/bookings/*` will be routed to the `bookings-service`.

![Modular monolith extraction process into microservices with an API gateway introduced.](https://milanjovanovic.tech/blogs/mnw_109/modular_monolith_extraction_api_gateway.png?imwidth=3840)

In my projects, I've found that an API Gateway often becomes a critical point for implementing cross-cutting concerns. As your architecture evolves, consider adding features like:

- [**Rate limiting**](advanced-rate-limiting-use-cases-in-dotnet) to protect your services from overload
- [**Caching**](caching-in-aspnetcore-improving-application-performance) to improve response times for frequently requested data
- Request/response transformation to adapt your internal APIs for external consumption

Start simple, but be prepared to evolve your gateway as you learn more about your system's needs and usage patterns.

---

## Data Migration Strategy

Data migration is often the trickiest part of moving from a modular monolith to microservices. In my experience, there are two main approaches:

### 1. The "One and Done" Approach

For simpler systems or those that can handle some downtime, I use this method:

- Create a new database for the microservice
- Copy the relevant schema and data from the monolith
- Switch the application to use the new database

It's quick and simple but requires a brief downtime.

### 2. The Synchronization Approach

For complex systems needing minimal disruption, I use this method:

- Copy the schema and initial data to the new database
- Set up a sync mechanism (like [<FontIcon icon="fa-brands fa-wikipedia-w"/>change data capture](https://en.wikipedia.org/wiki/Change_data_capture)) to keep the new database updated
- Gradually shift traffic to the new microservice
- Eventually, remove the old schema from the monolith

This approach is more complex but allows for a smoother transition.

In both cases, I always ensure I have a solid backup and rollback plan. The key is to choose the method that best fits your system's needs and tolerance for complexity.

Remember, if your modular monolith already uses [**separate database schemas for each module**](/explore/articles/milanjovanovic.tech/modular-monolith-data-isolation.md), you're starting with an advantage. This logical isolation makes the migration process significantly easier.

---

## Summary

Migrating from a modular monolith to microservices is a journey I've taken several times, and it's always both challenging and rewarding. The process we've covered here - from preparing your monolith and choosing the right module to extract to implementing proper communication patterns - forms the foundation of a successful migration.

Don't rush the process. Careful planning and incremental changes are key. Each step teaches you something valuable about your system.

While we've covered the fundamentals, there's always more to learn. I recommend exploring these advanced topics:

- [**Service discovery**](/explore/articles/milanjovanovic.tech/service-discovery-in-microservices-with-net-and-consul.md) and API gateway patterns
- [**Monitoring and observability**](/explore/articles/milanjovanovic.tech/introduction-to-distributed-tracing-with-opentelemetry-in-dotnet.md) in a microservices environment
- Advanced [**deployment strategies**](/explore/articles/milanjovanovic.tech/how-to-build-ci-cd-pipeline-with-github-actions-and-dotnet.md), like blue-green deployment

If you're ready to master this process and gain hands-on experience, I've put together a comprehensive [**Modular Monolith Architecture**](/explore/articles/milanjovanovic.tech/modular-monolith-architecture/README.md) course. There's an entire chapter dedicated to extracting modules and moving to microservices. You'll gain practical skills to confidently navigate your microservices transformation.

Remember, the goal isn't to blindly adopt microservices but to evolve your architecture to best serve your business needs. Sometimes, a well-structured modular monolith is the right solution. Other times, a full microservices architecture is the way to go. The key is understanding the trade-offs and making informed decisions.

Good luck out there, and I'll see you next week.

---

<TagLinks />