---
lang: ko-KR
title: "What's new in iOS 10 for developers"
description: "What's new in iOS 10 for developers"
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - ios
  - ios-10
  - xcode
head:
  - - meta:
    - property: og:title
      content:  What's new in iOS 10 for developers
    - property: og:description
      content: "What's new in iOS 10 for developers"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/ios10.html
prev: /programming/swift/articles/README.md
date: 2016-06-13
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/swift/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What's new in iOS 10 for developers – Hacking with Swift",
  "desc": "What's new in iOS 10 for developers",
  "link": "https://hackingwithswift.com/ios10",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

iOS 10 was announced at WWDC 2016, and introduces a huge range of changes for Apple developers who want to extend the system in various exciting ways. I've tried to summarize the key changes below so you can get started with them straight away, providing code where feasible. Note: you need to download Xcode 8 in order to build apps for iOS 10.

Working with iOS 10 *requires* you to code using Swift 3 unless you specifically request Swift 2.3, so if you've missed out on what's changed recently you should start with these two articles:

```component VPCard
{
  "title": "What's new in Swift 3.0 – Hacking with Swift",
  "desc": "What's new in Swift 3.0",
  "link": "/explore/articles/hackingwithswift.com/swift3.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What's new in Swift 2.2 – Hacking with Swift",
  "desc": "What's new in Swift 2.2",
  "link": "/explore/articles/hackingwithswift.com/swift2-2.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

---

## Extend iMessage with stickers and more

The Messages app has finally come of age in iOS 10, and Apple has introduced a huge collection of APIs to let you extend it in any number of ways. Want to edit photos inline? Done. Want to send payments? Done. Want to play games? Done. It's incredible, and probably the single largest feature for developers that was introduced.

Similar to Maps extensions, you can provide a custom user interface inside Messages by using the `MSMessagesAppViewController` class. If you want to create interactive messages – i.e., messages that live inside a session that's shared across multiple users and can be updated as a group - you use `MSSession` and `MSMessage`, and now users can collaborate to modify the same message multiple times over. `MSMessage` has built-in support for expiring messages: just set `shouldExpire` to true to have the message be deleted after a short time.

Helpfully, if a user sends a message using your iMessage app extension and their recipient doesn't have your app installed, iOS places a link right in Messages to allow them to install the app so that it can spread virally.

If you're looking just to provide your own customer stickers, you can use `MSStickerBrowserViewController` to create a custom sticker browser, or – even easier – create a simple sticker pack without writing a line of code using the sticker app template in Xcode.

One feature I particularly love is that the new Xcode 8 Simulator has a developer mode to let you see both sides of the conversation – this makes debugging easier. Note: in my testing the debugger was very good at failing to attach, which makes it hard to debug sending and receiving. If you find your breakpoints aren't working, go to Debug > Attach to Process > MessagesExtension and try again.

To get started with a custom Messages app, use the dedicated Messages Application template in Xcode. This produces an app that exists only as an extension – it won't have a separate home screen icon. When you run it inside the debugger, it will prompt you to launch the Messages app so you can start interacting with it.

Custom messages are sent by encoding your data as a URL inside `MSMessage` using key value pairs of `URLQueryItem`. For example, you might write a `composeMessage()` method like this:

```swift
func composeMessage(customMessage: String, caption: String) -> MSMessage {
    var components = URLComponents()

    // create a query item from our custom message
    let item = URLQueryItem(name: "MyCustomMessage", value: customMessage)

    // put it into an array of query items
    var items = [URLQueryItem]()
    items.append(item)
    components.queryItems = items

    // tell messages to use the default message template layout
    let layout = MSMessageTemplateLayout()
    layout.caption = caption

    // create a message and tell it the content and layout
    let message = MSMessage()
    message.url = components.url!
    message.layout = layout

    // return it for sending
    return message
}
```

The `customMessage` query item is attached silently to the message – it's for your app to see, not for the user. Instead, the user will just see the subtitle inside the messages UI.

When it comes through on the other end, your `MSMessagesAppViewController` subclass will have its `didReceive()` method called. This is where you reverse the process, splitting the URL components back into query items, then looking for your custom keys and values. This example `didReceive()` method unpacks and prints all the query items it finds, which is helpful for debugging:

```swift
override func didReceive(_ message: MSMessage, conversation: MSConversation) {
    guard let messageURL = message.url else { return }
    guard let urlComponents = NSURLComponents(url: messageURL, resolvingAgainstBaseURL: false), queryItems = urlComponents.queryItems else { return }

    print("URL Components", urlComponents)
    print("queryItems", queryItems)

    for item in queryItems {
        print("Received \(item.name) with value \(item.value)")
    }
}
```

Once you've crafted your custom message and written code to receive it, all you need to do now is send it. You get a default <FontIcon icon="iconfont icon-xcode"/>`Main.storyboard` with your messages extension, which contains a default label. Please delete it – we'll add a button in code instead.

Back in MessagesViewController.swift, add this to `viewDidLoad()`:

```swift
let button = UIButton(type: .system)
button.setTitle("Click here!", for: [])
button.sizeToFit()
view.addSubview(button)

button.addTarget(self, action: #selector(createMessage), for: .touchUpInside)

view.backgroundColor = UIColor.lightGray()
```

I added the light gray background color so you can be sure your view has loaded inside Messages.

When the button is tapped it will call a method named `createMessage()`. Here's the code for that:

```swift
func createMessage() {
    let message = composeMessage(customMessage: "This is really important.", caption: "User-facing caption here")
    self.activeConversation?.insert(message)
}
```

That's it! You should now be able to run the extension inside messages, then use the custom extension. To activate it, click the little App Store icon inside the message writing view, then swipe until you find the MessagesExtension pane – it's the one with a gray background. Now click the button to insert one of our custom messages, then add your own text if you want and send.

The new Messages extensions are extraordinarily powerful – I'm really looking forward to seeing how this looks with games, for example.

---

## Animations revisited

iOS 8 introduced additive animations, which although powerful did make it a little harder to create complex animations without screwing things up. iOS 10 revamps animation in a pretty amazing way: you now have much more fine-grained control over your animations, including the ability to pause, resume, stop, and scrub through animations for any animatable properties – positions, alpha, transform, and more.

The main class to use is called `UIViewPropertyAnimator`, which lets you create reusable animations and trigger them whenever you want. This animator acts directly on views you specify, and exposes things like `startAnimation()`, `pauseAnimation()`, `fractionComplete`, and more.

If you want to try this out yourself, create a Single View App project, then embed your view controller inside a navigation controller. Now add this code to your view controller:

```swift
class ViewController: UIViewController {
    var scaleUp: UIViewPropertyAnimator!

    override func viewDidLoad() {
        super.viewDidLoad()

        // create a bar button item to let us stop and start animations
        navigationItem.rightBarButtonItem = UIBarButtonItem(barButtonSystemItem: .play, target: self, action: #selector(toggleAnimation))

        // create a test square to animate
        let square = UIView(frame: CGRect(x: 100, y: 100, width: 128, height: 128))
        square.backgroundColor = UIColor.red()
        view.addSubview(square)

        // create our property animator to scale up the square
        scaleUp = UIViewPropertyAnimator(duration: 10, curve: .easeInOut) { [unowned square] in
            square.transform = CGAffineTransform(scaleX: 2, y: 2)
        }

        // tell the animation to begin now
        scaleUp.startAnimation()
    }

    func toggleAnimation() {
        // toggle between running and not running
        if scaleUp.isRunning {
            scaleUp.pauseAnimation()
        } else {
            scaleUp.startAnimation()
        }
    }
}
```

---

## Transcribe speech with SFSpeechRecognizer

iOS 10 has speech recognition built right in, effectively exposing a subset of Siri functionality so we can act on user speech ourselves.

The magic is done using several classes: `SFSpeechRecognizer` manages the whole process, `SFSpeechURLRecognitionRequest` lets you request transcription of an audio file at a URL, and `SFTranscription` gives you back the transcription ready for display or processing.

::: note

`SFSpeechRecognizer` doesn't handle audio recording for you, so you'll need to use something like `AVAudioRecorder` to capture some audio first – here's some sample code I wrote to get you started.

<!-- TODO: 작성 (/explore/articles/hackingwithswift.com/example-code/media/how-to-record-audio-using-avaudiorecorder.md) -->

:::

Assuming you have some audio you want iOS to transcribe, you should import the new Speech framework. You also need to add the `NSSpeechRecognitionUsageDescription` key to your Info.plist file, describing to the user how you intend to use speech transciption.

Once that's done, you should request authorization and, if granted, kick off transcription:

```swift
SFSpeechRecognizer.requestAuthorization { authStatus in
    if authStatus == SFSpeechRecognizerAuthorizationStatus.authorized {
        if let path = Bundle.main().urlForResource("test", withExtension: "m4a") {
            let recognizer = SFSpeechRecognizer()
            let request = SFSpeechURLRecognitionRequest(url: path)
            recognizer?.recognitionTask(with: request, resultHandler: { (result, error) in
                if let error = error {
                    print("There was an error: \(error)")
                } else {
                    print (result?.bestTranscription.formattedString)
                }
            })
        }
    }
}
```

If you want to use that example code, make sure you add test.m4a to your bundle. I found it was failing to work in the Simulator, and required an actual device – your results might vary.

What you'll see when the code runs is that your callback gets called several times as more parts of the transcription are completed. If you only want the full, finished transcription, wait until the `isFinal` property is set to true in the `result`.

Once you have your transcription back, you might find it useful to use `NSLinguisticTagger` to find the verbs, nouns, and adjectives in the parsed text – see my example code here.

<!-- TODO: 작성 (/explore/articles/hackingwithswift.com/example-code/strings/how-to-parse-a-sentence-using-nslinguistictagger.md) -->

::: warning

Apple's documentation states that when you adopt speech recognition in your app, you should "indicate to users that their speech is being recognized, and that they should not make sensitive utterances at that time." I suspect that will evolve into an official app review guideline that results in app rejections if you ignore it.

:::

---

## Super-powered notifications

`UILocalNotification` is dead; long live `UNMutableNotificationContent`. And `UNCalendarNotificationTrigger`. And `UNLocationNotificationTrigger`, `UNTimeIntervalNotificationTrigger`, `UNNotificationAction`, `UNNotificationAttachment`, and more. Yes: local notifications have had a dramatic overhaul, and Apple has massively improved the functionality you can deliver – although the learning curve has been steepened significantly.

In the old days of iOS 9, you would create a `UILocalNotification` object, and schedule it to run at a time you specified. Now you create notification content (what to show), define a notification trigger (when to show it), wrap them both inside a request, and send it off to a notification center for delivery. That same notification center is also responsible for managing user authorization, because you need the OK from users to show alerts.

Putting all that together, the following code requests user authorization to show alerts, then creates a notification that is shown after 10 seconds. To try it out, put this into your `viewDidLoad()` method, run the app, then press <kbd>Cmd</kbd>+<kbd>L</kbd> to lock your device so the alert will appear.

```swift
let center = UNUserNotificationCenter.current()

center.requestAuthorization(options: [.alert, .sound]) { (granted, error) in
    if granted {
        let content = UNMutableNotificationContent()
        content.title = "Hello"
        content.body = "Body goes here"
        content.sound = UNNotificationSound.default()

        // create a 10-second delay for our alert
        let trigger = UNTimeIntervalNotificationTrigger(timeInterval: 10, repeats: false)

        // the identifier lets you cancel the alert later if needed
        let request = UNNotificationRequest(identifier: "MyAlert", content: content, trigger: trigger)

        // schedule the alert to run
        center.add(request)
    }
}
```

The new notification system also lets you create a notification service provider, which acts as an intermediary between a message arriving (e.g. via a push delivery from Apple) and display on the device. The immediately obvious use for this is end-to-end encryption: your app can receive an encrypted message from Apple, decrypt it on the user's device, then display it in the notification center for your user to read.

---

## Hook into Siri with SiriKit

For certain kinds of apps – calling, messages, payments, photos, workouts, and ride booking – you can now hook directly into Siri. This allows iOS to work with a subset of possible spoken grammar – no need to figure out "Siri, ask [<FontIcon icon="fa-brands fa-apple"/>SPQR](https://apps.apple.com/us/app/spqr-latin-dictionary-and-reader/id407340562?ign-mpt=uo%3D4) what rabbit means in Latin", for example – but does mean we have a little less power than we might have hoped. Still, it does mean that Siri remains responsible for all the voice recognition and parsing, and our extensions get called to perform the actions.

To implement SiriKit, you need to register for the domains you care about, for example a messaging app might request messages and payments. When Siri recognizes the user wants to use your app, you'll be giving an object that represents the user’s intention, for example who they want to pay and how much. It's then down to you to action the payment transfer, and provide a response back to the system.

Intents come in two forms: graphical and non-graphical. The non-graphical intents are useful when you want to hook right into Apple Maps – you do the processing, but you want Maps to display the results. Graphical intents are called Intents UI Extensions, and let you extend the UI for Siri or Maps with your own interface design.

To get started with a SiriKit Intent, create a regular iOS project, then go to File > New > Target. Choose Application Extensions and choose Intents Extension. Xcode has a built-in template that gives you a basic workout app so you can say things like "Start my workout using My Awesome Exercise App."

Note: you'll need to enable your app in Settings > Siri.

Go to the Info.plist file for your extension, then open up NSExtension > NSExtensionAttributes > IntentsSupported and remove the workout intents – they only work on Apple Watch, which doesn't make for a great example to use for a template. Instead of the workout intents, add one called `INSendMessageIntent` – this lets us send messages like a messaging app.

Now open <FontIcon icon="fa-brands fa-swift"/>`IntentHandler.swift` and replace the existing workout class with something much simpler:

```swift
class IntentHandler: INExtension, INSendMessageIntentHandling {
    override func handler(for intent: INIntent) -> AnyObject {
        // This is the default implementation.  If you want different objects to handle different intents,
        // you can override this and return the handler you want for that particular intent.
        return self
    }

    func handle(sendMessage intent: INSendMessageIntent, completion: @escaping (INSendMessageIntentResponse) -> Void) {
        print("Send message: " + (intent.content ?? "No message"))

        let response = INSendMessageIntentResponse(code: .success, userActivity: nil)
        completion(response)
    }
}
```

I chose sending messages for this example because, as you can see, it's very simple to get started: you'll be given an `INSendMessageIntent` object that contains the user's intent – what message they are trying to send and the recipient's name – and you get to do whatever you want with that. You should call the `completion()` closure when you're done, passing in an instance of a `INSendMessageIntentResponse` declaring whether the result succeeded.

In the code above, I just printed out the message from the intent, but in your own code you'll want to read the `intent.recipients` array to see who the user wants to message.

The best bit of all this? Siri provides a system-standard user interface for this whole process, which means you look great out of the box.

---

## ReplayKit goes live

ReplayKit was introduced in iOS 9 as a way to let users record themselves using an app or game, then share it with friends. iOS 10 takes the whole process a step further by introducing live broadcasting of ReplayKit streams, and does so by building on existing live streaming services: users install apps that support live streaming, and ReplayKit lets you hook into them.

So, let's say you want to stream someone's game to a service like Twitch: you start by creating a `RPBroadcastActivityViewController` to let the user choose which streaming service they want to use. That will return back a `RPBroadcastController` that can start, pause, and stop live broadcasts, and also tell you whether broadcasting is currently happening through its `isBroadcasting`.

Everything else is handled for you by ReplayKit and the live-streaming service – not bad! Now to see which streaming services step up and add support…

---

## Xcode improvements

Xcode 8 has some welcome improvements, not least the ability to use both Swift 2.3 and Swift 3.0 at the same time. This means you can upgrade to iOS 10 but keep your existing Swift code, and migrate to Swift 3.0 only when you're ready.

Probably the most useful change in Xcode 8 is the ability to preview devices more easily. Apple has moved away from square view controllers that were designed to make you think about your layouts in an abstract way, and now instead shows actual device sizes once more. You'll see a little "View as..." option underneath your editing window – clicking that pops up a list of devices and orientations you can select from, including the ability to test Slide Over and Split View for iPad.

Apple also added the ability to specify color and image literals, which certainly make coding a little easier – although I'm dubious whether it makes it *simpler*. To try it out, write something like this:

PS: If you were wondering, Swift 2.3 has identical syntax to Swift 2.2, and is just there to add compatibility with iOS 10 and other new releases.

```swift
view.backgroundColor = color
```

Xcode's code completion should popup when you're typing "color", offering you the option to insert a Swift Color Literal. Choosing that option will replace "color" with a color well, which you can tap to select and activate a graphical color selection.

Working with image literals is even easier: when you add images to your project assets, they become available immediately as code. It's a bit strange at first, but you get used to it: if your image has the asset name "hello", which is likely if it had the original filename "hello.png", you can just write this:

```swift
myImageView.image = hello
```

The "hello" part will even have a small thumbnail of the image so you can see it's working.

The new Debug Memory Graph option in Xcode promises to be useful, and certainly will be if it lives up to what Apple promises. To activate it, look for the new button nestled between Debug View Hierarchy and Simulate Location in Xcode's debug buttons.

Finally, you're at last able to edit your storyboard while zoomed out – something that was impossible in previous versions. Thanks, Xcode team!

---

## Lots of minor tweaks…

There are lots of small improvements across iOS 10 – here are my favorites:

- `UIPasteboard` has lots of new properties to handle the new cross-platform clipboard between iOS and macOS. So, you can now query `hasColors`, `hasImages`, and `hasStrings`, and you can set items using a `localOnly` option for when your copied data shouldn't be shared with Handoff.
- SpriteKit's `SKScene` class now has a `sceneDidLoad()` method equivalent to `viewDidLoad()` in UIKit.
- SpriteKit also now has `SKTileGroup` class to make it easy to create square, hexagonal, and isometric tilemaps.
- GameplayKit added support for generating noise, which is great for making random maps in SpriteKit. In fact, SpriteKit has new `SKTexture` initializers for creating textures direct from noise maps. Noise is useful for simulating things like camera shake, fuzzing over textures to make them look natural, and random game worlds.
- GameplayKit now adds `shuffled` straight to `NSArray`, which is much simpler than what we had previously – remember `GKRandomSource.sharedRandom().arrayByShufflingObjectsInArray(countries) as! [String]`? Note: it's only on `NSArray` and not Swift arrays, and it still returns `[AnyObject]`.
- Safari content blockers now have a `enabled` property so you can check whether your content blocker has been enabled by the user.
- The `UIRefreshControl` has broken free of table views, and is now available right inside `UIScrollView` – a huge improvement for this under-used little control.
- Collection views and table views now have a `prefetchDataSource` to let you preload content to make scrolling smoother.
- There are new data detectors: `UIDataDetectorTypeFlightNumber`, `UIDataDetectorTypeLookupSuggestion`, and `UIDataDetectorTypeShipmentTrackingNumber`.
- The `openURL()` method of `UIApplication` is now firmly deprecated. You should use `application(_:open:options:)` instead.

---

<TagLinks />