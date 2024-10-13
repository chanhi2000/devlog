---
lang: ko-KR
title: Tips
description: Android > Tips
icon: fas fa-lightbulb
category:
  - Android 
  - Tips
tag: 
  - references
  - android
---

# {{ $frontmatter.title }} 관련

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
class MyForeroundService: Service() {

    override fun onBind(p0: Intent?): IBinder? { return null }
    override fun onStartCommand(intent: Intent?, flag: Int, startId: Int): Int {
        when (intent?.action) {
            ACTION_START_SERVICE -> {
                isRunning = true
                startAsForegroundService()
                
            }
            ACTION_STOP_SERVICE -> {
                isRunning = false
                stopForeground(true)
                stopSelf()
            }
        }
                   
        return START_STICKY
    }

    companion object {
        var isRunning = false
        const val ACTION_START_SERVICE = "ACTION_START_SERVICE"
        const val ACTION_STOP_SERVICE = "ACTION_STOP_SERVICE"
    }

    private fun startAsForegroundService() {
        val activityPendingIntent = Intent(this, MainActivity::class.java).let {
            it.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
            PendingIntent.getActivity(this, 0, it, 0)
        }
        val notification: Notification =
                    NotificatoinCompat.Builder(this, NotificationConstants.SOUND_SERVICE_CHANNEL_ID)
                        .setContentIntent(activityPendingIntent)
                        .setOngoing(true)
                        .setSmallIcon(R.drawable.ic_service)
                        .setContentTitle("Foreground Service")
                        .setContentText("Foreground service is running")
                        .build()
                        
                startForeground(1, notification) 
    }
}

```

---

## Preferences

![preferences-example-result](/images/android/preferences-example-result.jpg)

::: details Preferences 

### `app/build.gradle`

```groovy
dependencies {
    implementation 'androidx.preference:preference:1.1.1'
}
```

### <FontIcon icon="fas fa-folder-open"/>`res/xml/`<FontIcon icon="iconfont icon-code"/>`preference.xml`

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

<VidStack src="/videos/lang-android/crossfade-animation.mp4" />

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

---

## How to Detect Shake

::: details How to Detect Shake

### `build.gradle`

```groovy
dependencies {
    implementation "com.squareup:seismic:1.0.2"
}
```

### `MainActivity.kt`

```kotlin

class MainActivity: AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main)

        sensorManager
            = getSystemService(Context.SENSOR_SERVICE) as SensorManager
        shakeDetector 
            = ShakeDetector(ShakeDetector.Listener {
                Toast.makeText(this, "Shake detected!", Toast.LENGTH_SHORT).show()
            })
    }

    override fun onResume() {
        super.onResume()
        shakeDetector.start(sensorManager)
    }

    override fun onPause() {
        super.onPause()
        shakeDetector.stop()
    }
}
```

:::


---

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

---

<TagLinks />

[crossfade-animation]: /videos/lang-android/crossfade-animation.mp4