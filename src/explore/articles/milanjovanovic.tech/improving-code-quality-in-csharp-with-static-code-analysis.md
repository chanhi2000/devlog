---
lang: ko-KR
title: Improving Code Quality in C# With Static Code Analysis
description: Article(s) > Improving Code Quality in C# With Static Code Analysis
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
      content: Article(s) > Improving Code Quality in C# With Static Code Analysis
    - property: og:description
      content: Improving Code Quality in C# With Static Code Analysis
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/improving-code-quality-in-csharp-with-static-code-analysis.html
prev: /programming/cs/articles/README.md
date: 2024-08-03
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_101.png
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

```component VPCard
{
  "title": "Redis > Article(s)",
  "desc": "Article(s)",
  "link": "/data-science/redis/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Improving Code Quality in C# With Static Code Analysis"
  desc="Static code analysis helps you build secure, maintainable, and high-quality C# code. In this week's newsletter, we'll explore how to integrate it into your .NET projects."
  url="https://milanjovanovic.tech/blog/improving-code-quality-in-csharp-with-static-code-analysis/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_101.png"/>

Writing good code is important for any software project. It's also something I deeply care about. However, it can be hard to spot problems by just reading through everything.

Luckily, there's a tool that can help: **static code analysis**.

It's like having an extra pair of eyes automatically checking your code. Static code analysis helps you build secure, maintainable, and high-quality C# code.

Here's what we are going to cover in this week's newsletter:

- Static code analysis
- Static analysis in .NET
- Finding security risks

Let's see how static code analysis can help us improve our code quality.

---

## What is Static Code Analysis?

Static code analysis is a way to examine your code without actually running it. It reports any issues related to security, performance, coding style, or best practices.

With static code analysis, you can [<FontIcon icon="fa-brands fa-wikipedia-w"/>"shift left"](https://en.wikipedia.org/wiki/Shift-left_testing). This allows you to find and fix issues early in the development process when they're less expensive to solve.

By writing high-quality code, you'll be able to build systems that are more reliable, scalable, and easier to maintain over time. Investing in code quality will pay dividends in the later stages of any project.

You can integrate static code analysis into your [**CI pipeline**](/explore/articles/milanjovanovic.tech/how-to-build-ci-cd-pipeline-with-github-actions-and-dotnet.md) for a quick feedback loop. We can also pair this with [**architecture testing**](/explore/articles/milanjovanovic.tech/shift-left-with-architecture-testing-in-dotnet.md) to enforce additional coding standards.

---

## Static Code Analysis in .NET

.NET has built-in Roslyn analyzers that inspect your C# code for code style and quality issues. Code analysis is enabled by default if your project targets .NET 5 or later.

The best way I found to configure static code analysis is using `Directory.Build.props`. It's an XML file where you can configure common project properties. You can place the `Directory.Build.props` file in the root folder so it will apply to all projects.

You can configure the `TargetFramework`, `ImplicitUsings`, `Nullable` (nullable reference types), etc. But what we care about is configuring static code analysis.

Here are some properties we can configure:

- `TreatWarningsAsErrors` - Treat all warnings as errors.
- `CodeAnalysisTreatWarningsAsErrors` - Treat code quality (CAxxxx) warnings as errors.
- `EnforceCodeStyleInBuild` - Enables code-style analysis ("IDExxxx") rules.
- `AnalysisLevel` - Specifies which analyzers to enable. The default value is `latest`.
- `AnalysisMode` - Configures the predefined code analysis configuration.

We can also install additional NuGet packages to our projects. `SonarAnalyzer.CSharp` contains additional code analyzers to help us write clean, safe, and reliable code. This library comes from the same company that built [<FontIcon icon="fas fa-globe"/>SonarQube](https://sonarsource.com/products/sonarqube/).

```xml{8-12,16}
<Project>
  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>

    <!-- Configure code analysis. -->
    <AnalysisLevel>latest</AnalysisLevel>
    <AnalysisMode>All</AnalysisMode>
    <TreatWarningsAsErrors>true</TreatWarningsAsErrors>
    <CodeAnalysisTreatWarningsAsErrors>true</CodeAnalysisTreatWarningsAsErrors>
    <EnforceCodeStyleInBuild>true</EnforceCodeStyleInBuild>
  </PropertyGroup>

  <ItemGroup Condition="'$(MSBuildProjectExtension)' != '.dcproj'">
    <PackageReference Include="SonarAnalyzer.CSharp" Version="*">
      <PrivateAssets>all</PrivateAssets>
      <IncludeAssets>
        runtime; build; native; contentfiles; analyzers; buildtransitive
      </IncludeAssets>
    </PackageReference>
  </ItemGroup>
</Project>
```

The built-in .NET analyzers and the ones from `SonarAnalyzer.CSharp` can be very helpful. But they can also make a lot of noise with too many build warnings.

When you encounter code analysis rules that you don't consider helpful, you can turn them off. You can configure individual code analysis rules in the `.editorconfig` file.

```
# S125: Sections of code should not be commented out
dotnet_diagnostic.S125.severity = none

# S1075: URIs should not be hardcoded
dotnet_diagnostic.S1075.severity = none

# S2094: Classes should not be empty
dotnet_diagnostic.S2094.severity = none

# S3267: Loops should be simplified with "LINQ" expressions
dotnet_diagnostic.S3267.severity = none
```

---

## Finding (and Fixing) Security Risks

Static code analysis can help you detect potential security vulnerabilities in your code. Here's an example of a `PasswordHasher` using only `10,000` iterations to generate a password hash. The `S5344` rule, from `SonarAnalyzer.CSharp`, detects this issue and warns us. The recommended minimal number of iterations is `100,000`.

You can navigate to the explanation for [<FontIcon icon="fas fa-globe"/>S5344](https://rules.sonarsource.com/csharp/RSPEC-5344) to learn more:

> Weakly hashed password storage poses a significant security risk to software applications.

With `TreatWarningsAsErrors` turned on, your build will fail until you solve this issue. This reduces the chance of introducing security risks in production.

![](https://milanjovanovic.tech/blogs/mnw_101/static_code_analysis.png?imwidth=1920)

---

## Conclusion

Static code analysis is a powerful tool I include in all my C# projects. It helps me catch problems early, leads to more reliable and secure code, and saves time and effort. While the initial setup and fine-tuning of rules might take some time, the long-term benefits are undeniable.

Remember, static code analysis is a tool that complements your existing development practices.

You can create a robust development process that consistently delivers high-quality software by combining static code analysis with other techniques like code reviews, unit testing, and continuous integration.

Embrace static code analysis. Your future self (and your team) will thank you.

That's all for today.

See you next week.

**P.S.** Here's a sample [<FontIcon icon="iconfont icon-github"/>.editorconfig](https://gist.github.com/m-jovanovic/417b7d0a641d7dd7d1972550fba298db) file you can add to your projects and customize to fit your needs.

---

<TagLinks />