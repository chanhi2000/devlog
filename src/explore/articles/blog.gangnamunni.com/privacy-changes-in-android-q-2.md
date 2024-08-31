---
lang: ko-KR
title: Privacy Changes in Android Q#2
description: Article(s) > Privacy Changes in Android Q#2
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
      content: Article(s) > Privacy Changes in Android Q#2
    - property: og:description
      content: Privacy Changes in Android Q#2
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/blog.gangnamunni.com/privacy-changes-in-android-q-2.html
prev: /programming/java-android/articles/README.md
date: 2019-07-02
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
  name="Privacy Changes in Android Q#2"
  desc="안드로이드 기기 고유 식별자 제한"
  url="https://blog.gangnamunni.com/post/privacy-changes-in-android-q-2/"
  logo="https://blog.gangnamunni.com/favicon.ico"
  preview="https://blog.gangnamunni.com/_nuxt/img/ae65a45.jpg"/>

::: info

안녕하세요. 강남언니에서 Android 개발을 맡고 있는 David 입니다.

해당 글은 제가 Google I/O 19 Extended in Korea Android 에서 발표했던 부분을 정리한 글입니다.

:::

[저번 글](/explore/articles/blog.gangnamunni.com/privacy-changes-in-android-q-1.md)에서는 Android Q에서 **백그라운드 앱에 대한 새로운 제한사항** 에 대하여 알아 보았습니다.

![](https://static.blog.gangnamunni.com/files/3b581d6e-a11d-48e6-a00f-79c20a3b46b3)

이번 글에서 다뤄볼 내용은 **안드로이드 기기 고유 식별자 제한** 입니다.

![](https://static.blog.gangnamunni.com/files/f06a5717-5ad2-4e75-8618-cbc4d87a93d9)

안드로이드 Q에서 바뀌게 될 부분은 **MAC 주소의 랜덤화** 와 **재설정할 수 없는 기기 식별자** 입니다.

![](https://static.blog.gangnamunni.com/files/7cf75bfc-19e4-4dc6-bc87-5c41d026c85b)

재설정할 수 없는 기기 식별자에 대하여 살펴보면

Android Q 부터 IMEI와 serial number와 같은 식별자는 사용할 수 없습니다.

사용하게될 경우에는 `null` 또는 `unknown` 값을 받게 됩니다.

![](https://static.blog.gangnamunni.com/files/77933b9c-de22-4118-9cbc-51f85d405f07)

사용자로부터 `READ_PRIVILEGED_PHONE_STATE` 권한을 받으면 기기 식별자 값을 받을 수 있지만

이러한 기능은 통신사와 관련된 앱만 권한을 획들할 수 있고 일반적인 유저는 접근할 수 없습니다.

![](https://static.blog.gangnamunni.com/files/e169feec-3884-4514-b2ec-4eb8a349cc21)

그러면 기기 식별자를 얻고 싶을 경우 어떻게 하면 얻을 수 있을까요?

![](https://static.blog.gangnamunni.com/files/38a50e4e-044f-42e2-998b-1c821d2d7b90)

Android Developer 공식 사이트를 보면 다음과 같이 명시하고 있습니다.

(https://developer.android.com/training/articles/user-data-ids?hl=ko)

- 하드웨어 기기 식별자를 사용하지 않기를 추천함
- 광고 사례에는 **Adevertising ID** 사용하는것을 추천함
- 기타 사례에는 **Instance ID** 또는 **GUID** 를 활용하는것을 추천함
- 개인정보 위험이 적은 **DRM API**, **SafetyNet API** 를 사용하는것을 추천함

![](https://static.blog.gangnamunni.com/files/c6add382-5bbd-4d39-acf6-da8e145fe383)

Android Q 부터 IMEI 식별자는 사용할 수 없지만 SSAID는 다바이스를 초기화 하지 않는 이상 값이 변하지 않으므로 사용할 수 있습니다.

이러한 동작은 사용자에게 불편함을 일으키게 됩니다.

![](https://static.blog.gangnamunni.com/files/241abced-9c7e-40a8-97e8-d8a655675ff9)

**Advertising ID** 는 광고 사례가 아닐 경우에는 식별자로 사용하면 안되며

사용하더라도 사용자가 Advertising ID 을 재설정 하면 값이 변할 수 있습니다.

**Instance ID** 또는 **GUID** 는 앱을 삭제하거나 재설치 또는 앱 데이터를 삭제 할 경우 값이 변할 수 있습니다.

![](https://static.blog.gangnamunni.com/files/e67729c2-926f-4369-a342-2c5d83b8c094)

`SSAID`를 살펴보면 Secure의 `getString` 메서드를 통하여 안드로이드의 고유 기기 ID값을 얻을 수 있습니다.

단점으로서는 `READ_PHONE_STATE` 권한이 있어야지만 `SSAID` 값을 얻을 수 있습니다.

![](https://static.blog.gangnamunni.com/files/f740daa4-bded-430b-a1cd-622e2d62544f)

`MediaDrm` 은 사용자가 프리미엄 콘텐츠를 안전하게 재생하기 위해 `MediaCodec`에 암호화 키를 안전하게 제공할 수 있도록 하는 Android 프레임워크 API입니다.

`MediaDrm` 모듈중 하나인 `Widevine` 모듈이 있습니다.

`Widevine` 모듈은 Google 에서 제공하는 모듈중 하나이며 안드로이드 `ExoPlayer`에서 사용하는것을 확인할 수 있습니다.

![](https://static.blog.gangnamunni.com/files/6583bcf8-22a7-4324-a30d-da6a79fd4fc3)

`ExoPlayer` 에서 `Widevine` DRM 은 안드로이드 4.3 이상부터 사용할 수 있다고 명시되어있습니다.

![](https://static.blog.gangnamunni.com/files/cf609d14-ebd0-4a3a-8fc2-9057ecf29436)

```kotlin
val WIDEVINE_UUID = UUID(-0x1210745686296532L, -0x5c37d8232ae2de13L)

fun getDeviceId(): String {
  var deviceId = ""
  if (isWidevineDRMAvailable()) {
    val id = MediaDrm(WIDEVINE_UUID) 
      .getPropertyByteArray(MediaDrm.PROPERTY_DEVICE_UNIQUE_ID) 
    deviceId = Base64.encodeToString(id, Base64.DEFAULT)
  } 
  return deviceId
}

private fun isWidevineDRMAvailable(): Boolean {
  return MediaDrm.isCryptoSchemeSupported(WIDEVINE_UUID)
}
```

다음과 같이 `MediaDrm` 생성자에 UUID 값을 집어넣고 `Base64` 인코딩 과정을 거치면 기기 식별자를 얻을 수 있습니다.

안드로이드 디바이스에 `Widevine` 모듈이 없을 때 `MediaDrm` 생성자에 값을 집어넣으면 Exception이 발생하기 때문에 `Widevine` 모듈이 있는지 체크하는 로직을 추가해야 합니다.

단점으로서는 `SSAID` 보다 값을 가져오는데에 있어 속도가 느리며 안드로이드 4.3 이상부터 사용할 수 있습니다.

![](https://static.blog.gangnamunni.com/files/5ac3bff3-904d-43f2-9b51-e0bb5af8a774)

**SafetyNet Attestatoin API** 는 소프트웨어와 하드웨어 정보를 분석한 후 무결성을 확인하는 API 입니다.

그림에서 보다시피 처음 앱에서 Google Play Services 에게 API 를 요청하고 해당 API 는 구글 서버로부터 signed response 값을 요청하게 됩니다.

signed response 를 앱에서 받은 후 그 값을 신뢰할수 있는 서버로 forward 한 후 서버에서 값을 체크 한 후 앱에게 결과를 알려줍니다.

가장 안전한 API 지만 과정이 복잡하고 통신해야 하는 부분이 많기 때문에 시간이 걸리는 단점이 있습니다.

![](https://static.blog.gangnamunni.com/files/94738df5-c01b-4342-86f0-152883e9edfa)

요약하자면 Android Q 부터는 기기 식별자를 더이상 사용할 수 없습니다.

각 상황에 맞게 **SSAID**, **DRM API** 그리고 **SafetyNet API** 를 사용하면 됩니다.

---

<TagLinks />