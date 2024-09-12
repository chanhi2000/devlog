---
lang: ko-KR
title: "Outbox Pattern For Reliable Microservices Messaging"
description: "Article(s) > Outbox Pattern For Reliable Microservices Messaging"
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
      content: "Article(s) > Outbox Pattern For Reliable Microservices Messaging"
    - property: og:description
      content: "Outbox Pattern For Reliable Microservices Messaging"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/outbox-pattern-for-reliable-microservices-messaging.html
prev: /programming/cs/articles/README.md
date: 2023-02-28
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_026.png
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
  name="Outbox Pattern For Reliable Microservices Messaging"
  desc="Working with Microservices, or any distributed system for that matter, is difficult. In a distributed system many things can go wrong, and there are even research papers about this. If you want to explore this topic futher, I suggest that you read about the fallacies of distributed computing. Reducing the surface area for things to go wrong should be one of your goals, as an engineer. In this week's newsletter, we'll try to achieve exactly that using the Outbox pattern. How can you implement reliable communication between components in a distributed system? The Outbox pattern is an elegant solution to this problem, allowing you to achieve transactional guarantees in a single service and at-least-once message delivery to external systems."
  url="https://milanjovanovic.tech/blog/outbox-pattern-for-reliable-microservices-messaging/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_026.png"/>

<!-- TODO: 작성 -->

<!--
Working with **Microservices**, or any distributed system for that matter, is difficult. In a distributed system many things can go wrong, and there are even research papers about this. If you want to explore this topic further, I suggest that you read about the <a href="https://www.se.rit.edu/~se442/doc/fallacies.pdf">fallacies of distributed computing</a>.

Reducing the surface area for things to go wrong should be one of your goals, as an engineer. In this week's newsletter, we'll try to achieve exactly that using the **Outbox pattern**.

How can you implement reliable communication between components in a distributed system?

The **Outbox pattern** is an elegant solution to this problem, allowing you to achieve transactional guarantees in a single service and at-least-once message delivery to external systems.

Let's see how the **Outbox pattern** solves this and how can we implement it.

---

## What Problem Does The Outbox Pattern Solve?

To understand what problem the **Outbox pattern** solves, first we need a problem, of course.

Here's an example of a user registration flow. There are a few things going on here:

- Saving the `User` to the database
- Sending a welcome email to the `User`
- Publishing a `UserRegisteredEvent` to a message bus

```cs
public async Task RegisterUserAsync(User user, CancellationToken token)
{
    _userRepository.Insert(user);

    await _unitOfWork.SaveChangesAsync(token);

    await _emailService.SendWelcomeEmailAsync(user, token);

    await _eventBus.PublishAsync(new UserRegisteredEvent(user.Id), token);
}
```

In the happy path, all of the operations complete without any issues and all is well.

But what happens if any one of these operations fail?

- The database is unavailable, and saving the `User` fails
- The email service is down and sending an email crashes
- Publishing an event to the service bus doesn't succeed

Also, imagine a situation where you manage to save a `User` to the database, send him a welcome email, but fail to publish the `UserRegisteredEvent` to notify other services. How are you going to recover from this scenario?

The **Outbox pattern** allows you to **atommically** update the database and send messages to the message bus.

---

## Implementing The Outbox Pattern

The first step is to introduce a table in your database to represent the **Outbox**. We can call this table `OutboxMessages`, and it's intended to store all messages that need to be delivered. Now instead of directly making requests to external services, we simply store a message as a new row in the **Outbox** table. The messages are usually stored as JSON in the database.

The second step is to introduce a **background process** that will periodically poll the `OutboxMessages` table. If the worker process finds a row with an unprocessed message, it's going to publish that message and mark it as sent. If publishing the message fails for some reason, the work process can **retry** in the next execution.

Notice that with retries, you now have **at-least-once message delivery** implemented. The message will be published exactly once for the happy path, and more than one time in case or retries.

We can rewrite the `RegisterUserAsync` method from the previous example, now using an **Outbox**:

```cs
public async Task RegisterUserAsync(User user, CancellationToken token)
{
    _userRepository.Insert(user);

    _outbox.Insert(new UserRegisteredEvent(user.Id));

    await _unitOfWork.SaveChangesAsync(token);
}

```

The **Outbox** is part of the same transaction as our unit of work, so we can atomically save the `User` to the database and also persist the `OutboxMessage`. If saving to the database fails, the entire transaction is rolled back and no messages are sent to the message bus.

And since we now moved the publishing of the `UserRegisteredEvent` to the worker process, we need to add a handler so that we can send the welcome email to the user. Here's an example of that in the `SendWelcomeEmailHandler` class:

```cs
public class SendWelcomeEmailHandler : IHandle<UserRegisteredEvent>
{
    private readonly IUserRepository _userRepository;
    private readonly IEmailService _emailService;

    public SendWelcomeEmailHandler(
        IUserRepository userRepository,
        IEmailService emailService)
    {
        _userRepository = userRepository;
        _emailService = emailService;
    }

    public async Task Handle(UserRegisteredEvent message)
    {
        var user = await _userRepository.GetByIdAsync(message.UserId);

        await _emailService.SendWelcomeEmailAsync(user);
    }
}
```

---

## Architecture Diagram With Outbox

Here's a high level overview of the system architecture with the **Outbox** introduced to the system. You can see the `Outbox` table in the database. What changes now is that you store messages to the `Outbox` table in the same transaction along with your entities.

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271801%27%20height=%27989%27/%3e"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img srcSet="/blogs/mnw_026/outbox.png?imwidth=1920 1x, /blogs/mnw_026/outbox.png?imwidth=3840 2x" src="/blogs/mnw_026/outbox.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>

---

## Further Reading

After reading this newsletter you should have a pretty good understanding of what the **Outbox pattern** is and what problems it solves. If you need to implement reliable messaging in a distributed system, it's a great solution for your problem.

What's missing is more details about how to implement the **Outbox pattern**, so here are a few videos you can watch:

- <a href="https://youtu.be/BimfDeDV4yU">How to use the Domain Events pattern</a>
- <a href="https://youtu.be/XALvnX7MPeo">How to implement the Outbox pattern</a>
- <a href="https://youtu.be/xajVttkZntU">How to add retries to the Outbox with Polly</a>

Thanks for reading, and have an amazing Saturday.

-->

---

<TagLinks />