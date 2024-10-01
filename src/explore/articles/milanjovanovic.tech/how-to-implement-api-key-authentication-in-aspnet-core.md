---
lang: ko-KR
title: How To Implement API Key Authentication In ASP.NET Core
description: Article(s) > How To Implement API Key Authentication In ASP.NET Core
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
      content: Article(s) > How To Implement API Key Authentication In ASP.NET Core
    - property: og:description
      content: How To Implement API Key Authentication In ASP.NET Core
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/csharp-yield-return-statement.html
prev: /programming/cs/articles/README.md
date: 2023-01-28
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_022.png
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
  name="How To Implement API Key Authentication In ASP.NET Core"
  desc="In this week's newsletter I want to show you how to implement API Key authentication in ASP.NET Core. This authentication approach uses an API Key to authenticate the client of an API. You can pass the API Key to the API in a few ways, such as through the query string or a request header. I will show you how to implement API Key authentication where the API key is passed in a request header. But the implementation would be similar if we were to use any other approach. When would you want to use API Key authentication? This kind of authentication mechanism is common in Server-to-Server (S2S) communication. When your API serves request for other server-side applications to consume and integrate with. It's less common in client-server communication scenarios."
  url="https://milanjovanovic.tech/blog/csharp-yield-return-statement/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_022.png"/>

In this week's newsletter I want to talk about the `yield` keyword in **C#**. I think it's a powerful **C#** feature and I wanted to highlight the benefits.

The `yield` keyword tells the compiler that the method in which it appears is an **iterator block**. An iterator block, or method, returns an `IEnumerable` as the result. And the `yield` keyword is used to return the values for the `IEnumerable`.

An interesting thing aboug `IEnumerable` is that it is lazily evaluted. Calling a method with an iterator block doesn't run any code. It's only when the `IEnumerable` is iterated over, or enumerated, that we get the actual values. I'll talk about this more later.

Let's see how we can start using the `yield` keyword!

---

## How To Use The Yield Keyword

The `yield` keyword on it's own doesn't do anything, you have to combine it with the `return` or `break` statement:

- `yield return`: provides the next value of the iterator
- `yield-break`: signals the end of iteration

In every project I worked on, there's a piece of code similar to the following. You create a list to hold the results, add elements to the list, and return the list in the end.

```cs
var engineers = GetSoftwareEngineers();

public IEnumerable<SoftwareEngineer> GetSoftwareEngineers()
{
    var result = new List<SoftwareEngineer>();

    for(var i = 0; i < 10; i++)
    {
        result.Add(new SoftwareEngineer
        {
            Id = i
        });
    }

    return result;
}
```

You can simplify the method using the `yield return` statement, and completely remove the intermediate list required to hold the results.

```cs
var engineers = GetSoftwareEngineers();

public IEnumerable<SoftwareEngineer> GetSoftwareEngineers()
{
    for(var i = 0; i < 10; i++)
    {
        yield return new SoftwareEngineer
        {
            Id = i
        };
    }
}
```

However, it's important to note these two implementation are fundamentally different from each other. In the first example, the entire list is populated and materialized. In the second example, the `IEnumerable` returned will not be materialized and you have to either iterate over it inside a `foreach` loop or call `ToList()`.

---

## Stopping Iteration With Yield Break

You can use the `yield break` statement to stop iteration and exit the iterator block. Typically you would do this when a certain condition is met, or you only want to return a specific set of values from the iterator block.

Here's an example where this would be useful:

```cs
Console.WriteLine(string.Join(", ", TakeWhilePositive(new[] { 1, 2, -3, 4 })));
// Output: 1, 2

public IEnumerable<int> TakeWhilePositive(IEnumerable<int> numbers)
{
    foreach(int num in numbers)
    {
        if (num > 0)
        {
            yield return num;
        }
        else
        {
            yield break;
        }
    }
}
```

---

## Working With IAsyncEnumerable

In **C# 8** we got the `IAsyncEnumerable` type which allows us to iterate over a collection asynchronously with the `yield` statement.

For example, this can be useful when you want to call a thid-party API multiple times to fetch some data. A common situation is when you get a list of users from the database, and then have to call an external storage service to get profile picture information.

Without `IAsyncEnumerable` you would have to do something like this:

```cs
public async Task<IEnumerable<User>> GetUsersAsync()
{
    var users = await GetUsersFromDbAsync();

    foreach(var user in users)
    {
        user.ProfileImage = await GetProfileImageAsync(user.Id);
    }

    return users;
}

// And you would call the method like this.
var users = await GetUsersAsync();

foreach(var user in users)
{
    Console.WriteLine(user);
}
```

Now, consider this same example with the use of `IAsyncEnumerable`:

```cs
public async IAsyncEnumerable<User> GetUsersAsync()
{
    var users = await GetUsersFromDbAsync();

    foreach(var user in users)
    {
        user.ProfileImage = await GetProfileImageAsync(user.Id);

        yield return user;
    }
}

// And you would call the method like this.
await foreach(var user in GetUsersAsync())
{
    Console.WriteLine(user);
}
```

The second implementation will iterate over the users returned from the database when they are yielded by the `IAsyncEnumerable`.

---

## When Should I Use Yield?

I've found a few interesting practical applications for the `yield` keyword. One example is when implementing Domain-Driven Design value objects.

Value objects need to support structural equality. They need to implement a method that returns all of the equality components. Here's an example of that using the `yield return` statement:

```cs
public class Address
{
    public string City { get; init; }

    public string Street { get; init; }

    public string Zip { get; init; }

    public string Country { get; init; }

    public IEnumerable<object> GetEqualityComponents()
    {
        yield return City;
        yield return Street;
        yield return Zip;
        yield return Country;
    }
}
```

---

<TagLinks />