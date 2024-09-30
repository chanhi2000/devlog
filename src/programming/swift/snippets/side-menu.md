---
lang: ko-KR
title: Side Menu
description: Snippets > Side Menu
icon: fas fa-eye-dropper
category: 
  - Swift
  - Snippets
tag: 
  - swift
  - swiftui
  - snippets
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## Preview

<!-- ![](instagram/CEBRs2fABux/preview.gif) -->

::: tabs

@tab:active ContentView

```swift
import SwiftUI

struct ContentView: View {
  
  @State var showMenu = false

  var body: some View {
    let drag DragGesture() 
      .onEnded {
        if $0.translation.width < -100 { 
          withAnimation {
            self.showMenu = false
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
        .gesture (drag)
      }
      .navigationBarTitle("My App", displayMode: .inline)
      .navigationBarItems(leading: Button (action: { 
        withAnimation { 
          self.showMenu.toggle()
        }
      }, label: {
        Image(system Name: "line.horizontal.3")
          .imageScale(.large)
          .foregroundColor(.red)
        }
      }))
  }
}
```

@tab MenuView

```swift
struct MenuView: View {
  var body: some View {
    VStack(alignment: .leading) {
      HStack {
        Image(systemName: "envelope.badge")
          .foregroundColor(.gray)
          .imageScale(.large)
        Text("Mail")
          .foregroundColor(.gray)
          .font(.headline)
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
    }
    .padding()
    .frame(maxWidth: .infinity, alignment: .leading)
    .background(Color.black)
    .edgeIgnoringSafeArea(.all)
  }
}

struct ContentView_Previews: PreviewProvider {
  static var previews: some View {
    ContentView()
  }
}
```

---

<TagLinks />

<!-- https://www.instagram.com/p/CEBRs2fABux -->