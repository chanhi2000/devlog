---
lang: ko-KR
title: "The Right Way To Use HttpClient In .NET"
description: "Article(s) > The Right Way To Use HttpClient In .NET"
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
      content: "Article(s) > The Right Way To Use HttpClient In .NET"
    - property: og:description
      content: "The Right Way To Use HttpClient In .NET"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/the-right-way-to-use-httpclient-in-dotnet.html
prev: /programming/cs/articles/README.md
date: 2023-06-10
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_041.png
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
  name="The Right Way To Use HttpClient In .NET"
  desc="If you're building a .NET application, chances are high that you'll need to call an external API over HTTP. The easy way to make HTTP requests in .NET is to use the HttpClient to send those requests. And it's a great abstraction to work with, especially with the methods supporting JSON payloads and responses. Unfortunately, it's easy to misuse the HttpClient. Port exhaustion and DNS behavior are some of the most common problems."
  url="https://milanjovanovic.tech/blog/the-right-way-to-use-httpclient-in-dotnet/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_041.png"/>

<!-- TODO: 작성 -->

<!-- 
If you're building a **.NET** application, chances are high that you'll need to call an **external API** over **HTTP**.

The easy way to make HTTP requests in .NET is to use the `HttpClient` to send those requests. And it's a great abstraction to work with, especially with the methods supporting **JSON** payloads and responses.

Unfortunately, it's easy to misuse the `HttpClient`.

**Port exhaustion** and **DNS behavior** are some of the most common problems.

So here's what you need to know about working with `HttpClient`:

- How not to use `HttpClient`
- How to simplify configuration with `IHttpClientFactory`
- How to configure **typed clients**
- Why you should avoid **typed clients** in singleton services
- When to use which option

Let's dive in!

---

## The Naive Way To Use HttpClient

The simplest way to work with the `HttpClient` is to just create a new instance, set the required properties and use it to send requests.

What could possibly go wrong?

`HttpClient` instances are meant to be **long-lived**, and reused throughout the lifetime of the application.

Each instance uses its own **connection pool** for isolation purposes, but also to prevent **port exhaustion**. If a server is under high load, and your application is constantly creating new connections, it could lead to exhausting the available ports. This will cause an exception at runtime, when trying to send a request.

So how can you avoid this?

```cs
public class GitHubService
{
    private readonly GitHubSettings _settings;

    public GitHubService(IOptions<GitHubSettings> settings)
    {
        _settings = settings.Value;
    }

    public async Task<GitHubUser?> GetUserAsync(string username)
    {
        var client = new HttpClient();

        client.DefaultRequestHeaders.Add("Authorization", _settings.GitHubToken);
        client.DefaultRequestHeaders.Add("User-Agent", _settings.UserAgent);
        client.BaseAddress = new Uri("https://api.github.com");

        GitHubUser? user = await client
            .GetFromJsonAsync<GitHubUser>($"users/{username}");

        return user;
    }
}
```

---

## The Smart Way To Create HttpClient Using IHttpClientFactory

Instead of managing the `HttpClient` lifetime yourself, you can use an `IHttpClientFactory` to create the `HttpClient` instance.

Simply call the `CreateClient` method and use the returned `HttpClient` instance to send your HTTP requests.

Why is this a better approach?

The expensive part of the `HttpClient` is the actual message handler - `HttpMessageHandler`. Each `HttpMessageHandler` has an internal HTTP **connection pool** that can be reused.

The `IHttpClientFactory` will **cache** the `HttpMessageHandler` and reuse it when creating a new `HttpClient` instance.

An important note here is that `HttpClient` instances created by `IHttpClientFactory` are meant to be **short-lived**.

```cs
public class GitHubService
{
    private readonly GitHubSettings _settings;
    private readonly IHttpClientFactory _factory;

    public GitHubService(
        IOptions<GitHubSettings> settings,
        IHttpClientFactory factory)
    {
        _settings = settings.Value;
        _factory = factory;
    }

    public async Task<GitHubUser?> GetUserAsync(string username)
    {
        var client = _factory.CreateClient();

        client.DefaultRequestHeaders.Add("Authorization", _settings.GitHubToken);
        client.DefaultRequestHeaders.Add("User-Agent", _settings.UserAgent);
        client.BaseAddress = new Uri("https://api.github.com");

        GitHubUser? user = await client
            .GetFromJsonAsync<GitHubUser>($"users/{username}");

        return user;
    }
}
```

---

## Reducing Code Duplication With Named Clients

Using `IHttpClientFactory` will solve most of the issues of manually creating an `HttpClient`. However, we still need to configure the default request parameters every time we obtain a new `HttpClient` from the `CreateClient` method.

You can configure a **named client** by calling the `AddHttpClient` method and passing in the desired name. The `AddHttpClient` accepts a delegate that you can use to configure the default parameters on the `HttpClient` instance.

```cs
services.AddHttpClient("github", (serviceProvider, client) =>
{
    var settings = serviceProvider
        .GetRequiredService<IOptions<GitHubSettings>>().Value;

    client.DefaultRequestHeaders.Add("Authorization", settings.GitHubToken);
    client.DefaultRequestHeaders.Add("User-Agent", settings.UserAgent);

    client.BaseAddress = new Uri("https://api.github.com");
});
```

The main difference is you now have to obtain the client by passing the name of the client to `CreateClient`.

But the use of the `HttpClient` looks a lot simpler:

```cs
public class GitHubService
{
    private readonly IHttpClientFactory _factory;

    public GitHubService(IHttpClientFactory factory)
    {
        _factory = factory;
    }

    public async Task<GitHubUser?> GetUserAsync(string username)
    {
        var client = _factory.CreateClient("github");

        GitHubUser? user = await client
            .GetFromJsonAsync<GitHubUser>($"users/{username}");

        return user;
    }
}
```

---

## Replacing Named Clients With Typed Clients

The downside of using **named clients** is having to resolve an `HttpClient` by passing in a name every time.

There's a better way to achieve the same behavior by configuring a **typed client**. You can do this by calling the `AddClient<TClient>` method and configuring the service that will consume the `HttpClient`.

Under the hood, this is still using a **named client**, where the name is the same as the type name.

And this will also register `GitHubService` with a **transient lifetime**.

```cs
services.AddHttpClient<GitHubService>((serviceProvider, client) =>
{
    var settings = serviceProvider
        .GetRequiredService<IOptions<GitHubSettings>>().Value;

    client.DefaultRequestHeaders.Add("Authorization", settings.GitHubToken);
    client.DefaultRequestHeaders.Add("User-Agent", settings.UserAgent);

    client.BaseAddress = new Uri("https://api.github.com");
});
```

Inside of `GitHubService`, you inject and use the typed `HttpClient` instance which will have all of the configuration applied.

No more dealing with `IHttpClientFactory` and creating `HttpClient` instances manually.

```cs
public class GitHubService
{
    private readonly HttpClient client;

    public GitHubService(HttpClient client)
    {
        _client = client;
    }

    public async Task<GitHubUser?> GetUserAsync(string username)
    {
        GitHubUser? user = await client
            .GetFromJsonAsync<GitHubUser>($"users/{username}");

        return user;
    }
}
```

---

## Why You Should Avoid Typed Clients In Singleton Services

You could run into a **problem** if you inject a **typed client** into a **singleton service**. Since the **typed client** is **transient**, injecting it in a **singleton service** will cause it to be cached for the lifetime of the **singleton service**.

This will prevent the **typed client** from reacting to DNS changes.

If you want to use a **typed client** in a **singleton service**, the recommened approach is using `SocketsHttpHandler` as the primary handler, and configuring the `PooledConnectionLifetime`.

Since the `SocketsHttpHandler` will handle connection pooling, you can disable recycling at the `IHttpClientFactory` level by setting `HandlerLifetime` to `Timeout.InfiniteTimeSpan`.

```cs
services.AddHttpClient<GitHubService>((serviceProvider, client) =>
{
    var settings = serviceProvider
        .GetRequiredService<IOptions<GitHubSettings>>().Value;

    client.DefaultRequestHeaders.Add("Authorization", settings.GitHubToken);
    client.DefaultRequestHeaders.Add("User-Agent", settings.UserAgent);

    client.BaseAddress = new Uri("https://api.github.com");
})
.ConfigurePrimaryHttpMessageHandler(() =>
{
    return new SocketsHttpHandler()
    {
        PooledConnectionLifetime = TimeSpan.FromMinutes(15)
    };
})
.SetHandlerLifetime(Timeout.InfiniteTimeSpan);
```

---

## When Should You Use Which Option?

I showed you a few possible options for working with `HttpClient`.

But which one should you use and when?

Microsoft was kind enough to provide us with a set of best practices and <a href="https://learn.microsoft.com/en-us/dotnet/fundamentals/networking/http/httpclient-guidelines#recommended-use">recommended use</a> for `HttpClient`.

- Use a `static` or **singleton** `HttpClient` instance with a `PooledConnectionLifetime` configured, since this solves both port exhaustion and tracking DNS changes
- Use `IHttpClientFactory` if you want to move the configuration to one place, but remember that clients are meant to be **short-lived**
- Use a **typed client** if you want the `IHttpClientFactory` configurability

I prefer working with a **typed client**, and I'm mindful of the fact that it's configured as a **transient service**.

Thanks for reading, and have an awesome Saturday.

-->

---

<TagLinks />