---
lang: ko-KR
title: How to let users import videos using PhotosPicker
description: Article(s) > How to let users import videos using PhotosPicker
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
      content: Article(s) > How to let users import videos using PhotosPicker
    - property: og:description
      content: How to let users import videos using PhotosPicker
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-import-videos-using-photospicker.html
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
  "title": "How to let users import videos using PhotosPicker | SwiftUI by Example",
  "desc": "How to let users import videos using PhotosPicker",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-import-videos-using-photospicker",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI's `PhotosPicker` allows users to select videos and bring them into our app, but in my experience it needs to be used in a fairly precise way to avoid problems.

I'll show you the code first, then explain why it takes as much work as it does:

```swift
import AVKit
import PhotosUI
import SwiftUI

struct Movie: Transferable {
    let url: URL

    static var transferRepresentation: some TransferRepresentation {
        FileRepresentation(contentType: .movie) { movie in
            SentTransferredFile(movie.url)
        } importing: { received in
            let copy = URL.documentsDirectory.appending(path: "movie.mp4")

            if FileManager.default.fileExists(atPath: copy.path()) {
                try FileManager.default.removeItem(at: copy)
            }

            try FileManager.default.copyItem(at: received.file, to: copy)
            return Self.init(url: copy)
        }
    }
}

struct ContentView: View {
    enum LoadState {
        case unknown, loading, loaded(Movie), failed
    }

    @State private var selectedItem: PhotosPickerItem?
    @State private var loadState = LoadState.unknown

    var body: some View {
        VStack {
            PhotosPicker("Select movie", selection: $selectedItem, matching: .videos)

            switch loadState {
            case .unknown:
                EmptyView()
            case .loading:
                ProgressView()
            case .loaded(let movie):
                VideoPlayer(player: AVPlayer(url: movie.url))
                    .scaledToFit()
                    .frame(width: 300, height: 300)
            case .failed:
                Text("Import failed")
            }
        }
        .onChange(of: selectedItem) { _ in
            Task {
                do {
                    loadState = .loading

                    if let movie = try await selectedItem?.loadTransferable(type: Movie.self) {
                        loadState = .loaded(movie)
                    } else {
                        loadState = .failed
                    }
                } catch {
                    loadState = .failed
                }
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-let-users-import-videos-using-photospicker-1.zip)

Yes, that's a lot, so let me break it down.

First, we need to import `AVKit` in order to have access to the `VideoPlayer` view, and we need `PhotosUI` to have access to the `PhotosPicker` view.

Second, the custom `Movie` struct is how we tell SwiftUI to import movie data. It can send data using `Transferable` by converting its URL into a `SentTransferredFile`, which means we can drag `Movie` instances out of an app, for example. It can also *receive* data using the `importing` closure: it copies the movie URL to our documents directory as “movie.mp4”, removing any existing file.

Third, importing a movie can take some time, so we need to make sure the user has some idea of our import state while the app runs. This is handled through an enum with four cases: `unknown` when the app starts, `loading` to show a progress spinner, `loaded` when we have a finished `Movie` to work with, and `failed` when the import `failed` for some reason.

Finally, in the `onChange()` modifier we ask the system to give us a `Movie` instance so we accept the URL and move it into the correct location for our app to use. This also takes care of setting the `loadState` property so our UI stays in sync.

Hopefully Apple can find a way to simplify this API in the future, but until then I'd certainly be keen to hear suggestions to make this code simpler!

::: details Similar solutions…

```component VPCard
{
  "title": "Article(s) > How to let users select pictures using PhotosPicker",
  "desc": "How to let users select pictures using PhotosPicker",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-select-pictures-using-photospicker.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to let users share content using the system share sheet",
  "desc": "How to let users share content using the system share sheet",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-share-content-using-the-system-share-sheet.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to let users delete rows from a list",
  "desc": "How to let users delete rows from a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-delete-rows-from-a-list.md",
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

```component VPCard
{
  "title": "Article(s) > How to let users find and replace text",
  "desc": "How to let users find and replace text",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-find-and-replace-text.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />