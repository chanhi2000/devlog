---
lang: ko-KR
title: Improving ASP.NET Core Dependency Injection With Scrutor
description: Article(s) > Improving ASP.NET Core Dependency Injection With Scrutor
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
      content: Article(s) > Improving ASP.NET Core Dependency Injection With Scrutor
    - property: og:description
      content: Improving ASP.NET Core Dependency Injection With Scrutor
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/improving-aspnetcore-dependency-injection-with-scrutor.html
prev: /programming/cs/articles/README.md
date: 2023-10-14
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_059.png
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
  name="Improving ASP.NET Core Dependency Injection With Scrutor"
  desc="Dependency injection (DI) is one of the most exciting features of ASP.NET Core. It helps us build more testable and maintainable applications. However, ASP.NET Core's built-in DI system sometimes needs a little help to achieve more advanced scenarios. So I want to introduce you to a powerful library for enhancing your ASP.NET Core DI - Scrutor."
  url="https://milanjovanovic.tech/blog/improving-aspnetcore-dependency-injection-with-scrutor/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_059.png"/>

Dependency injection (DI) is one of the most exciting features of ASP.NET Core. It helps us build more testable and maintainable applications. However, ASP.NET Core's built-in DI system sometimes needs a little help to achieve more advanced scenarios.

So I want to introduce you to a powerful library for enhancing your ASP.NET Core DI - [<FontIcon icon="fas fa-globe"/>Scrutor](https://nuget.org/packages/Scrutor).

If you're an ASP.NET Core developer, you're already familiar with Dependency Injection. It's a fundamental part of building modular and maintainable applications.

Let's explore how Scrutor can simplify and enhance your DI setup.

---

## What is Dependency Injection?

[<FontIcon icon="fa-brands fa-microsoft"/>Dependency Injection](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-7.0) is a software design pattern used in ASP.NET Core to achieve the [<FontIcon icon="fa-brands fa-microsoft"/>Inversion of Control (IOC)](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles#dependency-inversion) principle. This promotes loose coupling and makes your code more testable, maintainable, and extensible.

DI allows you to inject dependencies into your classes rather than create them within the class. The framework takes care of providing the required instances at runtime. It also manages the disposal of these dependencies based on the service lifetime.

Here's an example of combining constructor and method injection in a controller:

```cs
[ApiController]
[Route("api/activities")]
public class ActivitiesController : ControllerBase
{
    private readonly ILogger<ActivitiesController> _logger;

    // Constructor injection
    public ActivitiesController(ILogger<ActivitiesController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public async Task<IActionResult> Get(ISender sender) // Method injection
    {
        var activities = await sender.Send(new GetActivitiesQuery());

        return Ok(activities);
    }
}
```

---

## Service Lifetimes in ASP.NET Core

Before we dive into Scrutor, let's briefly discuss [<FontIcon icon="fa-brands fa-microsoft"/>service lifetimes in ASP.NET Core](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection#service-lifetimes). When you register a service in the DI container, you specify its lifetime. The service lifetime defines how long the DI container should maintain the service.

ASP.NET Core provides three main lifetimes:

- **Singleton**: A single instance of the service is created and reused throughout the application's lifetime.
- **Scoped**: A new instance is created for each scope (usually a web request). Services created in the same scope share the same instance.
- **Transient**: A new instance is created every time the service is requested.

Understanding service lifetimes is crucial when designing your application's architecture.

---

## What is Scrutor?

The [Scrutor library (<FontIcon icon="iconfont icon-github"/>`khellang/Scrutor`)](https://github.com/khellang/Scrutor) improves your dependency injection code by extending the existing features from `Microsoft.Extensions.DependencyInjection`.

These extensions add support for advanced assembly scanning and service decoration.

To get started using Scrutor, you need to install the NuGet package:

```pwsh
Install-Package Scrutor
```

---

## Assembly Scanning With Scrutor

One of the most powerful features of Scrutor is its ability to perform assembly scanning. Rather than manually registering each service, Scrutor allows you to scan your assemblies for types that should be registered with the DI container. This can significantly reduce the boilerplate code required for service registration, making your code cleaner and more maintainable.

The entry point for assembly scanning is the `Scan` method, which accepts a delegate to define the DI setup.

Here's an example of scanning two assemblies and registering the classes inside as scoped services:

```cs
builder.Services.Scan(selector => selector
    .FromAssemblies(
        typeof(PersistenceAssembly).Assembly,
        typeof(InfrastructureAssembly).Assembly)
    .AddClasses(publicOnly: false)
    .UsingRegistrationStrategy(RegistrationStrategy.Skip)
    .AsMatchingInterface()
    .WithScopedLifetime());
```

Let's unpack what's happening here:

- `FromAssemblies` - allows you to specify which assemblies to scan
- `AddClasses` - adds the classes from the selected assemblies
- `UsingRegistrationStrategy` - defines which `RegistrationStrategy` to use
- `AsMatchingInterface` - registers the types as matching interfaces (`ClassName` → `IClassName`)
- `WithScopedLifetime` - registers the types with a scoped service lifetime

There are three values for `RegistrationStrategy` you can use:

- `RegistrationStrategy.Skip` - skips registrations if service already exists
- `RegistrationStrategy.Append`- appends a new registration for existing services
- `RegistrationStrategy.Throw`- throws when trying to register an existing service

You can also specify a filter to `AddClasses` to select specific types you want to configure.
Here's an example of registering repository implementations:

```cs
services.Scan(scan => scan
    .FromAssemblies(typeof(PersistenceAssembly).Assembly)
    .AddClasses(
        filter => filter.Where(x => x.Name.EndsWith("Repository")),
        publicOnly: false)
    .UsingRegistrationStrategy(RegistrationStrategy.Throw)
    .AsMatchingInterface()
    .WithScopedLifetime());
```

---

## Service Decoration With Scrutor

Service decoration is another valuable feature offered by Scrutor. It enables you to modify or extend services during registration without changing the original implementation.

This is incredibly useful when adding cross-cutting concerns or other modifications to services without altering their core functionality. For example, you can implement a [caching decorator for repositories](/explore/articles/milanjovanovic.tech/decorator-pattern-in-asp-net-core.md).

Here's how you can configure a decorator with Scrutor's `Decorate` method:

```cs
services.AddScoped<IActivitiesRepository, ActivitiesRepository>();

services.Decorate<IActivitiesRepository, PermissionActivitiesRepository>();
```

It will decorate the `ActivitiesRepository` service using the `PermissionActivitiesRepository`. This also means that `PermissionActivitiesRepository` can inject an `IActivitiesRepository` instance, and at runtime, this is resolved as `ActivitiesRepository`.

Here's how you can implement the `PermissionActivitiesRepository`:

```cs{3,7,21}
public class PermissionActivitiesRepository : IActivitiesRepository
{
    private readonly IActivitiesRepository _decorated;
    private readonly IPermissionChecker _permissionChecker;

    public PermissionActivitiesRepository(
        IActivitiesRepository decorated,
        IPermissionChecker permissionChecker)
    {
        _decorated = decorated;
        _permissionChecker = permissionChecker;
    }

    public List<Activity> Get()
    {
        if (!_permissionChecker.HasPermission(Permissions.FetchActivities))
        {
            return new();
        }

        return _decorated.Get();
    }
}
```

---

## Takeaway

Scrutor can improve your ASP.NET Core DI by simplifying service registration through assembly scanning and enabling service decoration. You can use Scrutor's capabilities to write cleaner, more maintainable, and flexible DI code while reducing the complexity of your startup configuration.

Assembly scanning can reduce the boilerplate code required for service registration. It also allows you to create custom conventions for registering services.

Service decoration has been a real game-changer for me. It's the simplest way to introduce cross-cutting concerns in your application. For example, I used to add an idempotency check before handling events.

Hope this was valuable.

Stay awesome!

---

<TagLinks />