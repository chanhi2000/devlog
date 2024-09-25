---
lang: ko-KR
title: Introduction
description: Article(s) > (1/6) Gitting Things Done – A Visual and Practical Guide to Git [Full Book] 
category: 
  - Git
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - git
head:
  - - meta:
    - property: og:title
      content: Article(s) > (1/6) Gitting Things Done – A Visual and Practical Guide to Git [Full Book]
    - property: og:description
      content: Introduction
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/gitting-things-done-book/introduction.html
date: 2024-01-08
isOriginal: false
cover: https://freecodecamp.org/news/content/images/size/w2000/2023/12/Gitting-Things-Done-Cover-with-Photo.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Gitting Things Done – A Visual and Practical Guide to Git [Full Book]",
  "desc": "Introduction Git is awesome. Most software developers use Git on a daily basis. But how many truly understand Git? Do you feel like you know what's going on under the hood as you use Git to perform various tasks? For example, what happens when you us...",
  "link": "/explore/articles/freecodecamp.org/gitting-things-done-book/README.md",
  "logo": "https://cdn.freecodecamp.org/universal/favicons/favicon.ico",
  "background": "rgba(10,10,35,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Gitting Things Done – A Visual and Practical Guide to Git [Full Book]"
  desc="Introduction Git is awesome. Most software developers use Git on a daily basis. But how many truly understand Git? Do you feel like you know what's going on under the hood as you use Git to perform various tasks? For example, what happens when you us..."
  url="https://freecodecamp.org/news/gitting-things-done-book/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://freecodecamp.org/news/content/images/size/w2000/2023/12/Gitting-Things-Done-Cover-with-Photo.png"/>

Git is awesome.

Most software developers use Git on a daily basis. But how many truly understand Git? Do *you* feel like you know what's going on under the hood as you use Git to perform various tasks?

For example, what happens when you use `git commit`? What is stored between commits? Is it just a diff between the current and previous commit? If so, how is the diff encoded? Or is an entire snapshot of the repository stored each time?

Most people who use Git don't know the answers to the questions posed above. But does it really matter? Do you really have to know all of those things?

I'd argue that it does matter. As professionals, we should strive to understand the tools we use, especially if we use them all the time, like Git.

Even more acutely, I've found that understanding how Git actually works is **useful** in many scenarios — whether resolving merge conflicts, looking to conduct an interesting rebase, or even just when something goes slightly wrong.

So many times have I received questions about Git from experienced, highly skilled software engineers. I have seen wonderful developers react in fear when something happened in their commit history, and they just didn't know what to do. It doesn't have to be this way.

By reading this book, you will gain a new perspective of Git. You will feel **confident** when working with Git, and you will **understand** Git's underlying mechanisms, at least those that are useful to understand. You will *Git* it. You will be *Gitting things done*.

---

## Who Is This Book For?

Any software developer who wants to deepen their knowledge about Git.

If you are experienced with Git - I am sure you will be able to deepen your knowledge. Even if you are new to Git - I will start with an overview of the mechanisms of Git, and the terms used throughout this book.

This book is for you. I wrote it so you can learn more about Git, and also come to appreciate, or even love Git.

You will also notice that I use a casual style throughout the book. I believe that learning Git should be insightful and fun. Learning new things is always hard, and I felt like writing in a less casual style wouldn't really make a good service. And as I already mentioned - this book is for you.

---

## Who Am I?

This book is about you, and your journey with Git. But I would like to tell you a bit about why I think I can contribute to your journey.

I am the CTO and one of the co-founders of [<FontIcon icon="fas fa-globe"/>Swimm.io](https://swimm.io), a knowledge management tool for code. Part of what we do is linking parts from code in Git repositories to parts of the documentation, and then tracking changes in the repository to update the documentation if needed.

At Swimm, I got to dissect parts of Git, understand its underlying mechanisms and also gain intuition about why Git is implemented the way it is.

Before founding Swimm I practiced teaching in many different environments - among them, managing the Cyber track of Israel Tech Challenge, founding Check Point Security Academy, and writing a full text book.

This book is my attempt to make the most of both worlds - my teaching experience as well as my in-depth hands-on experience with Git, and give you the best learning experience I can.

---

## The Approach of This Book

This is definitely not the first book about Git. When sitting down to write it, I had three principles in mind.

1. **Practical** - in this book, you will learn how to accomplish things in Git. How to introduce changes, how to undo them, and how to fix things when they go wrong. You will understand how Git works not just for the sake of understanding, but with a practical mindset. I sometimes refer to this as the "practicality principle" - which guides me in deciding whether to include certain topics, and to what extent.
2. **In depth** - you will dive deep into Git's way of operating, to understand its mechanisms. You will build your understanding gradually, and always link your knowledge to real scenarios you might face in your work. In order to achieve an in-depth understanding, I almost always prefer the command line over graphical interfaces, so you can really see what commands are running.
3. **Visual** - as I strive to provide you with intuition, the chapters will be accompanied by visual aids.

---

## Why Is This Book Publicly Available?

I think everyone should have access to high quality content about Git, and I'd like this book to get to as many people as possible.

If you would like to support this book, you are welcome to buy the [<FontIcon icon="fa-brands fa-amazon"/>Paperback version](https://amazon.com/dp/B0CQXTJ5V5), an [<FontIcon icon="fas fa-globe"/>E-Book version](https://buymeacoffee.com/omerr/e/197232), or [<FontIcon icon="fas fa-globe"/>buy me a coffee](https://buymeacoffee.com/omerr). Thank you!

---

## Accompanying Videos

I have covered many topics from this book on my YouTube channel - Brief ([<FontIcon icon="fa-brands fa-youtube"/>`@BriefVid`](https://youtube.com/@BriefVid)). You are welcome to check them out as well.

---

## Get Your Hands Dirty

Throughout this book, I will mostly use the second person singular - and directly write to *you*. I will ask *you* to get your hands dirty, run the commands yourself, so you actually get to *feel* what it's like to use do things with Git, not just read about it.

---

## Git's Feelings

Throughout the book, I sometimes refer to Git with words such as "believes", "thinks", or "wants". As you may argue, Git is not a human, and it doesn't have feelings or beliefs. Well, that's true, but in order for us to enjoy playing around with Git, and to help you enjoy reading (and me writing) this book, I feel like referring to Git as more than just code makes it all so much more enjoyable.

---

## My Setup

I will include screenshots. There's no need for your setup to match mine, but if you're curious about my setup, then:

- I am using Ubuntu 20.04 (WSL).
- For my terminal, I use [<FontIcon icon="fas fa-globe"/>Oh My Zsh](https://ohmyz.sh/)
- I also use plugins for Oh My Zsh, you can [follow this tutorial on freeCodeCamp](/explore/articles/freecodecamp.org/jazz-up-your-zsh-terminal-in-seven-steps-a-visual-guide-e81a8fd59a38.md).
- [<FontIcon icon="iconfont icon-github"/>git-graph (my alias is `gg`)](https://github.com/mlange-42/git-graph)

---

## Feedback Is Welcome

This book has been created to help you and people like you learn, understand Git, and apply that knowledge in real life. 

Right from the beginning, I asked for feedback and was lucky to receive it from great people to make sure the book achieves these goals. If you liked something about this book, felt that something was missing, or that something needed improvement - I would love to hear from you. Please reach out at [<FontIcon icon="fas fa-envelope"/>gitting.things@gmail.com](mailto:gitting.things@gmail.com).

---

## Note

This book is provided for free on freeCodeCamp as described above and according to [<FontIcon icon="fas fa-globe"/>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en).

If you would like to support this book, you are welcome to buy the [<FontIcon icon="fa-brands fa-amazon"/>Paperback version](https://amazon.com/dp/B0CQXTJ5V5), an [<FontIcon icon="fas fa-globe"/>E-Book version](https://buymeacoffee.com/omerr/e/197232), or [<FontIcon icon="fas fa-globe"/>buy me a coffee](https://buymeacoffee.com/omerr). Thank you!

---

<TagLinks />