---
lang: ko-KR
title: "Fixing ”Unable to dequeue a cell with identifier”"
description: "Article(s) > Fixing ”Unable to dequeue a cell with identifier”"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.10
  - ios
  - ios-6.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Fixing ”Unable to dequeue a cell with identifier”"
    - property: og:description
      content: "Fixing ”Unable to dequeue a cell with identifier”"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/fixing-unable-to-dequeue-a-cell-with-identifier.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Fixing ”Unable to dequeue a cell with identifier” | UIKit - free Swift example code",
  "desc": "Fixing ”Unable to dequeue a cell with identifier”",
  "link": "https://hackingwithswift.com/example-code/uikit/fixing-unable-to-dequeue-a-cell-with-identifier",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!--
This error usually means there's a problem with your cell prototypes. There are two main reasons why table views fail to return cells, but they give different error messages. If you get an error like this:

```swift
Terminating app due to uncaught exception 'NSInternalInconsistencyException', reason: 'unable to dequeue a cell with identifier Cell - must register a nib or a class for the identifier or connect a prototype cell in a storyboard'
```

…it means that your call to `dequeueReusableCell(withIdentifier:)` is failing, which is usually caused by having no prototype cells with the identifier you requested.

First: check that you have a prototype cell registered. By default you should have one in the storyboard, but if you created your own table view then you might have moved things around. You might also have registered one in code.

Second: check that your spelling of the identified is correct. It's "Cell" by default, in the code and in the storyboard, and these two things need to match in order for everything to work.

You can verify the error by placing a breakpoint in your `cellForRowAtIndexPath` method. For example, if you have code like this:

```swift
override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    let cell = tableView.dequeueReusableCell(withIdentifier: "Cell")!
    let object = objects[indexPath.row]
    cell.textLabel?.text = object
    return cell
}
```

…then you should set the breakpoint on the `let object =` line. If the problem is that `tableView.dequeueReusableCell(withIdentifier:)` is failing, your breakpoint won't be hit.

If you're using modern Xcode templates where you get a prototype cell made for you, you should probably be using this instead:

```swift
let cell = tableView.dequeueReusableCell(withIdentifier: "Cell", for: indexPath)
```

You should then ensure a prototype cell exists in your tableview with that identifier – double check the name, and make sure you've typed it into the "Identifier" box and not "Class" or something else.

If you aren't using an Xcode template, use that line of code anyway then register your own re-use identifier like this:

```swift
tableView.register(UITableViewCell.self, forCellReuseIdentifier: "Cell")
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/fixing-failed-to-obtain-a-cell-from-its-datasource">Fixing "Failed to obtain a cell from its DataSource" 
/example-code/language/fixing-class-viewcontroller-has-no-initializers">Fixing "Class ViewController has no initializers" 
/example-code/language/fixing-ambiguous-reference-to-member-when-using-ceil-or-round">Fixing "Ambiguous reference to member when using ceil or round"</a>
-->

:::

---

<TagLinks />