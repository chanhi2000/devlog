---
lang: ko-KR
title: "Refit in .NET: Building Robust API Clients in C#"
description: "Article(s) > Refit in .NET: Building Robust API Clients in C#"
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
      content: "Article(s) > Refit in .NET: Building Robust API Clients in C#"
    - property: og:description
      content: "Refit in .NET: Building Robust API Clients in C#"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/refit-in-dotnet-building-robust-api-clients-in-csharp.html
prev: /programming/cs/articles/README.md
date: 2024-09-07
isOriginal: false
author: Milan Jovanovic
cover: https://milanjovanovic.tech/blog-covers/mnw_106.png
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
  name="Refit in .NET: Building Robust API Clients in C#"
  desc="Discover how Refit simplifies API consumption in .NET applications, turning your HTTP API into a seamless, strongly-typed interface. This comprehensive guide covers everything from basic setup to advanced features, helping you build robust, maintainable API clients in C# with minimal boilerplate code."
  url="https://milanjovanovic.tech/blog/refit-in-dotnet-building-robust-api-clients-in-csharp/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_106.png"/>

<!-- TODO: 작성 -->

<!-- 
As a .NET developer, I've spent countless hours working with external APIs.
It's a crucial part of modern software development, but let's be honest - it can be a real pain sometimes.

We've all been there, wrestling with `HttpClient`, writing repetitive code, and hoping we didn't miss a parameter or header somewhere.

That's why I want to introduce you to **Refit**, a library that's been a game-changer for me.

Imagine turning your API into a live interface - sounds too good to be true, right?
But that's exactly what Refit does.
It handles all the HTTP heavy lifting, letting you focus on what matters: your application logic.

In this article, I'll explain how Refit can transform the way you work with APIs in your .NET projects.

---

## what-is-refit"><a href="#what-is-refit">What is Refit?

<a href="https://github.com/reactiveui/refit">Refit</a> is a type-safe REST library for .NET.
It allows you to define your API as an interface, which Refit then implements for you.
This approach reduces boilerplate code and makes your API calls more readable and maintainable.

You describe your API endpoints using method signatures and attributes, and Refit takes care of the rest.

Let me break down why I find Refit so powerful:

- **Automatic serialization and deserialization**:
You won't have to convert your objects to JSON and back.
Refit handles all of that for you.
<li>**Strongly-typed API definitions**:
Refit helps you catch errors early.
If you mistype a parameter or use the wrong data type, you'll know at compile time, not when your app crashes in production.
<li>**Support for various HTTP methods**:
GET, POST, PUT, PATCH, DELETE - Refit has you covered.
<li>**Request/response manipulations**:
You can add custom headers or handle specific content types in a straightforward way.

But what I appreciate most about Refit is how it promotes clean, readable code.
Your API calls become self-documenting.
Anyone reading your code can quickly understand what each method does without diving into implementation details.

---

## Setting Up and Using Refit in Your Project

Let's set up Refit and see it in action using the <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder API</a>.
We'll implement a full CRUD interface and demonstrate its usage in a <a href="automatically-register-minimal-apis-in-aspnetcore">**Minimal API application**</a>.

First, install the required NuGet packages:

```pwsh
Install-Package Refit
Install-Package Refit.HttpClientFactory
```

Now, let's create our Refit interface:

```cs
<span using Refit;

public interface IBlogApi
{
    [Get("/posts/{id}")]
    Task<Post> GetPostAsync(int id);

    [Get("/posts")]
    Task<List<Post>> GetPostsAsync();

    [Post("/posts")]
    Task<Post> CreatePostAsync([Body] Post post);

    [Put("/posts/{id}")]
    Task<Post> UpdatePostAsync(int id, [Body] Post post);

    [Delete("/posts/{id}")]
    Task DeletePostAsync(int id);
}

public <span class Post
{
    public int Id { <span get; <span set; }
    public string Title { <span get; <span set; }
    public string Body { <span get; <span set; }
    public int UserId { <span get; <span set; }
}
```

We define our `IBlogApi` interface with methods for all CRUD operations: GET (single and list), POST, PUT, and DELETE.
The `Post` class represents the structure of our blog posts.

Then you have to register Refit in your dependency injection container:

```cs
using Refit;

builder.Services
<span class="code-line highlight-line">    .AddRefitClient<IBlogApi>()
    .ConfigureHttpClient(c => c.BaseAddress = new Uri("https://jsonplaceholder.typicode.com"));
```

Finally, we can use `IBlogApi` in our Minimal API endpoints:

```cs
app.MapGet("/posts/{id}", async (int id, IBlogApi api) =>
    await api.GetPostAsync(id));

app.MapGet("/posts", async (IBlogApi api) =>
    await api.GetPostsAsync());

app.MapPost("/posts", async ([FromBody] Post post, IBlogApi api) =>
    await api.CreatePostAsync(post));

app.MapPut("/posts/{id}", async (int id, [FromBody] Post post, IBlogApi api) =>
    await api.UpdatePostAsync(id, post));

app.MapDelete("/posts/{id}", async (int id, IBlogApi api) =>
    await api.DeletePostAsync(id));
```

What I love about this setup is its simplicity.
We've created a fully functional API that communicates with an external service, all in just a few lines of code.
No manual HTTP requests, no raw JSON handling - Refit takes care of all that for us.

---

## Query Parameters and Route Binding

When working with APIs, you often need to send data as part of the URL, either in the route or as query parameters.
Refit makes this process simple and type-safe.

Let's extend our `IBlogApi` interface with some more complex scenarios:

```cs
public interface IBlogApi
{
    // Other methods omitted for brevity

    [Get("/posts")]
<span class="code-line highlight-line">    Task<List<Post>> GetPostsAsync([Query] PostQueryParameters parameters);

<span class="code-line highlight-line">    [Get("/users/{userId}/posts")]
    Task<List<Post>> GetUserPostsAsync(int userId);
}

public class PostQueryParameters
{
    public  int? UserId { get; set; }
    public  string? Title { get; set; }
}
```

Let's break this down:

- `GetPostsAsync` uses an object to represent query parameters. This approach is excellent for endpoints with many optional parameters. Refit will automatically convert this object into a query string.
- `GetUserPostsAsync` demonstrates passing in route parameters (`userId`) directly.

Using an object for query parameters makes your code type-safe and <a href="5-awesome-csharp-refactoring-tips">**refactoring-friendly**</a>.
If you need to add a new query parameter, you just add a property to `PostQueryParameters`.
Your existing code won't break, and your IDE can help you discover the new options.

---

## Dynamic Headers and Authentication

Another common requirement when integrating with APIs is including custom headers or authentication tokens with your requests.
Refit provides several ways to handle this, from simple static headers to dynamic, request-specific authentication.

Let's explore some scenarios:

```cs
public interface IBlogApi
{
    [Headers("User-Agent: MyAwesomeApp/1.0")]
    [Get("/posts")]
    Task<List<Post>> GetPostsAsync();

    [Get("/secure-posts")]
    Task<List<Post>> GetSecurePostsAsync([Header("Authorization")] string bearerToken);

    [Get("/user-posts")]
    Task<List<Post>> GetUserPostsAsync([Authorize(scheme: "Bearer")] string token);
}
```

- You can add a static header to all requests by using the `Headers` attribute
- With the `Header` attribute, you can pass a header value dynamically as a parameter
- The `Authorize` attribute is a convenient way to add Bearer token authentication

But what if you need to add the same dynamic header to all requests?

That's where `DelegatingHandler` comes in handy.

You can learn more about <a href="extending-httpclient-with-delegating-handlers-in-aspnetcore">**using delegating handlers in this article**</a>.

I've found delegating handlers especially helpful in providing API keys, which are typically static.

---

## JSON Serialization Options

Refit gives you flexibility when choosing and configuring your JSON serializer.
By default, Refit uses `System.Text.Json`, is the built-in JSON serializer in modern .NET versions.

However, you can easily switch to `Newtonsoft.Json` if you need its features.

Here's how you can configure Refit to use it.

First, install the Newtonsoft.Json support package:

```pwsh
Install-Package Refit.Newtonsoft.Json
```

Then, configure Refit to use Newtonsoft.Json:

```cs
<span using Newtonsoft.Json;
<span using Newtonsoft.Json.Serialization;
<span using Refit;

builder.Services.AddRefitClient<IBlogApi>(new RefitSettings
{
<span class="code-line highlight-line">    ContentSerializer = new NewtonsoftJsonContentSerializer(new JsonSerializerSettings
<span class="code-line highlight-line">    {
<span class="code-line highlight-line">        ContractResolver = new CamelCasePropertyNamesContractResolver(),
<span class="code-line highlight-line">        NullValueHandling = NullValueHandling.Ignore
<span class="code-line highlight-line">    })
})
.ConfigureHttpClient(c => c.BaseAddress = new Uri("https://jsonplaceholder.typicode.com"));
```

This setup uses camel case for property names and ignores null values when serializing.

`System.Text.Json` is faster and uses less memory, making it a great default choice.
However, `Newtonsoft.Json` offers more features and might be necessary for compatibility with older systems or specific serialization needs.

---

## Handling HTTP Responses

While Refit's default behavior of automatically deserializing responses into your defined types is convenient, there are times when you need more control over the HTTP response.

Refit provides two options for these scenarios:
<a href="https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpresponsemessage">`HttpResponseMessage`</a> and `ApiResponse<T>`.

Let's update the `IBlogApi` to use these types:

```cs
public interface IBlogApi
{
    [Get("/posts/{id}")]
    Task<HttpResponseMessage> GetPostRawAsync(int id);

    [Get("/posts/{id}")]
    Task<ApiResponse<Post>> GetPostWithMetadataAsync(int id);

    [Post("/posts")]
    Task<ApiResponse<Post>> CreatePostAsync([Body] Post post);
}
```

Now, let's break down how to use these, starting with `HttpResponseMessage`:

```cs
<span class="code-line highlight-line">HttpResponseMessage response = await blogApi.GetPostRawAsync(1);

if (response.IsSuccessStatusCode)
{
    var content = await response.Content.ReadAsStringAsync();
    var post = JsonSerializer.Deserialize<Post>(content);
    Console.WriteLine($"Retrieved post: {post.Title}");
}
else
{
    Console.WriteLine($"Error: {response.StatusCode}");
}
```

This approach gives you full control over the HTTP response. You can access status codes, headers, and the raw content.
But you will have to deal with deserialization manually.

`ApiResponse<T>` is a Refit-specific type that wraps the deserialized content and response metadata.
It's a great middle ground when you need the typed response and access to headers or status codes.

Here's a more complex example using `ApiResponse<T>` for creating a post:

```cs
var newPost = new Post { Title = "New Post", Body = "Content", UserId = 1 };

<span class="code-line highlight-line">ApiResponse<Post> createResponse = await blogApi.CreatePostAsync(newPost);

if (createResponse.IsSuccessStatusCode)
{
    var createdPost = createResponse.Content;
    var locationHeader = createResponse.Headers.Location;
    Console.WriteLine($"Created post with ID: {createdPost.Id}");
    Console.WriteLine($"Location: {locationHeader}");
}
else
{
    Console.WriteLine($"Error: {createResponse.Error.Content}");
    Console.WriteLine($"Status: {createResponse.StatusCode}");
}
```

This approach allows you to access the created resource, check specific headers like `Location`, and handle errors gracefully.

---

## Takeaway

Refit transforms the way we interact with APIs in .NET applications.
Converting your API into a strongly typed interface simplifies your code, enhances type safety, and improves maintainability.

The key Refit benefits we've explored include:

- Simplified API calls with automatic serialization and deserialization
- Flexible parameter handling for complex queries
- Easy management of headers and authentication
- Options for JSON serialization to fit your project's needs
- Granular control over HTTP responses when required

In my experience, Refit shines in projects of all sizes.
I've used it in small applications and large-scale microservices architectures.
It eliminates boilerplate code, reduces the risk of errors, and allows you to focus on your application's core logic rather than the intricacies of HTTP communication.

Remember, while Refit makes API interactions more straightforward, it's not a substitute for understanding the underlying principles of RESTful communication and HTTP.

That's all for today. Stay awesome, and I'll see you next week.

::: note P.S.

You can find the source code for this example in <a href="https://github.com/m-jovanovic/refit-client-example">**this repository**</a>.

:::

-->

---

<TagLinks />