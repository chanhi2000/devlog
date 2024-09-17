---
lang: ko-KR
title: "8 Tips To Write Clean Code"
description: "Article(s) > 8 Tips To Write Clean Code"
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
      content: "Article(s) > 8 Tips To Write Clean Code"
    - property: og:description
      content: "8 Tips To Write Clean Code"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/8-tips-to-write-clean-code.html
prev: /programming/cs/articles/README.md
date: 2023-07-15
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_046.png
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
  name="8 Tips To Write Clean Code"
  desc="Clean code is code that's easy to read, maintain, and understand. I consider writing clean code a skill. And it's a skill that you can learn and improve with deliberate practice. My favorite approach to practice clean coding is doing refactoring exercises. So I prepared one for you today, and we're going to improve one step at a time by applying clean code principles."
  url="https://milanjovanovic.tech/blog/8-tips-to-write-clean-code/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_046.png"/>

**Clean code** is code that's easy to read, maintain, and understand.

I consider writing **clean code** a skill.

And it's a **skill** that **you can learn** and improve with deliberate practice.

My favorite approach for practicing **clean coding** is doing **refactoring exercises**.

So I prepared one for you today, and we're going to improve it one step at a time by applying **clean code principles**.

Let's dive in!

---

## Starting Point

I like starting with a problem when trying to learn new concepts.

And the more illustrative the problem, the better.

So we'll use some poorly written code as the starting point for our refactoring.

And in each step, I will highlight what the current issue is and how we will fix it.

Here's what I see when I look at the `Process` method:

- Deep nesting of code - 4 levels, to be precise
- Precondition checks are applied one after the other
- Throwing exceptions to represent a failure

How can we turn this into **clean code**?

```cs
public void Process(Order? order)
{
    if (order != null)
    {
        if (order.IsVerified)
        {
            if (order.Items.Count > 0)
            {
                if (order.Items.Count > 15)
                {
                    throw new Exception(
                        "The order " + order.Id + " has too many items");
                }

                if (order.Status != "ReadyToProcess")
                {
                    throw new Exception(
                        "The order " + order.Id + " isn't ready to process");
                }

                order.IsProcessed = true;
            }
        }
    }
}
```

---

## #1: Early Return Principle

It should be painfully obvious by now that the initial version is deeply nested because of the `if` statements applying precondition checks.

We'll solve this using the **early return principle**, which states that we should return from a method as soon as the conditions for that have been met.

In the case of the `Process` method, this means moving from a deeply nested structure to a set of **guard clauses**.

```cs{3-16}
public void Process(Order? order)
{
    if (order is null)
    {
        return;
    }

    if (!order.IsVerified)
    {
        return;
    }

    if (order.Items.Count == 0)
    {
        return;
    }

    if (order.Items.Count > 15)
    {
        throw new Exception(
            "The order " + order.Id + " has too many items");
    }

    if (order.Status != "ReadyToProcess")
    {
        throw new Exception(
            "The order " + order.Id + " isn't ready to process");
    }

    order.IsProcessed = true;
}
```

---

## #2: Merge If Statements To Improve Readability

The **early return principle** makes the `Process` method more readable.

But there's no need to have one **guard clause** after another.

So we can merge all of them into one `if` statement.

The behavior of the `Process` method remains unchanged, but we remove a lot of excess code.

```cs{3-8}
public void Process(Order? order)
{
    if (order is null ||
        !order.IsVerified ||
        order.Items.Count == 0)
    {
        return;
    }

    if (order.Items.Count > 15)
    {
        throw new Exception(
            "The order " + order.Id + " has too many items");
    }

    if (order.Status != "ReadyToProcess")
    {
        throw new Exception(
            "The order " + order.Id + " isn't ready to process");
    }

    order.IsProcessed = true;
}
```

---

## #3: Use LINQ For More Concise Code

A quick improvement can be using **LINQ** to make the code more concise and expressive.

Instead of checking for `Items.Count == 0`, I prefer using the LINQ `Any` method.

You could argue that LINQ has worse performance, but I always optimize for readability.

There are far more expensive operations in an application than a simple method call.

```cs{5}
public void Process(Order? order)
{
    if (order is null ||
        !order.IsVerified ||
        !order.Items.Any())
    {
        return;
    }

    if (order.Items.Count > 15)
    {
        throw new Exception(
            "The order " + order.Id + " has too many items");
    }

    if (order.Status != "ReadyToProcess")
    {
        throw new Exception(
            "The order " + order.Id + " isn't ready to process");
    }

    order.IsProcessed = true;
}
```

---

## #4: Replace Boolean Expression With Descriptive Method

Merging multiple conditions into one `if` statement means writing less code, but it can **decrease readability** with **complex conditions**.

However, you can fix this and improve readability by using a variable or method with a **descriptive name**.

I prefer using methods, so I will introduce the `IsProcessable` method to represent the precondition check.

```cs{3,23-28}
public void Process(Order? order)
{
    if (!IsProcessable(order))
    {
        return;
    }

    if (order.Items.Count > 15)
    {
        throw new Exception(
            "The order " + order.Id + " has too many items");
    }

    if (order.Status != "ReadyToProcess")
    {
        throw new Exception(
            "The order " + order.Id + " isn't ready to process");
    }

    order.IsProcessed = true;
}

static bool IsProcessable(Order? order)
{
    return order is not null &&
           order.IsVerified &&
           order.Items.Any();
}

```

---

## #5: Prefer Throwing Custom Exceptions

Now let's talk about throwing exceptions. I like to use exceptions for *"exceptional"* situations only, and I don't use them for flow control in my code.

Having said that, if you *do* want to use exceptions for flow control, it's better to use **custom exceptions**.

You can introduce valuable contextual information and better describe the reason for throwing the exception.

And if you want to handle these exceptions globally, you can create a base class to be able to catch specific exceptions.

```cs{10,15}
public void Process(Order? order)
{
    if (!IsProcessable(order))
    {
        return;
    }

    if (order.Items.Count > 15)
    {
        throw new TooManyLineItemsException(order.Id);
    }

    if (order.Status != "ReadyToProcess")
    {
        throw new NotReadyForProcessingException(order.Id);
    }

    order.IsProcessed = true;
}

static bool IsProcessable(Order? order)
{
    return order is not null &&
           order.IsVerified &&
           order.Items.Any();
}
```

---

## #6: Fix Magic Numbers With Constants

A common **code smell** I see is the use of **magic numbers**.

They are usually easy to spot because they're used to check if numeric some condition applies.

The problem with **magic numbers** is that they **carry no meaning**.

The code is harder to reason about, and more error-prone.

Fixing **magic numbers** should be straightforward, and one solution is introducing a constant.

```cs{1,10}
const int MaxNumberOfLineItems = 15;

public void Process(Order? order)
{
    if (!IsProcessable(order))
    {
        return;
    }

    if (order.Items.Count > MaxNumberOfLineItems)
    {
        throw new TooManyLineItemsException(order.Id);
    }

    if (order.Status != "ReadyToProcess")
    {
        throw new NotReadyForProcessingException(order.Id);
    }

    order.IsProcessed = true;
}

static bool IsProcessable(Order? order)
{
    return order is not null &&
           order.IsVerified &&
           order.Items.Any();
}
```

---

## #7: Fix Magic Strings With Enums

Similar to **magic numbers**, we have the **magic strings** **code smell**.

A typical use case for **magic strings** is to represent some sort of state.

You'll notice that we're comparing the `Order.Status` value to a **magic string** to check if the order is ready to process.

A few **problems** with **magic strings**:

- Easy to make mistakes (typo)
- Lack of strong typing
- Not refactoring proof

Let's create an `OrderStatus` `enum` to represent the possible states:

```cs
enum OrderStatus
{
    Pending = 0,
    ReadyToProcess = 1,
    Processed = 2
}
```

And now we have to use the appropriate `OrderStatus` in the check:

```cs{15,21}
const int MaxNumberOfLineItems = 15;

public void Process(Order? order)
{
    if (!IsProcessable(order))
    {
        return;
    }

    if (order.Items.Count > MaxNumberOfLineItems)
    {
        throw new TooManyLineItemsException(order.Id);
    }

    if (order.Status != OrderStatus.ReadyToProcess)
    {
        throw new NotReadyForProcessingException(order.Id);
    }

    order.IsProcessed = true;
    order.Status = OrderStatus.Processed;
}

static bool IsProcessable(Order? order)
{
    return order is not null &&
           order.IsVerified &&
           order.Items.Any();
}
```

---

## #8: Use The Result Object Pattern

I said I don't prefer using exceptions for flow control. But how can we fix this?

One solution is using the **result object pattern**.

You can use a generic `Result` class to represent all types of results or a specific one like `ProcessOrderResult`.

To make your result objects encapsulated, expose a set of factory methods to create the concrete result type.

```cs
public class ProcessOrderResult
{
    private ProcessOrderResult(
        ProcessOrderResultType type,
        long orderId,
        string message)
    {
        Type = type;
        OrderId = orderId;
        Message = message;
    }

    public ProcessOrderResultType Type { get; }

    public long OrderId { get; }

    public string? Message { get; }

    public static ProcessOrderResult NotProcessable() =>
      new(ProcessOrderResultType.NotProcessable, default, "Not processable");

    public static ProcessOrderResult TooManyLineItems(long oderId) =>
      new(ProcessOrderResultType.TooManyLineItems, orderId, "Too many items");

    public static ProcessOrderResult NotReadyForProcessing(long oderId) =>
      new(ProcessOrderResultType.NotReadyForProcessing, oderId, "Not ready");

    public static ProcessOrderResult Success(long oderId) =>
      new(ProcessOrderResultType.Success, oderId, "Success");
}
```

Using an `enum` like `ProcessOrderResultType` will make consuming the result object easier with switch expressions. Here's the `enum` to represent the `ProcessOrderResult.Type`:

```cs
public enum ProcessOrderResultType
{
    NotProcessable = 0,
    TooManyLineItems = 1,
    NotReadyForProcessing = 2,
    Success = 3
}
```

And now the `Process` method becomes:

```cs{7,12,17,23}
const int MaxNumberOfLineItems = 15;

public ProcessOrderResult Process(Order? order)
{
    if (!IsProcessable(order))
    {
        return ProcessOrderResult.NotProcessable();
    }

    if (order.Items.Count > MaxNumberOfLineItems)
    {
        return ProcessOrderResult.TooManyLineItems(order);
    }

    if (order.Status != OrderStatus.ReadyToProcess)
    {
        return ProcessOrderResult.NotReadyForProcessing(order);
    }

    order.IsProcessed = true;
    order.Status = OrderStatus.Processed;

    return ProcessOrderResult.Success(order);
}

static bool IsProcessable(Order? order)
{
    return order is not null &&
           order.IsVerified &&
           order.Items.Any();
}
```

Here's how using an `enum` for the `ProcessOrderResult.Type` allows you to write a switch expression:

```cs
var result = Process(order);

result.Type switch
{
    ProcessOrderResultType.TooManyLineItems =>
        Console.WriteLine($"Too many line items: {result.OrderId}"),

    ProcessOrderResultType.NotReadyForProcessing =>
        Console.WriteLine($"Not ready for processing {result.OrderId}"),

    ProcessOrderResultType.Success =>
        Console.WriteLine($"Processed successfully {result.OrderId}"),

    _ => Console.WriteLine("Failed to process: {OrderId}", result.OrderId),
};
```

---

## Takeaway

Writing **clean code** is a matter of deliberate practice and experience.

Most people will read about **clean coding principles**, but few will strive to apply them daily.

This is where you can set yourself apart.

I also made a video about these **clean code** tips, you can watch it [<FontIcon icon="fa-brands fa-youtube"/>here.](https://youtu.be/McDvyFglkvU)

<VidStack src="youtube/McDvyFglkvU" />

Hope this was helpful.

See you next week!

::: tip Today's action step

Take a look at your project and see if you're making some of the mistakes I highlighted here.
And then fix them using the clean code tips I shared with you.

:::

---

<TagLinks />