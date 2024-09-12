---
lang: ko-KR
title: Introduction To Locking And Concurrency Control in .NET 6
description: Article(s) > Introduction To Locking And Concurrency Control in .NET 6
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
      content: Article(s) > Introduction To Locking And Concurrency Control in .NET 6
    - property: og:description
      content: Introduction To Locking And Concurrency Control in .NET 6
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/introduction-to-locking-and-concurrency-control-in-dotnet-6.html
prev: /programming/cs/articles/README.md
date: 2022-10-22
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_008.png
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
  name="Introduction To Locking And Concurrency Control in .NET 6"
  desc="In this week's newsletter, we'll see how we can work with locking in .NET 6. We won't talk about how the lock is actually implemented at the operating system level. We will focus on application-level locking mechanisms instead. Locking allows us to control how many threads can access some piece of code. Why would you want to do this?"
  url="https://milanjovanovic.tech/blog/introduction-to-locking-and-concurrency-control-in-dotnet-6/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_008.png"/>

<!-- TODO: 작성 -->

<!-- 
In this week's newsletter, we'll see how we can work with **locking** in **.NET 6**.

We won't talk about how the lock is actually implemented at the operating system level.
Instead, I will focus on application-level **locking** mechanisms.

**Locking** allows us to control how many **threads** can access some piece of code.
Why would you want to do this?

Usually because you want to protect access to **expensive resources**,
and you need the **concurrency control** that locking enables.

We will use a simple `BankAccount` class with a `Deposit` method
to illustrate how to implement locking.

---

## the-c-lock-statement"><a href="#the-c-lock-statement">The C# Lock Statement

The C# language supports locking with the <a href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/lock">`lock` statement</a>.
You can use the `lock` statement to define a code block that only one thread can access.

The `lock` statement acquires a mutual-exclusion lock (mutex) for a given object,
executes the statement block, and releases the lock.

```cs
lock(_lock)
{
   // Your code...
}

```

Here `_lock` is a reference type, usually an `object` instance.

Let's see how we can implement the `BankAccount` class using the `lock` statement:

```cs
public class BankAccount
{
   private static readonly object _lock = new();
   private decimal _balance;

   public void Deposit(decimal amount)
   {
      lock(_lock)
      {
         _balance += amount;
      }
   }
}

```

The first thread to reach and execute the `lock` statement will be allowed to update
the `_balance`. Any other threads will block until the lock is released.

---

## locking-with-semaphore"><a href="#locking-with-semaphore">Locking With Semaphore

The <a href="https://learn.microsoft.com/en-us/dotnet/api/system.threading.semaphore?view=net-6.0">`Semaphore`</a>
class is another option we can use to achieve the same effect.

We'll use the `Semaphore` constructor to set the `initialCount` to 0,
which means that the `Semaphore` is open at the start.
And we will also set the `maximumCount` to 1,
which means that only one thread is allowed to enter the `Semaphore`.

Let's see how we can implement the `BankAccount` class using the `Semaphore`:

```cs
public class BankAccount
{
   private static readonly Semaphore _semaphore = new(
      initialCount: 0,
      maximumCount: 1);

   private decimal _balance;

   public void Deposit(decimal amount)
   {
      _semaphore.WaitOne();

      _balance += amount;

      _semaphore.Release();
   }
}

```

To enter the `Semaphore`, we have to call the `WaitOne` method.

If no thread was previously inside, our thread is allowed
to enter the `Semaphore` and update the balance.

After updating the balance, we call the `Release` method to
release the `Semaphore` for other threads that might be waiting.

---

## asynchronous-locking-with-semaphoreslim"><a href="#asynchronous-locking-with-semaphoreslim">Asynchronous Locking With SemaphoreSlim

What if we wanted to call an asynchronous method in a locked context?

We can't use the `lock` statement as it doesn't support asynchronous calls.
Awaiting an asynchronous call inside a `lock` statement will cause a compilation error.

The `Semaphore` class can solve this problem.

But I want to show you another option that we have, <a href="https://learn.microsoft.com/en-us/dotnet/api/system.threading.semaphoreslim?view=net-6.0">`SemaphoreSlim`</a>.
It's a lightweight alternative to the `Semaphore` class and has `async` methods.

Let's see how we can implement the `BankAccount` class using `SemaphoreSlim`:

```cs
public class BankAccount
{
   private static readonly SemaphoreSlim _semaphore = new(
      initialCount: 0,
      maximumCount: 1);

   private decimal _balance;

   public async Task Deposit(decimal amount)
   {
      await _semaphore.WaitAsync();

      _balance += amount;

      _semaphore.Release();
   }
}

```

Notice that I updated the `Deposit` method to return a `Task`.

This time, we're calling `WaitAsync` to block the current
thread until it can enter the semaphore.

After updating the balance, we call the `Release` method
to release the `SemaphoreSlim` like in the previous example.

---

## are-there-other-options-for-locking-in-net"><a href="#are-there-other-options-for-locking-in-net">Are There Other Options For Locking in .NET?

So far I mentioned three options to implement locking:

- <a href="#the-c-lock-statement">`lock` statement</a>
<li><a href="#locking-with-semaphore">`Semaphore`</a>
<li><a href="#asynchronous-locking-with-semaphoreslim">`SemaphoreSlim`</a>

However, **.NET** has other classes for **concurrency control** that you can
explore like
<a href="https://learn.microsoft.com/en-us/dotnet/api/system.threading.monitor?view=net-6.0">`Monitor`</a>,
<a href="https://learn.microsoft.com/en-us/dotnet/api/system.threading.mutex?view=net-6.0">`Mutex`</a>,
<a href="https://learn.microsoft.com/en-us/dotnet/api/system.threading.readerwriterlock?view=net-6.0">`ReaderWriterLock`</a>
and many more.

I hope you enjoyed this brief introduction to a very complex topic.

-->

---

<TagLinks />