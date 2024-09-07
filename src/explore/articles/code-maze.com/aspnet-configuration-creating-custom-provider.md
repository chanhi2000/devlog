---
lang: ko-KR
title: Creating Custom Configuration Provider in ASP.NET Core
description: Article(s) > Creating Custom Configuration Provider in ASP.NET Core
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
      content: Article(s) > Creating Custom Configuration Provider in ASP.NET Core
    - property: og:description
      content: Creating Custom Configuration Provider in ASP.NET Core
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/code-maze.com/aspnet-configuration-creating-custom-provider.html
prev: /programming/cs/articles/README.md
date: 2022-10-12
isOriginal: false
cover: /images/content/code-maze.com/aspnet-configuration-creating-custom-provider/banner.png
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
  name="Creating Custom Configuration Provider in ASP.NET Core"
  desc="In this article, we are going to create a custom configuration provider that reads our configuration from the database."
  url="https://code-maze.com/aspnet-configuration-creating-custom-provider/"
  logo="/images/content/code-maze.com/favicon.png"
  preview="/images/content/code-maze.com/aspnet-configuration-creating-custom-provider/banner.png"/>

In this article, we are going to create a custom configuration provider that reads our configuration from the database. We’ve seen how the [default configuration providers](/explore/articles/code-maze.com/aspnet-configuration-providers.md) work, and now we’re going to implement our own custom one.
      
For the custom configuration provider, we’ll use Entity Framework Core, coupled with the SQL Server database.

::: info

The source code for this article can be found on the [ASP.NET Core Configuration repo on GitHub (<FontIcon icon="iconfont icon-github"/>`CodeMazeBlog/aspnet-core-configuration`)](https://github.com/CodeMazeBlog/aspnet-core-configuration). If you wish to follow along, use the [<FontIcon icon="fas fa-code-branch"/>`configuration-providers` (<FontIcon icon="iconfont icon-github"/>`CodeMazeBlog/aspnet-core-configuration`)](https://github.com/CodeMazeBlog/aspnet-core-configuration/tree/configuration-providers) branch. To check out the finished source code, check out the [<FontIcon icon="fas fa-code-branch"/>`custom-configuration-provider` (<FontIcon icon="iconfont icon-github"/>`CodeMazeBlog/aspnet-core-configuration`)](https://github.com/CodeMazeBlog/aspnet-core-configuration/tree/custom-configuration-provider) branch.

<SiteInfo
  name="CodeMazeBlog/aspnet-core-configuration"
  desc="This repo contains the source code for the ASP.NET Core Configuration Series of articles."
  url="https://github.com/CodeMazeBlog/aspnet-core-configuration"
  logo="https://avatars.githubusercontent.com/u/29179238?v=4"
  preview="https://opengraph.githubassets.com/e80292ed715f08922effe73e0902ccf220294b7d0a8e5c5759c861254e9e4e0f/CodeMazeBlog/aspnet-core-configuration"/>

:::

First, let’s upgrade our solution to support EF Core using the [database-first approach](/explore/articles/code-maze.com/asp-net-core-web-api-with-ef-core-db-first-approach.md).

---

## Initializing EF Core

Before we start, let’s take a moment to clear all the user secrets and environment variables, we’ve set in the [previous part](/explore/articles/code-maze.com/aspnet-configuration-providers.md). Once that’s finished, let’s proceed.

We need to install two Nuget packages first:

```pwsh
Install-Package Microsoft.EntityFrameworkCore.SqlServer -v 3.1.7
```

We need this package since we’ll be using SQL Server instance, and:

```pwsh
Install-Package Microsoft.EntityFrameworkCore.Tools -v 3.1.7
```

Since we are going to perform an initial creation and migration of the database through the CLI.

We need a class that will contain our key-value configuration pairs (Models folder):

```cs
public class ConfigurationEntity
{
    [Key]
    public string Key { get; set; }
    public string Value { get; set; }
}
```

And a `DbContext` class (Models folder):



```cs
public class ConfigurationDbContext : DbContext
{
    public ConfigurationDbContext(DbContextOptions options)
        : base(options)
    {
    }

    public DbSet<ConfigurationEntity> ConfigurationEntities { get; set; }
}
```

We need just one `DbSet` of `ConfigurationEntity` which will map to our table in the database.

Now we just need to set up a connection to our server in the `ConfigureServices()` method in the `Startup` class:

```cs
services.AddDbContext<ConfigurationDbContext>(opts =>
    opts.UseSqlServer(Configuration.GetConnectionString("sqlConnection")));
```

And of course, you need to change the connection string in the <FontIcon icon="iconfont icon-json"/>`appsettings.json` file to your database. If you’re using SqlExpress, it most probably looks like this:

```json
"ConnectionStrings": {
    "sqlConnection": "server=.\\SQLEXPRESS; database=CodeMazeCommerce; Integrated Security=true"
}
```

That’s it, now we can simply add an initial migration through the Package Manager Console:

```pwsh
Add-Migration InitialSetup
```

And apply that migration to the database:

```pwsh
Update-Database
```

Now our database is created and ready to be used for storing configuration data.

---

## Implementing a Custom EF Core Provider

To start things off let’s create a folder ConfigurationProviders inside our Models folder, in order to group our classes properly.

After that, we need to actually create a configuration provider by inheriting the `ConfigurationProvider` class. We’ll create our own provider class in the `ConfigurationProviders` folder and name it `EFConfigurationProvider`:

```cs
public class EFConfigurationProvider : ConfigurationProvider
{
    public EFConfigurationProvider(Action<DbContextOptionsBuilder> optionsAction)
    {
        OptionsAction = optionsAction;
    }

    Action<DbContextOptionsBuilder> OptionsAction { get; }

    public override void Load()
    {
        var builder = new DbContextOptionsBuilder<ConfigurationDbContext>();

        OptionsAction(builder);

        using (var dbContext = new ConfigurationDbContext(builder.Options))
        {
            dbContext.Database.EnsureCreated();

            Data = !dbContext.ConfigurationEntities.Any()
                ? CreateAndSaveDefaultValues(dbContext)
                : dbContext.ConfigurationEntities.ToDictionary(c => c.Key, c => c.Value);
        }
    }

    private static IDictionary<string, string> CreateAndSaveDefaultValues(ConfigurationDbContext dbContext)
    {
        var configValues =
            new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
            {
                { "Pages:HomePage:WelcomeMessage", "Welcome to the ProjectConfigurationDemo Home Page" },
                { "Pages:HomePage:ShowWelcomeMessage", "true" },
                { "Pages:HomePage:Color", "black" },
                { "Pages:HomePage:UseRandomTitleColor", "true" }
            };

        dbContext.ConfigurationEntities.AddRange(configValues
            .Select(kvp => new ConfigurationEntity
            {
                Key = kvp.Key,
                Value = kvp.Value
            })
            .ToArray());

        dbContext.SaveChanges();

        return configValues;
    }
}
```

This class might look a bit scary at first, but it’s not that scary.

The constructor has one argument a delegate `Action<DbContextOptionsBuilder> optionsAction`. We’ll use the `DbContextOptionsBuilder` class later to define a context for our database. We’ve already done it when we defined the connection string previously. We’re exposing the context options builder, in order to provide that option to our custom provider.

We’re overriding the `Load()` method in order to populate our `ConfigurationEntity` with the data from the database or create a few default ones if the database table is empty. That’s all there is to it.

Next, we’re going to register our configuration provider as a source. In order to do that, we need to implement the `IConfigurationSource` interface. So let’s create the `EFConfigurationSource` class in the `ConfigurationProviders` folder:

```cs
public class EFConfigurationSource : IConfigurationSource
{
    private readonly Action<DbContextOptionsBuilder> _optionsAction;

    public EFConfigurationSource(Action<DbContextOptionsBuilder> optionsAction)
    {
        _optionsAction = optionsAction;
    }

    public IConfigurationProvider Build(IConfigurationBuilder builder)
    {
        return new EFConfigurationProvider(_optionsAction);
    }
}
```

We just need to implement the `Build()` method, which in our case initializes the configuration provided with the options that we’ve sent through the configuration source constructor.

This looks really confusing so let’s see how to add our database configuration provider to the list of the configuration sources. We’ll do it in a similar fashion as before:

```cs{9-14}
public static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
        .ConfigureWebHostDefaults(webBuilder =>
        {
            webBuilder.UseStartup<Startup>();
        })
        .ConfigureAppConfiguration((hostingContext, configBuilder) =>
        {
            var config = configBuilder.Build();
            var configSource = new EFConfigurationSource(opts =>
                opts.UseSqlServer(config.GetConnectionString("sqlConnection")));
            configBuilder.Add(configSource);
        });
```

As you can see we’re building the configuration builder in order to get the `IConfiguration`. We need it because our connection string is stored in the <FontIcon icon="iconfont icon-json"/>`appsettings.json` file. Now we can create a configuration source with that connection string, and add it to the existing configuration sources with the `configBuilder.Add()` method.

Now we want to clear the appsettings.json file a bit:

```json
{
    "Logging": {
        "LogLevel": {
            "Default": "Information",
            "Microsoft": "Warning",
            "Microsoft.Hosting.Lifetime": "Information"
        }
    },
    "ConnectionStrings": {
        "sqlConnection": "server=.\\SQLEXPRESS; database=CodeMazeCommerce; Integrated Security=true"
    },
    "AllowedHosts": "*"
}
```

We’ve removed the “Pages” section to make sure it’s being read from the database.

And we need to remove the `AddDbContext()` method we’ve used before in the Startup class since it’s not needed anymore.

```cs
public void ConfigureServices(IServiceCollection services)
{
    //remove!!!
    services.AddDbContext<ConfigurationDbContext>(opts =>
            opts.UseSqlServer(Configuration.GetConnectionString("sqlConnection")));
    ...
}
```

Since we won’t need any migrations for this example, create a database called “CodeMazeCommerce” manually through your SQL Management Studio, or through the SQL Server Object Explorer.

That’s it, let’s run the application.

---

## Running the Application

Now if we run the application, put a breakpoint in the `Startup` class, and inspect the `Configuration` object, we’ll find our configuration source:

![ef configuration provider](/images/content/code-maze.com/aspnet-configuration-creating-custom-provider/ef-configuration-provider.png)

Excellent.

If we inspect the database, we’ll see it’s populated:

![database](/images/content/code-maze.com/aspnet-configuration-creating-custom-provider/database.png)

Let’s continue the execution and see if our application is still working as expected:

![Home Page green](/images/content/code-maze.com/aspnet-configuration-creating-custom-provider/Home-Page-green.png)

It still works as it did previously! You can refresh the page a few times to make sure the color of the title still changes.

---

## Conclusion

In this short article, we’ve seen how to implement our own custom configuration provider that reads the values from the database. In the next part, we’re going to learn how to [protect our sensitive configuration values](/explore/articles/code-maze.com/aspnet-configuration-securing-sensitive-data.md).

You can find other parts of this series on the [ASP.NET Core Web API page](/explore/articles/code-maze.com/net-core-series.md/#configuration).

---

<TagLinks />