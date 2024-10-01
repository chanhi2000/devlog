---
lang: ko-KR
title: Value Objects in .NET (DDD Fundamentals)
description: Article(s) > Value Objects in .NET (DDD Fundamentals)
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
      content: Article(s) > Value Objects in .NET (DDD Fundamentals)
    - property: og:description
      content: Value Objects in .NET (DDD Fundamentals)
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/value-objects-in-dotnet-ddd-fundamentals.html
prev: /programming/cs/articles/README.md
date: 2023-12-23
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_069.png
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
  name="Value Objects in .NET (DDD Fundamentals)"
  desc="Value Objects are one of the building blocks of Domain-Driven Design. Today, I'll show you some best practices for implementing Value Objects."
  url="https://milanjovanovic.tech/blog/value-objects-in-dotnet-ddd-fundamentals/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_069.png"/>

**Value Objects** are one of the building blocks of Domain-Driven Design. DDD is a software development approach for solving problems in complex domains.

Value objects encapsulate a set of primitive values and related invariants. A few examples of value objects are money and date range objects. Money consists of an amount and currency. A date range consists of start and end dates.

Today, I'll show you some best practices for implementing Value Objects.

---

## What are Value Objects?

Let's start with the definition from the Domain-Driven Design book:

> An object that represents a descriptive aspect of the domain with no conceptual identity is called a Value Object. Value Objects are instantiated to represent elements of the design that we care about only for what they are, not who or which they are.
>> *[<FontIcon icon="fa-brands fa-amazon"/>Eric Evans](http://amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215)*

Value objects are different from entities - they don't have a concept of identity. They encapsulate primitive types in the domain and solve [<FontIcon icon="fas fa-globe"/>primitive obsession.](https://refactoring.guru/smells/primitive-obsession)

There are two main qualities of Value Objects:

- They are immutable
- They have no identity

Another quality of value objects is structural equality. Two value objects are equal if their values are the same. This quality is the least important in practice. However, there are cases where you want only some values to determine equality.

---

## Implementing Value Objects

The most important quality of value objects is immutability. The values of a value object can't change once an object is created. If you want to change an individual value, you need to replace the entire value object.

Here's a `Booking` entity with primitive values representing an address and the start and end dates of the booking.

```cs
public class Booking
{
    public string Street { get; init; }
    public string City { get; init; }
    public string State { get; init; }
    public string Country { get; init; }
    public string ZipCode { get; init; }

    public DateOnly StartDate { get; init; }
    public DateOnly EndDate { get; init; }
}
```

You can replace these primitive values with `Address` and `DateRange` value objects.

```cs
public class Booking
{
    public Address Address { get; init; }

    public DateRange Period { get; init; }
}
```

But how do you implement value objects?

### C# Records

You can use C# [records](/explore/articles/milanjovanovic.tech/records-anonymous-types-non-destructive-mutation.md) to represent value objects. Records are immutable by design, and they have structural equality. We want both of these qualities for our value objects.

For example, you can represent an `Address` value object using a `record` with a [<FontIcon icon="fa-brands fa-microsoft"/>primary constructor](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/instance-constructors#primary-constructors).
The advantage of this approach is conciseness.

```cs
public record Address(
    string Street,
    string City,
    string State,
    string Country,
    string ZipCode);
```

However, you lose this advantage when defining a private constructor. This will happen when you want to enforce invariants while creating the value object. Another issue with using records is avoiding value object invariants using the `with` expression.

```cs
public record Address
{
    private Address(
        string street,
        string city,
        string state,
        string country,
        string zipCode)
    {
        Street = street;
        City = city;
        State = state;
        Country = country;
        ZipCode = zipCode;
    }

    public string Street { get; init; }
    public string City { get; init; }
    public string State { get; init; }
    public string Country { get; init; }
    public string ZipCode { get; init; }

    public static Result<Address> Create(
        string street,
        string city,
        string state,
        string country,
        string zipCode)
    {
        // Check if the address is valid

        return new Address(street, city, state, country, zipCode);
    }
}

```

### Base Class

The alternative way to implement value objects is with a `ValueObject` base class. The base class handles structural equality with the `GetAtomicValues` abstract method. `ValueObject` implementations have to implement this method and define the equality components.

The advantage of using a `ValueObject` base class is that it's explicit. It's clear which classes in your domain represent value objects. Another advantage is being able to control the equality components.

Here's a `ValueObject` base class I use in my projects:

```cs
public abstract class ValueObject : IEquatable<ValueObject>
{
    public static bool operator ==(ValueObject? a, ValueObject? b)
    {
        if (a is null && b is null)
        {
            return true;
        }

        if (a is null || b is null)
        {
            return false;
        }

        return a.Equals(b);
    }

    public static bool operator !=(ValueObject? a, ValueObject? b) =>
        !(a == b);

    public virtual bool Equals(ValueObject? other) =>
        other is not null && ValuesAreEqual(other);

    public override bool Equals(object? obj) =>
        obj is ValueObject valueObject && ValuesAreEqual(valueObject);

    public override int GetHashCode() =>
        GetAtomicValues().Aggregate(
            default(int),
            (hashcode, value) =>
                HashCode.Combine(hashcode, value.GetHashCode()));

    protected abstract IEnumerable<object> GetAtomicValues();

    private bool ValuesAreEqual(ValueObject valueObject) =>
        GetAtomicValues().SequenceEqual(valueObject.GetAtomicValues());
}

```

The `Address` value object implementation would look like this:

```cs
public sealed class Address : ValueObject
{
    public string Street { get; init; }
    public string City { get; init; }
    public string State { get; init; }
    public string Country { get; init; }
    public string ZipCode { get; init; }

    protected override IEnumerable<object> GetAtomicValues()
    {
        yield return Street;
        yield return City;
        yield return State;
        yield return Country;
        yield return ZipCode;
    }
}
```

---

## When To Use Value Objects?

I use value objects to solve primitive obsession and encapsulate domain invariants. Encapsulation is an important aspect of any domain model. You shouldn't be able to create a value object in an invalid state.

Value objects also give you type safety. Take a look at this method signature:

```cs
public interface IPricingService
{
    decimal Calculate(Apartment apartment, DateOnly start, DateOnly end);
}
```

Then, compare it to this method signature, where we added value objects. You can see how the `IPricingService` with value objects is much more explicit. You also get the benefit of type safety. When compiling the code, value objects reduce the chance of errors creeping in.

```cs
public interface IPricingService
{
    PricingDetails Calculate(Apartment apartment, DateRange period);
}
```

Here are a few more things you should consider to decide if you need value objects:

- **Complexity of invariants**: If enforcing complex invariants, consider using value objects
- **Number of primitives**: Value objects make sense when encapsulating many primitive values
- **Number of duplications**: If you need to enforce invariants only in a few places in the code, you can manage without value objects

---

## Persisting Value Objects With EF Core

Value objects are part of domain entities, and you need to save them in the database.

I'll show you how to use EF [<FontIcon icon="fa-brands fa-microsoft"/>Owned Types](https://learn.microsoft.com/en-us/ef/core/modeling/owned-entities) and [<FontIcon icon="fa-brands fa-microsoft"/>Complex Types](https://devblogs.microsoft.com/dotnet/announcing-ef8-rc1/#complex-types-as-value-objects) to persist value objects.

### Owned Types

[<FontIcon icon="fa-brands fa-microsoft"/>Owned Types](https://learn.microsoft.com/en-us/ef/core/modeling/owned-entities) can be configured by calling the `OwnsOne` method when configuring the entity. This tells EF to persist the `Address` and `Price` value objects to the same table as the `Apartment` entity. The value objects are represented with additional columns in the `apartments` table.

```cs{5,7-13}
public void Configure(EntityTypeBuilder<Apartment> builder)
{
    builder.ToTable("apartments");

    builder.OwnsOne(property => property.Address);

    builder.OwnsOne(property => property.Price, priceBuilder =>
    {
        priceBuilder.Property(money => money.Currency)
            .HasConversion(
                currency => currency.Code,
                code => Currency.FromCode(code));
    });
}
```

A few more remarks about owned types:

- Owned types have a hidden key value
- No support for optional (nullable) owned types
- Owned collections are supported with `OwnsMany`
- Table splitting allows you to persist owned types separately

### Complex Types

[<FontIcon icon="fa-brands fa-microsoft"/>Complex Types](https://devblogs.microsoft.com/dotnet/announcing-ef8-rc1/#complex-types-as-value-objects) are a new EF feature available in .NET 8. They aren't identified or tracked by a key value. Complex types have to be part of an entity type.

Complex types are more appropriate for representing value objects with EF.

Here's how you can configure an `Address` value object as a complex type:

```cs{5}
public void Configure(EntityTypeBuilder<Apartment> builder)
{
    builder.ToTable("apartments");

    builder.ComplexProperty(property => property.Address);
}
```

A few limitations for complex types:

- No support for collections
- No support for nullable values

---

## Takeaway

Value objects help design a rich domain model. You can use them to solve primitive obsession and encapsulate domain invariants. Value objects can reduce errors by preventing the instantiation of invalid domain objects.

You can use a `record` or `ValueObject` base class to represent value objects. This should depend on your specific requirements and the complexity of your domain. I use records by default unless I need some qualities of a `ValueObject` base class. For example, a base class is practical when you want to control equality components.

More learning material about value objects:

- [<FontIcon icon="fa-brands fa-youtube"/>Solving primitive obsession with value objects](https://youtu.be/P5CRea21R2E)
- [<FontIcon icon="fa-brands fa-youtube"/>Using EF 8 Complex types for value objects](https://youtu.be/LhCD5CUSP6g)

Hope this was helpful.

See you next week.

<VidStack src="youtube/P5CRea21R2E" />
<VidStack src="youtube/LhCD5CUSP6g" />

---

<TagLinks />