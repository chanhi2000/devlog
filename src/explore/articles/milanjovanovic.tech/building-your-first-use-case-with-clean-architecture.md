---
lang: ko-KR
title: "Building Your First Use Case With Clean Architecture"
description: "Article(s) > Building Your First Use Case With Clean Architecture"
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
      content: "Article(s) > Building Your First Use Case With Clean Architecture"
    - property: og:description
      content: "Building Your First Use Case With Clean Architecture"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/building-your-first-use-case-with-clean-architecture.html
prev: /programming/cs/articles/README.md
date: 2024-07-13
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_098.png
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
  name="Building Your First Use Case With Clean Architecture"
  desc="This is a question I often hear: how do I design my use case with Clean Architecture? In this article, we'll explore a practical example of how to apply Clean Architecture principles by building a user registration feature."
  url="https://milanjovanovic.tech/blog/building-your-first-use-case-with-clean-architecture/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_098.png"/>

This is a question I often hear: how do I design my use case with Clean Architecture?

I understand the confusion. Figuring out what to place in the Domain, Application, and Infrastructure layer can seem complicated. If that's not enough, we also have to decide what makes up a use case and what should be abstracted away.

However, things become simpler if we adhere to the main rule in Clean Architecture — **the Dependency Rule**. This rule states that source code dependencies can only point inwards.

In this newsletter, we'll explore a practical example of how to apply Clean Architecture principles by building a user registration feature.

---

## Clean Architecture

[**Clean Architecture**](/explore/articles/milanjovanovic.tech/why-clean-architecture-is-great-for-complex-projects.md) has emerged as a guiding principle for crafting maintainable, scalable, and testable applications. At its core, Clean Architecture emphasizes the **separation of concerns** and the **dependency rule**. The dependency rule dictates that dependencies should point inward toward higher-level modules. By following this rule, you create a system where the core business logic of your application is decoupled from external dependencies. This makes it more adaptable to changes and easier to test.

![Clean Architecture diagram.](https://milanjovanovic.tech/blogs/mnw_098/clean_architecture.png?imwidth=3840)

The Domain layer encapsulates enterprise-wide business rules. It contains domain entities, where an entity is typically an object with methods.

The Application layer contains application-specific business rules and encapsulates all of the system's use cases. A use case orchestrates the flow of data to and from the domain entities and calls the methods exposed by the entities to achieve its goals.

The Infrastructure and Presentation layers deal with external concerns. Here, you will implement any abstractions defined in the inner layers.

---

## Describing The Use Case

What does it mean for a user to register with our application? It means they reserve an email address (or username) to identify themselves and be able to interact with our system. The user could provide other information, such as a first and last name, an address, and a phone number.

The first step in building any feature is clearly defining the desired result.

For user registration, this is what the required operations are:

- The user provides an email and password for registration
- Verify that the email was not reserved previously by an existing account
- Hash the password using some cryptographic hash function (e.g., SHA-256, SHA-512)
- Store the user in the database and (optionally) return an access token to the client

We could also consider any domain-specific rules or validations that we must enforce. A good example is password strength, where we could implement minimum length and complexity requirements.

Now that we have our requirements let's see how to translate them into a use case.

---

## Implementing the Use Case

With our requirements in place, we can now define the user registration use case. In [**Clean Architecture**](/explore/articles/milanjovanovic.tech/clean-architecture-and-the-benefits-of-structured-software-design.md), use cases live in the Application layer and orchestrate the interactions between domain entities and external dependencies.

Let's name our use case `RegisterUser`. Its input will be a `RegistrationRequest` object containing the user's registration data, and its output will be a `RegistrationResult` object indicating the outcome of the registration attempt. Notice that we are using a feature-driven name for the use case.

What about any external dependencies? If the use case needs to interact with an external system or infrastructure component, we abstract that behind an interface. Remember, your application's core business logic should be decoupled from external dependencies.

The `RegisterUser` class will use dependency injection to get the necessary dependencies:

- `IUserRepository`: An interface for accessing user data from the database.
- `IPasswordHasher`: An interface for hashing passwords securely.

The `RegisterUser` use case will follow these steps:

1. Validate input data
2. Check for existing `User`
3. Hash the password
4. Create a new `User` entity
5. Save the `User` to the database
6. Return the result

Finally, here's the code for our `RegisterUser` use case:

```cs
public class RegisterUser(
    IUserRepository userRepository,
    IPasswordHasher passwordHasher)
{
    public async Task<RegistrationResult> Handle(RegistrationRequest request)
    {
        // Validation omitted for brevity

        if (await userRepository.ExistsAsync(request.Email))
        {
            return RegistrationResult.EmailNotUnique;
        }

        var passwordHash = passwordHasher.Hash(request.Password);

        var user = User.Create(
            request.FirstName, request.LastName, request.Email, passwordHash);

        await userRepository.InsertAsync(user);

        return RegistrationResult.Success;
    }
}
```

A big benefit of this approach is that we can immediately write tests for the `RegisterUser` use case. We can provide mocks for external dependencies in the tests. We don't need the implementations to exist for this code to compile. With mocks, we can test our business rules and validate our implementation.

**Action step**: How would you extend the `RegisterUser` use case with more functionality?

Here are two examples:

- Adding an external identity provider
- Implementing email verification

---

## Where Clean Architecture Becomes Muddled

By designing our application with Clean Architecture, we produce a system independent of external concerns. We define abstractions in the Application layer and implement them in the Infrastructure layer. So far, so good.

However, this doesn't mean you can disregard how you integrate with external dependencies.

In theory, we should be able to "swap" the implementation for any external concern and call it a day. In practice, this couldn't be further from the truth.

Let me give you two practical examples using the user registration flow.

### Race Conditions

The `RegisterUser` use case has a race condition. Concurrent requests could pass the check for email uniqueness and proceed to register the user.

We could prevent this race condition by introducing a lock before checking for email uniqueness. That way, only one request will pass the check and proceed to save the user in the database.

```cs
if (await userRepository.ExistsAsync(request.Email))
{
    return RegistrationResult.EmailNotUnique;
}
```

However, there is a much more elegant way to solve this. We can introduce a unique index on the `Email` column in the database. A unique index guarantees that only one transaction can write the unique value to the database. The losing transaction will return an error.

We can handle this exception on the application side and return an appropriate error message to the user. The `IUserRepository.InsertAsync` method implementation can encapsulate this logic.

### Changing Hash Functions

Let's say we found a security flaw in the hash function used in the `IPasswordHasher` implementation. So, we spend a few minutes switching to a more secure hash function. The tests for the `RegisterUser` use case are all green, and everything seems fine.

The problem? All existing users can no longer log in to the system.

When an existing user tries to log in with their email and password, the new `IPasswordHasher.Hash` implementation returns a different password hash from the one stored in the database.

The correct approach is to phase out the old password hash for existing users. We can add a column in the database that says which hash function produced the hash. We will verify the user's password using the correct hashing function during the login process.

If the user's password hash still uses the old hashing function, we will verify their password first. Then, we can use the password (which we have in memory) to produce a hash using the new hash function. We will store the hash in the database and update the hash function column to the new algorithm.

Slowly, we will phase out passwords using the old hash function.

---

## Conclusion

I hope this was helpful in understanding how to apply Clean Architecture principles to a real-world scenario. By focusing on the core business logic first (what it means for a user to register), we can define the requirements for our use case. Translating these requirements into a series of steps within the use case is the easy part.

But Clean Architecture won't save you from bad engineering. If you don't understand what you are abstracting away, it will become a problem in the long term.

If you want to go deeper, my flagship course, [**Pragmatic Clean Architecture**](/explore/articles/milanjovanovic.tech/pragmatic-clean-architecture.md), takes the guesswork out of structuring your project the right way. I share my entire framework for building robust applications from the ground up - from building a rich domain model to creating use cases to getting your application ready for production.

And that's all for this week.

See you next Saturday.

---

<TagLinks />