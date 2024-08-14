---
lang: ko-KR
title: Advanced GraphQL Queries, Error Handling, Data Loader
description: Article(s) > Advanced GraphQL Queries, Error Handling, Data Loader
icon: iconfont icon-csharp
category: 
  - C#
  - GraphQL
  - Article(s)
tag: 
  - blog
  - code-maze.com
  - csharp
  - graphql
head:  
  - - meta:
    - property: og:title
      content: Article(s) > Advanced GraphQL Queries, Error Handling, Data Loader
    - property: og:description
      content: Advanced GraphQL Queries, Error Handling, Data Loader
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/code-maze.com/advanced-graphql-queries.html
prev: /programming/cs/articles/README.md
date: 2022-01-03
isOriginal: false
cover: /images/content/code-maze.com/advanced-graphql-queries/banner.png
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
  "title": "GraphQL > Article(s)",
  "desc": "Article(s)",
  "link": "/data-science/graphql/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Advanced GraphQL Queries, Error Handling, Data Loader"
  desc="In this article we are going to learn how to write advanced GraphQL Queries, how to handle erros and optimize queries by using data loader."
  url="https://code-maze.com/advanced-graphql-queries/"
  logo="/images/content/code-maze.com/favicon.png"
  preview="/images/content/code-maze.com/advanced-graphql-queries/banner.png"/>

In the [previous article](/explore/articles/code-maze.com/graphql-aspnetcore-basics.md), we have learned about the GraphQL integration with the ASP.NET Core application. We have created our first GraphQL query and fetched some data from the server-side application.

But we won’t stop on just basic queries. In this article, we are going to learn how to write advanced GraphQL queries and while doing that, we are going to show you how to handle errors and how to cache data inside a query.

Furthermore, we are going to learn how to enhance our query (from a client side) with the named queries, aliases, arguments, and fragments.

```component VPCard
{
  "title": "Getting Started with GraphQL in ASP.NET Core",
  "desc": "In this article we are going to learn about GraphQL in ASP.NET Core integration, how to start with the project and how to create a first GraphQL query.",
  "link": "/explore/articles/code-maze.com/graphql-aspnetcore-basics.md",
  "logo": "/images/content/code-maze.com/favicon.png",
  "background": "rgba(22,22,22,0.2)"
}
```

- Advanced GraphQL Queries, Error Handling, Data Loader (Current article)

```component VPCard
{
  "title": "GraphQL Mutations in ASP.NET Core",
  "desc": "In this article, we are going to learn about GraphQL Mutations. We will learn how to create POST, PUT and DELETE mutations.",
  "link": "/explore/articles/code-maze.com/graphql-mutations.md",
  "logo": "/images/content/code-maze.com/favicon.png",
  "background": "rgba(22,22,22,0.2)"
}
```

```component VPCard
{
  "title": "Consuming a GraphQL API with ASP.NET Core",
  "desc": "In this article, we are going to learn how to Consume GraphQL API with the ASP.NET Core application by using the GraphQL.Client library.",
  "link": "/explore/articles/code-maze.com/consume-graphql-api-with-asp-net-core.md",
  "logo": "/images/content/code-maze.com/favicon.png",
  "background": "rgba(22,22,22,0.2)"
}
```

- [Consuming a GraphQL API with Angular](/explore/articles/code-maze.com/consuming-graphql-api-angular.md)

::: info

To download the source code, visit the [Advanced GraphQL Queries Source Code. (<FontIcon icon="iconfont icon-github"/>`CodeMazeBlog/graphql-series`)](https://github.com/CodeMazeBlog/graphql-series/tree/graphql-queries)

<SiteInfo
  name="CodeMazeBlog/graphql-series"
  desc="This repository contains the code for the GraphQL series on Code Maze"
  url="https://github.com/CodeMazeBlog/graphql-series/tree/graphql-queries"
  logo="https://avatars.githubusercontent.com/u/29179238?v=4"
  preview="https://opengraph.githubassets.com/968afff6669b65f13efd3582c29aa2956236b358a538accd7194ca6e0e1506cc/CodeMazeBlog/graphql-series"/>

:::

For the complete navigation of this tutorial visit [GraphQL ASP.NET Core Tutorial.](/explore/articles/code-maze.com/graphql-asp-net-core-tutorial.md)

---

## Creating Complex Types for GraphQL Queries

If we take a look at our „owners“ query, we are going to see it returns the `ListGraphType<OwnerType>` result. Furthermore, if we inspect the `OwnerType` class, we are going to see it contains the `Id`, `Name` and `Address` fields. But a single Owner can have multiple accounts related to it, this can be confirmed by inspecting the Owner model class in the Entities folder. So, this is exactly what we want to add to the `OwnerType` class as well.

But, before we start with adding additional `Accounts` field into the `OwnerType` class, we need to create the `AccountType` class first. So let’s do that inside the `GraphQLTypes` folder:

```csharp
public class AccountType : ObjectGraphType<Account>
{
    public AccountType()
    {
        Field(x => x.Id, type: typeof(IdGraphType)).Description("Id property from the account object.");
        Field(x => x.Description).Description("Description property from the account object.");
        Field(x => x.OwnerId, type: typeof(IdGraphType)).Description("OwnerId property from the account object.");
    }
}
```

Yes, we are missing the `Type` property from the `Account` class, but we will get to that.

Now, that we have `AccountType`, we can add a list of accounts to our „owners“ query result. So, let’s start by modifying the `IAccountRepository` interface first and then the `AccountRepository` class:

```csharp
public interface IAccountRepository
{
    IEnumerable<Account> GetAllAccountsPerOwner(Guid ownerId);
}
```

```csharp
public class AccountRepository : IAccountRepository
{
    private readonly ApplicationContext _context;

    public AccountRepository(ApplicationContext context)
    {
       _context = context;
    }

    public IEnumerable<Account> GetAllAccountsPerOwner(Guid ownerId) => _context.Accounts
        .Where(a => a.OwnerId.Equals(ownerId))
        .ToList();
}
```

Now, we can modify the `OwnerType` class:

```csharp
public class OwnerType : ObjectGraphType<Owner>
{
    public OwnerType(IAccountRepository repository)
    {
        Field(x => x.Id, type: typeof(IdGraphType)).Description("Id property from the owner object.");
        Field(x => x.Name).Description("Name property from the owner object.");
        Field(x => x.Address).Description("Address property from the owner object.");
        Field<ListGraphType<AccountType>>(
            "accounts",
            resolve: context => repository.GetAllAccountsPerOwner(context.Source.Id)
        );
    }
}
```

So, there is nothing in this code, that we haven’t seen so far. In the same way that we have created a field in the `AppQuery` class, we create a field in the `OwnerType` class. One interesting thing is that the `GetAllAccountsPerOwner` method requires an id parameter but we provide `context.Source.Id`.

That’s because the context contains the `Source` property which is of the `Owner` type in this specific case:

![Source property in context object - Queries in GraphQL](/images/content/code-maze.com/advanced-graphql-queries/07-Context.Source.png)

Finally, we can modify the „owners“ query in the UI.Playground:

![Modified query - GraphQL Queries](/images/content/code-maze.com/advanced-graphql-queries/08-Added-accounts-to-the-owner-type.gif)

---

## Adding Enumerations in GraphQL Queries

In the `AccountType` class, we are missing the `Type` field. We left it out deliberately, and now it’s the right time to add it. To add enumeration to the `AccountType` class, we need to invest just a little bit more effort than with the regular scalar types in GraphQL.

The first thing we are going to do is to create a new class `AccountTypeEnumType` in the `GraphQLTypes` folder:

```csharp
public class AccountTypeEnumType : EnumerationGraphType<TypeOfAccount>
{
    public AccountTypeEnumType()
    {
        Name = "Type";
        Description = "Enumeration for the account type object.";
    }
}
```

We can see that the `AccountTypeEnumType` class must inherit from the generic `EnumerationGraphType` which for the generic parameter has the enumeration that we have created in our starter project. One important thing to mention is that the value for the `Name` property must mache the name of the same enumeration property inside the `Account` class:

![Enumeration type - GraphQL Queries](/images/content/code-maze.com/advanced-graphql-queries/09-Enumeration-type.png)

After this modification, let’s add this enumeration type in the `AccountType` class:

```csharp
public class AccountType : ObjectGraphType<Account>
{
    public AccountType()
    {
        Field(x => x.Id, type: typeof(IdGraphType)).Description("Id property from the account object.");
        Field(x => x.Description).Description("Description property from the account object.");
        Field(x => x.OwnerId, type: typeof(IdGraphType)).Description("OwnerId property from the account object.");
        Field<AccountTypeEnumType>("Type", "Enumeration for the account type object.");
    }
}
```

Finally, we can add the enumeration type to our client query:

![Enumeration in the query - GraphQL Queries](/images/content/code-maze.com/advanced-graphql-queries/10-Added-enumeration-to-the-query.gif)

---

## Implementing a Cache in the GraphQL Queries with Data Loader

Our query is returning the expected result, we’ve seen that, but it is not that optimized enough yet.

So, what is the problem?

Well, the problem is that our query is working in such a way that it extracts id’s from all the owners and then for every single id sends the additional SQL query to the database to fetch related accounts. We can see that from the logs:

![Not optimized query](/images/content/code-maze.com/advanced-graphql-queries/11-Not-optimized-query.png)

Of course, this is not a problem when we have only two owner entities, but what if we have a thousand?

We can optimize this query by using `DataLoader` which is provided by GraphQL, with a couple of modifications.

Let’s start by modifying the `IAccountRepository` file:

```csharp{4}
public interface IAccountRepository
{
    IEnumerable<Account> GetAllAccountsPerOwner(Guid ownerId);
    Task<ILookup<Guid, Account>> GetAccountsByOwnerIds(IEnumerable<Guid> ownerIds);
}
```

We need to have a method that returns `Task<ILookup<TKey, T>` because `DataLoader` requires a method with that return type in its signature.

Then, we need to implement this additional method inside the `AccountRepository` class:

```csharp{14-18}
public class AccountRepository : IAccountRepository
{
    private readonly ApplicationContext _context;

    public AccountRepository(ApplicationContext context)
    {
        _context = context;
    }

    public IEnumerable<Account> GetAllAccountsPerOwner(Guid ownerId) => _context.Accounts
        .Where(a => a.OwnerId.Equals(ownerId))
        .ToList();

    public async Task<ILookup<Guid, Account>> GetAccountsByOwnerIds(IEnumerable<Guid> ownerIds)
    {
        var accounts = await _context.Accounts.Where(a => ownerIds.Contains(a.OwnerId)).ToListAsync();
        return accounts.ToLookup(x => x.OwnerId);
    }
}
```

To continue on, we are going to modify the `OwnerType` class:

```csharp{10-14}
public class OwnerType : ObjectGraphType<Owner>
{
    public OwnerType(IAccountRepository repository, IDataLoaderContextAccessor dataLoader)
    {
        Field(x => x.Id, type: typeof(IdGraphType)).Description("Id property from the owner object.");
        Field(x => x.Name, type: typeof(IdGraphType)).Description("Name property from the owner object.");
        Field(x => x.Address, type: typeof(IdGraphType)).Description("Address property from the owner object.");
        Field<ListGraphType<AccountType>>(
            "accounts",
            resolve: context =>
            {
                var loader = dataLoader.Context.GetOrAddCollectionBatchLoader<Guid, Account>("GetAccountsByOwnerIds", repository.GetAccountsByOwnerIds);
                return loader.LoadAsync(context.Source.Id);
            });
    }
}
```

Great job.

As you can see, we inject the `IDataLoaderContextAccessor` in the constructor and use it with the `Context.GetOrAddCollectionBatchLoader` method with the name of the loader key as a first parameter and our created method as the second parameter.

The final thing to do is to register `DataLoader` in the `Startup` class, by attaching it to the `AddGraphQL` method:

```csharp{3}
services.AddGraphQL(o => { o.ExposeExceptions = false; })
        .AddGraphTypes(ServiceLifetime.Scoped)
        .AddDataLoader();
```

Now, as soon as we send the same query again, we can inspect our logs:

![Optimized query](/images/content/code-maze.com/advanced-graphql-queries/12-Optimized-query.png)

As we can see, we have only one query for all the accounts per each owner.

---

## Using Arguments in Queries and Handling Errors

Until now, we’ve been returning all the owners with their accounts in a single query. But we want to return a single owner by provided id parameter as well. So to do that, we need to include arguments in our queries.

Let’s do that by modifying the `IOwnerRepository` interface first:

```csharp{4}
public interface IOwnerRepository
{
    IEnumerable<Owner> GetAll();
    Owner GetById(Guid id);
}
```

Next, we are going to implement the `GetById` method:

```csharp
public class OwnerRepository : IOwnerRepository
{
    private readonly ApplicationContext _context;

    public OwnerRepository(ApplicationContext context)
    {
        _context = context;
    }

    public IEnumerable<Owner> GetAll() => _context.Owners.ToList();

    public Owner GetById(Guid id) => _context.Owners.SingleOrDefault(o => o.Id.Equals(id));
}
```

Finally, we can modify the `AppQuery` class:

```csharp{10-18}
public class AppQuery : ObjectGraphType
{
    public AppQuery(IOwnerRepository repository)
    {
        Field<ListGraphType<OwnerType>>(
           "owners",
           resolve: context => repository.GetAll()
        );

        Field<OwnerType>(
            "owner",
            arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "ownerId" }),
            resolve: context =>
            {
                var id = context.GetArgument<Guid>("ownerId");
                return repository.GetById(id);
            }
        );
    }
}
```

So, we create a new field with the `OwnerType` return value. The name is „owner“ and we use the `arguments` part to create an argument for this query. Our argument can’t be null (NonNullGraphType) and it must be of the `IdGraphType` type with the „ownerId“ name. The resolve part is pretty self-explanatory.

But what if the `id` parameter is not of the `Guid` type, then, we would like to return a message to the client. So let’s add a slight modification in the resolve part:

```csharp{6-13}
Field<OwnerType>(
    "owner",
    arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "ownerId" }),
    resolve: context =>
    {
        Guid id;
        if (!Guid.TryParse(context.GetArgument<string>("ownerId"), out id))
        {
            context.Errors.Add(new ExecutionError("Wrong value for guid"));
            return null;
        }

         return repository.GetById(id);
     }
);
```

After these changes, we can use our UI tool to send a new query:

![Arguments and error handling - GraphQL queries](/images/content/code-maze.com/advanced-graphql-queries/13-Arguments-and-Error-Handling.gif)

---

## Aliases, Fragments, Named Queries, Variables, Directives

We can modify our queries, on the client side, by introducing the aliases. They are very useful when we want to change the name of our result, or any field in the result. Furthermore, if we have two same queries but with a different argument, we can use aliases to differentiate those queries.

To use them, all we have to do is to type the required word in front of the query or field:

![Aliases in GraphQL Queries](/images/content/code-maze.com/advanced-graphql-queries/14-Aliases.gif)

As we can see from a previous example, we have two queries with the same fields.

Now, let’s imagine if we need 10 of them with the same fields just different arguments, that would be a bit hard to read, wouldn’t it? Well, we can solve this by using fragments. Fragments allow us to separate common fields, for different queries, into a separate section and then just reuse that section in all the queries:

![Fragments in GraphQL Queries](/images/content/code-maze.com/advanced-graphql-queries/15-Fragments.gif)

To create a named query, we have to use a „query“ keyword in front of the entire query with the query name as well. Then we can pass arguments for the query if we have some. The important thing with the named queries is if a query has an argument we need to use the QUERY VARIABLES window to assign a value for that argument:

![Named GraphQL Queries](/images/content/code-maze.com/advanced-graphql-queries/16-Named-Queries.gif)

Finally, we can add or remove some fields conditionally from our result by using directives in our queries. There are two directives we can use, include and skip:

![Directives in GraphQL Quereis](/images/content/code-maze.com/advanced-graphql-queries/17-Directives.gif)

---

## Conclusion

Excellent. We did a great job here.

To sum up the article, we have learned:

- How to add complex types in GraphQL
- How to write GraphQL queries with arguments
- The way to work with enumerations
- To cache some data by using DataLoader
- How to modify client queries with aliases, names, and fragments

In [the next article](/explore/articles/code-maze.com/graphql-mutations.md), we are going to learn about mutations in GraphQL.

---

<TagLinks />