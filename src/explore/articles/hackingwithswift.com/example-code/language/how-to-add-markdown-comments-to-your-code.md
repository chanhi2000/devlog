---
lang: ko-KR
title: "How to add Markdown comments to your code"
description: "Article(s) > How to add Markdown comments to your code"
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
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to add Markdown comments to your code"
    - property: og:description
      content: "How to add Markdown comments to your code"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-add-markdown-comments-to-your-code.html
date: 2021-06-10
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
  "title": "How to add Markdown comments to your code | Language - free Swift example code",
  "desc": "How to add Markdown comments to your code",
  "link": "https://hackingwithswift.com/example-code/language/how-to-add-markdown-comments-to-your-code",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Swift has special syntax that lets you embed Markdown-formatted text into your source code, which gets parsed by Xcode and displayed in the Quick Help system pane. Using specially formatted code comments, you can document what parameters should be passed in, what the return value will contain, any errors that can be thrown, and more.

This documentation is *not* the same as the regular inline comments you add to particular code. These special comments are placed before your functions and classes and are used to show information in the Quick Help pane, as well as in the autocomplete popup, and are formatted so that both humans and Xcode can read them.

Markdown comments start with `/**` and end with `*/`, like this:

```swift
/**
Call this function to grok some globs.
*/
func myGreatFunction() {
    // do stuff
}
```

In this text you can use a selection of Markdown formatting, as shown below:

<pre class=" language-markdown"><code class=" language-markdown">Place text in `backticks` to mark code; on your keyboard these usually share a key with tilde, ~.
* You can write bullets by starting with an asterisk then a space.
    * Indent your asterisks to create sublists
1. You can write numbered listed by starting with 1.
1. Subsequent items can also be numbered 1. and Xcode will renumber them automatically.

# Headings start with a # symbol
If you need subheadings, use ##, ###, and so on.

If you want to write a link, [place your text in brackets](and your link in parentheses)
Write a *single asterisk* around words to make them italic
Write **two asterisks** around words to make them bold
```

If you’re using Xcode 13 or later, you can use double backticks to produce links inside DocC documentation, like this: 

<pre class=" language-markdown"><code class=" language-markdown">Make sure and avoid using ``badFunction()`` unless you enjoy problems.
```

<div class="hws-sponsor" style="position: relative;">
<a href="https://iosacademy.essentialdeveloper.com/p/ios-architect-crash-course-hwsfb5d/" style="display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 100;"></a>
<picture>
<source srcset="/img/sponsors/essentialdeveloper-dark.svg" media="(prefers-color-scheme: dark)">
<img alt="Hacking with Swift is sponsored by Essential Developer." src="/img/sponsors/essentialdeveloper-light.svg">
</picture>
<strong class="badge badge-danger">SPONSORED** Join a FREE crash course for mid/senior iOS devs who want to achieve an expert level of technical and practical skills – it’s the fast track to being a complete senior developer! Hurry up because it'll be available only until September 29th.

<p class="text-right"><a href="https://iosacademy.essentialdeveloper.com/p/ios-architect-crash-course-hwsfb5d/" class="btn btn-info" style="border-radius: 10px; text-decoration: none; margin-bottom: 0; font-weight: bold;">Click to save your spot</a>

</div>
<p class="text-center" style="margin-top: -20px; margin-bottom: 40px; font-style: italic;"><a href="/sponsor">Sponsor Hacking with Swift and reach the world's largest Swift community!</a>

---

## Documentation keywords

Beyond using text to describe your functions, Swift lets you add special keywords that get displayed in the Quick Help pane.
First, the `Returns` keyword lets you specify what value the caller can expect back when the function runs successfully. 

<pre class=" language-markdown"><code class=" language-markdown">- Returns: A string containing a date formatted as RFC-822
```

Next is the `Parameter` keyword. This lets you specify the name of a parameter and describe what it contains. You can include as many `Parameter` lines as you have parameters.

<pre class=" language-markdown"><code class=" language-markdown">- Parameter album: The name of a Taylor Swift album
- Parameter track: The track number to load
```

Third is the `Throws` keyword, which lets you specify a comma-separated list of the error types that can be thrown by the function:

<pre class=" language-markdown"><code class=" language-markdown">- Throws: LoadError.networkFailed, LoadError.writeFailed
```

There are others, but those three are the most useful when you’re just starting out. If you include more freeform text between the documentation keywords, it will just be flowed into the correct position in Quick Help.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-render-markdown-content-in-text">How to render Markdown content in text 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a>
-->

:::

---

<TagLinks />