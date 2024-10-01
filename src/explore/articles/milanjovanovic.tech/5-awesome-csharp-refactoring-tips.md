---
lang: ko-KR
title: 5 Awesome C# Refactoring Tip
description: Article(s) > 5 Awesome C# Refactoring Tip
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
      content: Article(s) > 5 Awesome C# Refactoring Tip
    - property: og:description
      content: 5 Awesome C# Refactoring Tip
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/5-awesome-csharp-refactoring-tips.html
prev: /programming/cs/articles/README.md
date: 2023-11-25
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_065.png
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
  name="5 Awesome C# Refactoring Tip"
  desc="Refactoring is a technique for restructuring existing code without changing its behavior. You can think of refactoring as a series of small code transformations. One change (refactoring) does little. But a sequence of refactors produces a significant transformation. There's no better way to learn refactoring than practicing. So I prepared a refactoring exercise for you."
  url="https://milanjovanovic.tech/blog/5-awesome-csharp-refactoring-tips/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_065.png"/>

Refactoring is a technique for restructuring existing code without changing its behavior. You can think of refactoring as a series of small code transformations.

One change (refactoring) does little. But a sequence of refactors produces a significant transformation.

There's no better way to learn refactoring than practicing.

So I prepared a refactoring exercise for you.

Today I'm going to refactor some poorly written code.

And I'll show you 5 awesome refactoring techniques along the way:

- Extract method
- Extract interface
- Extract class
- Functional code
- Pushing logic down

---

## Starting Point

We will refactor the `CustomerService` below to try to improve the code.

I want to achieve three goals with this refactor.

Or rather, I want to improve three qualities of the `CustomerService`:

- Testability
- Readability
- Maintainability

To improve these qualities, we need to figure out what's preventing us from attaining them.

So, let's first understand what the `CustomerService` is doing on a high level:

- Validation of the input arguments
- Fetching the `Company` and creating a new `Customer`
- Calculating if the `Customer` has a credit limit and the amount
- Saving the `Customer` to the database if they meet a specific condition

You can see quite a few things are happening inside the `AddCustomer` method.

It's almost 100 lines of code, which reduces readability.

It's difficult to test because we can't control any external dependencies.

It's impossible to extend the behavior of the `CustomerService` without changing the code.

But we can fix all these problems. Let me show you how.

```cs
public class CustomerService
{
    public bool AddCustomer(
        string firstName,
        string lastName,
        string email,
        DateTime dateOfBirth,
        int companyId)
    {
        if (string.IsNullOrEmpty(firstName) || string.IsNullOrEmpty(lastName))
        {
            return false;
        }

        if (!email.Contains('@') && !email.Contains('.'))
        {
            return false;
        }

        var now = DateTime.Now;
        var age = now.Year - dateOfBirth.Year;
        if (dateOfBirth.Date > now.AddYears(-age))
        {
            age -= 1;
        }

        if (age < 21)
        {
            return false;
        }

        var companyRepository = new CompanyRepository();
        var company = companyRepository.GetById(companyId);

        var customer = new Customer
        {
            Company = company,
            DateOfBirth = dateOfBirth,
            EmailAddress = email,
            Firstname = firstName,
            Surname = lastName
        };

        if (company.Type == "VeryImportantClient")
        {
            // Skip credit check
            customer.HasCreditLimit = false;
        }
        else if (company.Type == "ImportantClient")
        {
            // Do credit check and double credit limit
            customer.HasCreditLimit = true;
            using var creditService = new CustomerCreditServiceClient();

            var creditLimit = creditService.GetCreditLimit(
                customer.Firstname,
                customer.Surname,
                customer.DateOfBirth);

            creditLimit *= 2;
            customer.CreditLimit = creditLimit;
        }
        else
        {
            // Do credit check
            customer.HasCreditLimit = true;
            using var creditService = new CustomerCreditServiceClient();

            var creditLimit = creditService.GetCreditLimit(
                customer.Firstname,
                customer.Surname,
                customer.DateOfBirth);

            customer.CreditLimit = creditLimit;
        }

        if (customer.HasCreditLimit && customer.CreditLimit < 500)
        {
            return false;
        }

        var customerRepository = new CustomerRepository();
        customerRepository.AddCustomer(customer);

        return true;
    }
}
```

---

## Refactoring the Validation

The first part of the code validating input parameters is pretty concise.
It also follows the early return principle.

The validation consists of simple input validation and a calculation for the customer's age.

I would start with an **extract method** refactor to move the validation into one place.

```cs
if (string.IsNullOrEmpty(firstName) || string.IsNullOrEmpty(lastName))
{
    return false;
}

if (!email.Contains('@') && !email.Contains('.'))
{
    return false;
}

var now = DateTime.Now;
var age = now.Year - dateOfBirth.Year;
if (dateOfBirth.Date > now.AddYears(-age))
{
    age -= 1;
}

if (age < 21)
{
    return false;
}
```

Calculating the age isn't part of the validation flow, so I'll extract that into the `CalculateAge` method.

```cs
int CalculateAge(DateTime dateOfBirth, DateTime now)
{
    var age = now.Year - dateOfBirth.Year;
    if (dateOfBirth.Date > now.AddYears(-age))
    {
        age -= 1;
    }

    return age;
}
```

Then, I'll create the `IsValid` method to encapsulate all the validation rules.
Instead of writing many `if-else` statements, I can write a single `bool` expression.

I also introduced a `minimumAge` constant to improve readability.

You can see how the `CalculateAge` method helps simplify the validation check.

```cs
bool IsValid(
    string firstName,
    string lastName,
    string email,
    DateTime dateOfBirth)
{
    const int minimumAge = 21;

    return !string.IsNullOrEmpty(firstName) &&
           !string.IsNullOrEmpty(lastName) &&
           (email.Contains('@') || email.Contains('.')) &&
           CalculateAge(dateOfBirth, DateTime.Now) >= minimumAge;
}
```

This simplifies the validation code in `AddCustomer` to:

```cs
if (!IsValid(firstName, lastName, email, dateOfBirth))
{
    return false;
}
```

---

## Refactoring Towards Dependency Injection

The next problem I want to solve is introducing [dependency injection](/explore/articles/milanjovanovic.tech/improving-aspnetcore-dependency-injection-with-scrutor.md) to the `CustomerService`.

Dependency injection allows us to achieve **Inversion of Control (IoC).**

We depend only on interfaces at compile time and on implementations at run time.

The dependency injection pattern has a few important benefits.

You don't have to know how to initialize or dispose of external dependencies.

It also improves testability since you now depend on interfaces.

Interfaces can be mocked to make unit testing easier.

So let's update the `CustomerService` not to initialize the dependencies directly:

```cs
var companyRepository = new CompanyRepository();

using var creditService = new CustomerCreditServiceClient();

var customerRepository = new CustomerRepository();
```

Instead, we will inject them as constructor arguments.

You can even use the [<FontIcon icon="fa-brands fa-microsoft"/>C# 12 primary constructor](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/primary-constructors) feature.

```cs{2-4}
public class CustomerService(
    CompanyRepository companyRepository,
    CustomerRepository customerRepository,
    CustomerCreditServiceClient creditService)
{
    // ...
}
```

The next step would be introducing interfaces for these dependencies.
This comes down to an **extract interface** refactor.

---

## Refactoring the Credit Limit Calculation

The credit limit calculation is the most complicated part of the code.

There are different business rules based on the company type.

I try to notice patterns in the code before refactoring.

So here are a few of my observations.

Multiple `if-else` statements based on the `Type` property make me wonder if I'll need to extend this in the future.

Adding a new rule would mean another `if-else` check.

The [<FontIcon icon="fas fa-globe"/>strategy pattern](https://refactoring.guru/design-patterns/strategy) could be an alternative, but a `switch` statement will also work fine.

Another thing that stands out is the **code duplication** in the last two blocks.

This usually means I can do an **extract method** refactoring to reduce code duplication.

```cs
if (company.Type == "VeryImportantClient")
{
    // Skip credit check
    customer.HasCreditLimit = false;
}
else if (company.Type == "ImportantClient")
{
    // Do credit check and double credit limit
    customer.HasCreditLimit = true;
    using var creditService = new CustomerCreditServiceClient();

    var creditLimit = creditService.GetCreditLimit(
        customer.Firstname,
        customer.Surname,
        customer.DateOfBirth);

    creditLimit *= 2;
    customer.CreditLimit = creditLimit;
}
else
{
    // Do credit check
    customer.HasCreditLimit = true;
    using var creditService = new CustomerCreditServiceClient();

    var creditLimit = creditService.GetCreditLimit(
        customer.Firstname,
        customer.Surname,
        customer.DateOfBirth);

    customer.CreditLimit = creditLimit;
}
```

The first thing I want to do is introduce an `enum` for the `CompanyType`.

This is a [clean coding principle](/explore/articles/milanjovanovic.tech/8-tips-to-write-clean-code.md) I often use.
It improves the readability and extensibility of the code.

```cs
public enum CompanyType
{
    Regular = 0,
    ImportantClient = 1,
    VeryImportantClient = 2
}
```

The next thing that bothers me is that the credit limit calculation doesn't belong to the `CustomerService`.

It violates the [<FontIcon icon="fa-brands fa-wikipedia-w"/>single responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle).

So I want to introduce a dedicated `CreditLimitCalculator` using an **extract class** refactoring.

I replaced the `if-else` statements with a [<FontIcon icon="fa-brands fa-microsoft"/>switch expression](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/switch-expression) that I can easily extend in the future.

```cs
public class CreditLimitCalculator(
    CustomerCreditServiceClient customerCreditServiceClient)
{
    public (bool HasCreditLimit, decimal? CreditLimit) Calculate(
        Customer customer,
        Company company)
    {
        return company.Type switch
        {
            CompanyType.VeryImportantClient => (false, null),
            CompanyType.ImportantClient => (true, GetCreditLimit(customer) * 2),
            _ => (true, GetCreditLimit(customer))
        };
    }

    private decimal GetCreditLimit(Customer customer)
    {
        return customerCreditServiceClient.GetCreditLimit(
            customer.FirstName,
            customer.LastName,
            customer.DateOfBirth);
    }
}
```

---

## Reviewing the Refactoring (So Far)

Let's pause momentarily and review the refactored version of the `CustomerService`.

I'm confident you will find it more readable and easier to understand.

We can easily test this class and verify that the behavior is correct.

I would usually stop the refactoring at this point, since I'm happy with the results.

But can we take this further?

```cs
public class CustomerService(
    CompanyRepository companyRepository,
    CustomerRepository customerRepository,
    CreditLimitCalculator creditLimitCalculator)
{
    public bool AddCustomer(
        string firstName,
        string lastName,
        string email,
        DateTime dateOfBirth,
        int companyId)
    {
        if (!IsValid(firstName, lastName, email, dateOfBirth))
        {
            return false;
        }

        var company = companyRepository.GetById(companyId);

        var customer = new Customer
        {
            Company = company,
            DateOfBirth = dateOfBirth,
            EmailAddress = email,
            FirstName = firstName,
            LastName = lastName
        };

        (customer.HasCreditLimit, customer.CreditLimit) =
            creditLimitCalculator.Calculate(customer, company);

        if (customer is { HasCreditLimit: true, CreditLimit: < 500 })
        {
            return false;
        }

        customerRepository.AddCustomer(customer);

        return true;
    }
}
```

---

## Taking It Further - Pushing Logic Down

This part is optional, but I want to show you how to simplify the `CustomerService` by pushing logic into the domain.

What if we moved the responsibility of creating a `Customer` into the class?

I often use the **static factory** pattern to implement this.

The caveat is I have to take a dependency on `CreditLimitCalculator`.

I'm trading off domain model purity to get business rules completeness.

I also added the `IsUnderCreditLimit` method to wrap the credit limit check.

```cs
public class Customer
{
    // Properties omited

    public static Customer Create(
        Company company,
        string firstName,
        string lastName,
        string email,
        DateTime dateOfBirth,
        CreditLimitCalculator creditLimitCalculator)
    {
        var customer = new Customer
        {
            Company = company,
            DateOfBirth = dateOfBirth,
            EmailAddress = email,
            FirstName = firstName,
            LastName = lastName
        };

        (customer.HasCreditLimit, customer.CreditLimit) =
            creditLimitCalculator.Calculate(customer, company);

        return customer;
    }

    public bool IsUnderCreditLimit() => HasCreditLimit && CreditLimit < 500;
}
```

This is what the `CustomerService` looks like now:

```cs
public class CustomerService(
    CompanyRepository companyRepository,
    CustomerRepository customerRepository,
    CreditLimitCalculator creditLimitCalculator)
{
    public bool AddCustomer(
        string firstName,
        string lastName,
        string email,
        DateTime dateOfBirth,
        int companyId)
    {
        if (!IsValid(firstName, lastName, email, dateOfBirth))
        {
            return false;
        }

        var company = companyRepository.GetById(companyId);

        var customer = Customer.Create(
            company,
            firstName,
            lastName,
            email,
            dateOfBirth,
            creditLimitCalculator);

        if (customer.IsUnderCreditLimit())
        {
            return false;
        }

        customerRepository.AddCustomer(customer);

        return true;
    }
}
```

What do you think about this implementation?

---

## Next Steps

First of all, congrats on making it to the end.

This was a much longer newsletter issue than usual.

What do you think of this format?

Writing unit tests before starting the refactoring would be a great idea.

Unit tests will help detect any changes in behavior.

Remember, refactoring is transforming the existing code without changing the behavior.

Here are a few ideas on how you could further refactor the code:

<SiteInfo
  name="Strategy"
  desc="Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable."
  url="https://refactoring.guru/design-patterns/strategy"
  logo="https://refactoring.guru/favicon.ico"
  preview="https://refactoring.guru/images/refactoring/social/facebook-share-preview.png?id=dbf9e98269595be86eb668f365be6868"/>

```component VPCard
{
  "title": "Functional Error Handling in .NET With the Result Pattern",
  "desc": "How should you handle errors in your code? This has been a topic of many discussions, and I want to share my opinion. One school of thought suggests using exceptions for flow control. This is not a good approach because it makes the code harder to reason about. The caller must know the implementation details and which exceptions to handle. Exceptions are for exceptional situations. Today, I want to show you how to implement error handling using the Result pattern. It's a functional approach to error handling, making your code more expressive.",
  "link": "/explore/articles/milanjovanovic.tech/functional-error-handling-in-dotnet-with-the-result-pattern.md",
  "logo": "https://milanjovanovic.tech/profile_favicon.png",
  "background": "rgba(79,70,229,0,2)"
}
```

If you want to try this refactoring exercise, you can find the complete **source code here.**

<SiteInfo
  name="m-jovanovic/refactoring-katas"
  desc="This repository contains refactoring exercises in C#/.NET"
  url="https://github.com/m-jovanovic/refactoring-katas"
  logo="https://avatars.githubusercontent.com/u/34191235?s=48&v=4"
  preview="https://opengraph.githubassets.com/2b6f373f3f5640ca3b49b9b16252cc2200c954190ec03f40e72d89123ce74c58/m-jovanovic/refactoring-katas"/>

Hope this was helpful.

See you next week.

---

<TagLinks />