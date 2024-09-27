---
lang: ko-KR
title: "How to change your app icon dynamically with setAlternateIconName()"
description: "Article(s) > How to change your app icon dynamically with setAlternateIconName()"
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
  - ios-10.3
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to change your app icon dynamically with setAlternateIconName()"
    - property: og:description
      content: "How to change your app icon dynamically with setAlternateIconName()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname.html
date: 2022-12-29
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
  "title": "How to change your app icon dynamically with setAlternateIconName() | UIKit - free Swift example code",
  "desc": "How to change your app icon dynamically with setAlternateIconName()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.3

<!-- TODO: 작성 -->

<!--
iOS gives developers the ability to change their app’s icon programmatically, although it takes a little work to set up. It also isn’t quite as powerful as you might hope – you can’t recreate the moving hands of the Clock app, for example.

The actual code to change your app’s icon is trivial, but first there’s some setup work because you must declare all possible icons in your Info.plist file. The process behind this is far from optimal, and right now the best thing to do is edit your Info.plist as XML rather than trying to use the built-in property list editor in Xcode.

To get started, we need some icons. **These should be placed loose in your project or in a group, rather than inside an asset catalog.** Remember to use the @2x and @3x naming convention to ensure iOS automatically picks the correct icon for users’ devices.

For this example, we’re using these example icon files:

- Icon-1@2x.png, Icon-1@3x.png
<li>Icon-2@2x.png, Icon-2@3x.png
<li>Icon-3@2x.png, Icon-3@3x.png

They are all just regular PNGs, with the @2x being 120x120 and the @3x being 180x180.

Now go to your project navigator, right-click your Info.plist file, and choose Open As > Source Code. This will reveal the raw XML behind your plist – it might seem like a lot at first, but trust me this is *way* better than using the GUI for this particular task.

Defining the icons for your app is done with a very specific set of property list keys and values:

1. `CFBundleIcons` is a dictionary that defines what your primary icon is (`CFBundlePrimaryIcon`) and what your alternate icons are (`CFBundleAlternateIcons`)
<li>The primary icon key itself is a dictionary that lists its icon files (`CFBundleIconFiles`), which is an array containing the filenames for your primary icon, and whether iOS should apply gloss effects to it (`UIPrerenderedIcon`). Yes, that latter setting has been dead since iOS 7 but it still loiters around.
<li>The alternate icons key is also a dictionary, but this time the keys of its children are the names of images you want to use. This doesn’t need to be their filename, just however you want to reference each icon in your code.
<li>Each icon name is another dictionary, which contains the same two keys as `CFBundlePrimaryIcon`: the `CFBundleIconFiles` array and the `UIPrerenderedIcon` boolean.

To be quite clear, `CFBundleIcons` is a dictionary containing the key `CFBundleAlternateIcons`, which is a dictionary containing the key `YourImageName`, which is another dictionary containing the icon files and gloss effect settings.

If your head is spinning a little, that’s OK: it really is far too complex and I’m amazed this is new API. However, it’s what we have so if you want to start using it today then you’re going to want some example XML to get you started.

At the end of your property list XML you should see this:

```swift
</dict>
</plist>
```

*Before that* – i.e., directly before `</dict>`, add this:

```swift
<key>CFBundleIcons</key>
<dict>
    <key>CFBundlePrimaryIcon</key>
    <dict>
        <key>CFBundleIconFiles</key>
        <array>
            <string>Icon-1</string>
        </array>
        <key>UIPrerenderedIcon</key>
        <false/>
    </dict>
    <key>CFBundleAlternateIcons</key>
    <dict>
        <key>AppIcon-2</key>
        <dict>
            <key>CFBundleIconFiles</key>
            <array>
                <string>Icon-2</string>
            </array>
            <key>UIPrerenderedIcon</key>
            <false/>
        </dict>
        <key>AppIcon-3</key>
        <dict>
            <key>CFBundleIconFiles</key>
            <array>
                <string>Icon-3</string>
            </array>
            <key>UIPrerenderedIcon</key>
            <false/>
        </dict>
    </dict>
</dict>
```

Again, I’ve used the files Icon-1@2x.png, Icon-1@3x.png, Icon-2-@2x.png, Icon-2@3x.png, Icon-3-@2x.png, and Icon-3@3x.png for that – you’ll need to replace those filenames with your own.

**Do not put the @2x or @3x parts into your plist, and don’t add the .png either.**

In that example XML above I used the icon names “AppIcon-2” and “AppIcon-3”. Remember, these *aren’t* the filenames, they are just the reference names you want to use in your code.

Now that you have your property list configured the rest is easy: all the hard work is done by the method `setAlternateIconName()`, which takes an icon name to change to or nil to use the app’s default icon.

For example, you might want to add a button that changes your app icon to AppIcon-2, in which case you would use this:

```swift
UIApplication.shared.setAlternateIconName("AppIcon-2")
```

To reset your icon to the primary icon, you would use this:

```swift
UIApplication.shared.setAlternateIconName(nil)
```

If you want, you can optionally provide a completion handler to be run when the call finishes. This gets passed an `Error?` parameter that will be set to a value if something went wrong, so if you wanted to make your code more robust you might use something like this:

```swift
UIApplication.shared.setAlternateIconName("AppIcon-2") { error in
    if let error = error {
        print(error.localizedDescription)
    } else {
        print("Success!")
    }
}
```

That’s all you need to get started, but it’s important to mention two more things just briefly.

First, you can check whether your app is able to switch to an alternate icon by checking the `supportsAlternateIcons` property on your application, like this:

```swift
if UIApplication.shared.supportsAlternateIcons {
    // let the user choose a new icon
}
```

You can also query which alternate icon is currently showing by reading the `alternateIconName` property. This is a `String?`: it will be `nil` if your primary icon is showing, or an icon name if an alternate icon is showing:

```swift
print(UIApplication.shared.alternateIconName ?? "Primary")
```

One last thing: `setAlternateIconName()` looks for the icon files in your app’s resource folder rather than any arbitrary location, which means you can’t generate icons dynamically.

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/uikit/how-to-add-a-number-over-your-app-icon-using-applicationiconbadgenumber">How to add a number over your app icon using applicationIconBadgeNumber 
/quick-start/swiftui/how-to-show-text-and-an-icon-side-by-side-using-label">How to show text and an icon side by side using Label 
/quick-start/swiftui/how-to-dynamically-change-between-vstack-and-hstack">How to dynamically change between VStack and HStack 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a>
-->

:::

---

<TagLinks />