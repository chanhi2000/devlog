---
lang: ko-KR
title: "How to run code when your app is terminated"
description: "Article(s) > How to run code when your app is terminated"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to run code when your app is terminated"
    - property: og:description
      content: "How to run code when your app is terminated"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-run-code-when-your-app-is-terminated.html
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
  "title": "How to run code when your app is terminated | System - free Swift example code",
  "desc": "How to run code when your app is terminated",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-run-code-when-your-app-is-terminated",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
If you need to execute code when your app isn’t running, there are several options open to you depending on what you’re trying to do.

- Background fetch will let your app run in the background for about 30 seconds at scheduled intervals. The goal of this is to fetch data and prepare your UI for when the app runs next.
<li>Push notifications let your app fetch fresh data from your server. You can make a message appear on the device if you want, but it’s not required – silent push notifications let you skip that part.
<li>Local notifications let you display an alert to the user, along with any media attachments you want and some options for the user to select from. If they choose those options then your app can be launched in the foreground or background to handle them.

I want to show you how to use background fetch, which is both the most powerful but also the most unreliable of the three options.

It’s powerful because it lets you request that your app be launched in the background after a set time has passed. For example, you might say “launch my app every hour,” so that you can fetch new stories for your user to read when they launch their app next. This effectively means your app is already up to date when it gets launched next, rather than the user having to wait for the data refresh to happen after it launches.

So, your app can launch itself in the background spontaneously – sounds great, right? Well, there are significant downsides you need to be aware of, which is why background fetch can be simultaneously the most powerful but also the most unreliable of options for background tasks.

The downsides are:

1. The time you request is advisory, which means if you request 30 minutes you can’t expect your app to be run in exactly 30 minutes.
<li>It can be disabled or restricted on a per-app level, or disabled system wide if the device has entered low-power mode.
<li>iOS attempts to monitor when apps are commonly launched and will attempt to adjust background fetch to match real world usage. 
<li>The system evaluates how you use your background fetch time and will adjust how likely your app is to run again based on what you do.

Each of those bear more explanation, so I want to elaborate just a little before giving you some code. 

When it comes to requesting a time, you have two options: specify a value in seconds (e.g. 86400 is more or less one day), or provide the special value `UIApplicationBackgroundFetchIntervalMinimum`, which literally means “as often as possible.”

The problem is that many apps are likely to have background fetch enabled, all with different timers being triggered by the system. So, to reduce battery usage iOS will batch requests: if your app is due to refresh in 28 minutes and another is due to refresh in 29 minutes, the system is likely to move things around so they can both be run in 29 minutes.

Similarly, the system will adjust your background fetch requests based on what the user actually does with your app. For example, if the user always checks your app at 8am every morning, iOS should in theory be likely to trigger a background fetch shortly before. If they never check your app during the night, presumably because they are asleep, iOS should in theory not schedule your background fetch during that period.

Now, I said “in theory” both times because we don’t really know – Apple doesn’t publish specifics here, other than to say that iOS does perform some user monitoring to adapt itself.

As well as monitoring the user, iOS also monitors your code. Here’s a quote from Apple’s own documentation: 

<blockquote>
Apps that download small amounts of content quickly, and accurately reflect when they had content available to download, are more likely to receive execution time in the future than apps that take a long time to download their content or that claim content was available but then do not download anything.

</blockquote>
So, if you abuse the system you’ll get run less often, but if you’re a good citizen then you’ll be called more often – or at least more like what you requested in the first place.

OK, that’s enough explanation of the benefits and problems of background fetch – let’s look at how you actually make it happen.

First, go to your project’s settings and choose the Capabilities tab. You need to enable the Background Modes capability, then check the box marked Background Fetch. This modifies your app’s Info.plist file to add the “fetch” background mode that enables all the following functionality.

Second, tell iOS how often you want background fetch to happen. This is usually done inside the `didFinishLaunchingWithOptions` method in <FontIcon icon="fa-brands fa-swift"/>`AppDelegate.swift`, like this:

```swift
application.setMinimumBackgroundFetchInterval(1800)
```

That requests 1800 seconds between updates, which is 30 minutes. Note that this is a *minimum* amount of time between updates, not a *precise* amount of time between updates.

You can and should adjust this from anywhere in your app based on user preferences. For example, if the user requests updates as often as possible, you might run code like this:

```swift
UIApplication.shared.setMinimumBackgroundFetchInterval(UIApplication.backgroundFetchIntervalMinimum)
```

Now that you’ve requested a background fetch, it’s time to write some code to run when that fetch actually happens. This is done by implementing the `performFetchWithCompletionHandler` method in your app delegate, and calling its completion handler to tell iOS the result of your data fetch.

When you call the completion handler iOS expects to be told how your fetch went, and there are three possible values you can send back: new data was received, no new data was available, or the fetch failed. Again, iOS expects you to be honest here – don’t try to lie and say new data was available when you didn’t actually fetch anything, somehow hoping it means you’ll get called again.

Obviously I don’t know how your app fetches its data, but I’m going to provide some example code to get you started. In this example, `fetchSomeData()` will return `nil` if the fetch failed, but if it succeeded will send back some data with its `newData` property set to either true or false so we can accurately report back to iOS.

Put this method inside <FontIcon icon="fa-brands fa-swift"/>`AppDelegate.swift`:

```swift
func application(_ application: UIApplication, performFetchWithCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    // fetch data from internet now
    guard let data = fetchSomeData() else {
        // data download failed
        completionHandler(.failed)
        return
    }

    if data.isNew {
        // data download succeeded and is new
        completionHandler(.newData)
    } else {
        // data downloaded succeeded and is not new
        completionHandler(.noData)
    }
}
```

Now, this should set your mind thinking that if your fetch fails too often or if you return `.noData` too often, iOS might reduce the frequency of your background fetches. Again, though, please remember that the system does monitor your usage, so you might get penalized if you attempt to abuse this system.

Now that you have implemented the code to run your fetches, there are two `UIApplication` properties that you might want to check.

First, `backgroundRefreshStatus` will tell you whether background fetch is available to use, denied by the user, or restricted by some external force – i.e., not available, and can’t *be* enabled by the user. You can check it like this:

```swift
if application.backgroundRefreshStatus == .available {
    // yay!
}
```

You can and should try disabling background refresh yourself in order to ensure your app behaves well. To try this out, go to the Settings app, then choose General > Background App Refresh, and toggle the switch next to your app. You can also try enabling low-power mode by going to Settings > Battery and enabling the Low Power Mode switch.

Second, the `applicationState` property will tell you whether your app is currently running in the background. Ideally you’ll use this to limit the amount of work you do, because again iOS is watching you and it’s important to play nicely. You can check it like this:

```swift
if application.applicationState == .background {
    // run important background tasks
}
```

That’s all the code you need to support background app refresh, so now it’s just down to you to test that everything works well. If you’re patient you can just sit and wait until iOS triggers your fetch code, but a much better option is to trigger a background fetch on demand.

Xcode has an option for this built right in, so go ahead and launch your app and normal then go to the Debug menu and choose Simulate Background Fetch. That will run a background fetch even if your app is currently in the foreground, allowing you to ensure everything works as intended.

An alternative is to run your whole app as if it were a background launch, which is an option you can enable for your launch schemes. To try this out, hold down the Alt key then go to the Product menu and choose “Run…”. This will let you edit the “Run” schema for your app, and you should see “Launch due to a background fetch event” as one of the checkboxes there. 

When you check that box and click Run, you’ve modified the Run schema so that your app is *always* run as a background fetch – even next time when you just click play or press <kbd>Cmd</kbd>+R. You’ll probably want to leave that box unchecked most of the time!

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app 
/quick-start/swiftui/how-to-run-code-when-your-app-launches">How to run code when your app launches 
/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname">How to change your app icon dynamically with setAlternateIconName()</a>
-->

:::

---

<TagLinks />