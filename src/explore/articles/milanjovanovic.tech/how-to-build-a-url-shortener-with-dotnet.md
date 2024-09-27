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

A **URL shortener** is a simple yet powerful tool that converts long URLs into more manageable, shorter versions. This is particularly useful for sharing links on platforms with character limits or improving user experience by reducing clutter. Two popular URL shorteners are [<FontIcon icon="fas fa-globe"/>Bitly](https://bitly.com/) and [<FontIcon icon="fas fa-globe"/>TinyURL](https://tinyurl.com/app). Designing a URL shortener is an interesting challenge with fun problems to solve.

But how would you build a URL shortener in .NET?

URL shorteners have two core functionalities:

- Generating a unique code for a given URL
- Redirecting users who access the short link to the original URL

Today, I'll guide you through the design, implementation, and considerations for creating your URL shortener.

---

## URL Shortener System Design

Here's the high-level system design for our URL shortener. We want to expose two endpoints. One to shorten a long URL and the other to redirect users based on a shortened URL. The shortened URLs are stored in a [<FontIcon icon="iconfont icon-postgresql"/>PostgreSQL](https://postgresql.org/) database in this example. We can introduce a distributed cache like [<FontIcon icon="iconfont icon-redis"/>Redis](https://redis.io/) to the system to improve read performance.

![URL shortener system design. It contains two API endpoints, a PostgreSQL database, and a Redis cache.](https://milanjovanovic.tech/blogs/mnw_074/url_shortener.png?imwidth=3840)

We first need to ensure a large number of short URLs. We're going to assign a unique code to each long URL, and use it to generate the shortened URL. The unique code length and set of characters determine how many short URLs the system can generate. We will discuss this in more detail when we implement unique code generation.

We're going to use the random code generation strategy. It's straightforward to implement and has an acceptably low rate of collisions. The trade-off we're making is increased latency, but we will also explore other options.

---

## The Data Model

Let's start by figuring out what we will store in the database. Our data model is straightforward. We have a `ShortenedUrl` class representing the URLs stored in our system:

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

This class includes properties for the original URL (`LongUrl`), the shortened URL (`ShortUrl`), and a unique code (`Code`) that represents the shortened URL. The `Id` and `CreatedOnUtc` fields are used for database and tracking purposes. The users will send the unique `Code` to our system, which will try to find a matching `LongUrl` and redirect them.

In addition, we will also define an EF `ApplicationDbContext` class, which is responsible for configuring our entity and setting up our database context. I'm doing two things here to improve performance:

- Configuring the `Code` maximum length with `HasMaxLength`
- Defining a unique index on the `Code` column

A unique index shields us from concurrency conflicts, so we will never have duplicate `Code` values persisted in the database. Setting the maximum length for this column saves storage space, and it's a requirement for indexing string columns in some databases.

Note that some databases treat strings in a case-insensitive way. This severely reduces the number of available short URLs. You want to configure the database to treat the unique code in a case-sensitive way.

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

## Unique Code Generation

The most crucial part of our URL shortener is generating a unique code for each URL. There are a few different algorithms you can choose to implement this. We want an even distribution of unique codes across all possible values. This helps to reduce potential collisions.

I will implement a random, unique code generator with a predefined alphabet. It's simple to implement, and the chance of collision is relatively low. Still, there are more performant solutions than this, but more on this later.

Let's define a `ShortLinkSettings` class that contains two constants. One is for defining the length of the unqualified code we will generate. The other constant is the alphabet we will use to generate the random code.

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

Now, let's implement our `UrlShorteningService`, which handles generating unique codes. This service generates a random string of the specified length using our predefined alphabet. It checks against the database to ensure uniqueness.

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

### Downsides and Improvement Points

The downside of this implementation is increased latency because we're checking each code we generate against the database. An improvement point could be generating the unique codes in the database ahead of time.

Another improvement point could be using a fixed number of iterations instead of an infinite loop. In case of multiple collisions in a row, the current implementation would continue until a unique value is found. Consider throwing an exception instead after a few collisions in a row.

---

## URL Shortening

Now that our core business logic is ready, we can expose an endpoint to shorten URLs. We can use a simple Minimal API endpoint.

This endpoint accepts a URL, validates it, and then uses the `UrlShorteningService` to create a shortened URL, which is then saved to the database. We return the full shortened URL to the client.

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

There is a minor [race condition](/explore/articles/milanjovanovic.tech/solving-race-conditions-with-ef-core-optimistic-locking.md) here, as we generate a unique code first and then insert it into the database. A concurrent request could generate the same unique code and insert it into the database before we complete our transaction. However, the chances of this happening are low, so I decided not to handle that case.

Remember that the unique index in the database is still guarding us against duplicate values.

---

## URL Redirection

The second use case for a URL shortener is redirection when accessing a shortened URL.

We will expose another Minimal API endpoint for this feature. The endpoint will accept a unique code, find the respective shortened URL, and redirect the user to the original long URL. You can implement additional validation for the specified code before checking if there's a shortened URL in the database.

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

This endpoint looks up the code in the database and, if found, redirects the user to the original long URL. The response will have a [<FontIcon icon="fas fa-globe"/>302 (Found) status code](https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3) per the HTTP standards.

---

## URL Shortener Improvement Points

While our basic URL shortener is functional, there are several areas we can improve:

- **Caching**: Implement caching to reduce database load for frequently accessed URLs.
- **Horizontal Scaling**: Design the system to scale horizontally to handle increased load.
- **Data Sharding**: Implement data sharding to distribute data across multiple databases.
- **Analytics**: Introduce analytics to track URL usage and expose reports to users.
- **User Accounts**: Allow users to create accounts to manage their URLs.

We've covered the key components of building a URL shortener using .NET.
You can take this further and implement the improvements points for a more robust solution.

If you want to see me build this from scratch, here's a [<FontIcon icon="fa-brands fa-youtube"/>video tutorial on YouTube](https://youtu.be/2UoA_PoEvuA).

That's all for today.

See you next week.

---

<TagLinks />