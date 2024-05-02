---
lang: ko-KR
title: How to let users select pictures using PhotosPicker
description: Article(s) > How to let users select pictures using PhotosPicker
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
      content: Article(s) > How to let users select pictures using PhotosPicker
    - property: og:description
      content: How to let users select pictures using PhotosPicker
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-select-pictures-using-photospicker.html
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
  "title": "How to let users select pictures using PhotosPicker | SwiftUI by Example",
  "desc": "How to let users select pictures using PhotosPicker",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-select-pictures-using-photospicker",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI's `PhotosPicker` brings up the system-standard photo import user interface, allowing users to select one or more images or videos to bring in to your app.

To use it to bring in an image, you need to import the `PhotosUI` module, then create some storage for a `PhotosPickerItem` to save what the user selected, and also an `Image` property to store the loaded asset. You can then watch for the `PhotosPickerItem` changing, and load its contents like this:

```swift
import PhotosUI
import SwiftUI

struct ContentView: View {
    @State private var avatarItem: PhotosPickerItem?
    @State private var avatarImage: Image?

    var body: some View {
        VStack {
            PhotosPicker("Select avatar", selection: $avatarItem, matching: .images)

            avatarImage?
                .resizable()
                .scaledToFit()
                .frame(width: 300, height: 300)
        }
        .onChange(of: avatarItem) {
            Task {
                if let loaded = try? await avatarItem?.loadTransferable(type: Image.self) {
                    avatarImage = loaded
                } else {
                    print("Failed")
                }
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-let-users-select-pictures-using-photospicker-1.zip)

If you want more control over the data that is selected, adjust the `matching` parameter based on what you're looking for:

- Use `matching: .screenshots` if you only want screenshots.
- Use `matching: .any(of: [.panoramas, .screenshots])` if you want either of those types.
- Use `matching: .not(.videos)` if you want any media that isn't a video.
- Use `matching: .any(of: [.images, .not(.screenshots)]))` if you want all kinds of images except screenshots.

If you want to let the user select multiple images, you should use an array of `PhotosPickerItem` objects then load them individually using a similar process:

```swift
import PhotosUI
import SwiftUI

struct ContentView: View {
    @State private var selectedItems = [PhotosPickerItem]()
    @State private var selectedImages = [Image]()

    var body: some View {
        NavigationStack {
            ScrollView {
                LazyVStack {
                    ForEach(0..<selectedImages.count, id: \.self) { i in
                        selectedImages[i]
                            .resizable()
                            .scaledToFit()
                            .frame(width: 300, height: 300)
                    }
                }
            }
            .toolbar {
                PhotosPicker("Select images", selection: $selectedItems, matching: .images)
            }
            .onChange(of: selectedItems) {
                Task {
                    selectedImages.removeAll()

                    for item in selectedItems {
                        if let image = try? await item.loadTransferable(type: Image.self) {
                            selectedImages.append(image)
                        }
                    }
                }
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-let-users-select-pictures-using-photospicker-2.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "Article(s) > How to let users import videos using PhotosPicker",
  "desc": "How to let users import videos using PhotosPicker",
"link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-import-videos-using-photospicker.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to let users select text",
  "desc": "How to let users select text",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-select-text.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to let users select a color with ColorPicker",
  "desc": "How to let users select a color with ColorPicker",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-select-a-color-with-colorpicker.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to let the user select multiple dates",
  "desc": "How to let the user select multiple dates",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-the-user-select-multiple-dates.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to let users pick options from a menu",
  "desc": "How to let users pick options from a menu",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-pick-options-from-a-menu.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />