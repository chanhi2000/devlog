---
lang: ko-KR
title: ASP.NET Core Configuration – Options Pattern
description: Article(s) > ASP.NET Core Configuration – Options Pattern
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
      content: Article(s) > ASP.NET Core Configuration – Options Pattern
    - property: og:description
      content: ASP.NET Core Configuration – Options Pattern
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/code-maze.com/aspnet-configuration-options.html
prev: /programming/cs/articles/README.md
date: 2021-12-27
isOriginal: false
cover: /images/content/code-maze.com/aspnet-configuration-options/banner.png
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
  name="ASP.NET Core Configuration – Options Pattern"
  desc="In this article, we're going to cover another, better way of reading configuration data in .NET Core - the options pattern."
  url="https://code-maze.com/aspnet-configuration-options/"
  logo="/images/content/code-maze.com/favicon.png"
  preview="/images/content/code-maze.com/aspnet-configuration-options/banner.png"/>

In this article, we’re going to cover another way of reading configuration data in .NET Core – the options pattern. The options pattern helps us group related configuration settings, and it provides strongly typed access to them. We are going to learn how the options pattern works and how we can improve our existing configuration access or even reload the configuration in real-time.

If you’ve missed some of the basic configuration stuff, check out the [ASP.NET Core Configuration Basics](/explore/articles/code-maze.com/aspnet-configuration-basic-concepts.md).

::: info

The source code for this article can be found on the [ASP.NET Core Configuration repo on GitHub (<FontIcon icon="iconfont icon-github"/>`CodeMazeBlog/aspnet-core-configuration`)](https://github.com/CodeMazeBlog/aspnet-core-configuration). If you wish to follow along, use the [<FontIcon icon="fas fa-code-branch"/>`basic-concepts` (<FontIcon icon="iconfont icon-github"/>`CodeMazeBlog/aspnet-core-configuration`)](https://github.com/CodeMazeBlog/aspnet-core-configuration/tree/basic-concepts) branch. To check out the finished source code, check out the [<FontIcon icon="fas fa-code-branch"/>`options-pattern` (<FontIcon icon="iconfont icon-github"/>`CodeMazeBlog/aspnet-core-configuration`)](https://github.com/CodeMazeBlog/aspnet-core-configuration/tree/options-pattern) branch.

<SiteInfo
  name="CodeMazeBlog/aspnet-core-configuration"
  desc="This repo contains the source code for the ASP.NET Core Configuration Series of articles."
  url="https://github.com/CodeMazeBlog/aspnet-core-configuration"
  logo="https://avatars.githubusercontent.com/u/29179238?v=4"
  preview="https://opengraph.githubassets.com/e80292ed715f08922effe73e0902ccf220294b7d0a8e5c5759c861254e9e4e0f/CodeMazeBlog/aspnet-core-configuration"/>

:::

Let’s dive in.

---

## Why the Options Pattern?

In the previous article, we’ve seen how we can **bind configuration data to strongly typed objects**. The options pattern gives us similar possibilities, but it offers a more structured approach and more features like validation, live reloading, and easier testing.

Once we configure the class containing our configuration we can inject it **via dependency injection** with `IOptions<T>` and thus injecting only part of our configuration or rather **only the part that we need**.

If we need to **reload the configuration without stopping the application**, we can use the `IOptionsSnapshot<T>` interface or the `IOptionsMonitor<T>` interface depending on the situation. We’ll see when these interfaces should be used and why.

The options pattern also provides a good **validation mechanism** that uses the widely used DataAnotations attributes to check if the configuration abides by the logical rules of our application.

The **testing** of options is also easy because of the helper methods and easy to mock options classes.

So, in short, the options pattern helps us to:

- bind the configuration data to strongly typed objects
- group the configuration data in logical sections
- reload the configuration while the application is running
- validate the configuration
- inject only the needed parts of the configuration into different parts of the application
- test the configuration easier

Let’s see some real examples of the options pattern usage.

---

## How to Use the Options Pattern to Read Configuration with IOptions Interface

Okay, let’s start by looking at the Index method of the home controller without any options pattern implemented:

```cs
public IActionResult Index()
{
    var logLevelConfiguration = new LoggingLevelConfiguration();

    _configuration.Bind("Logging:LogLevel", logLevelConfiguration);

    var homeModel = new HomeModel
    {
        DefaultLogLevel = logLevelConfiguration.Default
    };

    return View(homeModel);
}
```

In this case, the configuration is injected through the IConfiguration interface in the HomeController constructor, so we’re actually able to access the whole configuration whether we need it or not.

After that, we’re binding the `LogLevel` subsection of the configuration to the `LoggingLevelConfiguration` class, in order to send it to the `Index` view.


Okay, now let’s see how that works with `IOptions<T>` interface.

Let’s add a few values to our appsettings.json file first:

```json{12-19}
{
    "Logging": {
        "LogLevel": {
            "Default": "Information",
            "Microsoft": "Warning",
            "Microsoft.Hosting.Lifetime": "Information"
        }
    },
    "ConnectionStrings": {
        "sqlConnection": "server=.; database=CodeMazeCommerce; Integrated Security=true"
    },
    "Pages": {
        "HomePage": {
            "WelcomeMessage": "Welcome to the ProjectConfigurationDemo Home Page",
            "ShowWelcomeMessage": true,
            "Color": "black"
        }
    },
    "AllowedHosts": "*"
}
```

We’ll be using the `HomePage` subsection to configure our `Index` view of the `HomeController`.

Next, we need a class that will contain these properties, so let’s create it in the Models folder of the project:

```cs
public class TitleConfiguration
{
    public string WelcomeMessage { get; set; }
    public bool ShowWelcomeMessage { get; set; }
    public string Color { get; set; }
}
```

We need to make sure these property names match those of the appsettings.json file section.

Now we can modify the `HomeController` to support the options pattern. First, let’s inject `IOptions<HomePageController>` instead of `IConfiguration` as we did before:


```cs{1,4,7}
private readonly TitleConfiguration _homePageTitleConfiguration;
        
public HomeController(ILogger<HomeController> logger,
    IOptions<TitleConfiguration> homePageTitleConfiguration)
{
    _logger = logger;
    _homePageTitleConfiguration = homePageTitleConfiguration.Value;
}
```

As you can see we’re accessing the configuration data via the `Value` property of the `IOptions` interface.

We are going to change the HomeModel class to reflect these changes too:

```cs
public class HomeModel
{
    public TitleConfiguration Configuration { get; set; }
}
```

We need to change the Index method too:

```cs
public IActionResult Index()
{
    var homeModel = new HomeModel
    {
        Configuration = _homePageTitleConfiguration
    };
    return View(homeModel);
}
```

And we should add some logic to the view so we can use these properties we’ve defined:

```html
@{
    ViewData["Title"] = "Home Page";
}
<div class="text-center">
    @{
        if (Model.Configuration.ShowWelcomeMessage)
        {
            <h1 class="display-4" style="color:@Model.Configuration.Color">@Model.Configuration.WelcomeMessage</h1>
        }
    }
</div>
```

This should give us a big red title right in the middle of our Home Page.

Now, the only thing left to do is to actually register and configure the `TitleConfiguration` in our `Startup` class:

```cs
services.Configure<TitleConfiguration>(Configuration.GetSection("Pages:HomePage"));
```

This should register our HomePage configuration

Now if we run our application the result is pretty clear:

![Home Page - ProjectConfigurationDemo](/images/content/code-maze.com/aspnet-configuration-options/Home-Page-ProjectConfigurationDemo.png)

Great! We’re getting the right properties to the view.

But if we want to change the title to the color green for example, we need to **restart the application** to do it.

But there’s a better way to do it! And it’s called `IOptionsSnapshot`.

---

## Using IOptionsSnapshot to Read the Updated Configuration

IOptionsSnapshot contains the values just for the lifetime of a request. So that means it’s registered as a scoped service in our application and we can use it only with scoped and transient dependencies. We cannot inject it into singleton services!

If we need to change the configuration without restarting the application, we need to implement `IOptionsSnapshot<T>` because `IOptions<T>` doesn’t support it.

Let’s modify our code to use `IOptionsSnapshot<T>` instead of `IOptions<T>`.

Changing our code, in this case, is easy, we just need to change the constructor of the `HomeController`:

```cs
public HomeController(ILogger<HomeController> logger,
    IOptionsSnapshot<TitleConfiguration> homePageTitleConfiguration)
{
    _logger = logger;
    _homePageTitleConfiguration = homePageTitleConfiguration.Value;
}
```

If we run the application, we’ll get the same home page as we did before, big red title.

But to test `IOptionsSnapshot`, let’s go to our appsettings.json file and change the color of the text to “blue”:

```json
"Pages": {
    "HomePage": {
        "WelcomeMessage": "Welcome to the ProjectConfigurationDemo Home Page",
        "ShowWelcomeMessage": true,
        "Color": "blue"
    }
},
```

Now, we just need to refresh the HomePage and our title will be blue if we did everything correctly:

![Home Page blue](/images/content/code-maze.com/aspnet-configuration-options/Home-Page-blue.png)

Great, we’ve successfully modified our application to reload the configuration data dynamically.

---

## Using IOptionsMonitor for Singleton Services

There is one problem with our current solution, and we’ve already mentioned it. `IOptionsSnapshot` **is not suitable to be injected into services registered as a singleton** in our application.

To demonstrate this, let’s create a simple service and try to inject `IOptionsSnapshot` into it.

First, let’s extend our Home Page title configuration a bit. We’ll add a new configuration property `UseRandomTitleColor` to our `TitleConfiguration` class:

```cs{6}
public class TitleConfiguration
{
    public string WelcomeMessage { get; set; }
    public bool ShowWelcomeMessage { get; set; }
    public string Color { get; set; }
    public bool UseRandomTitleColor { get; set; }
}
```

And we’ll change `appsettings.json` to reflect it:

```json{6}
"Pages": {
    "HomePage": {
        "WelcomeMessage": "Welcome to the ProjectConfigurationDemo Home Page",
        "ShowWelcomeMessage": true,
        "Color": "blue",
        "UseRandomTitleColor": true
    }
},
```

After that, we’ll need a service we can register as a singleton, so let’s create a new one. We’ll call it `ITitleColorService` and we’ll create it in a separate folder called `Services`:

```cs
public interface ITitleColorService
{
    string GetTitleColor();
}
```

`ITitleColorService` declares just one method and that’s `GetTitleColor`, which should return a random color from the list of defined colors. So let’s create `TitleColorService` in the same folder and implement this interface:

```cs
public class TitleColorService : ITitleColorService
{
    private readonly string[] _colors = { "red", "green", "blue", "black", "purple", "yellow", "brown", "pink" };
    private readonly TitleConfiguration _homePageTitleConfiguration;

    public TitleColorService(IOptionsSnapshot<TitleConfiguration> homePageTitleConfiguration)
    {
        _homePageTitleConfiguration = homePageTitleConfiguration.Value;
    }

    public string GetTitleColor()
    {
        var random = new Random();
        var colorIndex = random.Next(7);
        return _homePageTitleConfiguration.UseRandomTitleColor ?
            _colors[colorIndex] :
            _homePageTitleConfiguration.Color;
    }
}
```

It’s a simple implementation, that returns one of the colors from the array of colors if `UseRandomTitleColor` is set to true, and the value of the `Color` property if it’s set to false. Take note that we’re using `IOptionsSnapshot` to inject our configuration.

Now we need to register our service with our application, and we do that in Startup class, in the `ConfigureServices` method:

```cs{4}
public void ConfigureServices(IServiceCollection services)
{
    services.Configure<TitleConfiguration>(Configuration.GetSection("Pages:HomePage"));
    services.TryAddSingleton<ITitleColorService, TitleColorService>();

    services.AddControllersWithViews();
}
```

And finally, let’s change `HomeController` to override the title color:

```cs{3,7,11,21}
private readonly ILogger<HomeController> _logger;
private readonly TitleConfiguration _homePageTitleConfiguration;
private readonly ITitleColorService _titleColorService;

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

That’s about it. Or is it?

### `IOptionsMonitor<T>` Purpose

Now if we run the application, it crashes and we get the following exception message:

::: note

Some services are not able to be constructed (Error while validating the service descriptor ‘ServiceType: ProjectConfigurationDemo.Services.ITitleColorService Lifetime: Singleton ImplementationType: ProjectConfigurationDemo.Services.TitleColorService’: Cannot consume scoped service ‘Microsoft.Extensions.Options.IOptionsSnapshot`1[ProjectConfigurationDemo.Models.TitleConfiguration]’ from singleton ‘ProjectConfigurationDemo.Services.ITitleColorService’.)

:::

This happens because ASP.NET Core is trying to prevent us from making a mistake of referencing a scoped service from a singleton. It’s a classic mistake and it could result in unexpected behavior otherwise. To put it in simple terms if the parent is a singleton, we can’t create a child service per page loaded. Child service has to be singleton or transient instead.

And that’s exactly where `IOptionsMonitor` comes in.

Let’s go back to our service and replace `IOptionsSnapshot` with `IOptionsMonitor`:

```cs
public TitleColorService(IOptionsMonitor<TitleConfiguration> homePageTitleConfiguration)
{
    _homePageTitleConfiguration = homePageTitleConfiguration.CurrentValue;
}
```

The only thing we need to modify is the constructor. `IOptionsMonitor` uses the `CurrentValue` instead of `Value` retrieving the configuration values.

Now if we run the application again we’re not getting the exception we did before. If we refresh the page, our title screen shows up in different colors we’ve defined previously.

Great!

There is one more concept we need to cover.

---

## Named Options

Named options are not the feature we need to use very often, but there is a specific case where it can come in handy.

Let’s imagine we have a configuration like this one:

```json
"Pages": {
    "HomePage": {
        "WelcomeMessage": "Welcome to the ProjectConfigurationDemo Home Page",
        "ShowWelcomeMessage": true,
        "Color": "black",
        "UseRandomTitleColor": true
    },
    "ProductPage": {
        "WelcomeMessage": "Welcome to the ProjectConfigurationDemo Product Page",
        "ShowWelcomeMessage": true,
        "Color": "black",
        "UseRandomTitleColor": false
    }
},
```

We have the same configuration structure for the different configuration subsections of the section “Pages”. Both the “HomePage” and the “ProductPage” have the exact same configuration properties.

Instead of adding another configuration class that’s exactly the same as our `TitleConfiguration` we’ve already implemented, we can use that class to map different subsections of the Pages section and just name them differently to be able to differentiate between each other.

This might be a bit confusing so let’s implement it. In our `Startup` class we should configure:

```cs
services.Configure<TitleConfiguration>("HomePage", Configuration.GetSection("Pages:HomePage"));
services.Configure<TitleConfiguration>("ProductPage", Configuration.GetSection("Pages:ProductPage"));
```

Now both subsections are mapped to the same configuration class, which makes sense. We don’t want to create multiple classes with the same properties and just name them differently. This is a much better way of doing it.

Calling the specific option is now done using the `Get()` method, so we need to refactor our `TitleColorService` class a bit:

```cs{8,11,15}
public class TitleColorService : ITitleColorService
{
    private readonly string[] _colors = { "red", "green", "blue", "black", "purple", "yellow", "brown", "pink" };
    private readonly IOptionsMonitor<TitleConfiguration> _titleConfiguration;

    public TitleColorService(IOptionsMonitor<TitleConfiguration> titleConfiguration)
    {
        _titleConfiguration = titleConfiguration;
    }

    public string GetTitleColor(string pageTitleConfiguration)
    {
        var random = new Random();
        var colorIndex = random.Next(7);
        var titleConfiguration = _titleConfiguration.Get(pageTitleConfiguration);

        return titleConfiguration.UseRandomTitleColor ?
            _colors[colorIndex] :
            titleConfiguration.Color;
    }
}
```

We need to change the `ITitleColorService` interface as well:

```cs
public interface ITitleColorService
{
    string GetTitleColor(string pageTitleConfiguration);
}
```

And change the `HomeController` accordingly:

```cs{6,17}
public HomeController(ILogger<HomeController> logger,
    IOptionsSnapshot<TitleConfiguration> homePageTitleConfiguration,
    ITitleColorService titleColorService)
{
    _logger = logger;
    _homePageTitleConfiguration = homePageTitleConfiguration.Get("HomePage");
    _titleColorService = titleColorService;
}

public IActionResult Index()
{
    var homeModel = new HomeModel
    {
        Configuration = _homePageTitleConfiguration
    };

    homeModel.Configuration.Color = _titleColorService.GetTitleColor("HomePage");

    return View(homeModel);
}
```

That’s it, now if we run the application, we’ll see exactly the same result as before. The only thing here we want to change is to use string constants rather than string literals to get the subsections, as to avoid runtime errors. But you can play around a bit and try it out.

Let’s summarize.

---

## Choosing Between IOptions, IOptionsSnapshot, and IOptionsMonitor

So in short

::: tabs

@tab:active <code>IOptions&lt;T&gt;</code>

- Is the original Options interface and it’s better than binding whole Configuration
- Does not support configuration reloading
- Is registered as a singleton service and can be injected anywhere
- Binds the configuration values only once at the registration, and returns the same values every time
- Does not support named options

@tab <code>IOptionsSnapshot&lt;T&gt;</code>

- Registered as a scoped service
- Supports configuration reloading
- Cannot be injected into singleton services
- Values reload per request
- Supports named options

@tab <code>IOptionsMonitor&lt;T&gt;</code>

- Registered as a singleton service
- Supports configuration reloading
- Can be injected into any service lifetime
- Values are cached and reloaded immediately
- Supports named options

:::

Having said that, we can see that if we don’t want to enable live reloading or we don’t need named options, we can simply use `IOptions<T>`. If we do, we can use either `IOptionsSnapshot<T>` or `IOptionsMonitor<T>`, but `IOptionsMonitor<T>` can be injected into other singleton services while `IOptionsSnapshot<T>` cannot.

Sometimes the nature of the project dictates that we shouldn’t change our configuration “on the fly”. Sometimes it’s needed. Be careful when choosing the “right option”, no pun intended 😉

---

## Conclusion

In this article, we’ve learned what options are and why they’re good for us. We’ve also covered different ways to implement options, as well as the pros and cons of each one. As we’ve mentioned, this is a powerful mechanism and you need to decide carefully which one is the best for your concrete project.

In the next article, we’ll cover [options validation](/explore/articles/code-maze.com/aspnet-configuration-options-validation.md), and you can find other parts of this series on the [ASP.NET Core Web API page](/explore/articles/code-maze.com/net-core-series.md#configuration).

---

<TagLinks />