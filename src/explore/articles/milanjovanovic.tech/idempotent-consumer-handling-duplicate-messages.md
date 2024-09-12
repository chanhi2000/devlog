---
lang: ko-KR
title: "Idempotent Consumer - Handling Duplicate Messages"
description: "Article(s) > Idempotent Consumer - Handling Duplicate Messages"
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
      content: "Article(s) > Idempotent Consumer - Handling Duplicate Messages"
    - property: og:description
      content: "Idempotent Consumer - Handling Duplicate Messages"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/idempotent-consumer-handling-duplicate-messages.html
prev: /programming/cs/articles/README.md
date: 2023-04-22
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_034.png
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
  name="Idempotent Consumer - Handling Duplicate Messages"
  desc="What happens when a message is retried in an event-driven system? It happens more often than you think. The worst case scenario is that the message is processed twice, and the side effects can also be applied more than once. Do you want your bank account to be double charged? I'll assume the answer is no, of course. You can use the Idempotent Consumer pattern to solve this problem."
  url="https://milanjovanovic.tech/blog/idempotent-consumer-handling-duplicate-messages/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_034.png"/>

<!-- TODO: 작성 -->

<!-- 
What happens when a **message is retried** in an event-driven system?

It happens more often than you think.

The **worst case scenario** is that the **message is processed twice**, and the **side effects** can also be applied more than once.

Do you want your bank account to be double charged?

I'll assume the answer is no, of course.

You can use the **Idempotent Consumer** pattern to solve this problem.

In this week's issue I will show you:

- How the Idempotent Consumer pattern works
<li>How to implement an Idempotent Consumer
<li>The tradeoffs you need to consider

Let's see why the **Idempotent Consumer** pattern is valuable.

---

## how-the-idempotent-consumer-pattern-works"><a href="#how-the-idempotent-consumer-pattern-works">How The Idempotent Consumer Pattern Works

What's the idea behind the **Idempotent Consumer pattern**?

<blockquote>
An idempotent operation is one that has no additional effect if it is called more than once with the same input parameters.

</blockquote>
We want to avoid handling the same message more than once.

This would require **Exactly-once** message delivery guarantees from our messaging system.
And this is a really hard problem to solve in distributed systems.

A looser delivery guarantee is **At-least-once**, where we are aware that retries can happen and we can receive the same message more than once.

The **Idempotent Consumer** pattern works well with **At-least-once** message delivery, and solves the **problem of duplicate messages.**

Here's what the algorithm looks like from the moment we receive a message:

1. Was the message already processed?
<li>If yes, it's a duplicate and there's nothing to do
<li>If not, we need to handle the message
<li>We also need to store the message identifier

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27400%27%20height=%27634%27/%3e"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img srcSet="/blogs/mnw_034/idempotent_consumer_algorithm.png?imwidth=640 1x, /blogs/mnw_034/idempotent_consumer_algorithm.png?imwidth=828 2x" src="/blogs/mnw_034/idempotent_consumer_algorithm.png?imwidth=828" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>
We need a **unique identifier** for every **message** we receive, and a table in the database to store processed messages.

However, it's interesting how we choose the implement the message handling and storing of the processed message identifier.

You can implement the idempotent consumer as a decorator around a regular message handler.

I'll show you two implementations:

- Lazy idempotent consumer
<li>Eager idempotent consumer

---

## lazy-idempotent-consumer"><a href="#lazy-idempotent-consumer">Lazy Idempotent Consumer

The **lazy idempotent consumer** matches the flow shown in the algorithm above.

Lazy refers to how we store the message identifer to mark it as processed.

In the happy path, we handle the message and store the message identifier.

If the message handler throws an exception, we never store the message identifier and the consumer can be executed again.

Here's what the implementation looks like:

```cs
public class IdempotentConsumer<T> : IHandleMessages<T>
    where T : IMessage
{
    private readonly IMessageRepository _messageRepository;
    private readonly IHandleMessages<T> _decorated;

    public IdempotentConsumer(
        IMessageRepository messageRepository,
        IHandleMessages<T> decorated)
    {
        _messageRepository = messageRepository;
        _decorated = decorated;
    }

    public async Task Handle(T message)
    {
        if (_messageRepository.IsProcessed(message.Id))
        {
            return;
        }

        await _decorated.Handle(message);

        _messageRepository.Store(message.Id);
    }
}

```

---

## eager-idempotent-consumer"><a href="#eager-idempotent-consumer">Eager Idempotent Consumer

The **eager idempotent consumer** is slightly different from the lazy implementation, but the end result is the same.

In this version, we eagerly store the message identifier in the database and then continue to handle the message.

If the handler throws an exception, we need to perform cleanup in the database and remove the eagerly stored message identifier.

Otherwise, we risk leaving the system in an inconsistent state since the message was never handled correctly.

Here's what the implementation looks like:

```cs
public class IdempotentConsumer<T> : IHandleMessages<T>
    where T : IMessage
{
    private readonly IMessageRepository _messageRepository;
    private readonly IHandleMessages<T> _decorated;

    public IdempotentConsumer(
        IMessageRepository messageRepository,
        IHandleMessages<T> decorated)
    {
        _messageRepository = messageRepository;
        _decorated = decorated;
    }

    public async Task Handle(T message)
    {
        try
        {
            if (_messageRepository.IsProcessed(message.Id))
            {
                return;
            }

            _messageRepository.Store(message.Id);

            await _decorated.Handle(message);
        }
        catch (Exception e)
        {
            _messageRepository.Remove(message.Id);

            throw;
        }
    }
}

```

---

## in-summary"><a href="#in-summary">In Summary

Idempotency is an interesting problem to solve in a software system.

Some operations are **naturally idempotent**, and we don't need the overhead of the **Idempotent Consumer** pattern.

However, for those operations that aren't naturally idempotent, the **Idempotent Consumer** is a great solution.

The high-level algorithm is simple, and you can take two approaches in the implementation:

- Lazy storing of message identifiers
<li>Eager storing of message identifiers

I prefer to use the **lazy approach**, and only **store the message identifier** in the database when the **handler completes successfully.**

It's easier to reason about and there is one less call to the database.

Thanks for reading.

Hope that was helpful.

-->

---

<TagLinks />