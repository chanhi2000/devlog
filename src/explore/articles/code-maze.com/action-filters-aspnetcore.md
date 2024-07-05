---
lang: ko-KR
title: Implementing Action Filters in ASP.NET Core
description: Article(s) > Implementing Action Filters in ASP.NET Core
icon: iconfont icon-csharp
category: 
  - CSharp
  - Article(s)
tag: 
  - blog
  - code-maze.com
  - csharp
head:  
  - - meta:
    - property: og:title
      content: Article(s) > Implementing Action Filters in ASP.NET Core
    - property: og:description
      content: Implementing Action Filters in ASP.NET Core
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/code-maze.com/action-filters-aspnetcore.html
prev: /programming/csharp/articles/README.md
date: 2022-10-27
isOriginal: false
cover: /images/content/code-maze.com/action-filters-aspnetcore/banner.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CSharp > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/csharp/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Implementing Action Filters in ASP.NET Core"
  desc="Find out how to use action filters to write cleaner actions and create a reusable code to validate your actions in .NET Core Web API."
  url="https://code-maze.com/action-filters-aspnetcore/"
  logo="/images/content/code-maze.com/favicon.png"
  preview="/images/content/code-maze.com/action-filters-aspnetcore/banner.png"/>

Filters in .NET offer a great way to hook into the [MVC](/explore/articles/code-maze.com/asp-net-core-mvc-series.md) action invocation pipeline. Therefore, we can use filters to extract code that can be reused and make our actions cleaner and maintainable. There are some filters that are already provided by [ASP.NET Core](/explore/articles/code-maze.com/net-core-series.md) like the authorization filter, and there are the custom ones that we can create ourselves.

There are [different filter types](/explore/articles/code-maze.com/filters-in-asp-net-core-mvc.md):

- **Authorization filters** – They run first to determine whether a user is authorized for the current request
- **Resource filters** – They run right after the authorization filters and are very useful for caching and performance
- **Action filters** – They run right before and after the action method execution
- **Exception filters** – They are used to handle exceptions before the response body is populated
- **Result filters** – They run before and after the execution of the action methods result.

In this article, we are going to talk about Action filters and how to use them to create cleaner and reusable code in our Web API.

<VidStack src="youtube/dsSBooVXvvg" />

::: info

To download the source code for our starting project, you can check out the [start-project-branch (<FontIcon icon="iconfont icon-github"/>`CodeMazeBlog/action-filters-dotnetcore-webapi`)](https://github.com/CodeMazeBlog/action-filters-dotnetcore-webapi/tree/start-project). For the finished project refer to [end-project-branch (<FontIcon icon="iconfont icon-github"/>`CodeMazeBlog/action-filters-dotnetcore-webapi`)](https://github.com/CodeMazeBlog/action-filters-dotnetcore-webapi/tree/end-project)

:::

Let’s start.

---

## Action Filters Implementation

To create an Action filter, we need to create a class that inherits either from the `IActionFilter` interface or `IAsyncActionFilter` interface or from the `ActionFilterAttribute` class which is the implementation of the `IActionFilter`, `IAsyncActionFilter`, and a few different interfaces as well:

```csharp
public abstract class ActionFilterAttribute : Attribute, IActionFilter, IFilterMetadata, 
    IAsyncActionFilter, IResultFilter, IAsyncResultFilter, IOrderedFilter
```

In our examples, we are going to inherit from the `IActionFIlter` interface because it has all the method definitions we require.

To implement the synchronous Action filter that runs before and after action method execution, we need to implement `OnActionExecuting` and `OnActionExecuted` methods:

```csharp
namespace ActionFilters.Filters
{
    public class ActionFilterExample : IActionFilter
    {
        public void OnActionExecuting(ActionExecutingContext context)
        {
            // our code before action executes
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            // our code after action executes
        }
    }
}
```

We can do the same thing with an asynchronous filter by inheriting from `IAsyncActionFilter`, but we only have one method to implement the `OnActionExecutionAsync`:

```csharp
namespace ActionFilters.Filters
{
    public class AsyncActionFilterExample : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            // execute any code before the action executes
            var result = await next();
            // execute any code after the action executes
        }
    }
}
```

---

## The Scope of Action Filters

Like the other types of filters, the action filter can be added to different scope levels: Global, Action, Controller.

If we want to use our filter globally, we need to register it inside the `AddControllers()` method in the `ConfigureServices` method:

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddControllers(config => 
    {
        config.Filters.Add(new GlobalFilterExample());
    });
}
```

**In .NET 6 and above, we don’t have the Startup class, so we have to use the Program class:**

```csharp
builder.Services.AddControllers(config => 
{ 
    config.Filters.Add(new GlobalFilterExample()); 
});
```

But if we want to use our filter as a service type on the Action or Controller level, we need to register it in the same `ConfigureServices` method but as a service in the IoC container:

::: tabs

@tab:active .NET Core

```csharp
services.AddScoped<ActionFilterExample>();
services.AddScoped<ControllerFilterExample>();
```

@tab .NET 6 and above

```csharp
builder.Services.AddScoped<ActionFilterExample>(); 
builder.Services.AddScoped<ControllerFilterExample>();
```

:::

Finally, to use a filter registered on the Action or Controller level, we need to place it on top of the Controller or Action as a ServiceType:

```csharp
namespace AspNetCore.Controllers
{
    [ServiceFilter(typeof(ControllerFilterExample))]
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet]
        [ServiceFilter(typeof(ActionFilterExample))]
        public IEnumerable<string> Get()
        {
            return new string[] { "example", "data" };
        }
    }
}
```

---

## Order of Invocation

The order in which our filters are executed is as follows:

![Order of execution of filters - Action Filters](/images/content/code-maze.com/action-filters-aspnetcore/Order-of-Infocation-in-Action-Filters.png)

Of course, we can change the order of invocation by adding an additional property `Order` to the invocation statement:

```csharp
namespace AspNetCore.Controllers
{
    [ServiceFilter(typeof(ControllerFilterExample), Order=2)]
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet]
        [ServiceFilter(typeof(ActionFilterExample), Order=1)]
        public IEnumerable<string> Get()
        {
            return new string[] { "example", "data" };
        }

    }
}

```

Or something like this on top of the same action:

```csharp
[HttpGet]
[ServiceFilter(typeof(ActionFilterExample), Order=2)]
[ServiceFilter(typeof(ActionFilterExample2), Order=1)]
public IEnumerable<string> Get()
{
    return new string[] { "example", "data" };
}
```

---

## Improving the Code with Action Filters

If we open the starting project from the AppStart folder from our repository, we can find the `MoveController` class in the `Controllers` folder. This controller has an implementation for all the CRUD operations. For the sake of simplicity, we haven’t used any additional layers for our API. This project also implements global error handling so if you are not familiar with that topic, we suggest you read [Global Exception Handling in .NET Core Web API.](/explore/articles/code-maze.com/global-error-handling-aspnetcore.md)

Our actions are quite clean and readable without `try-catch` blocks due to global exception handling, but we can improve them even further.

The important thing to notice is that our `Movie` model inherits from the `IEntity` interface:

```csharp
[Table("Movie")]
public class Movie: IEntity
{
    [Key]
    public Guid Id { get; set; }
    [Required(ErrorMessage = "Name is required")]
    public string Name { get; set; }
    [Required(ErrorMessage = "Genre is required")]
    public string Genre { get; set; }
    [Required(ErrorMessage = "Director is required")]
    public string Director { get; set; }
}
```

So let’s start with the validation code from the POST and PUT actions.

---

## Validation with Action Filters

If we look at our [POST and PUT actions](/explore/articles/code-maze.com/net-core-web-development-part6.md), we can notice the repeated code in which we validate our `Movie` model:

```csharp
if (movie == null)
{
     return BadRequest("Movie object is null");
}

if (!ModelState.IsValid)
{
     return BadRequest(ModelState);
}
```

We can extract that code into a custom Action Filter class, thus making this code reusable and the action cleaner.

So let’s do that.

Let’s create a new folder in our solution explorer, and name it `ActionFilters`. Then inside that folder, we are going to create a new class `ValidationFilterAttribute`:

```csharp
using Microsoft.AspNetCore.Mvc.Filters;

namespace ActionFilters.ActionFilters
{
    public class ValidationFilterAttribute : IActionFilter
    {
        public void OnActionExecuting(ActionExecutingContext context)
        {
            
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            
        }
    }
}
```

Now we are going to modify the `OnActionExecuting` method to validate our model:

```csharp
using ActionFilters.Contracts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Linq;

namespace ActionFilters.ActionFilters
{
    public class ValidationFilterAttribute : IActionFilter
    {
        public void OnActionExecuting(ActionExecutingContext context)
        {
            var param = context.ActionArguments.SingleOrDefault(p => p.Value is IEntity);
            if(param.Value == null)
            {
                context.Result = new BadRequestObjectResult("Object is null");
                return;
            }
            
            if(!context.ModelState.IsValid)
            {
                context.Result = new UnprocessableEntityObjectResult(context.ModelState);
            }
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {          
        }
    }
}
```

Next, let’s register this action filter in the `ConfigureServices` method:

```csharp
public void ConfigureServices(IServiceCollection services)
{
       services.AddDbContext<MovieContext>(options =>
           options.UseSqlServer(Configuration.GetConnectionString("sqlConString")));

       services.AddScoped<ValidationFilterAttribute>();

       services.AddControllers();
}
```

**For .NET 6, we have to use the **`builder`** variable inside the **`Program`** class:**

```csharp
builder.Services.AddDbContext<MovieContext>(options =>
           options.UseSqlServer(Configuration.GetConnectionString("sqlConString")));
       
builder.Services.AddScoped<ValidationFilterAttribute>();

builder.Services.AddControllers();
```

Finally, let’s remove that validation code from our actions and call this action filter as a service:

```csharp
[HttpPost]
[ServiceFilter(typeof(ValidationFilterAttribute))]
public IActionResult Post([FromBody] Movie movie)
{
     _context.Movies.Add(movie);
     _context.SaveChanges();

     return CreatedAtRoute("MovieById", new { id = movie.Id }, movie);
}

[HttpPut("{id}")]
[ServiceFilter(typeof(ValidationFilterAttribute))]
public IActionResult Put(Guid id, [FromBody]Movie movie)
{
    var dbMovie = _context.Movies.SingleOrDefault(x => x.Id.Equals(id));
    if (dbMovie == null)
    {
        return NotFound();
    }

    dbMovie.Map(movie);

    _context.Movies.Update(dbMovie);
    _context.SaveChanges();

    return NoContent();
}
```

Excellent.

This code is much cleaner and more readable now without the validation part. And furthermore, the validation part is now reusable as long as our model classes inherit from the IEntity interface, which is quite common behavior.

Before we test this validation filter, we have to suppress validation from the `[ApiController]` attribute. If we don’t do it, it will overtake the validation from our action filter and always return 400 (BadRequest) for all validation errors. But as you’ve seen, if our model is invalid, we want to return the UnprocessableEntity result (422).

To suppress the default validation, we have to modify the `Startup` class:

::: tabs

@tab:active .NET Core

```csharp
services.Configure<ApiBehaviorOptions>(options =>
{
    options.SuppressModelStateInvalidFilter = true;
});
```

@tab .NET 6 in the Program class:

```csharp
builder.Services.Configure<ApiBehaviorOptions>(options =>
{
    options.SuppressModelStateInvalidFilter = true;
});
```

:::

Now, if we send a PUT request for example with the invalid model we will get the `Unprocessable Entity` response:

![Unprocessable Entity ActionFilter](/images/content/code-maze.com/action-filters-aspnetcore/02-New-Unprocessable-Entity-ActionFilter.png)

---

## Dependency Injection in Action Filters

If we take a look at our `GetById`, DELETE and PUT actions, we are going to see the code where we fetch the move by id from the database and check if it exists:

```csharp
var dbMovie = _context.Movies.SingleOrDefault(x => x.Id.Equals(id));
if (dbMovie == null)
{
     return NotFound();
}
```

That’s something we can extract to the Action Filter class as well, thus making it reusable in all the actions.

Of course, we need to inject our `context` in a new ActionFilter class by using dependency injection.

So, let’s create another Action Filter class `ValidateEntityExistsAttribute` in the `ActionFilters` folder and modify it:

```csharp
using System.Linq;

namespace ActionFilters.ActionFilters
{
    public class ValidateEntityExistsAttribute<T> : IActionFilter where T: class, IEntity
    {
        private readonly MovieContext _context;

        public ValidateEntityExistsAttribute(MovieContext context)
        {
            _context = context;
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            Guid id = Guid.Empty;

            if (context.ActionArguments.ContainsKey("id"))
            {
                id = (Guid)context.ActionArguments["id"];
            }
            else
            {
                context.Result = new BadRequestObjectResult("Bad id parameter");
                return;
            }

            var entity = _context.Set<T>().SingleOrDefault(x => x.Id.Equals(id));     
            if(entity == null)
            {
                context.Result = new NotFoundResult();
            }
            else
            {
                context.HttpContext.Items.Add("entity", entity);
            }
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
        }
    }
}
```

We’ve created this Action Filter class to be generic so that we could reuse it for any model in our project. Furthermore, if we find the entity in the database, we store it in `HttpContext` because we need that entity in our action methods and we don’t want to query the database two times (we would lose more than we gain if we double that action).

Now let’s register it:

::: tabs

@tab:active .NET Core

```csharp
services.AddScoped<ValidateEntityExistsAttribute<Movie>>();
```

@tab .NET 6 and above

```csharp
builder.Services.AddScoped<ValidateEntityExistsAttribute<Movie>>();
```

:::

And let’s modify our actions:

```csharp
[HttpGet("{id}", Name = "MovieById")]
[ServiceFilter(typeof(ValidateEntityExistsAttribute<Movie>))]
public IActionResult Get(Guid id)
{
    var dbMovie = HttpContext.Items["entity"] as Movie;

    return Ok(dbMovie);
}
[HttpPut("{id}")]
[ServiceFilter(typeof(ValidationFilterAttribute))]
[ServiceFilter(typeof(ValidateEntityExistsAttribute<Movie>))]
public IActionResult Put(Guid id, [FromBody]Movie movie)
{
    var dbMovie = HttpContext.Items["entity"] as Movie;

     dbMovie.Map(movie);

     _context.Movies.Update(dbMovie);
     _context.SaveChanges();

     return NoContent();
}

[HttpDelete("{id}")]
[ServiceFilter(typeof(ValidateEntityExistsAttribute<Movie>))]
public IActionResult Delete(Guid id)
{
    var dbMovie = HttpContext.Items["entity"] as Movie;

     _context.Movies.Remove(dbMovie);
     _context.SaveChanges();

     return NoContent();
}
```

Awesome.

Now our actions look great without code repetition, try-catch blocks, or additional fetch requests towards the database.

---

## Conclusion

Thank you for reading this article. We hope you have learned new useful things.

As we already said, we always recommend using Action Filters because they give us reusability in our code and cleaner code in our actions as well.

---

<TagLinks />