---
lang: ko-KR
title: CQRS Pattern With MediatR
description: Article(s) > CQRS Pattern With MediatR
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
      content: Article(s) > CQRS Pattern With MediatR
    - property: og:description
      content: CQRS Pattern With MediatR
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/cqrs-pattern-with-mediatr.html
prev: /programming/cs/articles/README.md
date: 2023-10-21
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_060.png
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
  name="CQRS Pattern With MediatR"
  desc="Today I want to show you how to use the CQRS pattern to build fast and scalable applications. The CQRS pattern separates the writes and reads in the application. This separation can be logical or physical and has many benefits. I'm also going to show you how to implement CQRS in your application using MediatR."
  url="https://milanjovanovic.tech/blog/cqrs-pattern-with-mediatr/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_060.png"/>

Today I want to show you how to use the **CQRS** pattern to build fast and scalable applications.

The CQRS pattern separates the writes and reads in the application.

This separation can be logical or physical and has many benefits:

- Complexity management
- Improved performance
- Scalability
- Flexibility
- Security

I'm also going to show you how to implement CQRS in your application using MediatR.

But first, we have to understand what CQRS is.

---

## What Exactly is CQRS?

[<FontIcon icon="fa-brands fa-microsoft"/>CQRS](https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs) stands for **Command Query Responsibility Segregation**. The CQRS pattern uses separate models for reading and updating data. The benefits of using CQRS are complexity management, improved performance, scalability, and security.

The standard approach for working with a database is using the same model to query and update data. This is simple and works great for most CRUD operations. However, in more complex applications, it becomes difficult to maintain. On the write side, you could have complex business logic and validation in the model. On the read side, you may need to perform many different queries.

Also, consider how we create the data model. Applying SQL data modeling best practices will give you a normalized database. This is generally fine, but it's optimized for writing.

Having separate models for commands and queries allows you to scale them independently. The separation could be logical while using the same database. You could split the subsystems for commands and queries into separate services. And you can even have multiple databases optimized for writing or reading data.

---

## How Is It Different From CQS?

[<FontIcon icon="fa-brands fa-wikipedia-w"/>CQS](https://en.wikipedia.org/wiki/Command%E2%80%93query_separation) stands for **Command Query Separation**. It's a term coined by Bertrand Meyer in his book [<FontIcon icon="fa-brands fa-wikipedia-w"/>Object-Oriented Software Construction.](https://en.wikipedia.org/wiki/Object-Oriented_Software_Construction)

The basic premise of CQS is splitting an object's methods into **Commands** and **Queries**.

- **Commands**: Change the state of a system but don't return a value
- **Queries**: Return a value and don't change the state of the system (no side effects)

This doesn't mean a command can never return a value. A typical example is popping a value from a stack. It returns a value and changes the state of the system. But the intent is what matters here.

CQS is a *principle.* You can follow this principle if it makes sense, but be pragmatic.

CQRS is the evolution of CQS. CQRS works on the architectural level. At the same time, CQS works on the method (or class) level.

---

## Many Flavors of CQRS

Here's a high-level overview of a CQRS system using multiple databases. Commands update the write database. Then, you need to synchronize the updates with the read database. This introduces eventual consistency to CQRS systems.

Eventual consistency significantly increases the complexity of your application. You must consider what happens if the synchronization process fails, and have a fault tolerance strategy.

![Diagram of a system using CQRS with two databases.](https://milanjovanovic.tech/blogs/mnw_060/cqrs.png?imwidth=3840)

There are many flavors of this approach:

- SQL database on the write side and NoSQL database (for example, [<FontIcon icon="fas fa-globe"/>RavenDB](https://ravendb.net/)) on the read side
- Event sourcing on the write side and NoSQL database on the read side
- Using Redis or some other distributed cache on the read side

Separating the models for updating and reading data allows you to choose the best database for your requirements.

---

## Logical CQRS Architecture

How do you apply the CQRS pattern to your system? I prefer using [MediatR. (<FontIcon icon="iconfont icon-github"/>`jbogard/MediatR`)](https://github.com/jbogard/MediatR)

MediatR implements the [<FontIcon icon="fas fa-globe"/>mediator pattern](https://refactoring.guru/design-patterns/mediator) to solve a simple problem - decoupling the in-process sending of messages from handling messages.

You can extend MediatR's `IRequest` interface with a custom `ICommand` and `IQuery` abstraction. This allows you to define commands and queries in your system explicitly.

On the write side, I typically use [<FontIcon icon="fa-brands fa-microsoft"/>EF Core](https://learn.microsoft.com/en-us/ef/core/) and a rich domain model to encapsulate business logic. The command flow uses EF to load an entity into memory, execute the domain logic, and save the changes to the database.

On the read side, I want as little indirection as possible. Using [Dapper (<FontIcon icon="iconfont icon-github"/>`DapperLib/Dapper`)](https://github.com/DapperLib/Dapper) with raw SQL queries is an excellent choice. You can also create views in the database and query them. Alternatively, you could use EF Core to execute queries with projections.

![Diagram of an application using CQRS on the architectural level.](https://milanjovanovic.tech/blogs/mnw_060/cqrs_application.png?imwidth=3840)

---

## Implementing CQRS With MediatR

Implementing CQRS with MediatR has two components:

- Defining your command or query class
- Implementing the respective command or query handler

I made an in-depth video explaining this process, and you can [<FontIcon icon="fa-brands fa-youtube"/>watch it here.](https://youtu.be/vdi-p9StmG0)

<VidStack src="youtube/vdi-p9StmG0" />

You use the `ISender` interface to `Send` the command or query. MediatR takes care of routing the command or query to the respective handler.

The request will pass through the *request pipeline*. It's a wrapper around each request, and you can use it to solve cross-cutting concerns with `IPipelineBehavior`. For example, you can implement [validation for commands with FluentValidation.](/explore/articles/milanjovanovic.tech/cqrs-validation-with-mediatr-pipeline-and-fluentvalidation.md)

```cs
[ApiController]
[Route("api/bookings")]
public class BookingsController : ControllerBase
{
    private readonly ISender _sender;

    public BookingsController(ISender sender)
    {
        _sender = sender;
    }

    [HttpPut("{id}/confirm")]
    public async Task<IActionResult> ConfirmBooking(
        Guid id,
        CancellationToken cancellationToken)
    {
        var command = new ConfirmBookingCommand(id);

        var result = await _sender.Send(command, cancellationToken);

        if (result.IsFailure)
        {
            return BadRequest(result.Error);
        }

        return NoContent();
    }
}
```

Here's an example of a command handler with repositories and a rich domain model:

```cs
internal sealed class ConfirmBookingCommandHandler
    : ICommandHandler<ConfirmBookingCommand>
{
    private readonly IDateTimeProvider _dateTimeProvider;
    private readonly IBookingRepository _bookingRepository;
    private readonly IUnitOfWork _unitOfWork;

    public ConfirmBookingCommandHandler(
        IDateTimeProvider dateTimeProvider,
        IBookingRepository bookingRepository,
        IUnitOfWork unitOfWork)
    {
        _dateTimeProvider = dateTimeProvider;
        _bookingRepository = bookingRepository;
        _unitOfWork = unitOfWork;
    }

    public async Task<Result> Handle(
        ConfirmBookingCommand request,
        CancellationToken cancellationToken)
    {
        var booking = await _bookingRepository.GetByIdAsync(
            request.BookingId,
            cancellationToken);

        if (booking is null)
        {
            return Result.Failure(BookingErrors.NotFound);
        }

        var result = booking.Confirm(_dateTimeProvider.UtcNow);

        if (result.IsFailure)
        {
            return result;
        }

        await _unitOfWork.SaveChangesAsync(cancellationToken);

        return Result.Success();
    }
}
```

Here's an example of a query handler that uses Dapper and raw SQL:

```cs
internal sealed class SearchApartmentsQueryHandler
    : IQueryHandler<SearchApartmentsQuery, IReadOnlyList<ApartmentResponse>>
{
    private static readonly int[] ActiveBookingStatuses =
    {
        (int)BookingStatus.Reserved,
        (int)BookingStatus.Confirmed,
        (int)BookingStatus.Completed
    };

    private readonly ISqlConnectionFactory _sqlConnectionFactory;

    public SearchApartmentsQueryHandler(
        ISqlConnectionFactory sqlConnectionFactory)
    {
        _sqlConnectionFactory = sqlConnectionFactory;
    }

    public async Task<Result<IReadOnlyList<ApartmentResponse>>> Handle(
        SearchApartmentsQuery request,
        CancellationToken cancellationToken)
    {
        if (request.StartDate > request.EndDate)
        {
            return new List<ApartmentResponse>();
        }

        using var connection = _sqlConnectionFactory.CreateConnection();

        const string sql = """
            SELECT
                a.id AS Id,
                a.name AS Name,
                a.description AS Description,
                a.price_amount AS Price,
                a.price_currency AS Currency,
                a.address_country AS Country,
                a.address_state AS State,
                a.address_zip_code AS ZipCode,
                a.address_city AS City,
                a.address_street AS Street
            FROM apartments AS a
            WHERE NOT EXISTS
            (
                SELECT 1
                FROM bookings AS b
                WHERE
                    b.apartment_id = a.id AND
                    b.duration_start <= @EndDate AND
                    b.duration_end >= @StartDate AND
                    b.status = ANY(@ActiveBookingStatuses)
            )
            """;

        var apartments = await connection
            .QueryAsync<ApartmentResponse, AddressResponse, ApartmentResponse>(
                sql,
                (apartment, address) =>
                {
                    apartment.Address = address;

                    return apartment;
                },
                new
                {
                    request.StartDate,
                    request.EndDate,
                    ActiveBookingStatuses
                },
                splitOn: "Country");

        return apartments.ToList();
    }
}
```

---

## Closing Thoughts

Separating commands and queries can improve performance and scalability in the long run. You can optimize commands and queries differently based on your requirements.

Commands encapsulate complex business logic and validation. Using EF Core and a rich domain model is an excellent solution.

Queries are all about performance, so you want to use what's fastest. This could be raw SQL queries with Dapper, EF Core projections, or Redis.

If you want the system I use to build scalable applications with CQRS and MediatR, check out [**Pragmatic Clean Architecture.**](/explore/articles/milanjovanovic.tech/pragmatic-clean-architecture/README.md)

Stay awesome!

---

<TagLinks />