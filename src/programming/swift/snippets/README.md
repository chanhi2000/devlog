---
lang: ko-KR
title: Snippets
description: Swift > Snippets
icon: fas fa-eye-dropper
category: 
  - Swift
  - Snippets
tag: 
  - references
  - swift
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## UIKit

### Animated Curve Line

<VidStack 
  title="Tip #469: Animated Waveform UIKit. Create a waveform that animates along screen using UIBeizerPath and a special object CADisplayLink to render the drawing with the apps refresh rate of the display."
  src="/videos/swift/animated-waveform-uikit.mp4" />

<SiteInfo
  name="swift3 - Animated curve line in Swift 3 - Stack Overflow"
  desc="I want to draw some bezier lines and I want to animate them with a wave effect,"
  url="https://stackoverflow.com/questions/44006942/animated-curve-line-in-swift-3"
  preview="https://i.stack.imgur.com/MZv0h.png"
/>

::: details Animated Curve Line

### <VPIcon icon="fa-brands fa-swift"/>`ViewController.swift`

```swift
import UIKit

class ViewController: UIViewController {
    private weak var displayLink: CADisplayLink? // syncs drawing to refresh rate of display
    private var startTime: CFTimeInterval = 0

    private let shapeLayer: CAShapeLayer = {
        let shapeLayer = CAShapeLayer()
        shapeLayer.strokeColor = UIColor.red.cgColor // structure of wave is red
        shapeLayer.fillColor = UIColor.black.cgColor // the wave fill is black
        shapeLayer.lineWidth = 3 // width of the stroke
        return shapeLayer
    }()

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        view.layer.addSubLayer(shapeLayer)
        startDisplayLink()
    }

    override func viewDidDisappear(_ animated: Bool) {
        super.viewDidDisappear(animated)
        stopDisplayLink() 
        // stop the display link because it has a strong reference to the target
        // this is good practice because it uses memory and we need to deallocate it when we are not using it.
    }

    private func startDisplayLink() {
        startTime = CACurrentMediaTime()
        self.displayLink?.invalidate()
        let displayLink = CADisplayLink(taret: self, selector: #selector(handleDisplayLink(_:)))
        displayLink.add(to: .main, forMode: .common) // puts the displayLink on main thread
        self.displayLink = displayLink
    }

    private func stopDisplayLink() {
        displayLink?.invalidate()
    }

    @objc func handleDisplayLink(_ displayLink: CADisplayLink) {
        let elapsed = CACurrentMediaTime() - startTime // starts the elapsed at 0 and sets the offsets with startTime since that variables value doesn't change
        shapeLayer.path = wav(at: elapsed).cgPath // update the wave's path with a custom return function.
    }

    private func wave(at elapsed: Double) -> UIBezierPath {
        let elapsed = CGFloat(elapsed)
        let centerY = view.bounds.midY
        let amplitude = 50 - abs(elapsed.remainder(dividingBy: 3)) * 40 // height of the waveform

        func f(_ x: CGFloat) -> CGFloat {
            // function that is going to calculate the y position of the point in the waveform
            return sin((x + elapsed) * 4 * .pi) * amplitude + centerY
        }

        let path = UIBezierPath()
        let steps = Int(view.bounds.width / 10) // the amount of steps in the waveform
        path.move(to: CGPoint(x: 0, y: f(0)))
        for step in 1...steps {
            // start loop at 1 to match the count of steps
            let x = CGFloat(step) / CGFloat(steps)
            path.addLine(to: CGPoint(x: x * view.bounds.width, y: f(x))) // use that x value to draw the waveform
        }

        return path
    }

    override func viewDidLoad(){
        super.viewDidLoad()
    }
}
```

:::

---

## SwiftUI

### Side Menu

<VidStack 
  title="Tip #435: Side Menu SwiftUI. Create a Side Menu that allows you to present options for the user to navigate through your app. Swipe for code."
  src="/videos/swift/side-menu.mp4" />

::: details SideMenu

| title | description |
| :---: | :--- |
| IDE Version | Xcode 11.5 |
| Swift Version | 5.2 |
| Xcode Template | Single View Application |
| User Interface | SwiftUI |

#### <VPIcon icon="fa-brands fa-swift"/>`ContentView.swift`

```swift
import SwiftUI

struct ContentView: View {
    @State var showMenu = false

    var body: some View {
        let drag = DragGesture()
            .onEnded {
                if $0.translation.width < -100 {
                    withAnimation {
                        self.showMenu = false
                    }
                }
            }
    }

    return NavigationView {
        GeometryReader { geo in
            ZStack(alignment: .leading) {
                if self.showMenu {
                    MenuView()
                        .offset(x: self.showMenu ? -geo.size.width / 4 : 0)
                        .frame(width: geo.size.width / 2)
                        .transition(.move(edge: .leading))
                }
            }
            .gesture(drag)
        }
        .navigationBarTitle("My App", displayMode: .inline)
        .navigationBarItems(leading: Button(action: {
            withAnimation {
                self.showMenu.toggle()
            }
        }, label: {
            Image(systemName: "line.horizontal.3")
                .imageScale(.large)
                .foregroundColor(.red)
        }))
    }
}

struct MenuView: View {
    var body: some View {
        Vstack(alignment: .leading) {
            HStack {

            }
        }
        .padding(.top, 100)
        HStack {
            Image(systemName: "calendar")
                .foregroundColor(.gray)
                .imageScale(.large)
            Text("Calendar")
                .foregroundColor(.gray)
                .font(.headline)
        }
        .padding(.top, 30)
        HStack {
            Image(systemName: "flag")
                .foregroundColor(.gray)
                .imageScale(.large)
            Text("Flagged Mail")
                .foregroundColor(.gray)
                .font(.headline)
        }
        .padding(.top, 30)
        HStack {
            Image(systemName: "trash")
                .foregroundColor(.gray)
                .imageScale(.large)
            Text("Trash")
                .foregroundColor(.gray)
                .font(.headline)
        }
        .padding(.top, 30)
        Spacer()
        .padding()
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(Color.black)
        .edgesIgnoringSafeArea(.all)
    }
}
```

#### BottomSheet

```swift
import SwiftUI

struct BottomSheetView<Content: View> View {
    // MARK:- PROPERTIES
    @GestureState private var translation: CGFloat = 0
    @Binding var isOpen: Bool
    let maxHeight: CGFloat
    let minHeight: CGFloat
    let content: Content
    let radius = 20
    let heightRatio = 0
    let indicatorWidth = 40
    let indicatorHeight = 5

    init(isOpen: Binding<Bool>, maxHeight: CGFloat, @ViewBuilder content: () -> Content) {
        self.minHeight = maxHeight * CGFloat(heightRatio)
        self.maxHeight = maxHeight
        self.content = content()
        self._isOpen = isOpen
    }

    private var offset: CGFloat {
        isOpen ? 0 : maxHeight - minHeight
    }

    private var indicator: some View {
        RoundedRectangle(cornerRadius: CGFloat(radius))
            .fill(Color.secondary)
            .frame(
                width: CGFloat(indicatorWidth),
                height: CGFlaot(indicatorHeight)
            )
    }

    // MARK:- BODY
    var body: some View {
        GeometryReader { geometry in 
            VStack(spacing: 0) {
                self.indicator.padding()
                    .background(Color.white)
                self.content
            }
            .frame(width: geometry.size.width, height: self.maxHeight, alignment: .top)
            .background(Color.white)
            .cornerRadius(CGFloat(radius))
            .frame(height: geometry.size.height, alignment: .bottom)
            .offset(y: max(self.offset + self.translation, 0))
            .animation(.interpolatingSpring(mass: 1.0, stiffness: 100.0, damping: 20, initialVelocity: 0))
            .gesture(
                DragGesture().updating(self.$translation) { value, state, _ in
                    state = value.translation.height
                }.onEnded { value in
                    let snapDistance = self.maxHeight * 0.1
                    guard abs(value.translation.height) > snapDistance else {
                        return
                    }
                    self.isOpen = value.translation.height < 0
                }
            ) 
        }
    }
}

struct SheetView: View {
    // MARK:- PROPERTIES
    @State private var bottomSheetShown = false

    // MARK:- BODY
    var body: some View {
        if bottomSheetShown {
            Rectangle()
                .fill(Color.black)
                .opacity(0.7)
                .edgesIgnoringSafeArea(.all)
                .onTapGesture {
                    bottomSheetShown.toggle()
                }
        }

        GeometryReader { geometry in
            BottomSheetView(
                iseOpen: Self.$bottomSheetShown,
                // Setting Bottom sheet height percentage to 70% wrt main screen
                maxHeight: goemetry.size.height * 0.7
            ) {
                // This is the view you want to show in the bottom sheet
                SettingsView()
            }
        }
        .edgesIgnoringSafeArea(.all)
    }
}
```

:::

### Audio Bluetooth Connection

<VidStack
  title="Tip #496: Audio Bluetooth Connection. This code includes setting up your audio session in your app delegate to allow audio to be flipped between speaker and audio Bluetooth device. Trying this with AirPods: if you put your AirPods in your ear, the session will flip the audio from the speaker to the AirPods and update the image to a Bluetooth image and when removed the audio session flips back to the speaker with a speaker image."
  src="/videos/swift/audio-bluetooth-connection.mp4" />

::: details Audio Bluetooth Connection

#### `AppDelegate.swfit`

```swift
import UIKit
import AVFoundatino

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        do {
            try AVAudioSession.sharedInstance().setCategory(.playAndRecord, mode: .default, options: [.defaultToSpeaker, .allowBluetooth, .allowBluetoothA2DP])
        } catch let error {
            print(error.localizedDescription)
        }
        return true
    }
}
```

#### <VPIcon icon="fa-brands fa-swift"/>`ViewController.swift`

```swift
import UIKit
import AVFoundation
import CoreBluetooth

class ViewController: UIViewController {
    var manager: CBCentralManager!

    @IBOutlet weak var imageView: UIImageView!

    override func viewDidLoad() {
        super.viewDidLoad()
        manager = CBCentralManager(delegate: self, queue: nil)
        let currentRouteOutput = 
            AVAudioSession.sharedInstance().currentRRoute.outputs[0].portType
        checkSessionsOutput(currentRouteOutput: currentRouteOutput)
        NotificationCenter.default.addObserver(self, selector: #selector(handleRouteChange(_ :)), name: AVAudioSession.routeChangeNotification, object:nil) // when audio route changes from speaker to bluetooth
    }

    func checkSessionOutput(currentRouteOutput: AVAudioSession.Port) {
        if currentRouteOutput.rawValue.contains("BluetoothA2DPOutput") {
            imageView.image = UIImage(named: "bluetooth") // image from web, need to grab
        } else {
            imageView.image = UIImage(systemName: "speaker.wave.2.fill") // system image, anyone can access
        }
    }

    @objc func handleRouteChange(_ notification: Notification) {
        print("ROUTE CHANGE: \(notification.name)")
        let routeDescription = (notification as NSNotificatoin)
            .userInfo![AVAudioSessionRouteChangePreviousRouteKey] as! AVAudioSessionRouteDescription?

        let currentRouteOutput = 
            AVAudioSession.sharedInstance().currentRoute.outputs[0].portType

        if let prevRoute = routeDescription {
            print("Previous Route: \(prevRoute)")
            print("Current Route: \(String(describing: AVAudioSession.sharedInstance().currentRoute))")
        }
        checkSessionOutput(currentRouteOutput: currentRouteOutput)
    }
}

extension ViewController: CBCentralManagerDelegate, CBPeripheralDelegate {
    func centralManagerDidUpdateState(_ central: CBCentralManager) {
        switch manager.state {
        case .poweredOff: print("BLE service is powered off")
        case .poweredOn: print("BLE service is powered on and scanning")
        default: print("BLE service is in another state")
        }
    }
}
```

:::

### Note Analyzer AudioKit

<VidStack
  src="/videos/swift/note-analyzer-audiokit.mp4"/>

::: details Note Analyzer AudioKit

#### `Podfile`

```ruby
target 'MetronomeApp' do
  pod 'AudioKit', '~> 4.0'
end
```

#### `main.storyboard`

Add a `UILabel`

![note-analyzer-audiokit-01](/images/swift/note-analyzer-audiokit-01.jpg)

#### `Info.plist`

Enable `Privacy - Microphone Usage Description`

![note-analyzer-audiokit-02](/images/swift/note-analyzer-audiokit-02.jpg)

#### <VPIcon icon="fa-brands fa-swift"/>`ViewController.swift`

```swift
import UIKit
import AudioKit

protocol TunerDelegate {
    func tunerDidTick(pitch: Pitch, errRatio: Double)
}

class ViewController : UIViewController {
    @IBOutlet weak var noteLabel: UILabel!

    var tuner = Tuner()

    override func viewDidLoad() {
        super.viewDidLoad()
        tuner.start()
        Timer.scheduledTimer(timeInterval: 0.5, target: self, selector: #selector(getNote), userInfo: nil, repeats: true)
    }

    @objc func getNote() {
        print(tuner.getNote())
        noteLabel.text = tuner.getNote()
        switch tuner.returnAccidental {
        case .flat, .sharp:
            noteLabel.textColor = .red
        default:
            noteLabel.textColor = .green        
        }
    }
}

class Tuner {
    var mic: AKMicrophone
    var tracker: AKFrequencyTracker
    var silence: AKBooster

    let pollingInterval = 0.05
    var pollingTimer: Timer?

    var delegate: TunerDelegate?

    init() {
        do {
            try AVAudioSession.sharedInstance().setCategory(.record, mode: .measurement, options: [])
        } catch let error {
            print(error.localizedDescription)
        }

        AKSettings.audioInputEnabled = true
        mic = AKMicrophone()!
        tracker = AKFrequencyTracker.init(mic)
        silence = AKBooster(tracker, gain: 0)

        AKManager.output = silence
    }

    func start() {
        do {
            try AKManager.start()
        } catch let error {
            print(error.localizedDescription)
        }

        pollingTimer = Timer.scheduledTimer(withTimeInterval: pollingInterval, repeats: true, block: { (_) in
            self.pollingTick()
        })
    }

    func stop() {
        do {
            try AKManager.stop()
        } catch let error {
            print(error.localizedDescription)
        }

        if let t = pollingTimer {
            t.invalidate()
        }
    }

    var returnNote = Note.Name(rawValue: 0)
    var returnAccidental = Note.Accidental(rawValue: 0)

    private func pollingTick() {
        let frequency = Double(tracker.frequency)
        let pitch = Pitch.makePitchByFrequency(frequency)
        let errRatio = frequency / pitch.frequency
        returnNote = pitch.note.note
        returnAccidental = pitch.note.accidental

        if let d = delegate {
            d.tunerDidTick(ptich: pitch, errRatio: errRatio)
        }
    }

    func getNote() -> String {
        var accidental = ""
        switch returnAccidental {
        case .natural: accidental = "♮"    
        case .flat: accidental = "♭"
        case .sharp: accidental = "♯"
        default: break
        }
        let noteString = "\(returneNote ?? Note.Name.A) \(accidental)"
        return noteString
    }
}

class Note: Equatable {
    enum Accidental: Int { case naturla = 0, sharp, flat }
    enum Name: Int { case A = 0, B, C, D, E, F, G }

    static int all: [Note] = [
        Note(.C, .natural), Note(.C, .sharp), 
        Note(.D, .natural), 
        Note(.E, .flat), Note(.E, .natural),
        Note(.F, .natural), Note(.F, .sharp),
        Note(.G, .natural),
        Note(.A, .flat), Note(.A, .natural),
        Note(.B, .flat), Note(.B, .natural)
    ]

    var note: Name
    var accidental: Accidental

    // Initializer
    init(_ note: Name, _ accidental: Accidental) {
        self.note = note
        self.accidental = accidental
    }

    //Equality operators.
    static func ==(lhs: Note, rhs: Note) -> Bool {
        return lhs.note == rhs.note &&
          lhs.accidental == rhs.accidental
    }
    
    static func !=(lhs: Note, rhs: Note) -> Bool {
        return !(lhs == rhs)
    }

    var frequency: Double {
        let index = Note.all.firstIndex(of: self)! - Note.all.firstIndex(of: Note(.A, .natural))!
        return 440.0 * pow(2.0, Double(index) / 12.0)
    }
}

class Pitch {
    let frequency: Double
    let note: Note
    let octave: Int

    private init(note: Note, octave: Int) {
        self.note = note
        self.octave = octave
        self.frequency = note.frequency * pow(2.0, Double(octave) - 4.0)
    }

    static let all = Array((0...8).map { octave -> [Pitch] in
        Note.all.map { note -> Pitch in 
            Pitch(note: note, octave: octave)
        }
    }).joined()

    static func makePitchByFrequency(_ frequency: Double) -> Pitch {
        var results = all.map { pitch -> (pitch: Pitch, distance: Double) in 
            (pitch: pitch, distance: abs(pitch.frequency - frequency))
        }
        results.sort { $0.distance < $1.distance }
        return results.first!.pitch
    }
}
```

:::

### Stretchy Header

<VidStack src="/videos/swift/stretchy-header.mp4" />

::: details Stretchy Header

```swift
import SwiftUI

struct DiscountDetailsView: View {
    @EnvironmentObject private var model: FashionModel
    @State private var selection: Product?

    var product: [Product]

    // MARK:- BODY
    var body: some View {
        GeometryReader { geo in 
            content.toolbar(content: { /* ... [생략] ... */})
        }
    }

    var content: some View {
        ScrollView {
            VStack {
                DiscountHeader()
                ScrollView {
                    VStack {
                        LazyVGrid(columns: [GridItem(.adaptive(minimum: 150, maximum: 180), alignment: .center)]
                                 alignment: .center, spacing: 15) {
                            ForEach(product) { item in 
                                NavigationLink(destination: DetailsView(product: item), 
                                               tag: item,
                                               selection: $selection) {
                                    ProductCard(product: item)
                                }.buttonStyle(SquishableButtonStyle())
                                .tag(item)
                                .onReceive(model.$selectedProductID) { /* ... [생략] ... */ }
                            }
                        }
                    }.padding(.top, 20)
                    .padding(.horizontal)
                }
                .background(Color.init(.secondarySystemBackground))
            }
        }
    }
}
```

:::

---


<TagLinks />