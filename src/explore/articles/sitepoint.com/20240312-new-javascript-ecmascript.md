---
lang: ko-KR
title: 5 Exciting New JavaScript Features in 2024
description: Article(s) > 5 Exciting New JavaScript Features in 2024
icon: fa-brands fa-js
category: 
  - JavaScript
  - TypeScript
  - Article(s)
tag: 
  - blog
  - sitepoint.com
  - js
  - javascript
  - ts
  - typescript
head:
  - - meta:
    - property: og:title
      content: Article(s) > 5 Exciting New JavaScript Features in 2024
    - property: og:description
      content: 5 Exciting New JavaScript Features in 2024
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/sitepoint.com/20240312-new-javascript-ecmascript.html
---

# {{ $frontmatter.title }} 관련

<SiteInfo
  name="5 Exciting New JavaScript Features in 2024 — SitePoint"
  desc="Explore some hotly anticipated new additions to JavaScript, including better date management with the Temporal API and pipe operators."
  url="https://sitepoint.com/new-javascript-ecmascript/"
  logo="https://sitepoint.com/favicons/512x512.png"
  preview="https://uploads.sitepoint.com/wp-content/uploads/2024/03/1710139726ecmascript2024-new-features.jpg"/>

> 2024.03.12

The following proposals stand a good chance of making it into this year's version of ECMAScript:

[[toc]]

---

## ECMAScript Updates

A new version of JS always causes a stir. Since the ES6 update there has been a new version every year, and we're expecting this year's (ES2024) to land around June.

ES6 was a massive release that came *six years* after its predecessor, ES5. Browser vendors and JavaScript developers were overwhelmed with the sheer number of new features to adopt and learn. Since then, to prevent such a big drop of new features happening at once, there's been a yearly release cycle.

This yearly release cycle involves *proposing* any new features, which are then discussed, evaluated, then voted on by a committee before they're added to the language. This process also allows browsers to try to implement the proposals before they're officially added to the language, which may help iron out any implementation problems.

As mentioned, new features for JavaScript (or ECMAScript) are decided by [<FontIcon icon="fas fa-globe"/>Technical Committee 39 (TC39)](https://tc39.es/). TC39 is made up of representatives from all the major browser vendors as well as JavaScript experts. They meet regularly to discuss new features for the language and how they can be implemented. The new features are put forward as proposals (made by anyone) and the committee members then vote on whether each proposal can move forward to the next stage. There are 4 Stages for each proposal; once a proposal reaches Stage 4, it's expected to be included in the next version of ES.

An important part of the ES specification is that it has to be *backwards compatible*. This means that any new features can't *break the Internet* by changing how previous versions of ES worked. So they can't change how existing methods work, they can only add new methods, as any website running with a potentially pre-existent method would be at risk of breaking.

The full list of all the current proposals can be seen [<FontIcon icon="iconfont icon-terminal"/>`tc39/proposals`](https://github.com/tc39/proposals).

---

## Temporal

In the [<FontIcon icon="fas fa-globe"/>State of JS 2022 survey](https://2022.stateofjs.com/en-US/opinions/#top_currently_missing_from_js), the *third* most common answer to “What do you feel is currently missing from JavaScript?” was **Better Date Management**.

This has led to the `Temporal` [<FontIcon icon="iconfont icon-github"/>`tc39/proposal-temporal`](https://github.com/tc39/proposal-temporal), which offers a standard global object to replace the Date object and fixes a number of the issues that have caused developers much pain when working with dates in JavaScript over the years.

Working with dates in JavaScript is almost always a dreaded task; having to deal with small but infuriating inconsistencies, such as the craziness of months being zero-indexed but days of the month starting at 1.

The difficulty of dates has resulted in popular libraries such as [<FontIcon icon="fas fa-globe"/>Moment](https://momentjs.com/), [<FontIcon icon="fas fa-globe"/>Day.JS](https://day.js.org/) and [<FontIcon icon="fas fa-globe"/>date-fns](https://date-fns.org/) popping up to try to fix the issues. However, the `Temporal` API aims to fix all the problems natively.

`Temporal` will support multiple time-zones and non-Gregorian calendars out of the box, and will provide a simple-to-use API that will make it much easier to parse dates from strings. Furthermore, all `Temporal` objects will be immutable, which will help avoid any accidental date change bugs.

Let's look at some examples of the most useful methods offered by the `Temporal` API.

### `Temporal.Now.Instant()`

`Temporal.Now.Instant()` will return a DateTime object to the nearest nanosecond. You can specify particular dates using the `from` method like so:

```js
const olympics = Temporal.Instant.from('2024-07-26T20:24:00+01:00');
```

This will create a DateTime object that represents the start of the Paris Olympics later this year at 20:24 on the 26th July 2024 (UTC).

### `PlainDate()`

This allows you to create just a date, with no time:

```js
new Temporal.PlainDate(2024, 7, 26);

Temporal.PlainDate.from('2024-07-26');

// both return a PlainDate object that represents 26th July 2024
```

### `PlainTime()`

As a complement to `PlainDate()`, we can use this to create just a time with no date, using `.PlainTime()`:

```js
new Temporal.PlainTime(20, 24, 0);

Temporal.PlainTime.from('20:24:00');

// both return a PlainTime object of 20:24
```

### `PlainMonthDay()`

`PlainMonthDay()` is similar to `PlainDate`, but it only returns the month and day with no year information (useful for dates that recur on the same day every year, such as Christmas Day and Valentine's Day):

```js
const valentinesDay = Temporal.PlainMonthDay.from({ month: 2, day: 14 });
```

### `PlainYearMonth()`

Similarly, there's also `PlainYearMonth` that will return just the year and month (useful for representing a whole month of a year):

```js
const march = Temporal.PlainYearMonth.from({ month: 3, year: 2024 });
```

### Calculations

There are a number of calculations that can be done with Temporal objects. You can add and subtract various units of time to a date object:

```js
const today = Temporal.Now.plainDateISO();

const lastWeek = today.subtract({ days: 7});

const nextWeek = today.add({ days: 7 });
```

The `until` and `since` methods let you find out how much time until a certain date or since the date occurred. For example, the following code will tell you how many days it is until the Paris Olympics:

```js
olympics.until().days

valentinesDay.since().hours
```

These methods return a `Temporal.Duration` object that can be used to measure an amount of time that has numerous different units and rounding options.

### Extras

You can extract the year, month and day from a Date object and the hours, minutes, seconds, milliseconds, microseconds and nanoseconds form a Time object (microseconds and nanoseconds are not available in the current DateTime object). For example:

```js
olympics.hour;
<< 20
```

There are also other properties such as `dayOfWeek` (returns `1` for Monday and `7` for Sunday), `daysInMonth` (returns `28`, `29`, `30` or `31` depending on the month) and `daysinYear` (returns `365` or `366` depending on a leap year).

`Temporal` date objects will also have a `compare` method that can be used to order dates using various sorting algorithms.

Temporal is currently a Stage 3 proposal that's in the process of being implemented by browser vendors, so it seems as if its time has come (pun intended). You can see the full documentation [<FontIcon icon="fas fa-globe"/>here](https://tc39.es/proposal-temporal/docs/). There's also a useful cookbook of use cases [<FontIcon icon="fas fa-globe"/>here](https://tc39.es/proposal-temporal/docs/cookbook.html). When paired with the [<FontIcon icon="fas fa-globe"/>Intl.DateTimeFormat API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) you'll be able to do some very nifty date manipulation.

---

## Pipe Operator

In the [State of JS 2022 survey](https://2022.stateofjs.com/en-US/opinions/#top_currently_missing_from_js), the sixth top answer to “What do you feel is currently missing from JavaScript?” was a **Pipe Operator**.

You can see the [<FontIcon icon="iconfont icon-github"/>`tc39/proposal-pipeline-operator`](https://github.com/tc39/proposal-pipeline-operator).

A pipe operator is a standard feature in functional languages that allows you to “pipe” a value from one function to another, with the output of the previous function being used as the input to the next (in a similar way that the Fetch API passes any data it returns from one promise to the next).

For example, say we wanted to consecutively apply three functions to a string:

- Concatenate the string “Listen up!” to the beginning of the original string.
- Concatenate three exclamation marks onto the end of the string.
- Make all the text upper case.

These three functions could be written as follows:

```js
const exclaim = string => string + "!!!"
const listen = string => "Listen up! " + string
const uppercase = string => string.toUpperCase()
```

These three functions could be applied by nesting them all together as follows:

```js
const text = "Hello World"

uppercase(exclaim(listen(text)))
<< "LISTEN UP! HELLO WORLD!!!"
```

But deeply nesting multiple function calls like this can get messy very quickly, especially since the value (`text`) being passed as an argument ends up deeply embedded inside the expression, making it difficult to identify.

The other problem with function nesting is that the order the functions are applied in is back to front, in that the inner-most functions are applied first. So in this case, `listen` gets applied to the original value of text, followed by `exclaim`, then the outer-most function, `uppercase`, will be applied last of all. Particularly for large and complex functions, this becomes hard and unintuitive to follow.

An alternative is to use function chaining like this:

```js
const text = "Hello World"

text.listen().exclaim().uppercase()
```

This solves a lot of problems from nested functions. The argument being passed is at the beginning, and each function appears in the order it's applied in, so `listen()` is applied first, then `exclaim()` then `uppercase()`.

Unfortunately, this example won't work, because the `listen`, `exclaim` and `uppercase` functions aren't methods of the `String` class. They could be added by [<FontIcon icon="fa-brands fa-wikipedia-w"/>monkey patching](https://en.wikipedia.org/wiki/Monkey_patch) the `String` class, but this is generally frowned on as a technique.

This means that, although chaining looks a lot better than function nesting, it can only really be used with built-in functions (as is frequently done with Array methods).

**Piping** combines the ease of use of chaining but with the ability to use it with any functions. Under the current proposal, the example above would be written like so:

```js
text |> listen(%) |> exclaim(%) |> uppercase(%)
```

The `%` token is a placeholder used to represent the value of the output of the previous function, although it's highly likely that the `%` character will be replaced by some other character in the official release. This allows for functions that accept more than one argument to be used along the pipeline.

Piping combines the ease of chaining but can be used with any custom functions that you've written. The only condition is that you need to ensure that the output type of one function matches the input type of the next function in the chain.

Piping works best with [curried functions](https://www.sitepoint.com/currying-in-functional-javascript/) that only accept a single argument that's piped from the return value of any previous function. It makes functional programming much easier, as small, building-block functions can be chained together to make more complex composite functions. It also makes [<FontIcon icon="fa-brands fa-free-code-camp"/>partial application](https://www.freecodecamp.org/news/how-to-use-partial-application-to-improve-your-javascript-code-5af9ad877833/) easier to implement.

Despite its popularity, the pipe operator has struggled to move forward beyond Stage 2 of the process. This is due to disagreements over how the notation should be expressed and concerns over memory performance and how it might work with `await`. It seems that the committee is slowly reaching some sort of agreement, though, so hopefully the pipe operator might move quickly through the stages and make an appearance this year.

Thankfully, the pipeline operator has been [<FontIcon icon="fas fa-globe"/>implemented in Babel from version 7.15](https://babeljs.io/blog/2021/07/26/7.15.0#hack-style-pipeline-operator-support-13191httpsgithubcombabelbabelpull13191-13416httpsgithubcombabelbabelpull13416).

Personally, we would love the pipe operator to be implemented and rolled out this year, as it would really help improve the credentials of JavaScript as a serious functional programming language.

---

## Records and Tuples

<!-- TODO: 내용기입 -->

---

## RegExp `/v` flag

<!-- TODO: 내용기입 -->

---

## Decorators

<!-- TODO: 내용기입 -->

---

## Conclusion

So what do you think? What would you like to see added to the spec this year? All these features will make great additions to JavaScript, so fingers crossed they'll make it in this year!

---

<TagLinks />