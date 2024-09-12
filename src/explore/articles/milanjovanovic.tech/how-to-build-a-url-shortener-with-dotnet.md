---
lang: ko-KR
title: How to Build a URL Shortener With .NET
description: Article(s) > How to Build a URL Shortener With .NET
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
      content: Article(s) > How to Build a URL Shortener With .NET
    - property: og:description
      content: How to Build a URL Shortener With .NET
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/how-to-build-a-url-shortener-with-dotnet.html
prev: /programming/cs/articles/README.md
date: 2024-02-03
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_074.png
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
  name="How to Build a URL Shortener With .NET"
  desc="A URL shortener is a simple yet powerful tool that converts long URLs into more manageable, shorter versions. Today, I'll guide you through the design, implementation, and considerations for creating your URL shortener in .NET"
  url="https://milanjovanovic.tech/blog/how-to-build-a-url-shortener-with-dotnet/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_074.png"/>

<!-- TODO: 작성 -->

<!-- 
A **URL shortener** is a simple yet powerful tool that converts long URLs into more manageable, shorter versions.
This is particularly useful for sharing links on platforms with character limits or improving user experience by reducing clutter.
Two popular URL shorteners are <a href="https://bitly.com/">Bitly</a> and <a href="https://tinyurl.com/app">TinyURL</a>.
Designing a URL shortener is an interesting challenge with fun problems to solve.

But how would you build a URL shortener in .NET?

URL shorteners have two core functionalities:

- Generating a unique code for a given URL
<li>Redirecting users who access the short link to the original URL

Today, I'll guide you through the design, implementation, and considerations for creating your URL shortener.

---

## url-shortener-system-design"><a href="#url-shortener-system-design">URL Shortener System Design

Here's the high-level system design for our URL shortener.
We want to expose two endpoints.
One to shorten a long URL and the other to redirect users based on a shortened URL.
The shortened URLs are stored in a <a href="https://www.postgresql.org/">PostgreSQL</a> database in this example.
We can introduce a distributed cache like <a href="https://redis.io/">Redis</a> to the system to improve read performance.

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%272856%27%20height=%271617%27/%3e"><img alt="URL shortener system design. It contains two API endpoints, a PostgreSQL database, and a Redis cache." src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="URL shortener system design. It contains two API endpoints, a PostgreSQL database, and a Redis cache." srcSet="/blogs/mnw_074/url_shortener.png?imwidth=3840 1x" src="/blogs/mnw_074/url_shortener.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>
We first need to ensure a large number of short URLs.
We're going to assign a unique code to each long URL, and use it to generate the shortened URL.
The unique code length and set of characters determine how many short URLs the system can generate.
We will discuss this in more detail when we implement unique code generation.

We're going to use the random code generation strategy.
It's straightforward to implement and has an acceptably low rate of collisions.
The trade-off we're making is increased latency, but we will also explore other options.

---

## the-data-model"><a href="#the-data-model">The Data Model

Let's start by figuring out what we will store in the database.
Our data model is straightforward.
We have a `ShortenedUrl` class representing the URLs stored in our system:

```cs
public class ShortenedUrl
{
    public Guid Id { get; set; }

    public string LongUrl { get; set; } = string.Empty;

    public string ShortUrl { get; set; } = string.Empty;

    public string Code { get; set; } = string.Empty;

    public DateTime CreatedOnUtc { get; set; }
}

```

This class includes properties for the original URL (`LongUrl`), the shortened URL (`ShortUrl`), and a unique code (`Code`) that represents the shortened URL.
The `Id` and `CreatedOnUtc` fields are used for database and tracking purposes.
The users will send the unique `Code` to our system, which will try to find a matching `LongUrl` and redirect them.

In addition, we will also define an EF `ApplicationDbContext` class, which is responsible for configuring our entity and setting up our database context.
I'm doing two things here to improve performance:

- Configuring the `Code` maximum length with `HasMaxLength`
<li>Defining a unique index on the `Code` column

A unique index shields us from concurrency conflicts, so we will never have duplicate `Code` values persisted in the database.
Setting the maximum length for this column saves storage space, and it's a requirement for indexing string columns in some databases.

Note that some databases treat strings in a case-insensitive way.
This severely reduces the number of available short URLs.
You want to configure the database to treat the unique code in a case-sensitive way.

```cs
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options)
        : base(options)
    {
    }

    public DbSet<ShortenedUrl> ShortenedUrls { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ShortenedUrl>(builder =>
        {
            builder
                .Property(shortenedUrl => shortenedUrl.Code)
                .HasMaxLength(ShortLinkSettings.Length);

            builder
                .HasIndex(shortenedUrl => shortenedUrl.Code)
                .IsUnique();
        });
    }
}

```

---

## unique-code-generation"><a href="#unique-code-generation">Unique Code Generation

The most crucial part of our URL shortener is generating a unique code for each URL.
There are a few different algorithms you can choose to implement this.
We want an even distribution of unique codes across all possible values.
This helps to reduce potential collisions.

I will implement a random, unique code generator with a predefined alphabet.
It's simple to implement, and the chance of collision is relatively low.
Still, there are more performant solutions than this, but more on this later.

Let's define a `ShortLinkSettings` class that contains two constants.
One is for defining the length of the unqualified code we will generate.
The other constant is the alphabet we will use to generate the random code.

```cs
public static class ShortLinkSettings
{
    public const int Length = 7;
    public const string Alphabet =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
}

```

The alphabet has `62` characters, which gives us `62^7` possible unique code combinations.

If you're wondering, this is `3,521,614,606,208` combinations.

Spelled out: three trillion, five hundred twenty-one billion, six hundred fourteen million, six hundred six thousand, two hundred eight.

Those are quite a few unique codes, which will be enough for our URL shortener.

Now, let's implement our `UrlShorteningService`, which handles generating unique codes.
This service generates a random string of the specified length using our predefined alphabet.
It checks against the database to ensure uniqueness.

```cs
public class UrlShorteningService(ApplicationDbContext dbContext)
{
    private readonly Random _random = new();

    public async Task<string> GenerateUniqueCode()
    {
        var codeChars = new char[ShortLinkSettings.Length];
        const int maxValue = ShortLinkSettings.Alphabet.Length;

        while (true)
        {
            for (var i = 0; i < ShortLinkSettings.Length; i++)
            {
                var randomIndex = _random.Next(maxValue);

                codeChars[i] = ShortLinkSettings.Alphabet[randomIndex];
            }

            var code = new string(codeChars);

            if (!await dbContext.ShortenedUrls.AnyAsync(s => s.Code == code))
            {
                return code;
            }
        }
    }
}

```

**Downsides and Improvement Points**

The downside of this implementation is increased latency because we're checking each code we generate against the database.
An improvement point could be generating the unique codes in the database ahead of time.

Another improvement point could be using a fixed number of iterations instead of an infinite loop.
In case of multiple collisions in a row, the current implementation would continue until a unique value is found.
Consider throwing an exception instead after a few collisions in a row.

---

## url-shortening"><a href="#url-shortening">URL Shortening

Now that our core business logic is ready, we can expose an endpoint to shorten URLs.
We can use a simple Minimal API endpoint.

This endpoint accepts a URL, validates it, and then uses the `UrlShorteningService` to create a shortened URL, which is then saved to the database.
We return the full shortened URL to the client.

```cs
public record ShortenUrlRequest(string Url);

app.MapPost("shorten", async (
    ShortenUrlRequest request,
    UrlShorteningService urlShorteningService,
    ApplicationDbContext dbContext,
    HttpContext httpContext) =>
{
    if (!Uri.TryCreate(request.Url, UriKind.Absolute, out _))
    {
        return Results.BadRequest("The specified URL is invalid.");
    }

    var code = await urlShorteningService.GenerateUniqueCode();

    var request = httpContext.Request;

    var shortenedUrl = new ShortenedUrl
    {
        Id = Guid.NewGuid(),
        LongUrl = request.Url,
        Code = code,
        ShortUrl = $"{request.Scheme}://{request.Host}/{code}",
        CreatedOnUtc = DateTime.UtcNow
    };

    dbContext.ShortenedUrls.Add(shortenedUrl);

    await dbContext.SaveChangesAsync();

    return Results.Ok(shortenedUrl.ShortUrl);
});

```

There is a minor <a href="solving-race-conditions-with-ef-core-optimistic-locking">race condition</a> here, as we generate a unique code first and then insert it into the database.
A concurrent request could generate the same unique code and insert it into the database before we complete our transaction.
However, the chances of this happening are low, so I decided not to handle that case.

Remember that the unique index in the database is still guarding us against duplicate values.

---

## url-redirection"><a href="#url-redirection">URL Redirection

The second use case for a URL shortener is redirection when accessing a shortened URL.

We will expose another Minimal API endpoint for this feature.
The endpoint will accept a unique code, find the respective shortened URL, and redirect the user to the original long URL.
You can implement additional validation for the specified code before checking if there's a shortened URL in the database.

```cs
app.MapGet("{code}", async (string code, ApplicationDbContext dbContext) =>
{
    var shortenedUrl = await dbContext
        .ShortenedUrls
        .SingleOrDefaultAsync(s => s.Code == code);

    if (shortenedUrl is null)
    {
        return Results.NotFound();
    }

    return Results.Redirect(shortenedUrl.LongUrl);
});

```

This endpoint looks up the code in the database and, if found, redirects the user to the original long URL.
The response will have a <a href="https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3">302 (Found) status code</a> per the HTTP standards.

---

## url-shortener-improvement-points"><a href="#url-shortener-improvement-points">URL Shortener Improvement Points

While our basic URL shortener is functional, there are several areas we can improve:

- **Caching**: Implement caching to reduce database load for frequently accessed URLs.
<li>**Horizontal Scaling**: Design the system to scale horizontally to handle increased load.
<li>**Data Sharding**: Implement data sharding to distribute data across multiple databases.
<li>**Analytics**: Introduce analytics to track URL usage and expose reports to users.
<li>**User Accounts**: Allow users to create accounts to manage their URLs.

We've covered the key components of building a URL shortener using .NET.
You can take this further and implement the improvements points for a more robust solution.

If you want to see me build this from scratch, here's a <a href="https://youtu.be/2UoA_PoEvuA">video tutorial on YouTube.</a>

That's all for today.

See you next week.

-->

---

<TagLinks />