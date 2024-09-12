---
lang: ko-KR
title: Extending HttpClient With Delegating Handlers in ASP.NET Core
description: Article(s) > Extending HttpClient With Delegating Handlers in ASP.NET Core
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
      content: Article(s) > Extending HttpClient With Delegating Handlers in ASP.NET Core
    - property: og:description
      content: Extending HttpClient With Delegating Handlers in ASP.NET Core
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/extending-httpclient-with-delegating-handlers-in-aspnetcore.html
prev: /programming/cs/articles/README.md
date: 2024-01-13
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_072.png
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
  name="Extending HttpClient With Delegating Handlers in ASP.NET Core"
  desc="Delegating handlers are like ASP.NET Core middleware. Except they work with the HttpClient. I'll show you how to work with delegating handlers"
  url="https://milanjovanovic.tech/blog/extending-httpclient-with-delegating-handlers-in-aspnetcore/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_072.png"/>

<!-- TODO: 작성 -->

<!-- 
<a href="https://learn.microsoft.com/en-us/dotnet/api/system.net.http.delegatinghandler?view=net-8.0">Delegating handlers</a> are like <a href="3-ways-to-create-middleware-in-asp-net-core">ASP.NET Core middleware</a>.
Except they work with the <a href="the-right-way-to-use-httpclient-in-dotnet">`HttpClient`</a>.
The ASP.NET Core request pipeline allows you to introduce custom behavior with <a href="3-ways-to-create-middleware-in-asp-net-core">middleware.</a>
You can solve many cross-cutting concerns using middleware — logging, tracing, validation, authentication, authorization, etc.

But, an important aspect here is that middleware works with incoming HTTP requests to your API.
Delegating handlers work with outgoing requests.

<a href="https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpclient?view=net-8.0">`HttpClient`</a> is my preferred way of sending HTTP requests in ASP.NET Core.
It's straightforward to use and solves most of my use cases.
You can use delegating handlers to extend the `HttpClient` with behavior before or after sending an HTTP request.

Today, I want to show you how to use a <a href="https://learn.microsoft.com/en-us/dotnet/api/system.net.http.delegatinghandler?view=net-8.0">`DelegatingHandler`</a> to introduce:

- Logging
<li>Resiliency
<li>Authentication

---

## configuring-an-httpclient"><a href="#configuring-an-httpclient">Configuring an HttpClient

Here's a very simple application that:

- Configures the `GitHubService` class as a typed HTTP client
<li>Sets the `HttpClient.BaseAddress` to point to the GitHub API
<li>Exposes an endpoint that retrieves a GitHub user by their username

We're going to extend the `GitHubService` behavior using delegating handlers.

```cs
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHttpClient<GitHubService>(httpClient =>
{
    httpClient.BaseAddress = new Uri("https://api.github.com");
});

var app = builder.Build();

app.MapGet("api/users/{username}", async (
    string username,
    GitHubService gitHubService) =>
{
    var content = await gitHubService.GetByUsernameAsync(username);

    return Results.Ok(content);
});

app.Run();

```

The `GitHubService` class is a <a href="the-right-way-to-use-httpclient-in-dotnet#replacing-named-clients-with-typed-clients">typed client</a> implementation.
Typed clients allow you to expose a strongly typed API and hide the `HttpClient`.
The runtime takes care of providing a configured `HttpClient` instance through dependency injection.
You also don't have to think about disposing of the `HttpClient`.
It's resolved from an underlying `IHttpClientFactory` that manages the `HttpClient` lifetime.

```cs
public class GitHubService(HttpClient client)
{
    public async Task<GitHubUser?> GetByUsernameAsync(string username)
    {
        var url = $"users/{username}";

        return await client.GetFromJsonAsync<GitHubUser>(url);
    }
}

```

---

## logging-http-requests-using-delegating-handlers"><a href="#logging-http-requests-using-delegating-handlers">Logging HTTP Requests Using Delegating Handlers

Let's start with a simple example.
We will add logging before and after sending an HTTP request.
For this, we will to create a custom delegating handler - `LoggingDelegatingHandler`.

The custom delegating handler implements the `DelegatingHandler` base class.
Then, you can override the `SendAsync` method to introduce additional behavior.

```cs
public class LoggingDelegatingHandler(ILogger<LoggingDelegatingHandler> logger)
    : DelegatingHandler
{
    protected override async Task<HttpResponseMessage> SendAsync(
        HttpRequestMessage request,
        CancellationToken cancellationToken)
    {
        try
        {
            logger.LogInformation("Before HTTP request");

            var result = await base.SendAsync(request, cancellationToken);

            result.EnsureSuccessStatusCode();

            logger.LogInformation("After HTTP request");

            return result;
        }
        catch (Exception e)
        {
            logger.LogError(e, "HTTP request failed");

            throw;
        }
    }
}

```

You also need to register the `LoggingDelegatingHandler` with dependency injection.
Delegating handlers must be registered as **transient** services.

The `AddHttpMessageHandler` method adds the `LoggingDelegatingHandler` as a delegating handler for the `GitHubService`.
Any HTTP request sent using the `GitHubService` will first go through the `LoggingDelegatingHandler`.

```cs
<span class="code-line highlight-line">builder.Services.AddTransient<LoggingDelegatingHandler>();

builder.Services.AddHttpClient<GitHubService>(httpClient =>
{
    httpClient.BaseAddress = new Uri("https://api.github.com");
})
<span class="code-line highlight-line">.AddHttpMessageHandler<LoggingDelegatingHandler>();

```

Let's see what else we can do.

---

## adding-resiliency-with-delegating-handlers"><a href="#adding-resiliency-with-delegating-handlers">Adding Resiliency With Delegating Handlers

Building <a href="https://learn.microsoft.com/en-us/dotnet/core/resilience/?tabs=dotnet-cli">resilient</a> applications is an important requirement for cloud development.

The `RetryDelegatingHandler` class uses <a href="https://github.com/App-vNext/Polly">Polly</a> to create an `AsyncRetryPolicy`.
The retry policy wraps the HTTP request and retries it in case of a transient failure.

```cs
public class RetryDelegatingHandler : DelegatingHandler
{
    private readonly AsyncRetryPolicy<HttpResponseMessage> _retryPolicy =
        Policy<HttpResponseMessage>
            .Handle<HttpRequestException>()
            .RetryAsync(2);

    protected override async Task<HttpResponseMessage> SendAsync(
        HttpRequestMessage request,
        CancellationToken cancellationToken)
    {
        var policyResult = await _retryPolicy.ExecuteAndCaptureAsync(
            () => base.SendAsync(request, cancellationToken));

        if (policyResult.Outcome == OutcomeType.Failure)
        {
            throw new HttpRequestException(
                "Something went wrong",
                policyResult.FinalException);
        }

        return policyResult.Result;
    }
}

```

You also need to register the `RetryDelegatingHandler` with dependency injection.
Also, remember to configure it as a message handler.
In this example, I'm chaining two delegating handlers together, and they will run one after another.

```cs
<span class="code-line highlight-line">builder.Services.AddTransient<RetryDelegatingHandler>();

builder.Services.AddHttpClient<GitHubService>(httpClient =>
{
    httpClient.BaseAddress = new Uri("https://api.github.com");
})
.AddHttpMessageHandler<LoggingDelegatingHandler>()
<span class="code-line highlight-line">.AddHttpMessageHandler<RetryDelegatingHandler>();

```

---

## solving-authentication-with-delegating-handlers"><a href="#solving-authentication-with-delegating-handlers">Solving Authentication With Delegating Handlers

Authentication is a cross-cutting concern you will have to solve in any microservices application.
A common use case for delegating handlers is adding the `Authorization` header before sending an HTTP request.

For example, the GitHub API requires an access token to be present for authenticating incoming requests.
The `AuthenticationDelegatingHandler` class adds the `Authorization` header value from the `GitHubOptions`.
Another requirement is specifying the `User-Agent` header, which is set from the app configuration.

```cs
public class AuthenticationDelegatingHandler(IOptions<GitHubOptions> options)
    : DelegatingHandler
{
    protected override Task<HttpResponseMessage> SendAsync(
        HttpRequestMessage request,
        CancellationToken cancellationToken)
    {
        request.Headers.Add("Authorization", options.Value.AccessToken);
        request.Headers.Add("User-Agent", options.Value.UserAgent);

        return base.SendAsync(request, cancellationToken);
    }
}

```

Don't forget to configure the `AuthenticationDelegatingHandler` with the `GitHubService`:

```cs
<span class="code-line highlight-line">builder.Services.AddTransient<AuthenticationDelegatingHandler>();

builder.Services.AddHttpClient<GitHubService>(httpClient =>
{
    httpClient.BaseAddress = new Uri("https://api.github.com");
})
.AddHttpMessageHandler<LoggingDelegatingHandler>()
.AddHttpMessageHandler<RetryDelegatingHandler>()
<span class="code-line highlight-line">.AddHttpMessageHandler<AuthenticationDelegatingHandler>();

```

Here's a more involved authentication example using the `KeyCloakAuthorizationDelegatingHandler`.
This is a delegating handler that acquires the access token from <a href="https://www.keycloak.org/">Keycloak</a>.
Keycloak is an open-source identity and access management service.

I used Keycloak as the identity provider in my <a href="/pragmatic-clean-architecture">Pragmatic Clean Architecture</a> course.

The delegating handler in this example uses an <a href="https://oauth.net/2/">OAuth 2.0</a> <a href="https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/">client credentials</a> grant flow to obtain an access token.
This grant is used when applications request an access token to access their own resources, not on behalf of a user.

```cs
public class KeyCloakAuthorizationDelegatingHandler(
    IOptions<KeycloakOptions> keycloakOptions)
    : DelegatingHandler
{
    protected override async Task<HttpResponseMessage> SendAsync(
        HttpRequestMessage request,
        CancellationToken cancellationToken)
    {
        var authToken = await GetAccessTokenAsync();

        request.Headers.Authorization = new AuthenticationHeaderValue(
            JwtBearerDefaults.AuthenticationScheme,
            authToken.AccessToken);

        var httpResponseMessage = await base.SendAsync(
            request,
            cancellationToken);

        httpResponseMessage.EnsureSuccessStatusCode();

        return httpResponseMessage;
    }

    private async Task<AuthToken> GetAccessTokenAsync()
    {
        var params = new KeyValuePair<string, string>[]
        {
            new("client_id", _keycloakOptions.Value.AdminClientId),
            new("client_secret", _keycloakOptions.Value.AdminClientSecret),
            new("scope", "openid email"),
            new("grant_type", "client_credentials")
        };

        var content = new FormUrlEncodedContent(params);

        var authRequest = new HttpRequestMessage(
            HttpMethod.Post,
            new Uri(_keycloakOptions.TokenUrl))
        {
            Content = content
        };

        var response = await base.SendAsync(authRequest, cancellationToken);

        response.EnsureSuccessStatusCode();

        return await response.Content.ReadFromJsonAsync<AuthToken>() ??
               throw new ApplicationException();
    }
}

```

---

## takeaway"><a href="#takeaway">Takeaway

Delegating handlers give you a powerful mechanism to extend the behavior when sending requests with an `HttpClient`.
You can use delegating handlers to solve cross-cutting concerns, similar to how you would use middleware.

Here are a few ideas on how you could use delegating handlers:

- Logging before and after sending HTTP requests
<li>Introducing resilience policies (retry, fallback)
<li>Validating the HTTP request content
<li>Authenticating with an external API

I'm sure you can come up with a few use cases yourself.

I made a video showing how to <a href="https://youtu.be/_u6v4D6qgDI">implement delegating handlers</a>, and you can <a href="https://youtu.be/_u6v4D6qgDI">watch it here.</a>

Thanks for reading, and stay awesome!

-->

---

<TagLinks />