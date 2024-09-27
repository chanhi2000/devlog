---
lang: ko-KR
title: "How to use Core Spotlight to index content in your app"
description: "Article(s) > How to use Core Spotlight to index content in your app"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to use Core Spotlight to index content in your app"
    - property: og:description
      content: "How to use Core Spotlight to index content in your app"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-use-core-spotlight-to-index-content-in-your-app.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to use Core Spotlight to index content in your app | System - free Swift example code",
  "desc": "How to use Core Spotlight to index content in your app",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-use-core-spotlight-to-index-content-in-your-app",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
One particularly popular feature in iOS 9.0 is the ability to have your app's content appear inside the iOS Spotlight search so that users can search it alongside their other device content.

First up, add these two imports to your class:

```swift
import CoreSpotlight
import MobileCoreServices
```

Now I'm going to give you the code to handle indexing an item, and for this we'll create a method called `indxItem()` that takes three parameters: the title of the item, a description string for the item, plus a unique identifier. What that unique identifier is depends on you project, but it should be a string. Here's the method:

```swift
func indexItem(title: String, desc: String, identifier: String) {
    let attributeSet = CSSearchableItemAttributeSet(itemContentType: kUTTypeText as String)
    attributeSet.title = title
    attributeSet.contentDescription = desc

    let item = CSSearchableItem(uniqueIdentifier: "\(identifier)", domainIdentifier: "com.hackingwithswift", attributeSet: attributeSet)
    CSSearchableIndex.default().indexSearchableItems([item]) { error in
        if let error = error {
            print("Indexing error: \(error.localizedDescription)")
        } else {
            print("Search item successfully indexed!")
        }
    }
}
```

That wraps the title and description up inside a `CSSearchableItemAttributeSet`, which in turn goes inside a `CSSearchableItem`, and from there to Spotlight to index. If you have several items to index you can have them processed all at once and it works faster.

Note that you should change `domainIdentifier` to your own domain, e.g. `com.yoursite`.

Now that your item is indexed, it will be available in Spotlight searches immediately. If a user finds one of your index items and taps it, your app will get launched and you should be able to pull out the unique identifier of the item that was tapped – this tells you what item was tapped so that you can take appropriate action.

Put this code inside your app delegate, along with an import for CoreSpotlight:

```swift
func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
    if userActivity.activityType == CSSearchableItemActionType {
        if let uniqueIdentifier = userActivity.userInfo?[CSSearchableItemActivityIdentifier] as? String {
            doSomethingCoolWith(uniqueIdentifier)
        }
    }

    return true
}
```

That's it!

For the sake of completeness, here's how you remove an item from the Spotlight index:

```swift
func deindexItem(identifier: String) {
    CSSearchableIndex.default().deleteSearchableItems(withIdentifiers: ["\(identifier)"]) { error in
        if let error = error {
            print("Deindexing error: \(error.localizedDescription)")
        } else {
            print("Search item successfully removed!")
        }
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/libraries/how-to-search-your-apps-spotlight-index">How to search your app’s Spotlight index 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname">How to change your app icon dynamically with setAlternateIconName() 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a>
-->

:::

---

<TagLinks />