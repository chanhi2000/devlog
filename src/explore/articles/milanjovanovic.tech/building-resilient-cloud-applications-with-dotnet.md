---
lang: ko-KR
title: Building Resilient Cloud Applications With .NET
description: Article(s) > Building Resilient Cloud Applications With .NET
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
      content: Article(s) > Building Resilient Cloud Applications With .NET
    - property: og:description
      content: Building Resilient Cloud Applications With .NET
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/building-resilient-cloud-applications-with-dotnet.html
prev: /programming/cs/articles/README.md
date: 2024-05-11
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_089.png
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
  name="Building Resilient Cloud Applications With .NET"
  desc="By designing your applications with resilience in mind, you can create robust and reliable systems, even when the going gets tough. In this newsletter, we'll explore the tools and techniques we have in .NET to build resilient systems."
  url="https://milanjovanovic.tech/blog/building-resilient-cloud-applications-with-dotnet/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_089.png"/>

From my experience working with microservices systems, things don't always go as planned. Network requests randomly fail, application servers become overloaded, and unexpected errors appear. That's where resilience comes in.

Resilient applications can recover from transient failures and continue to function. Resilience is achieved by designing applications that can handle failures gracefully and recover quickly.

By designing your applications with resilience in mind, you can create robust and reliable systems, even when the going gets tough.

In this newsletter, we'll explore the tools and techniques we have in .NET to build resilient systems.

---

## Resilience: Why You Should Care

Sending HTTP requests is a common approach for remote communication between services. However, HTTP requests are susceptible to failures from network or server issues. These failures can disrupt service availability, especially as dependencies increase and the risk of cascading failures grows.

So, how can you improve the resilience of your applications and services?

Here are a few strategies you can consider to increase resilience:

- **Retries**: Retry requests that fail due to transient errors.
- **Timeouts**: Cancel requests that exceed a specified time limit.
- **Fallbacks**: Define alternative actions or results for failed operations.
- **Circuit Breakers**: Temporarily suspend communication with unavailable services.

You can use these strategies individually or in combination for optimal HTTP request resilience.

Let's see how we can introduce resilience in a .NET application.

---

## Resilience Pipelines

With .NET 8, integrating resilience into your applications has become much simpler.
We can use `Microsoft.Extensions.Resilience` and `Microsoft.Extensions.Http.Resilience`, which are built on top of [<FontIcon icon="iconfont icon-github"/>`App-vNext/Polly`](https://github.com/App-vNext/Polly). Polly is a .NET resilience and transient fault-handling library. Polly allows us to define resilience strategies such as retry, circuit breaker, timeout, rate-limiting, fallback, and hedging.

Polly received a new API surface in its latest version (V8), which was implemented in collaboration with Microsoft. You can learn more about the [<FontIcon icon="fa-brands fa-youtube"/>**Polly V8 API in this video**](https://youtu.be/PqVQFUCTzUM).

<FontIcon icon="fa-brands fa-PqVQFUCTzUM"/>

If you were previously using `Microsoft.Extensions.Http.Polly`, it is recommended that you switch to one of the previously mentioned packages.

Let's start by installing the required NuGet packages:

```pwsh
Install-Package Microsoft.Extensions.Resilience
Install-Package Microsoft.Extensions.Http.Resilience
```

To use resilience, you must first build a pipeline consisting of resilience [<FontIcon icon="fas fa-globe"/>strategies](https://pollydocs.org/strategies/). Each strategy that we configure as part of the pipeline will execute in order of configuration. Order is important with resilience pipelines. Keep that in mind.

We start by creating an instance of `ResiliencePipelineBuilder`, which allows us to configure resilience strategies.

```cs
ResiliencePipeline pipeline = new ResiliencePipelineBuilder()
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

await pipeline.ExecuteAsync(
    async ct => await httpClient.GetAsync("https://modularmonolith.com", ct),
    cancellationToken);
```

Here's what we're adding to the resilience pipeline:

- `AddRetry` - Configures a retry resilience strategy, which we can further configure by passing in a `RetryStrategyOptions` instance. We can provide a predicate for the `ShouldHandle` property to define which exceptions the resilience strategy should handle. The retry strategy also comes with some sensible [<FontIcon icon="fas fa-globe"/>default values](https://pollydocs.org/strategies/retry.html#defaults).
- `AddTimeout` - Configures a timeout strategy that will throw a `TimeoutRejectedException` if the delegate does not complete before the timeout. We can provide a custom timeout by passing in a `TimeoutStrategyOptions` instance. The default timeout is 30 seconds.

Finally, we can `Build` the resilience pipeline and get back a configured `ResiliencePipeline` instance that will apply the respective resilience strategies. To use the `ResiliencePipeline`, we can call the `ExecuteAsync` method and pass in a delegate.

---

## Resilience Pipelines and Dependency Injection

Configuring a resilience pipeline every time we want to use it is cumbersome. .NET 8 introduces a new extension method for the `IServiceCollection` interface that allows us to register resilience pipelines with dependency injection.

Instead of manually configuring resilience every time, you ask for a pre-made pipeline by name.

We start by calling the `AddResiliencePipeline` method, which allows us to configure the resilience pipeline. Each resilience pipeline needs to have a unique key. We can use this key to resolve the respective resilience pipeline instance.

In this example, we're passing in a `string` key which allows us to configure the non-generic `ResiliencePipelineBuilder`.

```cs
services.AddResiliencePipeline("retry", builder =>
{
    builder.AddRetry(new RetryStrategyOptions
    {
        Delay = TimeSpan.FromSeconds(1),
        MaxRetryAttempts = 2,
        BackoffType = DelayBackoffType.Exponential,
        UseJitter = true
    });
});
```

However, we can also specify generic arguments when calling `AddResiliencePipeline`. This allows us to configure a typed resilience pipeline using `ResiliencePipelineBuilder<TResult>`. Using this approach, we can access the [<FontIcon icon="fas fa-globe"/>hedging](https://pollydocs.org/strategies/hedging.html) and [<FontIcon icon="fas fa-globe"/>fallback](https://pollydocs.org/strategies/fallback.html) strategies.

In the following example, we're configuring a fallback strategy by calling `AddFallback`. This allows us to provide a fallback value that we can return in case of a failure. The fallback could be a static value or come from another HTTP request or the database.

```cs
services.AddResiliencePipeline<string, GitHubUser?>("gh-fallback", builder =>
{
    builder.AddFallback(new FallbackStrategyOptions<GitHubUser?>
    {
        FallbackAction = _ =>
            Outcome.FromResultAsValueTask<GitHubUser?>(GitHubUser.Empty)
    });
});
```

To use resilience pipelines configured with dependency injection, we can use the `ResiliencePipelineProvider`. It exposes a `GetPipeline` method for obtaining the pipeline instance. We have to provide the key used to register the resilience pipeline.

```cs{3,6}
app.MapGet("users", async (
    HttpClient httpClient,
    ResiliencePipelineProvider<string> pipelineProvider) =>
{
    ResiliencePipeline<GitHubUser?> pipeline =
        pipelineProvider.GetPipeline<GitHubUser?>("gh-fallback");

    var user = await pipeline.ExecuteAsync(async token =>
        await httpClient.GetAsync("api/users", token),
        cancellationToken);
});
```

---

## Resilience Strategies and Polly

[<FontIcon icon="fas fa-globe"/>Resilience strategies](https://pollydocs.org/strategies/) are the core component of Polly. They're designed to run custom callbacks while introducing an additional layer of resilience. We can't run these strategies directly. Instead, we execute them through a resilience pipeline.

Polly categorizes resilience strategies into **reactive** and **proactive**. Reactive strategies handle specific exceptions or results. Proactive strategies decide to cancel or reject the execution of callbacks using a rate limiter or a timeout resilience strategy.

Polly has the following built-in resilience strategies:

- **Retry**: The classic "try again" approach. Works great for temporary network glitches. You can configure how many retries you have and even add some randomness (jitter) to avoid overloading the system if everyone retries at once.
- **Circuit-breaker**: Like an electrical circuit breaker, this prevents hammering a failing system. If errors pile up, the circuit breaker "trips" temporarily to give the system time to recover.
- **Fallback**: Provides a safe, default response if your primary call fails. It might be a cached result or a simple "service unavailable" message.
- **Hedging**: Makes multiple requests simultaneously, taking the first successful response. It is helpful if your system has numerous ways of handling something.
- **Timeout**: Prevents requests from hanging forever by terminating them if the timeout is exceeded.
- **Rate-limiter**: Throttles outgoing requests to prevent overwhelming external services.

---

## HTTP Request Resilience

Sending HTTP calls to external services is how your application interacts with the outside world. These could be third-party services like payment gateways and identity providers or other services your team owns and operates.

The `Microsoft.Extensions.Http.Resilience` library comes with ready-to-use resilience pipelines for sending HTTP requests.

We can add resilience to outgoing [**HttpClient requests**](/explore/articles/milanjovanovic.tech/the-right-way-to-use-httpclient-in-dotnet.md) using the `AddStandardResilienceHandler` method.

```cs{5}
services.AddHttpClient<GitHubService>(static (httpClient) =>
{
    httpClient.BaseAddress = new Uri("https://api.github.com/");
})
.AddStandardResilienceHandler();
```

This also means you can eliminate any [**delegating handlers**](/explore/articles/milanjovanovic.tech/extending-httpclient-with-delegating-handlers-in-aspnetcore.md) you previously used for resilience.

The standard resilience handler combines five Polly strategies to create a resilience pipeline suitable for most scenarios. The standard pipeline contains the following strategies:

- **Rate limiter**: Limits the maximum number of concurrent requests sent to the dependency.
- **Total request timeout**: Introduces a total timeout, including any retry attempts.
- **Retry**: Retries a request if it fails because of a timeout or a transient error.
- **Circuit breaker**: Prevents sending further requests if too many failures are detected.
- **Attempt timeout**: Introduces a timeout for an individual request.

You can customize any aspect of the standard resilience pipeline by configuring the `HttpStandardResilienceOptions`.

---

## Takeaway

Resilience isn't just a buzzword; it's a core principle for building reliable software systems. We're fortunate to have powerful tools like `Microsoft.Extensions.Resilience` and Polly at our disposal. We can use them to design systems that gracefully handle any transient failures.

Good [**monitoring and observability**](/explore/articles/milanjovanovic.tech/introduction-to-distributed-tracing-with-opentelemetry-in-dotnet.md) are essential to understand how your resilience mechanisms work in production. Remember, the goal isn't to eliminate failures but to gracefully handle them and keep your application functioning.

Ready to dive deeper into resilient architecture?
My advanced course on [**building modular monoliths**](/explore/articles/milanjovanovic.tech/modular-monolith-architecture/README.md) will equip you with the skills to design and implement robust, scalable systems. Check out [**Modular Monolith Architecture**](/explore/articles/milanjovanovic.tech/modular-monolith-architecture/README.md).

::: info Challenge

Take a look at your existing .NET projects. Are there any critical areas where a little resilience could go a long way? Pick one and try applying some of the techniques we've discussed here.

:::

That's all for today.

See you next week.

---

<TagLinks />