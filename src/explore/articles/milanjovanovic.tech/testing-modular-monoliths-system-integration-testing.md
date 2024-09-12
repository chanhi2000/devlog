---
lang: ko-KR
title: "Testing Modular Monoliths: System Integration Testing"
description: "Article(s) > Testing Modular Monoliths: System Integration Testing"
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
      content: "Article(s) > Testing Modular Monoliths: System Integration Testing"
    - property: og:description
      content: "Testing Modular Monoliths: System Integration Testing"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/testing-modular-monoliths-system-integration-testing.html
prev: /programming/cs/articles/README.md
date: 2024-07-20
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_099.png
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
  name="Testing Modular Monoliths: System Integration Testing"
  desc="System integration testing is the perfect testing approach for modular monoliths. It's an approach to testing the interactions between various modules within a single system."
  url="https://milanjovanovic.tech/blog/testing-modular-monoliths-system-integration-testing/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_099.png"/>

<!-- TODO: 작성 -->

<!-- 
Modular monoliths strike a balance between the simplicity of monolithic architecture and the flexibility of microservices. By breaking down applications into cohesive modules, modular monoliths enable easier development and maintenance. However, they still have a single codebase and deployment unit.

A critical aspect of the success of a modular monolith is the interaction between its modules.

**System integration testing (SIT)** is an approach to verifying the collaboration of these modules. It involves testing the integration points and communication mechanisms between modules.

System integration testing allows us to validate the entire system's behavior. This allows us to catch problems early before they become big headaches.

In this article, we'll learn how to test a modular monolith using system integration testing.

We'll look at real-world examples and discuss why this testing approach is useful.

---

## What Is System Integration Testing?

System integration testing (SIT) is an approach to testing the interactions between various modules within a single system. The system could contain many external services, which should also be included during testing.

System integration testing is the perfect testing approach for modular monoliths. It allows you to mimic the real-world execution of your application (as you'll see later).

The key benefits of system integration testing are:

- **Detecting integration issues**: Discover problems from module integrations that unit testing might miss.
- **Validating business logic**: Confirm that end-to-end business processes function correctly across modules.
- **Ensuring data integrity**: Verify that data flows accurately and consistently between modules.
- **Improving system stability**: Identify and resolve issues early, leading to a more reliable system.
- **Building confidence**: Ensure that the system is well-integrated and ready for deployment.

---

## Modular Monolith System Example

A modular monolith consists of multiple modules, each with a distinct responsibility. Modules represent high-level components with well-defined boundaries. The modules essentially group together related functionalities (use cases). If you want to learn more about this software architecture, check out this <a href="what-is-a-modular-monolith">**introduction to modular monoliths**</a>.

Let's consider a hypothetical ticketing system that consists of several modules:

- **Users Module**: Handles user administration and authentication.
- **Events Module**: Manages events, scheduling, and ticket availability.
- **Ticketing Module**: Allows users to purchase tickets for various events.
- **Attendance Module**: Allows users to check into events using their tickets.

<figure><span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%272506%27%20height=%271282%27/%3e"><img alt="Modular monolith UML diagram." src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="Modular monolith UML diagram." srcSet="/blogs/mnw_099/modular_monolith.png?imwidth=3840 1x" src="/blogs/mnw_099/modular_monolith.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript><figcaption>Source: <a href="/modular-monolith-architecture">Modular Monolith Architecture</a>

During system integration testing, we want to ensure that all these modules interact correctly and fulfill the business requirements of the ticketing system.

---

## Testing Modular Monoliths: User Registration

The modules in our ticketing system represent different <a href="monolith-to-microservices-how-a-modular-monolith-helps">**bounded contexts**</a>. The **Users Module** uses the term `User` as its core entity. However, the **Ticketing Module** uses the term `Customer` because it's more aligned with its core responsibility of selling tickets. Conceptually, both entities represent the same person within our system.

Here's the scenario we want to test:

- A user registers with our application through the **Users Module**
- The **Users Module** publishes an integration event to notify other modules
- The **Ticketing Module** handles the integration event and creates a customer record

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%272866%27%20height=%27877%27/%3e"><img alt="User registration flow diagram." src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="User registration flow diagram." srcSet="/blogs/mnw_099/user_registration.png?imwidth=3840 1x" src="/blogs/mnw_099/user_registration.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/>

If you haven't figured it out by now, our <a href="modular-monolith-communication-patterns">**modules communicate asynchronously**</a> using messaging.

Why is this important for our tests?

There is a time delay from when something occurs in one module until the other modules are notified and handle the integration events. Our system integration tests will have to take into account this delay.

Here's the test for this scenario:

```cs
public class RegisterUserTests : BaseIntegrationTest
{
    public RegisterUserTests(IntegrationTestWebAppFactory factory)
        : base(factory)
    {
    }

    [Fact]
    public async Task RegisterUser_Should_PropagateToTicketingModule()
    {
        // [Users Module] - Register user
        var command = new RegisterUserCommand(
            Faker.Internet.Email(),
            Faker.Internet.Password(6),
            Faker.Name.FirstName(),
            Faker.Name.LastName());

        Result<Guid> userResult = await Sender.Send(command);

        userResult.IsSuccess.Should().BeTrue();

        // [Ticketing Module] - Get customer
        Result<CustomerResponse> customerResult = await Poller.WaitAsync(
            TimeSpan.FromSeconds(15),
            async () =>
            {
                var query = new GetCustomerQuery(userResult.Value);

                var customerResult = await Sender.Send(query);

                return customerResult;
            });

        // Assert
        customerResult.IsSuccess.Should().BeTrue();
        customerResult.Value.Should().NotBeNull();
    }
}
```

A lot is going on here, so let's unpack the steps:

- We're using the `WebApplicationFactory` to run an in-memory application instance
- Any external dependencies run in a Docker container using <a href="testcontainers-integration-testing-using-docker-in-dotnet">**Testcontainers**</a>
- We send the `RegisterUserCommand` to register a user in the **Users Module**
- Then, we have to poll the **Ticketing Module** by sending a `GetCustomerQuery`
- The `Poller` allows us to wait until the system eventually becomes consistent

You can learn more about <a href="testcontainers-integration-testing-using-docker-in-dotnet">**integration testing with Testcontainers in this article**</a>.

System integration tests take longer to execute than integration tests for one module.
This is a side effect of testing a bigger slice of the overall system in each test case.

The `Poller` class allows you to execute a delegate until you receive a successful result or a timeout occurs.
You can customize the timeout duration based on the scenario you are testing.

```cs
internal static class Poller
{
    private static readonly Error Timeout =
        Error.Failure("Poller.Timeout", "The poller has time out");

    internal static async Task<Result<T>> WaitAsync<T>(
        TimeSpan timeout,
        Func<Task<Result<T>>> func)
    {
        using var timer = new PeriodicTimer(TimeSpan.FromSeconds(1));

        DateTime endTimeUtc = DateTime.UtcNow.Add(timeout);
        while (DateTime.UtcNow < endTimeUtc &&
               await timer.WaitForNextTickAsync())
        {
            Result<T> result = await func();

            if (result.IsSuccess)
            {
                return result;
            }
        }

        return Result.Failure<T>(Timeout);
    }
}
```

---

## Testing Modular Monoliths: Adding Ticket to Cart

Here's a more complex scenario testing adding a ticket to the customer's cart:

- A user registers with our application through the **Users Module**
- The **Users Module** publishes an integration event to notify other modules
- The **Ticketing Module** handles the integration event and creates a customer record
- The **Ticketing Module** creates a dummy event and adds a ticket to the customer's cart

This scenario mimics a user registering with our system, finding a ticket they want to purchase, and adding it to their cart. We can extend this scenario with more test cases, like ticket purchases.

```cs
public sealed class AddItemToCartTests : BaseIntegrationTest
{
    private const decimal Quantity = 10;

    public AddItemToCartTests(IntegrationTestWebAppFactory factory)
        : base(factory)
    {
    }

    [Fact]
    public async Task Customer_ShouldBeAbleTo_AddItemToCart()
    {
        // [Users Module] - Register user
        var command = new RegisterUserCommand(
            Faker.Internet.Email(),
            Faker.Internet.Password(6),
            Faker.Name.FirstName(),
            Faker.Name.LastName());

        Result<Guid> userResult = await Sender.Send(command);

        userResult.IsSuccess.Should().BeTrue();

        // [Ticketing Module] - Get customer
        Result<CustomerResponse> customerResult = await Poller.WaitAsync(
            TimeSpan.FromSeconds(15),
            async () =>
            {
                var query = new GetCustomerQuery(userResult.Value);
                var customerResult = await Sender.Send(query);
                return customerResult;
            });

        customerResult.IsSuccess.Should().BeTrue();

        // [Ticketing Module] - Add item to cart
        CustomerResponse customer = customerResult.Value;
        var ticketTypeId = Guid.NewGuid();

        await Sender.CreateEventAsync(Guid.NewGuid(), ticketTypeId, Quantity);

        Result result = await Sender.Send(
            new AddItemToCartCommand(customer.Id, ticketTypeId, Quantity));

        // Assert
        result.IsSuccess.Should().BeTrue();
    }
}

```

What I like about system integration testing is that the test cases aren't complicated to write. The tests execute the use cases of our system and verify the side effects. Building your system around <a href="building-your-first-use-case-with-clean-architecture">**use cases**</a> has a few advantages, the main one being that you can focus on the core business logic. But it also makes (integration) testing easier. The use case runs by sending a command or a query. We can execute the use cases in some logical order and check that we get the expected result.

---

## In Conclusion

System integration testing is a crucial step in creating a successful modular monolith. By testing how different modules work together, you can find and fix problems before they become bigger issues. This makes your software more reliable and saves you time and resources in the long run.

If you want to dive deeper into building modular systems, check out <a href="/modular-monolith-architecture">**Modular Monolith Architecture**</a>. There's an entire chapter dedicated to testing, including advanced techniques like system integration testing, using Testcontainers for external services, and automated testing with CI/CD pipelines.

That's all for today.

See you next week.

-->

---

<TagLinks />