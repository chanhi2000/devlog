---
lang: ko-KR
title: ASP.NET Core Configuration – Options Validation
description: Article(s) > ASP.NET Core Configuration – Options Validation
icon: iconfont icon-csharp
category: 
  - C#
  - Article(s)
tag: 
  - blog
  - code-maze.com
  - cs
  - c#
  - csharp
head:  
  - - meta:
    - property: og:title
      content: Article(s) > ASP.NET Core Configuration – Options Validation
    - property: og:description
      content: ASP.NET Core Configuration – Options Validation
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/code-maze.com/aspnet-configuration-options-validation.html
prev: /programming/cs/articles/README.md
date: 2021-12-27
isOriginal: false
cover: /images/content/code-maze.com/aspnet-configuration-options-validation/banner.png
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
  name="ASP.NET Core Configuration – Options Validation"
  desc="In this article, we're going to learn the importance of options validation and a few ways to implement it in our ASP.NET Core applications."
  url="https://code-maze.com/aspnet-configuration-options-validation/"
  logo="/images/content/code-maze.com/favicon.png"
  preview="/images/content/code-maze.com/aspnet-configuration-options-validation/banner.png"/>

In this article, we’re going to learn the importance of options validation and a few ways to implement it in our ASP.NET Core applications. With advanced mechanisms like configuration reloading, we need to think about options validation carefully as we don’t want to cause application crashes or unexpected behavior.

Just as a reminder, in the previous article, we’ve talked about the [options interfaces](/explore/articles/code-maze.com/aspnet-configuration-options.md) and how to implement them. Now we need to protect our application from invalid configuration values.

Whether we work on a large project with many configuration parameters, or we rely on external configuration providers, validation plays an important role in an application lifecycle.

::: info

The source code for this article can be found on the [ASP.NET Core Configuration repo on GitHub (<FontIcon icon="iconfont icon-github"/>`CodeMazeBlog/aspnet-core-configuration`)](https://github.com/CodeMazeBlog/aspnet-core-configuration). If you wish to follow along, use the [<FontIcon icon="fas fa-code-branch"/>`options-pattern` (<FontIcon icon="iconfont icon-github"/>`CodeMazeBlog/aspnet-core-configuration`)](https://github.com/CodeMazeBlog/aspnet-core-configuration/tree/options-pattern) branch. To check out the finished source code, check out the [<FontIcon icon="fas fa-code-branch"/>`options-validation` (<FontIcon icon="iconfont icon-github"/>`CodeMazeBlog/aspnet-core-configuration`)](https://github.com/CodeMazeBlog/aspnet-core-configuration/tree/options-validation) branch.

<SiteInfo
  name="CodeMazeBlog/aspnet-core-configuration"
  desc="This repo contains the source code for the ASP.NET Core Configuration Series of articles."
  url="https://github.com/CodeMazeBlog/aspnet-core-configuration"
  logo="https://avatars.githubusercontent.com/u/29179238?v=4"
  preview="https://opengraph.githubassets.com/e80292ed715f08922effe73e0902ccf220294b7d0a8e5c5759c861254e9e4e0f/CodeMazeBlog/aspnet-core-configuration"/>

:::

Let’s dive in.

---

## Options Validation with DataAnnotations

One way to do validation of configuration parameters is by using DataAnnotations from `System.ComponentModel.DataAnnotations`. You might have seen data annotations used in other scenarios like validating forms in [ASP.NET Core MVC](/explore/articles/code-maze.com/asp-net-core-mvc-series.md) or [Blazor](/explore/articles/code-maze.com/blazor-webassembly-series.md).

But we can use them for validating our configuration on application start or configuration reload.

Let’s add some data annotations to our model `TitleConfiguration`:

```cs{3,4}
public class TitleConfiguration
{
    [Required]
    [MaxLength(60)]
    public string WelcomeMessage { get; set; }
    public bool ShowWelcomeMessage { get; set; }
    public string Color { get; set; }
    public bool UseRandomTitleColor { get; set; }
}
```

We’ve added both `[Required]` and `[MaxLength]` attributes, so we can state that our `WelcomeMessage` is mandatory and that it isn’t longer than 60 characters.

Now that we’ve decorated our `WelcomeMessage` property, we need to configure our validator in order to check these values.

In the [previous part](/explore/articles/code-maze.com/aspnet-configuration-options.md), we’ve configured our options in the `Startup` class:

```cs
services.Configure<TitleConfiguration>("HomePage", Configuration.GetSection("Pages:HomePage"));
```

We can remove that line because we need to do it a bit differently in order to enable configuration validation:


```cs
services.AddOptions<TitleConfiguration>()
    .Bind(Configuration.GetSection("Pages:HomePage"))
    .ValidateDataAnnotations();
```

We’re using the `AddOptions()` method to add the configuration and the `Bind()` method to bind it to a specific configuration subsection, in our case “Pages:HomePage”. After that, we can call `ValidateDataAnnotations()` method to make sure our validation triggers for the data annotations we’ve set.

We can also quickly revert `TitleService`, `ITitleService`, and `HomeController` to not use the [named options](/explore/articles/code-maze.com/aspnet-configuration-options.md#namedoptions), since we don’t need them anymore:

```cs{8,16,18}
public class TitleColorService : ITitleColorService
{
    private readonly string[] _colors = { "red", "green", "blue", "black", "purple", "yellow", "brown", "pink" };
    private readonly TitleConfiguration _titleConfiguration;

    public TitleColorService(IOptionsMonitor<TitleConfiguration> titleConfiguration)
    {
        _titleConfiguration = titleConfiguration.CurrentValue;
    }

    public string GetTitleColor()
    {
        var random = new Random();
        var colorIndex = random.Next(7);

        return _titleConfiguration.UseRandomTitleColor ?
            _colors[colorIndex] :
            _titleConfiguration.Color;
    }
}
```

```cs
public interface ITitleColorService
{
    string GetTitleColor();
}
```

```cs{6,17}
public HomeController(ILogger<HomeController> logger,
    IOptionsSnapshot<TitleConfiguration> homePageTitleConfiguration,
    ITitleColorService titleColorService)
{
    _logger = logger;
    _homePageTitleConfiguration = homePageTitleConfiguration.Value;
    _titleColorService = titleColorService;
}

public IActionResult Index()
{
    var homeModel = new HomeModel
    {
        Configuration = _homePageTitleConfiguration
    };

    homeModel.Configuration.Color = _titleColorService.GetTitleColor();

    return View(homeModel);
}
```

Now let’s head back to our appsettings.json and remove the `WelcomeMessage` option (we can remove the “ProductPage” section altogether too since we won’t need it):

```json
"Pages": {
    "HomePage": {
        "ShowWelcomeMessage": true,
        "Color": "black",
        "UseRandomTitleColor": true
    }
},
```

Sure enough, if we run the application now, we’ll get `OptionsValidationException`:

![options validation exception](/images/content/code-maze.com/aspnet-configuration-options-validation/options-validation-error.png)

Moreover, we’ll get the details of the field that was problematic, and that’s `WelcomeMessage` in our case.

We can also try the MaxLength validation by adding a few words to the `WelcomeMessage` option:

```json{3}
"Pages": {
    "HomePage": {
        "WelcomeMessage": "Hi human, and welcome to the ProjectConfigurationDemo Home Page",
        "ShowWelcomeMessage": true,
        "Color": "black",
        "UseRandomTitleColor": true
    }
},
```

Now we get the maximum length exceeded exception:

![options validation maxlength exception](/images/content/code-maze.com/aspnet-configuration-options-validation/options-validation-maxlength-exception.png)

Great, works, like a charm.

And not only that, but it works even if we change the configuration and correct it whilst the application is running. Try it out! Revert the `WelcomeMessage` to the valid value and refresh the page to see what happens.

Needless to say, that’s fantastic stuff.

But what if we need a more flexible validation logic?

---

## Options Validation using Delegates

Another great way to configure our options validation is by using [delegates](/explore/articles/code-maze.com/csharp-delegates.md). The fastest way to do it is by using an anonymous function inside the `Validate()` method that’s an extension of the `OptionsBuilder` we’ve used previously:

```cs{4-10}
services.AddOptions<TitleConfiguration>()
    .Bind(Configuration.GetSection("Pages:HomePage"))
    .ValidateDataAnnotations()
    .Validate(config =>
    {
        if (string.IsNullOrEmpty(config.WelcomeMessage) || config.WelcomeMessage.Length > 60)
            return false;

        return true;
    });
```

Now we can remove `ValidateDataAnnotations()` and the data annotations themselves from the `TitleConfiguration` class. As you can see this way is much more flexible and we can do whatever custom stuff we want.

Now if we comment out WelcomeMessage and run the application again we get a bit different kind of exception:

![custom options validation ex](/images/content/code-maze.com/aspnet-configuration-options-validation/custom-options-validation-ex.png)

This message is a bit generic, but that’s to be expected since we’re doing our own custom validation logic. We can make it a bit better by defining a failure message:

```cs{9}
services.AddOptions<TitleConfiguration>()
    .Bind(Configuration.GetSection("Pages:HomePage"))
    .Validate(config =>
    {
        if (string.IsNullOrEmpty(config.WelcomeMessage) || config.WelcomeMessage.Length > 60)
            return false;

        return true;
    }, "Welcome message must be defined and it must be less than 60 characters long.");
```

Now our exception shows this message:

![custom options validation ex message](/images/content/code-maze.com/aspnet-configuration-options-validation/custom-options-validation-ex-message.png)

Of course, we can do some pretty nice stuff with delegates, so if you’re not familiar with delegates that much check out our article about [delegates in C#](/explore/articles/code-maze.com/csharp-delegates.md).

Great, we learned how to do custom validation if needed. With these methods, we’re able to implement validation quickly.

But let’s see what we can do in those really complex validation scenarios.

---

## Complex Validation Scenarios with IValidateOptions

For more complex validation scenarios, which aren’t that rare, we can use the `IValidateOptions` interface to move our validation logic out of the Startup class, and into its own separate class.

In order to do that, let’s create a `TitleConfigurationValidation` class first and implement `IValidateOptions` interface. For that purpose, we can create a separate folder called `ConfigurationValidation` and then create a new class `TitleConfigurationValidation` inside it:

```cs
public class TitleConfigurationValidation : IValidateOptions<TitleConfiguration>
{
    private readonly TitleConfiguration _titleConfiguration;

    public ValidateOptionsResult Validate(string name, TitleConfiguration options)
    {
        throw new NotImplementedException();
    }
}
```

We are going to implement the `IValidateOptions` interface using the `TitleConfiguration` as the options parameter for the `Validate()` method.

The `IValidateOptions` interface declares only one method – `Validate()`, and it accepts two arguments, name and options. We can also see that this method returns `ValidateOptionsResult` which is a convenient way to provide result information. Much more convenient than just true or false like we did previously.

First, we can move our existing options validation we did in the Startup class to this method:

```cs
public ValidateOptionsResult Validate(string name, TitleConfiguration options)
{
    if (string.IsNullOrEmpty(options.WelcomeMessage) || options.WelcomeMessage.Length > 60)
        return ValidateOptionsResult.Fail("Welcome message must be defined and it must be less than 60 characters long.");

    return ValidateOptionsResult.Success;
}
```

That certainly looks better. We can now clean up the `Startup` class, and register our `TitleConfigurationValidation` as a singleton:

```cs{5">public void ConfigureServices(IServiceCollection services)
{
    services.Configure<TitleConfiguration>(Configuration.GetSection("Pages:HomePage"));
            
    services.TryAddSingleton<IValidateOptions<TitleConfiguration>, TitleConfigurationValidation>();

    services.TryAddSingleton<ITitleColorService, TitleColorService>();

    services.AddControllersWithViews();
}
```

If we run the application again, we should get the same result as we did previously.

Now let’s show off the full power of the `IValidateOptions` interface by implementing the title color validation. Say, for example, we want to make sure that the title color is just among the colors we provided in order to make our application look consistent.

We just need to extend our Validation class to support this logic:

```cs{3,10,11}
public class TitleConfigurationValidation : IValidateOptions<TitleConfiguration>
{
    private readonly string[] _colors = { "red", "green", "blue", "black", "purple", "yellow", "brown", "pink" };

    public ValidateOptionsResult Validate(string name, TitleConfiguration options)
    {
        if (string.IsNullOrEmpty(options.WelcomeMessage) || options.WelcomeMessage.Length > 60)
            return ValidateOptionsResult.Fail("Welcome message must be defined and it must be less than 60 characters long.");

        if (!_colors.Any(c => c == options.Color))
            return ValidateOptionsResult.Fail($"Provided title color '{options.Color}' is not among allowed colors.");

        return ValidateOptionsResult.Success;
    }
}
```

Now the title color must be among those we’ve provided. If we provide different color, for example, gray:

```json{5}
"Pages": {
    "HomePage": {
        "WelcomeMessage": "Welcome to the ProjectConfigurationDemo Home Page",
        "ShowWelcomeMessage": true,
        "Color": "gray",
        "UseRandomTitleColor": true
    }
},
```

After running the application we’ll get a message saying “gray” is not valid color:

![color validation](/images/content/code-maze.com/aspnet-configuration-options-validation/color-validation.png)

But it gets even better, this approach also supports the configuration reloading, so you can simply revert the color to “black” and refresh the page to get it working again.

Great! We’ve learned how to validate our configuration in several different ways.

---

## Conclusion

In this article, we’ve covered options validation in three different ways. The first way is by using DataAnnotations, which is a common way of validating fields in ASP.NET Core, we’ve seen how to configure it by using delegates, and finally, we’ve learned how to use `IValidateOptions` to validate complex scenarios and clean up our code.

In the next part, we’re going to learn more about different [configuration providers](/explore/articles/code-maze.com/aspnet-configuration-providers.md), and you can find other parts of this series on the [ASP.NET Core Web API page](/explore/articles/code-maze.com/net-core-series.md#configuration).

---

<TagLinks />