---
lang: ko-KR
title: "What's new in iOS 9 for developers"
description: "What's new in iOS 9 for developers"
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - ios
  - ios-9
  - xcode
head:
  - - meta:
    - property: og:title
      content: "What's new in iOS 9 for developers"
    - property: og:description
      content: "What's new in iOS 9 for developers"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/ios9.html
prev: /programming/swift/articles/README.md
date: 2015-06-11
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/swift/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What's new in iOS 9 for developers – Hacking with Swift",
  "desc": "What's new in iOS 9 for developers",
  "link": "https://hackingwithswift.com/ios9",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

If you already completed the entire [Hacking with Swift coding series](https://hackingwithswift.com/), you'll have watched Apple's WWDC15 keynote with as much excitement as I did. And yes: Swift 2 was announced along with iOS 9 and Xcode 7, so if you're keen to start learning then I'm here to help.

So, while I'm busy updating the complete book, I wrote this article about some of the new things in iOS 9 and another [showing off what's new in Swift 2](/explore/articles/hackingwithswift.com/swift2.md). I'm not going to go over the headline features like multitasking – that kind of thing you can read on any tech news site. Instead, here are the features that particularly caught my eye…

::: info Update

I've made lots of [completely free tutorials for iOS 9](/explore/articles/hackingwithswift.com/ios9-tutorials.md) that help you build real projects while you learn – take a look!

:::

---

## Search extensibility

::: info Update

I wrote a [tutorial on Core Spotlight in iOS 9](/explore/articles/hackingwithswift.com/read/32/overview.md) as Hacking with Swift project 32 – check it out!
<!-- TODO: add VPCard -->

:::

Finally (finally!) you can hook your apps directly into Spotlight for integrated, system-wide search, and it comes in the form of CoreSpotlight. But don't get your hopes up: Spotlight doesn't just magically index all your data while you sit back and snooze. Instead, you need to specify exactly what you want to expose to the outside world.

What's more, Apple is specifically focusing this technology on things that are going to be directly useful to the user, so you need to be careful what you index in Spotlight. We don't know how the algorithm works, but Apple has said that iOS will automatically monitor how frequently users interact with your search results, and if you consistently serve up unhelpful results because you indexed your data badly then your results may stop appearing.

To get started, create a new instance of the `CSSearchableItemAttributeSet` class, then give it a title and a `contentDescription`. You then wrap that inside a `CSSearchableItem`, before passing it to `CSSearchableIndex` using its `indexSearchableItems` method.

If a user taps on one of your search results in Spotlight, your app will get launched with a new app delegate callback: `application:continueUserActivity:restorationHandler:`. If the activity type of the `NSUserActivity` that gets passed in matches `CSSearchableItemActionType`, you can immediately direct the user to the relevant content by pulling out the `CSSearchableItemActivityIdentifier` key from the activity's `userInfo` dictionary.

If you prefer to read code, here's an example:

```swift
let attributeSet = CSSearchableItemAttributeSet(itemContentType: kUTTypeImage as String)
attributeSet.title = "My Great Content"
attributeSet.contentDescription = "This is something you'll search for."

let item = CSSearchableItem(uniqueIdentifier: "YOUR UNIQUE CONTENT IDENTIFIER HERE", domainIdentifier: "com.hackingwithswift", attributeSet: attributeSet)
CSSearchableIndex.defaultSearchableIndex().indexSearchableItems([item]) { (err: NSError?) -> Void in
    print("Search item successfully indexed!")
}
```

You'll need to import both CoreSpotlight and MobileCoreServices to make that code work. You will also need to replace "YOUR UNIQUE CONTENT IDENTIFIER HERE" with something meaningful to you that uniquely identifies this content, so that if the user launches your app as a result of doing a Spotlight search, you know what to look for.

Speaking of which, here's the code to put in your app delegate to load some content after a Spotlight search:

```swift
func application(application: UIApplication, continueUserActivity userActivity: NSUserActivity, restorationHandler: ([AnyObject]?) -> Void) -> Bool {
    if userActivity.activityType == CSSearchableItemActionType {
        let uniqueIdentifier = userActivity.userInfo?[CSSearchableItemActivityIdentifier]
        print("Do stuff with \(uniqueIdentifier)")
    }

    return true
}
```

Again, make sure you import CoreSpotlight so your code compiles. Hopefully you can now see why the unique identifier is so important – it's what your app gets handed so you can load the correct content.

There are various extensions to `CSSearchableItemAttributeSet` to encode data such as events and map co-ordinates, so this could prove to be one of the biggest new features in iOS 9. To see just how much information you can encode (focal length for images! media copyright information! contact phone numbers!) press Shift+Cmd+O and type CSSearchableItemAttributeSet then wait for the completions to appear - you'll see media, events, images, places and more.

---

## App Thinning

Universal apps (aka "fat binaries") have always meant that Apple ships a single app package that contains all the assets and code for it to run on any supported device. So, since the iPad launched that meant every iPhone app automatically included all the iPad imagery even though it wasn't used.

When the number of supported devices was low (non-retina iPhone and non-retina iPad) this wasn't a huge problem, and if you were smart about your assets most users wouldn't care. But as devices have proliferated, each app now needs to include iPhone retina, iPhone retina HD, iPad non-retina and iPad retina, all in one package, even though each device will only be showing one set of assets.

Apple's solution is something developers have been asking for for a long time: app thinning ensures that users download only the app components required to run the app on their specific device, which means an iPhone retina device (4s, 5, 5s, 6) will download only retina assets and not retina HD devices. The result: smaller apps, faster downloads, and happier users.

But App Thinning is even cleverer, because with Xcode 7 you upload your app to iTunes connect in an intermediate state called Bitcode. When users download your app, the App Store will automatically produce an optimized version of your app (i.e., 64-bit if needed) to match the device the user is using. This means they get only the assets they need and only the binary code they need, making the download even smaller.

Still think that's not enough? Apparently Apple agrees, because as part of App Thinning you can now host content for your app in iTunes Connect, and request it inside your app only when needed. This has been possible with in-app purchases for a few years, but being able to tag and fetch content on demand is new and very interesting.

I wonder whether Apple is shipping app thinning now in preparation to launch an @3x iPad – such a device would have huge images, so old school universal binaries would be more wasteful than ever.

---

## GameplayKit

::: info Update

I wrote a [tutorial on GameplayKit and GKMinmaxStrategist in iOS 9](/explore/articles/hackingwithswift.com/read/34/overview.md) as Hacking with Swift project 34 – check it out!
<!-- TODO: add VPCard -->

:::

::: info Update 2

I wrote a [tutorial on GameplayKit and GKRandomSource in iOS 9](/explore/articles/hackingwithswift.com/read/35/overview.md) as Hacking with Swift project 35 – check that out too!
<!-- TODO: add VPCard -->

:::

This is easily one of the most surprising changes in iOS 9, and it was rushed over so quickly in the keynote that if you blinked you probably missed it. GameplayKit is surprising because of what it does: it's designed to make it easy to add high-level gameplay logic without having to code the algorithms yourself. State machines? Done. Randomization? Check. Path finding? Got it.

To give you an idea of just how powerful GameplayKit is, Apple has shipped demo code for a four-in-a-row game that uses a new class called `GKMinmaxStrategist`. This is a class that can, under certain conditions, provide AI responses to automatically win in a game. Those conditions are pretty simple: the game must be sequential (i.e., players take turns), the game must be zero sum (one player loses when the other wins), the game must not be based on chance, and you must be able to provide GKMinmaxStrategist with perfect information – that is, all information required to play and win is openly visible.

---

## SFSafariViewController

::: info Update

I wrote a [tutorial on SFSafariViewController in iOS 9](/explore/articles/hackingwithswift.com/read/32/overview.md) as Hacking with Swift project 32 – check it out!
<!-- TODO: add VPCard -->

:::

iOS 8 gave us `WKWebView`, the super-fast new way of using WebKit inside our apps that also included some UI elements such as swiping between the page history. iOS 9 goes one step further: `SFSafariViewController` is a wholly embedded Safari inside your app, exposing even more behaviour that users have come to expect, such as shared cookies, AutoFill of forms, and Reader Mode.

This might seem like a strange thing to do, but think about it: lots of apps have embedded web browsers inside them, such as when you tap a link inside Twitter. But frequently these embedded web views just aren't as good as Safari, so you end up tapping the inevitable "Open in Safari" button just to escape. Well, with iOS 9 is no longer needed: `SFSafariViewController` is a full-screen Safari user interface controller by Apple, with a simple Done button to return to your app.

To try it out now, you need to do four things. First, pull in the SafariServices framework like this:

```swift
import SafariServices
```

Second, make your view controller conform to the `SFSafariViewControllerDelegate` delegate, using something like this:

```swift
class ViewController: UIViewController, SFSafariViewControllerDelegate {
```

Third, create and show the `SFSafariViewController`, pointing at a URL of your choosing:

```swift
let sfc = SFSafariViewController(URL: NSURL(string: "http://www.slashdot.org")!)
sfc.delegate = self
presentViewController(sfc, animated: true, completion: nil)
```

Finally, catch the delegate callback `safariViewControllerDidFinish()`, which is triggered when the user taps the built-in Done button:

```swift
func safariViewControllerDidFinish(controller: SFSafariViewController) {
    controller.dismissViewControllerAnimated(true, completion: nil)
}
```

One of the neat features of `SFSafariViewController` is that it comes with reader mode built in, and you can actually navigate straight to that view by using this code:

```swift
let sfc = SFSafariViewController(URL: NSURL(string: "http://www.slashdot.org")!, entersReaderIfAvailable: true)
```

---

## UIStackView

::: info Update

I wrote a tutorial on UIStackView and iPad multitasking in iOS 9 as Hacking with Swift project 31 – check it out!

/explore/articles/hackingwithswift.com/read/31/overview.md
<!-- TODO: add VPCard -->

:::

Android developers have long had a layout system called LinearLayout, where you add views to a superview and they automatically get placed either beneath each other or side by side. We haven't really had a good solution like this on iOS – table views are greatly at stacking information vertically, but are of course hugely limited in terms of their content.

With `UIStackView`, that's all changed: you can now add a series of views to a superview, specify how much spacing you want between them, and Auto Layout handles the rest for you. You get to choose whether you want the subviews to have equal sizes (`.FillEqually`) or proportional sizes (`.FillProportionally`) based on their intrinsic content sizes. You can also choose whether you want the subviews to fill horizontally or vertically, and you can change your mind later.

Important note: `UIStackViews` don't scroll, they just act as containers that automatically fit their content.

---

## UICollectionViews can now behave more like UITableViews

With one simple boolean property for `UICollectionViewFlowLayout`, `sectionHeadersPinToVisibleBounds`, you can now make your flow layout work the same way as UITableView has always done: your section headers stick to the top of the screen while the user is scrolling inside that section, and only get pushed off when the next section comes in. Way, way overdue, but at least it's here now.

---

## UICollectionViews now have easy re-ordering

Set the `installsStandardGestureForInteractiveMovement` property to true on your `UICollectionViewController` and give users the ability to re-order your items.

---

## SKAudioNode

One of the major SpriteKit annoyances has been its simplistic audio system. In iOS 8, for example, you can play sounds but not stop them, and heaven forbid if you want to control the sound in any way. Well, in iOS 9 we have `SKAudioNode` to the rescue: not only can you pause and stop sounds (hurray!) but you can also set its positional property to true to have its sound adjusted based on the node's position in your scene. Yes: SpriteKit now has 3D audio.

---

## Lots of tiny changes

One of my favorite things to do when Apple flicks the switch on a new iOS release is to read through the complete list of API changes, looking for all the tiny improvements and tweaks Apple makes each year. Here are some of the changes that jumped out to me this year:

- UIViewController now has an `addKeyCommand()` method to register UIKeyCommands on your view controllers – manna from heaven for users of external keyboards.
- `MKMapView.showsTraffic`: set it to true, and it, er, shows the traffic. Simple, but such a huge feature to have.
- `CIFeatureTypeText` sounds like Apple added some sort of OCR to iOS, but sadly it just gives you the bounds where text was located. It's a step forward, but only a small one.
- Just look at AVFoundation. Go on, look at it and cry tears of joy.

---

<TagLinks />