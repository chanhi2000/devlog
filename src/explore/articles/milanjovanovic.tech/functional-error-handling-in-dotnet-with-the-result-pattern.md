---
lang: ko-KR
title: Functional Error Handling in .NET With the Result Pattern
description: Article(s) > Functional Error Handling in .NET With the Result Pattern
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
      content: Article(s) > Functional Error Handling in .NET With the Result Pattern
    - property: og:description
      content: Functional Error Handling in .NET With the Result Pattern
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/functional-error-handling-in-dotnet-with-the-result-pattern.html
prev: /programming/cs/articles/README.md
date: 2023-10-28
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_061.png
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
  name="Functional Error Handling in .NET With the Result Pattern"
  desc="How should you handle errors in your code? This has been a topic of many discussions, and I want to share my opinion. One school of thought suggests using exceptions for flow control. This is not a good approach because it makes the code harder to reason about. The caller must know the implementation details and which exceptions to handle. Exceptions are for exceptional situations. Today, I want to show you how to implement error handling using the Result pattern. It's a functional approach to error handling, making your code more expressive."
  url="https://milanjovanovic.tech/blog/functional-error-handling-in-dotnet-with-the-result-pattern/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_061.png"/>

<!-- TODO: 작성 -->

<!-- 
How should you handle errors in your code?

This has been a topic of many discussions, and I want to share my opinion.

One school of thought suggests using exceptions for flow control.
This is not a good approach because it makes the code harder to reason about.
The caller must know the implementation details and which exceptions to handle.

Exceptions are for exceptional situations.

Today, I want to show you how to implement error handling using the **Result pattern.**

It's a functional approach to error handling, making your code more expressive.

---

## exceptions-for-flow-control"><a href="#exceptions-for-flow-control">Exceptions For Flow Control

Using exceptions for flow control is an approach to implement the **fail-fast** principle.

As soon as you encounter an error in the code, you throw an exception —
effectively terminating the method, and making the caller responsible for handling the exception.

The problem is the caller must know which exceptions to handle.
And this isn't obvious from the method signature alone.

Another common use case is throwing exceptions for validation errors.

Here's an example in the `FollowerService`:

```cs
public sealed class FollowerService
{
    private readonly IFollowerRepository _followerRepository;

    public FollowerService(IFollowerRepository followerRepository)
    {
        _followerRepository = followerRepository;
    }

    public async Task StartFollowingAsync(
        User user,
        User followed,
        DateTime createdOnUtc,
        CancellationToken cancellationToken = default)
    {
        if (user.Id == followed.Id)
        {
            throw new DomainException("Can't follow yourself");
        }

        if (!followed.HasPublicProfile)
        {
            throw new DomainException("Can't follow non-public profile");
        }

        if (await _followerRepository.IsAlreadyFollowingAsync(
                user.Id,
                followed.Id,
                cancellationToken))
        {
            throw new DomainException("Already following");
        }

        var follower = Follower.Create(user.Id, followed.Id, createdOnUtc);

        _followerRepository.Insert(follower);
    }
}

```

---

## use-exceptions-for-exceptional-situations"><a href="#use-exceptions-for-exceptional-situations">Use Exceptions for Exceptional Situations

A rule of thumb I follow is to use exceptions for exceptional situations.
Since you already expect potential errors, why not make it explicit?

You can group all application errors into two groups:

- Errors you know how to handle
<li>Errors you don't know how to handle

Exceptions are an excellent solution for the errors you don't know how to handle.
And you should catch and handle them at the lowest level possible.

What about the errors you know how to handle?

You can handle them in a functional way with the **Result pattern.**
It's explicit and clearly expresses the intent that the method can fail.
The drawback is the caller has to manually check if the operation failed.

---

## expressing-errors-using-the-result-pattern"><a href="#expressing-errors-using-the-result-pattern">Expressing Errors Using the Result Pattern

The first thing you will need is an `Error` class to represent application errors.

- `Code` - unique name for the error in the application
<li>`Description` - contains developer-friendly details about the error

```cs
public sealed record Error(string Code, string Description)
{
    public static readonly Error None = new(string.Empty, string.Empty);
}

```

Then, you can implement the `Result` class using the `Error` to describe the failure.
This implementation is very bare-bones, and you could add many more features.
In most cases, you also need a generic `Result<T>` class, which will wrap a value inside.

Here's what the `Result` class looks like:

```cs
public class Result
{
    private Result(bool isSuccess, Error error)
    {
        if (isSuccess && error != Error.None ||
            !isSuccess && error == Error.None)
        {
            throw new ArgumentException("Invalid error", nameof(error));
        }

        IsSuccess = isSuccess;
        Error = error;
    }

    public bool IsSuccess { get; }

    public bool IsFailure => !IsSuccess;

    public Error Error { get; }

    public static Result Success() => new(true, Error.None);

    public static Result Failure(Error error) => new(false, error);
}

```

The only way to create a `Result` instance is by using static methods:

- `Success` - creates a success result
<li>`Failure` - creates a failure result with the specified `Error`

If you want to avoid building your own `Result` class, take a look at the <a href="https://github.com/altmann/FluentResults">FluentResults</a> library.

---

## applying-the-result-pattern"><a href="#applying-the-result-pattern">Applying the Result Pattern

Now that we have the `Result` class let's see how to apply it in practice.

Here's a refactored version of the `FollowerService`.
Notice a few things:

- No more throwing exceptions
<li>The `Result` return type is explicit
<li>It's clear which errors the method returns

Another benefit of error handling using the **Result pattern** is that it's easier to test.

```cs
public sealed class FollowerService
{
    private readonly IFollowerRepository _followerRepository;

    public FollowerService(IFollowerRepository followerRepository)
    {
        _followerRepository = followerRepository;
    }

<span class="code-line highlight-line">    public async Task<Result> StartFollowingAsync(
        User user,
        User followed,
        DateTime utcNow,
        CancellationToken cancellationToken = default)
    {
        if (user.Id == followed.Id)
        {
<span class="code-line highlight-line">            return Result.Failure(FollowerErrors.SameUser);
        }

        if (!followed.HasPublicProfile)
        {
<span class="code-line highlight-line">            return Result.Failure(FollowerErrors.NonPublicProfile);
        }

        if (await _followerRepository.IsAlreadyFollowingAsync(
                user.Id,
                followed.Id,
                cancellationToken))
        {
<span class="code-line highlight-line">            return Result.Failure(FollowerErrors.AlreadyFollowing);
        }

        var follower = Follower.Create(user.Id, followed.Id, utcNow);

        _followerRepository.Insert(follower);

<span class="code-line highlight-line">        return Result.Success();
    }
}

```

---

## documenting-application-errors"><a href="#documenting-application-errors">Documenting Application Errors

You can use the `Error` class to document all possible errors in your application.

One approach is to create a static class called `Errors`.
It will have nested classes inside containing the specific errors.
The usage would look like `Errors.Followers.NonPublicProfile`.

However, the approach I like to use is to create a specific class containing the errors.

Here's the `FollowerErrors` class documenting the possible errors for the `Follower` entity:

```cs
public static class FollowerErrors
{
    public static readonly Error SameUser = new Error(
        "Followers.SameUser", "Can't follow yourself");

    public static readonly Error NonPublicProfile = new Error(
        "Followers.NonPublicProfile", "Can't follow non-public profiles");

    public static readonly Error AlreadyFollowing = new Error(
        "Followers.AlreadyFollowing", "Already following");
}

```

Instead of static fields, you can also use static methods returning an error.
You would call this method with a concrete argument to get an `Error` instance.

```cs
public static class FollowerErrors
{
    public static Error NotFound(Guid id) => new Error(
        "Followers.NotFound", $"The follower with Id '{id}' was not found");
}

```

---

## converting-results-into-api-responses"><a href="#converting-results-into-api-responses">Converting Results Into API Responses

The `Result` object will eventually reach the Minimal API (or controller) endpoint in ASP.NET Core.
Minimal APIs return an `IResult` response, and controllers return an `IActionResult` response.
Regardless, you must convert the `Result` instance into a valid API response.

The straightforward approach is checking the `Result` state and returning an HTTP response.
Here's an example where we check the `Result.IsFailure` flag:

```cs
app.MapPost(
    "users/{userId}/follow/{followedId}",
    (Guid userId, Guid followedId, FollowerService followerService) =>
    {
        var result = await followerService.StartFollowingAsync(
            userId,
            followedId,
            DateTime.UtcNow);

        if (result.IsFailure)
        {
            return Results.BadRequest(result.Error);
        }

        return Results.NoContent();
    });

```

However, this is an excellent opportunity for a more functional approach.
You can implement the `Match` extension method to provide a callback for each `Result` state.
The `Match` method will execute the respective callback and return the result.

Here's the implementation of `Match`:

```cs
public static class ResultExtensions
{
    public static T Match<T>(
        this Result result,
        Func<T> onSuccess,
        Func<Error, T> onFailure)
    {
        return result.IsSuccess ? onSuccess() : onFailure(result.Error);
    }
}

```

And this is how you would use the `Match` method in a Minimal API endpoint:

```cs
app.MapPost(
    "users/{userId}/follow/{followedId}",
    (Guid userId, Guid followedId, FollowerService followerService) =>
    {
        var result = await followerService.StartFollowingAsync(
            userId,
            followedId,
            DateTime.UtcNow);

        return result.Match(
            onSuccess: () => Results.NoContent(),
            onFailure: error => Results.BadRequest(error));
    });

```

Much more concise. Don't you think so?

---

## summary"><a href="#summary">Summary

If you take one thing with you from this week's issue, it should be this: exceptions are for exceptional situations.
Moreover, you should only use exceptions for errors you don't know how to handle.
In all other cases, expressing the error clearly with the **Result pattern** is more valuable.

Using the `Result` class allows you to:

- Express the intent that a method *could* fail
<li>Encapsulate an application error inside
<li>Provide a functional way to handle errors

Additionally, you can document all application errors with the `Error` class.
This is helpful for developers to know which errors they need to handle.

You can even convert this to actual *documentation*.
For example, I wrote a simple program that scans the project for all `Error` fields.
It then converts this into a table format and uploads it to a Confluence page.

So I encourage you to try the **Result pattern** and see how it can improve your code.

See you next week.

-->

---

<TagLinks />