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

<!-- TODO: 작성 -->

<!--
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

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271377%27%20height=%27983%27/%3e"><img alt="Service discovery flow." src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="Service discovery flow." srcSet="/blogs/mnw_097/service_discovery_flow.png?imwidth=1920 1x, /blogs/mnw_097/service_discovery_flow.png?imwidth=3840 2x" src="/blogs/mnw_097/service_discovery_flow.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>

The same concept applies when we have multiple services we want to call. Each service would register itself with the service registry. The client uses a logical name to reference a service and resolves the physical address from the service registry.

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%272074%27%20height=%27883%27/%3e"><img alt="Service discovery with multiple microservices." src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="Service discovery with multiple microservices." srcSet="/blogs/mnw_097/service_discovery_microservices.png?imwidth=3840 1x" src="/blogs/mnw_097/service_discovery_microservices.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>

The most popular solutions for service discovery are Netflix <a href="https://github.com/Netflix/eureka">Eureka</a> and HashiCorp <a href="https://www.consul.io/">Consul</a>.

There is also a lightweight solution from Microsoft in the `Microsoft.Extensions.ServiceDiscovery` library. It uses application settings to resolve the physical addresses for services, so some manual work is still required. However, you can store service locations in <a href="https://azure.microsoft.com/en-us/products/app-configuration">Azure App Configuration</a> for a centralized service registry.

I will explore this service discovery library in some future articles.

But now I want to show you how to integrate Consul with .NET applications.

---

## Setting Up the Consul Server

The simplest way to run the Consul server locally is using a Docker container. You can create a container instance of the `hashicorp/consul` image.

Here's an example of configuring the Consul service as part of the `docker-compose` file:

```yaml
consul:
  image: hashicorp/consul:latest
  container_name: Consul
  ports:
    - '8500:8500'

```

If you navigate to `localhost:8500`, you will be greeted by the Consul Dashboard.

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271902%27%20height=%27907%27/%3e"><img alt="Consul dashboard." src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="Consul dashboard." srcSet="/blogs/mnw_097/consul_dashboard.png?imwidth=1920 1x, /blogs/mnw_097/consul_dashboard.png?imwidth=3840 2x" src="/blogs/mnw_097/consul_dashboard.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>

Now, let's see how to register our services with Consul.

---

## Service Registration in .NET With Consul

We'll use the <a href="https://docs.steeltoe.io/api/v3/discovery/">Steeltoe Discovery</a> library to implement service discovery with Consul. The Consul client implementation lets your applications register services with a Consul server and discover services registered by other applications.

Let's install the `Steeltoe.Discovery.Consul` library:

```pwsh
Install-Package Steeltoe.Discovery.Consul
```

We have to configure some services by calling `AddServiceDiscovery` and explicitly configuring the Consul service discovery client. The alternative is calling `AddDiscoveryClient` which uses reflection at runtime to determine which service registry is available.

```cs
using Steeltoe.Discovery.Client;
using Steeltoe.Discovery.Consul;

var builder = WebApplication.CreateBuilder(args);

<span class="code-line highlight-line">builder.Services.AddServiceDiscovery(o => o.UseConsul());

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

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271902%27%20height=%27907%27/%3e"><img alt="Consul dashboard with registered service." src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="Consul dashboard with registered service." srcSet="/blogs/mnw_097/consul_dashboard_with_service.png?imwidth=1920 1x, /blogs/mnw_097/consul_dashboard_with_service.png?imwidth=3840 2x" src="/blogs/mnw_097/consul_dashboard_with_service.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>

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

You can grab the <a href="https://github.com/m-jovanovic/service-discovery-consul">source code for this example here</a>.

Thanks for reading, and I'll see you next week!

-->

---

<TagLinks />