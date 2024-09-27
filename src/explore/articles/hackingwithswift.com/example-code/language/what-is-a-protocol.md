---
lang: ko-KR
title: "What is a protocol?"
description: "Article(s) > What is a protocol?"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What is a protocol?"
    - property: og:description
      content: "What is a protocol?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-a-protocol.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What is a protocol? | Language - free Swift example code",
  "desc": "What is a protocol?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-a-protocol",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
A protocol is a collection of methods that describe a specific set of similar actions or behaviors. I realize that probably didn't help much, so I'll try to rephrase in more detail: how many rows should a table view have? How many sections? What should the section titles be? Can the user move rows? If so, what should happen when they do?

All those questions concern a similar thing: data going into a `UITableView`. As a result, they all go into a single protocol, called `UITableViewDataSource`. Some of the behaviors inside that protocol are optional. For example, `canEditRowAt` is optional and defaults to true if you don't provide a value yourself.

When you work in Swift you will frequently have to make your class conform to a protocol. This is done by adding the protocol name to your class definition, then filling in any required methods, like this:

```swift
class ViewController: UIViewController, UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // request 10 rows
        return 10
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // return a dummy table view cell; your own code should use prototype cells or similar
        return UITableViewCell()
    }
}
```

When you do that – when you promise Swift that your class conforms to a protocol – you can be darn sure it checks to make sure you're right. And that means it will refuse to build your code if you haven't added support for all the required methods, which is a helpful security measure.

-->

::: details Similar solutions…

<!--
/example-code/language/what-is-protocol-oriented-programming">What is protocol-oriented programming? 
/example-code/language/what-is-a-protocol-associated-type">What is a protocol associated type? 
/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements” 
/example-code/language/what-are-protocol-extensions">What are protocol extensions? 
/example-code/language/how-to-constrain-a-protocol-associated-type">How to constrain a protocol associated type</a>
-->

---

<TagLinks />