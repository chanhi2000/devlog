---
lang: ko-KR
title: CQRS Validation with MediatR Pipeline and FluentValidation
description: Article(s) > CQRS Validation with MediatR Pipeline and FluentValidation
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
      content: Article(s) > CQRS Validation with MediatR Pipeline and FluentValidation
    - property: og:description
      content: CQRS Validation with MediatR Pipeline and FluentValidation
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/cqrs-validation-with-mediatr-pipeline-and-fluentvalidation.html
prev: /programming/cs/articles/README.md
date: 2023-09-30
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_057.png
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
  name="CQRS Validation with MediatR Pipeline and FluentValidation"
  desc="Validation is an essential cross-cutting concern that you need to solve in your application. You want to ensure the request is valid before you consider processing it. Another important question you need to answer is how you approach different types of validation. For example, I consider input and business validation differently, and each deserves a specific solution. I want to show you an elegant solution for validation using MediatR and FluentValidation. If you aren't using CQRS with MediatR, don't worry. Everything I explain about validation can easily be adapted to other paradigms."
  url="https://milanjovanovic.tech/blog/cqrs-validation-with-mediatr-pipeline-and-fluentvalidation/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_057.png"/>

<!-- TODO: 작성 -->

<!-- 
Validation is an essential cross-cutting concern that you need to solve in your application.
You want to ensure the request is valid before you consider processing it.

Another important question you need to answer is how you approach different types of validation.
For example, I consider input and business validation differently, and each deserves a specific solution.

I want to show you an elegant solution for validation using <a href="https://github.com/jbogard/MediatR">MediatR</a>
and <a href="https://docs.fluentvalidation.net/en/latest/index.html">FluentValidation.</a>

If you aren't using <a href="https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs">CQRS</a> with MediatR, don't worry.
Everything I explain about validation can easily be adapted to other paradigms.

Here's what I'm going to talk about in this week's newsletter:

- Standard validation approach
<li>Input vs business validation
<li>Separating validation logic
<li>Generic `ValidationBehavior`

Let's dive in.

---

## the-standard-command-validation-approach"><a href="#the-standard-command-validation-approach">The Standard Command Validation Approach

The standard way of implementing validation is right before processing the command.
The validation is tightly coupled to the command handler, which could be problematic.

I find this approach difficult to maintain as the complexity of the validation increases.
Each change to the validation logic also touches the handler, and the handler itself can grow out of control.

It also makes it harder to differentiate between input and *business* validation.

Here's an example `ShipOrderCommandHandler` that checks if the `ShippingAddress.Country` is one of the supported countries:

```cs
internal sealed class ShipOrderCommandHandler
    : IRequestHandler<ShipOrderCommand>
{
    private readonly IOrderRepository _orderRepository;
    private readonly IShippingService _shippingService;
    private readonly ShipmentSettings _shipmentSettings;

    public async Task Handle(
        ShipOrderCommand command,
        CancellationToken cancellationToken)
    {
        if (!_shipmentSettings
                .SupportedCountries
                .Contains(command.ShippingAddress.Country))
        {
            throw new ArgumentException(nameof(ShipOrderCommand.Address));
        }

        var order = _orderRepository.Get(command.OrderId);

        _shippingService.ShipTo(
            command.ShippingAddress,
            command.ShippingMethod);
    }
}

```

What if we can separate command validation and command handling?

---

## input-validation-and-business-validation"><a href="#input-validation-and-business-validation">Input Validation and Business Validation

I mentioned input and *business* validation in the previous section.

Here's how I consider them to be different:

- **Input validation** - We only validate that the command is *processable*.
These are simple validations, such as checking for `null` values, empty strings, etc.
<li>**Business validation** - We validate the command to satisfy the business rules.
This includes checking the system state for required preconditions before processing the command.

Another way to compare them is cheap vs. expensive.
Input validation is usually cheap to execute and can be done in memory.
While business validation involves reading state and is slower.

So, input validation sits at the entry point of the use case before handling the request.
After it completes, we have a *valid* command.
And this is a rule I always follow - an invalid command should never reach the handler.

---

## input-validation-with-fluentvalidation"><a href="#input-validation-with-fluentvalidation">Input Validation With FluentValidation

<a href="https://docs.fluentvalidation.net/en/latest/index.html">FluentValidation</a> is an excellent validation library for .NET,
which uses a fluent interface and lambda expressions for building strongly typed validation rules.

Here's the `ShipOrderCommand` that we want to validate:

```cs
public sealed record ShipOrderCommand : IRequest
{
    public Guid OrderId { get; set; }

    public string ShippingMethod { get; set; }

    public Address ShippingAddress { get; set; }
}

```

To implement a validator with <a href="https://github.com/FluentValidation/FluentValidation">FluentValidation,</a>
you create a class that inherits from the `AbstractValidator<T>` base class.
Then, you can add the validation rules from the constructor using `RuleFor`:

```cs
public sealed class ShipOrderCommandValidator
    : AbstractValidator<ShipOrderCommand>
{
    public ShipOrderCommandValidator(ShipmentSettings settings)
    {
        RuleFor(command => command.OrderId)
            .NotEmpty()
            .WithMessage("The order identifier can't be empty.");

        RuleFor(command => command.ShippingMethod)
            .NotEmpty()
            .WithMessage("The shipping method can't be empty.");

        RuleFor(command => command.ShippingAddress)
            .NotNull()
            .WithMessage("The shipping address can't be empty.");

        RuleFor(command => command.ShippingAddress.Country)
            .Must(country => settings.SupportedCountries.Contains(country))
            .WithMessage("The shipping country isn't supported.");
    }
}

```

The naming convention I like to use is the name of the command and append *Validator*.
You can also enforce this by writing <a href="enforcing-software-architecture-with-architecture-tests">architecture tests.</a>

To automatically register all validators from an assembly, you need to call the `AddValidatorsFromAssembly` method:

```cs
services.AddValidatorsFromAssembly(ApplicationAssembly.Assembly);

```

---

## running-validation-from-the-use-case"><a href="#running-validation-from-the-use-case">Running Validation From the Use Case

To run the `ShipOrderCommandValidator`, you can use the `IValidator<T>` service and inject it from the constructor.

The validator exposes a few methods you can call, like `Validate`, `ValidateAsync`, or `ValidateAndThrow`.

The `Validate` method returns a `ValidationResult` object which contains two properties:

- `IsValid` - a boolean flag saying whether the validation succeeded
<li>`Errors` - a collection of `ValidationFailure` objects containing any validation failures

Alternatively, calling the `ValidateAndThrow` method throws a `ValidationException` if validation fails.

```cs
internal sealed class ShipOrderCommandHandler
    : IRequestHandler<ShipOrderCommand>
{
    private readonly IOrderRepository _orderRepository;
    private readonly IShippingService _shippingService;
    private readonly IValidator<ShipOrderCommand> _validator;

    public async Task Handle(
        ShipOrderCommand command,
        CancellationToken cancellationToken)
    {
        _validator.ValidateAndThrow(command);

        var order = _orderRepository.Get(command.OrderId);

        _shippingService.ShipTo(
            command.ShippingAddress,
            command.ShippingMethod);
    }
}

```

This approach forces you to define an explicit dependency on `IValidator` in every command handler.

What if we can implement this cross-cutting concern in a more generic way?

---

## mediatr-validation-pipeline"><a href="#mediatr-validation-pipeline">MediatR Validation Pipeline

Here's a complete implementation of a `ValidationBehavior` using FluentValidation and MediatR's `IPipelineBehavior`.

The `ValidationBehavior` acts as a middleware for the request pipeline and performs validation.
If the validation fails, it will throw a custom `ValidationException` with a collection of `ValidationError` objects.

I also want to highlight the use of `ValidateAsync`, which allows you to define asynchronous validation rules.
You must call the `ValidateAsync` method if you have asynchronous rules.
Otherwise, the validator will throw an exception.

```cs
public sealed class ValidationBehavior<TRequest, TResponse>
    : IPipelineBehavior<TRequest, TResponse>
    where TRequest : ICommandBase
{
    private readonly IEnumerable<IValidator<TRequest>> _validators;

    public ValidationBehavior(IEnumerable<IValidator<TRequest>> validators)
    {
        _validators = validators;
    }

    public async Task<TResponse> Handle(
        TRequest request,
        RequestHandlerDelegate<TResponse> next,
        CancellationToken cancellationToken)
    {
        var context = new ValidationContext<TRequest>(request);

        var validationFailures = await Task.WhenAll(
            _validators.Select(validator => validator.ValidateAsync(context)));

        var errors = validationFailures
            .Where(validationResult => !validationResult.IsValid)
            .SelectMany(validationResult => validationResult.Errors)
            .Select(validationFailure => new ValidationError(
                validationFailure.PropertyName,
                validationFailure.ErrorMessage))
            .ToList();

        if (errors.Any())
        {
            throw new Exceptions.ValidationException(errors);
        }

        var response = await next();

        return response;
    }
}

```

Don't forget to register the `ValidationBehavior` with MediatR by calling `AddOpenBehavior`:

```cs
services.AddMediatR(config =>
{
    config.RegisterServicesFromAssemblyContaining<ApplicationAssembly>();

    config.AddOpenBehavior(typeof(ValidationBehavior<,>));
});

```

---

## handling-validation-exceptions"><a href="#handling-validation-exceptions">Handling Validation Exceptions

Here's a custom `ValidationExceptionHandlingMiddleware` middleware that only handles the custom `ValidationException`.
It converts the exception to a `ProblemDetails` response and includes any validation errors.

You can easily expand this to be a generic global exception handler.

```cs
public sealed class ValidationExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;

    public ValidationExceptionHandlingMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exceptions.ValidationException exception)
        {
            var problemDetails = new ProblemDetails
            {
                Status = StatusCodes.Status400BadRequest,
                Type = "ValidationFailure",
                Title = "Validation error",
                Detail = "One or more validation errors has occurred"
            };

            if (exception.Errors is not null)
            {
                problemDetails.Extensions["errors"] = exception.Errors;
            }

            context.Response.StatusCode = StatusCodes.Status400BadRequest;

            await context.Response.WriteAsJsonAsync(problemDetails);
        }
    }
}

```

You also need to include the middleware in the request pipeline by calling `UseMiddleware`:

```cs
app.UseMiddleware<ExceptionHandlingMiddleware>();

```

---

## takeaway"><a href="#takeaway">Takeaway

This implementation of `ValidationBehavior` is something I use in real projects, and it works incredibly well.
If I don't want to throw an exception, I can update the `ValidationBehavior` to return a result object instead.

How do you apply this if you're not using MediatR?

I'm using an `IPipelineBehavior`, which allows me to implement a *middleware* wrapping each request.

So, all you need is a way to implement middleware and place your validation inside.
And I like having options, so here are <a href="3-ways-to-create-middleware-in-asp-net-core">three ways to create middleware in ASP.NET Core.</a>

Hope this was valuable.

Stay awesome!

-->

---

<TagLinks />