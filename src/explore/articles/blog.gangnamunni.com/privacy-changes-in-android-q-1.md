---
lang: ko-KR
title: Privacy Changes in Android Q#1
description: Article(s) > Privacy Changes in Android Q#1
icon: fa-brands fa-android
category: 
  - Java
  - Android
  - Article(s)
tag: 
  - blog
  - blog.gangnamunni.com
  - java
  - android
head:
  - - meta:
    - property: og:title
      content: Article(s) > Privacy Changes in Android Q#1
    - property: og:description
      content: Privacy Changes in Android Q#1
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/blog.gangnamunni.com/privacy-changes-in-android-q-1.html
prev: /programming/java-android/articles/README.md
date: 2019-07-01
isOriginal: false
cover: https://blog.gangnamunni.com/_nuxt/img/ae65a45.jpg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Android > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/java-android/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Privacy Changes in Android Q#1"
  desc="백그라운드 앱에 대한 새로운 제한사항"
  url="https://blog.gangnamunni.com/post/privacy-changes-in-android-q-1/"
  logo="https://blog.gangnamunni.com/favicon.ico"
  preview="https://blog.gangnamunni.com/_nuxt/img/ae65a45.jpg"/>

>  안녕하세요. 강남언니에서 Android 개발을 맡고 있는 David 입니다.
>
> 해당 글은 제가 Google I/O 19 Extended in Korea Android 에서 발표했던 부분을 정리한 글입니다.

안드로이드에서 새로운 버전이 나올때 마다 개인정보를 보호하기 위하여 다양한 기능을 추가하고 있습니다

![](https://static.blog.gangnamunni.com/files/49c743b8-24fb-49b1-b653-73b0497b37fd)

Lockdown Mode, Secure DNS 그리고 마시멜로우 부터 추가되었던 Runtime permissions 등이 있었습니다.

![](https://static.blog.gangnamunni.com/files/4c5929b8-22ea-4411-8049-3996b34c2abe)

Android Q 에서도 개인정보를 보호하기 위하여 많은 기능이 추가되었습니다.

![](https://static.blog.gangnamunni.com/files/3161c3a2-05b9-4a60-8e74-3697e1e01820)

그중 가장 변화가 큰 부분은 **Location Settings**, **App Storage**, **Background App Launching**, **Device ID Restrictions** 이 있습니다.

![](https://static.blog.gangnamunni.com/files/200982f3-1be7-4198-85fb-5074b900c7bd)

이번 글에서 다뤄볼 내용은 **백그라운드 앱에 대한 새로운 제한사항** 입니다.

![](https://static.blog.gangnamunni.com/files/9a46877a-0f36-473a-a3bc-9ace81b5f633)

**Android Q Beta4** 에서 몇가지 변경사항이 있습니다.

- 사용자 상호작용 없이 백그라운드에서 액티비티를 실행시킬 수 없음
- 백그라운드에서 액티비티를 실행시킬 때는 notification을 활용해야함
- 개발자 옵션에서 **Allow background activity starts** 기능을 꺼야지 백그라운드 제한사항을 실행시킬 수 있음 (정식 release 버전에서는 on/off 상관없이 백그라운드 제한사항이 적용됨)

![](https://static.blog.gangnamunni.com/files/47b44165-57b0-49ff-9c72-0342a0de1a2f)

Android Q Beta에서 백그라운드 제한사항을 실행시키고 싶으면

개발자 옵션에서 앱 카테고리에 있는 백그라운드 활동 시작 허용 기능을 off 하면 적용됩니다.

![](https://static.blog.gangnamunni.com/files/a9ce3ea6-86cc-4d31-86e5-b520f71ab448)

Android Q 이전에는 사용자 상호작용 없이 백그라운드에서 액티비티를 실행시킬수있었는데

이러한 동작은 사용자에게 불편함을 일으키게 됩니다.

![](https://static.blog.gangnamunni.com/files/8b471d16-8485-4055-9a24-2974dcfd0d89)

앱이 현재 백그라운드 상태에 있습니다.

![](https://static.blog.gangnamunni.com/files/645d84de-dd68-4a51-9ce8-d2e4851fa011)

서버에서 push messsage를 받았을 경우 사용자 상호작용 없이

`FLAG_ACTIVITY_NEW_TASK` 플래그를 이용하여 액티비티가 실행되는 모습을 볼 수 있습니다.

<!-- ![](https://static.blog.gangnamunni.com/files/e00945b9-2fda-45f4-8178-6bf3dd934c93) -->

```kotlin
override fun onMessageReceived (message: RemoteMessage?) {
  goLiveConsIncomingActivity(this)
}

fun goLiveConsIncomingActivity (context: Context) {
  val intent = Intent(context, LiveConsIncomingActivity::class.java)
  intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK
  context.startActivity(intent)
}
```

소스코드를 보게 되면 push message가 왔을 경우 `onMessageReceived` 함수가 호출되고

`onMessageReceived` 함수 안에서는 액티비티를 실행시키기 위하여 `FLAG_ACTIVITY_NEW_TASK` 를 사용하고 있습니다.

![](https://static.blog.gangnamunni.com/files/582ec5d5-b4d9-4870-acbd-35b08c13a41b)

Android Q에서는 백그라운드에서 액티비티 실행이 제한됩니다.

사용자 상호작용없이 실행이 불가능하며 앱 타겟이 Android Q가 아니더라도 Android Q 디바이스에서는 영향을 미칩니다.

지금 현재 베타에서는 백그라운드에서 액티비티가 실행되지만 토스트 메시지와 로그켓에 나타납니다.

추후 정식버전에서는 백그라운드에서 액티비티 실행이 제한됩니다.

![](https://static.blog.gangnamunni.com/files/f7831edf-4944-4201-99c3-64a6ef28a57d)

그러면 앱이 백그라운드 상태일때 사용자에게 중요한 정보를 전달하고 싶을때는 어떻게 해야할까요?

![](https://static.blog.gangnamunni.com/files/f8386572-68d1-4c4b-bfe7-e473e13bbbfd)

백그라운드 상태일때 액티비티를 실행시킬수 있는 몇가지 사항이 있습니다.

- 시스템에서 `PendingIntent` 을 통하여 실행시키는
- 시스템 브로드 캐스트를 받아서 실행시키는 경우 (`ACTION_NEW_OUTGOING_CALL`, `SECRET_CODE_ACTION`)
- 사용자로부터 `SYSTEM_ALERT_WINDOW` 권한을 받아서 실행시키는

특별한 상황이 아닌 이상은 `PendingIntent` 을 통하여 액티비티를 실행시키는것을 권장합니다.

![](https://static.blog.gangnamunni.com/files/22808100-e368-4925-9f76-f0a58d0c0f7c)

앱이 백그라운드 상태에 있을때 사용자에게 중요한 정보를 전달하고 싶으면 바로 액티비티를 실행시키는것이 아니라 notification을 통해 전달해야합니다.

![](https://static.blog.gangnamunni.com/files/970b27cb-b6e7-4972-9bf7-805236e5c57b)

Android Q에서 서버에서 push message를 받고 바로 액티비티를 실행시키면 다음과 같이 경고문구가 나옵니다.

이러한 액티비티 실행 방식은 Android Q가 정식 출시되면 지원되지 않습니다.

![](https://static.blog.gangnamunni.com/files/e0f36149-d99a-4ff5-b520-26a0a19a671c)

다음과 같이 `Notification`을 이용하여 **full-screen intent** 를 이용하면 사용자에게 액티비티를 실행시킬수 있는 권한을 줄 수 있습니다.

## `setFullScreenIntent`

<!-- ![setFullScreenIntent](https://static.blog.gangnamunni.com/files/344e218a-a9b8-4ac7-a5c3-0d250488fb40) -->

```kotlin
private fun showIncoming CallNotification (channelId: String) {
  // ...
  NotificationCompat.Builder(this, channelId)
    .setSmallIcon(R.drawable.noti_icon)
    // ...
    .setContentIntent(getContentIntent())
    .setFullScreenIntent(getContentIntent(), true)
    .build()
  // ...
}

private fun getContentIntent(): PendingIntent {
  val intent = Intent(a, LiveConsIncomingActivity::class.java)
  intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK 
  return PendingIntent.getActivity(this, REQUEST_CONTENT, intent, PendingIntent.FLAG_UPDATE_CURRENT)
}
```

소스코드를 보면 `setFullScreenIntent` 메서드를 사용한것을 확인할 수 있는데요. 파라미터로 `PendingIntent` 가 들어가는것을 확인할 수 있습니다. `setFullScreenIntent`에 대하여 좀 더 자세히 알아보도록 하겠습니다.

![setFullScreenIntent](https://static.blog.gangnamunni.com/files/708f2785-b2cc-42ff-b7a6-22c53ab2d43a)

`setFullScreenIntent` 를 사용하면 **Heads-up notification** 이 나타나고 자동으로 사라지지 않습니다.

만약 NotificagionChannel의 중요도를 설정하지 않으면 Heads-up notification은 나타나지 않습니다.

## Create a high-priority notification

<!-- ![Create a high-priority notification](https://static.blog.gangnamunni.com/files/6a21d4a1-e724-4d0a-98ab-3e9f9b5820e0) -->

여기서 중요한 부분은 NotificaionChannel에서 중요도를 설정할때 `IMPORTANCE_HIGH` 로 설정하지 않았을 경우에도 Heads-up notification이 나타나지 않습니다.

![](https://static.blog.gangnamunni.com/files/cdeb7d3b-a432-414b-b556-da990fa52fa2)

마지막으로 앱 타겟이 Android Q 이상 일 경우 `USE_FULL_SCREEN_INTENT` 권한을 설정해야합니다.

PendingIntent에 대하여 좀 더 자세히 살펴보도록 하겠습니다.

![](https://static.blog.gangnamunni.com/files/8f7d5c63-10c4-4f4d-9d9b-0f1624972546)

백그라운드에서 push message가 왔을 경우 notification을 띄우는데 **notification manager** 가 시스템 서비스에서 관리합니다.

notification에서 앱에 있는 액티비티를 실행 시키려면 intent을 통하여 실행시켜야 하지만 앱과 전혀 다른 프로세스이므로 실행시킬수 있는 권한이 없습니다.

이때 `PendingIntent` 를 이용하면 intent를 wrapping하고 **notification manager** 에게 액티비티를 실행시키는 권한을 전달할 수 있습니다.

![](https://static.blog.gangnamunni.com/files/289cffaf-c0ba-4021-9b61-fa50ac0f459c)

그러면 RemoteViews 에서 버튼들의 클릭액션은 어떻게 구현해야할까요?

![](https://static.blog.gangnamunni.com/files/d8338016-bdd0-440c-86b5-4c00a6ecffc3)

RemoteViews 는 다른 프로세스에서 동작하고 View를 상속받은 실제 View가 아닙니다.

이렇기 때문에 몇가지 제약사항이 있습니다. 사용할 수 있는 View가 제한되어있기 때문에 커스텀 뷰를 이용할 수 없습니다.

![Click action of RemoteViews](https://static.blog.gangnamunni.com/files/d224144d-4a89-48e5-afb9-ae7d15c59a97)

<!-- TODO: 코드화 -->

버튼의 클릭을 구현할 때는 `setOnClickListener` 방식이 아닌 `setOnClickPendingIntent` 를 이용하여 구현해야 합니다.

해당 메서드의 파라미터는 버튼의 id 값과 `PendingIntent` 가 있습니다.

버튼 클릭 로직을 쉽게 관리하기 위하여 바로 액티비티를 실행시키지 않고 브로드캐스트를 이용하였습니다.

![Click action of RemoteViews](https://static.blog.gangnamunni.com/files/046ba6c6-0df6-44c9-a3c4-9ec03cd299f8)

<!-- TODO: 코드화 -->

브로드캐스트 리시버 부분을 보면 버튼을 클릭했을 경우 notification이 사라져야 하기 때문에 notification manager의 cancel을 호출하였습니다.

버튼을 클릭했을 경우 intent 정보에 Boolean 값을 추가하였는데요. 수락버튼을 눌렀을 경우 acceptCall 값이 true이기 때문에 라이브 상담 액티비티를 `PendingIntent` 를 이용하여 실행시켰습니다.

![](https://static.blog.gangnamunni.com/files/562fa38a-4869-4c9e-82d2-b5bbf653c676)

요약을 하면 백그라운드 상태일때 액티비티는 실행시킬 수 없고 사용자에게 notification을 통하여 액티비티를 실행시킬 수 있는 권한을 줘야합니다.

다음 글에서는 **안드로이드 기기 고유 식별자 제한** 에 대하여 다뤄보도록 하겠습니다.

---

<TagLinks />