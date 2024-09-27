---
lang: ko-KR
title: Global Error Handling in ASP.NET Core 8
description: Article(s) > Global Error Handling in ASP.NET Core 8
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
      content: Article(s) > Global Error Handling in ASP.NET Core 8
    - property: og:description
      content: Global Error Handling in ASP.NET Core 8
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/global-error-handling-in-aspnetcore-8.html
prev: /programming/cs/articles/README.md
date: 2023-12-02
isOriginal: fals
cover: https://milanjovanovic.tech/blog-covers/mnw_066.png
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
  name="Global Error Handling in ASP.NET Core 8"
  desc="Exceptions are for exceptional situations. But they will inevitably happen in your applications, and you need to handle them. You can implement a global exception handling mechanism or handle only specific exceptions. ASP.NET Core gives you a few options on how to implement this. So which one should you choose? Today, I want to show you an old and new way to handle exceptions in ASP.NET Core 8."
  url="https://milanjovanovic.tech/blog/global-error-handling-in-aspnetcore-8/"
  logo="https://milanjovanovic.tech/profile_favico.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_066.png"/>

Exceptions are for exceptional situations. I even wrote about [**avoiding exceptions entirely.**](/explore/articles/milanjovanovic.tech/functional-error-handling-in-dotnet-with-the-result-pattern.md)

But they will inevitably happen in your applications, and you need to handle them.

You can implement a global exception handling mechanism or handle only specific exceptions.

ASP.NET Core gives you a few options on how to implement this. So which one should you choose?

Today, I want to show you an *old* and *new* way to handle exceptions in ASP.NET Core 8.

---

## Old Way: Exception Handling Midleware

The standard to implement exception handling in ASP.NET Core is using middleware. Middleware allows you to introduce logic before or after executing HTTP requests. You can easily extend this to implement exception handling. Add a `try-catch` statement in the middleware and return an error HTTP response.

There are [**3 ways to create middleware**](/explore/articles/milanjovanovic.tech/3-ways-to-create-middleware-in-asp-net-core.md) in ASP.NET Core:

- Using [**request delegates**](/explore/articles/milanjovanovic.tech/3-ways-to-create-middleware-in-asp-net-core.md#adding-middleware-with-request-delegates)
- By [**convention**](/explore/articles/milanjovanovic.tech/3-ways-to-create-middleware-in-asp-net-core.md#adding-middleware-by-convention)
- [`IMiddleware`](/explore/articles/milanjovanovic.tech/3-ways-to-create-middleware-in-asp-net-core.md#adding-factory-based-middleware)

The convention-based approach requires you to define an `InvokeAsync` method.

Here's an `ExceptionHandlingMiddleware` defined by convention:

```cs
public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionHandlingMiddleware> _logger;

    public ExceptionHandlingMiddleware(
        RequestDelegate next,
        ILogger<ExceptionHandlingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception exception)
        {
            _logger.LogError(
                exception, "Exception occurred: {Message}", exception.Message);

            var problemDetails = new ProblemDetails
            {
                Status = StatusCodes.Status500InternalServerError,
                Title = "Server Error"
            };

            context.Response.StatusCode =
                StatusCodes.Status500InternalServerError;

            await context.Response.WriteAsJsonAsync(problemDetails);
        }
    }
}
```

The `ExceptionHandlingMiddleware` will catch any unhandled exception and return a [<FontIcon icon="fas fa-globe"/>Problem Details](https://rfc-editor.org/rfc/rfc7807.html) response. You can decide how much information you want to return to the caller. In this example, I'm hiding the exception details.

You also need to add this middleware to the ASP.NET Core request pipeline:

```cs
app.UseMiddleware<ExceptionHandlingMiddleware>();
```

---

## New Way: IExceptionHandler

[<FontIcon icon="fa-brands fa-microsoft"/>ASP.NET Core 8](https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-8.0) introduces a new [<FontIcon icon="fa-brands fa-microsoft"/>`IExceptionHandler`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.diagnostics.iexceptionhandler?view=aspnetcore-8.0) abstraction for managing exceptions. The built-in exception handler middleware uses `IExceptionHandler` implementations to handle exceptions.

This interface has only one `TryHandleAsync` method.

`TryHandleAsync` attempts to handle the specified exception within the ASP.NET Core pipeline. If the exception can be handled, it should return `true`. If the exception can't be handled, it should return `false`. This allows you to implement custom exception-handling logic for different scenarios.

Here's a `GlobalExceptionHandler` implementation:

```cs
internal sealed class GlobalExceptionHandler : IExceptionHandler
{
    private readonly ILogger<GlobalExceptionHandler> _logger;

    public GlobalExceptionHandler(ILogger<GlobalExceptionHandler> logger)
    {
        _logger = logger;
    }

    public async ValueTask<bool> TryHandleAsync(
        HttpContext httpContext,
        Exception exception,
        CancellationToken cancellationToken)
    {
        _logger.LogError(
            exception, "Exception occurred: {Message}", exception.Message);

        var problemDetails = new ProblemDetails
        {
            Status = StatusCodes.Status500InternalServerError,
            Title = "Server error"
        };

        httpContext.Response.StatusCode = problemDetails.Status.Value;

        await httpContext.Response
            .WriteAsJsonAsync(problemDetails, cancellationToken);

        return true;
    }
}
```

---

## Configuring IExceptionHandler Implementations

You need two things to add an `IExceptionHandler` implementation to the ASP.NET Core request pipeline:

1. Register the `IExceptionHandler` service with dependency injection
2. Register the [<FontIcon icon="fa-brands fa-microsoft"/>`ExceptionHandlerMiddleware`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.diagnostics.exceptionhandlermiddleware?view=aspnetcore-8.0) with the request pipeline

You call the `AddExceptionHandler` method to register the `GlobalExceptionHandler` as a service. It's registered with a [**singleton lifetime**](/explore/articles/milanjovanovic.tech/improving-aspnetcore-dependency-injection-with-scrutor.md). So be careful about injecting services with a different lifetime.

I'm also calling `AddProblemDetails` to generate a [<FontIcon icon="fas fa-globe"/>Problem Details](https://rfc-editor.org/rfc/rfc7807.html) response for common exceptions.

```cs
builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
builder.Services.AddProblemDetails();
```

You also need to call `UseExceptionHandler` to add the `ExceptionHandlerMiddleware` to the request pipeline:

```cs
app.UseExceptionHandler();
```

---

## Chaining Exception Handlers

You can add multiple `IExceptionHandler` implementations, and they're called in the order they are registered. A possible use case for this is using exceptions for flow control.

You can define custom exceptions like `BadRequestException` and `NotFoundException`. They correspond with the HTTP status code you would return from the API.

Here's a `BadRequestExceptionHandler` implementation:

```cs
internal sealed class BadRequestExceptionHandler : IExceptionHandler
{
    private readonly ILogger<BadRequestExceptionHandler> _logger;

    public BadRequestExceptionHandler(ILogger<BadRequestExceptionHandler> logger)
    {
        _logger = logger;
    }

    public async ValueTask<bool> TryHandleAsync(
        HttpContext httpContext,
        Exception exception,
        CancellationToken cancellationToken)
    {
        if (exception is not BadRequestException badRequestException)
        {
            return false;
        }

        _logger.LogError(
            badRequestException,
            "Exception occurred: {Message}",
            badRequestException.Message);

        var problemDetails = new ProblemDetails
        {
            Status = StatusCodes.Status400BadRequest,
            Title = "Bad Request",
            Detail = badRequestException.Message
        };

        httpContext.Response.StatusCode = problemDetails.Status.Value;

        await httpContext.Response
            .WriteAsJsonAsync(problemDetails, cancellationToken);

        return true;
    }
}
```

And here's a `NotFoundExceptionHandler` implementation:

```cs
internal sealed class NotFoundExceptionHandler : IExceptionHandler
{
    private readonly ILogger<NotFoundExceptionHandler> _logger;

    public NotFoundExceptionHandler(ILogger<NotFoundExceptionHandler> logger)
    {
        _logger = logger;
    }

    public async ValueTask<bool> TryHandleAsync(
        HttpContext httpContext,
        Exception exception,
        CancellationToken cancellationToken)
    {
        if (exception is not NotFoundException notFoundException)
        {
            return false;
        }

        _logger.LogError(
            notFoundException,
            "Exception occurred: {Message}",
            notFoundException.Message);

        var problemDetails = new ProblemDetails
        {
            Status = StatusCodes.Status404NotFound,
            Title = "Not Found",
            Detail = notFoundException.Message
        };

        httpContext.Response.StatusCode = problemDetails.Status.Value;

        await httpContext.Response
            .WriteAsJsonAsync(problemDetails, cancellationToken);

        return true;
    }
}
```

You also need to register both exception handlers by calling `AddExceptionHandler`:

```cs
builder.Services.AddExceptionHandler<BadRequestExceptionHandler>();
builder.Services.AddExceptionHandler<NotFoundExceptionHandler>();
```

The `BadRequestExceptionHandler` will execute first and try to handle the exception. If the exception isn't handled, `NotFoundExceptionHandler` will execute next and attempt to handle the exception.

---

## Takeaway

Using middleware for exception handling is an excellent solution in ASP.NET Core. However, it's great that we have new options using the `IExceptionHandler` interface. I will use the new approach in ASP.NET Core 8 projects.

I'm very much against using exceptions for flow control. Exceptions are a last resort when you can't continue normal application execution. The [**Result pattern**](/explore/articles/milanjovanovic.tech/functional-error-handling-in-dotnet-with-the-result-pattern.md) is a better alternative.

Exceptions are also [extremely expensive (<FontIcon icon="iconfont icon-github"/>`dotnet/aspnetcore`)](https://github.com/dotnet/aspnetcore/issues/46280#issuecomment-1527898867), as David Fowler noted:

![](https://milanjovanovic.tech/blogs/mnw_066/fowler_comment.png?imwidth=3840)

If you want to get rid of exceptions in your code, [<FontIcon icon="fa-brands fa-youtube"/>**check out this video.**](https://youtu.be/WCCkEe_Hy2Y)

<VidStack src="youtube/WCCkEe_Hy2Y" />

Thanks for reading, and stay awesome!

---

<TagLinks />