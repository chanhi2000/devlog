---
lang: ko-KR
title: "How to add drag and drop to your app"
description: "Article(s) > How to add drag and drop to your app"
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
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to add drag and drop to your app"
    - property: og:description
      content: "How to add drag and drop to your app"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-drag-and-drop-to-your-app.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to add drag and drop to your app | UIKit - free Swift example code",
  "desc": "How to add drag and drop to your app",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-drag-and-drop-to-your-app",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!--
Drag and drop is a feature that’s hugely useful, so don’t be surprised if your users email you asking for it to be added. Even though both `UITableView` and `UICollectionView` both have support for drag and drop, it still takes a fair amount of work to set up.

To try it out now, create a new Single View App template in Xcode, then open <FontIcon icon="fa-brands fa-swift"/>`ViewController.swift` for editing. We need to put two table views in there, both filled with example data. 

This code will:

- Create two table views, and create two string array filled with "Left" and "Right".
<li>Configure both table views to use the view controller as their data source, give them hard-coded frames, register a re-use cell, then add them to the view.
<li>Implement `numberOfRowsInSection` so that each table view has the correct number of items based on its string array.
<li>Implement `cellForRowAt` to dequeue and cell then show the correct item from one of the two string arrays depending on which table this is.

This is all code from before iOS 11, so it should be nothing new to you. Replace the content of <FontIcon icon="fa-brands fa-swift"/>`ViewController.swift` with this:

```swift
import UIKit

class ViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {
    var leftTableView = UITableView()
    var rightTableView = UITableView()

    var leftItems = [String](repeating: "Left", count: 20)
    var rightItems = [String](repeating: "Right", count: 20)

    override func viewDidLoad() {
        super.viewDidLoad()

        leftTableView.dataSource = self
        rightTableView.dataSource = self

        leftTableView.frame = CGRect(x: 0, y: 40, width: 150, height: 400)
        rightTableView.frame = CGRect(x: 150, y: 40, width: 150, height: 400)

        leftTableView.register(UITableViewCell.self, forCellReuseIdentifier: "Cell")
        rightTableView.register(UITableViewCell.self, forCellReuseIdentifier: "Cell")

        view.addSubview(leftTableView)
        view.addSubview(rightTableView)
    }

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        if tableView == leftTableView {
            return leftItems.count
        } else {
            return rightItems.count
        }
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "Cell", for: indexPath)

        if tableView == leftTableView {
            cell.textLabel?.text = leftItems[indexPath.row]
        } else {
            cell.textLabel?.text = rightItems[indexPath.row]
        }

        return cell
    }
}
```

If you run the app you'll see it gives us two side-by-side table views filled with items. We’re going to modify that so the user can grab an item from one table and copy it into the other, in either direction.

The first step is to tell both table views to use the current view controller as their drag and drop delegate, then enable drag interaction on both of them. Add this code to `viewDidLoad()`:

```swift
leftTableView.dragDelegate = self
leftTableView.dropDelegate = self
rightTableView.dragDelegate = self
rightTableView.dropDelegate = self

leftTableView.dragInteractionEnabled = true
rightTableView.dragInteractionEnabled = true
```

Xcode will throw up several warnings because our current view controller class doesn't conform to the `UITableViewDragDelegate` or `UITableViewDropDelegate` protocols. This can be fixed by adding those two protocols to our class – scroll up to the top and change the class definition to this:

```swift
class ViewController: UIViewController, UITableViewDataSource, UITableViewDelegate, UITableViewDragDelegate, UITableViewDropDelegate {
```

This in turn creates another problem: we're saying we conform to those two new protocols, but we aren't implementing their required methods. Xcode can automatically complete required methods for protocols – click the number "2" on the red highlighted line of code, and you should see a more detailed explanation appear. Click "Fix" to have Xcode insert the two missing methods for us – you should see this appear in your class:

```swift
func tableView(_ tableView: UITableView, itemsForBeginning session: UIDragSession, at indexPath: IndexPath) -> [UIDragItem] {

}

func tableView(_ tableView: UITableView, performDropWith coordinator: UITableViewDropCoordinator) {

}
```

The `itemsForBeginning` method is easiest, so let's start there. It gets called when the user has initiated a drag operation on a table view cell by holding down their finger, and needs to return an array of drag items. If you return an empty array, you're effectively declining drag and drop.

We're going to give this method four lines of code:

1. Figure out which string is being copied. We can do that with a simple ternary: if the table view in question is the left table view then read from `leftItems`, otherwise read from `rightItems`.
<li>Attempt to convert the string to a `Data` object so it can be passed around using drag and drop.
<li>Place that data inside an `NSItemProvider`, marking it as containing a plain text string so other apps know what to do with it.
<li>Finally, place that item provider inside a `UIDragItem` so that it can be used for drag and drop by UIKit.

To mark the item data as being plain text we need to import the MobileCoreServices framework, so please add this line of code near the top of <FontIcon icon="fa-brands fa-swift"/>`ViewController.swift`:

```swift
import MobileCoreServices
```

Now replace your itemsForBeginning method stub with this:

```swift
func tableView(_ tableView: UITableView, itemsForBeginning session: UIDragSession, at indexPath: IndexPath) -> [UIDragItem] {
    let string = tableView == leftTableView ? leftItems[indexPath.row] : rightItems[indexPath.row]
    guard let data = string.data(using: .utf8) else { return [] }
    let itemProvider = NSItemProvider(item: data as NSData, typeIdentifier: kUTTypePlainText as String)

    return [UIDragItem(itemProvider: itemProvider)]
}
```

Now we need to fill in `performDropWith`, which is tricky because there are two potential complexities.

First, we might be getting several strings at the same time if someone is dragging in lots of things, so we need to insert them all sensibly. Second, we might be told where the user wants to insert the rows, but we might not – they might just drag the strings onto some whitespace in the table, so we need to decide what that means for us.

To solve those two problems means writing more code than you may have expected, but I'll try to walk you through it step by step to make it a bit easier.

First, the easier part: figuring out where to drop rows. The `performDropWith` method passes us an object of the class `UITableViewDropCoordinator`, which has a `destinationIndexPath` property telling us where the user wants to drop the data. However, it's optional: it will be nil if they dragged their data over some empty cells in our table view, and if that happens we're going to assume they wanted to drop the data at the end of the table.

So, start by adding this code to the performDropWith method:

```swift
let destinationIndexPath: IndexPath

if let indexPath = coordinator.destinationIndexPath {
    destinationIndexPath = indexPath
} else {
    let section = tableView.numberOfSections - 1
    let row = tableView.numberOfRows(inSection: section)
    destinationIndexPath = IndexPath(row: row, section: section)
}
```

As you can see, that either uses the coordinator's `destinationIndexPath` if it exists, or creates one by looking at the last row of the last section.

The next step is to ask the drop coordinator to load all the objects it has for a specific class, which in our case will be `NSString`. (No, regular `String` won’t work.)

We need to send this a closure of code to run when the items are ready, which is where the complexity starts: we need to insert them all one by one below the destination index path, modifying either the `leftItems` or `rightItems` arrays, before finally calling `insertRows()` on our table view to make them appear.

So, again: we've just written code to figure out the destination index path for a drop operation. But if we get multiple items then all we have is the initial destination index path – the path for the first item. The second item should be one row lower, the third item should be two rows lower, and so on. As we move down each item to copy, we're going to create a new index path and stash it away in an `indexPaths` array so we can call `insertRows()` on our table view all at once.

Add this code to your `performDropWith` method, below the previous code we just wrote:

```swift
// attempt to load strings from the drop coordinator
coordinator.session.loadObjects(ofClass: NSString.self) { items in
    // convert the item provider array to a string array or bail out
    guard let strings = items as? [String] else { return }

    // create an empty array to track rows we've copied
    var indexPaths = [IndexPath]()

    // loop over all the strings we received
    for (index, string) in strings.enumerated() {
        // create an index path for this new row, moving it down depending on how many we've already inserted
        let indexPath = IndexPath(row: destinationIndexPath.row + index, section: destinationIndexPath.section)

        // insert the copy into the correct array
        if tableView == self.leftTableView {
            self.leftItems.insert(string, at: indexPath.row)
        } else {
            self.rightItems.insert(string, at: indexPath.row)
        }

        // keep track of this new row
        indexPaths.append(indexPath)
    }

    // insert them all into the table view at once
    tableView.insertRows(at: indexPaths, with: .automatic)
}
```

That's all the code complete – you should be able to run the app now and drag rows between the two table views to copy them. This code also automatically supports drag and drop from other apps, so you can try dragging things from external apps onto your table views.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-support-drag-and-drop-in-swiftui">How to support drag and drop in SwiftUI 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a>
-->

:::

---

<TagLinks />