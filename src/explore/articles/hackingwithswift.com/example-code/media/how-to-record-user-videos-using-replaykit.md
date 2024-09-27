---
lang: ko-KR
title: "How to record user videos using ReplayKit"
description: "Article(s) > How to record user videos using ReplayKit"
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
  - ios-3.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to record user videos using ReplayKit"
    - property: og:description
      content: "How to record user videos using ReplayKit"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-record-audio-using-avaudiorecorder.html
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
  "title": "How to record user videos using ReplayKit | Media - free Swift example code",
  "desc": "How to record user videos using ReplayKit",
  "link": "https://hackingwithswift.com/example-code/media/how-to-record-audio-using-avaudiorecorder",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!-- 
While it's not *hard* to record audio with an iPhone, it does take quite a bit of code so give yourself a few minutes to get this implemented. First you need to import the `AVFoundation` framework into your view controller.

You will need to add three properties to your view controller: a button for the user to tap to start or stop recording, an audio session to manage recording, and an audio recorder to handle the actual reading and saving of data. You can create the button in Interface Builder if you prefer; we'll be doing it in code here.

Put these three properties into your view controller:

```swift
var recordButton: UIButton!
var recordingSession: AVAudioSession!
var audioRecorder: AVAudioRecorder!
```

Recording audio requires a user's permission to stop malicious apps doing malicious things, so we need to request recording permission from the user. If they grant permission, we'll create our recording button. Put this into `viewDidLoad()`:

```swift
recordingSession = AVAudioSession.sharedInstance()

do {
    try recordingSession.setCategory(.playAndRecord, mode: .default)
    try recordingSession.setActive(true)
    recordingSession.requestRecordPermission() { [unowned self] allowed in
        DispatchQueue.main.async {
            if allowed {
                self.loadRecordingUI()
            } else {
                // failed to record!
            }
        }
    }
} catch {
    // failed to record!
}
```

You should replace the `// failed to record!` comment with a meaningful error alert to your user, or perhaps an on-screen label.

I made the code for `loadRecordingUI()` separate so you can replace it easily either with IB work or something else. Here's the least you need to do:

```swift
func loadRecordingUI() {
    recordButton = UIButton(frame: CGRect(x: 64, y: 64, width: 128, height: 64))
    recordButton.setTitle("Tap to Record", for: .normal)
    recordButton.titleLabel?.font = UIFont.preferredFont(forTextStyle: .title1)
    recordButton.addTarget(self, action: #selector(recordTapped), for: .touchUpInside)
    view.addSubview(recordButton)
}
```

That configures the button to call a method called `recordTapped()` when it's tapped. Don't worry, we haven't written that yet!

Before we write the code for `recordTapped()` we need to do a few other things. First, we need a method to start recording. This needs to decide where to save the audio, configure the recording settings, then start recording. Here's the code:

```swift
func startRecording() {
    let audioFilename = getDocumentsDirectory().appendingPathComponent("recording.m4a")

    let settings = [
        AVFormatIDKey: Int(kAudioFormatMPEG4AAC),
        AVSampleRateKey: 12000,
        AVNumberOfChannelsKey: 1,
        AVEncoderAudioQualityKey: AVAudioQuality.high.rawValue
    ]

    do {
        audioRecorder = try AVAudioRecorder(url: audioFilename, settings: settings)
        audioRecorder.delegate = self
        audioRecorder.record()

        recordButton.setTitle("Tap to Stop", for: .normal)
    } catch {
        finishRecording(success: false)
    }
}
```

That code won't build just yet, because it has two problems. First, it uses the method `getDocumentsDirectory()`, which is a helper method I include in most of my projects. Here it is:

```swift
func getDocumentsDirectory() -> URL {
    let paths = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)
    return paths[0]
}
```

Second, it assigns `self` to be the delegate of the audio recorder, which means you need to conform your view controller to the `AVAudioRecorderDelegate` protocol.

With the code written to start recording, we need matching code to finish recording. This will tell the audio recorder to stop recording, then put the button title back to either "Tap to Record" (if recording finished successfully) or "Tap to Re-record" if there was a problem. Here's the code:

```swift
func finishRecording(success: Bool) {
    audioRecorder.stop()
    audioRecorder = nil

    if success {
        recordButton.setTitle("Tap to Re-record", for: .normal)
    } else {
        recordButton.setTitle("Tap to Record", for: .normal)
        // recording failed :(
    }
}
```

With those two in place, we can finally write `recordTapped()`, because it just needs to call either `startRecording()` or `finishRecording()` depending on the state of the audio recorder. Here's the code:

```swift
@objc func recordTapped() {
    if audioRecorder == nil {
        startRecording()
    } else {
        finishRecording(success: true)
    }
}    
```

Before you're done, there's one more thing to be aware of: iOS might stop your recording for some reason out of your control, such as if a phone call comes in. We are the delegate of the audio recorder, so if this situation crops up you'll be sent a `audioRecorderDidFinishRecording()` message that you can pass on to `finishRecording()` like this:

```swift
func audioRecorderDidFinishRecording(_ recorder: AVAudioRecorder, successfully flag: Bool) {
    if !flag {
        finishRecording(success: false)
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/media/how-to-record-user-videos-using-replaykit">How to record user videos using ReplayKit 
/example-code/media/how-to-control-the-pitch-and-speed-of-audio-using-avaudioengine">How to control the pitch and speed of audio using AVAudioEngine 
/example-code/games/how-to-create-3d-audio-sound-using-skaudionode">How to create 3D audio sound using SKAudioNode 
/example-code/media/how-to-loop-audio-using-avaudioplayer-and-numberofloops">How to loop audio using AVAudioPlayer and numberOfLoops 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a>
-->

:::

---

<TagLinks />