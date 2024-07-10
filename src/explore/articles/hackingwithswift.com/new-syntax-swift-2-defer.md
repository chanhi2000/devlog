---
lang: ko-KR
title: "The defer keyword in Swift: try/finally done right"
description: "The defer keyword in Swift: try/finally done right"
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-2.0
  - xcode
head:
  - - meta:
    - property: og:title
      content: "The defer keyword in Swift: try/finally done right"
    - property: og:description
      content: "The defer keyword in Swift: try/finally done right"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/new-syntax-swift-2-defer.html
prev: /programming/swift/articles/README.md
date: 2019-09-23
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
  "title": "The defer keyword in Swift: try/finally done right – Hacking with Swift",
  "desc": "The defer keyword in Swift: try/finally done right",
  "link": "https://hackingwithswift.com/new-syntax-swift-2-defer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

Swift's `defer` keyword lets us set up some work to be performed when the current scope exits. For example, you might want to make sure that some temporary resources are cleaned up once a method exits, and `defer` will make sure that happens no matter how that exit happens.

---

## How it used to be: messy returns

Here's some dummy Swift code that opens a file, writes some data, then closes the file:

```swift
func writeLog() {
    let file = openFile()

    let hardwareStatus = fetchHardwareStatus()
    guard hardwareStatus != "disaster" else { return }
    file.write(hardwareStatus)

    let softwareStatus = fetchSoftwareStatus()
    guard softwareStatus != "disaster" else { return }
    file.write(softwareStatus)

    let networkStatus = fetchNetworkStatus()
    guard neworkStatus != "disaster" else { return }
    file.write(networkStatus)

    closeFile(file)
}
```

I'm not going to try to fill in any code for the methods in there, they are hopefully self-explanatory. As you can see, a file is opened, then various types of data are written out, before finally the file is closed.

But what happens if any one of those status checks returns "disaster"? Answer: our guard condition will trap the error and exit the method – *leaving the file open*.

There were two solutions to this, neither of which were nice. The first was to copy and paste the call to `closeFile()` so that it is called before any of those `returns`. The second was to create a pyramid of doom, with several stacked conditional statements to handle writing.

Swift 2 solves this problem, but does so in a simple and clear way: the `defer` keyword.

---

## Deferring work in Swift 2: `defer`

Swift 2 introduces the `defer` keyword, which effectively means "here's some what I want you to do later, no matter what." That work can be whatever you want: a single method call closing a file, or 50 lines of code doing some other important clean up work. The important thing is that Swift ensures that it will be run before the current scope is ended.

So, we could rewrite the above code like this:

```swift
func writeLog() {
    let file = openFile()
    defer { closeFile(file) }

    let hardwareStatus = fetchHardwareStatus()
    guard hardwareStatus != "disaster" else { return }
    file.write(hardwareStatus)

    let softwareStatus = fetchSoftwareStatus()
    guard softwareStatus != "disaster" else { return }
    file.write(softwareStatus)

    let networkStatus = fetchNetworkStatus()
    guard neworkStatus != "disaster" else { return }
    file.write(networkStatus)
}
```

With that `defer` call in place, `closeFile()` will be called no matter which of the `guards` are triggered, or even if none of them trigger and the method completes normally.

That's what I mean when I say that deferred work will always take place: if you return from a method at the end or part way through, or if you exit a method by throwing an error, your deferred work will take place.

This makes it perfect for ensuring code is cleaned up under all conditions, and is similar to `try/finally` in other languages.

---

## Defer scope in Swift 2

Using `defer` inside a method means that its work will be executed as the method is exiting. For example:

```swift
override func viewDidLoad() {
    super.viewDidLoad()

    print("Step 1")
    myFunc()
    print("Step 5")
}

func myFunc() {
    print("Step 2")
    defer { print("Step 3") }
    print("Step 4")
}
```

That will print "Step 1", "Step 2", "Step 4", "Step 3", "Step 5" – steps 3 and 4 are switched because 3 is deferred until the `myFunc()` method ends, i.e. when it goes out of scope programmatically.

This scope is effectively anything in braces, { and }, but realistically there are two main ways you may want to use it: inside a `do` block and inside a loop.

`do` blocks are usually used with `catch` to handle errors smoothly, but you don't need that – you can use `do` to create a temporary scope anywhere inside your method. Any variables created inside the `do` block exist only there, and any work you defer inside the block will execute as soon as the closing brace of the block is reached.

For example:

```swift
print("Step 1")

do {
    defer { print("Step 2") }
    print("Step 3")
    print("Step 4")
}

print("Step 5")
```

When that runs, you'll see 1, 3, 4, 2, 5 because 2 is deferred until the end of the `do` block.

As I said, loops are also natural places you might want to use `defer`, and it will execute at the end of each loop iteration. For example:

```swift
for i in 1...10 {
    print ("In \(i)")
    defer { print ("Deferred \(i)") }
    print ("Out \(i)")
}
```

---

## You can `defer` multiple things

One of the most powerful features of `defer` is that you can stack up multiple deferred pieces of work, and Swift will ensure they all get executed. What's more, it executes them in reverse order, meaning that the most recently deferred thing gets run first – effectively unwinding a stack.

Not only does this mean you can defer work without having to worry about what if anything was already deferred, but also that Swift safely unwinds its `defer` stack based on the order you chose.

There is one catch, albeit a minor one: your `defer` calls shouldn't try to exit the current scope using something like a `return` call or throwing an error. Other than that, you're good to go!

---

<TagLinks />