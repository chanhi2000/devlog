---
lang: ko-KR
title: "Setting up"
description: "Article(s) > Setting up"
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
      content: "Article(s) > Setting up"
    - property: og:description
      content: "Setting up"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/05/01-setting-up.html
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
  "title": "Setting up | Hacking with iOS",
  "desc": "Setting up",
  "link": "https://hackingwithswift.com/read/5/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/U8eG_cEGO-A" />

Projects 1 to 4 were all fairly easy, because my goal was to teach you the basics of iOS development while also trying to make something useful. But now that you're hopefully starting to become familiar with the core tools we have, it's time to change up a gear and tackle something a bit harder.

In this project you're going to learn how to make a word game that deals with anagrams, but as per usual I'll be hijacking it as a method to teach you more about iOS development. This time around we're going back to the table views as seen in project 1, but you're also going to learn how to load text from files, how to ask for user input in `UIAlertController`, and get a little more insight to how closures work.

In Xcode, create a new Single View App called Project5. We’re going to turn this into a table view controller, just like we did in project 1. So, open <FontIcon icon="fa-brands fa-swift"/>`ViewController.swift` and find this line:

```swift
class ViewController: UIViewController {
```

Please change it to read this instead:

```swift
class ViewController: UITableViewController {
```

If you remember, that only changes the definition of our view controller *in code*. We need to change in the storyboard too, so open <FontIcon icon="iconfont icon-xcode"/>`Main.storyboard` now.

Inside Interface Builder, use the document outline to select and delete the existing view controller so that the document is blank, then replace it with a new table view controller. Use the identity inspector to change the class of the new controller to be “ViewController”, then select its prototype cell and give it the re-use identifier “Word” and the cell style Basic. 

**All this was covered in project 1, but it’s OK if you forgot – don’t be afraid to go back to project 1 and re-read any bits you’re not sure about.**

Now select the view controller again (use the document outline – it’s easier!) then make sure the “Is Initial View Controller” box is checked under the attributes inspector. Finally, go to the Editor menu and choose Embed In > Navigation Controller. We won’t be pushing anything onto the navigation controller stack like we did with project 1, but it does automatically provide the navigation bar at the top, which we *will* be using.

::: note

This app asks users to make anagrams out of a word, e.g. when given the word “anagrams” they might provide “rags”. If you look at that and think “that’s not an anagram – it doesn’t use all the letters!” then you need to search the internet for “well actually” and have a good, long think about life.

:::

---

<TagLinks />