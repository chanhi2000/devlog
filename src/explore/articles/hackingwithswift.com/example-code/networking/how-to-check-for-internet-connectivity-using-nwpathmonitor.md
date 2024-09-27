---
lang: ko-KR
title: "How to check for internet connectivity using NWPathMonitor"
description: "Article(s) > How to check for internet connectivity using NWPathMonitor"
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
  - ios-12.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to check for internet connectivity using NWPathMonitor"
    - property: og:description
      content: "How to check for internet connectivity using NWPathMonitor"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/networking/how-to-check-for-internet-connectivity-using-nwpathmonitor.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Networking - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/networking/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to check for internet connectivity using NWPathMonitor | Networking - free Swift example code",
  "desc": "How to check for internet connectivity using NWPathMonitor",
  "link": "https://hackingwithswift.com/example-code/networking/how-to-check-for-internet-connectivity-using-nwpathmonitor",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 12.0

<!-- TODO: 작성 -->

<!-- 
Apple’s Network framework provides a number of useful classes for working with network data, including one specifically designed to monitor network accessibility: `NWPathMonitor`. If you ever used Apple’s older Reachability system, `NWPathMonitor` replaces it fully.

To get started, first add an import for the `Network` framework:

```swift
import Network
```

Next, create an instance of `NWPathMonitor` somewhere it won’t get freed immediately. For example, you might have it as a property on a view controller, for example:

```swift
let monitor = NWPathMonitor()
```

Now assign a closure to that monitor that will be triggered whenever network accessibility changes. This needs to accept one parameter, which is an `NWPath` describing the network access that is currently possible.

`NWPath` has a few properties, but there are two in particular you’re likely to care about: `status` describes whether the connection is currently available or not, and `isExpensive` is set to true when using cellular data or when using WiFi that is hotspot routed through an iPhone’s cellular connection.

To try this out, here’s some code that prints a message when the user’s connection status changes, and also prints whether the connection is considered expensive or not:

```swift
monitor.pathUpdateHandler = { path in
    if path.status == .satisfied {
        print("We're connected!")
    } else {
        print("No connection.")
    }

    print(path.isExpensive)
}
```

Remember, that closure gets called every time the connection status changes.

Once your path monitor is created and configured, the final step is to create a custom `DispatchQueue` instance for the monitor to run, then call its `start()` method:

```swift
let queue = DispatchQueue(label: "Monitor")
monitor.start(queue: queue)
```

Once that’s done, your closure will get called every time the connection status changes, so you can add code there to update the rest of your app with the current connection status.

If you want more fine-grained control over the network check, you can create your `NWPathMonitor` using a specific interface type. For example, if you specifically wanted to check for cellular data and only cellular data, you would write this:

```swift
let cellMonitor = NWPathMonitor(requiredInterfaceType: .cellular)
```

You can also use `.wifi` or even `wiredEthernet` if you want. Omitting the interface type causes them all to be watched at the same time, which is probably what you’ll want most of the time.

-->

::: details Similar solutions…

<!--
/example-code/networking/how-to-create-a-peer-to-peer-network-using-the-multipeer-connectivity-framework">How to create a peer-to-peer network using the multipeer connectivity framework 
/example-code/networking/how-to-make-a-network-request-wait-for-an-internet-connection-using-waitsforconnectivity">How to make a network request wait for an internet connection using waitsForConnectivity 
/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type">How to download JSON from the internet and decode it into any Codable type 
/example-code/language/how-to-check-whether-a-module-is-available-using-canimport">How to check whether a module is available using canImport() 
/example-code/language/how-to-check-your-program-state-using-precondition">How to check your program state using precondition()</a>
-->

:::

---

<TagLinks />