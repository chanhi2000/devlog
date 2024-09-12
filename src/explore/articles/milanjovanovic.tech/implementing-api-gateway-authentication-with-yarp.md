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

<!-- TODO: 작성 -->

<!-- 
API gateways provide clients with a single point of entry.
This streamlines their interactions with your system and ensures the security of your microservices or distributed system.

One critical aspect of API gateways is authentication - ensuring only authorized users and applications can access your valuable data and resources.

In this newsletter, we'll explore how you can implement API gateway authentication using <a href="https://microsoft.github.io/reverse-proxy/index.html">YARP</a> (Yet Another Reverse Proxy),
a powerful and flexible reverse proxy library for .NET applications.

Here's what we will cover:

- The role of API gateways
<li>Configuring authentication with YARP
<li>Creating custom authorization policies

Let's dive in.

---

## the-role-of-api-gateways"><a href="#the-role-of-api-gateways">The Role of API Gateways

An <a href="implementing-an-api-gateway-for-microservices-with-yarp">**API gateway**</a> is the "front door" to your backend services and APIs.
It acts as an intermediary layer, handling client requests and routing them to the appropriate destinations.

The key benefits of API gateways are:

- **Centralized access**: All incoming requests must first pass through the gateway. This simplifies management and monitoring.
<li>**Service abstraction**: Clients interact only with the gateway. We can hide the complexity of the backend architecture from clients.
<li>**Performance enhancement**: Implement techniques like caching and <a href="horizontally-scaling-aspnetcore-apis-with-yarp-load-balancing">**load balancing**</a> to optimize API performance.
<li>**Authentication and Authorization**: API gateways verify user and application identities, enforcing whether a request is allowed or not.

<figure><span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%272115%27%20height=%271591%27/%3e"><img alt="API Gateway diagram." src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="API Gateway diagram." srcSet="/blogs/mnw_088/api_gateway.png?imwidth=3840 1x" src="/blogs/mnw_088/api_gateway.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript><figcaption>Source: <a href="/modular-monolith-architecture">Modular Monolith Architecture</a>
</figcaption></figure>
---

## configuring-authentication-with-yarp"><a href="#configuring-authentication-with-yarp">Configuring Authentication With YARP

We can use the API gateway to authenticate and authorize requests before they are proxied to the destination servers.
This can reduce the load on the destination servers, and introduce a layer of security.
Implementing authentication on the API gateway ensures consistent policies are implemented across your applications.

If you're new to YARP, I recommend first reading about <a href="implementing-an-api-gateway-for-microservices-with-yarp">**how to implement an API gateway with YARP**</a>.

By default, YARP won't authenticate or authorize requests unless enabled in the route or application configuration.

We can start by introducing <a href="https://docs.microsoft.com/aspnet/core/security/authentication/">authentication</a>
and <a href="https://learn.microsoft.com/en-us/aspnet/core/security/authorization/introduction">authorization</a> middleware:

```cs
<span class="code-line highlight-line">app.UseAuthentication();
<span class="code-line highlight-line">app.UseAuthorization();

app.MapReverseProxy();

```

This allows us to configure the authorization policy by providing the `AuthorizationPolicy` value in the route configuration.

There are two special values we can specify in a route's authorization parameter:

- `default` - The route will require an authenticated user.
<li>`anonymous` - The route will not require authorization regardless of any other configuration.

Here's how we can enforce that all incoming requests must be authenticated:

```json
{
  // This is how we define reverse proxy routes.
  "Routes": {
    "api-route": {
      "ClusterId": "api-cluster",
<span class="code-line highlight-line">      "AuthorizationPolicy": "default",
      "Match": {
        "Path": "api/{**catch-all}"
      }
    }
  }
}

```

We want to authorize any incoming request as soon as it hits the API gateway.
However, the destination server may still need to know who the user is (authentication) and what they can do (authorization).

YARP will pass any credentials to the proxied request.
By default, cookies, bearer tokens, and API keys will flow to the destination server.

---

## creating-custom-authentication-policies"><a href="#creating-custom-authentication-policies">Creating Custom Authentication Policies

YARP can utilize the powerful <a href="https://learn.microsoft.com/en-us/aspnet/core/security/authorization/policies">authorization policies</a> feature in ASP.NET Core.
We can specify a policy per route in the proxy configuration, and the rest is handled by existing ASP.NET Core authentication and authorization components.

```json
{
  // This is how we define auth policies for reverse proxy routes.
  "Routes": {
    "api-route1": {
      "ClusterId": "api-cluster",
<span class="code-line highlight-line">      "AuthorizationPolicy": "is-vip",
      "Match": {
        "Path": "api/hello-vip"
      }
    },
    "api-route2": {
      "ClusterId": "api-cluster",
<span class="code-line highlight-line">      "AuthorizationPolicy": "default",
      "Match": {
        "Path": "api/{**catch-all}"
      }
    }
  }
}

```

Here's how we can create a custom `is-vip` policy with two components.
It requires an authenticated user and `vip` claim with one of the defined allowed values to be present .
To use this policy, we can just specify it as the value for the `AuthorizationPolicy` in the route configuration.

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

## summary"><a href="#summary">Summary

API gateways provide a unified access point, streamlining client interactions and securing your backend services.
Authentication is an essential element of API gateway security, controlling who can access your resources.

YARP offers a versatile solution for building .NET API gateways.
By integrating with ASP.NET Core's authentication and authorization frameworks, YARP enables robust security mechanisms.

This flexibility really shines with support for custom authorization policies.
This allows you to define <a href="master-claims-transformation-for-flexible-aspnetcore-authorization">**granular access control**</a>
based on user roles, claims, or other attributes.

Thanks for reading, and I'll see you next week.

**P.S.** Here's the complete <a href="https://github.com/m-jovanovic/yarp-authentication">source code</a> for this article if you want to try it out.

-->

---

<TagLinks />