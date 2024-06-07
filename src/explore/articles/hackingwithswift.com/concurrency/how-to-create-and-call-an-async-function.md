---
lang: ko-KR
title: How to create and call an async function
description: Article(s) > How to create and call an async function
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to create and call an async function
    - property: og:description
      content: How to create and call an async function
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-create-and-call-an-async-function.html
date: 2021-11-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift Concurrency by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/concurrency/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to create and call an async function | Swift Concurrency by Example",
  "desc": "How to create and call an async function",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-create-and-call-an-async-function", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Using async functions in Swift is done in two steps: declaring the function itself as being `async`, then calling that function using `await`. 

For example, if we were building an app that wanted to download a whole bunch of temperature readings from a weather station, calculate the average temperature, then upload those results, then we might want to make all three of those async:

1. Downloading data from the internet should always be done asynchronously, even a very small download can take a long time if the user has a bad cellphone connection.
2. Doing lots of mathematics might run quickly if the system is doing nothing else, but it might also take a long time if you have complex work and the system is busy doing something else.
3. Uploading data *to* the internet suffers from the same networking problems as downloading, and should always be done asynchronously.

To actually *use* those functions we would then need to write a fourth function that calls them one by one and prints the response. This function also needs to be async, because in theory the three functions it calls could suspend and so it might also need to be suspended.

I’m not going to do the actual networking code here, because we’ll be looking a lot at networking later on. Instead, I want to focus on the structure of our functions so you can see how they fit together, so we’ll be using mock data here – random numbers for the weather data, and the string “OK” for our server response.

Here’s the code:

```swift
func fetchWeatherHistory() async -> [Double] {
    (1...100_000).map { _ in Double.random(in: -10...30) }
}

func calculateAverageTemperature(for records: [Double]) async -> Double {
    let total = records.reduce(0, +)
    let average = total / Double(records.count)
    return average
}

func upload(result: Double) async -> String {
    "OK"
}

func processWeather() async {
    let records = await fetchWeatherHistory()
    let average = await calculateAverageTemperature(for: records)
    let response = await upload(result: average)
    print("Server response: \(response)")
}

await processWeather()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-create-and-call-an-async-function-1.zip)

So, we have three simple async functions that fit together to form a sequence: download some data, process that data, then upload the result. That all gets stitched together into a cohesive flow using the `processWeather()` function, which can then be called from elsewhere.

That’s not a lot of code, but it *is* a lot of functionality:

- Every one of those `await` calls is a potential suspension point, which is why we marked it explicitly. Like I said, one async function can suspend as many times as is needed.
- Swift will run each of the `await` calls in sequence, waiting for the previous one to complete. This is *not* going to run several things in parallel.
- Each time an `await` call finishes, its final value gets assigned to one of our constants – `records`, `average`, and `response`. Once created this is just regular data, no different from if we had created it synchronously.
- Because it calls async functions using `await`, it is *required* that `processWeather()` be itself an async function. If you remove that Swift will refuse to build your code.

When reading async functions like this one, it’s good practice to look for the `await` calls because they are all places where unknown other amounts of work might take place before the next line of code executes. 

Think of it a bit like this:

```swift
func processWeather() async {
    let records = await fetchWeatherHistory()
    // anything could happen here
    let average = await calculateAverageTemperature(for: records)
    // or here
    let response = await upload(result: average)
    // or here
    print("Server response: \(response)")
}
```

We’re only using local variables inside this function, so they are safe. However, if you were relying on properties from a class, for example, they might have changed between each of those `await` lines.

Swift provides ways of protecting against this using a system known as *actors* – more on that much later.

::: details Similar solutions…

```component VPCard
{
  "title": "How to call an async function using async let | Swift Concurrency by Example",
  "desc": "How to call an async function using async let",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-call-an-async-function-using-async-let.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to fix the error “async call in a function that does not support concurrency” | Swift Concurrency by Example",
  "desc": "How to fix the error “async call in a function that does not support concurrency”",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-fix-the-error-async-call-in-a-function-that-does-not-support-concurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Why can’t we call async functions using async var? | Swift Concurrency by Example",
  "desc": "Why can’t we call async functions using async var?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/why-cant-we-call-async-functions-using-async-var.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to call async throwing functions | Swift Concurrency by Example",
  "desc": "How to call async throwing functions",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-call-async-throwing-functions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What calls the first async function? | Swift Concurrency by Example",
  "desc": "What calls the first async function?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/what-calls-the-first-async-function.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />