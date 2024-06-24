---
lang: ko-KR
title: How to use SwiftData with UIKit
description: Article(s) > How to use SwiftData with UIKit
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftdata
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to use SwiftData with UIKit
    - property: og:description
      content: How to use SwiftData with UIKit
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-use-swiftdata-with-uikit.html
date: 2023-09-30
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftData by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftdata/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to use SwiftData with UIKit | SwiftData by Example",
  "desc": "How to use SwiftData with UIKit",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-use-swiftdata-with-uikit", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Although SwiftData was designed with SwiftUI in mind, it works great with UIKit too. However, the same drawbacks apply as when using SwiftData with MVVM in SwiftUI: you're responsible for fetching and syncing data yourself.

With UIKit the smartest approach is to use a diffable data source, so that UIKit handles table or collection view updates for you. It's then your job to update your SwiftData object list whenever something important changes, so that UIKit can sync those changes to your layout.

Let's look at a complete code sample.

First, we need a model to work with, so here's a simple one that tracks the name and birth year of a user:

```swift
import SwiftData

@Model
class User {
    var name: String
    var birthYear: Int

    init(name: String, birthYear: Int) {
        self.name = name
        self.birthYear = birthYear
    }
}
```

Next, we need to define the sections we'll please in or list. We only have one here, but we still need to define it:

```swift
enum Section {
    case users
}
```

Now add some properties to your `UIViewController`: one to store the active model container, one to store a collection view, and one to store your data source:

```swift
var container: ModelContainer?

var collectionView: UICollectionView!
var dataSource: UICollectionViewDiffableDataSource<Section, User>?
```

::: tip

I'll be using a collection view in list mode because it provides maximum flexibility with styles, but this approach works equally well with table views.

:::

Now we can add two methods to the view controller: one to create the collection view, making sure it expands to fill the full screen, and another to create the diffable data source, showing it how to display users the way we want.

Add these two now:

```swift
func createCollectionView() {
    let configuration = UICollectionLayoutListConfiguration(appearance: .plain)
    let layout = UICollectionViewCompositionalLayout.list(using: configuration)

    collectionView = UICollectionView(frame: view.bounds, collectionViewLayout: layout)
    collectionView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    view.addSubview(collectionView)

    collectionView.register(UICollectionViewListCell.self, forCellWithReuseIdentifier: "User")
}

func createDataSource() {
    dataSource = UICollectionViewDiffableDataSource<Section, User>(collectionView: collectionView) { collectionView, indexPath, user in
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "User", for: indexPath)

        var content = UIListContentConfiguration.cell()
        content.text = "\(user.name) was born in \(user.birthYear)."
        cell.contentConfiguration = content

        return cell
    }
}
```

Both of those need to be called when our view is loaded, which means writing a `loadView()` method like this one:

```swift
override func loadView() {
    super.loadView()

    createCollectionView()
    createDataSource()
}
```

So far this is almost entirely vanilla UIKit code, but this next part is where SwiftData starts to come in: we need a method that loads all the users from our model container, places them into a diffable data snapshot, then applies that to our data source so our collection view updates

Add this now:

```swift
func loadUsers() {
    let descriptor = FetchDescriptor<User>()
    let users = (try? container?.mainContext.fetch(descriptor)) ?? []

    var snapshot = NSDiffableDataSourceSnapshot<Section, User>()
    snapshot.appendSections([.users])
    snapshot.appendItems(users)
    dataSource?.apply(snapshot, animatingDifferences: false)
}
```

::: tip

If you want to add sorting or filtering, you need to do it in the initializer for `FetchDescriptor`.

:::

To finish up, we need to provide a `viewDidLoad()` method that creates our SwiftData model container and calls `loadUsers()` for the first time:

```swift
override func viewDidLoad() {
    super.viewDidLoad()

    container = try? ModelContainer(for: User.self)
    loadUsers()
}
```

::: tip

Although you *can* create multiple model containers, most people won't. Instead, create your model container then pass its main context between your views, as needed.

:::

If you want to see it all working, we can add a simple `addSamples()` method like this one:

```swift
@objc func addSamples() {
    let taylor = User(name: "Taylor Swift", birthYear: 1989)
    let beyonce = User(name: "Beyoncé", birthYear: 1981)
    let ed = User(name: "Ed Sheeran", birthYear: 1991)

    container?.mainContext.insert(taylor)
    container?.mainContext.insert(beyonce)
    container?.mainContext.insert(ed)

    loadUsers()
}
```

Then we can add some more code to `viewDidLoad()` to configure a navigation bar button. Make sure you embed your view controller in a navigation controller in order to make this toolbar button visible!

Add this to the end of `viewDidLoad()`:

```swift
title = "Add Users"

navigationItem.rightBarButtonItem = UIBarButtonItem(title: "Add Samples", style: .plain, target: self, action: #selector(addSamples))
```

Now you can go ahead and run the app – you'll see that tapping Add Samples correctly updates the list of users.

Again, in UIKit it is *your* responsibility to make sure your data source remains up to date at all times – the `@Query` macro is not available to do that task for you.

---

<TagLinks />