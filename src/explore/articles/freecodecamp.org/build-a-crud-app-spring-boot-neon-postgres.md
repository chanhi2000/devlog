---
lang: ko-KR
title: How to Develop a CRUD App with Spring Boot, Neon Postgres, and Azure App Service
description: Article(s) > How to Develop a CRUD App with Spring Boot, Neon Postgres, and Azure App Service
icon: iconfont icon-spring
category: 
  - Java
  - Spring
  - Spring Boot
  - PostgreSQL
  - Microsoft
  - Azure
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - java
  - spring
  - spring-boot
  - postgres
  - postgresql
  - microsoft
  - azure
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to Develop a CRUD App with Spring Boot, Neon Postgres, and Azure App Service
    - property: og:description
      content: How to Develop a CRUD App with Spring Boot, Neon Postgres, and Azure App Service
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/build-a-crud-app-spring-boot-neon-postgres.html
prev: /programming/java-spring/articles/README.md
date: 2024-07-26
isOriginal: false
cover: https://freecodecamp.org/news/content/images/size/w1000/2024/07/neon-banner.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Spring > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/java-spring/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "PostgreSQL > Article(s)",
  "desc": "Article(s)",
  "link": "/data-science/postgres/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Azure > Article(s)",
  "desc": "Article(s)",
  "link": "/devops/azure/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

---

<SiteInfo
  name="How to Develop a CRUD App with Spring Boot, Neon Postgres, and Azure App Service"
  desc="In this article, we'll explore how to develop a CRUD (Create, Read, Update, Delete) application using Spring Boot and Neon Postgres. We'll also deploy the application on Azure App Service and make it production-ready by setting up features like autoscaling and multiple environments. You'll learn how Neon Postgres..."
  url="https://freecodecamp.org/news/build-a-crud-app-spring-boot-neon-postgres/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://freecodecamp.org/news/content/images/size/w1000/2024/07/neon-banner.png"/>

In this article, we'll explore how to develop a CRUD (Create, Read, Update, Delete) application using Spring Boot and [<FontIcon icon="fas fa-globe"/>Neon Postgres](https://neon.tech/).

We'll also deploy the application on [<FontIcon icon="iconfont icon-microsoftazure"/>Azure App Service](https://azure.microsoft.com/en-us/products/app-service) and make it production-ready by setting up features like autoscaling and multiple environments.

You'll learn how Neon Postgres can make your development and deployment processes easier along the way.

---

## Here's what we'll cover:

- Setting up a Neon Postgres database and exploring its features
- Building a CRUD application using Spring Boot and deploying the application on Azure App Service
- Why Neon is a good fit for infrastructure that auto-scales
- Database branching in Neon Postgres and how it can ease the development workflow

---

## Prerequisites

- Working knowledge of Java, Maven, and Spring Boot
- Basics of SQL databases
- Understanding of serverless and cloud services
- Familiarity with testing and deployment processes

[[toc]]

---

## What is Neon Postgres?

Neon is a fully managed serverless Postgres database platform. It offers features such as high availability, automatic backups, and scaling options to handle varying traffic levels.

Neon is designed to be cost-efficient and developer-friendly, and it focuses on providing a seamless experience for developers.

In addition to the standard Postgres features, it provides capabilities like database branching, allowing you to create Git-like branches of the database for different purposes.

---

## How to Set Up the Database

<!--
To begin with, let's explore how you can set up a Neon database for your application.

Firstly, you'll need to <a href="https://console.neon.tech/signup">create an account</a> on the Neon website. It doesn't require a credit card to sign up, and you're automatically set up with the free tier to get started.

Here's a <a href="https://neon.tech/pricing">pricing and features comparison</a> of Neon plans:

<img src="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Finxumg46sf92ffre6l2q.png" alt="A screenshot of pricing plans in Neon listing down free and paid features" width="800" height="527" loading="lazy">
*Neon pricing plans*

In the free tier, we get 0.5 GB of storage with basic computing which is enough for playing around with the database and building small applications.

### -create-the-database">Create the Database

Once you've signed up, you can access the dashboard and create a new project.

Star by filling in the project name, region, and Postgres version options. In addition to this, we can choose two additional options:

- **compute size** – You can choose a min and max compute size for the database. This is useful for autoscaling the database based on the load.
<li>**suspend time** – You can set a time after which the database will be suspended if not being used. This is useful for saving costs when the database is not being used.

<img src="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fggwuvqtb8ydl3mxd1dak.png" alt="Form with specifications required when creating a database" width="800" height="662" loading="lazy">
*Creating a database project in Neon*

Once you submit the form, Neon will create the database and provide the connection details.

<img src="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwe2x5d81euphg2owgxhd.png" alt="Neon Dashboard showing the project is ready. Also shows connection details." width="800" height="527" loading="lazy">
*Neon Dashboard*

As you can see, the database was set up in 3.3 seconds (compared to hours of installing and setting up your own infrastructure). You can choose multiple ways to connect to the database. For this tutorial, select Java as your programming language and get the JDBC connection string.

---

## -how-to-build-the-spring-boot-crud-app">How to Build the Spring Boot CRUD App

Next, let's set up our CRUD application. We'll use Spring Boot, as it provides easy bootstrapping and configuration for building web applications.

We can use the <a href="https://start.spring.io/">Spring Initializr</a> to generate a new Spring Boot project with the necessary dependencies:

- Spring Web – for building web applications
<li>Spring Data JPA – for working with databases using JPA
<li>PostGres Driver – for connecting to the Postgres database

<img src="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffifv17tc5d3swothe3zf.png" alt="Spring Initializer website form to select spring boot project specifications and dependencies" width="800" height="420" loading="lazy">
*Creating a Spring Boot project using Spring Initializer*

You can generate, download, and import the project into your favorite IDE.

### -create-an-entity-class">Create an Entity Class

Let's create an entity class to represent the data in the application. First, create a `User` class:

<pre class="language-java" tabindex="0"><code class="language-java"><span class="token annotation punctuation">@Entity</span>(</span>name =</span> "users"</span>)</span>
public</span> class</span> User</span> {</span>
    <span class="token annotation punctuation">@Id</span>
    <span class="token annotation punctuation">@GeneratedValue</span>(</span>strategy =</span> GenerationType</span>.</span>IDENTITY</span>)</span>
    private</span> Long</span> id;</span>
    private</span> String</span> name;</span>
    private</span> String</span> email;</span>

    // Constructors, Getters and Setters</span>
}</span>
```

The entity name `users` is the name of the table you want to use in your database.

### -create-a-repository">Create a Repository

Next, create a repository interface to interact with the database. You'll extend the `JpaRepository` interface provided by Spring Data JPA:

<pre class="language-java" tabindex="0"><code class="language-java"><span class="token annotation punctuation">@Repository</span>
public</span> interface</span> UserRepository</span> extends</span> JpaRepository</span>&lt;</span>User</span>,</span> Long</span>&gt;</span></span> {</span>
}</span>
```

You need to annotate the interface with `@Repository` to mark it as a Spring bean. The `JpaRepository` interface provides methods for CRUD operations like `save`, `findAll`, `findById`, `delete`, and so on, so you don't need to write the queries manually.

You'll provide your entity class `User` and the type of the primary key `Long` as type arguments to the `JpaRepository` interface.

### -create-a-rest-controller">Create a REST Controller

Finally, create a REST controller to handle the CRUD operations. You'll inject the `UserRepository` into the controller and implement the necessary endpoints:

<pre class="language-java" tabindex="0"><code class="language-java"><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span>(</span>"/users"</span>)</span>
public</span> class</span> UserController</span> {</span>
    private</span> final</span> UserRepository</span> userRepository;</span>

    public</span> UserController</span>(</span>UserRepository</span> userRepository)</span> {</span>
        this</span>.</span>userRepository =</span> userRepository;</span>
    }</span>

    <span class="token annotation punctuation">@GetMapping</span>
    public</span> List</span>&lt;</span>User</span>&gt;</span></span> getUsers</span>(</span>)</span> {</span>
        return</span> userRepository.</span>findAll</span>(</span>)</span>;</span>
    }</span>

    <span class="token annotation punctuation">@PostMapping</span>
    public</span> User</span> createUser</span>(</span><span class="token annotation punctuation">@RequestBody</span> User</span> user)</span> {</span>
        return</span> userRepository.</span>save</span>(</span>user)</span>;</span>
    }</span>

    <span class="token annotation punctuation">@PutMapping</span>(</span>"/{id}"</span>)</span>
    public</span> User</span> updateUser</span>(</span><span class="token annotation punctuation">@PathVariable</span> Long</span> id,</span> <span class="token annotation punctuation">@RequestBody</span> User</span> user)</span> {</span>
        user.</span>setId</span>(</span>id)</span>;</span>
        return</span> userRepository.</span>save</span>(</span>user)</span>;</span>
    }</span>

    <span class="token annotation punctuation">@DeleteMapping</span>(</span>"/{id}"</span>)</span>
    public</span> void</span> deleteUser</span>(</span><span class="token annotation punctuation">@PathVariable</span> Long</span> id)</span> {</span>
        userRepository.</span>deleteById</span>(</span>id)</span>;</span>
    }</span>
}</span>
```

Here are a few things to note:

- You're using the `@RestController` annotation to mark the class as a controller that handles REST requests.
<li>The `@RequestMapping` annotation specifies the base URL for the endpoints.
<li>You're injecting the `UserRepository` into the controller using constructor injection.
<li>Finally, you're implementing your API endpoints for CRUD operations using the `@GetMapping`, `@PostMapping`, `@PutMapping`, and `@DeleteMapping` annotations.

### -configure-the-database">Configure the Database

To connect your Spring Boot application to the Neon Postgres database, you need to configure the database URL, username, and password in the `application.properties` file:

<pre>`spring.datasource.url=jdbc:postgresql:<span class="hljs-comment">//&lt;db-url&gt;/&lt;db-name&gt;?sslmode=require</span>
spring.datasource.username=&lt;username&gt;
spring.datasource.password=&lt;password&gt;
spring.jpa.hibernate.ddl-auto=update
```
Here, you configured the database URL, username, and password provided by Neon when you created the database. The `spring.jpa.hibernate.ddl-auto=update` property tells Spring Boot to automatically create the necessary tables or columns based on the entity classes when the application starts.

---

## -how-to-deploy-on-azure-app-service">How to Deploy on Azure App Service

Now that your Spring Boot application is ready, it's time to deploy it on Azure App Service.

### -create-a-new-web-app">Create a New Web App

To deploy your Spring Boot application on Azure App Service, you'll first create a new `Web App`. You can do this through the Azure portal by following these steps:

- Log in to the <a href="https://portal.azure.com/">Azure portal</a>.
<li>Click on the `Create a resource` button.
<li>Search for `Web App` and select the `Create` option.
<li>Fill in the necessary details like resource group, app name, runtime stack, and region.
<li>Click the `Review + create` button.

<img src="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flf2kmh12t8eucd1qa1pg.png" alt="Form for creating a web app in Azure" width="800" height="706" loading="lazy">
*Creating a Web App in Azure*

### -deploy-the-application">Deploy the Application

The Web App takes a couple of minutes to create. Once done, you can deploy your Spring Boot application to Azure App Service.

One of the easiest ways to deploy is to package your Spring Boot application as a JAR file and deploy it to Azure App Service using the Azure CLI.

To do this, run the below commands:

<pre>`mvn package
az webapp deploy --src-path neon-demo<span class="hljs-number">-0.0</span><span class="hljs-number">.1</span>-SNAPSHOT.jar --resource-group learn-ba1a439c<span class="hljs-number">-71</span>ca<span class="hljs-number">-4</span>cab<span class="hljs-number">-9</span>bb1-f5b1331bab04 --name neon-app
```
Here, you're packaging your Spring Boot application using Maven and deploying the JAR file to Azure App Service using the Azure CLI. You've provided the path to the JAR file, the resource group, and the app name you previously configured.

### -access-the-application">Access the Application

Once the deployment is complete, you can access your Spring Boot application on Azure App Service by navigating to the URL of the Web App. Your app is available at neon-app.azurewebsites.net

Let's use _curl _to test the endpoints.

<h4 id="heading-create-a-user">Create a User</h4>
<pre>`curl -X POST -d <span class="hljs-string">'{"name":"John Doe","email":"john@gmail.com"}'</span> https:<span class="hljs-comment">//neon-app.azurewebsites.net/users</span>
```
Here you provide user data in JSON format to create a new user.

<h4 id="heading-get-users">Get Users</h4>
You can also can test that the user was created by fetching all users:

<pre>`curl -X GET https:<span class="hljs-comment">//neon-app.azurewebsites.net/users</span>
```
---

## -how-to-set-up-autoscaling">How to Set Up Autoscaling

A production application may experience varying levels of traffic, and it's important to scale the application dynamically based on the load.

Let's explore how you can autoscale your application when needed.

### -autoscaling-in-azure">Autoscaling in Azure

Azure App Service provides <a href="https://learn.microsoft.com/en-us/azure/azure-functions/functions-premium-plan?tabs=portal#plan-and-sku-settings">autoscaling options</a> that let you automatically adjust the number of instances as needed.

You can configure autoscaling rules in the Azure portal by following these steps:

- Navigate to the Web App in the Azure portal.
<li>Click the `Scale out (App Service Plan)` option from the left menu.
<li>Configure the autoscaling rules – you can choose predefined rules like traffic or create custom rules based on metrics like CPU usage, memory usage, or custom metrics.
<li>Save.

Azure will automatically scale the application based on the configured rules.

### -autoscaling-in-neon">Autoscaling in Neon

Since your application is automatically scaled based on the load, you'll want to ensure that the database can handle the increased traffic.

Neon provides <a href="https://neon.tech/docs/introduction/autoscaling">autoscaling options</a> to scale the database dynamically based on the load. You can configure autoscaling rules in the Neon dashboard to ensure the database can handle the increased load.

Follow the below steps to configure autoscaling in Neon:

1. Navigate to the Neon dashboard and select the database. Then select the branch to configure autoscaling.

<img src="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fl6s84pqhk2avflpjbgrf.png" alt="Neon project dashboard with branches section highlighted " width="800" height="472" loading="lazy">
*Selecting a branch from Neon project dashboard*

<ol start="2">
<li>Click on the `Edit` button next to the `Compute` section. Configure the autoscaling rules based on metrics like CPU usage, memory usage, or custom metrics.

<img src="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffkn11nop1zz9xxbfamsr.png" alt="Branch details view in Neon with edit button in the computes section highlighted" width="800" height="351" loading="lazy">
*Branch details view in Neon*

<ol start="3">
<li>Configure the min-max compute size and Save. Neon will automatically scale the database based on the configured rules when needed.

<img src="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdmuow8zvndz0dibv2kxt.png" alt="Form to enable autoscaling and select min and max size of the compute" width="678" height="803" loading="lazy">
*Setting up autoscaling for compute*

Ensuring that both the application and the database can scale dynamically based on the load will help you handle varying levels of traffic efficiently.

---

## -how-to-configure-database-branches-in-neon">How to Configure Database Branches in Neon

In a typical development workflow, multiple databases may be used for different purposes like development, testing, and production.

Neon Postgres provides <a href="https://neon.tech/docs/introduction/autoscaling">database branching</a> to create multiple branches for different purposes. Each branch is an instance of the database that you can use independently.

This Git-like feature helps set up a copy of the database for different environments like development, staging, and production. It also helps preserve data for different versions of the application.

Let's explore how you can create and manage branches in Neon Postgres:

- Navigate to the Neon dashboard and select the database.
<li>In the `Branches` section, click on the `View All` button.
<li>You can create a new branch from an existing one by clicking on the `Create Branch` button. You'll need to provide the branch name and what data to copy from the parent branch.

<img src="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9ncdgdrj32etd3gbqurf.png" alt="Branches view with Create branch option visible " width="800" height="331" loading="lazy">
*Create branch option*

- You can either copy all the data or copy until a point in time or a specific record. This is useful for multiple purposes like restoring data, creating a new environment, or testing new features.

<img src="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fw7gchucru5qw294icqw3.png" alt="Creating a new branch from an existing branch" width="561" height="737" loading="lazy">
*Creating a new branch*

- Neon will create a new branch of the database that can be used independently. You can find the URL, username, and password for the new branch in the dashboard. And this happens in real time without any downtime and delays.

<img src="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fji79akuf193gtv94yaag.png" alt="Branch-specific connection details " width="494" height="515" loading="lazy">
*Branch-specific connection details*

Now you can use your `dev` branch for local development and testing, and the `main` branch for production. This helps in keeping the data separate and ensures that changes in one branch do not affect the other branches.

---

## Summary

In this article, we built a CRUD application using Spring Boot, Neon Postgres, and Azure App Service.

We explored how to set up the Neon Postgres database, build a basic CRUD application using Spring Boot, deploy the application on Azure App Service, and configure autoscaling for the application and the database.

We also learned about how the database branching feature in Neon Postgres helps you create branches of the database for different environments and purposes.

-->

---

<TagLinks />