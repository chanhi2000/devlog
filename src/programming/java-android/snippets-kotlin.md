---
lang: ko-KR
title: Kotlin Snippets
description: Android > Kotlin Snippets
icon: iconfont icon-kotlin
category:
  - Java
  - Android 
  - Kotlin Snippets
tag:
  - java
  - kotlin
  - kt
  - kts
  - android
  - android-studio
  - idea
  - intellij-idea
  - intellij
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## `String`

```kotlin :collapsed-lines title="StringExt.kt"
import android.util.Patterns

/**
 * [String.isValidEmail()]
 * Check for a Valid Email address
 * 
 * @return whether the input is valid for email address
 */
fun String.isValidEmail(): Boolean {
    val pattern = Patterns.EMAIL_ADDRESS
    val isEmail = pattern.matcher(this).matches()
    return this.isNotEmpty() && isEmail
}
```

---

## `Context`

```kotlin :collapsed-lines title="ContextExt.kt"
/**
 * [Context.copyToClipboard]
 * Copy Text to ClipBoard
 * 
 * @see ClipboardManager
 * @see ClipData
 */
fun Context.copyToClipboard(text: String) {
    val clipboard 
        = getSysteService(Context.CLIPBOARD_SERVICE) as ClipboardManager
    val clip = ClipData.newPlainText("label", text) 
    clipboard.setPrimaryClip(clip)
}

/**
 * [Context.getCityName]
 * Get City Name
 * @param latitude [Double]
 * @param longitude [Oouble]
 * @return [String] city name
 * 
 * @see Geocoder
 */
fun Context.getCityName(latitude: Double, longitude: Double): String {
    val geoCoder = Geocoder(this, Locale.getDefault())
    val address = geoCoder.getFormLocation(latitude, longitude, 1)
    return address[0].locality
}

/**
 * [Context.vibrate]
 * Vibrate
 * @param duration [Int] duration
 */
fun Context.vibrate(duration:Int = 150) {
    val vibrator
       = getSysteService(Context.VIBRATOR_SERVICE) as Vibrator
    if (Build.VERSION.SDK_INT >= 26) {
        vibrator.vibrate(VibrationEffect.createOneShot(duration, VibrationEffect.DEFAULT_AMPLITUDE))
    } else {
        vibrator.vibrate(duration)
    }
}
```

---

## `View`

```kotlin :collapsed-lines title="ViewExt.kt"
/**
 * [View.showKeyboard()]
 * Show Keyboard
 * @see InputMethodManager
 */
fun View.showKeyboard() {
    val imm 
        = context.getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
    imm.toggleSoftInput(InputMethodManager.SHOW_FORCED, 0)
}
/**
 * [View.hideKeyboard()]
 * Hide Keyboard
 * @see InputMethodManager
 */
fun View.hideKeyboard() {
    val imm 
        = context.getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
    imm.hideSoftInputFromWindow(windowToken, 0)
}
```

---

## Misc

### Declare a Matrix - 2D Array

```kotlin :collapsed-lines title="Declare a Matrix - 2D Array"
inline fun <reified T> matrix(height: Int, width: Int, initialize: () -> T) =
    Array(height) {
        Array(width) { initialize() }
    }

val board = matrix(5, 5) { 0 }

board.forEach { row ->
    row.forEach { column ->
        print("$columns ")
    }
    print("|\n")
}
// Output: 
// 0 0 0 0 0 |
// 0 0 0 0 0 |
// 0 0 0 0 0 |
// 0 0 0 0 0 |
// 0 0 0 0 0 |
```

### Sort `hashMap` by value

```kotlin :collapsed-lines title="Sort hashMap by value"
val weights: hashMapOf("Foo" to 68, "Bar" to 30, "Baz" to 10)

// Ascending order
val sortedWeightsAsc 
    = weights.toList().sortedBy { (k,v) -> v }

// Descending order
val sortedWeightsDesc 
    = weights.toList().sortedByDescending { (k,v) -> v }
```

---

<TagLinks />