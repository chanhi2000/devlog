---
lang: ko-KR
title: "How To Build a CI/CD Pipeline With GitHub Actions And .NET"
description: "Article(s) > How To Build a CI/CD Pipeline With GitHub Actions And .NET"
icon: iconfont icon-github
category: 
  - Github
  - Article(s)
tag: 
  - blog
  - milanjovanovic.tech
  - git
  - github
  - github-action
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How To Build a CI/CD Pipeline With GitHub Actions And .NET"
    - property: og:description
      content: "How To Build a CI/CD Pipeline With GitHub Actions And .NET"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/how-to-build-ci-cd-pipeline-with-github-actions-and-dotnet.html
prev: /devops/github/articles/README.md
date: 2023-05-27
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_039.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Github > Article(s)",
  "desc": "Article(s)",
  "link": "/devops/github/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How To Build a CI/CD Pipeline With GitHub Actions And .NET"
  desc="Do you want to streamline your software development process and accelerate your release cycles? Imagine being able to automatically build, test, and deploy your .NET applications with every code change. With CI/CD, you can significantly reduce manual effort and focus more on creating software, ensuring faster and more reliable releases. And it's never been easier to get started with CI/CD. GitHub Actions are completely free and simple to use."
  url="https://milanjovanovic.tech/blog/how-to-build-ci-cd-pipeline-with-github-actions-and-dotnet/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_039.png"/>

Do you want to streamline your software development process and accelerate your release cycles?

Imagine being able to automatically build, test, and deploy your .NET applications with every code change.

With **CI/CD**, you can significantly reduce manual effort and focus more on creating software, ensuring faster and more reliable releases.

And it's never been easier to get started with **CI/CD**.

**GitHub Actions** are completely free and simple to use.

So here's what we'll cover:

- Introduction to **CI/CD** & **GitHub Actions**
- Creating a **build & test pipeline** for **.NET**
- Creating a **deployment pipeline** for **Azure App Service**

Let's dive in.

---

## What Is Continuous Integration And Delivery?

I'll try to briefly explain what **CI/CD** is, before we take a look at **GitHub Actions**.

**CI/CD** is a method to increase the frequency of delivering new features by adding automation to your software development workflow.

**Continuous Integration ("CI")** refers to the automation process of syncing new code to a repository. Any new changes to the application code are immediately built, tested and merged.

**Continuous Delivery, or Deployment, ("CD")** refers to the process of automating the deployment part of the workflow. When you make a change which gets merged to the repository, this step takes care of deploying those changes to the production environment (or any other environment).

---

## Continuous Integration With GitHub Actions

If you're using **GitHub**, getting started with **Continuous Integration** has never been easier.

You can use [<FontIcon icon="iconfont icon-github"/>**GitHub Actions**](https://github.com/features/actions) to automate your build, test, and deployment **pipeline**. You can create workflows that build and test every commit to your repository, or deploy to production when a new tag is created.

To create a **GitHub Action**, you write a *workflow* to be triggered when some *event* occurs in your repository. An example event is a commit to the main branch, creation of a tag, or you can manually run the workflow.

Here's a **GitHub Actions** workflow to build and test a .NET project:

```yaml
name: Build & Test 🧪

on:
  push:
    branches:
      - main

env:
  DOTNET_VERSION: '7.0.x'

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup .NET 📦
        uses: actions/setup-dotnet@v3
        with:
          dotnet-version: ${{ env.DOTNET_VERSION }}

      - name: Install dependencies 📂
        run: dotnet restore WebApi

      - name: Build 🧱
        run: dotnet build WebApi --configuration Release --no-restore

      - name: Test 🧪
        run: dotnet test WebApi --configuration Release --no-build
```

Let's unwrap what is happening here:

- Defining an event to trigger the workflow
- Setting up the **.NET SDK** with the version from `env.DOTNET_VERSION`
- Restoring, building and testing the project using the `dotnet` CLI tool

You can add this to your **GitHub** repository today, and start getting instant feedback when you commit code to the repository.

When a workflow run fails due to a build error or a failed test, you'll get an email notification.

---

## Continuous Delivery To Azure With GitHub Actions

**Continuous Integration** is a great way to start out with **CI/CD**, but the real value lies in **automating** your **deployment** process.

Imagine this:

- You make a change to your codebase
- The commit triggers the **deployment pipeline**
- A few minutes later your changes are live in production

Usually it's a little more nuanced, because we need to think about configuration, database migrations, etc.
But try to see the big picture here.

If you're running your application in the cloud, for example on **Azure**, chances are there's an existing **GitHub Action** you can use.

Here's a **deployment pipeline** I use to publish my application to an **Azure App Service** instance:

```yaml
name: Publish 🚀

on:
  push:
    branches:
      - main

env:
  AZURE_WEBAPP_NAME: web-api
  AZURE_WEBAPP_PACKAGE_PATH: './publish'
  DOTNET_VERSION: '7.0.x'

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup .NET 📦
        uses: actions/setup-dotnet@v3
        with:
          dotnet-version: ${{ env.DOTNET_VERSION }}

      - name: Build and Publish 📂
        run: |
          dotnet restore WebApi
          dotnet build WebApi -c Release --no-restore
          dotnet publish WebApi -c Release --no-build
            --output '${{ env.AZURE_WEBAPP_PACKAGE_PATH }}'

      - name: Deploy to Azure 🌌
        uses: azure/webapps-deploy@v2
        with:
          app-name: ${{ env.AZURE_WEBAPP_NAME }}
          publish-profile: ${{ secrets.AZURE_PUBLISH_PROFILE }}
          package: '${{ env.AZURE_WEBAPP_PACKAGE_PATH }}'
```

This workflow is pretty similar to the previous one, with the differences being:

- Adding a publish step and configuring the output path - Using the `azure/webapps-deploy@v2` action to deploy to **Azure**

If you need to safely and securely expose secret values in your workflows, you can use **GitHub secrets**. You can define the secrets on GitHub, and use them in actions without having to add them to source control.

In the deployment workflow I'm using `secrets.AZURE_PUBLISH_PROFILE` to access my publish profile for the App Service instance.

---

## In Summary

**Continuous Integration and Delivery** can transform your development process by increasing the speed at which you release changes.

Try adding up how much time you spend on deployments. I'm pretty sure you'll be surprised by the time savings potential of automating them.

And the good part is you will typically set up your **build and deployment pipelines** once, and then continue benefiting from them for the lifetime of your project.

If you want a step by step guide, I made a video showing [<FontIcon icon="fa-brands fa-youtube"/>**how to implement a CI/CD pipeline from scratch.**](https://youtu.be/QP0pi7xe24s) And the **source code** is also public, so you can add the **GitHub Actions** workflow file to your project.

Thanks for reading.

Hope that was helpful!

---

<TagLinks />