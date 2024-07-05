---
lang: ko-KR
title: C# Design Patterns – Adapter
description: Article(s) > C# Design Patterns – Adapter
icon: iconfont icon-csharp
category: 
  - CSharp
  - Article(s)
tag: 
  - blog
  - code-maze.com
  - csharp
head:  
  - - meta:
    - property: og:title
      content: Article(s) > C# Design Patterns – Adapter
    - property: og:description
      content: C# Design Patterns – Adapter
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/code-maze.com/adapter.html
prev: /programming/csharp/articles/README.md
date: 2022-01-13
isOriginal: false
cover: /images/content/code-maze.com/adapter/banner.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CSharp > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/csharp/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="C# Design Patterns – Adapter"
  desc="In this article we are going to learn about Adapter design pattern, how to implement it in the project and when shoud we use it."
  url="https://code-maze.com/adapter/"
  logo="/images/content/code-maze.com/favicon.png"
  preview="/images/content/adapter/banner.png"/>

The Adapter design pattern is a structural pattern that allows incompatible interfaces to work together. By doing so, we allow objects from different interfaces to exchange data.

In this article, we are going to learn how to implement the Adapter pattern into our project and when should we use it.

- [Builder Design Pattern and Fluent Builder](/explore/articles/code-maze.com/builder-design-pattern.md)
- [Fluent Builder Interface With Recursive Generics](/explore/articles/code-maze.com/fluent-builder-recursive-generics.md)
- [Faceted Builder](/explore/articles/code-maze.com/faceted-builder.md)
- [Factory Method](/explore/articles/code-maze.com/factory-method.md)
- [Singleton](/explore/articles/code-maze.com/singleton.md)
- Adapter (Current article)
- [Composite](/explore/articles/code-maze.com/composite.md)
- [Decorator](/explore/articles/code-maze.com/decorator-design-pattern.md)
- [Command](/explore/articles/code-maze.com/command.md)
- [Strategy](/explore/articles/code-maze.com/strategy.md)

::: info

The source code is available at the[Adapter Design Pattern – Source Code. (<FontIcon icon="iconfont icon-github"/>`CodeMazeBlog/csharp-design-patterns`)](https://github.com/CodeMazeBlog/csharp-design-patterns/tree/adapter-desing-pattern)

For the main page of this series check out [C# Design Patterns](/explore/articles/code-maze.com/design-patterns-csharp.md).

:::

---

## Initial Project

Let’s imagine that we have functionality in which we convert the list of car manufacturers into JSON format and write it to the screen. But instead of a list, we have been provided with an API that provides us with all the manufacturers in the XML format.

Let’s say we can’t modify the existing API functionality (because of the technical restrictions such as being imported into our project from another solution that we mustn’t modify or as a NuGet package) so we have to find a way around it.

And the proper way to do it is to implement the Adapter pattern to solve this problem.

Let’s start with the creation of the `Manufacturer` model and a simple object to XML converter example:

```csharp
public class Manufacturer
{
    public string Name { get; set; }
    public string City { get; set; }
    public int Year { get; set; }
}
```

```csharp
public static class ManufacturerDataProvider
{
    public List<Manufacturer> GetData() =>
       new List<Manufacturer>
       {
            new Manufacturer { City = "Italy", Name = "Alfa Romeo", Year = 2016 },
            new Manufacturer { City = "UK", Name = "Aston Martin", Year = 2018 },
            new Manufacturer { City = "USA", Name = "Dodge", Year = 2017 },
            new Manufacturer { City = "Japan", Name = "Subaru", Year = 2016 },
            new Manufacturer { City = "Germany", Name = "BMW", Year = 2015 }
       };
}
```

```csharp
public class XmlConverter
{
    public XDocument GetXML()
    {
        var xDocument = new XDocument();
        var xElement = new XElement("Manufacturers");
        var xAttributes = ManufacturerDataProvider.GetData()
            .Select(m => new XElement("Manufacturer", 
                                new XAttribute("City", m.City),
                                new XAttribute("Name", m.Name),
                                new XAttribute("Year", m.Year)));

        xElement.Add(xAttributes);
        xDocument.Add(xElement);

        Console.WriteLine(xDocument);

        return xDocument;
    }
}
```

As we can see, this is a pretty straightforward code. We are collecting manufacturer data, creating a root Manufacturers element and all the Manufacturer sub-elements with its attributes.

After that, we are printing results to the console window to show how the final XML looks like.

This is how the `xDocument` should look like:

![Xml Conver - Adapter Design Pattern](/images/content/code-maze.com/adapter/01-Xml-document.png)

Now let’s implement a `JsonConverter` class:

```csharp
public class JsonConverter
{
    private IEnumerable<Manufacturer> _manufacturers;

    public JsonConverter(IEnumerable<Manufacturer> manufacturers)
    {
        _manufacturers = manufacturers;
    }

    public void ConvertToJson()
    {
        var jsonManufacturers = JsonConvert.SerializeObject(_manufacturers, Formatting.Indented);

        Console.WriteLine("\nPrinting JSON list\n");
        Console.WriteLine(jsonManufacturers);
    }
} 
```

This code is even simpler because we only serialize our manufacturerlist into a JSON format.

Of course, for the serialization to work we need to install the `Newtonsoft.Json` library, so don’t forget to do that.

Excellent, we have our JSON functionality and the provided XML interface. But now, we need to solve a real problem. How to combine those two interfaces to accomplish our task, which is converting manufacturers from XML to JSON format.

---

## Adapter Implementation

As we can see, there is no way to pass an `xDocument` to the `JsonConverter` class and there shouldn’t be one, so we need to create the adapter class which will make these two interfaces work together.

To do this, we are going to start with the `IXmlToJson` interface to define the behavior of our adapter class:

```csharp
public interface IXmlToJson
{
    void ConvertXmlToJson();
}
```

Then, let’s continue with the `XmlToJsonAdapter` class which is going to implement the `IXmlToJson` interface:

```csharp
public class XmlToJsonAdapter : IXmlToJson
{
    private readonly XmlConverter _xmlConverter;

    public XmlToJsonAdapter(XmlConverter xmlConverter)
    {
        _xmlConverter = xmlConverter;
    }

    public void ConvertXmlToJson()
    {
        var manufacturers = _xmlConverter.GetXML()
                .Element("Manufacturers")
                .Elements("Manufacturer")
                .Select(m => new Manufacturer
                             {
                                City = m.Attribute("City").Value,
                                Name = m.Attribute("Name").Value,
                                Year = Convert.ToInt32(m.Attribute("Year").Value)
                             });

        new JsonConverter(manufacturers)
            .ConvertToJson();
    }
}
```

Excellent. We have created our adapter class which converts the Xml document object into the list of manufacturers and provides that list to the `JsonConverter` class.

So, as you can see, we have enabled collaboration between two completely different interfaces by just introducing an adapter class to our project.

Now, we can make a call to this adapter class from our client class:

```csharp
class Program
{
   static void Main(string[] args)
    {
        var xmlConverter = new XmlConverter();
        var adapter = new XmlToJsonAdapter(xmlConverter);
        adapter.ConvertXmlToJson();
    }
}
```

Once we start our application, we are going to see the following result:

![Adapter - JSON Convert](/images/content/code-maze.com/adapter/02-Final-result.png)

Great job. We have finished our implementation.

---

## When to Use Adapter

We should use the Adapter class whenever we want to work with the existing class but its interface is not compatible with the rest of our code. Basically, the Adapter pattern is a middle-layer which serves as a translator between the code implemented in our project and some third party class or any other class with a different interface.

Furthermore, we should use the Adapter when we want to reuse existing classes from our project but they lack a common functionality. By using the Adapter pattern in this case, we don’t need to extend each class separately and create a redundant code.

---

## Conclusion

The Adapter pattern is pretty common in the C# world and it is quite used when we have to adapt some existing classes to a new interface. It can increase a code complexity by adding additional classes (adapters) but it is worth an effort for sure.

---

<TagLinks />