---
lang: ko-KR
title: How I Made My EF Core Query 3.42x Faster With Batching
description: Article(s) > How I Made My EF Core Query 3.42x Faster With Batching
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
      content: Article(s) > How I Made My EF Core Query 3.42x Faster With Batching
    - property: og:description
      content: How I Made My EF Core Query 3.42x Faster With Batching
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/how-i-made-my-efcore-query-faster-with-batching.html
prev: /programming/cs/articles/README.md
date: 2024-02-03
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_075.png
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
  name="How I Made My EF Core Query 3.42x Faster With Batching"
  desc="EF Core is a fantastic ORM if you're building .NET applications. Today, I'll show you a simple idea I used to get an almost 4x performance improvement."
  url="https://milanjovanovic.tech/blog/how-i-made-my-efcore-query-faster-with-batching/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_075.png"/>

[<FontIcon icon="fa-brands fa-microsoft"/>EF Core](https://learn.microsoft.com/en-us/ef/core/) is a fantastic ORM if you're building .NET applications.

But it's a tool like any other. And you can end up using it in a suboptimal way.

Today, I'll show you a simple idea I used to get an almost **4x performance improvement**.

I'm not saying you'll see the same result, but understanding the idea will make your queries faster.

---

## Why This Query is Suboptimal

Here's the example I want to use to explain this powerful idea. It's taken from a production app I was working on, but I simplified it for this example.

We're using an `InvoiceService` to get a collection of invoices for a given company. The invoices could come from a third-party API or some other persistence store. We're lacking detailed line item information, so we're querying the database to fill in the missing data.

The highlighted [<FontIcon icon="fa-brands fa-microsoft"/>LINQ query](https://learn.microsoft.com/en-us/ef/core/querying/) below isn't bad by itself. It returns all the line items in one database query (round trip).

But it's missing one important realization that can unlock further performance gains.

Because we're iterating over the invoices, we're **querying the database many times**.

```cs{21-32}
app.MapGet("invoices/{companyId}", (
    long companyId,
    InvoiceService invoiceService,
    AppDbContext dbContext) =>
{
    IEnumerable<Invoice> invoices = invoiceService.GetForCompanyId(
        companyId,
        take: 10);

    var invoiceDtos = new List<InvoiceDto>();
    foreach (var invoice in invoices)
    {
        var invoiceDto = new InvoiceDto
        {
            Id = invoice.Id,
            CompanyId = invoice.CompanyId,
            IssuedDate = invoice.IssuedDate,
            DueDate = invoice.DueDate,
            Number = invoice.Number
        };

        var lineItemDtos = await dbContext
            .LineItems
            .Where(li => invoice.LineItemIds.Contains(li.Id))
            .Select(li => new LineItemDto
            {
                Id = li.Id,
                Name = li.Name,
                Price = li.Price,
                Quantity = li.Quantity
            })
            .ToArrayAsync();

        invoiceDto.LineItems = lineItemDtos;

        invoiceDtos.Add(invoiceDto);
    }

    return invoiceDtos;
});
```

Once you figure this out, the solution comes down to applying a simple idea.

Instead of fetching the line items for each invoice, we can query all the line items ahead of time.

---

## Batching to the Rescue

Here's the same query, but refactored to only query the line items once. This means there's just a single round trip to the database.

There are three components to the final design:

- Querying all the `LineItems` in a single database round-trip
- Creating a `LineItemDto` dictionary for fast lookup

Once we have the dictionary, we can loop through the invoices and assign the line items. Populating a line item becomes a dictionary lookup (cheap) instead of a database query (expensive).

Before deciding if this solution makes sense, you should consider a few more things.

How many records can you load from the database at once?

Each invoice contains ~20 line items on average, and we're only fetching ten invoices. So, we're loading ~200 line items from the database. Most applications can handle this load. But things could be different if you're fetching thousands of rows.

```cs{10-12,26-28,41}
app.MapGet("invoices/{companyId}", (
    long companyId,
    InvoiceService invoiceService,
    AppDbContext dbContext) =>
{
    IEnumerable<Invoice> invoices = invoiceService.GetForCompanyId(
        companyId,
        take: 10);

    long[] lineItemIds = invoices
        .SelectMany(invoice => invoice.LineItemIds)
        .ToArray();

    var lineItemDtos = await dbContext
        .LineItems
        .Where(li => lineItemIds.Contains(li.Id))
        .Select(li => new LineItemDto
        {
            Id = li.Id,
            Name = li.Name,
            Price = li.Price,
            Quantity = li.Quantity
        })
        .ToListAsync();

    Dictionary<long, LineItemDto> lineItemsDictionary =
        lineItemDtos.ToDictionary(keySelector: li => li.Id);

    var invoiceDtos = new List<InvoiceDto>();
    foreach (var invoice in invoices)
    {
        var invoiceDto = new InvoiceDto
        {
            Id = invoice.Id,
            CompanyId = invoice.CompanyId,
            IssuedDate = invoice.IssuedDate,
            DueDate = invoice.DueDate,
            Number = invoice.Number,
            LineItems = invoice
                .LineItemIds
                .Select(li => lineItemsDictionary[li])
                .ToArray()
        };

        invoiceDtos.Add(invoiceDto);
    }

    return invoiceDtos;
})
```

---

## How Much Faster?

It seems plausible that the batch variant would be faster. Right?

We have N queries (one per invoice) in the first version and a single query in the batched version.

Here are the benchmark results I got using [<FontIcon icon="iconfont icon-github"/>`dotnet/BenchmarkDotNet`](https://github.com/dotnet/BenchmarkDotNet):

![](https://milanjovanovic.tech/blogs/mnw_075/benchmark.png?imwidth=3840)

The foreach version takes **1913.3 us** (microseconds) on average.<br/>The batched version takes **558.6 us** on average.

That's **3.42x faster** with the batched version. This is with a local SQL database.

The batched version should be even faster if you're querying a remote database because of the impact of network round-trip time. It quickly adds up when you have N queries (foreach version).

---

## Takeaway

The power of this approach lies in its simplicity and efficiency. By batching database queries, we significantly reduce the number of round trips to the database. This is often one of the biggest performance bottlenecks.

But it's crucial to understand that this approach is not a one-size-fits-all solution.

EF Core offers many features and optimizations, but it's up to the developer to use them effectively.

Finally, always remember to measure and benchmark. The improvements we saw in this case were quantified through benchmarks. Without proper measurement, it's easy to make changes that inadvertently degrade performance.

Thanks for reading, and stay awesome!

---

<TagLinks />