---
lang: ko-KR
title: How to enumerate a fetch request to handle lots of data efficiently
description: Article(s) > How to enumerate a fetch request to handle lots of data efficiently
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
      content: Article(s) > How to enumerate a fetch request to handle lots of data efficiently
    - property: og:description
      content: How to enumerate a fetch request to handle lots of data efficiently
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-enumerate-a-fetch-request-to-handle-lots-of-data-efficiently.html
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
  "title": "How to enumerate a fetch request to handle lots of data efficiently | SwiftData by Example",
  "desc": "How to enumerate a fetch request to handle lots of data efficiently",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-enumerate-a-fetch-request-to-handle-lots-of-data-efficiently", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData’s model context has a dedicated `enumerate()` method that is designed to traverse large amounts of data efficiently. Whether it’s *effective* or not is down to you to judge, but I can at least show you how it works.

I’ll explain the drawbacks more in a moment, but first let’s look at some examples. If you worked at a large university with thousands of students and wanted to process them somehow – for example if you wanted to loop over everyone to calculate the total number of test scores by all students, as well as how many results were regular passes and how many were passes with distinction – then you might write code like this:1

```swift
let descriptor = FetchDescriptor<Student>()
var totalResults = 0
var totalDistinctions = 0
var totalPasses = 0

do {
    try modelContext.enumerate(descriptor) { student in
        totalResults += student.scores.count
        totalDistinctions += student.scores.filter { $0 >= 85 }.count
        totalPasses += student.scores.filter { $0 >= 70 && $0 < 85 }.count
    }
} catch {
    print("Unable to calculate student results.")
}

print("Total test results: \(totalResults)")
print("Distinctions: \(totalDistinctions)")
print("Passes: \(totalPasses)")
```

That loops over batches of students, adding however many tests they have taken to the total, then filtering their results and adding to either `totalDistinctions` or `totalPasses`.

The default batch size is 5000 objects, so SwiftData will load the first 5000 students, process them in the batch, then load the next 5000, and so on.

You can adjust the batch size using the `batchSize` parameter. For example, if I knew that each of my `Student` objects was quite large, for example if they had image data stored, it would be smart to reduce the batch size to 1000 or less so that fewer objects are loaded at a time:

```swift
try modelContext.enumerate(descriptor, batchSize: 1000) { student in
```

This is a trade-off: using a lower batch size ought to save memory, but will increase the amount of disk I/O. Similarly, using a larger batch size will reduce disk I/O but *increase* memory.

All that probably sounds very welcome, but in practice things aren’t so straightforward. Yes, adjusting the batch size *ought to* let us trade memory for I/O to get performance that fits our app, but at the time of writing SwiftData seems to keep all the objects in memory even after they have been processed, so you get huge memory bloat even with a reduced batch size.

Apple bills `enumerate()` as a method that “encapsulates platform best practices for traversing lots of data,” but please double check it to make sure it actually works well in your project.

---

<TagLinks />