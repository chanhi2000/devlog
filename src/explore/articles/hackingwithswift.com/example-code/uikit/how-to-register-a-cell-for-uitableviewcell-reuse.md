---
lang: ko-KR
title: "How to register a cell for UITableViewCell reuse"
description: "Article(s) > How to register a cell for UITableViewCell reuse"
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
      content: "Article(s) > How to register a cell for UITableViewCell reuse"
    - property: og:description
      content: "How to register a cell for UITableViewCell reuse"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-register-a-cell-for-uitableviewcell-reuse.html
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
  "title": "How to register a cell for UITableViewCell reuse | UIKit - free Swift example code",
  "desc": "How to register a cell for UITableViewCell reuse",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-register-a-cell-for-uitableviewcell-reuse",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!--
Reusing table view cells has been one of the most important performance optimizations in iOS ever since iOS 2.0, but it was only with iOS 6.0 that the API got cleaned up a little with the addition of the `register()` method.

There are two variants to `register`, but both take a parameter called `forCellReuseIdentifier`, which is a string that lets you register different kinds of table view cells. For example, you might have a reuse identifier "DefaultCell", another one called "Heading cell", another one "CellWithTextField", and so on. Re-using different cells this way helps save system resources.

If you want to use `register()` with a Swift class, you provide a table view cell class as its first parameter. This is useful if your cell is defined entirely in code. As an example, this uses the default `UITableViewCell` class:

```swift
tableView.register(UITableViewCell.self, forCellReuseIdentifier: "DefaultCell")
```

The other option is to use `register()` with an Interface Builder nib file, like this:

```swift
tableView.register(UINib(nibName: "yourNib", bundle: nil), forCellReuseIdentifier: "CellFromNib")
```

Regardless of which option you choose, you can dequeue your cells like this:

```swift
func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    let cell = tableView.dequeueReusableCell(withIdentifier: "DefaultCell")!
    return cell
}
```

If there aren't any cells created that can be reused, iOS will automatically create them – this API really is very easy.

Although knowing the above code is definitely useful, if you're using storyboards you will find it easier to create prototype cells and give them a reuse identifier directly inside Interface Builder.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-register-a-cell-for-uicollectionview-reuse">How to register a cell for UICollectionView reuse 
/example-code/uikit/why-can-i-not-register-for-push-notifications">Why can I not register for push notifications? 
/example-code/uikit/fixing-unable-to-dequeue-a-cell-with-identifier">Fixing "Unable to dequeue a cell with identifier" 
/example-code/uikit/fixing-failed-to-obtain-a-cell-from-its-datasource">Fixing "Failed to obtain a cell from its DataSource" 
/example-code/uikit/how-to-add-a-button-to-a-uitableviewcell">How to add a button to a UITableViewCell</a>
-->

:::

---

<TagLinks />