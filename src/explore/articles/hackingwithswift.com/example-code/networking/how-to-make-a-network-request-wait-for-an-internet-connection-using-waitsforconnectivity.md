---
lang: ko-KR
title: "How to make a network request wait for an internet connection using waitsForConnectivity"
description: "Article(s) > How to make a network request wait for an internet connection using waitsForConnectivity"
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
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to make a network request wait for an internet connection using waitsForConnectivity"
    - property: og:description
      content: "How to make a network request wait for an internet connection using waitsForConnectivity"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/networking/how-to-make-a-network-request-wait-for-an-internet-connection-using-waitsforconnectivity.html
date: 2019-10-27
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
  "title": "How to make a network request wait for an internet connection using waitsForConnectivity | Networking - free Swift example code",
  "desc": "How to make a network request wait for an internet connection using waitsForConnectivity",
  "link": "https://hackingwithswift.com/example-code/networking/how-to-make-a-network-request-wait-for-an-internet-connection-using-waitsforconnectivity",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!-- 
If you use `URLSession` to make a data task while the user has no internet connection, your request will fail immediately and report an error. However, if you create your session with the `waitsForConnectivity` configuration option set to true, then the system will automatically wait some time to see if connectivity becomes available before trying the request.

For example, this creates a data task that fetches a URL only when internet connectivity is available:

```swift
let config = URLSessionConfiguration.default
config.waitsForConnectivity = true

URLSession(configuration: config).dataTask(with: yourURL) { data, response, error in
    if let error = error {
        print(error.localizedDescription)
    } ei

    // use your data here
}.resume()
```

By default, the system will wait seven days to see if internet connectivity becomes available, but you can control that with the `timeoutIntervalForResource` property on your configuration. For example, this will ask the system to wait 60 seconds:

```swift
config.timeoutIntervalForResource = 60
```

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-make-one-operation-wait-for-another-to-complete-using-adddependency">How to make one operation wait for another to complete using addDependency() 
/example-code/networking/how-to-create-a-peer-to-peer-network-using-the-multipeer-connectivity-framework">How to create a peer-to-peer network using the multipeer connectivity framework 
/example-code/networking/how-to-check-for-internet-connectivity-using-nwpathmonitor">How to check for internet connectivity using NWPathMonitor 
/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type">How to download JSON from the internet and decode it into any Codable type 
/quick-start/swiftui/how-to-create-a-core-data-fetch-request-using-fetchrequest">How to create a Core Data fetch request using @FetchRequest</a>
-->

:::

---

<TagLinks />