---
lang: ko-KR
title: Adding Validation To The Options Pattern In ASP.NET Core
description: Article(s) > Adding Validation To The Options Pattern In ASP.NET Core
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
      content: Article(s) > Adding Validation To The Options Pattern In ASP.NET Core
    - property: og:description
      content: Adding Validation To The Options Pattern In ASP.NET Core
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/adding-validation-to-the-options-pattern-in-asp-net-core.html
prev: /programming/cs/articles/README.md
date: 2023-01-07
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_019.png
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
  name="Adding Validation To The Options Pattern In ASP.NET Core"
  desc="In this week's newsletter I will show you how to easily add validation the strongly-typed configuration objects injected with IOptions. The Options pattern allows us to use classes to provide strongly-typed configuration values in our application at runtime. But you have no guarantee that the configuration values injected with IOptions will be correctly read from the application settings. Let's see how we can introduce validation for our IOptions and make sure the application settings are correct."
  url="https://milanjovanovic.tech/blog/adding-validation-to-the-options-pattern-in-asp-net-core/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_019.png"/>

In this week's newsletter I will show you how to easily add **validation** to the strongly typed configuration objects injected with `IOptions`.

The **Options pattern** allows us to use classes to provide strongly typed configuration values in our application at runtime.

But you have no guarantee that the configuration values injected with `IOptions` will be correctly read from the application settings.

Let's see how we can introduce validation for `IOptions`, and make sure the application settings are correct.

---

## Strongly Typed Configuration

I first want to define a simple class that will represent our strongly typed configuration. Let's say we want to integrate with the **GitHub API**, so we create a `GitHubSettings` class to hold our configuration:

```cs
public class GitHubSettings
{
    public string AccessToken { get; init; }

    public string RepositoryName { get; init; }
}
```

Inside of our <FontIcon icon="iconfont icon-json"/>`appsettings.json` file we need to create a section to hold our configuration values:

```json
"GitHubSettings": {
    "AccessToken": "access-token-value",
    "RepositoryName": "youtube-projects"
}
```

And with this in place, we can configure our `GitHubSettings`:

```cs
builder.Services.Configure<GitHubSettings>(
    builder.Configuration.GetSection("GitHubSettings"));
```

Finally, our `GitHubSettings` is properly configured and we can inject it with `IOptions<GitHubSettings>`.

---

## What Could Go Wrong?

If we leave the implementation like this, we're moving the responsibility for providing the correct configuration values to the developer. I'm not saying we are the problem, but I've forgotten to add application settings a few times. I'm sure this happened to you also.

Here are just a few things that can go wrong:

- Passing an incorrect section name to `IConfiguration.GetSection`
- Forgetting to add the settings values in <FontIcon icon="iconfont icon-json"/>`appsettings.json`
- Typo in a property name in the class or in the configuration
- Unbindale properties without a setter
- Data type mismatch resulting in incompatible values

Depending on which one of these mistakes is made, the application will behave differently at runtime.

The best case scenario is that the incorrect application settings cause a runtime exception, and you realize you have a problem and fix it.

The worst case scenario, and this happens more often than you may think, is that the application silently fails. The application settings aren't correctly set on the value provided by `IOptions`, but you don't get a runtime exception. The problem may go undetected for some time.

How do we solve this?

---

## Validation For The Options Pattern

There is a simple way to introduce **validation** to the settings class
 using **data annotations**. We just add the validation attributes that
 we need to the properties of the settings class.

For example, we can add the `Required` attribute to the `GitHubSettings` properties:

```cs
public class GitHubSettings
{
    [Required]
    public string AccessToken { get; init; }

    [Required]
    public string RepositoryName { get; init; }
}
```

We have to slightly change how we configure the `GitHubSettings`:

```cs
builder.Services
    .AddOptions<GitHubSettings>()
    .BindConfiguration("GitHubSettings")
    .ValidateDataAnnotations();
```

A few things to note here:

- `AddOptions` - returns an `OptionsBuilder<TOptions>` that binds to the `GitHubSettings` class
- `BindConfiguration` - binds the values from the configuration section
- `ValidateDataAnnotations` - enables **validation** using **data annotations**

With this in place, if we try to inject `GitHubSettings` with any of the properties missing a value, we will get a runtime exception.

You can also define a **custom delegate** for the **validation** logic, instead of using data annotations:

```cs
builder.Services
    .AddOptions<GitHubSettings>()
    .BindConfiguration("GitHubSettings")
    .Validate(gitHubSettings =>
    {
        if (string.IsNullOrEmpty(gitHubSettings.AccessToken))
        {
            return false;
        }

        return true;
    });
```

---

## Running Validation At Application Start

It would be great if we could run **validation** on the configuration values when our application is starting, instead of at runtime.

We can do that by calling `ValidateOnStart` method when configuring our settings class:

```cs
builder.Services
    .AddOptions<GitHubSettings>()
    .BindConfiguration("GitHubSettings")
    .ValidateDataAnnotations()
    .ValidateOnStart(); // 👈 the magic happens here
```

When we start the application, the validation will run on `GitHubSettings` and an exception is thrown if validation fails. The validation exception will look something like this:

```yaml
Unhandled exception. Microsoft.Extensions.Options.OptionsValidationException:
  DataAnnotation validation failed for 'GitHubSettings' members:
```

This shortens the feedback loop, and you will know right away that you have a problem. This is much better than finding out that you have a problem at runtime, like in the previous examples.

---

## Closing Thoughts

The **Options pattern** is very flexible and allows us to use strongly typed settings in ASP.NET Core.

If you want to see how to implement the [<FontIcon icon="fa-brands fa-youtube"/>**Options pattern**](https://youtu.be/wxYt0motww0), I made a [<FontIcon icon="fa-brands fa-youtube"/>**video about it where I go into the details.**](https://youtu.be/wxYt0motww0) I covered the differences between `IOptions`, `IOptionsSnapshot` and `IOptionsMonitor`.

<VidStack src="youtube/wxYt0motww0" />

And now you know how to use the `ValidateOnStart` method, which was introduced in **.NET 6**, to validate your application settings on app start up. This allows you to learn about configuration issues as soon as possible, instead of at runtime.

I also made a video showing how to add [<FontIcon icon="fa-brands fa-youtube"/>validation to the Option pattern](https://youtu.be/qRruEdjNVNE).

<VidStack src="youtube/qRruEdjNVNE" />

---

<TagLinks />