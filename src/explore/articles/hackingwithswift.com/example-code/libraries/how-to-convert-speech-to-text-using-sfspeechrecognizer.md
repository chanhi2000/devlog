---
lang: ko-KR
title: "How to convert speech to text using SFSpeechRecognizer"
description: "Article(s) > How to convert speech to text using SFSpeechRecognizer"
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
  - ios-10.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to convert speech to text using SFSpeechRecognizer"
    - property: og:description
      content: "How to convert speech to text using SFSpeechRecognizer"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-convert-speech-to-text-using-sfspeechrecognizer.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Libraries - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/libraries/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to convert speech to text using SFSpeechRecognizer | Libraries - free Swift example code",
  "desc": "How to convert speech to text using SFSpeechRecognizer",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-convert-speech-to-text-using-sfspeechrecognizer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.0

<!-- TODO: 작성 -->

<!-- 
iOS has a built-in speech transcription system, which allows you to convert any audio recording into a text stream. It takes a few steps to configure, so let’s walk through them.

First, add `import Speech` to the top of your Swift file, to bring in the Speech framework.

Second, request permission to transcribe audio:

```swift
func requestTranscribePermissions() {
    SFSpeechRecognizer.requestAuthorization { [unowned self] authStatus in
        DispatchQueue.main.async {
            if authStatus == .authorized {
                print("Good to go!")
            } else {
                print("Transcription permission was declined.")
            }
        }
    }
}
```

Third, add a key to your Info.plist called `NSSpeechRecognitionUsageDescription`, then give it a string describing what you intend to do with the transcriptions.

Finally, write a method to perform transcription on an audio URL. This URL should be a recording you’ve already made, that is stored locally on the device:

```swift
func transcribeAudio(url: URL) {
    // create a new recognizer and point it at our audio
    let recognizer = SFSpeechRecognizer()
    let request = SFSpeechURLRecognitionRequest(url: url)

    // start recognition!
    recognizer?.recognitionTask(with: request) { [unowned self] (result, error) in
        // abort if we didn't get any transcription back
        guard let result = result else {
            print("There was an error: \(error!)")
            return
        }

        // if we got the final transcription back, print it
        if result.isFinal {
            // pull out the best transcription...
            print(result.bestTranscription.formattedString)
        }
    }
}
```

Note: the `isFinal` property is there because you may get an initial transcription back containing some or all of the text, but it’s only considered final – i.e. as good as it gets – when the `isFinal` flag is true.

-->

::: details Similar solutions…

<!--
/example-code/media/how-to-convert-text-to-speech-using-avspeechsynthesizer-avspeechutterance-and-avspeechsynthesisvoice">How to convert text to speech using AVSpeechSynthesizer, AVSpeechUtterance and AVSpeechSynthesisVoice 
/example-code/media/how-to-highlight-text-to-speech-words-being-read-using-avspeechsynthesizer">How to highlight text to speech words being read using AVSpeechSynthesizer 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/how-to-add-advanced-text-styling-using-attributedstring">How to add advanced text styling using AttributedString 
/quick-start/swiftui/how-to-create-custom-text-effects-and-animations">How to create custom text effects and animations</a>
-->

:::

---

<TagLinks />