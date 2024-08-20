---
lang: ko-KR
title: "Wrap up"
description: "Article(s) > Wrap up"
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
      content: "Article(s) > Wrap up"
    - property: og:description
      content: "Wrap up"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/39/09-wrap-up.html
next: /explore/articles/hackingwithswift.com/read/README.md
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
  "title": "Wrap up | Hacking with iOS",
  "desc": "Wrap up",
  "link": "https://hackingwithswift.com/read/39/9/wrap-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

This has been the longest technique project by a long way, but I think you've learned a lot about the importance of good unit testing. We also managed to cover some functional programming techniques, discussed private setters, used functions as parameters, and even tried `NSCountedSet`, so I hope you're happy with the result!

Now that the full suite of tests are complete, you have three options ahead of you. First, you can run all the tests in a file by clicking the diamond (or green checkmark) next to the name of the test class. So, in <FontIcon icon="fa-brands fa-swift"/>`Project39UITests.swift` look in the gutter next to `class Project39UITests: XCTestCase` and click that. Second, you can run all the tests in your entire project by pressing <kbd>Cmd</kbd>+<kbd>U</kbd>. Give it a few moments to run, then you'll get a complete report.

Third, and most impressively, you can run all your tests on Xcode Server, which is the beginning of continuous integration: every time you commit a code change to source control, Xcode Server can pull down those changes, build the app, and run the full suite of tests. If you're working in a team, Xcode can produce a visual display of tests that are passing and failing, which is either motivational or depressing depending on your workplace!

If you'd like to take this app further, you should concentrate on testing. Can you write a test that verifies there are 55 table rows when the user filters by words that appear 1000 or more times? Can you write a test that ensures something sensible happens if the cancel button is pressed? Can you write a performance test to ensure `applyUserFilter()` doesn't get any slower?

There's also a bug in the code that you ought to be able to fix easily: if the user enters nothing into the filter text box, `applyUserFilter()` gets called with an empty string as its parameter and no results will be shown. It's down to you to think up a better solution: is it better to pretend Cancel was tapped instead? Or perhaps consider an empty string to mean "show all words"? It's your project now, so please choose what you think best.

Keep in mind that testing is only part of a sensible code review process. Yes, Xcode Server can check out your code and automatically validate that tests pass, but it is not a substitute for actual human interaction – looking through each other's code, and providing constructive criticism. Taking the time to read someone else's code, then encouraging and supporting them as they improve it, is a key developer skill – remember, code review is where mistakes get rubbed *out*, not rubbed *in*.

---

<TagLinks />