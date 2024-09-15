---
lang: ko-KR
title: What are Type Predicates in TypeScript? Explained with Code examples
description: Article(s) > What are Type Predicates in TypeScript? Explained with Code examples
icon: iconfont icon-typescript
category: 
  - Node.js
  - TypeScript
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - typsecript
  - ts
head:
  - - meta:
    - property: og:title
      content: Article(s) > What are Type Predicates in TypeScript? Explained with Code examples
    - property: og:description
      content: What are Type Predicates in TypeScript? Explained with Code examples
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/what-are-type-predicates-in-typescript/.html
prev: /programming/ts/articles/README.md
date: 2024-09-10
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1725630140316/a95bd310-5465-4d0c-85fe-e42b91c2452e.jpeg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "TypeScript > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/ts/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="What are Type Predicates in TypeScript? Explained with Code examples"
  desc="Type predicates are an interesting syntactical feature in TypeScript. While they appear in the same place as return type annotations, they look more like short affirmative sentences than typical annotations. This gives you greater control over type c..."
  url="https://freecodecamp.org/news/what-are-type-predicates-in-typescript//"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1725630140316/a95bd310-5465-4d0c-85fe-e42b91c2452e.jpeg"/>

Type predicates are an interesting syntactical feature in TypeScript. While they appear in the same place as return type annotations, they look more like short affirmative sentences than typical annotations. This gives you greater control over type checking.

With the release of TypeScript 5.5, working with type predicates has become more intuitive now because it can infer them automatically in many cases. But if you're navigating slightly older code-bases, you're likely to encounter handwritten type predicates more often.

In this article, we will briefly explore what type predicates are and why they are useful. Let's start by looking at the problem they solve.

---

## The Problem

The best way to understand the usefulness of type predicates, I believe, is by noticing the problems that arise when we don't have them:

```ts
function isString(value: unknown): boolean {
  return typeof value === "string";
}

function padLeft(padding: number | string, input: string) {
  if (isString(padding)) {
    return padding + input;
        //   ^
        // string | number
  }
  return " ".repeat(padding) + input; // Opps type error here
                 //   ^
                 // string | number
}
```

Here, the return type of `isString` is set to `boolean`, and we use it in a function called `padLeft` to add padding to the left of an input string. The `padding` can be either a given string or a specified number of space characters.

You might be wondering why I hard-coded the return type to `boolean`. This is to illustrate the problem. If you don't add any return type annotation and use the latest version of TypeScript, you won't notice any issue here. For now, bear with me – we'll discuss the version-related differences shortly.

The function will work smoothly at runtime, but TypeScript cannot perform any type narrowing with `isString`. As a result, the type of `padding` remains `string | number` both inside and outside the `if` statement. This leads to a conflict with `repeat`'s expectation for its first argument, causing the type error.

---

## The Solution: Enter Type Predicates

Even if you are unfamiliar with the term predicate, you have likely used them before. Predicates in programming are simply functions that return a boolean to answer a yes/no question. Several JavaScript built-in array methods, such as `filter`, `find`, `every`, and `some`, use predicates to help with decision-making.

Type predicates are a way to make predicates more useful for type narrowing. We can fix the problem by using a type predicate as the return type:

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

Here the type predicate is `value is string`. It is saying three things:

- The function is a predicate. So TypeScript will show an error if you try to return anything other than a Boolean value.
- If it returns `true`, then `value` is of type string.
- If it returns `false`, then `value` is not of type string.

Type predicates let you create user-defined type guards. Type guards are logical checks that let you refine types to more specific types, aka narrow them. So, the above function is also a user-defined type guard.

Here is the full code:

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function padLeft(padding: number | string, input: string) {
  if (isString(padding)) {
    return padding + input;
        //   ^
        // string
  }
  return " ".repeat(padding) + input;
                 //   ^
                 // number
}
```

Here, TypeScript correctly narrows the type of `padding` inside the `if` statement and outside of it.

Now let's briefly look at how type predicates worked before TypeScript 5.5 and what this version has improved.

---

## Type Predicates Before TypeScript 5.5

In our previous example, if we don't specify any return type, it will be inferred as `boolean`:

```ts
function isString(value: unknown) {
  return typeof value === "string";
}

function padLeft(padding: number | string, input: string) {
  if (isString(padding)) {
    return padding + input;
        //   ^
        // string | number
  }
  return " ".repeat(padding) + input; // Opps type error here
                 //   ^
                 // string | number
}
```

As a result, we have the same error as when we manually wrote the return type `boolean`. [<FontIcon icon="iconfont icon-typescript"/>Here is the TypeScript playground link](https://typescriptlang.org/play/?ts=5.4.5#code/GYVwdgxgLglg9mABDAzgZSgJxmA5gCgDcBDAGxAFMAuRcAazDgHcwBKRAbwFgAoRRTBSghMSKAE8ADhTjBEJchUQBeVYgBEKLDlzqA3LwC+vXqEiwEiScQAmAGQrAo+azZs6aYEAFsARhUxEAB9ELWw8ABpkMEkQKBownXZuPmQ5fFQMcIJXdzxWZN5+fkFhUStbPNxEAGpo2KgDVONU0pEkdQ0AOkFpYmdcpNr6uKbDIA) for the above code fragment. Go and hover of the functions or variables for a better feeling of the types. Then see how writing the type predicate solves the problem.

If we don't specify the type predicate, using methods like `filter` can also result in incorrect type detection:

```ts
function isString(value: unknown) {
  return typeof value === "string";
}

const numsOrStrings = [1, 'hello', 2, 'world'];
//      ^
//    strings: (string | number)[]

const strings = numsOrStrings.filter(isString);
//      ^
//    strings: (string | number)[]
```

Now let's see how TypeScript 5.5 improves the situation.

---

## Type Predicates After TypeScript 5.5

One of the top features of TypeScript 5.5 is it can infer type predicates by analyzing the function body. So if you are using TypeScript 5.5 or later, you don't have to write the type predicate as the return type of `isString`. TypeScript does it for you, and code like what you see in the example below works perfectly fine:

```ts
function isString(value: unknown) {
  return typeof value === "string";
}

function padLeft(padding: number | string, input: string) {
  if (isString(padding)) {
    return padding + input;
        //   ^
        // string
  }
  return " ".repeat(padding) + input; // Opps type error here
                 //   ^
                 // number
}

const numsOrStrings = [1, 'hello', 2, 'world'];

const strings = numsOrStrings.filter(isString);
//      ^
//    strings: string[]

const numbers = numsOrStrings.filter((v) => !isString(v));
//      ^
//    numbers: number[]
```

I haven't yet found a situation where I'm unhappy with the automatic inference of type predicates. If you do find one, you can always write your own manually.

---

## Further Study

In this article, we briefly explored type predicates in TypeScript. If you're interested in learning more and understanding the edge cases, here are the official guides:

- <a href="https://typescriptlang.org/docs/handbook/release-notes/typescript-5-5.html#inferred-type-predicates">What's New → TypeScript 5.5 → Inferred Type Predicates</a>
- <a href="https://typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates">Handbook → Narrowing → Using type predicates</a>

Thanks for reading! See you next time!

Cover photo background is from [<FontIcon icon="fas fa-globe"/>Mona Eendra](https://unsplash.com/@monaeendra) on [<FontIcon icon="fas fa-globe"/>Unsplash](https://unsplash.com/photos/flowers-beside-yellow-wall-vC8wj_Kphak)

---

<TagLinks />