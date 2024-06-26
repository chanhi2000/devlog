---
lang: ko-KR
title: Represent the Relationship of Properties Using Property Mappings From AutoMapper
description: Article(s) > Represent the Relationship of Properties Using Property Mappings From AutoMapper
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
      content: Article(s) > Represent the Relationship of Properties Using Property Mappings From AutoMapper
    - property: og:description
      content: Represent the Relationship of Properties Using Property Mappings From AutoMapper
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/code-maze.com/csharp-getting-property-mappings-from-automapper.html
prev: /programming/csharp/articles/README.md
date: 2024-04-21
isOriginal: false
cover: /images/content/code-maze.com/csharp-getting-property-mappings-from-automapper/banner.png
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
  name="Using Property Mappings in AutoMapper To Define Mapping Rules"
  desc="AutoMapper allows us to map two objects. Let's take a look at how to get the property mappings that have been defined using AutoMapper."
  url="https://code-maze.com/csharp-getting-property-mappings-from-automapper/"
  logo="/images/content/code-maze.com/favicon.png"
  preview="/images/content/code-maze.com/csharp-getting-property-mappings-from-automapper/banner.png"/>

In this article, we’ll take a look at what property mappings are and how to retrieve them from AutoMapper.

AutoMapper is a free .NET library that streamlines object mapping, reducing manual coding to boost development speed and minimize the risk of errors. Additionally, it offers versatile configuration options and supports complex needs like conditional mapping, custom transformations, and error handling.

::: note

To download the source code for this article, you can visit our [GitHub repository (<FontIcon icon="iconfont icon-github"/>`CodeMazeBlog/CodeMazeGuides`)](https://github.com/CodeMazeBlog/CodeMazeGuides/tree/main/dotnet-client-libraries/GettingPropertyMappingsWithAutomapper).

:::

Let’s start

---

## Using AutoMapper to Map Classes

We already have prepared a basic mapping functionality, so let’s check that out. If you haven’t used AutoMapper before, check out this article first [Getting Started with AutoMapper in ASP.NET Core](/explore/articles/code-maze.com/automapper-net-core.md).

### Creating a Basic Mapping Configuration

First, we have two classes to be mapped, `Source` and `Destination`:

```csharp
public class Source
{
    public string Name { get; set; }
    public int Age { get; set; }
}

public class Destination
{
    public string FullName { get; set; }
    public int YearsOld { get; set; }
}
```

Then, there is a mapping profile:

```csharp
public class MyProfile : Profile
{
    public MyProfile()
    {
        CreateMap<Source, Destination>()
            .ForMember(dest => dest.FullName, opt => opt.MapFrom(src => src.Name))
            .ForMember(dest => dest.YearsOld, opt => opt.MapFrom(src => src.Age));
    }
}
```

Note that **if we don’t explicitly call the `ForMember()` method to specify the fields to be mapped, AutoMapper will look for properties or fields with the same name** in the `Source` and `Destination`classes.

Finally, we have a new `MapperConfiguration` in the `Program` class:

```csharp
var config = new MapperConfiguration(cfg =>
{
    cfg.AddProfile(new MyProfile());
});
```

### Performing Mapping Operations

Now let’s map an instance of the `Source` class to the `Destination` class:

```csharp
var mapper = config.CreateMapper();
var source = new Source { Name = "Jack",Age = 20};
var destination = mapper.Map<Source, Destination>(source);
Console.WriteLine($"Name: {destination.FullName}, Age: {destination.YearsOld}");
```

First, we build the `IMapper` object. Then we create an instance of `Source` as the source object and use the `Map()` method of the `IMapper` object to produce a `Destination` object. Finally, we output the properties of the mapped object to verify that the mapping operation was successful.

Let’s run the application and verify that the console displays the values of `FullName` and `YearsOld` in the mapped `Destination` object:

```
Name: Jack, Age: 20
```

---

## What Are Property Mappings?

Now let’s take a look at property mappings, which represent the relationship of properties between source and target objects.

**In AutoMapper, when we create a mapping configuration between two types, we define a series of mappings between source and target object properties.** These property mappings define the rules for converting object properties correctly and can be as straightforward or complex as necessary.

---

## Getting Property Mappings

**The ability to retrieve property mappings helps us debug complex mapping configurations, generate test cases based on mapping relationships, and dynamically adjust mapping rules to conditions at runtime.**

In AutoMapper, we get the defined property mappings by calling the `GetAllTypeMaps()` method:

```csharp
var typeMaps = mapper.ConfigurationProvider.Internal().GetAllTypeMaps();
foreach (var typeMap in typeMaps)
{
    foreach (var memberMap in typeMap.MemberMaps)
    {
        Console.WriteLine(
            $"{typeMap.SourceType.Name}.{memberMap.SourceMember.Name} "
            + $"is mapped to {typeMap.DestinationType.Name}.{memberMap}");
    }
}
```

Here, we retrieve a `TypeMap` collection, where each `TypeMap` represents a specific mapping relationship between two classes.

The `typeMap.MemberMaps` collection represents the mapped properties. `typeMap.SourceType.Name` returns the source class name, while `memberMap.SourceMember.Name` gets the mapped source property. `typeMap.DestinationType.Name` returns the destination class name and finally, `memberMap` gets the mapped destination property.

Let’s rerun the application to see the mapped relationships:

```
Name: Jack, Age: 20
Source.Name is mapped to Destination.FullName
Source.Age is mapped to Destination.YearsOld
```

Here, we only created a single map in the `MyProfile` class between two classes. Had we created additional mappings between other classes, `GetAllTypeMaps()` would also have retrieved those relationships. Subsequently, we would have seen those additional relationships displayed in the console.

---

## Conclusion

In this article, we covered the basic usage of AutoMapper, as well as property mappings and why being able to retrieve them is important. Finally, we learned how to get property mappings through a simple example.

---

<TagLinks />