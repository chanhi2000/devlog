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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/05/07-wrap-up.html
next: /explore/articles/hackingwithswift.com/read/06/overview.md
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
  "link": "https://hackingwithswift.com/read/5/7/wrap-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/jxvEBafyo5A" />

You've made it this far, so your Swift learning really is starting to come together, and I hope this project has shown you that you can make some pretty advanced things with your knowledge.

In this project, you learned a little bit more about `UITableView`: how to reload their data and how to insert rows. You also learned how to add text fields to `UIAlertController` so that you can accept user input. But you also learned some serious core stuff: more about Swift strings, closures, `NSRange`, and more. These are things you're going to use in dozens of projects over your Swift coding career, and things we'll be returning to again and again in this series.

---

## Review what you learned

Anyone can sit through a tutorial, but it takes actual work to remember what was taught. It’s my job to make sure you take as much from these tutorials as possible, so I’ve prepared a short review to help you check your learning.

```component VPCard
{
  "title": "Review – Project 5: Word Scramble – Hacking with Swift",
  "desc": "Interactive tests that help gauge your progress learning Swift",
  "link": "https://hackingwithswift.com/review/hws/project-5-word-scramble",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

---

## Challenge

One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try extending this app to make sure you fully understand what’s going on:

1. Disallow answers that are shorter than three letters or are just our start word. For the three-letter check, the easiest thing to do is put a check into `isReal()` that returns false if the word length is under three letters. For the second part, just compare the start word against their input word and return false if they are the same.
2. Refactor all the `else` statements we just added so that they call a new method called `showErrorMessage()`. This should accept an error message and a title, and do all the `UIAlertController` work from there.
3. Add a left bar button item that calls `startGame()`, so users can restart with a new word whenever they want to.

::: info Bonus

Once you’ve done those three, there’s a really subtle bug in our game and I’d like you to try finding and fixing it.

:::

To trigger the bug, look for a three-letter word in your starting word, and enter it with an uppercase letter. Once it appears in the table, try entering it again all lowercase – you’ll see it gets entered. Can you figure out what causes this and how to fix it?

---

## Hints

It is *vital* to your learning that you try the challenges above yourself, and not just for a handful of minutes before you give up.

Every time you try something wrong, you learn that it’s wrong and you’ll remember that it’s wrong. By the time you find the *correct* solution, you’ll remember it much more thoroughly, while also remembering a lot of the wrong turns you took.

This is what I mean by “there is no learning without struggle”: if something comes easily to you, it can go just as easily. But when you have to really mentally fight for something, it will stick much longer.

But if you’ve already worked hard at the challenges above and are still struggling to implement them, I’m going to write some hints below that should guide you to the correct answer.

**If you ignore me and read these hints without having spent at least 30 minutes trying the challenges above, the only person you’re cheating is yourself.**

Still here? OK. If you’re stuck on the bug finding bonus challenge, take a look at this line of code:

```swift
usedWords.insert(answer, at: 0)
```

Is that what it should be?

---

<TagLinks />