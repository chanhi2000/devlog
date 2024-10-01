---
lang: ko-KR
title: Using Scoped Services From Singletons in ASP.NET Core
description: Article(s) > Using Scoped Services From Singletons in ASP.NET Core
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
      content: Article(s) > Using Scoped Services From Singletons in ASP.NET Core
    - property: og:description
      content: Using Scoped Services From Singletons in ASP.NET Core
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/using-scoped-services-from-singletons-in-aspnetcore.html
prev: /programming/cs/articles/README.md
date: 2024-02-17
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_077.png
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
  name="Using Scoped Services From Singletons in ASP.NET Core"
  desc="Did you ever need to inject a scoped service into a singleton service? I'll explain how you can solve this problem and safely use scoped services from within singletons in ASP.NET Core."
  url="https://milanjovanovic.tech/blog/using-scoped-services-from-singletons-in-aspnetcore/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_077.png"/>

Did you ever need to inject a scoped service into a singleton service?

I often need to resolve a scoped service, like the EF Core `DbContext`, in a background service.

Another example is when you need to resolve a scoped service in ASP.NET Core middleware.

If you ever tried this, you were probably greeted with an exception similar to this one:

```
System.InvalidOperationException: Cannot consume scoped service 'Scoped' from singleton 'Singleton'.
```

Today, I'll explain how you can solve this problem and safely use scoped services from within singletons in ASP.NET Core.

---

## ASP.NET Core Service Lifetimes

ASP.NET Core has three [<FontIcon icon="fa-brands fa-microsoft"/>service lifetimes](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection#service-lifetimes):

- Transient
- Singleton
- Scoped

[<FontIcon icon="fa-brands fa-microsoft"/>Transient services](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection#transient) are created each time they're requested from the service container.

[<FontIcon icon="fa-brands fa-microsoft"/>Scoped services](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection#scoped) are created once within the scope's lifetime. For ASP.NET Core applications, a new scope is created for each request. This is how you can resolve scoped services within a given request.

ASP.NET Core applications also have a root `IServiceProvider` used to resolve [<FontIcon icon="fa-brands fa-microsoft"/>singleton services](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection#singleton).

So, what can we do if resolving a scoped service from a singleton throws an exception?

---

## The Solution - `IServiceScopeFactory`

What if you want to resolve a scoped service inside a [background service](/explore/articles/milanjovanovic.tech/running-background-tasks-in-asp-net-core.md)?

You can create a new scope (`IServiceScope`) with its own `IServiceProvider` instance. The scoped `IServiceProvider` can be used to resolve scoped services. When the scope is disposed, all disposable services created within that scope are also disposed.

Here's an example of using the `IServiceScopeFactory` to create a new `IServiceScope`. We're using the scope to resolve the `ApplicationDbContext`, which is a scoped service.

The `BackgroundJob` is registered as a singleton when calling `AddHostedService<BackgroundJob>`.

```cs{6,8-10}
public class BackgroundJob(IServiceScopeFactory serviceScopeFactory)
    : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        using IServiceScope scope = serviceScopeFactory.CreateScope();

        var dbContext = scope
            .ServiceProvider
            .GetRequiredService<ApplicationDbContext>();

        // Do some background processing with the EF database context.
        await DoWorkAsync(dbContext);
    }
}
```

---

## Scoped Services in Middleware

What if you want to use a scoped service in [ASP.NET Core middleware](/explore/articles/milanjovanovic.tech/3-ways-to-create-middleware-in-asp-net-core.md)?

Middleware is constructed once per application lifetime.

If you try injecting a scoped service, you'll get an exception:

```
System.InvalidOperationException: Cannot resolve scoped service 'Scoped' from root provider.
```

There are two ways to get around this.

First, you could use the previous approach with creating a new scope using `IServiceScopeFactory`. You'll be able to resolve scoped services. But, they won't share the same lifetime as the other scoped service in the same request. This could even be a problem depending on your requirements.

Is there a better way?

Middleware allows you to inject scoped services in the `InvokeAsync` method. The injected services will use the current request's scope, so they'll have the same lifetime as any other scoped service.

```cs{5,7}
public class ConventionalMiddleware(RequestDelegate next)
{
    public async Task InvokeAsync(
        HttpContext httpContext,
        IMyScopedService scoped)
    {
        scoped.DoSomething();

        await _next(httpContext);
    }
}
```

---

## `IServiceScopeFactory` vs. `IServiceProvider`

You might see examples using the `IServiceProvider` to create a scope instead of the `IServiceScopeFactory`.

What's the difference between these two approaches?

The [`CreateScope` method from `IServiceProvider` (<FontIcon icon="iconfont icon-github"/>`aspnet/DependencyInjection`)](https://github.com/aspnet/DependencyInjection/blob/94b9cc9ace032f838e068702cc70ce57cc883bc7/src/DI.Abstractions/ServiceProviderServiceExtensions.cs#L125) resolves an `IServiceScopeFactory` instance and calls `CreateScope()` on it:

```cs
public static IServiceScope CreateScope(this IServiceProvider provider)
{
    return provider.GetRequiredService<IServiceScopeFactory>().CreateScope();
}
```

So, if you want to use the `IServiceProvider` directly to create a scope, that's fine.

However, the `IServiceScopeFactory` is a more direct way to achieve the desired result.

---

## Summary

Understanding the difference between Transient, Scoped, and Singleton lifetimes is crucial for managing dependencies in ASP.NET Core applications.

The `IServiceScopeFactory` provides a solution when you need to resolve scoped services from singletons. It allows you to create a new scope, which you can use to resolve scoped services.

In middleware, we can inject scoped services into the `InvokeAsync` method. This also ensures the services use the current request's scope and lifecycle.

Thanks for reading, and I'll see you next week!

---

<TagLinks />