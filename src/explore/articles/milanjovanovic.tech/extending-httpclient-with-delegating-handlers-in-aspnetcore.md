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

[<FontIcon icon="fa-brands fa-microsoft"/>Delegating handlers](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.delegatinghandler?view=net-8.0) are like [ASP.NET Core middleware](/explore/articles/milanjovanovic.tech/3-ways-to-create-middleware-in-asp-net-core.md). Except they work with the [`HttpClient`](/explore/articles/milanjovanovic.tech/the-right-way-to-use-httpclient-in-dotnet.md). The ASP.NET Core request pipeline allows you to introduce custom behavior with [middleware](/explore/articles/milanjovanovic.tech/3-ways-to-create-middleware-in-asp-net-core.md). You can solve many cross-cutting concerns using middleware — logging, tracing, validation, authentication, authorization, etc.

But, an important aspect here is that middleware works with incoming HTTP requests to your API. Delegating handlers work with outgoing requests.

[<FontIcon icon="fa-brands fa-microsoft"/>`HttpClient`](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpclient?view=net-8.0) is my preferred way of sending HTTP requests in ASP.NET Core. It's straightforward to use and solves most of my use cases. You can use delegating handlers to extend the `HttpClient` with behavior before or after sending an HTTP request.

Today, I want to show you how to use a [<FontIcon icon="fa-brands fa-microsoft"/>`DelegatingHandler`](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.delegatinghandler?view=net-8.0) to introduce:

- Logging
- Resiliency
- Authentication

---

## Configuring an HttpClient

Here's a very simple application that:

- Configures the `GitHubService` class as a typed HTTP client
- Sets the `HttpClient.BaseAddress` to point to the GitHub API
- Exposes an endpoint that retrieves a GitHub user by their username

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

The `GitHubService` class is a [typed client](/explore/articles/milanjovanovic.tech/the-right-way-to-use-httpclient-in-dotnet#replacing-named-clients-with-typed-clients.md) implementation. Typed clients allow you to expose a strongly typed API and hide the `HttpClient`. The runtime takes care of providing a configured `HttpClient` instance through dependency injection. You also don't have to think about disposing of the `HttpClient`. It's resolved from an underlying `IHttpClientFactory` that manages the `HttpClient` lifetime.

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

## Logging HTTP Requests Using Delegating Handlers

Let's start with a simple example. We will add logging before and after sending an HTTP request. For this, we will to create a custom delegating handler - `LoggingDelegatingHandler`.

The custom delegating handler implements the `DelegatingHandler` base class. Then, you can override the `SendAsync` method to introduce additional behavior.

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

You also need to register the `LoggingDelegatingHandler` with dependency injection. Delegating handlers must be registered as **transient** services.

The `AddHttpMessageHandler` method adds the `LoggingDelegatingHandler` as a delegating handler for the `GitHubService`. Any HTTP request sent using the `GitHubService` will first go through the `LoggingDelegatingHandler`.

```cs{1,7}
builder.Services.AddTransient<LoggingDelegatingHandler>();

builder.Services.AddHttpClient<GitHubService>(httpClient =>
{
    httpClient.BaseAddress = new Uri("https://api.github.com");
})
.AddHttpMessageHandler<LoggingDelegatingHandler>();
```

Let's see what else we can do.

---

## Adding Resiliency With Delegating Handlers

Building [<FontIcon icon="fa-brands fa-microsoft"/>resilient](https://learn.microsoft.com/en-us/dotnet/core/resilience/?tabs=dotnet-cli) applications is an important requirement for cloud development.

The `RetryDelegatingHandler` class uses [Polly (<FontIcon icon="iconfont icon-github"/>`App-vNext/Polly`)](https://github.com/App-vNext/Polly) to create an `AsyncRetryPolicy`. The retry policy wraps the HTTP request and retries it in case of a transient failure.

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

You also need to register the `RetryDelegatingHandler` with dependency injection. Also, remember to configure it as a message handler. In this example, I'm chaining two delegating handlers together, and they will run one after another.

```cs{1,8}
builder.Services.AddTransient<RetryDelegatingHandler>();

builder.Services.AddHttpClient<GitHubService>(httpClient =>
{
    httpClient.BaseAddress = new Uri("https://api.github.com");
})
.AddHttpMessageHandler<LoggingDelegatingHandler>()
.AddHttpMessageHandler<RetryDelegatingHandler>();
```

---

## Solving Authentication With Delegating Handlers

Authentication is a cross-cutting concern you will have to solve in any microservices application. A common use case for delegating handlers is adding the `Authorization` header before sending an HTTP request.

For example, the GitHub API requires an access token to be present for authenticating incoming requests. The `AuthenticationDelegatingHandler` class adds the `Authorization` header value from the `GitHubOptions`. Another requirement is specifying the `User-Agent` header, which is set from the app configuration.

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

```cs{1,9}
builder.Services.AddTransient<AuthenticationDelegatingHandler>();

builder.Services.AddHttpClient<GitHubService>(httpClient =>
{
    httpClient.BaseAddress = new Uri("https://api.github.com");
})
.AddHttpMessageHandler<LoggingDelegatingHandler>()
.AddHttpMessageHandler<RetryDelegatingHandler>()
.AddHttpMessageHandler<AuthenticationDelegatingHandler>();
```

Here's a more involved authentication example using the `KeyCloakAuthorizationDelegatingHandler`. This is a delegating handler that acquires the access token from [<FontIcon icon="fas fa-globe"/>Keycloak](https://keycloak.org/). Keycloak is an open-source identity and access management service.

I used Keycloak as the identity provider in my [Pragmatic Clean Architecture](/explore/articles/milanjovanovic.tech/pragmatic-clean-architecture/README.md) course.

The delegating handler in this example uses an [<FontIcon icon="fas fa-globe"/>OAuth 2.0](https://oauth.net/2/) [<FontIcon icon="fas fa-globe"/>client credentials](https://oauth.com/oauth2-servers/access-tokens/client-credentials/) grant flow to obtain an access token. This grant is used when applications request an access token to access their own resources, not on behalf of a user.

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

## Takeaway

Delegating handlers give you a powerful mechanism to extend the behavior when sending requests with an `HttpClient`. You can use delegating handlers to solve cross-cutting concerns, similar to how you would use middleware.

Here are a few ideas on how you could use delegating handlers:

- Logging before and after sending HTTP requests
- Introducing resilience policies (retry, fallback)
- Validating the HTTP request content
- Authenticating with an external API

I'm sure you can come up with a few use cases yourself.

I made a video showing how to [<FontIcon icon="fa-brands fa-youtube"/>implement delegating handlers](https://youtu.be/_u6v4D6qgDI), and you can [<FontIcon icon="fa-brands fa-youtube"/>watch it here.](https://youtu.be/_u6v4D6qgDI)

<VidStack src="youtube/_u6v4D6qgDI" />

Thanks for reading, and stay awesome!

---

<TagLinks />