---
lang: ko-KR
title: "Availability checking in Swift: backwards compatibility the smart way"
description: "Article(s) > Availability checking in Swift: backwards compatibility the smart way"
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - ios
  - xcode
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Availability checking in Swift: backwards compatibility the smart way"
    - property: og:description
      content: "Availability checking in Swift: backwards compatibility the smart way"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/new-syntax-swift-2-availability-checking.html
prev: /programming/swift/articles/README.md
date: 2019-09-23
isOriginal: false
cover: https://hackingwithswift.com/uploads/swift-evolution-5.jpg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/swift/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="HACKING WITH SWIFT"
  desc="Availability checking in Swift: backwards compatibility the smart way"
  url="https://hackingwithswift.com/new-syntax-swift-2-availability-checking"
  logo="https://hackingwithswift.com/favicon.svg"
  preview="https://hackingwithswift.com/uploads/swift-evolution-5.jpg"/>

Availability checking in Swift gives us the ability to ask whether the user is running a specific or newer version of an operating system, and run code only if that test passes. This allows us to use the latest functionality from iOS, macOS and so on, while also degrading gracefully for users on older iOS versions.

---

## How it used to be: manual version checking

Without Swift's availability checking, you would have to check for version compatibility by hand. For example, if you want to use `UICollectionViewCompositionalLayout` in your app but wanted to support users on iOS 12 and earlier, you'd need to do a run-time operating system version number check and use that new layout only if it were supported. For example:

```swift
if NSProcessInfo().isOperatingSystemAtLeastVersion(NSOperatingSystemVersion(majorVersion: 13, minorVersion: 0, patchVersion: 0)) {
    print("Create the collection view!")
}
```

This approach was fraught with problems, not least trying to remember when each component was introduced. Worse, what if you missed some code? If your app tried to use iOS 13 code on iOS 12, or iOS 12 code on iOS 11, it would just crash, which meant developers who were keen use the latest and greatest APIs had to spend a lot of time adding checks to their code, and ensuring it was crash-free.

---

## Swift's solution: Automatic operating system API availability checking

Way back in Swift 2, Apple introduced API availability checking. If you set your app's Deployment Target to a lower iOS release than the base SDK, Xcode will automatically scan every API you use to make sure it's available in your lowest deployment target version. This information has been in Apple's API headers for years, but it's only now being exposed to the compiler. What it means is that if your app compiles, you can be guaranteed it doesn't call any code that can't run because of missing APIs.

By default, you don't need to do anything: Swift will compare your actual usage against your minimum deployment target, and if it finds any unavailable API then you'll get an error – and *that's* when the work begins.

Returning to our example, if you *have* used `UICollectionViewCompositionalLayout` and your deployment target is set to iOS 12.0, you'll get a compile error because stack views aren't available before 13.0. The solution is to tell Xcode you want certain code to execute only on iOS 13.0 or later, like this:

```swift
if #available(iOS 13, *) {
    // use UICollectionViewCompositionalLayout
} else {
    // show sad face emoji
}
```

In that code, `#available` is going to check whether we're on iOS 13 or later, or any other unknown platforms that might get announced in the future – that's the * at the end, and it's required. And that's it: all the code you'll put in place of "// use UICollectionViewCompositionalLayout" effectively has elevated rights to use iOS 13.0-only technology, whether that's classes, methods or enums.

If code inside a method should only be run on certain iOS versions, you can also use `#available` with `guard` to produce code like this:

```swift
guard #available(iOS 13, *) else {
    return
}
```

The power of `#available` is that the compiler can now check and enforce API usage on older operating systems, which previously was entirely human – it's a huge improvement, and one I know will catch on quickly.

---

## Marking whole methods and classes with @available

As you just saw, you can use `if #available` to run version-specific code in small blocks. But what if whole methods are off limits? Or perhaps even whole classes? Swift has these scenarios covered too, using the `@available` attribute.

`@available` works similarly to `#available` in that you specify the iOS release you want to target, and then Xcode handles the rest. For example:

```swift
@available(iOS 13, *)
func useCompositionalLayout() {
    // use UICollectionViewCompositionalLayout
}
```

If your deployment target is iOS 12, you can't call that `useCompositionalLayout()` method without some availability checking first. You can stack up these checks if you need to, for example:

```swift
@available(iOS 11, *)
func iOS11Work() {
    // do stuff

    if #available(iOS 12, *) {
        iOS12Work()
    }
}

@available(iOS 12, *)
func iOS12Work() {
    // do stuff
    if #available(iOS 13, *) {
        iOS13Work()
    }
}

@available(iOS 13, *)
func iOS13Work() {
    // do stuff
}
```

Each time, there's effectively a privilege elevation so you can use version-limited APIs.

For the ultimate in restrictions, you can also mark whole classes as being available only in a specific iOS release or later – just move the `@available` code wherever you want it.

There is one last neat feature about these availability checks in Swift: you no longer need to worry about "Required" and "Optional" frameworks – the compiler sorts all that out for you now. Hurray for developer productivity!


---

<TagLinks />