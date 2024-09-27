---
lang: ko-KR
title: "How to play sounds using AVAudioPlayer"
description: "Article(s) > How to play sounds using AVAudioPlayer"
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
  - ios-2.2
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to play sounds using AVAudioPlayer"
    - property: og:description
      content: "How to play sounds using AVAudioPlayer"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-play-sounds-using-avaudioplayer.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Media - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/media/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to play sounds using AVAudioPlayer | Media - free Swift example code",
  "desc": "How to play sounds using AVAudioPlayer",
  "link": "https://hackingwithswift.com/example-code/media/how-to-play-sounds-using-avaudioplayer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.2

<!-- TODO: 작성 -->

<!-- 
The most common way to play a sound on iOS is using `AVAudioPlayer`, and it's popular for a reason: it's easy to use, you can stop it whenever you want, and you can adjust its volume as often as you need. The only real catch is that you must store your player as a property or other variable that won't get destroyed straight away – if you don't, the sound will stop immediately.

`AVAudioPlayer` is part of the AVFoundation framework, so you'll need to import that:

```swift
import AVFoundation
```

Like I said, you need to store your audio player as a property somewhere so it is retained while the sound is playing. In our example we're going to play a bomb explosion sound, so I created a property for it like this:

```swift
var bombSoundEffect: AVAudioPlayer?
```

With those two lines of code inserted, all you need to do is play your audio file. This is done first by finding where the sound is in your project using `path(forResource:)`, then creating a file URL out of it. That can then get passed to `AVAudioPlayer` to create an audio player object, at which point – finally – you can play the sound. Here's the code:

```swift
let path = Bundle.main.path(forResource: "example.mp3", ofType:nil)!
let url = URL(fileURLWithPath: path)

do {
    bombSoundEffect = try AVAudioPlayer(contentsOf: url)
    bombSoundEffect?.play()
} catch {
    // couldn't load file :(
}
```

If you want to stop the sound, you should use its `stop()` method.

-->

::: details Similar solutions…

<!--
/example-code/xcode/how-to-make-xcode-play-sounds-while-debugging">How to make Xcode play sounds while debugging 
/example-code/media/how-to-loop-audio-using-avaudioplayer-and-numberofloops">How to loop audio using AVAudioPlayer and numberOfLoops 
/example-code/media/how-to-play-videos-using-avplayerviewcontroller">How to play videos using AVPlayerViewController 
/example-code/core-haptics/how-to-play-custom-vibrations-using-core-haptics">How to play custom vibrations using Core Haptics 
/quick-start/swiftui/how-to-play-movies-with-videoplayer">How to play movies with VideoPlayer</a>
-->

:::

---

<TagLinks />