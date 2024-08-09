---
lang: ko-KR
title: How to make async command-line tools and scripts
description: Article(s) > How to make async command-line tools and scripts
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to make async command-line tools and scripts
    - property: og:description
      content: How to make async command-line tools and scripts
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-make-async-command-line-tools-and-scripts.html
date: 2021-09-23
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift Concurrency by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/concurrency/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to make async command-line tools and scripts | Swift Concurrency by Example",
  "desc": "How to make async command-line tools and scripts",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-make-async-command-line-tools-and-scripts", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you’re writing a command-line tool, you can use `async` in conjunction with the `@main` attribute to launch your app into an async context immediately. To do this, first create the static `main()` method as you normally would with `@main`, then add `async` to it. You can optionally also add `throws` if you don’t intend to handle errors there.

For example, we could write a small command-line tool that fetches data from a URL and prints it out:

```swift
@main
struct UserFetcher {
    static func main() async throws {
        let url = URL(string: "https://hws.dev/users.csv")!

        for try await line in url.lines {
            print("Received user: \(line)")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-make-async-command-line-tools-and-scripts-1.zip)

::: tip

Just like using the `@main` attribute with a synchronous `main()` method, you should not include a <FontIcon icon="fa-brands fa-swift"/>`main.swift` file in your command-line project.

:::

Using `async` and `@main` together benefits from the full range of Swift concurrency features. Behind the scenes, Swift will automatically create a new task in which it runs your `main()` method, then terminate the program when that task finishes.

Although it doesn’t work in the current Xcode release, the goal is for Swift to support async calls in top-level code. This would mean you could use <FontIcon icon="fa-brands fa-swift"/>`main.swift` files and remove most of the code in the previous sample – you could just go ahead and make async calls outside of a function.

::: details Similar solutions…

```component VPCard
{
  "title": "How to call an async function using async let | Swift Concurrency by Example",
  "desc": "How to call an async function using async let",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-call-an-async-function-using-async-let.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What’s the difference between async let, tasks, and task groups? | Swift Concurrency by Example",
  "desc": "What’s the difference between async let, tasks, and task groups?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Why can’t we call async functions using async var? | Swift Concurrency by Example",
  "desc": "Why can’t we call async functions using async var?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/why-cant-we-call-async-functions-using-async-var.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use continuations to convert completion handlers into async functions | Swift Concurrency by Example",
  "desc": "How to use continuations to convert completion handlers into async functions",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create and use async properties | Swift Concurrency by Example",
  "desc": "How to create and use async properties",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-create-and-use-async-properties.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />