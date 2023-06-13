---
lang: ko-KR
title: 🔮Snippets
description: 🅺Kotlin > 🔮Snippets
tags: ["kotlin", "companion-object", "date"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## Date

```kotlin
private const val TIME_STAMP_FORMAT = "EEEE. MMM d, yyyy - hh:mm:ss a"
private const val DATE_FORMAT = "yyyy-MM-dd"

fun Long.getTimeStamp(): String {
    val date = Date(this)
    val simpleDateFormat = SimpleDateFormat(TIME_STAMP_FORMAT, Locale.getDefault())
    simpleDateFormat.timeZone = TimeZone.getDefault()
    return simpleDateFormat.format(date)
}

fun Long.getYearMonthDay(): String {
    val date = Date(this)
    val simpleDateFormat = SimpleDateFormat(DATE_FORMAT, Locale.getDefault())
    simpleDateFormat.timeZone = TimeZone.getDefault()
    return simpleDateFormat.format(date)
}

@Throws(ParseException::class)
fun String.getDateUnixTime(): Long {
    try {
        val simpleDateFormat = SimpleDateFormat(DATE_FORMAT, Locale.getDefault())
        simpleDateFormat.timeZone = TimeZone.getDefault()
        return simpleDateFormat.parse(this)!!.time
    } catch (e: ParseException) {
        e.printStackTrace(0)
    }
    throw ParseException("Please Enter a valid date", 0)
}

val currentTime = System.currentTimeMillis()
println(currentTime.getTimeStamp()) 
// Sunday, September 20, 2020 - 10:48:26 AM
println(currentTime.getYearMonthDay())
// 2020-09-20
println("2020-09-20".getDateUnixTime())
// 1600549200000
```

---

## String

```kotlin
/**
 * [String.isPasswordStrong]
 * Check for password strength ...
 * 
 * @return [Boolean] whether password is stong or not
 */
fun String.isPasswordStrong(): Boolean {
    val passwordREGEX = Pattern.compile("^" + 
      "(?=.*[0-9])" +  // at least 1 digit
      "(?=.*[a-z])" +  // at least 1 lower case letter
      "(?=.*[A-Z])" +  // at least 1 upper case letter
      "(?=.*[a-zA-Z])" +  // any letter
      "(?=.*[@#$%^&+=])" +  // at least 1 special character
      "(?=\\S+$)" +  // no white spaces
      ".{8,}" + // at least 8 characters
      "$"
    )
    return passwordREGEX.matcher(this).matches()
}

/*
```




<TagLinks />