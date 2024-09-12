---
lang: ko-KR
title: "Solving Race Conditions With EF Core Optimistic Locking"
description: "Article(s) > Solving Race Conditions With EF Core Optimistic Locking"
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
      content: "Article(s) > Solving Race Conditions With EF Core Optimistic Locking"
    - property: og:description
      content: "Solving Race Conditions With EF Core Optimistic Locking"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/testcontainers-integration-testing-using-docker-in-dotnet.html
prev: /programming/cs/articles/README.md
date: 2023-09-02
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_053.png
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
  name="Solving Race Conditions With EF Core Optimistic Locking"
  desc="Modern software applications rarely work in isolation. On the contrary, a typical application will talk to several external systems like databases, messaging systems, cache providers, and many 3rd party services. And it's up to you to ensure everything functions correctly. Hopefully, I don't have to convince you about the value of writing tests. You should be writing tests. Period. However, I do want to discuss the value of integration testing. Unit tests are helpful to test business logic in isolation, without any external services. They are easy to write and provide almost instant feedback. But you can't be fully confident in your application without integration tests."
  url="https://milanjovanovic.tech/blog/testcontainers-integration-testing-using-docker-in-dotnet/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_053.png"/>

<!-- TODO: 작성 -->

<!-- 
Modern software applications rarely work in isolation. On the contrary, a typical application will talk to several external systems like databases, messaging systems, cache providers, and many 3rd party services. And it's up to you to ensure everything functions correctly.

Hopefully, I don't have to convince you about the value of writing tests.

You should be writing tests. Period.

However, I do want to discuss the *value* of **integration testing**.

**Unit tests** are helpful to test business logic in isolation, without any external services. They are easy to write and provide almost instant feedback.

But you can't be fully confident in your application without **integration tests**.

So, in this week's newsletter, I'll show you how to use **Docker** for integration testing.

Here's what we will use to write **integration tests**:

- **Testcontainers**
- Docker
- <a href="creating-data-driven-tests-with-xunit">**xUnit**</a>

Let's dive in!

---

## What is Testcontainers?

<a href="https://dotnet.testcontainers.org/">Testcontainers</a> is a library for writing tests with throwaway Docker containers.

Why should you use it?

Integration testing is considered "difficult" because you have to maintain testing infrastructure. Before running tests, you need to make sure the database is up and running. You also have to seed any data required for the tests. If you have tests running in parallel on the same database, they could interfere with each other.

A possible solution could be using in-memory variations of the required services. But this isn't much different from using mocks. In-memory services might not have all the features of the production service.

Testcontainers solves this by using Docker to spin up real services for integration testing.

Here's an example of creating a **SQL Server** container:

```cs
MsSqlContainer dbContainer = new MsSqlBuilder()
    .WithImage("mcr.microsoft.com/mssql/server:2022-latest")
    .WithPassword("Strong_password_123!")
    .Build();
```

You can then use the `MsSqlContainer` instance to get a connection string for the database running inside the container.

Do you see how this is valuable for writing integration tests?

No more need for mocks or fake in-memory databases. Instead, you can use the real deal.

I won't do a deep dive into this library here, so refer to the documentation for more information.

---

## Implementing a Custom WebApplicationFactory

**ASP.NET Core** provides an in-memory test server that we can use to spin up an application instance for running tests. The `Microsoft.AspNetCore.Mvc.Testing` package provides the `WebApplicationFactory` class that we will use as the base for our implementation.

`WebApplicationFactory<TEntryPoint>` is used to create a `TestServer` for the integration tests.

The custom `IntegrationTestWebAppFactory` will do a few things:

- Create and configure a `MsSqlContainer` instance
- Call `ConfigureTestServices` to set up EF Core with the container database
- Start and stop the container instance with `IAsyncLifetime`

`MsSqlContainer` has a `GetConnectionString` method to grab the connection string for the current container. Note that this can change between tests, as each test class will create a separate container instance. Test cases inside the same test class will use the same container instance. So keep that in mind if you need to do a cleanup between tests.

Another thing to keep in mind is **database migrations**. You will have to run them manually before every test to create the required database structure.

Starting the container instance is done asynchronously using `IAsyncLifetime`. The container is started inside `StartAsync` before any of the tests run. And it's stopped inside `StopAsync`.

Here's the complete code for `IntegrationTestWebAppFactory`:

```cs
public class IntegrationTestWebAppFactory
    : WebApplicationFactory<Program>,
      IAsyncLifetime
{
    private readonly MsSqlContainer _dbContainer = new MsSqlBuilder()
        .WithImage("mcr.microsoft.com/mssql/server:2022-latest")
        .WithPassword("Strong_password_123!")
        .Build();

    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.ConfigureTestServices(services =>
        {
            var descriptorType =
                typeof(DbContextOptions<ApplicationDbContext>);

            var descriptor = services
                .SingleOrDefault(s => s.ServiceType == descriptorType);

            if (descriptor is not null)
            {
                services.Remove(descriptor);
            }

            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(_dbContainer.GetConnectionString()));
        });
    }

    public Task InitializeAsync()
    {
        return _dbContainer.StartAsync();
    }

    public new Task DisposeAsync()
    {
        return _dbContainer.StopAsync();
    }
}
```

---

## Creating The Base Test Class

The base test class will implement a class fixture interface `IClassFixture`. It indicates the class contains tests and provides shared object instances across the test cases inside. This is a good place to instantiate any services that are required for most tests.

For example, I'm creating an `IServiceScope` for resolving scoped services inside the tests.

- `ISender` for sending commands and queries
- `ApplicationDbContext` for database setup or verifying results

```cs
public abstract class BaseIntegrationTest
    : IClassFixture<IntegrationTestWebAppFactory>,
      IDisposable
{
    private readonly IServiceScope _scope;
    protected readonly ISender Sender;
    protected readonly ApplicationDbContext DbContext;

    protected BaseIntegrationTest(IntegrationTestWebAppFactory factory)
    {
        _scope = factory.Services.CreateScope();

        Sender = _scope.ServiceProvider.GetRequiredService<ISender>();

        DbContext = _scope.ServiceProvider
            .GetRequiredService<ApplicationDbContext>();
    }

    public void Dispose()
    {
        _scope?.Dispose();
        DbContext?.Dispose();
    }
}
```

With all the infrastructure in place, we're finally ready to write the tests.

---

## Putting It All Together - Writing Integration Tests

Here's a `ProductTests` class with an integration test inside.

I use the *Arrange-Act-Assert* pattern to structure tests:

- *Arrange* - create the `CreateProduct.Command` instance
- *Act* - send the command using `ISender` and store the result
- *Assert* - use the result from the *Act* step to verify the database state

The value of writing integration tests like this is that you can use the complete **MediatR** request pipeline. If you have any `IPipelineBehavior` wrapping the request, it will also be executed.

The same applies if you write your business logic inside service classes. Instead of resolving the `ISender`, you would resolve the specific services you want to test.

Most importantly, this test uses a real database instance running inside a **Docker container**.

```cs
public class ProductTests : BaseIntegrationTest
{
    public ProductTests(IntegrationTestWebAppFactory factory)
        : base(factory)
    {
    }

    [Fact]
    public async Task Create_ShouldCreateProduct()
    {
        // Arrange
        var command = new CreateProduct.Command
        {
            Name = "AMD Ryzen 7 7700X",
            Category = "CPU",
            Price = 223.99m
        };

        // Act
        var productId = await Sender.Send(command);

        // Assert
        var product = DbContext
            .Products
            .FirstOrDefault(p => p.Id == productId);

        Assert.NotNull(product);
    }
}
```

---

## Running Integration Tests In CI/CD Pipelines

You can also run integration tests with **Testcontainers** inside **CI/CD pipelines**. The only requirement is that it supports Docker.

**GitHub Actions** does support Docker. If you are hosting your project there, integration tests will work out of the box.

You can learn more about <a href="how-to-build-ci-cd-pipeline-with-github-actions-and-dotnet">**building a CI/CD pipeline with GitHub Actions here.**</a>

And if you want a plug-in solution, here's a GitHub Actions workflow you can use:

```yaml
name: Run Tests 🚀

on:
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  run-tests:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup .NET
        uses: actions/setup-dotnet@v3
        with:
          dotnet-version: '7.0.x'

      - name: Restore
        run: dotnet restore ./Products.Api.sln

      - name: Build
        run: dotnet build ./Products.Api.sln --no-restore

      - name: Test
        run: dotnet test ./Products.Api.sln --no-build
```

---

## Takeaway

**Testcontainers** is an excellent solution for writing **integration tests** with Docker. You can spin up and configure any **Docker** image and use it from your application. This is far better than using mocks or in-memory variations because they lack many features.

If you have a CI/CD pipeline that supports Docker, Testcontainers will work out of the box.

Only a few integration tests will drastically improve your confidence in the system.

You can grab the <a href="https://github.com/m-jovanovic/testcontainers-sample">**source code for this newsletter**</a> on my GitHub.<br>It's completely free, so what are you waiting for?

And if you prefer video, here's a quick tutorial on <a href="https://youtu.be/tj5ZCtvgXKY">**integration testing with Testcontainers.**</a>

Hope this was valuable.

Stay awesome!

-->

---

<TagLinks />