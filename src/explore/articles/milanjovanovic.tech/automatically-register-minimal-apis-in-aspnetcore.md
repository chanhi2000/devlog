---
lang: ko-KR
title: Automatically Register Minimal APIs in ASP.NET Core
description: Article(s) > Automatically Register Minimal APIs in ASP.NET Core
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
      content: Article(s) > Automatically Register Minimal APIs in ASP.NET Core
    - property: og:description
      content: Automatically Register Minimal APIs in ASP.NET Core
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/automatically-register-minimal-apis-in-aspnetcore.html
prev: /programming/cs/articles/README.md
date: 2024-02-24
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_078.png
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
  name="Automatically Register Minimal APIs in ASP.NET Core"
  desc="In ASP.NET Core applications using Minimal APIs, registering each API endpoint with app.MapGet, app.MapPost, etc. can introduce repetitive code. Today, I'll show you how to automatically register your Minimal APIs with a simple abstraction."
  url="https://milanjovanovic.tech/blog/automatically-register-minimal-apis-in-aspnetcore/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_078.png"/>

In ASP.NET Core applications using [<FontIcon icon="fa-brands fa-microsoft"/>Minimal APIs](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis/overview?view=aspnetcore-8.0), registering each API endpoint with `app.MapGet`, `app.MapPost`, etc., can introduce repetitive code. As projects grow, this manual process becomes increasingly time-consuming and prone to maintenance headaches.

You can try grouping the Minimal API endpoints using extension methods so as not to clutter the `Program` file. This approach scales well as the project grows. However, it feels like reinventing controllers.

I like to view each Minimal API endpoint as a standalone component.

The vision I have in my mind aligns nicely with the concept of [vertical slices.](/explore/articles/milanjovanovic.tech/vertical-slice-architecture.md)

Today, I'll show you how to register your Minimal APIs automatically with a simple abstraction.

---

## The Endpoint Comes First

Automatically registering Minimal APIs significantly reduces boilerplate, streamlining development. It makes your codebase more concise and improves maintainability by establishing a centralized registration mechanism.

Let's create a simple `IEndpoint` abstraction to represent a single endpoint.

The `MapEndpoint` accepts an `IEndpointRouteBuilder`, which we can use to call `MapGet`, `MapPost`, etc.

```cs
public interface IEndpoint
{
    void MapEndpoint(IEndpointRouteBuilder app);
}
```

Each `IEndpoint` implementation should contain exactly one Minimal API endpoint definition.

Nothing prevents you from registering multiple endpoints in the `MapEndpoint` method. But you (really) shouldn't.

Additionally, you could implement a code analyzer or [architecture test](/explore/articles/milanjovanovic.tech/enforcing-software-architecture-with-architecture-tests.md) to enforce this rule.

```cs
public class GetFollowerStats : IEndpoint
{
    public void MapEndpoint(IEndpointRouteBuilder app)
    {
        app.MapGet("users/{userId}/followers/stats", async (
            Guid userId,
            ISender sender) =>
        {
            var query = new GetFollowerStatsQuery(userId);

            Result<FollowerStatsResponse> result = await sender.Send(query);

            return result.Match(Results.Ok, CustomResults.Problem);
        })
        .WithTags(Tags.Users);
    }
}
```

---

## Sprinkle Some Reflection Magic

Reflection allows us to dynamically examine code at runtime. For Minimal API registration, we'll use reflection to scan our .NET assemblies and find classes that implement `IEndpoint`. Then, we will configure them as services with dependency injection.

The `Assembly` parameter should be the assembly that contains the `IEndpoint` implementations.
If you want to have endpoints in multiple assemblies (projects), you can easily extend this method to accept a collection.

```cs
public static IServiceCollection AddEndpoints(
    this IServiceCollection services,
    Assembly assembly)
{
    ServiceDescriptor[] serviceDescriptors = assembly
        .DefinedTypes
        .Where(type => type is { IsAbstract: false, IsInterface: false } &&
                       type.IsAssignableTo(typeof(IEndpoint)))
        .Select(type => ServiceDescriptor.Transient(typeof(IEndpoint), type))
        .ToArray();

    services.TryAddEnumerable(serviceDescriptors);

    return services;
}
```

We only need to call this method once from the `Program` file:

```cs
builder.Services.AddEndpoints(typeof(Program).Assembly);
```

---

## Registering Minimal APIs

The final step in our implementation is to register the endpoints automatically. We can create an extension method on the `WebApplication`, which lets us resolve services using the `IServiceProvider`.

We're looking for all registrations of the `IEndpoint` service. These will be the endpoint classes we can now register with the application by calling `MapEndpoint`.

I'm also adding an option to pass in a `RouteGroupBuilder` if you want to apply conventions to all endpoints. A great example is adding a route prefix, authentication, or [API versioning.](/explore/articles/milanjovanovic.tech/api-versioning-in-aspnetcore.md)

```cs
public static IApplicationBuilder MapEndpoints(
    this WebApplication app,
    RouteGroupBuilder? routeGroupBuilder = null)
{
    IEnumerable<IEndpoint> endpoints = app.Services
        .GetRequiredService<IEnumerable<IEndpoint>>();

    IEndpointRouteBuilder builder =
        routeGroupBuilder is null ? app : routeGroupBuilder;

    foreach (IEndpoint endpoint in endpoints)
    {
        endpoint.MapEndpoint(builder);
    }

    return app;
}
```

---

## Putting It All Together

Here's what the `Program` file could look like when we put it all together.

We're calling `AddEndpoints` to register the `IEndpoint` implementations.

Then, we're calling `MapEndpoints` to automatically register the Minimal APIs.

I'm also configuring a route prefix and API Versioning for each endpoint using a `RouteGroupBuilder`.

```cs{6,19}
WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddEndpoints(typeof(Program).Assembly);

WebApplication app = builder.Build();

ApiVersionSet apiVersionSet = app.NewApiVersionSet()
    .HasApiVersion(new ApiVersion(1))
    .ReportApiVersions()
    .Build();

RouteGroupBuilder versionedGroup = app
    .MapGroup("api/v{version:apiVersion}")
    .WithApiVersionSet(apiVersionSet);

app.MapEndpoints(versionedGroup);

app.Run();
```

---

## Takeaway

Automatic Minimal API registration with techniques like reflection can significantly improve developer efficiency and project maintainability.

While highly beneficial, it's important to acknowledge the potential **performance impact of reflection** on application startup.

So, an improvement point could be using source generators for pre-compiled registration logic.

A few alternatives worth exploring:

- [Extension methods](/explore/articles/milanjovanovic.tech/how-to-structure-minimal-apis.md)

<SiteInfo
  name="FastEndpoints"
  desc="FastEndpoints is a developer friendly alternative to Minimal APIs & MVC"
  url="https://fast-endpoints.com/"
  logo="https://fast-endpoints.com/favicon-32x32.png"
  preview="https://fast-endpoints.com/fe-og-image.png"/>

<SiteInfo
  name="CarterCommunity/Carter"
  desc="Carter is framework that is a thin layer of extension methods and functionality over ASP.NET Core allowing code to be more explicit and most importantly more enjoyable."
  url="https://github.com/CarterCommunity/Carter"
  logo="https://avatars.githubusercontent.com/u/37978301?s=200&v=4"
  preview="https://opengraph.githubassets.com/10fb2db9c9fb99b99f02c6e8a8081b695e614d84caddbc9c4d0d65f1606be886/CarterCommunity/Carter"/>

Hope this was helpful.

See you next week.

::: tips P.S.

Here's the complete source code for this article.

<SiteInfo
  name="m-jovanovic/minimal-endpoints"
  desc="Automatically register your Minimal API endpoints in ASP.NET Core."
  url="https://github.com/m-jovanovic/minimal-endpoints"
  logo="https://avatars.githubusercontent.com/u/34191235?v=4"
  preview="https://opengraph.githubassets.com/3f2a9903d4eead059f8e20a6450236d6a19784ab20649c2980fab9759bd6edd9/m-jovanovic/minimal-endpoints"/>

:::

---

<TagLinks />