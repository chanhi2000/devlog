---
lang: ko-KR
title: 🛹Snippets
description: 🕊️Swift > 🛹Snippets
category: 🕊️Swift
tags: ["references", "swift"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## SwiftUI

<!-- <VideoPlayer 
  title="Tip #435: Side Menu SwiftUI. Create a Side Menu that allows you to present options for the user to navigate through your app. Swipe for code."
  src="https://scontent-ssn1-1.cdninstagram.com/v/t50.2886-16/118175361_659144374996229_5541929605126927887_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jYXJvdXNlbF9pdGVtLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=v3X7jw4pMusAX99hJAB&edm=AP_V10EBAAAA&vs=17865647122989656_3394607625&_nc_vs=HBkcFQAYJEdJRTJDd2NGelZNQ2ZWY0NBQV8yend1ZDRfaE1ia1lMQUFBRhUAAsgBACgAGAAbABUAACawzJLTw628PxUCKAJDMywXQCwhysCDEm8YEmRhc2hfYmFzZWxpbmVfMV92MREAde4HAA%3D%3D&ccb=7-5&oh=00_AfDz_WRcMV0abyPUT2Mvw76JbN1gaIMJeeHqvdyMPGJExw&oe=645F61AC&_nc_sid=4f375e" /> -->

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

<TagLinks />
