---
lang: ko-KR
title: How To Easily Create PDF Documents in ASP.NET Core
description: Article(s) > How To Easily Create PDF Documents in ASP.NET Core
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
      content: Article(s) > How To Easily Create PDF Documents in ASP.NET Core
    - property: og:description
      content: How To Easily Create PDF Documents in ASP.NET Core
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/how-to-easily-create-pdf-documents-in-aspnetcore.html
prev: /programming/cs/articles/README.md
date: 2023-11-11
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_063.png
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
  name="How To Easily Create PDF Documents in ASP.NET Core"
  desc="Reporting is essential for business applications like e-commerce, shipping, fintech, etc. One of the most popular document formats for reporting purposes is PDF. Today I want to show you a few interesting ways to generate PDF files in .NET."
  url="https://milanjovanovic.tech/blog/how-to-easily-create-pdf-documents-in-aspnetcore/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_063.png"/>

Reporting is essential for business applications like e-commerce, shipping, fintech, etc.

One of the most popular document formats for reporting purposes is [<FontIcon icon="fa-brands fa-wikipedia-w"/>PDF](https://en.wikipedia.org/wiki/PDF).

PDF stands for Portable Document Format. It's a file format to present documents (including text formatting and images) independently of application software, hardware, and operating systems.

Some common problems .NET developers will face when working with PDF files:

- Creating dynamic PDF documents
- Designing a consistent page layout
- Customizing fonts on printed documents

Today I want to show you a few interesting ways to generate PDF files in .NET.

---

## Creating PDF Files With QuestPDF

[<FontIcon icon="fas fa-globe"/>QuestPDF](https://questpdf.com/) is an open-source .NET library for generating PDF documents. It exposes a fluent API you can use to compose together many simple elements to create complex documents. Unlike other libraries, it does not rely on HTML-to-PDF conversion.

Let's install the QuestPDF NuGet package:

```pwsh
Install-Package QuestPDF
```

Here's how you can generate a simplified invoice with QuestPDF:

```cs
using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;

Document.Create(container =>
{
    container.Page(page =>
    {
        page.Margin(50);
        page.Size(PageSizes.A4);
        page.PageColor(Colors.White);
        page.DefaultTextStyle(x => x.FontSize(16));

        page.Header()
            .AlignCenter()
            .Text("Invoice #: 2023-77")
            .SemiBold().FontSize(24).FontColor(Colors.Grey.Darken4);

        page.Content()
            .Table(table =>
            {
                table.ColumnsDefinition(columns =>
                {
                    columns.ConstantColumn(20);
                    columns.RelativeColumn();
                    columns.RelativeColumn();
                });

                table.Header(header =>
                {
                    header.Cell().Text("#");
                    header.Cell().Text("Product");
                    header.Cell().AlignRight().Text("Price");
                });

                foreach (var lineItem in lineItems)
                {
                    table.Cell().Text(lineItem.Index.ToString());
                    table.Cell().Text(lineItem.Name);
                    table.Cell().Text($"${lineItem.Price}");
                }
            });
    });
})
.GeneratePdf("invoice.pdf");;
```

What I like about QuestPDF:

- Fluent API
- Easy to use
- Good [<FontIcon icon="fas fa-globe"/>documentation](https://questpdf.com/introduction.html)

What I don't like about QuestPDF:

- Having to write a lot of code to create documents
- Limited scope of features
- No HTML-to-PDF support

::: info Licensing

QuestPDF is free for small companies and development use. There's also a commercial license for larger companies. You can check out the licensing details [<FontIcon icon="fas fa-globe"/>here](https://questpdf.com/license/).

:::

---

## HTML to PDF Conversion With IronPDF

The more common approach for generating PDF files is using an HTML template.

My favorite library that supports this is [<FontIcon icon="fas fa-globe"/>IronPDF](https://ironpdf.com/).

IronPDF is a C# PDF library that allows for fast and efficient manipulation of PDF files. It also has many valuable features, like [<FontIcon icon="fas fa-globe"/>exporting to PDF/A format](https://ironpdf.com/how-to/pdfa/) and [<FontIcon icon="fas fa-globe"/>digitally signing PDF documents](https://ironpdf.com/how-to/signing/).

But what's the idea behind using an HTML template?

First of all, you have more control over formatting the document. You can use CSS to style the HTML markup, which will be applied when exporting to a PDF document.

An interesting implementation approach is using [<FontIcon icon="fa-brands fa-microsoft"/>ASP.NET Core MVC views](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/overview?view=aspnetcore-7.0) and the [<FontIcon icon="fa-brands fa-microsoft"/>Razor syntax](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/razor?view=aspnetcore-7.0). You can pass an object to the view at runtime to render dynamic HTML content.

I've used this approach with MVC views on a few projects with excellent results.

Let's start by installing the IronPDF NuGet package:

```pwsh
Install-Package IronPdf
```

I'm using a strongly typed Razor view to define my markup. The `InoviceViewModel` class is the model, and it's used to create dynamic content.

```tsx
@model ViewModels.InoviceViewModel

<div>Invoice number: @Model.InvoiceNumber</div>
<div>Invoice date: @Model.InvoiceDate</div>
<br/>
<span>Line items:
<ul>
    @foreach(var lineItem in Model.LineItems)
    {
        - @lineItem.Name | @lineItem.Price
    }
</ul>
```

Now, you need to use the IronPDF `ChromePdfRenderer` to convert the HTML to a PDF document.

```cs
var html = ConvertRazorViewToHtml(invoice);

var renderer = new ChromePdfRenderer();

var pdf = renderer.RenderHtmlAsPdf(html);

pdf.SaveAs($"invoice-{invoice.InvoiceNumber}.pdf");
```

It really is that simple.

::: info Licensing

IronPDF is free for development use and has multiple pricing tiers for commercial use that you can check out [<FontIcon icon="fas fa-globe"/>here](https://ironpdf.com/licensing/).

:::

---

## Merging Multiple PDF Files

Another common requirement I've seen is merging multiple PDF files. For example, you could implement a feature to merge the monthly receipts for the accounting department.

You can use the `PdfDocument.Merge` method to implement this. It accepts a `PdfDocument` collection as the argument. You'll first have to load the PDF documents into memory before merging them.

Here's an example:

```cs
var pdfs = new List<PdfDocument>();

pdfs.Add(PdfDocument.FromFile("google-invoice.pdf"));
pdfs.Add(PdfDocument.FromFile("google-ads-invoice.pdf"));
pdfs.Add(PdfDocument.FromFile("converkit-invoice.pdf"));

PdfDocument mergedPdfDocument = PdfDocument.Merge(pdfs);

mergedPdfDocument.SaveAs("merged-invoices.pdf");
```

---

## Exporting PDF Files From an API

It's pretty straightforward to return a PDF file from an API endpoint in ASP.NET Core.

Minimal APIs have the `Results.File` method accepting either a file path, stream, or byte array. You also need to specify the content type and an optional file name. The [<FontIcon icon="fa-brands fa-firefox"/>MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) for PDF files is `application/pdf`.

Here's how you can return a PDF file from a byte array:

```cs
app.MapGet("newsletter/download", () =>
{
    var renderer = new ChromePdfRenderer();

    var pdf = renderer.RenderHtmlAsPdf("<h1>The .NET Weekly</h1>");

    return Results.File(pdf.BinaryData, "application/pdf", "newsletter.pdf");
});
```

---

## Takeaway

Choosing which PDF library you will use in .NET is an important consideration to make. And while pricing is a significant factor, the features you want to use will also dictate your choice.

QuestPDF is an excellent choice if you're looking for a (mostly) free option with rich features. The library is constantly improved, and new features are being added. However, it doesn't support HTML-to-PDF conversion and modifying existing documents.

IronPDF is the library I've used most often on commercial projects. It has fantastic features for working with PDF files, with many customization options. The HTML-to-PDF conversion works like a charm.

The hardest part is picking the right tool for the job.

So I hope this is helpful.

See you next week.

---

<TagLinks />