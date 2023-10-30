---
lang: ko-KR
title: Documenting Kotlin Code for Android Using KDoc and Dokka
description: 🅺Kodeco - Android & Kotlin > Documenting Kotlin Code for Android Using KDoc and Dokka
tags: ["crashcourse", "kotiln", "android"]
meta:
  - name: 🅺Kodeco - Android & Kotlin > Documenting Kotlin Code for Android Using KDoc and Dokka
    content: Documenting Kotlin Code for Android Using KDoc and Dokka
  - property: og:title
    content: Documenting Kotlin Code for Android Using KDoc and Dokka
  - property: og:description
    content: 🅺Kodeco - Android & Kotlin > Documenting Kotlin Code for Android Using KDoc and Dokka
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/kodeco-kotlin-android/30067669-documenting-kotlin-code-for-android-using-kdoc-and-dokka.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Documenting Kotlin Code for Android Using KDoc and Dokka
desc: Learn how to use KDoc to document your Kotlin code and generate beautiful-looking documentation pages using Dokka.
link: https://www.kodeco.com/30067669-documenting-kotlin-code-for-android-using-kdoc-and-dokka
logo: https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-core-concepts-android-77962866f13954987c7faf212535d8d6e3147669e3b2ba559cf1672f12bbeffe.svg
color: rgba(0, 184, 126, 0.2)
```

---

Good documentation can make a developer prefer one library over others.

Documentation comes in many forms. From simple comments that live alongside the code to complex websites like the [Android Developer documentation](https://developer.android.com/docs) that cover things like platform APIs, build tools, samples, etc., it’s all documentation.

In this article, you’ll learn:

- How documentation can help you to improve the quality of your projects.
- To use __KDoc__ to document your Kotlin code.
- To use __Dokka__ to generate great-looking documentation quickly and easily.
- How to customize Dokka to your liking.

You’ll work on an Android library project called __notktx__ and generate customized documentation for it.

The major target audience for libraries is usually other developers, so documenting a library project can be a great way to understand how to go about documenting codebases. Making it easy for other developers to use your project is a challenging but rewarding task — and good documentation plays a major role in it.

By the end of this article, you’ll have documentation generated in HTML for the notktx project. Here’s what it will look like:

![Documentation for notktx project in HTML format](https://koenig-media.raywenderlich.com/uploads/2021/12/Screenshot-2021-12-28-at-1.59.47-AM.png)

This article assumes you have previous experience developing for Android in Kotlin. If you’re unfamiliar with Kotlin, take a look at this [Introduction to Kotlin for Android](https://www.raywenderlich.com/1144981-kotlin-for-android-an-introduction) article. If you’re also new to Android development, check out these [Getting Started With Android](https://www.raywenderlich.com/android) tutorials.

::: note Note

This article uses an Android project to showcase KDoc and Dokka, but you can apply the concepts shown to any Kotlin project.

:::

---

## Getting Started

Download the starter project by clicking the [<FontIcon icon="iconfont icon-select"/>`[Download Materials]`][download-material] button at the top or bottom of the tutorial.

Open Android Studio and click <FontIcon icon="iconfont icon-select"/>`[Open an existing Android Studio project]`.

Navigate to the <FontIcon icon="iconfont icon-select"/>`[starter]` project directory you downloaded and click <FontIcon icon="iconfont icon-select"/>`[Open]`.

Take some time to familiarize yourself with the project.


### Understanding the Project Structure

---

## Making a Case for Documentation

### Going Beyond Code Comments

### Learning From Examples

---

## Introducing KDoc

### Defining Block Tags

### Documenting Modules and Packages

---

## Introducing Dokka

### Integrating Dokka

### Generating Documentation

---

## Customizing Dokka

### Adding External Documentation

### Customizing Member Visibility

### Customizing Module and Package Pages

### Using Custom Assets


---

## Where to Go From Here?

Download the completed project files by clicking the [<FontIcon icon="iconfont icon-select"/>`[Download Materials]`][download-material] button at the top or bottom of the tutorial.

Dokka uses a plugin system and provides extension points to write your custom plugins. Check that out here.

As a challenge from this article, you can generate documentation in other formats, such as JavaDoc and GFM.

We hope you enjoyed this tutorial. If you have any questions or comments, please join the forum discussion below!

---

<TagLinks />

[download-material]: https://koenig-media.raywenderlich.com/uploads/2022/01/documenting-kotlin-code_materials.zip