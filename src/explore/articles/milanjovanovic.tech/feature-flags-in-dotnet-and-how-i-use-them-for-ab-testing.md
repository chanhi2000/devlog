---
lang: ko-KR
title: "Feature Flags in .NET and How I Use Them for A/B Testing"
description: "Article(s) > Feature Flags in .NET and How I Use Them for A/B Testing"
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
      content: "Article(s) > Feature Flags in .NET and How I Use Them for A/B Testing"
    - property: og:description
      content: "Feature Flags in .NET and How I Use Them for A/B Testing"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/feature-flags-in-dotnet-and-how-i-use-them-for-ab-testing.html
prev: /programming/cs/articles/README.md
date: 2023-09-16
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_055.png
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
  name="Feature Flags in .NET and How I Use Them for A/B Testing"
  desc="The ability to conditionally turn features on or off in your application without redeploying the code is a powerful tool. It lets you quickly iterate on new features and frequently integrate your changes with the main branch. You can use feature flags to achieve this. Feature flags are a software development technique that allows you to wrap application features in a conditional statement. You can then toggle the feature on or off in runtime to control which features are enabled."
  url="https://milanjovanovic.tech/blog/feature-flags-in-dotnet-and-how-i-use-them-for-ab-testing/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_055.png"/>

<!-- TODO: 작성 -->

<!-- 
The ability to conditionally turn features on or off in your application without redeploying the code is a powerful tool.

It lets you quickly iterate on new features and frequently integrate your changes with the main branch.

You can use **feature flags** to achieve this.

**Feature flags** are a software development technique that allows you to wrap application features in a conditional statement.
You can then toggle the feature on or off in runtime to control which features are enabled.

We have a lot to cover in this week's newsletter:

- Feature flag fundamentals in .NET
<li>Feature filters and phased rollouts
<li>Trunk-based development
<li>A/B testing

Let's dive in!

---

## feature-flags-in-net"><a href="#feature-flags-in-net">Feature Flags In .NET

<a href="https://github.com/microsoft/FeatureManagement-Dotnet">Feature flags</a> provide a way for .NET and ASP.NET Core applications to turn features on or off dynamically.

To get started, you need to install the `Microsoft.FeatureManagement` library in your project:

```pwsh
Install-Package Microsoft.FeatureManagement

```

This library will allow you to develop and expose application functionality based on features.
It's useful when you have special requirements when a new feature should be enabled and under what conditions.

The next step is to register the required services with dependency injection by calling `AddFeatureManagement`:

```cs
builder.Services.AddFeatureManagement();

```

And you are ready to create your first feature flag.
Feature flags are built on top of the .NET configuration system.
Any .NET configuration provider can act as the backbone for exposing feature flags.

Let's create a feature flag called `ClipArticleContent` in our `appsettings.json` file:

```json
"FeatureManagement": {
  "ClipArticleContent": false
}

```

By convention, feature flags have to be defined in the `FeatureManagement` configuration section.
But you can change this by providing a different configuration section when calling `AddFeatureManagement`.

Microsoft recommends exposing feature flags using enums and then consuming them with the `nameof` operator.
For example, you would write `nameof(FeatureFlags.ClipArticleContent)`.

However, I prefer defining feature flags as constants in a static class because it simplifies the usage.

```cs
// Using enums
public enum FeatureFlags
{
    ClipArticleContent = 1
}

// Using constants
public static class FeatureFlags
{
    public const string ClipArticleContent = "ClipArticleContent";
}

```

To check the feature flag state, you can use the `IFeatureManager` service.
In this example, if the `ClipArticleContent` feature flag is turned on, we will return only the first thirty characters of the article's content.

```cs
app.MapGet("articles/{id}", async (
    Guid id,
    IGetArticle query,
    IFeatureManager featureManager) =>
{
    var article = query.Execute(id);

<span class="code-line highlight-line">    if (await featureManager.IsEnabledAsync(FeatureFlags.ClipArticleContent))
    {
        article.Content = article.Content.Substring(0, 50);
    }

    return Results.Ok(article);
});

```

You can also apply feature flags on a controller or endpoint level using the `FeatureGate` attribute:

```cs
[FeatureGate(FeatureFlags.EnableArticlesApi)]
public class ArticlesController : Controller
{
   // ...
}

```

This covers the fundamentals of using feature flags, and now, let's tackle more advanced topics.

---

## feature-filters-and-phased-rollouts"><a href="#feature-filters-and-phased-rollouts">Feature Filters And Phased Rollouts

The feature flags I showed you in the previous section were like a simple on-off switch.
Although practical, you might want more flexibility from your feature flags.

The `Microsoft.FeatureManagement` package comes with a few built-in feature filters that allow you to create dynamic rules for enabling feature flags.

The available feature filters are
<a href="https://learn.microsoft.com/en-us/dotnet/api/microsoft.featuremanagement.featurefilters.percentagefilter?view=azure-dotnet">`Microsoft.Percentage`</a>,
<a href="https://learn.microsoft.com/en-us/dotnet/api/microsoft.featuremanagement.featurefilters.timewindowfilter?view=azure-dotnet">`Microsoft.TimeWindow`</a>
and <a href="https://learn.microsoft.com/en-us/dotnet/api/microsoft.featuremanagement.featurefilters.targetingfilter?view=azure-dotnet">`Microsoft.Targeting`</a>.

Here's an example of defining a `ShowArticlePreview` feature flag that uses a percentage filter:

```json
"FeatureFlags": {
  "ClipArticleContent": false,
<span class="code-line highlight-line">  "ShowArticlePreview": {
    "EnabledFor": [
      {
<span class="code-line highlight-line">        "Name": "Percentage",
        "Parameters": {
          "Value": 50
        }
      }
    ]
  }
}

```

This means the feature flag will be randomly turned on 50% of the time.
The downside is the same user might see different behavior on subsequent requests.
A more realistic scenario is to have the feature flag state be cached for the duration of the user's session.

To use the `PercentageFilter`, you need to enable it by calling `AddFeatureFilter`:

```cs
builder.Services.AddFeatureManagement().AddFeatureFilter<PercentageFilter>();

```

Another interesting feature filter is the `TargetingFilter`, which allows you to target specific users.
Targeting is used in phased rollouts, where you want to introduce a new feature to your users gradually.
You start by enabling the feature for a small percentage of users and slowly increase the rollout percentage while monitoring how the system responds.

---

## trunk-based-development-and-feature-flags"><a href="#trunk-based-development-and-feature-flags">Trunk-based Development and Feature Flags

<a href="https://trunkbaseddevelopment.com/">Trunk-based development</a> is a Git branching strategy where all developers work in short-lived branches or directly in the trunk, the main codebase.
The *"trunk"* is the main branch of your repository.
If you're using Git, it will be either the `main` or `master` branch.
Trunk-based development avoids the "merge hell" problem caused by long-lived branches.

So, how do feature flags fit into trunk-based development?

The only way to ensure the trunk is always releasable is to hide incomplete features behind feature flags.
You continue pushing changes to the trunk as you work on the feature while the feature flag remains turned off on the main branch.
When the feature is complete, you turn on the feature flag and release it to production.

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27900%27%20height=%27468%27/%3e"><img alt="Trunk based development." src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="Trunk based development." srcSet="/blogs/mnw_055/trunk_based_development.png?imwidth=1080 1x, /blogs/mnw_055/trunk_based_development.png?imwidth=1920 2x" src="/blogs/mnw_055/trunk_based_development.png?imwidth=1920" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>
---

## how-i-used-feature-flags-for-ab-testing-on-my-website"><a href="#how-i-used-feature-flags-for-ab-testing-on-my-website">How I Used Feature Flags for A/B Testing On My Website

A/B testing (split testing) is an experiment where two or more variants of a page (or feature) are shown randomly to users.
Statistical analysis is performed in the background to determine which variation performs better for a given conversion goal.

Here's an example A/B test I performed on my website:

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271400%27%20height=%271700%27/%3e"><img alt="Split test with two variants." src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="Split test with two variants." srcSet="/blogs/mnw_055/split_test.png?imwidth=1920 1x, /blogs/mnw_055/split_test.png?imwidth=3840 2x" src="/blogs/mnw_055/split_test.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>
The hypothesis was that removing the image and focusing on the benefits would make more people want to subscribe.
I measure this using the conversion rate, which is the number of people visiting the page divided by the number of people subscribing.

I'm using a platform called <a href="https://posthog.com">Posthog</a> to run experiments, which automatically calculates the results.

You can see that the *test* variant has a significantly higher conversion rate, so it becomes the winner of the A/B test.

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27907%27%20height=%27749%27/%3e"><img alt="Split test with two variants experiment results." src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="Split test with two variants experiment results." srcSet="/blogs/mnw_055/experiment_results.png?imwidth=1080 1x, /blogs/mnw_055/experiment_results.png?imwidth=1920 2x" src="/blogs/mnw_055/experiment_results.png?imwidth=1920" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>
---

## takeaway"><a href="#takeaway">Takeaway

The ability to dynamically turn features on or off without deploying the code is like a superpower.
Feature flags give you this ability with very little work.

You can work with feature flags in .NET by installing the `Microsoft.FeatureManagement` library.
Feature flags build on top of the .NET configuration system, and you can check the feature flag state using the `IFeatureManager` service.

Another use case for feature flags is A/B testing.
I run weekly experiments on my website, testing changes that will improve my conversion rate.
Feature flags help me decide which version of the website to show to the user.
And then, I can measure results based on the user's actions.

I also made a video about <a href="https://youtu.be/QVEUgIC7Wpo">**feature flagging in .NET,**</a> and you can watch it <a href="https://youtu.be/QVEUgIC7Wpo">**here**</a> if you want to learn more.

Hope this was valuable.

Stay awesome!

-->

---

<TagLinks />