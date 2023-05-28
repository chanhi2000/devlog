---
lang: ko-KR
title: 💡Tips
description: 🤖Android > 💡Tips
tags: ["references", "android"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## Background Service Launch

```kotlin
class GodActivity : AppCompatActivity {

    override fun onStart() {
        with(ProcessLifecycleOwner.get()) {
            lifecycleScope.launch {
                lifecycle.repeatOnLifecycle(Lifecycle.State.RESUMED) {
                    startService()
                }
            }
        }
    }

    priavte suspend fun startService() {
        try {
            exponentialRetry {
                context.startService(
                    Intent(
                        context,
                        WebSocketService::class.java,
                    )
                )
            }

        } catch (e1: CancellationException) {
            // user has gone to the background before service was suceessflly started
            // the scope has beeen closed along with the process hence we cannot start a background service
        } catch (e2: IllegalStateException) {
            log(e2)
        }
    }
}
```

1. Start the service inside the process lifecycle scope — resumed or started state.
2. Wrap the call itself in try-catch to convert a fatal crash into non-fatal.
3. Put the call itself inside a loop or exponential retry logic.
4. Make sure to handle scope cancelation exception so that no false-positive crashes are spamming your log server.

---

## Foreground Service

```kotlin
override fun onStartCommand(intent: Intent?, flag: Int, startId: Int): Int {
    createNotificaionChannel()
    val notification: Notification =
        NotificatoinCompat.Builder(this, CHANNEL_ID)
            .setContentTitle("Foreground Service")
            .setContentText("Foreground service is running")
            .setSmallIcon(R.drawable.ic_lock_idle_alarm)
            .build()
    startForeground(1, notification)            
    return START_STICKY
}
```

---

## Preferences

![preferences-example-result][preferences-example-result]

::: details Preferences 

### `app/build.gradle`

```gradle
dependencies {
    implementation 'androidx.preference:preference:1.1.1'
}
```

### `res/xml/preference.xml`

```xml
<PreferenceScreen
  xmlns:app="https://schemas.android.com/apk/res-auto">

  <SwitchPreferenceCompat
    app:key="notifications"
    app:title="Enable message notifications">

    <Preference
      app:key="feedback"
      app:title="Send Feedback"
      app:summary="Report technical issues or suggest new features"/>

  </SwitchPreferenceCompat>

</PreferenceScreen>
```

### `MySettingsFragment.kt`

```kotlin
class MySettingsFragment : PreferenceFragmentCompat() {
    override fun onCreatePreferences(savedInstanceState: Bundle?, rootKey: String?) {
        setPreferencesFromResource(R.xml.preferences, rootKey)
    }
}
```

### `MySettingsActivity.kt`

```kotlin
class MySettingsActivity: AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        supportFragmentManager
            .beginTransaction()
            .replace(R.id.settings_container, MySettingsFragment())
            .commit()
    }
}
```

:::

---

## Crossfade Animation

<VideoPlayer
  src="/videos/lang-android/crossfade-animation.mp4" />

::: details Crossfade Animation

```kotlin
fun crossfade(
    viewToShow: View,
    viewToHide: View
) {
    viewToHide.animate()
      .alpha(0f)
      .setDuration(500)
      .setListener(object: AnimatorListenerAdapter() {
        override fun onAnimationEnd(animation: Animator?) {
            // change the visibility
            viewToHide.isVisible = false
        }
      })
}
```

:::

## Extension

### Animate values w/ `ValueAnimator`

::: details Animate values w/ `ValueAnimator`

```kotlin
ValueAnimator.ofInt(0, 100).apply {
    duration = 3000
    start()

    addUpdateListener { updatedAnimation -> 
        textView.text = updatedAnimation.animatedView.toString()
    }
}
```

:::

<TagLinks />

[preferences-example-result]: /images/lang-android/preferences-example-result.jpg
[crossfade-animation]: /videos/lang-android/crossfade-animation.mp4