---
lang: ko-KR
title: "How to make Xcode play sounds while debugging"
description: "Article(s) > How to make Xcode play sounds while debugging"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to make Xcode play sounds while debugging"
    - property: og:description
      content: "How to make Xcode play sounds while debugging"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/xcode/how-to-make-xcode-play-sounds-while-debugging.html
date: 2020-12-31
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Xcode - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/xcode/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to make Xcode play sounds while debugging | Xcode - free Swift example code",
  "desc": "How to make Xcode play sounds while debugging",
  "link": "https://hackingwithswift.com/example-code/xcode/how-to-make-xcode-play-sounds-while-debugging",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
<p>Xcode has lots of tools to help you debug user interface problems, but it’s a little tricker to debug things you can’t see –&nbsp;network requests failing, data loading code going wrong, and so on.</p>
<p>A few years ago Markos Charatzas gave a <a href="https://qnoid.com/2013/06/08/Sound-Debugging.html">pioneering talk at NSConference</a> about the importance of using sound for debugging, and it’s a concept I’ve since used in my own projects.</p>
<p>To try it out, place a breakpoint somewhere in your code, then right-click on it and choose “Edit Breakpoint”. Click the Add Action button, then change the action to be “Sound” –&nbsp;you’ll see a list of system sounds you can choose from.</p>
<p>It doesn’t matter which sound you choose (although having sad sounds for failures does help!), but no matter what you decide you should check the box below marked “Automatically continue after evaluating actions” – this will ensure your breakpoint doesn’t stop execution of the program.</p>
<p>That checkbox plus the sound together means your program won’t pause when your breakpoints are hit, but will instead almost become musical: as network operations start, succeed, or fail, you’ll hear beeps, clicks, and bongs from your Mac so you’ll know exactly what’s happening just by listening.</p>
<p><strong>Note:</strong> In case you were worried, none of these sounds will actually play when your app ships –&nbsp;they are just used by Xcode’s debugging engine.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/media/how-to-play-sounds-using-avaudioplayer">How to play sounds using AVAudioPlayer</a></li><li><a href="/example-code/media/how-to-play-videos-using-avplayerviewcontroller">How to play videos using AVPlayerViewController</a></li><li><a href="/example-code/core-haptics/how-to-play-custom-vibrations-using-core-haptics">How to play custom vibrations using Core Haptics</a></li><li><a href="/quick-start/swiftui/how-to-play-movies-with-videoplayer">How to play movies with VideoPlayer</a></li><li><a href="/example-code/location/how-to-read-the-users-location-while-your-app-is-in-the-background">How to read the user’s location while your app is in the background</a></li></ul>
-->

:::

---

<TagLinks />