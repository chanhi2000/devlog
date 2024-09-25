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

<!-- TODO: 작성 -->

<!-- 
<a href="https://learn.microsoft.com/en-us/ef/core/">EF Core</a> is a fantastic ORM if you're building .NET applications.

But it's a tool like any other. And you can end up using it in a suboptimal way.

Today, I'll show you a simple idea I used to get an almost **4x performance improvement**.

I'm not saying you'll see the same result, but understanding the idea will make your queries faster.

---

## why-this-query-is-suboptimal"><a href="#why-this-query-is-suboptimal">Why This Query is Suboptimal

Here's the example I want to use to explain this powerful idea.
It's taken from a production app I was working on, but I simplified it for this example.

We're using an `InvoiceService` to get a collection of invoices for a given company.
The invoices could come from a third-party API or some other persistence store.
We're lacking detailed line item information, so we're querying the database to fill in the missing data.

The highlighted <a href="https://learn.microsoft.com/en-us/ef/core/querying/">LINQ query</a> below isn't bad by itself.
It returns all the line items in one database query (round trip).

But it's missing one important realization that can unlock further performance gains.

Because we're iterating over the invoices, we're **querying the database many times**.

```cs
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
<span class="code-line highlight-line">
<span class="code-line highlight-line">        var lineItemDtos = await dbContext
<span class="code-line highlight-line">            .LineItems
<span class="code-line highlight-line">            .Where(li => invoice.LineItemIds.Contains(li.Id))
<span class="code-line highlight-line">            .Select(li => new LineItemDto
<span class="code-line highlight-line">            {
<span class="code-line highlight-line">                Id = li.Id,
<span class="code-line highlight-line">                Name = li.Name,
<span class="code-line highlight-line">                Price = li.Price,
<span class="code-line highlight-line">                Quantity = li.Quantity
<span class="code-line highlight-line">            })
<span class="code-line highlight-line">            .ToArrayAsync();

        invoiceDto.LineItems = lineItemDtos;

        invoiceDtos.Add(invoiceDto);
    }

    return invoiceDtos;
});

```

Once you figure this out, the solution comes down to applying a simple idea.

Instead of fetching the line items for each invoice, we can query all the line items ahead of time.

---

## batching-to-the-rescue"><a href="#batching-to-the-rescue">Batching to the Rescue

Here's the same query, but refactored to only query the line items once.
This means there's just a single round trip to the database.

There are three components to the final design:

- Querying all the `LineItems` in a single database round-trip
<li>Creating a `LineItemDto` dictionary for fast lookup

Once we have the dictionary, we can loop through the invoices and assign the line items.
Populating a line item becomes a dictionary lookup (cheap) instead of a database query (expensive).

Before deciding if this solution makes sense, you should consider a few more things.

How many records can you load from the database at once?

Each invoice contains ~20 line items on average, and we're only fetching ten invoices.
So, we're loading ~200 line items from the database.
Most applications can handle this load.
But things could be different if you're fetching thousands of rows.

```cs
app.MapGet("invoices/{companyId}", (
    long companyId,
    InvoiceService invoiceService,
    AppDbContext dbContext) =>
{
    IEnumerable<Invoice> invoices = invoiceService.GetForCompanyId(
        companyId,
        take: 10);

<span class="code-line highlight-line">    long[] lineItemIds = invoices
<span class="code-line highlight-line">        .SelectMany(invoice => invoice.LineItemIds)
<span class="code-line highlight-line">        .ToArray();

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

<span class="code-line highlight-line">    Dictionary<long, LineItemDto> lineItemsDictionary =
<span class="code-line highlight-line">        lineItemDtos.ToDictionary(keySelector: li => li.Id);
<span class="code-line highlight-line">
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
<span class="code-line highlight-line">                .Select(li => lineItemsDictionary[li])
                .ToArray()
        };

        invoiceDtos.Add(invoiceDto);
    }

    return invoiceDtos;
})

```

---

## how-much-faster"><a href="#how-much-faster">How Much Faster?

It seems plausible that the batch variant would be faster. Right?

We have N queries (one per invoice) in the first version and a single query in the batched version.

Here are the benchmark results I got using <a href="https://github.com/dotnet/BenchmarkDotNet">BenchmarkDotNet</a>:

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271613%27%20height=%27286%27/%3e"><img alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="" srcSet="/blogs/mnw_075/benchmark.png?imwidth=1920 1x, /blogs/mnw_075/benchmark.png?imwidth=3840 2x" src="/blogs/mnw_075/benchmark.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>
The foreach version takes **1913.3 us** (microseconds) on average.<br/>
The batched version takes **558.6 us** on average.

That's **3.42x faster** with the batched version. This is with a local SQL database.

The batched version should be even faster if you're querying a remote database because of the impact of network round-trip time.
It quickly adds up when you have N queries (foreach version).

---

## takeaway"><a href="#takeaway">Takeaway

The power of this approach lies in its simplicity and efficiency.
By batching database queries, we significantly reduce the number of round trips to the database.
This is often one of the biggest performance bottlenecks.

But it's crucial to understand that this approach is not a one-size-fits-all solution.

EF Core offers many features and optimizations, but it's up to the developer to use them effectively.

Finally, always remember to measure and benchmark.
The improvements we saw in this case were quantified through benchmarks.
Without proper measurement, it's easy to make changes that inadvertently degrade performance.

Thanks for reading, and stay awesome!

-->

---

<TagLinks />