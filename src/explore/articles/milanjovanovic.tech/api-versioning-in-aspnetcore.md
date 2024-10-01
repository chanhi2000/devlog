---
lang: ko-KR
title: API Versioning in ASP.NET Core
description: Article(s) > API Versioning in ASP.NET Core
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
      content: Article(s) > API Versioning in ASP.NET Core
    - property: og:description
      content: API Versioning in ASP.NET Core
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/api-versioning-in-aspnetcore.html
prev: /programming/cs/articles/README.md
date: 2023-12-30
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_070.png
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
  name="API Versioning in ASP.NET Core"
  desc="API versioning allows your API to evolve independently from the clients using it. I'll show you how to implement API versioning in ASP.NET Core."
  url="https://milanjovanovic.tech/blog/api-versioning-in-aspnetcore/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_070.png"/>

In the past year, I built and maintained a large public API. The API has dozens of integrations, serving mainly mobile applications.

When your API is serving so many clients, breaking changes are expensive.

So, everything I implemented on the public API had to be planned.

Adding a new field? Forget about it.

Renaming existing fields? Forget about it.

If I wanted to introduce breaking changes, I had to version the API.

Today, I'll show you how to implement API versioning in ASP.NET Core.

---

## Why You Need API Versioning

API versioning allows your API to evolve independently from the clients using it.

Introducing breaking changes to your API is a bad user experience. API versioning gives you a mechanism to avoid exposing breaking changes to clients. Instead of making a breaking change, you introduce a new API version.

What's the definition of a breaking change?

This isn't an exhaustive list, but a few examples of breaking changes are:

- Removing or renaming APIs or API parameters
- Changing the behavior of existing APIs
- Changing the API response contract
- Changing the API error codes

You can decide what a breaking change means for your API. For example, adding a new field to the response doesn't have to be a breaking change.

Let's see how to implement API versioning.

---

## Implementing API Versioning in ASP.NET Core

Let's start by installing three NuGet packages that we'll need to implement API versioning:

- `Asp.Versioning.Http`
- `Asp.Versioning.Mvc`
- `Asp.Versioning.Mvc.ApiExplorer`

```pwsh
Install-Package Asp.Versioning.Http # This is needed for Minimal APIs
Install-Package Asp.Versioning.Mvc # This is needed for Controllers
Install-Package Asp.Versioning.Mvc.ApiExplorer
```

This allows us to call `AddApiVersioning` and provide a delegate to configure the `ApiVersioningOptions`.

```cs
builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new ApiVersion(1);
    options.ReportApiVersions = true;
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ApiVersionReader = ApiVersionReader.Combine(
        new UrlSegmentApiVersionReader(),
        new HeaderApiVersionReader("X-Api-Version"));
})
.AddMvc() // This is needed for controllers
.AddApiExplorer(options =>
{
    options.GroupNameFormat = "'v'V";
    options.SubstituteApiVersionInUrl = true;
});
```

Here's the explanation for the `ApiVersioningOptions` properties:

- `DefaultApiVersion` - Sets the default API version. Typically, this will be `v1.0`.
- `ReportApiVersions` - Reports the supported API versions in the `api-supported-versions` response header.
- `AssumeDefaultVersionWhenUnspecified` - Uses the `DefaultApiVersion` when the client didn't provide an explicit version.
- `ApiVersionReader` - Configures how to read the API version specified by the client. The default value is `QueryStringApiVersionReader`.

The `AddApiExplorer` method is helpful if you are using Swagger. It will fix the endpoint routes and substitute the API version route parameter.

---

## Different Types of API Versioning

The most common ways to implement API versioning are:

- URL versioning: `https://localhost:5001/api/v1/workouts`
- Header versioning: `https://localhost:5001/api/workouts -H 'X-Api-Version: 1'`
- Query parameter versioning: `https://localhost:5001/api/workouts?api-version=1`

There are a few other ways to implement API versioning.
For example, using the `accept` or `content-type` headers.
But they aren't used often.

The `Asp.Versioning.Http` library has a few `IApiVersionReader` implementations:

- `UrlSegmentApiVersionReader`
- `HeaderApiVersionReader`
- `QueryStringApiVersionReader`
- `MediaTypeApiVersionReader`

[Microsoft's API versioning guidelines (<FontIcon icon="iconfont icon-github"/>`Microsoft/api-guidelines`)](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#12-versioning) suggest using URL or query string parameter versioning.

I use URL versioning almost exclusively in the applications I'm developing.

---

## Versioning Controllers

To implement API versioning in ASP.NET controllers, you have to decorate the controller with the `ApiVersion` attribute.

The `ApiVersion` attribute allows you to specify which API versions that `WorkoutsController` supports. In this case, the controller supports both `v1` and `v2`. You use the `MapToApiVersion` attribute on the endpoints to specify the concrete API version.

The route parameter `v{v:apiVersion}` lets you specify the API version using `v1` or `v2` in the URL.

```cs{1-2,7,14}
[ApiVersion(1)]
[ApiVersion(2)]
[ApiController]
[Route("api/v{v:apiVersion}/workouts")]
public class WorkoutsController : ControllerBase
{
    [MapToApiVersion(1)]
    [HttpGet("{workoutId}")]
    public IActionResult GetWorkoutV1(Guid workoutId)
    {
        return Ok(new GetWorkoutByIdQuery(workoutId).Handle());
    }

    [MapToApiVersion(2)]
    [HttpGet("{workoutId}")]
    public IActionResult GetWorkoutV2(Guid workoutId)
    {
        return Ok(new GetWorkoutByIdQuery(workoutId).Handle());
    }
}
```

---

## Deprecating API Versions

If you want to deprecate an old API version, you can set the `Deprecated` property on the `ApiVersion` attribute. The deprecated API versions will be reported using the `api-deprecated-versions` response header.

```cs{1}
[ApiVersion(1, Deprecated = true)]
[ApiVersion(2)]
[ApiController]
[Route("api/v{v:apiVersion}/workouts")]
public class WorkoutsController : ControllerBase
{
}
```

---

## Versioning Minimal APIs

Versioning Minimal APIs requires you to define an `ApiVersionSet`, which you'll pass to the endpoints.

- `NewApiVersionSet` - Creates a new `ApiVersionSetBuilder` that you can use to configure the `ApiVersionSet`.
- `HasApiVersion` - Indicates that the `ApiVersionSet` supports the specified `ApiVersion`.
- `ReportApiVersions`- Indicates that all APIs in the `ApiVersionSet` will report their versions.

After creating the `ApiVersionSet`, you must pass it to a Minimal API endpoint by calling `WithApiVersionSet`. You can map to an explicit API version by calling `MapToApiVersion`.

```cs{1,18-19}
ApiVersionSet apiVersionSet = app.NewApiVersionSet()
    .HasApiVersion(new ApiVersion(1))
    .HasApiVersion(new ApiVersion(2))
    .ReportApiVersions()
    .Build();

app.MapGet("api/v{version:apiVersion}/workouts/{workoutId}", async (
    Guid workoutId,
    ISender sender,
    CancellationToken ct) =>
{
    var query = new GetWorkoutByIdQuery(workoutId);

    Result<WorkoutResponse> result = await sender.Send(query, ct);

    return result.Match(Results.Ok, CustomResults.Problem);
})
.WithApiVersionSet(apiVersionSet)
.MapToApiVersion(1);
```

Specifying the `ApiVersionSet` for each Minimal API endpoint can be cumbersome.
So you can define a route group and set the `ApiVersionSet` only once.
Route groups are also practical because they allow you to specify the route prefix.

```cs{7-8}
ApiVersionSet apiVersionSet = app.NewApiVersionSet()
    .HasApiVersion(new ApiVersion(1))
    .ReportApiVersions()
    .Build();

RouteGroupBuilder group = app
    .MapGroup("api/v{version:apiVersion}")
    .WithApiVersionSet(apiVersionSet);

group.MapGet("workouts", ...);
group.MapGet("workouts/{workoutId}", ...);
```

---

## Takeaway

API versioning is one of the best practices for designing modern APIs. Consider implementing API versioning from the first release. This makes it easier for clients to support future API versions. And it gets your team used to managing breaking changes and versioning the API.

You can use the `Asp.Versioning.Http` library to add API versioning in ASP.NET Core. Define the supported API versions, and start using them in your endpoints.

Remember to agree as a team what represents a breaking change. This should be well documented in the team's API design guidelines.

My preferred way to implement API versioning is using URL versioning. It's simple and explicit.

And since this is the last issue for the year, I wish you a happy and prosperous new year.

Thanks for reading, and stay awesome!

---

<TagLinks />1