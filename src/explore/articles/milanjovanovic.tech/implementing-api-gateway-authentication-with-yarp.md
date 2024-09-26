---
lang: ko-KR
title: Implementing API Gateway Authentication With YARP
description: Article(s) > Implementing API Gateway Authentication With YARP
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
      content: Article(s) > Implementing API Gateway Authentication With YARP
    - property: og:description
      content: Implementing API Gateway Authentication With YARP
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/implementing-api-gateway-authentication-with-yarp.html
prev: /programming/cs/articles/README.md
date: 2024-05-04
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_087.png
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
  name="Implementing API Gateway Authentication With YARP"
  desc="In this newsletter, we'll explore how you can implement API gateway authentication using YARP (Yet Another Reverse Proxy), a powerful and flexible reverse proxy library for .NET applications."
  url="https://milanjovanovic.tech/blog/implementing-api-gateway-authentication-with-yarp/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_087.png"/>

API gateways provide clients with a single point of entry. This streamlines their interactions with your system and ensures the security of your microservices or distributed system.

One critical aspect of API gateways is authentication - ensuring only authorized users and applications can access your valuable data and resources.

In this newsletter, we'll explore how you can implement API gateway authentication using [<FontIcon icon="fa-brands fa-microsoft"/>YARP](https://microsoft.github.io/reverse-proxy/index.html) (Yet Another Reverse Proxy), a powerful and flexible reverse proxy library for .NET applications.

Here's what we will cover:

- The role of API gateways
- Configuring authentication with YARP
- Creating custom authorization policies

Let's dive in.

---

## The Role of API Gateways

An [**API gateway**](/explore/articles/milanjovanovic.tech/implementing-an-api-gateway-for-microservices-with-yarp.md) is the "front door" to your backend services and APIs. It acts as an intermediary layer, handling client requests and routing them to the appropriate destinations.

The key benefits of API gateways are:

- **Centralized access**: All incoming requests must first pass through the gateway. This simplifies management and monitoring.
- **Service abstraction**: Clients interact only with the gateway. We can hide the complexity of the backend architecture from clients.
- **Performance enhancement**: Implement techniques like caching and [**load balancing**](/explore/articles/milanjovanovic.tech/horizontally-scaling-aspnetcore-apis-with-yarp-load-balancing.md) to optimize API performance.
- **Authentication and Authorization**: API gateways verify user and application identities, enforcing whether a request is allowed or not.

![API Gateway diagram.<br/>Source: [Modular Monolith Architecture](/explore/articles/milanjovanovic.tech/modular-monolith-architecture/README.md)](https://milanjovanovic.tech/blogs/mnw_088/api_gateway.png?imwidth=3840)

---

## Configuring Authentication With YARP

We can use the API gateway to authenticate and authorize requests before they are proxied to the destination servers. This can reduce the load on the destination servers, and introduce a layer of security. Implementing authentication on the API gateway ensures consistent policies are implemented across your applications.

If you're new to YARP, I recommend first reading about [**how to implement an API gateway with YARP**](/explore/articles/milanjovanovic.tech/implementing-an-api-gateway-for-microservices-with-yarp.md).

By default, YARP won't authenticate or authorize requests unless enabled in the route or application configuration.

We can start by introducing [<FontIcon icon="fa-brands fa-microsoft"/>authentication](https://docs.microsoft.com/aspnet/core/security/authentication/) and [<FontIcon icon="fa-brands fa-microsoft"/>authorization](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/introduction) middleware:

```cs{1-2}
app.UseAuthentication();
app.UseAuthorization();

app.MapReverseProxy();
```

This allows us to configure the authorization policy by providing the `AuthorizationPolicy` value in the route configuration.

There are two special values we can specify in a route's authorization parameter:

- `default` - The route will require an authenticated user.
- `anonymous` - The route will not require authorization regardless of any other configuration.

Here's how we can enforce that all incoming requests must be authenticated:

```json{6}
{
  // This is how we define reverse proxy routes.
  "Routes": {
    "api-route": {
      "ClusterId": "api-cluster",
      "AuthorizationPolicy": "default",
      "Match": {
        "Path": "api/{**catch-all}"
      }
    }
  }
}
```

We want to authorize any incoming request as soon as it hits the API gateway. However, the destination server may still need to know who the user is (authentication) and what they can do (authorization).

YARP will pass any credentials to the proxied request. By default, cookies, bearer tokens, and API keys will flow to the destination server.

---

## Creating Custom Authentication Policies

YARP can utilize the powerful [<FontIcon icon="fa-brands fa-microsoft"/>authorization policies](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/policies) feature in ASP.NET Core. We can specify a policy per route in the proxy configuration, and the rest is handled by existing ASP.NET Core authentication and authorization components.

```json{6,13}
{
  // This is how we define auth policies for reverse proxy routes.
  "Routes": {
    "api-route1": {
      "ClusterId": "api-cluster",
      "AuthorizationPolicy": "is-vip",
      "Match": {
        "Path": "api/hello-vip"
      }
    },
    "api-route2": {
      "ClusterId": "api-cluster",
      "AuthorizationPolicy": "default",
      "Match": {
        "Path": "api/{**catch-all}"
      }
    }
  }
}
```

Here's how we can create a custom `is-vip` policy with two components. It requires an authenticated user and `vip` claim with one of the defined allowed values to be present . To use this policy, we can just specify it as the value for the `AuthorizationPolicy` in the route configuration.

```cs
services.AddAuthorization(options =>
{
    options.AddPolicy("is-vip", policy =>
        policy
            .RequireAuthenticatedUser()
            .RequireClaim("vip", allowedValues: true.ToString()));
});
```

---

## Summary

API gateways provide a unified access point, streamlining client interactions and securing your backend services. Authentication is an essential element of API gateway security, controlling who can access your resources.

YARP offers a versatile solution for building .NET API gateways. By integrating with ASP.NET Core's authentication and authorization frameworks, YARP enables robust security mechanisms.

This flexibility really shines with support for custom authorization policies. This allows you to define [**granular access control**](/explore/articles/milanjovanovic.tech/master-claims-transformation-for-flexible-aspnetcore-authorization.md) based on user roles, claims, or other attributes.

Thanks for reading, and I'll see you next week.

::: note P.S.

Here's the complete [source code (<FontIcon icon="iconfont icon-github"/>`m-jovanovic/yarp-authentication`)](https://github.com/m-jovanovic/yarp-authentication) for this article if you want to try it out.

<SiteInfo
  name="m-jovanovic/yarp-authentication"
  desc="An example project demonstrating how to implement an API Gateway with authentication using YARP."
  url="https://github.com/m-jovanovic/yarp-authentication"
  logo="https://avatars.githubusercontent.com/u/34191235?s=96&v=4"
  preview="https://opengraph.githubassets.com/8f88b7fbb4e56e9a3c4b643b30cb9332e0589f668c40767bf9f5be9c4c3eec70/m-jovanovic/yarp-authentication"/>

:::

---

<TagLinks />