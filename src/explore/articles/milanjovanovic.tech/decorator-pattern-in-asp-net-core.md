---
lang: ko-KR
title: Decorator Pattern In ASP.NET Core
description: Article(s) > Decorator Pattern In ASP.NET Core
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
      content: Article(s) > Decorator Pattern In ASP.NET Core
    - property: og:description
      content: Decorator Pattern In ASP.NET Core
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/decorator-pattern-in-asp-net-core.html
prev: /programming/cs/articles/README.md
date: 2022-10-08
isOriginal: false
cover: https://www.milanjovanovic.tech/blog-covers/mnw_006.png
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
  name="Decorator Pattern In ASP.NET Core"
  desc="Let's imagine we have an existing Repository implementation, and we want to introduce caching to reduce the load on the database. How can we achieve this without changing anything about the Repository implementation? Decorator pattern is a structural design pattern that allows you to introduce new behavior to an existing class, without modifying the original class in any way. I'll show you how you can implement this with the ASP.NET Core DI container."
  url="https://milanjovanovic.tech/blog/decorator-pattern-in-asp-net-core/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://www.milanjovanovic.tech/blog-covers/mnw_006.png"/>

Let's imagine we have an existing `Repository` implementation, and we want to introduce caching to reduce the load on the database.

How can we achieve this without changing the original `Repository` implementation?

**Decorator pattern** is a structural design pattern that allows you to introduce new behavior to an existing class, without modifying the original class in any way.

I'll show you how you can implement this with the **ASP.NET Core DI** container.

---

## How To Implement The Decorator Pattern

We'll start with an existing `MemberRepository` implementation that implements the `IMemberRepository` interface.

It has only one method, which loads the `Member` from the database.

Here's what the implementation looks like:

```cs
public interface IMemberRepository
{
    Member GetById(int id);
}

public class MemberRepository : IMemberRepository
{
    private readonly DatabaseContext _dbContext;

    public MemberRepository(DatabaseContext dbContext)
    {
        _dbContext = dbContext;
    }

    public Member GetById(int id)
    {
        return _dbContext
            .Set<Member>()
            .First(member => member.Id == id);
    }
}
```

We want to introduce caching to the `MemberRepository` implementation without modifying the existing class.

To achieve this, we can use the **Decorator pattern** and create a wrapper around our `MemberRepository` implementation.

We can create a `CachingMemberRepository` that will have a dependency on `IMemberRepository`.

```cs
public class CachingMemberRepository : IMemberRepository
{
    private readonly IMemberRepository _repository;
    private readonly IMemoryCache _cache;

    public CachingMemberRepository(
        IMemberRepository repository,
        IMemoryCache cache)
    {
        _repository = repository;
        _cache = cache;
    }

    public Member GetById(int id)
    {
        string key = $"members-{id}";

        return _cache.GetOrCreate(
            key,
            entry => {
                entry.SetAbsouluteExpiration(
                    TimeSpan.FromMinutes(5));

                return _repository.GetById(id);
            });
    }
}
```

Now I'm going to show you the power of **ASP.NET Core DI**.

We will configure the `IMemberRepository` to resolve an instance of `CachingMemberRepository`, while it will receive the `MemberRepository` instance as its dependency.

---

## Configuring The Decorator In ASP .NET Core DI

For the DI container to be able to resolve `IMemberRepository` as `CachingMemberRepository`, we need to manually configure the service.

We can use the overload that exposes a service provider, that we will use to resolve the services required to construct a `MemberRepository`.

Here's what the configuration would look like:

```cs
services.AddScoped<IMemberRepository>(provider => {
    var context = provider.GetService<DatabaseContext>();
    var cache = provider.GetService<IMemoryCache>();

    return new CachingRepository(
         new MemberRepository(context),
         cache);
});
```

Now you can inject the `IMemberRepository`, and the DI will be able to resolve an instance of `CachingMemberRepository`.

---

## Configuring The Decorator With Scrutor

If the previous approach seems *cumbersome* to you and like a lot of manual work - that's because it is.

However, there is a simpler way to achieve the same behavior.

We can use the [Scrutor (<FontIcon icon="iconfont icon-github"/>`khellang/Scrutor`)](https://github.com/khellang/Scrutor) library to register the decorator:

```cs
services.AddScoped<IMemberRepository, MemberRepository>();

services.Decorate<IMemberRepository, CachingMemberRepository>();
```

[Scrutor (<FontIcon icon="iconfont icon-github"/>`khellang/Scrutor`)](https://github.com/khellang/Scrutor) exposes the `Decorate` method. The call to `Decorate` will register the `CachingMemberRepository` while ensuring that it receives the expected `MemberRepository` instance as its dependency.

I think this approach is much simpler, and it's what I use in my projects.

---

<TagLinks />