---
lang: ko-KR
title: Simple Messaging in .NET With Redis Pub/Sub
description: Article(s) > Simple Messaging in .NET With Redis Pub/Sub
icon: iconfont icon-csharp
category: 
  - C#
  - DotNet
  - Redis
  - Docker
  - Article(s)
tag: 
  - blog
  - milanjovanovic.tech
  - cs
  - c#
  - csharp
  - dotnet
  - redis
  - docker
  - container
head:
  - - meta:
    - property: og:title
      content: Article(s) > Simple Messaging in .NET With Redis Pub/Sub
    - property: og:description
      content: Simple Messaging in .NET With Redis Pub/Sub
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/simple-messaging-in-dotnet-with-redis-pubsub.html
prev: /programming/cs/articles/README.md
date: 2024-08-03
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_100.png
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
  "title": "Docker > Article(s)",
  "desc": "Article(s)",
  "link": "/devops/docker/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Redis > Article(s)",
  "desc": "Article(s)",
  "link": "/data-science/redis/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Simple Messaging in .NET With Redis Pub/Sub"
  desc="Redis is a popular choice for caching data, but its capabilities go far beyond that. One of its lesser-known features is Pub/Sub support. Redis channels offer an interesting approach for implementing real-time messaging in your .NET applications."
  url="https://milanjovanovic.tech/blog/simple-messaging-in-dotnet-with-redis-pubsub/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_100.png"/>

<!-- TODO: 작성 -->

<!-- 
Redis is a popular choice for <a href="caching-in-aspnetcore-improving-application-performance">**caching data**</a>, but its capabilities go far beyond that. One of its lesser-known features is Pub/Sub support. Redis channels offer an interesting approach for implementing real-time messaging in your .NET applications. However, as you'll soon see, channels also have some drawbacks.

In this week's newsletter, we'll explore:

- Basics of Redis channels
- Practical use cases for channels
- Implementing a Pub/Sub example in .NET
- Cache invalidation in distributed systems

Let's dive in.

---

## Redis Channels

Redis channels are named communication channels that implement the <a href="https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern">Publish/Subscribe messaging paradigm</a>. Each channel is identified by a unique name (e.g., `notifications`, `updates`). Channels facilitate message delivery from publishers to subscribers.

Publishers use the `PUBLISH` command to send messages to a specific channel.
Subscribers use the `SUBSCRIBE` command to register interest in receiving messages from a channel.

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%272094%27%20height=%271294%27/%3e"><img alt="Redis channel with publisher and three subscribers." src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="Redis channel with publisher and three subscribers." srcSet="/blogs/mnw_100/redis_channel.png?imwidth=3840 1x" src="/blogs/mnw_100/redis_channel.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>

Redis channels follow a topic-based publish-subscribe model. Multiple publishers can send messages to a channel, and multiple subscribers can receive messages from that channel.

However, it's crucial to note that Redis channels do not store messages. If there are no subscribers for a channel when a message is published, that message is immediately discarded.

Redis channels have an **at-most-once delivery** semantics.

---

## Practical Use Cases

Given that Redis channels operate with **at-most-once delivery** (messages might be lost if there are no subscribers), they are well-suited for scenarios where occasional message loss is acceptable and real-time or near-real-time communication is desired.

Here are a few possible use cases:

- **Social media feeds**: Broadcasting new posts or updates to users.
- **Live score updates**: Sending live game scores or sports updates to subscribers.
- **Chat applications**: Delivering chat messages in real-time to active participants.
- **Collaborative editing**: Propagating changes in collaborative editing environments.
- **Distributed cache updates**: Invalidating cache entries across multiple servers when data changes. We'll cover this in detail later in the article.

Redis channels aren't the best choice for critical data where message loss is unacceptable. In such cases, you should consider a more reliable messaging system.

Let's see how we can use Redis channels in .NET.

---

## Pub/Sub With Redis Channels

We will use the `StackExchange.Redis` library to send messages with Redis channels.

Let's start by installing it:

```pwsh
Install-Package StackExchange.Redis
```

You can run <a href="https://redis.io/">Redis</a> locally in a Docker container. The default port is `6379`.

```sh
docker run -it -p 6379:6379 redis
```

Here's a simple background service that'll act as our message `Producer`.

We're creating a `ConnectionMultiplexer` by connecting to our Redis instance. This allows us to obtain an `ISubscriber` that we can use for pub/sub messaging. The `ISubscriber` will enable us to publish a message to a channel by specifying the channel name.

```cs
public class Producer(ILogger<Producer> logger) : BackgroundService
{
    private static readonly string ConnectionString = "localhost:6379";
    private static readonly ConnectionMultiplexer Connection =
        ConnectionMultiplexer.Connect(ConnectionString);

    private const string Channel = "messages";

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
<span class="code-line highlight-line">        var subscriber = Connection.GetSubscriber();

        while (!stoppingToken.IsCancellationRequested)
        {
            var message = new Message(Guid.NewGuid(), DateTime.UtcNow);

            var json = JsonSerializer.Serialize(message);

<span class="code-line highlight-line">            await subscriber.PublishAsync(Channel, json);

            logger.LogInformation(
                "Sending message: {Channel} - {@Message}",
                message);

            await Task.Delay(5000, stoppingToken);
        }
    }
}
```

Let's also introduce a separate background service for consuming messages.

The `Consumer` connects to the same Redis instance and obtains an `ISubscriber`. The `ISubscriber` exposes a `SubscribeAsync` method that we can use to subscribe to messages from a given channel. This method accepts a callback delegate that we can use to handle the message.

```cs
public class Consumer(ILogger<Consumer> logger) : BackgroundService
{
    private static readonly string ConnectionString = "localhost:6379";
    private static readonly ConnectionMultiplexer Connection =
        ConnectionMultiplexer.Connect(ConnectionString);

    private const string Channel = "messages";

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        var subscriber = Connection.GetSubscriber();

        await subscriber.SubscribeAsync(Channel, (channel, message) =>
        {
            var message = JsonSerializer.Deserialize<Message>(message);

            logger.LogInformation(
                "Received message: {Channel} - {@Message}",
                channel,
                message);
        });
    }
}
```

Finally, here's what we get when we run both the `Producer` and `Consumer` services:

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271920%27%20height=%27500%27/%3e"><img alt="Redis channels publish/subscribe demo." src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="Redis channels publish/subscribe demo." srcSet="/blogs/mnw_100/redis_pub_sub.gif?imwidth=1920 1x, /blogs/mnw_100/redis_pub_sub.gif?imwidth=3840 2x" src="/blogs/mnw_100/redis_pub_sub.gif?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>

---

## Cache Invalidation in Distributed Systems

In a recent project, I tackled a common challenge in distributed systems: keeping the caches in sync. We were using a two-level caching approach. First, we had an in-memory cache on each web server for super-fast access. Second, we had a shared Redis cache to avoid hitting our database too often.

The problem was that when data changed in the database, we needed a way to quickly tell all the web servers to clear their in-memory caches. This is where Redis Pub/Sub came to the rescue. We set up a Redis channel specifically for cache invalidation messages.

Each application would run a `CacheInvalidationBackgroundService` that subscribes to messages from the cache invalidation channel.

```cs
public class CacheInvalidationBackgroundService(
    IServiceProvider serviceProvider)
    : BackgroundService
{
    public const string Channel = "cache-invalidation";

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        await subscriber.SubscribeAsync(Channel, (channel, key) =>
        {
            var cache = serviceProvider.GetRequiredService<IMemoryCache>();

            cache.Remove(key);

            return Task.CompletedTask;
        });
    }
}
```

Whenever data changes in the database, we publish a message on this channel with the cache key of the updated data. All the web servers are subscribed to this channel, so they instantly know to remove the old data from their in-memory caches. Since the in-memory cache is wiped if the application isn't running, losing cache invalidation messages isn't a problem. This keeps our caches consistent and ensures our users always see the most up-to-date information.

---

## In Summary

Redis Pub/Sub is not a silver bullet for every messaging need, but its simplicity and speed make it a valuable tool. Channels allow us to easily implement communication between loosely coupled components.

Redis channels have at-most-once delivery semantics, so they're best suited for cases where the occasional dropped message is acceptable.

I used it to solve the challenge of synchronizing caches across multiple servers. This allowed our system to serve up-to-date data without sacrificing performance.

**P.S.** When you're ready to dive deeper into creating message-driven systems, check out <a href="/modular-monolith-architecture">**Modular Monolith Architecture**</a>.
I have an entire module dedicated to building reliable distributed messaging and event-driven architecture.

Good luck out there, and see you next week.

-->

---

<TagLinks />