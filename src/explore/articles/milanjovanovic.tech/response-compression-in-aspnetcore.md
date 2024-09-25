---
lang: ko-KR
title: "Response Compression In ASP.NET Core"
description: "Article(s) > Response Compression In ASP.NET Core"
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
      content: "Article(s) > Response Compression In ASP.NET Core"
    - property: og:description
      content: "Response Compression In ASP.NET Core"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/response-compression-in-aspnetcore.html
prev: /programming/cs/articles/README.md
date: 2023-07-01
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_044.png
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
  name="Response Compression In ASP.NET Core"
  desc="Reducing the size of your API responses can noticeably improve the performance of your application. And since network bandwidth is a limited resource, you should at least consider the benefits of response compression."
  url="https://milanjovanovic.tech/blog/response-compression-in-aspnetcore/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_044.png"/>

Reducing the size of your API responses can noticeably improve the performance of your application.

And since network bandwidth is a limited resource, you should at least consider the benefits of **response compression**.

Here's what you'll learn in this week's newsletter:

- How to configure **response compression** in .NET
- Server-based vs. application-based compression
- Possible **security risks** and **mitigation strategies**
- How to configure the available compression providers
- How much network bandwidth you could be saving

Let's get started!

---

## Configuring Response Compression

Using **response compression** in an .NET applications is remarkably easy.

You only have to call these two methods:

- `AddResponseCompression` - to configure the default services for response compression
- `UseResponseCompression` - to add the response compression middleware to the request pipeline

The `UseResponseCompression` method should be called before any middleware that compresses responses.

**Response compression** isn't turned on by default for HTTPS, so you have to enable it by setting `EnableForHttps` to `true`.

```cs{3-6,10}
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddResponseCompression(options =>
{
    options.EnableForHttps = true;
});

var app = builder.Build();

app.UseResponseCompression();

app.MapGet("/", () => "This response will be compressed 📦");

app.Run();
```

It really is that simple.

But...

---

## When Should You Use Response Compression?

Ideally, you want to be using **server-based response compression** if your application server supports it.

Because the middleware performs **response compression** at the **application level**, it will typically have worse performance.

If you are hosting your application and you can't use server-based compression, then using the response compression middleware is justified.

One more concern should be **security**, because using **response compression over HTTPS** can expose you to [<FontIcon icon="fa-brands fa-wikipedia-w"/>CRIME](https://en.wikipedia.org/wiki/CRIME) and [<FontIcon icon="fa-brands fa-wikipedia-w"/>BREACH](https://en.wikipedia.org/wiki/BREACH) attacks

Here's what you can do to improve security:

- You can mitigate CRIME and BREACH attacks by introducing **anti-forgery tokens** in ASP.NET Core
- Don't send application secrets as part of the request body
- Implement a [**rate limiter**](/explore/articles/milanjovanovic.tech/how-to-use-rate-limiting-in-aspnet-core.md)

---

## Configuring Compression Providers

There are two compression providers added by default when you call `AddResponseCompression`:

- `BrotliCompressionProvider`
- `GzipCompressionProvider`

You can further customize the available providers by adding custom compression providers if you want to.

Compression will default to **Brotli** compression when it's supported by the client. Otherwise, it will default to **Gzip** if that is the supported compression format.

```cs{4-6}
builder.Services.AddResponseCompression(options =>
{
    options.EnableForHttps = true;
    options.Providers.Add<BrotliCompressionProvider>();
    options.Providers.Add<GzipCompressionProvider>();
    options.MimeTypes = ResponseCompressionDefaults.MimeTypes;
});
```

The interesting thing is you can configure the `CompressionLevel` for the **Brotli** and **Gzip** compression providers.

There are four possible values:

- `Optimal` - tries to balance response size and compression speed
- `Fastest` - sacrifices optimal compression for improved speed
- `NoCompression` - self explanatory
- `SmallestSize` - sacrifices compression speed to make the output as small as possible

The default value is `CompressionLevel.Fastest`.

```cs
builder.Services.Configure<BrotliCompressionProviderOptions>(options =>
{
    options.Level = CompressionLevel.Optimal;
});

builder.Services.Configure<GzipCompressionProviderOptions>(options =>
{
    options.Level = CompressionLevel.SmallestSize;
});
```

---

## How Much Can You Save?

Let's find out how much network bandwidth we can save by using **response compression**.

Here's a minimal API endpoint returning a list of `Message` objects:

```cs
app.MapGet("/", () => Results.Ok(
    Enumerable
        .Range(1, 100)
        .Select(num => new Message
        {
            Id = num,
            Content = $"This is the message #{num}"
        })));
```

And here are the results with different providers and compression levels:

- No compression - 4.5kB
- **Gzip** + `CompressionLevel.Fastest` - 569B
- **Gzip** + `CompressionLevel.SmallestSize` - 539B
- **Gzip** + `CompressionLevel.Optimal` - 554B
- **Brotli** + `CompressionLevel.Fastest` - 400B
- **Brotli** + `CompressionLevel.SmallestSize` - 296B
- **Brotli** + `CompressionLevel.Optimal` - 319B

**Brotli** is the clear winner, which is why it's the **default compression provider**.

In the best case scenario, you can reduce the response size by ~93.5%. Multiply this by the number of requests you're serving daily, and then you can begin to estimate the possible network savings.

One more thing I noticed is that using `CompressionLevel.SmallestSize` has a noticeable **negative impact** on response time. I can't say this was surprising, so I suggest to simply keep using the default compression level.

---

## In Summary

[<FontIcon icon="fa-brands fa-microsoft"/>Response compression](https://learn.microsoft.com/en-us/aspnet/core/performance/response-compression?view=aspnetcore-7.0) is an interesting technique to improve API performance and reduce network costs.

Ideally, you'd want to be using **server-based response compression** if it's supported by your application server. If that's not the case, **application-based compression** is available in .NET with the response compression middleware.

What's the cost of response compression?

It will increase the CPU load, and can expose some security risks over HTTPS, but there are ways to mitigate this.

In my experience, the **default configuration values** for the compression provider and compression level give excellent results.

That's all for this week.

See you next Saturday.

::: info Today's action step

To see the value of response compression, I suggest enabling it in your application and examining the changes in response size. You can try the different compression providers by varying the `Accept-Encoding` header, and also configure different compression levels in your application.

:::

---

<TagLinks />