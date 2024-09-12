---
lang: ko-KR
title: Fast SQL Bulk Inserts With C# and EF Core
description: Article(s) > Fast SQL Bulk Inserts With C# and EF Core
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
      content: Article(s) > Fast SQL Bulk Inserts With C# and EF Core
    - property: og:description
      content: Fast SQL Bulk Inserts With C# and EF Core
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/fast-sql-bulk-inserts-with-csharp-and-ef-core.html
prev: /programming/cs/articles/README.md
date: 2024-03-23
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_082.png
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
  name="Fast SQL Bulk Inserts With C# and EF Core"
  desc="Explore various methods for fast bulk inserts in SQL with C# and EF Core, highlighting techniques like Dapper, EF Core optimizations, EF Core Bulk Extensions, and SQL Bulk Copy."
  url="https://milanjovanovic.tech/blog/fast-sql-bulk-inserts-with-csharp-and-ef-core/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_082.png"/>

<!-- TODO: 작성 -->

<!-- 
Whether you're building a data analytics platform, migrating a legacy system, or onboarding a surge of new users,
there will likely come a time when you'll need to insert a massive amount of data into your database.

Inserting the records one by one feels like watching paint dry in slow motion.
Traditional methods won't cut it.

So, understanding fast bulk insert techniques with C# and EF Core becomes essential.

In today's issue, we'll explore several options for performing bulk inserts in C#:

- Dapper
<li>EF Core
<li>EF Core Bulk Extensions
<li>SQL Bulk Copy

The examples are based on a `User` class with a respective `Users` table in **SQL Server**.

```cs
public class User
{
    public int Id { get; set; }
    public string Email { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string PhoneNumber { get; set; }
}

```

This isn't a complete list of bulk insert implementations.
There are a few options I didn't explore, like manully generating SQL statements
and using <a href="https://learn.microsoft.com/en-us/sql/relational-databases/tables/use-table-valued-parameters-database-engine?view=sql-server-ver16">Table-Valued parameters</a>.

---

## ef-core-simple-approach"><a href="#ef-core-simple-approach">EF Core Simple Approach

Let's start with a simple example using EF Core.
We're creating an `ApplicationDbContext` instance, adding a `User` object, and calling `SaveChangesAsync`.
This will insert each record to the database one by one.
In other words, each record requires one round trip to the database.

```cs
using var context = new ApplicationDbContext();

foreach (var user in GetUsers())
{
    context.Users.Add(user);

    await context.SaveChangesAsync();
}

```

The results are as poor as you'd expect:

<pre><code class="code-highlight">EF Core - Add one and save, for 100 users: 20 ms
EF Core - Add one and save, for 1,000 users: 260 ms
EF Core - Add one and save, for 10,000 users: 8,860 ms

```

I omitted the results with `100,000` and `1,000,000` records because they took too long to execute.

We'll use this as a "how not to do bulk inserts" example.

---

## dapper-simple-insert"><a href="#dapper-simple-insert">Dapper Simple Insert

<a href="https://github.com/DapperLib/Dapper">Dapper</a> is a simple SQL-to-object mapper for .NET.
It allows us to easily insert a collection of objects into the database.

I'm using Dapper's feature to unwrap a collection into a SQL `INSERT` statement.

```cs
using var connection = new SqlConnection(connectionString);
connection.Open();

const string sql =
    @"
    INSERT INTO Users (Email, FirstName, LastName, PhoneNumber)
    VALUES (@Email, @FirstName, @LastName, @PhoneNumber);
    ";

await connection.ExecuteAsync(sql, GetUsers());

```

The results are much better than the initial example:

<pre><code class="code-highlight">Dapper - Insert range, for 100 users: 10 ms
Dapper - Insert range, for 1,000 users: 113 ms
Dapper - Insert range, for 10,000 users: 1,028 ms
Dapper - Insert range, for 100,000 users: 10,916 ms
Dapper - Insert range, for 1,000,000 users: 109,065 ms

```

---

## ef-core-add-and-save"><a href="#ef-core-add-and-save">EF Core Add and Save

However, EF Core still didn't throw in the towel.
The first example was poorly implemented on purpose.
EF Core can batch multiple SQL statements together, so let's use that.

If we make a simple change, we can get significantly better performance.
First, we're adding all the objects to the `ApplicationDbContext`.
Then, we're going to call `SaveChangesAsync` only once.

EF will create a batched SQL statement - group many `INSERT` statements together - and send them to the database together.
This reduces the number of round trips to the database, giving us improved performance.

```cs
using var context = new ApplicationDbContext();

foreach (var user in GetUsers())
{
    context.Users.Add(user);
}

await context.SaveChangesAsync();

```

Here are the benchmark results of this implementation:

<pre><code class="code-highlight">EF Core - Add all and save, for 100 users: 2 ms
EF Core - Add all and save, for 1,000 users: 18 ms
EF Core - Add all and save, for 10,000 users: 203 ms
EF Core - Add all and save, for 100,000 users: 2,129 ms
EF Core - Add all and save, for 1,000,000 users: 21,557 ms

```

Remember, it took Dapper **109 seconds** to insert `1,000,000` records.
We can achieve the same with EF Core batched queries in **~21 seconds**.

---

## ef-core-addrange-and-save"><a href="#ef-core-addrange-and-save">EF Core AddRange and Save

This is an alternative to the previous example.
Instead of calling `Add` for all objects, we can call `AddRange` and pass in a collection.

I wanted to show this implementation because I prefer it over the previous one.

```cs
using var context = new ApplicationDbContext();

context.Users.AddRange(GetUsers());

await context.SaveChangesAsync();

```

The results are very similar to the previous example:

<pre><code class="code-highlight">EF Core - Add range and save, for 100 users: 2 ms
EF Core - Add range and save, for 1,000 users: 18 ms
EF Core - Add range and save, for 10,000 users: 204 ms
EF Core - Add range and save, for 100,000 users: 2,111 ms
EF Core - Add range and save, for 1,000,000 users: 21,605 ms

```

---

## ef-core-bulk-extensions"><a href="#ef-core-bulk-extensions">EF Core Bulk Extensions

There's an awesome library called <a href="https://github.com/borisdj/EFCore.BulkExtensions">EF Core Bulk Extensions</a> that we can use to squeeze out more performance.
You can do a lot more than bulk inserts with this library, so I recommend exploring it.
This library is open source, and has a community license if you meet the free usage criteria.
Check the <a href="https://github.com/borisdj/EFCore.BulkExtensions?#license">licensing section</a> for more details.

For our use case, the `BulkInsertAsync` method is an excellent choice.
We can pass the collection of objects, and it will perform an SQL bulk insert.

```cs
using var context = new ApplicationDbContext();

await context.BulkInsertAsync(GetUsers());

```

The performance is equally amazing:

<pre><code class="code-highlight">EF Core - Bulk Extensions, for 100 users: 1.9 ms
EF Core - Bulk Extensions, for 1,000 users: 8 ms
EF Core - Bulk Extensions, for 10,000 users: 76 ms
EF Core - Bulk Extensions, for 100,000 users: 742 ms
EF Core - Bulk Extensions, for 1,000,000 users: 8,333 ms

```

For comparison, we needed **~21 seconds** to insert `1,000,000` records with EF Core batched queries.
We can do the same with the <a href="https://github.com/borisdj/EFCore.BulkExtensions">Bulk Extensions</a> library in just **8 seconds**.

---

## sql-bulk-copy"><a href="#sql-bulk-copy">SQL Bulk Copy

Lastly, if we can't get the desired performance from EF Core, we can try using <a href="https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlbulkcopy">`SqlBulkCopy`</a>.
SQL Server supports <a href="https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/sql/bulk-copy-operations-in-sql-server">bulk copy operations</a> natively, so let's use this.

This implementation is slightly more complex than the EF Core examples.
We need to configure the `SqlBulkCopy` instance and create a `DataTable` containing the objects we want to insert.

```cs
using var bulkCopy = new SqlBulkCopy(ConnectionString);

bulkCopy.DestinationTableName = "dbo.Users";

bulkCopy.ColumnMappings.Add(nameof(User.Email), "Email");
bulkCopy.ColumnMappings.Add(nameof(User.FirstName), "FirstName");
bulkCopy.ColumnMappings.Add(nameof(User.LastName), "LastName");
bulkCopy.ColumnMappings.Add(nameof(User.PhoneNumber), "PhoneNumber");

await bulkCopy.WriteToServerAsync(GetUsersDataTable());

```

However, the performance is blazing fast:

<pre><code class="code-highlight">SQL Bulk Copy, for 100 users: 1.7 ms
SQL Bulk Copy, for 1,000 users: 7 ms
SQL Bulk Copy, for 10,000 users: 68 ms
SQL Bulk Copy, for 100,000 users: 646 ms
SQL Bulk Copy, for 1,000,000 users: 7,339 ms

```

Here's how you can create a `DataTable` and populate it with a list of objects:

```cs
DataTable GetUsersDataTable()
{
    var dataTable = new DataTable();

    dataTable.Columns.Add(nameof(User.Email), typeof(string));
    dataTable.Columns.Add(nameof(User.FirstName), typeof(string));
    dataTable.Columns.Add(nameof(User.LastName), typeof(string));
    dataTable.Columns.Add(nameof(User.PhoneNumber), typeof(string));

    foreach (var user in GetUsers())
    {
        dataTable.Rows.Add(
            user.Email, user.FirstName, user.LastName, user.PhoneNumber);
    }

    return dataTable;
}

```

---

## results"><a href="#results">Results

Here are the results for all the bulk insert implementations:

<pre><code class="code-highlight">| Method             |   Size     |      Speed
|------------------- |----------- |----------------:
| EF_OneByOne        | 100        |      19.800 ms |
| EF_OneByOne        | 1000       |     259.870 ms |
| EF_OneByOne        | 10000      |   8,860.790 ms |
| EF_OneByOne        | 100000     |            N/A |
| EF_OneByOne        | 1000000    |            N/A |

| Dapper_Insert      | 100        |      10.650 ms |
| Dapper_Insert      | 1000       |     113.137 ms |
| Dapper_Insert      | 10000      |   1,027.979 ms |
| Dapper_Insert      | 100000     |  10,916.628 ms |
| Dapper_Insert      | 1000000    | 109,064.815 ms |

| EF_AddAll          | 100        |       2.064 ms |
| EF_AddAll          | 1000       |      17.906 ms |
| EF_AddAll          | 10000      |     202.975 ms |
| EF_AddAll          | 100000     |   2,129.370 ms |
| EF_AddAll          | 1000000    |  21,557.136 ms |

| EF_AddRange        | 100        |       2.035 ms |
| EF_AddRange        | 1000       |      17.857 ms |
| EF_AddRange        | 10000      |     204.029 ms |
| EF_AddRange        | 100000     |   2,111.106 ms |
| EF_AddRange        | 1000000    |  21,605.668 ms |

| BulkExtensions     | 100        |       1.922 ms |
| BulkExtensions     | 1000       |       7.943 ms |
| BulkExtensions     | 10000      |      76.406 ms |
| BulkExtensions     | 100000     |     742.325 ms |
| BulkExtensions     | 1000000    |   8,333.950 ms |

| BulkCopy           | 100        |       1.721 ms |
| BulkCopy           | 1000       |       7.380 ms |
| BulkCopy           | 10000      |      68.364 ms |
| BulkCopy           | 100000     |     646.219 ms |
| BulkCopy           | 1000000    |   7,339.298 ms |

```

---

## takeaway"><a href="#takeaway">Takeaway

`SqlBulkCopy` holds the crown for maximum raw speed.
However, <a href="https://github.com/borisdj/EFCore.BulkExtensions">EF Core Bulk Extensions</a> deliver fantastic performance while maintaining the ease of use that Entity Framework Core is known for.

The best choice hinges on your project's specific demands:

- Performance is all that matters? `SqlBulkCopy` is your solution.
<li>Need excellent speed and streamlined development? EF Core is a smart choice.

I leave it up to you to decide which option is best for your use case.

Hope this was helpful.

See you next week.

-->

---

<TagLinks />