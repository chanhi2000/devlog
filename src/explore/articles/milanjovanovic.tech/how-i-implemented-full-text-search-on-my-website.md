---
lang: en-US
title: "How I Implemented Full-Text Search On My Website"
description: "Article(s) > How I Implemented Full-Text Search On My Website"
icon: iconfont icon-nextjs
category:
  - Article(s)
  - Node.js
tag:
  - blog
  - freecodecamp.org
  - node
  - nodejs
  - node-js
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How I Implemented Full-Text Search On My Website"
    - property: og:description
      content: "How I Implemented Full-Text Search On My Website"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/how-i-implemented-full-text-search-on-my-website.html
prev: /programming/js-node/articles/README.md
date: 2024-09-21
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_108.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Node.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-node/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How I Implemented Full-Text Search On My Website"
  desc="This article walks you through how I used Lunr.js to add powerful search capabilities to a Next.js static site, dealing with challenges like client-side processing and optimizing for performance along the way."
  url="https://milanjovanovic.tech/blog/how-i-implemented-full-text-search-on-my-website"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_108.png"/>

So, I've got this blog I've been running for a couple of years now. It's a Next.js and TypeScript static site, all optimized for SEO. Sounds pretty standard, right? Well, it was, until I ran into a problem.

As my content grew, finding specific articles became a real pain. It wasn't just me - readers were struggling too. What's the point of writing all this stuff if no one can find it when they need it?

That's when I decided to look into full-text search. Now, implementing full-text search on a static site isn't exactly straightforward. It's not like you can just slap a database on there and call it a day. You've got to get creative.

In this article, I'll walk you through how I turned my site's search from useless to actually functional.

---

## The Old Search Approach

Here's how the search function worked before:

1. I would generate a JSON document at build time containing each blog post's metadata. This document contains the data needed to perform the search and render the results.
2. When searching the articles, I would fetch the JSON document on the client and perform the search. Since this document changes only once a week, I can cache it on the client to improve performance.

Here's the code that would generate the search data JSON document:

```jsx
export const generateSearchData = () => {
  const posts = getAllPosts();

  const searchData = posts.map((post) => ({
    slug: post.meta.slug,
    title: post.meta.title,
    excerpt: post.meta.excerpt,
    coverImage: post.meta.coverImage,
    date: post.meta.date,
    searchableContent:
      `${post.meta.title} ${post.meta.excerpt} ${post.content}`.toLowerCase()
  }));

  fs.mkdirSync('./search', { recursive: true });
  fs.writeFileSync(
    path.join(process.cwd(), 'search', 'search-data.json'),
    JSON.stringify(searchData)
  );
};
```

And then the search function is pretty simple (but not very smart):

```jsx
export const search(keyword) = () => {
  const res = await fetch('/search/search-data.json');

  const searchData = await res.json();

  return searchData.filter((p) =>
    p.searchableContent.includes(keyword.toLowerCase())
  );
}
```

This approach has a few issues:

- The search data JSON document is large (861KB) and will continue to grow
- It's slow on large datasets and won't scale well
- It uses an exact match to find results
- It doesn't rank results by relevance

I wasn't happy with this, so here's how I implemented a much better solution.

---

## Introducing Full-Text Search

To fix these problems, I turned to **full-text search** using [<FontIcon icon="fas fa-globe"/>Lunr.js](https://lunrjs.com/). But what exactly is full-text search?

Full-text search is a technique that allows fast and efficient searching of large volumes of text by creating an index of all words in a document collection and returning ranked results based on relevance to the search query.

Full-text search works by:

1. **Indexing**: Breaking down text into individual words (tokens)
2. **Stemming**: Reducing words to their base form (e.g., "running" to "run")
3. **Ranking**: Scoring results based on relevance

Another common operation is stop word removal. Common words that don't add much meaning (like "the", "and", "is") are often removed to save space and improve relevance.

At the heart of full-text search is an [<FontIcon icon="fa-brands fa-wikipedia-w"/>inverted index](https://en.wikipedia.org/wiki/Inverted_index). It's a data structure that maps each unique term to the documents containing it. It's "inverted" because it goes from terms to documents, rather than documents to terms.

When searching, results are often ranked using [<FontIcon icon="fa-brands fa-wikipedia-w"/>TF-IDF](https://en.wikipedia.org/wiki/Tf-idf) (Term Frequency-Inverse Document Frequency). This gives higher scores to terms that are frequent in a document but rare across all documents.

That's the rundown on full-text search. Let's see how to implement it.

---

## Implementing Full-Text Search

I chose Lunr.js because it's lightweight and works great for static websites. No server required.

I updated the `generateSearchData` function to create and store a full-text search index. This function runs once at build time, so it's not expensive.

```jsx
export const generateSearchData = () => {
  const posts = getAllPosts();

  // Generate search data as before.

  const index = lunr(function () {
    this.ref('slug');
    this.field('title', { boost: 10 });
    this.field('content', { boost: 5 });

    searchData.forEach((doc) => {
      this.add(doc);
    });
  });

  // Store search data as before.

  // And store the search index.
  fs.writeFileSync(
    path.join(process.cwd(), 'search', 'search-index.json'),
    JSON.stringify(index)
  );
};
```

I'm **boosting** the title with a factor of 10 and the content with a factor of 5. If the search term matches the title, it will have a higher relevance score.

The downside (for now) is that the index file is big, 2.5MB. If I were to download this on the client every time, the costs would quickly add up. I have 100,000 unique visitors per month, which would equate to `250GB` of network egress.

Now, I have to update the search function to use the full-text index:

```jsx
export const search(keyword) = () => {
  const res = await fetch('/search/search-data.json');
  const searchData = await res.json();

  const res = await fetch('/search/search-index.json');
  const searchIndex = lunr.Index.load(indexJson);

  return searchIndex
    .search(keyword)
    .map((result) => {
      const post = searchData?.find((post) => post.slug === result.ref);
      return post ? { ...post, score: result.score } : null;
    })
    .filter((result) => result !== null)
    .sort((a, b) => b.score - a.score);
}
```

What's happening here:

- We're loading the search index from a JSON document using `lunr.Index.load`
- The index has a `search` function allowing us to perform full-text search
- We're expanding the result to also include the relevance score

This allows me to sort the search results based on relevance instead of chronologically.

Here's what the old search implementation returns when searching for "resilience":

![The web page showing search results for the keyword 'resilience' with the most relevant result highlighted.](https://milanjovanovic.tech/blogs/mnw_108/old_search.png?imwidth=1920)

The most relevant article is at the fourth spot, sorted chronologically. You can see how this isn't a good user experience.

But with full-text search, when you search for a keyword like "resilience", you get nicer results:

![The web page showing full-text search results for the keyword 'resilience' with the most relevant result highlighted.](https://milanjovanovic.tech/blogs/mnw_108/full_text_search.png?imwidth=1920)

I also added a relevance score next to each article because it looks cool.

---

## Optimizing The Search

Now, I have a powerful search, but the index was huge (a whopping 2.5MB) and will continue to grow. The search data file is also 861KB.

Enter [<FontIcon icon="fa-brands fa-wikipedia-w"/>Brotli](https://en.wikipedia.org/wiki/Brotli) compression:

- I compressed the search index and data using Brotli on the server side
- In the browser, I decompress the files before using them to perform the search

```jsx
import { compress } from 'brotli';

export const generateSearchData = () => {
  // Create the search data and index

  fs.writeFileSync(
    path.join(process.cwd(), 'search', 'search-index.br'),
    compress(Buffer.from(JSON.stringify(index)))
  );
  fs.writeFileSync(
    path.join(process.cwd(), 'search', 'search-data.br'),
    compress(Buffer.from(JSON.stringify(searchData)))
  );
};
```

The results:

- 2.5MB → 193KB **(-92%)**
- 861KB → 180KB **(-79%)**

If you want to learn more about compression algorithms, check out this [**article about response compression**](/explore/articles/milanjovanovic.tech/response-compression-in-aspnetcore.md).

After fetching the compressed search data and full-text index on the client, I cache them for subsequent searches.

The searches are lightning-fast now, and the results are more relevant.

---

## Server-Side Options for Full-Text Search

While Lunr.js works great for my static site, larger apps with more data need a robust full-text search solution. So, here are some some server-side options you could explore.

[<FontIcon icon="fas fa-globe"/>Lucene](https://lucene.apache.org/) is the foundation of many search engines. It's written in Java but has ports to other languages. Lucene provides robust full-text indexing and search capabilities. It is also highly efficient and customizable, making it a popular choice for developers who need fine-grained control over their search functionality.

[<FontIcon icon="fas fa-globe"/>Apache Solr](https://solr.apache.org/) builds on top of Lucene, offering additional features like distributed indexing, replication, and load-balanced querying. Solr includes powerful capabilities such as faceting and highlighting, which can greatly enhance the search experience.

If you're already using [<FontIcon icon="iconfont icon-postgresql"/>PostgreSQL](https://postgresql.org/), the built-in [<FontIcon icon="iconfont icon-postgresql"/>full-text search](https://postgresql.org/docs/current/textsearch.html) is worth considering. PostgreSQL uses its own text search engine, which supports multiple languages and custom dictionaries. While not as feature-rich as dedicated search engines, it can be a convenient option for applications that want to keep their stack simple.

I've been tinkering with PostgreSQL [<FontIcon icon="fas fa-globe"/>full-text search using EF Core](https://npgsql.org/efcore/mapping/full-text-search.html). Here's what a full-text search query looks like:

```jsx
var blogs = context
    .BlogPosts
    .Where(b =>
        EF.Functions.ToTsVector("english", b.Title + " " + b.Excerpt + " " + b.Content)
            .Matches(EF.Functions.PhraseToTsQuery("english", searchTerm)))
    .Select(b => new
    {
        b.Slug,
        b.Title,
        b.Excerpt,
        b.Date,
        Rank = EF.Functions.ToTsVector("english", b.Title + " " + b.Excerpt + " " + b.Content)
            .Rank(EF.Functions.PhraseToTsQuery("english", searchTerm))
    })
    .OrderByDescending(b => b.Rank)
    .ToList();
```

But I'll have to write a dedicated article to cover this, so let's wrap it up.

---

## Wrapping Up

The old search functionality was, frankly, embarrassing.

It was slow, dumb as a rock, and about as useful as a chocolate teapot.

Now? It's actually not half bad.

- Searches are lightning-fast
- Results are more relevant
- The user experience is much smoother

I'm not gonna lie, there was a moment of frustration when I thought about giving up. But I'm glad I stuck with it. There's something satisfying about building it yourself, you know?

It might not be pretty, but it works. And sometimes, that's all that matters.

The Brotli compression bit was a pleasant surprise. I thought I'd end up with a massive index file that would make mobile users cry. But nope, it all works smoothly. Go figure.

Have you tried implementing search on your site? How'd it go?

That's all for today.

See you next week.

---

<TagLinks />