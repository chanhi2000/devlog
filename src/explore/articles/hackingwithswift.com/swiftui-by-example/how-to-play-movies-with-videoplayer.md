---
lang: ko-KR
title: How to play movies with VideoPlayer
description: Article(s) > How to play movies with VideoPlayer
category:
  - Swift
  - SwiftUI
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftui
  - hacking-with-swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to play movies with VideoPlayer
    - property: og:description
      content: How to play movies with VideoPlayer
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-play-movies-with-videoplayer.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to play movies with VideoPlayer | SwiftUI by Example",
  "desc": "How to play movies with VideoPlayer",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-play-movies-with-videoplayer",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `VideoPlayer` view lets us playback movies from any URL, local or remote. It comes from the AVKit framework, so you should make sure and add `import AVKit` before trying it out.

As an example, if you had video.mp4 in your app bundle and wanted to play it back, you’d use this:

```swift
VideoPlayer(player: AVPlayer(url:  Bundle.main.url(forResource: "video", withExtension: "mp4")!))
    .frame(height: 400)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-play-movies-with-videoplayer-1.zip)

![A video showing Niagara Falls, playing inside an iPhone.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-play-movies-with-videoplayer-1~dark.png)

::: info Reminder

You need to add `import AVKit` to your Swift file to use this.

:::

And if you want to play a remote video, use its remote URL instead:

```swift
VideoPlayer(player: AVPlayer(url:  URL(string: "https://bit.ly/swswift")!))
    .frame(height: 400)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-play-movies-with-videoplayer-2.zip)

![A video with a play button overlaid, inside an iPhone.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-play-movies-with-videoplayer-2~dark.png)

If you want, you can provide a second parameter to the `VideoPlayer` initializer that adds content to be drawn over the video. This will be drawn below the system video controls, but can respond to any events that aren’t caught by those controls.

For example, this places the text “Watermark” at the very top of the video area:

```swift
VideoPlayer(player: AVPlayer(url:  URL(string: "https://bit.ly/swswift")!)) {
    VStack {
        Text("Watermark")
            .foregroundStyle(.black)
            .background(.white.opacity(0.7))
        Spacer()
    }
    .frame(width: 400, height: 300)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-play-movies-with-videoplayer-3.zip)

A video with a play button overlaid, along with the word Watermark place at the top.

::: details Similar solutions…

```component VPCard
{
  "title": "Article(s) > How to add search tokens to a search field",
  "desc": "How to add search tokens to a search field",
  "link": "/swift/swiftui-by-example/10-lists/how-to-add-search-tokens-to-a-search-field.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to let users import videos using PhotosPicker",
  "desc": "How to let users import videos using PhotosPicker",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-let-users-import-videos-using-photospicker.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > SwiftUI tips and tricks",
  "desc": "SwiftUI tips and tricks",
  "link": "/swift/swiftui-by-example/24-what-now/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

How to add haptic effects using sensory feedback
How to animate SF Symbols

:::

---

<TagLinks />