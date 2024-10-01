---
lang: ko-KR
title: "Service Discovery in Microservices With .NET and Consul"
description: "Article(s) > Service Discovery in Microservices With .NET and Consul"
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
      content: "Article(s) > Service Discovery in Microservices With .NET and Consul"
    - property: og:description
      content: "Service Discovery in Microservices With .NET and Consul"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/service-discovery-in-microservices-with-net-and-consul.html
prev: /programming/cs/articles/README.md
date: 2024-07-13
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_097.png
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
  name="Service Discovery in Microservices With .NET and Consul"
  desc="Service discovery is a pattern that allows developers to use logical names to refer to external services, instead of physical IP addresses and ports. In this week's issue, we'll see how to implement service discovery in your .NET microservices with Consul."
  url="https://milanjovanovic.tech/blog/service-discovery-in-microservices-with-net-and-consul/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_097.png"/>

Microservices have revolutionized how we build and scale applications. By breaking down larger systems into smaller, independent services, we gain flexibility, agility, and the ability to adapt to changing requirements quickly. However, microservices systems are also very dynamic. Services can come and go, scale up or down, and even move around within your infrastructure.

This dynamic nature presents a significant challenge. How do your services find and communicate with each other reliably?

Hardcoding IP addresses and ports is a recipe for fragility. If a service instance changes location or a new instance spins up, your entire system could grind to a halt.

Service discovery acts as a central directory for your microservices. It provides a mechanism for services to register themselves and discover the locations of other services.

In this week's issue, we'll see how to implement service discovery in your .NET microservices with Consul.

---

## What is Service Discovery?

Service discovery is a pattern that allows developers to use logical names to refer to external services instead of physical IP addresses and ports. It provides a centralized location for services to register themselves. Clients can query the service registry to find out the service's physical address. This is a common pattern in large-scale distributed systems, such as Netflix and Amazon.

Here's what the service discovery flow looks like:

1. The service will register itself with the service registry
2. The client must query the service registry to get the physical address
3. The client sends the request to the service using the resolved physical address

![Service discovery flow.](https://milanjovanovic.tech/blogs/mnw_097/service_discovery_flow.png?imwidth=3840)

The same concept applies when we have multiple services we want to call. Each service would register itself with the service registry. The client uses a logical name to reference a service and resolves the physical address from the service registry.

![Service discovery with multiple microservices.](https://milanjovanovic.tech/blogs/mnw_097/service_discovery_microservices.png?imwidth=3840)

The most popular solutions for service discovery are [<FontIcon icon="iconfont icon-github"/>Netflix/Eureka](https://github.com/Netflix/eureka) and HashiCorp [<FontIcon icon="fas fa-globe"/>Consul](https://consul.io/).

<SiteInfo
  name="Netflix/eureka"
  desc="desc"
  url="https://github.com/Netflix/eureka"
  logo="logo"
  preview="preview"/>

There is also a lightweight solution from Microsoft in the `Microsoft.Extensions.ServiceDiscovery` library. It uses application settings to resolve the physical addresses for services, so some manual work is still required. However, you can store service locations in [<FontIcon icon="iconfont icon-microsoftazure"/>Azure App Configuration](https://azure.microsoft.com/en-us/products/app-configuration) for a centralized service registry.

I will explore this service discovery library in some future articles.

But now I want to show you how to integrate Consul with .NET applications.

---

## Setting Up the Consul Server

The simplest way to run the Consul server locally is using a Docker container. You can create a container instance of the `hashicorp/consul` image.

Here's an example of configuring the Consul service as part of the <FontIcon icon="iconfont icon-yaml"/>`docker-compose.yml` file:

```yaml
consul:
  image: hashicorp/consul:latest
  container_name: Consul
  ports:
    - '8500:8500'

```

If you navigate to `localhost:8500`, you will be greeted by the Consul Dashboard.

![Consul dashboard](https://milanjovanovic.tech/blogs/mnw_097/consul_dashboard.png?imwidth=3840)

Now, let's see how to register our services with Consul.

---

## Service Registration in .NET With Consul

We'll use the [<FontIcon icon="fas fa-globe"/>Steeltoe Discovery](https://docs.steeltoe.io/api/v3/discovery/) library to implement service discovery with Consul. The Consul client implementation lets your applications register services with a Consul server and discover services registered by other applications.

Let's install the `Steeltoe.Discovery.Consul` library:

```pwsh
Install-Package Steeltoe.Discovery.Consul
```

We have to configure some services by calling `AddServiceDiscovery` and explicitly configuring the Consul service discovery client. The alternative is calling `AddDiscoveryClient` which uses reflection at runtime to determine which service registry is available.

```cs{6}
using Steeltoe.Discovery.Client;
using Steeltoe.Discovery.Consul;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddServiceDiscovery(o => o.UseConsul());

var app = builder.Build();

app.Run();
```

Finally, our service can register with Consul by configuring the logical service name through application settings. When the application starts, the `reporting-service` logical name will be added to the Consul service registry. Consul will store the respective physical address of this service.

```json
{
  "Consul": {
    "Host": "localhost",
    "Port": 8500,
    "Discovery": {
      "ServiceName": "reporting-service",
      "Hostname": "reporting-api",
      "Port": 8080
    }
  }
}

```

When we start the application and open the Consul dashboard, we should be able to see the `reporting-service` and its respective physical address.

![Consul dashboard with registered service.](https://milanjovanovic.tech/blogs/mnw_097/consul_dashboard_with_service.png?imwidth=3840)

---

## Using Service Discovery

We can use service discovery when making HTTP calls with an `HttpClient`. Service discovery allows us to use a logical name for the service we want to call. When sending a network request, the service discovery client will replace the logical name with a correct physical address.

In this example, we're configuring the base address of the `ReportingServiceClient` typed client to `http://reporting-service` and adding service discovery by calling `AddServiceDiscovery`.

Load balancing is an optional step, and we can configure it by calling `AddRoundRobinLoadBalancer` or `AddRandomLoadBalancer`. You can also configure a custom load balancing strategy by providing an `ILoadBalancer` implementation.

```cs
builder.Services
    .AddHttpClient<ReportingServiceClient>(client =>
    {
        client.BaseAddress = new Uri("http://reporting-service");
    })
    .AddServiceDiscovery()
    .AddRoundRobinLoadBalancer();
```

We can use the `ReportingServiceClient` typed client like a regular `HttpClient` to make requests. The service discovery client sends the request to the external service's IP address.

```cs
app.MapGet("articles/{id}/report",
    async (Guid id, ReportingServiceClient client) =>
    {
        var response = await client
            .GetFromJsonAsync<Response>($"api/reports/article/{id}");

        return response;
    });
```

---

## Takeaway

Service discovery simplifies the management of microservices by automating service registration and discovery. This eliminates the need for manual configuration updates, reducing the risk of errors.

Services can discover each other's locations on demand, ensuring that communication channels remain open even as the service landscape evolves. By enabling services to discover alternative service instances in case of outages or failures, service discovery enhances the overall resilience of the microservices system.

Mastering service discovery gives you a powerful tool to build modern distributed applications.

You can grab the [source code for this example here (<FontIcon icon="iconfont icon-github"/>`m-jovanovic/service-discovery-consul`)](https://github.com/m-jovanovic/service-discovery-consul).

<SiteInfo
  name="m-jovanovic/service-discovery-consul"
  desc="Service discovery demo in .NET using Consul as a service registry."
  url="https://github.com/m-jovanovic/service-discovery-consul"
  logo="https://avatars.githubusercontent.com/u/34191235?s=96&v=4"
  preview="https://opengraph.githubassets.com/f9cc712abce3930270887c2badf2c24aea46c72b2ec6c5867f88379b73f84ffd/m-jovanovic/service-discovery-consul"/>

Thanks for reading, and I'll see you next week!

---

<TagLinks />