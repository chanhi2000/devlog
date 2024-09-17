---
lang: ko-KR
title: 3 Ways To Create Middleware In ASP.NET Core
description: Article(s) > 3 Ways To Create Middleware In ASP.NET Core
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
      content: Article(s) > 3 Ways To Create Middleware In ASP.NET Core
    - property: og:description
      content: 3 Ways To Create Middleware In ASP.NET Core
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/3-ways-to-create-middleware-in-asp-net-core.html
prev: /programming/cs/articles/README.md
date: 2022-10-01
isOriginal: false
cover: https://www.milanjovanovic.tech/blog-covers/mnw_005.png
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
  name="3 Ways To Create Middleware In ASP.NET Core"
  desc="In this newsletter, we'll be covering three ways to create middleware in ASP.NET Core applications. Middleware allows us to introduce additional logic before or after executing an HTTP request. You are already using many of the built-in middleware available in the framework. I'm going to show you three approaches to how you can define custom middleware: With Request Delegates, By Convention, and Factory-Based."
  url="https://milanjovanovic.tech/blog/3-ways-to-create-middleware-in-asp-net-core/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://www.milanjovanovic.tech/blog-covers/mnw_005.png"/>

In this newsletter, we'll be covering three ways to create middleware in **ASP.NET Core** applications.

**Middleware** allows us to introduce additional logic before or after executing an HTTP request.

You are already using many of the built-in middleware available in the framework.

I'm going to show you three approaches to how you can define custom middleware:

- With Request Delegates
- By Convention
- Factory-Based

Let's go over each of them and see how we can implement them in code.

---

## Adding Middleware With Request Delegates

The first approach to defining a middleware is by writing a **Request Delegate**.

You can do that by calling the `Use` method on the `WebApplication` instance and providing a lambda method with two arguments. The first argument is the `HttpContext` and the second argument is the actual next request delegate in the pipeline `RequestDelegate`.

Here's what this would look like:

```cs
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.Use(async (context, next) =>
{
    // Add code before request.

    await next(context);

    // Add code after request.
});
```

By awaiting the `next` delegate, you are continuing the request pipeline execution. You can *short-circuit* the pipeline by not invoking the `next` delegate.

This overload of the `Use` method is the one suggested by **Microsoft**.

---

## Adding Middleware By Convention

The second approach requires us to create a class that will represent our middleware. We have to follow the convention when creating this class so that we can use it as middleware in our application.

I'm first going to show you what this class looks like, and then explain what is the convention we are following here.

Here's how this class would look like:

```cs
public class ConventionMiddleware(
    RequestDelegate next,
    ILogger<ConventionMiddleware> logger)
{
    public async Task InvokeAsync(HttpContext context)
    {
        logger.LogInformation("Before request");

        await next(context);

        logger.LogInformation("After request");
    }
}

```

The convention we are following has a few rules:

- We need to inject a `RequestDelegate` in the constructor
- We need to define an `InvokeAsync` method with an `HttpContext` argument
- We need to invoke the `RequestDelegate` and pass it the `HttpContext` instance

There's one more thing that's required, and that is to tell our application to use this middleware.

We can do that by calling the `UseMiddleware` method:

```cs
app.UseMiddleware<ConventionMiddleware>();

```

And with this, we have a functioning middleware.

---

## Adding Factory-Based Middleware

The third and last approach requires us to also create a class that will represent our middleware.

However, this time we're going to implement the `IMiddleware` interface. This interface has only one method - `InvokeAsync`.

Here's what this class would like:

```cs
public class FactoryMiddleware(ILogger<FactoryMiddleware> logger) : IMiddleware
{
    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        logger.LogInformation("Before request");

        await next(context);

        logger.LogInformation("After request");
    }
}
```

The `FactoryMiddleware` class will be resolved at runtime from dependency injection.

Because of this, we need to register it as a service:

```cs
builder.Services.AddTransient<FactoryMiddleware>();
```

And like the previous example, we need to tell our application to use our factory-based middleware:

```cs
app.UseMiddleware<FactoryMiddleware>();
```

With this, we have a functioning middleware.

---

## A Word On Strong Typing

I'm a big fan of **strong typing** whenever possible. Out of the three approaches I just showed you, the one using the `IMiddleware` interface satisfies this constraint the most. This is also my **preferred** way to implement **middleware**.

Since we're implementing an interface, it's very easy to create a generic solution to never forget to register your middleware.

You can use reflection to scan for classes implementing the `IMiddleware` interface and add them to dependency injection, and also add them to the application by calling `UseMiddleware`.

---

<TagLinks />