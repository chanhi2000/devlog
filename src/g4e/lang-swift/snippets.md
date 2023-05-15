---
lang: ko-KR
title: 🔮Snippets
description: 🕊️Swift > 🔮Snippets
category: 🕊️Swift
tags: ["references", "swift"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## UIKit

### Animated Curve Line

- https://stackoverflow.com/questions/44006942/animated-curve-line-in-swift-3
- https://www.instagram.com/p/CIUtE6Tgzt2

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

---

## SwiftUI

<VideoPlayer 
  title="Tip #435: Side Menu SwiftUI. Create a Side Menu that allows you to present options for the user to navigate through your app. Swipe for code."
  src="https://scontent-ssn1-1.cdninstagram.com/v/t50.2886-16/118175361_659144374996229_5541929605126927887_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jYXJvdXNlbF9pdGVtLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=v3X7jw4pMusAX99hJAB&edm=AP_V10EBAAAA&vs=17865647122989656_3394607625&_nc_vs=HBkcFQAYJEdJRTJDd2NGelZNQ2ZWY0NBQV8yend1ZDRfaE1ia1lMQUFBRhUAAsgBACgAGAAbABUAACawzJLTw628PxUCKAJDMywXQCwhysCDEm8YEmRhc2hfYmFzZWxpbmVfMV92MREAde4HAA%3D%3D&ccb=7-5&oh=00_AfDz_WRcMV0abyPUT2Mvw76JbN1gaIMJeeHqvdyMPGJExw&oe=645F61AC&_nc_sid=4f375e" />

::: details SideMenu

> [<FontIcon icon="iconfont icon-hot"/> by  xcode_tips](https://www.instagram.com/xcode_tips)

| title | description |
| :---: | :--- |
| IDE Version | Xcode 11.5 |
| Swift Version | 5.2 |
| Xcode Template | Single View Application |
| User Interface | SwiftUI |

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

:::

::: details BottomSheet

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

<TagLinks />
