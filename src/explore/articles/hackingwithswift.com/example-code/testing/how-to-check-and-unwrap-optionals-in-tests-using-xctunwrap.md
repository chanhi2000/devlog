---
lang: ko-KR
title: "How to check and unwrap optionals in tests using XCTUnwrap()"
description: "Article(s) > How to check and unwrap optionals in tests using XCTUnwrap()"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to check and unwrap optionals in tests using XCTUnwrap()"
    - property: og:description
      content: "How to check and unwrap optionals in tests using XCTUnwrap()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/testing/how-to-check-and-unwrap-optionals-in-tests-using-xctunwrap.html
date: 2019-10-15
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Testing - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/testing/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to check and unwrap optionals in tests using XCTUnwrap() | Testing - free Swift example code",
  "desc": "How to check and unwrap optionals in tests using XCTUnwrap()",
  "link": "https://hackingwithswift.com/example-code/testing/how-to-check-and-unwrap-optionals-in-tests-using-xctunwrap",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
When writing tests, it’s common to want to unwrap an optional before checking it for a particular value. `XCTUnwrap()` does exactly that for us: it attempts to unwrap the optional, but will throw an error (and thus fail the test) if the optional is nil.

For example, if you have a `User` struct with a `getAuthenticationToken()` method that returns an optional string, you can use `XCTUnwrap()` like this:

```swift
func testTokenGenerationSucceeds() throws {
    let user = User()
    let token = try XCTUnwrap(user.getAuthenticationToken())
    XCTAssertEqual(token.count, 40)
}
```

That test is marked with `throws`, which allows us to call `XCTUnwrap()` and propagate any errors if it finds our optional is empty.

This approach is cleaner than what we might have written previously:

```swift
func testTokenGenerationSucceeds2() {
    let user = User()
    if let token = user.getAuthenticationToken() {
        XCTAssertEqual(token.count, 40)
    } else {
        XCTFail("Failed to generate valid token.")
    }
}
```

It’s worth adding that in trivial cases such as this one, it’s possible to compare optionals with non-optionals in less code, like this:

```swift
func testTokenGenerationSucceeds3() throws {
    let user = User()
    XCTAssertEqual(user.getAuthenticationToken()?.count, 40)
}
```

However, things aren’t so straightforward when you need to work with optional chaining in a longer test – that’s really where `XCTUnwrap()` will come into its own.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/example-code/language/when-is-it-safe-to-force-unwrap-optionals">When is it safe to force unwrap optionals?</a>
-->

:::

---

<TagLinks />