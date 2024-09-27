---
lang: ko-KR
title: Horizontally Scaling ASP.NET Core APIs With YARP Load Balancing
description: Article(s) > Horizontally Scaling ASP.NET Core APIs With YARP Load Balancing
icon: iconfont icon-csharp
category: 
  - C#
  - DotNet
  - Node.js
  - Docker
  - Article(s)
tag: 
  - blog
  - milanjovanovic.tech
  - cs
  - c#
  - csharp
  - dotnet
  - node
  - nodejs
  - node-js
  - docker
  - container
head:
  - - meta:
    - property: og:title
      content: Article(s) > Horizontally Scaling ASP.NET Core APIs With YARP Load Balancing
    - property: og:description
      content: Horizontally Scaling ASP.NET Core APIs With YARP Load Balancing
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/horizontally-scaling-aspnetcore-apis-with-yarp-load-balancing.html
prev: /programming/cs/articles/README.md
date: 2024-03-30
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_083.png
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

```component VPCard
{
  "title": "Node.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-node/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Docker > Article(s)",
  "desc": "Article(s)",
  "link": "/devops/docker/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Horizontally Scaling ASP.NET Core APIs With YARP Load Balancing"
  desc="When a single server reaches its limits, performance degrades, leading to slow response times, errors, or complete downtime. We'll dive into load balancing, why it matters, and how YARP simplifies the process for .NET applications."
  url="https://milanjovanovic.tech/blog/horizontally-scaling-aspnetcore-apis-with-yarp-load-balancing/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_083.png"/>

Modern web applications need to serve increasing numbers of users and handle surges in traffic. When a single server reaches its limits, performance degrades, leading to slow response times, errors, or complete downtime.

Load balancing is a key technique to address these challenges and improve the scalability of your application.

In this article, we will explore:

- How to use [YARP (Yet Another Reverse Proxy)](/explore/articles/milanjovanovic.tech/implementing-an-api-gateway-for-microservices-with-yarp.md) to implement load balancing
- How to leverage horizontal scaling for performance gains
- How to utilize K6 as a load testing tool

We'll dive into load balancing, why it matters, and how YARP simplifies the process for .NET applications.

---

## Types of Software Scalability

Before exploring YARP and load balancing further, let's cover the fundamentals of scaling.

There are two main approaches:

- **Vertical Scaling**: Involves upgrading individual servers with more powerful hardware - more CPU cores, RAM, and faster storage. However, this has a few limitations: costs escalate quickly, and you'll still hit a performance ceiling.
- **Horizontal Scaling**: Involves adding more servers to your infrastructure and distributing the load intelligently among them. This approach offers greater scalability potential, as you can continue adding servers to handle more traffic.

Horizontal scaling is where load balancing comes in, and YARP shines bright in this approach.

---

## Adding a Reverse Proxy

[<FontIcon icon="fa-brands fa-microsoft"/>YARP](https://microsoft.github.io/reverse-proxy/index.html) is a high-performance reverse proxy library from Microsoft. It's designed with modern microservice architectures in mind. A reverse proxy sits in front of your backend servers, acting as a traffic director.

Setting up YARP is quite straightforward. You'll install the YARP NuGet package, create a basic configuration to define your backend destinations, and then activate the YARP middleware. YARP allows you to perform routing and transformation tasks on incoming requests before they reach your backend servers.

First, let's install the `Yarp.ReverseProxy` NuGet package:

```pwsh
Install-Package Yarp.ReverseProxy
```

Then, we're going to configure the required application services and introduce the YARP middleware to the request pipeline:

```cs{3-4,8}
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddReverseProxy()
    .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));

var app = builder.Build();

app.MapReverseProxy();

app.Run();
```

All that's left is adding the YARP configuration to our <FontIcon icon="iconfont icon-json"/>`appsettings.json` file. YARP uses `Routes` to represent incoming requests to the reverse proxy and `Clusters` to define the downstream services. The `{**catch-all}` pattern allows us to easily route all incoming requests.

```json
{
  "ReverseProxy": {
    "Routes": {
      "api-route": {
        "ClusterId": "api-cluster",
        "Match": {
          "Path": "{**catch-all}"
        },
        "Transforms": [{ "PathPattern": "{**catch-all}" }]
      }
    },
    "Clusters": {
      "api-cluster": {
        "Destinations": {
          "destination1": {
            "Address": "http://api:8080"
          }
        }
      }
    }
  }
}
```

This configures YARP as a pass-through proxy, but let's update it to support horizontal scaling.

---

## Scaling Out With YARP Load Balancing

The core of horizontal scaling with YARP lies in its various [<FontIcon icon="fa-brands fa-microsoft"/>load balancing strategies](https://microsoft.github.io/reverse-proxy/articles/load-balancing.html):

- `PowerOfTwoChoices`: Selects two random destinations and selects the one with the least assigned requests.
- `FirstAlphabetical`: Selects the alphabetically first available destination server.
- `LeastRequests`: Sends requests to servers with the least assigned requests.
- `RoundRobin`: Distributes requests evenly across backend servers.
- `Random`: Randomly selects a backend server for each request.

You configure these strategies within YARP's configuration file. The load balancing strategy can be configured using the `LoadBalancingPolicy` property on the cluster.

Here's what the updated YARP configuration looks like with `RoundRobin` load balancing:

```json{14,16-23}
{
  "ReverseProxy": {
    "Routes": {
      "api-route": {
        "ClusterId": "api-cluster",
        "Match": {
          "Path": "{**catch-all}"
        },
        "Transforms": [{ "PathPattern": "{**catch-all}" }]
      }
    },
    "Clusters": {
      "api-cluster": {
        "LoadBalancingPolicy": "RoundRobin",
        "Destinations": {
          "destination1": {
            "Address": "http://api-1:8080"
          },
          "destination2": {
            "Address": "http://api-2:8080"
          },
          "destination3": {
            "Address": "http://api-3:8080"
          }
        }
      }
    }
  }
}
```

Here's a diagram of what our system could look like with a YARP load balancer and horizontally scaled application servers.

The incoming API requests will first hit YARP, distributing the traffic to the application servers based on the load balancing strategy.
In this example, there's one database serving multiple application instances.

![Horizontal scaling with a YARP load balancer.](https://milanjovanovic.tech/blogs/mnw_083/horizontal_scaling.png?imwidth=3840)

And now, let's do some performance testing.

---

## Performance Testing with K6

To see the impact of our horizontal scaling efforts, we need to do some load testing. [<FontIcon icon="fas fa-globe"/>K6](https://k6.io/) is a modern, developer-friendly load testing tool. We'll write K6 scripts to simulate user traffic on our application and compare metrics like average response time and the number of successful requests per second.

The application we're going to scale horizontally has two API endpoints. The `POST /users` endpoint creates a new user, saves the user to a [<FontIcon icon="iconfont icon-postgresql"/>PostgreSQL](https://postgresql.org/) database, and returns the user's identifier. The `GET /users/id` endpoint returns a user with the given identifer if it exists.

Here's a k6 performance test that will:

- Ramp up to **20 virtual users**
- Send a `POST` request to the `/users` endpoint
- Check that the response is `201 Created`
- Send a `GET` request to the `/users/{id}` endpoint
- Check that the response is `200 OK`

Note that all API requests go through the YARP load balancer.

```js
import { check } from 'k6';
import http from 'k6/http';

export const options = {
  stages: [
    { duration: '10s', target: 20 },
    { duration: '1m40s', target: 20 },
    { duration: '10s', target: 0 }
  ]
};

export default function () {
  const proxyUrl = 'http://localhost:3000';

  const response = http.post(`${proxyUrl}/users`);

  check(response, {
    'response code was 201': (res) => res.status == 201
  });

  const userResponse = http.get(`${proxyUrl}/users/${response.body}`);

  check(userResponse, {
    'response code was 200': (res) => res.status == 200
  });
}
```

To make the performance testing results more consistent, we can limit the available resources on the [<FontIcon icon="fa-brands fa-docker"/>Docker](https://docker.com) containers to `1 CPU` and `0.5G` of RAM.

```yaml{4-5}
services:
  api:
    image: ${DOCKER_REGISTRY-}loadbalancingapi
    cpus: 1
    mem_limit: '0.5G'
    ports:
      - 5000:8080
    networks:
      - proxybackend
```

Finally, here are the k6 performance testing results:

```
|    API Instances   |     Request Duration     |    Requests Per Second    |
|------------------- |------------------------- |---------------------------:
|         1          |         9.68 ms          |          2260/s           |
|--------------------|------------------------- |---------------------------|
|         2          |         6.57 ms          |          2764/s           |
|--------------------|------------------------- |---------------------------|
|         3          |         5.62 ms          |          3227/s           |
|--------------------|------------------------- |---------------------------|
|         5          |         4.65 ms          |          3881/s           
```

---

## Summary

Horizontal scaling, coupled with effective load balancing, can significantly enhance the performance and scalability of your web applications. The benefits of horizontal scaling become especially apparent in high-traffic scenarios where a single server can no longer cope with the demand.

YARP is a powerful and user-friendly reverse proxy server for .NET applications. However, highly complex, large-scale distributed systems might benefit from specialized, standalone load-balancing solutions. These dedicated solutions can offer more granular control and sophisticated features.

If you want to learn more, here's how to [build an API Gateway using YARP](/explore/articles/milanjovanovic.tech/implementing-an-api-gateway-for-microservices-with-yarp.md).

You can find the [source code (<FontIcon icon="iconfont icon-github"/>`m-jovanovic/yarp-load-balancing`)](https://github.com/m-jovanovic/yarp-load-balancing) for this example on GitHub.

<SiteInfo
  name="m-jovanovic/yarp-load-balancing"
  desc="An example project demonstrating how to horizontally scale an application using YARP, and run performance tests with k6."
  url="https://github.com/m-jovanovic/yarp-load-balancing"
  logo="https://avatars.githubusercontent.com/u/34191235?s=48&v=4"
  preview="https://opengraph.githubassets.com/61a2e8dffbd0b24de86ab40acff6d0fc6a930667094bc6b22a1bfafec55af365/m-jovanovic/yarp-load-balancing"/>

That's all for today. I'll see you next week.

---

<TagLinks />