---
lang: ko-KR
title: "How to use SFSafariViewController to browse a web page"
description: "Article(s) > How to use SFSafariViewController to browse a web page"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
  - ios  
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to use SFSafariViewController to browse a web page"
    - property: og:description
      content: "How to use SFSafariViewController to browse a web page"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/32/03-how-to-use-sfsafariviewcontroller-to-browse-a-web-page.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/read/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to use SFSafariViewController to browse a web page | Hacking with iOS",
  "desc": "How to use SFSafariViewController to browse a web page",
  "link": "https://hackingwithswift.com/read/32/3/how-to-use-sfsafariviewcontroller-to-browse-a-web-page",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

You just learned about automatic cell resizing, `NSAttributedString` and Dynamic Type, so you deserve a pat on the back. But there's more: I want to introduce you to Yet Another Way To Embed Web Pages In Your App. 

When a user taps on one of our table rows, we want to show the Hacking with Swift project that matches their selection. In Ye Olden Days we would do this either with `UIWebView` or `WKWebView`, adding our own user interface to handle navigation. But this had a few problems: everyone's user interface was different, features such as cookies and Auto Fill were unavailable for security reasons, and inevitably users looked for an "Open in Safari" button because that was what they trusted.

Apple fixed all these problems in iOS 9 using a new class called `SFSafariViewController`, which effectively embeds all of Safari inside your app using an opaque view controller. That is, you can't style it, you can't interact with it, and you certainly can't pull any private data out of it, and as a result `SFSafariViewController` can take advantage of the user's secure web data in ways that `UIWebView` and `WKWebView` never could.

What's more, Apple builds powerful features right into `SFSafariViewController`, so you get things like content blocking free of charge – and users get consistent features, consistent UI, and consistent security. Everybody wins!

`SFSafariViewController` is not part of UIKit, so you need to import a new framework to use it. Add this to the existing `import UIKit` line at the top of <FontIcon icon="fa-brands fa-swift"/>`ViewController.swift`:

```swift
import SafariServices
```

We're going to create a method that accepts an integer and shows the matching tutorial. All the Hacking with Swift tutorials are numbered from 1 upwards, so we can match that up to our `projects` array (which is zero-based) just by adding 1. We'll convert that to a `URL` then pass that to a new `SFSafariViewController` to show to the user.

When working with `SFSafariViewController` there are two things you need to know. First, you can either create it just with a URL or with a URL and some configuration settings. For example, you can enable reader mode if it’s available (Apple's name for a text-only view of web pages), or disable the bar collapsing behavior when the user scrolls. Reader mode doesn't work on Hacking with Swift, but I'm including it here so you can see how it works.

Second, the `SFSafariViewController` is dismissed when a user taps a Done button in its user interface. This calls a `safariViewControllerDidFinish()` method on the delegate of the `SFSafariViewController`, which you can use to run any code to handle picking up where the user left off. We won't be using it here, but if you want it in your own projects make sure you conform to the `SFSafariViewControllerDelegate` protocol.

Bringing all that together, let's write some code. Go ahead and add this new method somewhere in the class:

```swift
func showTutorial(_ which: Int) {
    if let url = URL(string: "https://www.hackingwithswift.com/read/\(which + 1)") {
        let config = SFSafariViewController.Configuration()
        config.entersReaderIfAvailable = true

        let vc = SFSafariViewController(url: url, configuration: config)
        present(vc, animated: true)
    }
}
```

You can see how easy it is to control reader mode – just set the `entersReaderIfAvailable` flag to be true or false as needed in the configuration object.

There's only one more thing to do to finish this stage of the project: when any table row is tapped, we need to call that new `showTutorial()` method and pass in the index path of the row so the correct tutorial can be shown. This is as simple as adding a `didSelectRowAt` method like this:

```swift
override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
    showTutorial(indexPath.row)
}
```

That's it for the new `SFSafariViewController` – easy, huh?

---

<TagLinks />