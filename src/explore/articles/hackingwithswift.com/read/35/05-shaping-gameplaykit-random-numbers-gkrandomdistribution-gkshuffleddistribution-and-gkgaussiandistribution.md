---
lang: ko-KR
title: "Shaping GameplayKit random numbers: GKRandomDistribution, GKShuffledDistribution and GKGaussianDistribution"
description: "Article(s) > Shaping GameplayKit random numbers: GKRandomDistribution, GKShuffledDistribution and GKGaussianDistribution"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
  - ios  
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Shaping GameplayKit random numbers: GKRandomDistribution, GKShuffledDistribution and GKGaussianDistribution"
    - property: og:description
      content: "Shaping GameplayKit random numbers: GKRandomDistribution, GKShuffledDistribution and GKGaussianDistribution"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/35/05-shaping-gameplaykit-random-numbers-gkrandomdistribution-gkshuffleddistribution-and-gkgaussiandistribution.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/read/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Shaping GameplayKit random numbers: GKRandomDistribution, GKShuffledDistribution and GKGaussianDistribution | Hacking with iOS",
  "desc": "Shaping GameplayKit random numbers: GKRandomDistribution, GKShuffledDistribution and GKGaussianDistribution",
  "link": "https://hackingwithswift.com/read/35/5/shaping-gameplaykit-random-numbers-gkrandomdistribution-gkshuffleddistribution-and-gkgaussiandistribution",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

Random sources are interesting enough, but chances are you're wondering why you've spent the last 20 minutes reading about GameplayKit and have yet to see anything interesting. Well, here's where good becomes great: GameplayKit lets you shape the random sources in various interesting ways using *random distributions*.

Let's start off with something simple: rolling a six-sided dice. This is effectively identical to generating a random number between 1 and 6, which before meant having to call our old friend: `Int.random(in: 1...6)`.

That's all gone in GameplayKit, because they have built six-sided dice right into their API. No, really. Try this:

```swift
let d6 = GKRandomDistribution.d6()
d6.nextInt()
```

Boom: you'll get a random number between 1 and 6. Want a 20-sided die? Great:

```swift
let d20 = GKRandomDistribution.d20()
d20.nextInt()
```

Oh, you want a 11,539-sided die? Done:

```swift
let crazy = GKRandomDistribution(lowestValue: 1, highestValue: 11539)
crazy.nextInt()
```

And right there you can immediately see how the concept of dice is just there to frame the random number generation: give it a lowest value of 100 and a highest of 200, and you'll get a number between those two, inclusive. This is very similar to Swift’s `Int.random(in:)` method, but using GameplayKit means you can create the random distribution as a property then re-use it again and again without having to specify the range each time.

If you intend to specify lowest and highest values, you need to be careful if you intend also to use `nextInt(upperBound:)` – code like this will crash your app:

```swift
let distribution = GKRandomDistribution(lowestValue: 10, highestValue: 20)
print(distribution.nextInt(upperBound: 9))
```

When you create a random distribution in this way, iOS automatically creates a random source for you using an unspecified algorithm. If you want one particular random source, there are special constructors for you:

```swift
let rand = GKMersenneTwisterRandomSource()
let distribution = GKRandomDistribution(randomSource: rand, lowestValue: 10, highestValue: 20)
print(distribution.nextInt())
```

So, GameplayKit makes it easy to generate truly random numbers within a specific range – no more hand-coded functions required. That alone is a huge win, but what if I said GameplayKit could also generate random numbers that *weren't* truly random?

Yes, I know that sounds pointless, but stick with me. If you roll a six-sided die twice, there's a one in six chance you'll get the same number twice in a row. Unless you're working with fixed dice, this is true randomness. But true randomness is sometimes unpleasant, because it's possible to roll a six five times in a row or even 50 times in a row. Sure, it's not *likely*, but it's possible, and players inevitably curse their "unlucky streak" and may even leave angry App Store reviews.

But there's more: what if you want a spread of numbers, but really you want them to naturally cluster towards a middle ground? This would mean a tank in your strategy game normally fights like an average tank, but occasionally will do something spectacularly brave – or spectacularly stupid.

GameplayKit has solutions for both of these situations, and it's so simple you'll want to start using it straight away.

You just saw me using `GKRandomDistribution` to shape a random source, either created automatically or specified in its constructor. GameplayKit provides two other distributions: `GKShuffledDistribution` ensures that sequences repeat less frequently, and `GKGaussianDistribution` ensures that your results naturally form a bell curve where results near to the mean average occur more frequently.

Let's look at `GKShuffledDistribution` first. This is an anti-clustering distribution, which means it shapes the distribution of random numbers so that you are less likely to get repeats. This means it will go through every possible number before you see a repeat, which makes for a truly perfect distribution of numbers.

For example, the code below generates the numbers 1 to 6 in a random order:

```swift
let shuffled = GKShuffledDistribution.d6()
print(shuffled.nextInt())
print(shuffled.nextInt())
print(shuffled.nextInt())
print(shuffled.nextInt())
print(shuffled.nextInt())
print(shuffled.nextInt())
```

To be clear, that code literally will generate the number 1 once, the number 2 once, etc, up to 6, but the order is random. This makes `GKShuffleDistribution` a so-called "fair distribution" because every number will appear an equal number of times. You are, in theory at least, guaranteed that the first roll and the second roll will be different.

Obviously fair random has its own downside, which is that if a player rolls a six they can be know for sure they won't get a six in their next five rolls. This means you need to use it with caution: there's no point having random numbers if they are predictably random. It is, however, worth adding that `GKShuffledDistribution` is still random over time – the actual order of numbers can't be predicted.

The other distribution option is `GKGaussianDistribution` (tip: "Gauss" rhymes with "House"), which causes the random numbers to bias towards the mean average of the range. So if your range is from 0 to 20, you'll get more numbers like 10, 11 and 12, fewer numbers like 8, 9, 13 and 14, and decreasing amounts of any numbers outside that.

To give you an idea of the bell curve this distribution generates, I created 100,000 random numbers between 1 and 20, and only 228 were the number 1. That's way below the statistical average of 5000, particularly when you realize that the number 11 got rolled 12,488 times – more than 50 times as often.

You can see the actual output of my test below, visualized on a chart:

![Frequency of Rolls on a D20 with `GKGaussianDistribution`](https://hackingwithswift.com/img/books/hws/35-1@2x.png)

`GKGaussianDistribution` is perfect for when you want random things to happen, but you also want to steer that randomness so that has a degree of averageness to it.

---

<TagLinks />