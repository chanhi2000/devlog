---
lang: ko-KR
title: "How to use Touch ID to authenticate users by fingerprint"
description: "Article(s) > How to use Touch ID to authenticate users by fingerprint"
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
      content: "Article(s) > How to use Touch ID to authenticate users by fingerprint"
    - property: og:description
      content: "How to use Touch ID to authenticate users by fingerprint"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-use-touch-id-to-authenticate-users-by-fingerprint.html
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
  "title": "How to use Touch ID to authenticate users by fingerprint | System - free Swift example code",
  "desc": "How to use Touch ID to authenticate users by fingerprint",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-use-touch-id-to-authenticate-users-by-fingerprint",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Touch ID is an easy and secure way for users to authenticate themselves, so its no surprise that it's caught on so quickly among apps. Authenticating with Touch ID automatically uses the fingerprints registered by the user when they set up Touch ID, and you never have access to those fingerprints, which means it's both low-friction and extra-secure.

To get started, you need to import the LocalAuthentication framework like this:

```swift
import LocalAuthentication
```

The actual act of authenticating users has a number of possible results, and you need to catch them all:

- The user might not have a Touch ID-capable device.
<li>The user might have a Touch ID-capable device, but might not have configured it.
<li>The user failed to authenticate, perhaps because they asked to enter a passcode rather than use Touch ID.

Note that Apple insists that your app provide a passcode method of authentication as a back up. More annoyingly, you need to request and store this passcode yourself – it's not even done by Apple using the system unlock code!

Asking for and setting a passcode is easy enough, so I'll leave that to you. The important bit is asking for Touch ID authentication, which is done using this code:

```swift
func authenticateUser() {
    let context = LAContext()
    var error: NSError?

    if context.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: &error) {
        let reason = "Identify yourself!"

        context.evaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, localizedReason: reason) {
            [unowned self] success, authenticationError in

            DispatchQueue.main.async {
                if success {
                    self.runSecretCode()
                } else {
                    let ac = UIAlertController(title: "Authentication failed", message: "Sorry!", preferredStyle: .alert)
                    ac.addAction(UIAlertAction(title: "OK", style: .default))
                    self.present(ac, animated: true)
                }
            }
        }
    } else {
        let ac = UIAlertController(title: "Touch ID not available", message: "Your device is not configured for Touch ID.", preferredStyle: .alert)
        ac.addAction(UIAlertAction(title: "OK", style: .default))
        present(ac, animated: true)
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-measure-touch-strength-using-3d-touch">How to measure touch strength using 3D Touch 
/example-code/uikit/how-to-find-a-touchs-location-in-a-view-with-locationin">How to find a touch's location in a view with location(in:) 
/example-code/games/how-to-find-a-touchs-location-in-a-node-using-locationin">How to find a touch's location in a node using location(in:) 
/example-code/uikit/how-to-add-a-uiapplicationshortcutitem-quick-action-for-3d-touch">How to add a UIApplicationShortcutItem quick action for 3D Touch 
/quick-start/concurrency/whats-the-difference-between-a-task-and-a-detached-task">What’s the difference between a task and a detached task?</a>
-->

:::

---

<TagLinks />