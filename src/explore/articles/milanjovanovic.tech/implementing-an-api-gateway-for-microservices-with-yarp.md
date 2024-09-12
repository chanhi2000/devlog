---
lang: ko-KR
title: "Implementing an API Gateway For Microservices With YARP"
description: "Article(s) > Implementing an API Gateway For Microservices With YARP"
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
      content: "Article(s) > Implementing an API Gateway For Microservices With YARP"
    - property: og:description
      content: "Implementing an API Gateway For Microservices With YARP"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/implementing-an-api-gateway-for-microservices-with-yarp.html
prev: /programming/cs/articles/README.md
date: 2023-07-08
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_045.png
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
  name="Implementing an API Gateway For Microservices With YARP"
  desc="Large Microservice-based systems can consist of tens or even hunders of individual services. A client application needs to have all of this information to be able to make requests to the relevant microservice directly. However, this has numerous issues such as security concerns, complexity, and coupling. We can solve this by introducing an API gateway that acts as a reverse proxy to accept API calls from the client application, forwarding this traffic to the appropriate service. The API gateway also enforces security and ensures scalability and high availability. In this week's newsletter, I'll show you how to implement an API gateway using the YARP reverse proxy."
  url="https://milanjovanovic.tech/blog/implementing-an-api-gateway-for-microservices-with-yarp/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_045.png"/>

<!-- TODO: 작성 -->

<!-- 
Large **Microservice-based** systems can consist of tens or even hundreds of individual services.
A client application needs to have all of this information to be able to make requests to the relevant **microservice** directly.

However, this has numerous issues, such as security concerns, increased complexity, and coupling.

We can solve this by introducing an **API gateway** that acts as a **reverse proxy** to accept API calls from the client application and forward them to the appropriate service.

The **API gateway** also enforces security and ensures scalability and high availability.

In this week's newsletter, I'll show you how to implement an **API gateway** for your **microservices system** using the **YARP reverse proxy**.

Here's what we will cover:

- Difference between **API gateway** and **reverse proxy**
<li>Installing and configuring **YARP**
<li>Creating an **API gateway** with **YARP**
<li>**Authentication** and **rate limiting** on the **API gateway**

Let's dive in.

---

## whats-the-difference-between-an-api-gateway-and-a-reverse-proxy"><a href="#whats-the-difference-between-an-api-gateway-and-a-reverse-proxy">What's The Difference Between an API Gateway And a Reverse Proxy?

A **reverse proxy** and an **API gateway** are similar concepts, but they serve different purposes.

A **reverse proxy** acts as an intermediary between clients and servers.
The clients can only call the backend servers through the **reverse proxy**, which forwards the request to the appropriate server.
It hides the implementation details of individual servers inside the internal network.

A **reverse proxy** is commonly used for:

- Load balancing
<li>Caching
<li>Security
<li>SSL termination

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%272602%27%20height=%271502%27/%3e"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img srcSet="/blogs/mnw_045/reverse_proxy.png?imwidth=3840 1x" src="/blogs/mnw_045/reverse_proxy.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>
An **API gateway** is a specific type of **reverse proxy** designed for managing APIs.
It acts as a single entry point for API consumers to the various backend services.

The key characteristics of an **API gateway** are:

- Request routing and composition
<li>Request/response transformations
<li>Authentication and authorization
<li>Rate limiting
<li>Monitoring

Also, note that an **API gateway** can perform **load balancing** and other functionalities mentioned for reverse proxies.

Now let's see how to use a **reverse proxy** to implement an **API gateway**.

---

## installing-and-configuring-yarp"><a href="#installing-and-configuring-yarp">Installing And Configuring YARP

**YARP** (Yet Another Reverse Proxy) is a library developed by Microsoft to address the needs of various teams needing to build a **reverse proxy**.
It's open source and built with .NET, so it integrates nicely with the existing ecosystem.

Let's install `Yarp.ReverseProxy` **NuGet** package to get started:

```pwsh
Install-Package Yarp.ReverseProxy

```

Next, we're going to call:

- `AddReverseProxy` to add the required services for **YARP**
<li>`LoadFromConfig` to load the **reverse proxy** configuration from application settings
<li>`MapReverseProxy` to introduce the **reverse proxy** middleware

```cs
var builder = WebApplication.CreateBuilder(args);

<span class="code-line highlight-line">builder.Services.AddReverseProxy()
<span class="code-line highlight-line">    .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));

var app = builder.Build();

<span class="code-line highlight-line">app.MapReverseProxy();

app.Run();

```

We need to tell the **YARP** reverse proxy how to route the incoming requests to the individual microservices.

**YARP** uses the concept of `Routes` to represent request patterns for the proxy and `Clusters` to represent the services to forward those requests.

```json
{
    "ReverseProxy": {
<span class="code-line highlight-line">        "Routes": {
            ...
        },
<span class="code-line highlight-line">        "Clusters": {
            ...
        }
    }
}

```

Here's an example **YARP configuration** with a `{**catch-all}` pattern that will route all incoming requests to the one destination server.

```json
{
  "ReverseProxy": {
    "Routes": {
      "ROUTE_NAME": {
        "ClusterId": "CLUSTER_NAME",
        "Match": {
          "Path": "{**catch-all}"
        }
      }
    },
    "Clusters": {
      "CLUSTER_NAME": {
        "Destinations": {
          "destination1": {
            "Address": "https://www.milanjovanovic.tech/"
          }
        }
      }
    }
  }
}

```

---

## implementing-an-api-gateway-with-yarp"><a href="#implementing-an-api-gateway-with-yarp">Implementing an API Gateway With YARP

We can use **YARP** to build an **API gateway** by providing the configuration for the services we want to route traffic to.

I created a sample <a href="https://github.com/m-jovanovic/yarp-api-gateway-sample">API gateway implementation with YARP</a> on GitHub, so you can give it a try.
The system has two services, the `Users.Api` and `Products.Api`, which are .NET 7 applications.

If a request comes in matching the `/users-service/{**catch-all}`, for example `/users-service/users`, it will be routed to the `users-cluster`.
The same logic applies for the `products-cluster`. We can apply more advanced transformations through the `Transforms` section.

```json
{
  "ReverseProxy": {
    "Routes": {
      "users-route": {
        "ClusterId": "users-cluster",
        "Match": {
          "Path": "/users-service/{**catch-all}"
        },
        "Transforms": [{ "PathPattern": "{**catch-all}" }]
      },
      "products-route": {
        "ClusterId": "products-cluster",
        "Match": {
          "Path": "/products-service/{**catch-all}"
        },
        "Transforms": [{ "PathPattern": "{**catch-all}" }]
      }
    },
    "Clusters": {
      "users-cluster": {
        "Destinations": {
          "destination1": {
            "Address": "https://localhost:5201/"
          }
        }
      },
      "products-cluster": {
        "Destinations": {
          "destination1": {
            "Address": "https://localhost:5101/"
          }
        }
      }
    }
  }
}

```

We now have a functioning **API gateway** built with **YARP**, routing requests to two individual services.

But what else can we do with **YARP**?

---

## adding-authentication"><a href="#adding-authentication">Adding Authentication

The **API gateway** can enforce **authentication** and **authorization** at the entry point to the system before letting authenticated requests proceed.

And **YARP** supports integrating with the existing authentication & authorization middleware.

You first need to define an **authorization policy**:

```cs
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("authenticated", policy =>
        policy.RequireAuthenticatedUser());
});

```

And call `UseAuthentication` and `UseAuthorization` to add the respective middleware to the request pipeline.
It's important to add them before calling `MapReverseProxy`.

```cs
<span class="code-line highlight-line">app.UseAuthentication();

<span class="code-line highlight-line">app.UseAuthorization();

app.MapReverseProxy();

```

Now all you have to do is add the `AuthorizationPolicy` section to the reverse proxy configuration:

```json
"users-route": {
  "ClusterId": "users-cluster",
<span class="code-line highlight-line">  "AuthorizationPolicy": "authenticated",
  "Match": {
    "Path": "/users-service/{**catch-all}"
  },
  "Transforms": [
    { "PathPattern": "{**catch-all}" }
  ]
}

```

**YARP** will forward most credentials to the proxied services, such as cookies or bearer tokens because it might be important to identify the user in the individual microservices.

---

## adding-rate-limiting"><a href="#adding-rate-limiting">Adding Rate Limiting

You can also use an **API gateway** to introduce **rate limiting** to your system.
It's a technique to limit the number of requests to your API to **improve security** and reduce the load on the servers.

You can learn more about <a href="how-to-use-rate-limiting-in-aspnet-core">how to use rate limiting in .NET here.</a>

As you can already guess, **YARP** supports the native **rate limiting** mechanism added in .NET 7.

All you need to do is define a **rate limit policy**:

```cs
builder.Services.AddRateLimiter(rateLimiterOptions =>
{
    rateLimiterOptions.AddFixedWindowLimiter("fixed", options =>
    {
        options.Window = TimeSpan.FromSeconds(10);
        options.PermitLimit = 5;
    });
});

```

Then you need to call `UseRateLimiter` to add the rate limiter middleware to the request pipeline.
It's important to do it before calling `MapReverseProxy`.

```cs
<span class="code-line highlight-line">app.UseRateLimiter();

app.MapReverseProxy();

```

And then, you can apply rate limiting to the desired route using the `RateLimiterPolicy` section in the reverse proxy configuration:

```json
"products-route": {
  "ClusterId": "products-cluster",
<span class="code-line highlight-line">  "RateLimiterPolicy": "fixed",
  "Match": {
    "Path": "/products-service/{**catch-all}"
  },
  "Transforms": [
    { "PathPattern": "{**catch-all}" }
  ]
}

```

---

## in-summary"><a href="#in-summary">In Summary

An **API gateway** is a critical component for a robust **microservices system** implementation.

And **YARP** is an excellent option if you want to build an **API gateway** with .NET.

I created a sample API gateway implementation with YARP, which you can find <a href="https://github.com/m-jovanovic/yarp-api-gateway-sample">here.</a>
The system consists of two APIs, and the API gateway is configured to route requests between them.
It also implements:

- <a href="https://microsoft.github.io/reverse-proxy/articles/authn-authz.html">Authentication</a>
<li><a href="how-to-use-rate-limiting-in-aspnet-core">Rate limiting</a>

In this newsletter, we only scratched the surface of what's possible with **YARP**.

Here are some useful resources if you want to learn more:

- <a href="https://microsoft.github.io/reverse-proxy/articles/index.html">YARP docs</a>
<li><a href="https://microsoft.github.io/reverse-proxy/articles/load-balancing.html">Load balancing</a>
<li><a href="https://microsoft.github.io/reverse-proxy/articles/session-affinity.html">Session affinity</a>
<li><a href="https://microsoft.github.io/reverse-proxy/articles/transforms.html">Request/response transformations</a>

That's all for today.

Hope it was helpful.

**Today's action step:**
Download the <a href="https://github.com/m-jovanovic/yarp-api-gateway-sample">source code</a> for the sample application implementing an API gateway with YARP, and take it for a spin.
You can challenge yourself by creating multiple instances of a single service and configuring load balancing with the various load balancing algorithms.

-->

---

<TagLinks />