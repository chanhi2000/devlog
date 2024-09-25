---
lang: ko-KR
title: "How to Work with SQL Databases in Go – Different Approaches and Examples"
description: "Article(s) > How to Work with SQL Databases in Go – Different Approaches and Examples"
icon: fa-brands fa-golang
category: 
  - Go
  - SQL
  - SQLite
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - go
  - golang
  - sql
  - sqlite
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to Work with SQL Databases in Go – Different Approaches and Examples"
    - property: og:description
      content: "How to Work with SQL Databases in Go – Different Approaches and Examples"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/how-to-work-with-sql-databases-in-go.html
prev: /programming/go/articles/README.md
date: 2024-09-24
isOriginal: false
author: Alex Pliutau
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1727195039014/02f3c2f4-1eb7-4fd6-9701-15fdee2f6849.jpeg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Go > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/go/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "SQLite > Article(s)",
  "desc": "Article(s)",
  "link": "/data-science/sqlite/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How to Work with SQL Databases in Go – Different Approaches and Examples"
  desc="Different programming languages have their own ways of working with relational databases and SQL. Ruby on Rails has its Active Record, Python has SQLAlchemy, Typescript has Drizzle, and so on. Go is a language with quite a diverse standard library, w..."
  url="https://freecodecamp.org/news/how-to-work-with-sql-databases-in-go/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1727195039014/02f3c2f4-1eb7-4fd6-9701-15fdee2f6849.jpeg"/>

<!-- TODO: 작성 -->

<!--                             
<p>Different programming languages have their own ways of working with relational databases and SQL. Ruby on Rails has its <a target="_blank" href="https://guides.rubyonrails.org/active_record_basics.html">Active Record</a>, Python has <a target="_blank" href="https://www.sqlalchemy.org/">SQLAlchemy</a>, Typescript has <a target="_blank" href="https://orm.drizzle.team/">Drizzle</a>, and so on.</p>
<p>Go is a language with quite a diverse standard library, which includes the well-known <a target="_blank" href="https://pkg.go.dev/database/sql">database/sql</a> package. And it has its own libraries and solutions for working with SQL, that suit different needs, preferences, and teams.</p>
<p>In this article, we'll explore and compare the most popularly used Go packages that let you work with SQL. We’ll look at some hands-on examples, as well as the pros and cons. We’ll also briefly touch on the topic of database migrations and how to manage them in Go.</p>
<p>You'll get the most out of this article if you already have some experience with Go, SQL, and relational databases (doesn't matter which one).</p>
<h2 id="heading-table-of-contents">Table of Contents</h2>
<ul>
<li><p><a class="post-section-overview" href="#heading-demo-schema">Demo Schema</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-raw-sql-and-databasesql">Raw SQL and database/sql</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-raw-sql-and-sqlx">Raw SQL and sqlx</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-orms">ORMs</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-generated-go-code-from-sql-using-sqlc">Generated Go code from SQL using sqlc</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-database-migrations">Database Migrations</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-conclusion">Conclusion</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-resources">Resources</a></p>
</li>
</ul>
<h2 id="heading-demo-schema">Demo Schema</h2>
<p>For this article, we'll use a simple schema with three tables: <strong>users</strong>, <strong>posts</strong>, and <strong>blogs</strong>. For simplicity, we'll be using <strong>SQLite</strong> as our database engine. But if you want to choose another database engine, that shouldn’t be a problem, as all the libraries we'll be exploring support multiple SQL dialects.</p>
<p>Here is our database schema in SQL:</p>
<pre class="language-sql" tabindex="0"><code class="language-sql"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> users <span class="token punctuation">(</span>
    id <span class="token keyword">INTEGER</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> AUTOINCREMENT<span class="token punctuation">,</span>
    name <span class="token keyword">TEXT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    email <span class="token keyword">TEXT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">UNIQUE</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> blogs <span class="token punctuation">(</span>
    id <span class="token keyword">INTEGER</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> AUTOINCREMENT<span class="token punctuation">,</span>
    name <span class="token keyword">TEXT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    url <span class="token keyword">TEXT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">UNIQUE</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> posts <span class="token punctuation">(</span>
    id <span class="token keyword">INTEGER</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> AUTOINCREMENT<span class="token punctuation">,</span>
    title <span class="token keyword">TEXT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    content <span class="token keyword">TEXT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    user_id <span class="token keyword">INTEGER</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    blog_id <span class="token keyword">INTEGER</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>user_id<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> users <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">,</span>
    <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>blog_id<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> blogs <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>And here is its <a target="_blank" href="https://www.visual-paradigm.com/guide/data-modeling/what-is-entity-relationship-diagram/">Entity-Relationship Diagram (ERD)</a>:</p>
<p><img src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F84d65ca9-a6c1-4870-9b97-8c69fa1c82fd_2332x1284.png" alt="ERD displaying an illustration of the three tables: users, posts, and blogs" width="1456" height="802" loading="lazy"></p>
<h2 id="heading-raw-sql-and-databasesql">Raw SQL and database/sql</h2>
<p>Let’s imagine your application needs to perform the following action:</p>
<p><em>Find the users who have posted at least two articles, along with the total number of posts they've made.</em></p>
<p>In pure SQL, you could translate that into the following query:</p>
<pre class="language-sql" tabindex="0"><code class="language-sql"><span class="token keyword">SELECT</span> u<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token keyword">AS</span> post_count
<span class="token keyword">FROM</span> users <span class="token keyword">AS</span> u
<span class="token keyword">JOIN</span> posts <span class="token keyword">AS</span> p <span class="token keyword">ON</span> u<span class="token punctuation">.</span>id <span class="token operator">=</span> p<span class="token punctuation">.</span>user_id
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> u<span class="token punctuation">.</span>id
<span class="token keyword">HAVING</span> post_count <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre>
<p>A brief explanation of this query: we JOIN the users and posts tables, then GROUP by user_id. The HAVING clause filters the results to only include users who have posted at least 2 posts, and COUNT aggregates the amount of posts.</p>
<p>As mentioned above, Go provides a built-in package called <strong>database/sql</strong> with the necessary tools for working with SQL databases. It was developed with simplicity in mind, but supports all the necessary functionality such as transactions, parameterized queries, connection pool management, and so on.</p>
<p>As long as you’re comfortable writing your own queries and handling errors and results, it’s a great option. And some would say that it’s the best option, as there is no hidden logic and you can always copy the query and analyze it with EXPLAIN.</p>
<p>Here is how you can get the results of the query above in Go code using database/sql (some parts like connection are omitted):</p>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword">type</span> userStats <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  UserName  sql<span class="token punctuation">.</span>NullString
  PostCount sql<span class="token punctuation">.</span>NullInt64
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getUsersStats</span><span class="token punctuation">(</span>conn <span class="token operator">*</span>sql<span class="token punctuation">.</span>DB<span class="token punctuation">,</span> minPosts <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>userStats<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  query <span class="token operator">:=</span> <span class="token string">`SELECT u.name, COUNT(p.id) AS post_count
FROM users AS u
JOIN posts AS p ON u.id = p.user_id
GROUP BY u.id
HAVING post_count &gt;= ?;`</span>

  rows<span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span> minPosts<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
  <span class="token punctuation">}</span>
  <span class="token keyword">defer</span> rows<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  users <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>userStats<span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">for</span> rows<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> user userStats

    <span class="token keyword">if</span> err <span class="token operator">:=</span> rows<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">.</span>UserName<span class="token punctuation">,</span> <span class="token operator">&amp;</span>user<span class="token punctuation">.</span>PostCount<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>

    users <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> user<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> err <span class="token operator">:=</span> rows<span class="token punctuation">.</span><span class="token function">Err</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> users<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre>
<p>In this code we:</p>
<ul>
<li><p>Use the raw SQL query with an unnamed parameter, and pass the value of this parameter in <code>conn.Query()</code></p>
</li>
<li><p>Iterate over returned rows and manually scan each row into a struct <code>userStats</code> defined above. Note that the struct uses <code>sql.Null*</code> types to handle nullable values properly.</p>
</li>
<li><p>We need to manually check for possible errors and close the rows to release the resources.</p>
</li>
</ul>
<p>Pros:</p>
<ul>
<li><p>No additional abstraction/complexity added. Easy to debug raw SQL queries.</p>
</li>
<li><p>Performance. The database/sql package is quite performant.</p>
</li>
<li><p>Provides a good enough abstraction from different database backends.</p>
</li>
</ul>
<p>Cons:</p>
<ul>
<li><p>The code becomes a bit verbose as there is a need to scan each row, define proper types, and handle errors.</p>
</li>
<li><p>No compile-time type safety.</p>
</li>
</ul>
<p>You can find the full source for this article in <a target="_blank" href="https://github.com/plutov/packagemain/tree/master/sql-gorm-sqlx-sqlc">this Github Repository</a>.</p>
<h2 id="heading-raw-sql-and-sqlx">Raw SQL and sqlx</h2>
<p>Now let’s have a look at some external packages which are popular in the Go community.</p>
<p>If you’re already familiar with database/sql and like its simplicity, you may enjoy working with <a target="_blank" href="https://github.com/jmoiron/sqlx"><strong>sqlx</strong></a>. It’s built on top of the standard library and just extends its features.</p>
<p>It’s very easy to integrate existing codebases using database/sql with sqlx, because it leaves the underlying interfaces such as sql.DB, sql.Tx, and so on untouched.</p>
<p>The core features of sqlx are:</p>
<ul>
<li><p>Named parameters.</p>
</li>
<li><p>Easier row scanning into structs with embedded struct support.</p>
</li>
<li><p>Better separation between single and multiple rows by using the <code>Get()</code> and <code>Select()</code> methods.</p>
</li>
<li><p>Ability to bind a slice of values as a single parameter to an IN query.</p>
</li>
</ul>
<p>Here is how you can get the results of the query above using sqlx:</p>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword">type</span> userStats <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  UserName  <span class="token builtin">string</span> <span class="token string">`db:"name"`</span>
  PostCount <span class="token builtin">string</span> <span class="token string">`db:"post_count"`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getUsersStats</span><span class="token punctuation">(</span>conn <span class="token operator">*</span>sqlx<span class="token punctuation">.</span>DB<span class="token punctuation">,</span> minPosts <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>userStats<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  users <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>userStats<span class="token punctuation">{</span><span class="token punctuation">}</span>

  query <span class="token operator">:=</span> <span class="token string">`SELECT u.name, COUNT(p.id) AS post_count
FROM users AS u
JOIN posts AS p ON u.id = p.user_id
GROUP BY u.id
HAVING post_count &gt;= ?;`</span>

  <span class="token keyword">if</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">,</span> query<span class="token punctuation">,</span> minPosts<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> users<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre>
<p>In this code, we use the <code>Select()</code> method which handles the scanning of the rows. It also closes the rows automatically so we don’t have to deal with that.</p>
<p>The code is much shorter than the <strong>database/sql</strong> version, but it can hide some implementation details from us. For example, be aware that Select loads the whole set into memory at once.</p>
<p>Pros:</p>
<ul>
<li><p>Not that different from database/sql. Still easy to debug raw SQL queries.</p>
</li>
<li><p>A bunch of great features to reduce code verbosity.</p>
</li>
</ul>
<p>Cons:</p>
<ul>
<li>Same as database/sql</li>
</ul>
<h2 id="heading-orms">ORMs</h2>
<p><a target="_blank" href="https://en.wikipedia.org/wiki/Object-relational_mapping">Object-relational mapping</a> (ORM) is a technique (some call it a design pattern) of accessing a relational database by working with objects without having to craft complex SQL statements. It’s very popular in object-oriented languages – Ruby on Rails has its <a target="_blank" href="https://guides.rubyonrails.org/active_record_basics.html">Active Record</a>, Python has <a target="_blank" href="https://www.sqlalchemy.org/">SQLAlchemy</a>, Typescript has <a target="_blank" href="https://orm.drizzle.team/">Drizzle</a>, and so on.</p>
<p>And Go has <a target="_blank" href="https://github.com/go-gorm/gorm"><strong>GORM</strong></a>. In a nutshell, it lets you write queries as Go code by calling various methods on objects, which are then translated into SQL queries. But not only that, it has other features like database migrations, database resolvers, and more.</p>
<p>You may need to spend a bit of time initially setting up your GORM models, but later it can reduce a lot of boilerplate code.</p>
<p>Our simple schema and query example may not be the best to visualize the strengths and weaknesses of GORM, but should be enough to demonstrate how we can run a similar query and scan the results:</p>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  gorm<span class="token punctuation">.</span>Model
  ID    <span class="token builtin">int</span>
  Name  <span class="token builtin">string</span>
  Posts <span class="token punctuation">[</span><span class="token punctuation">]</span>Post
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Post <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  gorm<span class="token punctuation">.</span>Model
  ID     <span class="token builtin">int</span>
  UserID <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> userStats <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Name  <span class="token builtin">string</span>
  Count <span class="token builtin">int</span> <span class="token string">`gorm:"column:post_count"`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getUsersStats</span><span class="token punctuation">(</span>conn <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">,</span> minPosts <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>userStats<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> users <span class="token punctuation">[</span><span class="token punctuation">]</span>userStats

  err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">Select</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"COUNT(p.id) AS post_count"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">Joins</span><span class="token punctuation">(</span><span class="token string">"JOIN posts AS p ON users.id = p.user_id"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">"users.id"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">Having</span><span class="token punctuation">(</span><span class="token string">"post_count &gt;= ?"</span><span class="token punctuation">,</span> minPosts<span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">)</span><span class="token punctuation">.</span>Error

  <span class="token keyword">return</span> users<span class="token punctuation">,</span> err
<span class="token punctuation">}</span>
</code></pre>
<p>The SQL query generated by <strong>gorm</strong> will be roughly the same as the one we wrote manually in the database/sql variant.</p>
<p>To summarize the code above:</p>
<ul>
<li><p>We declared our User and Post models and extended it with the default <code>gorm.Model</code> struct. Later we can use these two models to build any queries we want by using gorm methods.</p>
</li>
<li><p>We also defined our small result type <code>userStats</code></p>
</li>
<li><p>We used methods such as <code>Select()</code>, <code>Joins()</code>, <code>Group()</code>, and <code>Having()</code> to produce the query we want.</p>
</li>
</ul>
<p>With such an easy example, it’s hard to see the potential issues – everything looks just right. But when your project becomes more complex, you will most definitely encounter some issues with that. Just look at the StackOverflow questions marked with <a target="_blank" href="https://stackoverflow.com/questions/tagged/go-gorm">go-gorm</a>.</p>
<p>It's good to be careful about using ORMs in performance-critical systems or where you need direct control over database interactions. This is because gorm uses a lot of reflection, and can add overhead and sometimes obscure what's happening at the database level. Any project where the functionality is wrapped in another huge layer runs the risk of increasing the overall complexity.</p>
<p>Pros:</p>
<ul>
<li><p>Abstraction from different database backends.</p>
</li>
<li><p>Big feature set: migrations, hooks, database resolvers, and more.</p>
</li>
<li><p>Saves quite a bit of tedious coding.</p>
</li>
</ul>
<p>Cons:</p>
<ul>
<li><p>Another layer of complexity and overhead. Hard to debug raw SQL queries.</p>
</li>
<li><p>Performance drawbacks. May not be as efficient for some critical applications.</p>
</li>
<li><p>Initial setup can require some time to configure all the models.</p>
</li>
</ul>
<h2 id="heading-generated-go-code-from-sql-using-sqlc">Generated Go Code from SQL using sqlc</h2>
<p>This nicely brings us to another unique approach of generating Go code from SQL queries using <a target="_blank" href="https://sqlc.dev/"><strong>sqlc</strong></a>. With sqlc, you write your schema and SQL queries, then use a CLI tool to generate Go code from it and then use the generated code to interact with databases.</p>
<p>This ensures that your queries are syntactically correct and type-safe. It’s ideal for those who prefer writing SQL but are looking for an efficient way to integrate it into a Go application.</p>
<p>sqlc needs to know your database schema and queries in order to generate code, so it requires some initial setup. We can add our schema and query above to the files <strong>schema.sql</strong> and <strong>query.sql</strong>. Then using the following config, we can generate the Go code:</p>
<pre class="language-yaml" tabindex="0"><code class="language-yaml"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">"2"</span>
<span class="token key atrule">sql</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">engine</span><span class="token punctuation">:</span> <span class="token string">"sqlite"</span>
    <span class="token key atrule">queries</span><span class="token punctuation">:</span> <span class="token string">"query.sql"</span>
    <span class="token key atrule">schema</span><span class="token punctuation">:</span> <span class="token string">"schema.sql"</span>
    <span class="token key atrule">gen</span><span class="token punctuation">:</span>
      <span class="token key atrule">go</span><span class="token punctuation">:</span>
        <span class="token key atrule">package</span><span class="token punctuation">:</span> <span class="token string">"main"</span>
        <span class="token key atrule">out</span><span class="token punctuation">:</span> <span class="token string">"."</span>
</code></pre>
<p>We also need to name our query in query.sql and mark the parameters:</p>
<pre class="language-sql" tabindex="0"><code class="language-sql"><span class="token comment">-- name: GetUsersStats :many</span>
<span class="token keyword">SELECT</span> u<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token keyword">AS</span> post_count
<span class="token keyword">FROM</span> users <span class="token keyword">AS</span> u
<span class="token keyword">JOIN</span> posts <span class="token keyword">AS</span> p <span class="token keyword">ON</span> u<span class="token punctuation">.</span>id <span class="token operator">=</span> p<span class="token punctuation">.</span>user_id
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> u<span class="token punctuation">.</span>id
<span class="token keyword">HAVING</span> post_count <span class="token operator">&gt;=</span> ?<span class="token punctuation">;</span>
</code></pre>
<p>After we run <code>sqlc generate</code>, we can use the following generated types and functions which make our code type-safe and quite short.</p>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword">func</span> <span class="token function">getUsersStats</span><span class="token punctuation">(</span>conn <span class="token operator">*</span>sql<span class="token punctuation">.</span>DB<span class="token punctuation">,</span> minPosts <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>GetUsersStatsRow<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  queries <span class="token operator">:=</span> <span class="token function">New</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>

  ctx <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> queries<span class="token punctuation">.</span><span class="token function">GetUsersStats</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> minPosts<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
<p>What makes sqlc special is that it understands your database schema, and uses that to validate the SQL you write. So your SQL queries are being validated against the actual database table, and sqlc will give you a compile-time error if something is wrong.</p>
<p>Pros:</p>
<ul>
<li><p>Type safety with generated Go code.</p>
</li>
<li><p>Still easy to debug SQL code.</p>
</li>
<li><p>Saves quite a bit of tedious coding.</p>
</li>
<li><p>Performance.</p>
</li>
</ul>
<p>Cons:</p>
<ul>
<li><p>Initial configuration setup for database schema and queries.</p>
</li>
<li><p>Not perfect static analysis. Sometimes you need to explicitly set the parameter type, and so on.</p>
</li>
</ul>
<p>If you’re good with SQL statements and prefer not to use much code to express your database interactions, this is your package.</p>
<h2 id="heading-database-migrations">Database Migrations</h2>
<p>Since we’re on the topic of SQL databases here, let’s briefly review how database migrations work in Go. The schema of the database almost always evolves over time and no one wants to do these changes manually. So there are tools developed to help with that.</p>
<p>The main goal of database migration tools is to ensure that all environments have the same schema and developers can easily apply the changes or roll them back.</p>
<p>I mentioned above that GORM can do the migrations as well if your project uses it as its ORM. If you use database/sql, sqlx or sqlc you’ll have to use separate projects to manage them.</p>
<p>The most popular projects are:</p>
<ul>
<li><p><a target="_blank" href="https://github.com/golang-migrate/migrate"><strong>golang-migrate</strong></a>: one of the most famous tools for handling database migrations. It supports many database drivers and migration sources, and takes a simple and direct approach for handling database migrations.</p>
</li>
<li><p><a target="_blank" href="https://github.com/pressly/goose"><strong>goose</strong></a>: another solid option when choosing a migration tool. It also has support for the main database drivers. Two of its main features are support for migrations written in Go and more control of the migration application process.</p>
</li>
</ul>
<p>You can then integrate these tools directly into your application or in CI/CD. But running them properly in CI/CD requires some setup (for example in case of deploying to Kubernetes), and I’ll dive deeper into that in my upcoming articles.</p>
<h2 id="heading-conclusion">Conclusion</h2>
<p>There are many well-written, tested, and supported database packages for Go that can help you with faster development and writing cleaner code. There is also the very powerful database/sql included in the standard library that can do most of your daily work.</p>
<p>But whether you should use it or not depends on your needs as a developer, your preferences, and your project. In this article, I tried to highlight the strengths and weaknesses of each option.</p>
<p>You can find the full source for this article on <a target="_blank" href="https://github.com/plutov/packagemain/tree/master/sql-gorm-sqlx-sqlc">this Github Repository</a>.</p>
<p>I’ll end this article with this famous meme:</p>
<p><img src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F04406f54-00f2-4c88-ad8c-5335499398a4_844x467.png" alt="https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F04406f54-00f2-4c88-ad8c-5335499398a4_844x467" width="844" height="467" loading="lazy"></p>
<h3 id="heading-resources">Resources</h3>
<ul>
<li><p><a target="_blank" href="https://pkg.go.dev/database/sql">database/sql</a></p>
</li>
<li><p><a target="_blank" href="https://github.com/jmoiron/sqlx">sqlx</a></p>
</li>
<li><p><a target="_blank" href="https://github.com/go-gorm/gorm">GORM</a></p>
</li>
<li><p><a target="_blank" href="https://sqlc.dev/">sqlc</a></p>
</li>
<li><p><a target="_blank" href="https://packagemain.tech/p/different-ways-of-working-with-sql">Discover more articles from packagemain.tech</a></p>
</li>
</ul>
-->

---

<TagLinks />