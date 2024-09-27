---
lang: ko-KR
title: "How to localize your iOS app"
description: "Article(s) > How to localize your iOS app"
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
      content: "Article(s) > How to localize your iOS app"
    - property: og:description
      content: "How to localize your iOS app"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-localize-your-ios-app.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to localize your iOS app | UIKit - free Swift example code",
  "desc": "How to localize your iOS app",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-localize-your-ios-app",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
Localizing an app – i.e. making it display its user interface in other languages – is surprisingly painless in iOS, and really the only hard part is making sure you get all your text translated by native speakers of your target languages.

There are two steps to creating a localized app. The first is preparing our app to hold strings in different languages – a process known as internationalization, or i18n because it has an “i” then 18 letters then an “n”. Once that’s done, you can go ahead and get all your text placeholders translated into your target languages, which is (strictly speaking) what the term “localization” refers to. Just like “i18n”, you’ll often find localization written as “l10n”.

**Note:** Depending on what your app does, you might need to localize more than just your text strings. Sometimes icons and images have different meanings, and you may need to adjust the way you show dates, numbers, and money.

Xcode uses the concept of *base internationalization* for the default state of your app. This is usually English, but you can change it if you want. You’ve probably noticed a “Base.lproj” directory inside your project – that’s the localized form of your project assets that will be used for your base language. As you add other languages, more of these folders will be created.

To add a new language, go to your project settings. This means selecting your project in the project navigator pane, then selecting it in the projects and targets list. You should see two tabs: Info and Build Settings. Info is the one we want, so please select that now.

The Info tab is where we configured the languages we want for our app, and you should already see “English - Development Language” in the list of localizations. Below that is a + button, so please click that now. A menu will appear asking you what language you’d like to target – I’m going to choose “French (fr)”, but you should choose whichever language you’re targeting.

Xcode will ask which files should be used to create the French localization. Leave both storyboard selected, then click Finish. Xcode will now create directories similar to “en.lproj” and “fr.lproj” depending on which language you chose, and in there will be strings files for the storyboards you selected when creating the localization.

---

## Localizing text you create in code

Go to the File menu and choose New > File, then select Strings File from the list of file types and click Next. Give this file the name “Localizable.strings”, then click Create to open it for editing.

By default this new file won’t be enabled for l10n, but if you activate the file inspector (Alt+<kbd>Cmd</kbd>+1) you should be able to find and click the Localize button. This will ask you what language this file should be moved to, but it’s empty so it doesn’t matter what you choose – I went for English. When you dismiss the dialog you’ll see the Localize button has been replaced with checkboxes for your available languages – please check them both.

Once both languages are selected you’ll see a disclosure indicator appear next to Localizable.strings in your project navigator. This is because it’s now available in both our languages: if you open that indicator arrow you’ll see “Localizable.strings (English)” and “Localizable.strings (French)”, both as separate text files you can edit. I’d like you to choose the English variant to start with.

Strings files are trivial little things: you can (and should!) add comments describing what things mean, but most of the time you’ll just be adding key value pairs like this:

```swift
"Hello" = "Hello";
"Buy" = "Buy this book";
"Register" = "Register for a new account";
```

On the left is the *name* of the string you want to localize. This is what you’ll use to reference each string in your code, so it needs to be unique. On the right is the English text you want to associate with this string name. This is what you’ll get back when you load the string key.

However, we’re not going to add to our strings files directly. Instead, I’d like you to open <FontIcon icon="fa-brands fa-swift"/>`ViewController.swift` and give it this code:

```swift
let buttonTitle = NSLocalizedString("bear", comment: "The name of the animal")
print(buttonTitle)
```

`NSLocalizedString` is a central function in localization, and causes Xcode to look up the meaning of “bear” in the current localization. We haven’t defined how to say “bear” in French yet, but we *have* defined a comment: “The name of the animal”. 

I chose “bear” specifically because it has several meanings in English – it could mean carrying weight, it could mean giving birth, it could mean “turn” as in “turn left”, and it could mean the large carnivorous animal. This comment does nothing in our code, but it *does* help guide translators to know which meaning we’re referring to.

Now, you *could* go ahead and start entering key-value pairs into your strings file, but there’s a much easier way: we can run a program to do it for us. 

Open your Mac’s Terminal app, then change into the directory where your project’s <FontIcon icon="fa-brands fa-swift"/>`ViewController.swift` file is. Now run this command: `genstrings -o en.lproj *.swift` – that means “read all Swift files for localized strings, then write them out to the localized strings file for the English project.”

When that command completes (it will only take a fraction of a second), you should see the following in the English version of Localizable.strings:

```swift
/* The name of the animal */
"bear" = "bear";
```

Now you can see the importance of adding comments to each `NSLocalizedString()` call – it will automatically get used to generate your localization data. 

Repeat the command, this time for French: `genstrings -o fr.lproj *.swift`. This time we need to change the resulting file, because bear in French is not “bear”. So, open “Localizable Strings (French)” and give it this content:

```swift
/* The name of the animal */
"bear" = "l'ours";
```

Notice that the string on the left doesn’t change – that’s the *name* of our string, and is mostly for internal use only.

**Tip:** If you try to load a localization string name that doesn’t exist, UIKit will show the key name itself to your user.

Now that we have something to localize, go ahead and run your app. If you’re using English you should see “bear” printed out, but if you change to French you’ll see “l’ours”. 

**Tip:** You can switch between languages by going to the Product menu, holding down the Alt key, then choosing “Run...” Look under the Options tab and you’ll see Application Language is set to System Language by default, but you can change to others there for testing purposes.

---

## Localizing text you create in storyboards

First, go ahead and give all your UI elements whatever natural text makes sense in your base localization. For example, this might mean giving all your labels English text.

Second, select one of your UI elements and look in the identity inspector for its Object ID. This will be a series of random letters and numbers that identify this element uniquely, e.g. “XVt-6R-OJ3”. Select that text, then copy it to your clipboard.

Third, open “Main.strings (French)”, which is the localized version of Main.storyboard’s strings for French speakers. Give it this content:

```swift
"XVt-6R-OJ3.text" = "Bonjour!";
```

You should change the “XVt-6R-OJ3” part to whatever object ID you copied to your clipboard.

And that’s it: that string will now dynamically be replaced with “Bonjour” at runtime for French speakers.

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname">How to change your app icon dynamically with setAlternateIconName() 
/example-code/system/how-to-decode-json-from-your-app-bundle-the-easy-way">How to decode JSON from your app bundle the easy way 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/arkit/how-to-detect-images-using-arimagetrackingconfiguration">How to detect images using ARImageTrackingConfiguration</a>
-->

:::

---

<TagLinks />