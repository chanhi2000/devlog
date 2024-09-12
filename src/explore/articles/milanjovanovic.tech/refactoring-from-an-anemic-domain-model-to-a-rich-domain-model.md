---
lang: ko-KR
title: "Refactoring From an Anemic Domain Model To a Rich Domain Model"
description: "Article(s) > Refactoring From an Anemic Domain Model To a Rich Domain Model"
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
      content: "Article(s) > Refactoring From an Anemic Domain Model To a Rich Domain Model"
    - property: og:description
      content: "Refactoring From an Anemic Domain Model To a Rich Domain Model"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/refactoring-from-an-anemic-domain-model-to-a-rich-domain-model.html
prev: /programming/cs/articles/README.md
date: 2023-06-17
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_042.png
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
  name="Refactoring From an Anemic Domain Model To a Rich Domain Model"
  desc="Today's modern applications must deliver the latest information without Is the Anemic domain model an antipattern? It's a domain model without any behavior and only data properties. Anemic domain models work great in simple applications, but they are difficult to maintain and evolve if you have rich business logic. The important parts of your business logic and rules end up being scattered all over the application. It reduces cohesiveness and reusability, and makes adding new features more difficult. Rich domain model attempts to solve this by encapsulating as much of the business logic as possible. This is a never-ending process of moving business logic into the domain and refining your domain model."
  url="https://milanjovanovic.tech/blog/refactoring-from-an-anemic-domain-model-to-a-rich-domain-model/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_042.png"/>

<!-- TODO: 작성 -->

<!--
Is the **anemic domain model** an **antipattern**?

It's a domain model without any behavior and only data properties.

Anemic domain models work great in simple applications, but they are difficult to maintain and evolve if you have rich business logic.

The important parts of your business logic and rules end up being scattered all over the application. It reduces cohesiveness and reusability, and makes adding new features more difficult.

**Rich domain model** attempts to solve this by encapsulating as much of the business logic as possible.

But how can you design a **rich domain model**?

This is a never-ending process of moving business logic into the domain and refining your domain model.

Let's see how to **refactor** from an **anemic domain model** to a **rich domain model**.

---

## Working With Anemic Domain Model

To understand what working with an **anemic domain model** looks like, I'll use an example of handling a `SendInvitationCommand`.

I omitted the class and its dependencies so that we can focus on the `Handle` method. It loads some entities from the database, performs validation, executes the business logic, and finally persists the changes in the database and sends an email.

It already implements some good practices like using repositories and returning result objects.

However, it's working with an **anemic domain model**.

A few things indicating this:

- Parameterless constructors
- Public property setters
- Exposed collections

In other words - the classes representing domain entities contain only data properties and no behavior.

The **problems** of an **anemic domain model** are:

- Discoverability of operations
- Potential code duplication
- Lack of encapsulation

We'll apply a few techniques to push logic down into the domain, and try to make the model more domain-driven. I hope you'll be able to see the value and benefits this will bring.

```cs
public async Task<Result> Handle(SendInvitationCommand command)
{
    var member = await _memberRepository.GetByIdAsync(command.MemberId);

    var gathering = await _gatheringRepository.GetByIdAsync(command.GatheringId);

    if (member is null || gathering is null)
    {
        return Result.Failure(Error.NullValue);
    }

    if (gathering.Creator.Id == member.Id)
    {
        throw new Exception("Can't send invitation to the creator.");
    }

    if (gathering.ScheduledAtUtc < DateTime.UtcNow)
    {
        throw new Exception("Can't send invitation for the past.");
    }

    var invitation = new Invitation
    {
        Id = Guid.NewGuid(),
        Member = member,
        Gathering = gathering,
        Status = InvitationStatus.Pending,
        CreatedOnUtc = DateTime.UtcNow
    };

    gathering.Invitations.Add(invitation);

    _invitationRepository.Add(invitation);

    await _unitOfWork.SaveChangesAsync();

    await _emailService.SendInvitationSentEmailAsync(member, gathering);

    return Result.Success();
}
```

---

## Moving Business Logic Into The Domain

The goal is to move as much of the business logic as possible into the domain.

Let's start with the `Invitation` entity and defining a constructor for it. I can simplify the design by setting the `Status` and `CreatedOnUtc` properties inside the constructor. I'm also going to make it `internal` so that an `Invitation` instance can only be created within the domain.

```cs
public sealed class Invitation
{
<span class="code-line highlight-line">    internal Invitation(Guid id, Gathering gathering, Member member)
<span class="code-line highlight-line">    {
<span class="code-line highlight-line">        Id = id;
<span class="code-line highlight-line">        Member = member;
<span class="code-line highlight-line">        Gathering = gathering;
<span class="code-line highlight-line">        Status = InvitationStatus.Pending;
<span class="code-line highlight-line">        CreatedOnUtc = DateTime.Now;
<span class="code-line highlight-line">    }

    // Data properties omitted for brevity.
}
```

The reason I made the `Invitation` constructor `internal` is so that I can introduce a new method on the `Gathering` entity. Let's call it `SendInvitation` and it will be responsible for instantiating a new `Invitation` instance and adding it to the internal collection.

Currently, the `Gathering.Invitations` collection is `public`, which means anyone can obtain a reference and modify the collection.

We don't want to allow this, so what we can do is encapsulate this collection behind a `private` field. This moves the responsibility for managing the `_invitations` collection to the `Gathering` class.

Here's how the `Gathering` class looks like now:

```cs
public sealed class Gathering
{
<span class="code-line highlight-line">    private readonly List<Invitation> _invitations;

    // Other members omitted for brevity.

<span class="code-line highlight-line">    public void SendInvitation(Member member)
<span class="code-line highlight-line">    {
<span class="code-line highlight-line">        var invitation = new Invitation(Guid.NewGuid(), gathering, member);
<span class="code-line highlight-line">
<span class="code-line highlight-line">        _invitations.Add(invitation);
<span class="code-line highlight-line">    }
}
```

---

## Moving Validation Rules Into The Domain

The next thing we can do is move the validation rules into the `SendInvitation` method, further enriching the domain model.

Unfortunately, this is still a bad practice because of throwing "expected" exceptions when a validation fails. If you want to use exceptions to enforce your validation rules you should at least do it right, and use specific exceptions instead of generic ones.

But it would be even better to use a **result object** to express validation errors.

```cs
public sealed class Gathering
{
    // Other members omitted for brevity.

    public void SendInvitation(Member member)
    {
<span class="code-line highlight-line">        if (gathering.Creator.Id == member.Id)
<span class="code-line highlight-line">        {
<span class="code-line highlight-line">            throw new Exception("Can't send invitation to the creator.");
<span class="code-line highlight-line">        }

<span class="code-line highlight-line">        if (gathering.ScheduledAtUtc < DateTime.UtcNow)
<span class="code-line highlight-line">        {
<span class="code-line highlight-line">            throw new Exception("Can't send invitation for the past.");
<span class="code-line highlight-line">        }

        var invitation = new Invitation(Guid.NewGuid(), gathering, member);

        _invitations.Add(invitation);
    }
}
```

Here's how using **result objects** would look like:

```cs
public sealed class Gathering
{
    // Other members omitted for brevity.

<span class="code-line highlight-line">    public Result SendInvitation(Member member)
    {
        if (gathering.Creator.Id == member.Id)
        {
<span class="code-line highlight-line">            return Result.Failure(DomainErrors.Gathering.InvitingCreator);
        }

        if (gathering.ScheduledAtUtc < DateTime.UtcNow)
        {
<span class="code-line highlight-line">            return Result.Failure(DomainErrors.Gathering.AlreadyPassed);
        }

        var invitation = new Invitation(Guid.NewGuid(), gathering, member);

        _invitations.Add(invitation);

<span class="code-line highlight-line">        return Result.Success();
    }
}
```

The benefit of this approach is we can introduce constants for possible domain errors. The catalog of domain errors will act as **documentation** for your domain, and make it more expressive.

Finally, here's how the `Handle` method looks like with all the changes so far:

```cs
public async Task<Result> Handle(SendInvitationCommand command)
{
    var member = await _memberRepository.GetByIdAsync(command.MemberId);

    var gathering = await _gatheringRepository.GetByIdAsync(command.GatheringId);

    if (member is null || gathering is null)
    {
        return Result.Failure(Error.NullValue);
    }

<span class="code-line highlight-line">    var result = gathering.SendInvitation(member);
<span class="code-line highlight-line">
<span class="code-line highlight-line">    if (result.IsFailure)
<span class="code-line highlight-line">    {
<span class="code-line highlight-line">        return Result.Failure(result.Errors);
<span class="code-line highlight-line">    }

    await _unitOfWork.SaveChangesAsync();

    await _emailService.SendInvitationSentEmailAsync(member, gathering);

    return Result.Success();
}
```

If you take a closer look at the `Handle` method you'll notice it's doing two things:

- Persisting changes to the database
- Sending an email

This means it's **not atomic**.

There's a potential for the database transaction to complete, and the email sending to fail. Also, sending the email will slow down the method which could affect performance.

How can make this method atomic?

By sending the email in the background. It's not important for our business logic, so this is safe to do.

---

## Expressing Side Effects With Domain Events

You can use **domain events** to express that something occurred in your domain that might be interesting to other components in your system.

I often use **domain events** to trigger actions in the background, like sending a notification or email.

Let's introduce an `InvitationSentDomainEvent`:

```cs
public record InvitationSentDomainEvent(Invitation Invitation) : IDomainEvent;
```

We're going to raise this **domain event** inside the `SendInvitation` method:

```cs
public sealed class Gathering
{
    private readonly List<Invitation> _invitations;

    // Other members omitted for brevity.

    public Result SendInvitation(Member member)
    {
        if (gathering.Creator.Id == member.Id)
        {
            return Result.Failure(DomainErrors.Gathering.InvitingCreator);
        }

        if (gathering.ScheduledAtUtc < DateTime.UtcNow)
        {
            return Result.Failure(DomainErrors.Gathering.AlreadyPassed);
        }

        var invitation = new Invitation(Guid.NewGuid(), gathering, member);

        _invitations.Add(invitation);

<span class="code-line highlight-line">        Raise(new InvitationSentDomainEvent(invitation));

        return Result.Success();
    }
}
```

The goal is to remove the code responsible for sending the email from the `Handle` method:

```cs
public async Task<Result> Handle(SendInvitationCommand command)
{
    var member = await _memberRepository.GetByIdAsync(command.MemberId);

    var gathering = await _gatheringRepository.GetByIdAsync(command.GatheringId);

    if (member is null || gathering is null)
    {
        return Result.Failure(Error.NullValue);
    }

    var result = gathering.SendInvitation(member);

    if (result.IsFailure)
    {
        return Result.Failure(result.Errors);
    }

    await _unitOfWork.SaveChangesAsync();

    return Result.Success();
}
```

We only want to worry about executing the business logic and persisting any changes to the database. Part of those changes will also be the **domain event**, which the system will publish in the background.

Of course, we need a respective **handler** for the **domain event**:

```cs
public sealed class InvitationSentDomainEventHandler
    : IDomainEventHandler<InvitationSentDomainEvent>
{
    private readonly IEmailService _emailService;

    public InvitationSentDomainEventHandler(IEmailService emailService)
    {
        _emailService = emailService;
    }

    public async Task Handle(InvitationSentDomainEvent domainEvent)
    {
        await _emailService.SendInvitationSentEmailAsync(
            domainEvent.Invitation.Member,
            domainEvent.Invitation.Gathering);
    }
}
```

We achieved two things:

- Handling the `SendInvitationCommand` is now atomic
- Email is sent in the background, and can be safely retried in case of an error

---

## Takeaway

Designing a **rich domain model** is a gradual process, and you can slowly evolve the domain model over time.

The first step could be making your domain model more defensive:

- Hiding constructors with the `internal` keyword
- Encapsulating collection access

The benefit is your domain models will have a fine-grained public API (methods) which act as an entry point for executing the business logic.

It's easy to test behavior when it's encapsulated in a class without having to mock external dependencies.

You can raise **domain events** to notify the system that something of important occurred, and any interested components can subscribe to that domain event. Domain events allow you to develop a **decoupled** system, where you focus on the core domain logic, and don't have to worry about the side effects.

However, this doesn't mean that every system needs a **rich domain model**.

You should be pragmatic and decide when the complexity is worth it.

That's all for this week.

See you next Saturday.

-->

---

<TagLinks />