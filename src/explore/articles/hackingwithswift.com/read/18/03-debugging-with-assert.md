---
lang: ko-KR
title: "Debugging with assert()"
description: "Article(s) > Debugging with assert()"
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
      content: "Article(s) > Debugging with assert()"
    - property: og:description
      content: "Debugging with assert()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/18/03-debugging-with-assert.html
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
  "title": "Debugging with assert() | Hacking with iOS",
  "desc": "Debugging with assert()",
  "link": "https://hackingwithswift.com/read/18/3/debugging-with-assert",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/2GkNf9XZN5I" />

One level up from `print()` are assertions, which are debug-only checks that will force your app to crash if a specific condition isn't true.

On the surface, that sounds terrible: why would you want your app to crash? There are two reasons. First, sometimes making your app crash is the Least Bad Option: if something has gone catastrophically wrong – if some fundamentally important file is not where it should be – then it may be the case that continuing your app will cause irreparable harm to user data, in which case crashing, while a bad result, is better than losing data.

Second, these assertion crashes only happen while you’re debugging. When you build a release version of your app – i.e., when you ship your app to the App Store – Xcode automatically disables your assertions so they won’t reach your users. This means you can set up an extremely strict environment while you’re developing, ensuring that all values are present and correct, without causing problems for real users.

Here's a very basic example:

```swift
assert(1 == 1, "Maths failure!")
assert(1 == 2, "Maths failure!")
```

As you can see `assert()` takes two parameters: something to check, and a message to print out of the check fails. If the check evaluates to false, your app will be forced to crash because you know it's not in a safe state, and you'll see the error message in the debug console. You can – and should! – add these assertions liberally to your code, because they help guarantee that your code’s state is what you think it is.

The advantage to assertions is that their check code is never executed in a live app, so your users are never aware of their presence. This is different from `print()`, which would remain in your code if you shipped it, albeit mostly invisible. In fact, because calls to `assert()` are ignored in release builds of your app, you can do complex checks:

```swift
assert(myReallySlowMethod() == true, "The slow method returned false, which is a bad thing!")
```

That `myReallySlowMethod()` call will execute only while you’re running test builds – that code will be removed entirely when you build for the App Store.

So: assertions are like running your code in strict mode. If your app works great with assertions on – things that literally make your app crash if things are wrong – then it will work even better in release mode.

---

<TagLinks />