---
lang: ko-KR
title: "Multi-Tenant Applications With EF Core"
description: "Article(s) > Multi-Tenant Applications With EF Core"
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
      content: "Article(s) > Multi-Tenant Applications With EF Core"
    - property: og:description
      content: "Multi-Tenant Applications With EF Core"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/multi-tenant-applications-with-ef-core.html
prev: /programming/cs/articles/README.md
date: 2023-05-20
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_038.png
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
  name="Multi-Tenant Applications With EF Core"
  desc="Most software applications today are built around the concept of multi-tenancy. One application serves multiple customers, while keeping their data isolated. You can approach multi-tenancy in two ways: - Single database & logical isolation of tenants - Multiple databases & physical isolation of tenants Which option you decide to use will depend mostly on your requirements. Some industries like healthcare require a high degree of data isolation, and using a database per tenant is a must. So how are we going to implement multi-tenancy support with EF Core? We can use Query Filters to apply a tenant filter to all database queries."
  url="https://milanjovanovic.tech/blog/multi-tenant-applications-with-ef-core/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_038.png"/>

Most software applications today are built around the concept of **multi-tenancy**.

One application serves multiple customers, while keeping their data **isolated**.

You can approach **multi-tenancy** in two ways:

- **Single database** and **logical isolation** of tenants
- **Multiple databases** and **physical isolation** of tenants

Which option you decide to use will depend mostly on your requirements. Some industries like healthcare require a high degree of **data isolation**, and using a **database per tenant** is a must.

So how are we going to **implement multi-tenancy** support with **EF Core**?

We can use **Query Filters** to apply a **tenant filter** to all database queries.

Implement it once and you can almost forget about it.

Let's see what are some of the problems we need to solve.

---

## How To Use EF Core Query Filters

If you want an in-depth dive into **Query filters**, take a look at the newsletter issue where I talked about [**using query filters with EF Core.**](/explore/articles/milanjovanovic.tech/how-to-use-global-query-filters-in-ef-core.md)

Here's a quick refresher on **Query filters**:

- Configure the **query filter** by calling `HasQueryFilter` for your entity
- **EF** will apply it to all queries for that entity
- You can turn it off with `IgnoreQueryFilters`
- Only **one** query filter **per entity** is allowed

And here's a simple example:

```cs
modelBuilder
   .Entity<Order>()
   .HasQueryFilter(order => !order.IsDeleted);
```

All queries to the `Order` table will include an `IsDeleted = FALSE` condition.

---

## Single Database Multi-Tenancy With EF Core

You will need two things to **implement multi-tenancy** on a **single database**:

- A way to know **who** the **current tenant** is
- A way to **filter** the **data** for that **tenant** only

The typical approach for **multi-tenancy** on a **single database** is having a `TenantId` column in your tables.
And then filtering on that column when querying the database.

You can use the **Query filters** feature in **EF Core** to apply a **global filter** for some entity.

Inside of the `OnModelCreating` method we configure the query filter on the `Order` entity:

```cs
public class OrdersDbContext : DbContext
{
    private readonly string _tenantId;

    public OrdersDbContext(
        DbContextOptions<OrdersDbContext> options,
        TenantProvider tenantProvider)
        : base(options)
    {
        _tenantId = tenantProvider.TenantId;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .Entity<Order>
            .HasQueryFilter(o => o.TenantId == _tenantId);
    }
}
```

We're using the `TenantProvider` class to get the **current tenant** value.

Here's what the `TenantProvider` implementation looks like:

```cs
public sealed class TenantProvider
{
    private const string TenantIdHeaderName = "X-TenantId";

    private readonly IHttpContextAccessor _httpContextAccessor;

    public TenantProvider(IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
    }

    public string TenantId => _httpContextAccessor
        .HttpContext
        .Request
        .Headers[TenantIdHeaderName];
}
```

The `TenantId` is coming from the HTTP request header in this example.

A few other options to get the `TenantId` are:

- Query string - `api/orders?tenantId=example-tenant-id`
- JWT Claim
- API Key

If you want a more **secure implementation** you should go with **JWT Claims** or **API Keys** to provide the `TenantId` value.

---

## Separate Databases Multi-Tenancy With EF Core

What if we want to **isolate** each tenant to a **separate database**?

Here are the changes we need to make:

- Applying different **connection string per tenant**
- Resolving the connection string for each tenant *somehow*

You can't use **Query filters** here, since we are working with different databases.

So you will need to store the **tenant information** and **connection strings** somewhere.

A simple example would be store them in the **application settings**:

```json
"Tenants": {
  { "Id": "tenant-1", "ConnectionString": "Host=tenant1.db;Database=tenant1" },
  { "Id": "tenant-2", "ConnectionString": "Host=tenant2.db;Database=tenant2" }
}
```

You can then register an `IOptions` instance with a list of `Tenant` objects.

And we need to slightly modify the `TenantProvider` class to return a **connection string** for the current tenant:

```cs
public sealed class TenantProvider
{
    private const string TenantIdHeaderName = "X-TenantId";

    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly TenantSettings _tenantSettings;

    public TenantProvider(
        IHttpContextAccessor httpContextAccessor,
        IOptions<TenantSettings> tenantsOptions)
    {
        _httpContextAccessor = httpContextAccessor;
        _tenants = tenantsOptions.Value;
    }

    public string TenantId => _httpContextAccessor
        .HttpContext
        .Request
        .Headers[TenantIdHeaderName];

    public string GetConnectionString()
    {
        return _tenantSettings.Tenants.Single(t => t.Id == TenantId);
    }
}
```

And the last part is registering your `DbContext` to **dynamically resolve** the **connection string** for the current **tenant**.

```cs
builder.Services.AddDbContext<OrdersDbContext>((sp, o) =>
{
    var tenantProvider = sp.GetRequiredService<TenantProvider>();

    var connectionString = tenantProvider.GetConnectionString();

    o.UseSqlServer(connectionString);
});
```

On every request, we create a new `OrdersDbContext` and connect to the appropriate database for that tenant.

You should definitely consider storing the tenant **connection strings** in a **secure** place like **Azure Key Vault**.

---

## Closing Thoughts

I hope you now have a better understanding of how to build a **multi-tenant system** with **EF Core**.

I showed you the bare bones implementation, which you can improve to make it more robust and secure.

Building **multi-tenant systems** isn't easy, but when you understand the basic principles it shouldn't be too difficult either.

That's all for this week.

See you next Saturday.

---

<TagLinks />