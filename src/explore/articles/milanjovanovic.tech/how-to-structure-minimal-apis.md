---
lang: ko-KR
title: How To Structure Minimal APIs
description: Article(s) > How To Structure Minimal APIs
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
      content: Article(s) > How To Structure Minimal APIs
    - property: og:description
      content: How To Structure Minimal APIs
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/how-to-structure-minimal-apis.html
prev: /programming/cs/articles/README.md
date: 2022-12-10
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_015.png
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
  name="How To Structure Minimal APIs"
  desc="Did you know you can turn PostgreSQL into a fully-fledged Document database? Marten is a .NET library that allows developers to use the PostgreSQL database as both a document database and a fully-featured event store. You don't need to install anything else to be able to use PostgreSQL as a document database, outside of the Nuget pacakge. Marten relies on the JSONB support available since PostgreSQL 9.4. In this week's newsletter, I want to introduce you to the basics of working with Marten and show you how easy it is to get started."
  url="https://milanjovanovic.tech/blog/how-to-structure-minimal-apis/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_015.png"/>

<!-- TODO: 작성 -->

<!-- 
In this week's newsletter we are going to explore **Minimal APIs**,
which were introduced in **.NET 6**.

**Minimal APIs** were introduced to remove some of the ceremony
of creating traditional APIs with controllers.
To define an endpoint, you can use the new extension
methods, such as `MapGet` to define a **GET** endpoint.

I see one big issue with **Minimal APIs**, and that is the lack
of clear guidance around how to structure applications
built with **Minimal APIs**.

In this newsletter, I want to offer a few solutions for that problem.

Let's dive in.

---

## how-to-create-minimal-apis"><a href="#how-to-create-minimal-apis">How To Create Minimal APIs?

Let's define a simple **Minimal API** application with two endpoints.
We're going to create one `GET` endpoint for getting a list of products.
And one `POST` endpoint for saving a product to the database.

We're using the powerful **DI** feature that allows us to inject services
as expression arguments, which you can see in the two expressions below
where we are injecting the `AppDbContext`.

```cs
var builder = WebApplication.CreateBuilder(args);

// Configure EF and other services...

var app = builder.Build();

app.MapGet("/products", async (AppDbContext dbContext) =>
{
    return Results.Ok(await dbContext.Products.ToListAsync());
});

app.MapPost("/products", async (Product product, AppDbContext dbContext) =>
{
    dbContext.Products.Add(product);

    await dbContext.SaveChangesAsync();

    return Results.Ok(product);
});

app.Run();

```

And with this we have a functioning **Minimal API** that we can develop further
as we continue to add more endpoints.

---

## the-problem-with-maintaining-minimal-apis"><a href="#the-problem-with-maintaining-minimal-apis">The Problem With Maintaining Minimal APIs

There is one potential problem with structuring our **Minimal APIs** like
in the previous example. If we keep adding the **Minimal API** endpoints
in the same file, our API will become hard to maintain as it grows
in complexity. How can we solve the maintance problem with **Minimal APIs**?

One solution can be to use extension methods to encapsulate the
definiton of the **Minimal API** endpoints.

Here's an example of that:

```cs
public static class ProductsModule
{
    public static void RegisterProductsEndpoints(this IEndpointRouteBuilder  endpoints)
    {
        endpoints.MapGet("/products", async (AppDbContext dbContext) =>
        {
            return Results.Ok(await dbContext.Products.ToListAsync());
        });

        endpoints.MapPost("/products", async (Product product, AppDbContext dbContext) =>
        {
            dbContext.Products.Add(product);

            await dbContext.SaveChangesAsync();

            return Results.Ok(product);
        });
    }
}

```

And then inside of `Program` we need to register the endpoints:

```cs
app.RegisterProductsEndpoints();

```

You can see that this simplifies our **Minimal API** definition,
and we also have our endpoints grouped by feature in one place.
I think this improve the maintainability of **Minimal APIs**,
but it comes at a cost. And that cost is having to define
extension methods for each group of endpoints you want to encapsulate,
and then you have to remember to call that extensions method in `Program`.

Can we do better?

---

## structuring-minimal-api-projects-with-modules"><a href="#structuring-minimal-api-projects-with-modules">Structuring Minimal API Projects With Modules

I want to introduce you to an interesting open source library
called <a href="https://github.com/CarterCommunity/Carter">Carter</a>,
which has a concept of modules that we can use to group endpoints.

Here's how we can define our `ProductsModule` with **Carter**:

```cs
public class ProductsModule : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        app.MapGet("/products", async (AppDbContext dbContext) =>
        {
            return Results.Ok(await dbContext.Products.ToListAsync());
        });

        app.MapPost("/products", async (Product product, AppDbContext dbContext) =>
        {
            dbContext.Products.Add(product);

            await dbContext.SaveChangesAsync();

            return Results.Ok(product);
        });
    }
}

```

This takes care of configuring our **Minimal API** endpoints, but we still
need to tell the framework to use these endpoints. We have to slightly
modify the `Program` to register the required **Carter** services by
calling `AddCarter`, and also map our endpoints by calling `MapCarter`.

```cs
var builder = WebApplication.CreateBuilder(args);

// Configure EF and other services...

builder.Services.AddCarter();

var app = builder.Build();

app.MapCarter();

app.Run();

```

When we want to define additional **Minimal API** endpoints we just need to
implement a new `ICarterModule`, and register our endpoints. **Carter** will
automatically take care of registering the new endpoints after that.

---

## would-i-use-minimal-apis-in-a-real-project"><a href="#would-i-use-minimal-apis-in-a-real-project">Would I Use Minimal APIs In a Real Project?

I think **Minimal APIs** have evolved nicely since they were first introduced
in **.NET 6**. I would be careful with using them in very large applications,
but I'm definitely going to explore options for using them on smaller projects.

A good use case can be for building a microservice that has a limited
number of endpoints.

-->

---

<TagLinks />