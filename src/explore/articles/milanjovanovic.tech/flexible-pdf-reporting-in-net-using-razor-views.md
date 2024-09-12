---
lang: ko-KR
title: "Flexible PDF Reporting in .NET Using Razor Views"
description: "Article(s) > Flexible PDF Reporting in .NET Using Razor Views"
icon: iconfont icon-blazor
category: 
  - C#
  - Blazor
  - Article(s)
tag: 
  - blog
  - milanjovanovic.tech
  - cs
  - c#
  - csharp
  - blazor
  - dotnet
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Flexible PDF Reporting in .NET Using Razor Views"
    - property: og:description
      content: "Flexible PDF Reporting in .NET Using Razor Views"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/flexible-pdf-reporting-in-net-using-razor-views.html
prev: /programming/cs-blazor/articles/README.md
date: 2024-06-29
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_096.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Blazor > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/cs-blazor/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Flexible PDF Reporting in .NET Using Razor Views"
  desc="In this article, we'll explore the power of using Razor views for flexible PDF reporting in .NET. We'll see how to create report templates with Razor views, convert them to HTML, and then transform that HTML into beautifully formatted PDF documents."
  url="https://milanjovanovic.tech/blog/flexible-pdf-reporting-in-net-using-razor-views/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_096.png"/>

<!-- TODO: 작성 -->

<!-- 
I'll never forget when I was working on a project that required generating weekly sales reports for a client.
The initial solution involved a clunky process of exporting data, manipulating it in spreadsheets, and manually creating PDFs.
It was tedious, error-prone, and it sucked up way too much of my time.
I knew there had to be a better way.

That's when I discovered the power of combining Razor views with HTML-to-PDF conversion.
You have more control over formatting the document.
You can use modern CSS to style the HTML markup, which will be applied when exporting to a PDF document.
It's also simple to implement in ASP.NET Core.

Here's what we'll cover:

- Understanding Razor views
<li>Converting Razor views to HTML
<li>HTML to PDF conversion in .NET
<li>Putting it all together with Minimal APIs

Let's dive in!

---

## razor-views"><a href="#razor-views">Razor Views

Razor <a href="https://learn.microsoft.com/en-us/aspnet/core/mvc/views">views</a>
are an HTML template with embedded <a href="https://learn.microsoft.com/en-us/aspnet/core/mvc/views/razor">Razor</a> markup.
Razor allows you to write and execute .NET code inside a web page.
Views have a special `.cshtml` file extension.
They're commonly used in <a href="https://learn.microsoft.com/en-us/aspnet/core/mvc/overview">ASP.NET Core MVC</a>,
<a href="https://learn.microsoft.com/en-us/aspnet/core/razor-pages">Razor Pages</a>,
and <a href="https://learn.microsoft.com/en-us/aspnet/core/blazor">Blazor</a>.

However, you can define Razor views in a class library or ASP.NET Core Web API project.

You can use the `Model` object to pass in data to a Razor view.
Inside the `.cshtml` file, you'll specify the model type with the `@model` keyword.
In the example below, I'm specifying that the `Invoice` class is the model for this view.
You can access the model instance with the `Model` property in the view.

This is the `InvoiceReport.cshtml` view we'll use to generate a PDF invoice.

You can write CSS in the Razor view inline or reference a stylesheet.
I'm using the <a href="https://tailwindcss.com/">Tailwind CSS</a> utility framework, which uses inline CSS.
I usually delegate this to a front-end engineer on my team so they can stylize the report as needed.

```cs
@using System.Globalization
@using HtmlToPdf.Contracts

<span class="code-line highlight-line">@model HtmlToPdf.Contracts.Invoice

@{
    IFormatProvider cultureInfo = CultureInfo.CreateSpecificCulture("en-US");
    var subtotal = Model.LineItems.Sum(li => li.Price * li.Quantity).ToString("C", cultureInfo);
    var total = Model.LineItems.Sum(li => li.Price * li.Quantity).ToString("C", cultureInfo);
}

<script src="https://cdn.tailwindcss.com"></script>

<div class="min-w-7xl flex flex-col bg-gray-200 space-y-4 p-10">
    <h1 class="text-2xl font-semibold">Invoice #@Model.Number</h1>

    Issued date: @Model.IssuedDate.ToString("dd/MM/yyyy")

    Due date: @Model.DueDate.ToString("dd/MM/yyyy")


    <div class="flex justify-between space-x-4">
        <div class="bg-gray-100 rounded-lg flex flex-col space-y-1 p-4 w-1/2">
            <p class="font-medium">Seller:

            @Model.SellerAddress.CompanyName

            @Model.SellerAddress.Street

            @Model.SellerAddress.City

            @Model.SellerAddress.State

            @Model.SellerAddress.Email

        </div>
        <div class="bg-gray-100 rounded-lg flex flex-col space-y-1 p-4 w-1/2">
            <p class="font-medium">Bill to:

            @Model.CustomerAddress.CompanyName

            @Model.CustomerAddress.Street

            @Model.CustomerAddress.City

            @Model.CustomerAddress.State

            @Model.CustomerAddress.Email

        </div>
    </div>

    <div class="flex flex-col bg-white rounded-lg p-4 space-y-2">
        <h2 class="text-xl font-medium">Items:</h2>
        <div class="">
            <div class="flex space-x-4 font-medium">
                <p class="w-10">#

                <p class="w-52">Name

                <p class="w-20">Price

                <p class="w-20">Quantity

            </div>

            @foreach ((int index, LineItem item) in Model.LineItems.Select((li, i) => (i + 1, li)))
            {
                <div class="flex space-x-4">
                    <p class="w-10">@index

                    <p class="w-52">@item.Name

                    <p class="w-20">@item.Price.ToString("C", cultureInfo)

                    <p class="w-20">@item.Quantity.ToString("N2")

                </div>
            }
        </div>
    </div>

    <div class="flex flex-col items-end bg-gray-50 space-y-2 p-4 rounded-lg">
        Subtotal: @subtotal

        Total: <span class="font-semibold">@total

    </div>
</div>

```

---

## converting-razor-views-to-html"><a href="#converting-razor-views-to-html">Converting Razor Views to HTML

The next thing we'll need is a way to convert the Razor view into HTML.
We can do this with the <a href="https://github.com/soundaranbu/Razor.Templating.Core">`Razor.Templating.Core`</a> library.
It provides a simple API to render a `.cshtml` file into a `string`.

```pwsh
Install-Package Razor.Templating.Core

```

You can use the `RazorTemplateEngine` static class to call the `RenderAsync` method.
It accepts the path to the Razor view and the model instance that will be passed to the view.

Here's what that will look like:

```cs
Invoice invoice = invoiceFactory.Create();

string html = await RazorTemplateEngine.RenderAsync(
    "Views/InvoiceReport.cshtml",
    invoice);

```

Alternatively, you can use the `IRazorTemplateEngine` instead of the static class.
In that case, you must call `AddRazorTemplating` to register the required services with DI.
This is also required if you want to use dependency injection inside the Razor views with `@inject`.
It's recommended that you call `AddRazorTemplating` after registering all dependencies.

```cs
services.AddRazorTemplating();

```

---

## html-to-pdf-conversion"><a href="#html-to-pdf-conversion">HTML to PDF conversion

Now that we've converted our Razor view into HTML, we can use it to generate a PDF report.
Many libraries offer this functionality.
The library I've used most often is <a href="https://ironpdf.com/">IronPDF</a>.
It's a paid library (and well worth it), but I know developers also want free options, so I'll list some alternatives at the end.

We can use IronPDF's `ChromePdfRenderer`, which uses an embedded Chrome browser.
The renderer exposes the `RenderHtmlAsPdf` method, which generates a `PdfDocument`.
Once you have the document, you can store it on the file system or export it as binary data.

```cs
var renderer = new ChromePdfRenderer();

using var pdfDocument = renderer.RenderHtmlAsPdf(html);

pdfDocument.SaveAs($"invoice-{invoice.Number}.pdf");

```

If you're looking for free options, check out <a href="https://github.com/hardkoded/puppeteer-sharp">Puppeteer Sharp</a>.
It's a .NET port of the <a href="https://github.com/puppeteer/puppeteer">Puppeteer</a> library, which allows you to run a headless Chrome browser.

Another (conditionally) free option to consider is <a href="https://www.nuget.org/packages/NReco.PdfGenerator/">NReco.PdfGenerator</a>.
However, it's only free for single-server deployments.

---

## putting-it-all-together"><a href="#putting-it-all-together">Putting It All Together

Let's use everything we discussed to create a Minimal API endpoint to generate an invoice PDF report and return it as a file response.
Here's the code snippet:

```cs
app.MapGet("invoice-report", async (InvoiceFactory invoiceFactory) =>
{
    Invoice invoice = invoiceFactory.Create();

    var html = await RazorTemplateEngine.RenderAsync(
        "Views/InvoiceReport.cshtml",
        invoice);

    var renderer = new ChromePdfRenderer();

    using var pdfDocument = renderer.RenderHtmlAsPdf(html);

    return Results.File(
        pdfDocument.BinaryData,
        "application/pdf",
        $"invoice-{invoice.Number}.pdf");
});

```

This is what the generated PDF report looks like:

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271273%27%20height=%271937%27/%3e"><img alt="Invoice report." src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="Invoice report." srcSet="/blogs/mnw_096/invoice.png?imwidth=1920 1x, /blogs/mnw_096/invoice.png?imwidth=3840 2x" src="/blogs/mnw_096/invoice.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>
You can grab the source code for this sample <a href="https://github.com/m-jovanovic/razor-view-html-to-pdf">here</a>.
Feel free to try out a different library for HTML to PDF conversion.

---

## summary"><a href="#summary">Summary

In this article, we've explored the power of using Razor views for flexible PDF reporting in .NET.
We've seen how to create report templates with Razor views, convert them to HTML, and then transform that HTML into beautifully formatted PDF documents.

Whether you need to generate invoices, sales reports, or any other kind of structured document, this approach offers a simple and customizable solution.

Here's what you can explore next:

- <a href="https://youtu.be/XYdcdVWsWos">PDF Reporting in .NET Using IronPDF and Razor Views</a>
<li><a href="how-to-easily-create-pdf-documents-in-aspnetcore">Creating PDF Reports With QuestPDF</a>

That's all for this week. Stay awesome!

-->

---

<TagLinks />