---
lang: ko-KR
title: Proguard
description: Android > Proguard
icon: fas fa-user-secret
category:
  - Android
  - Proguard
tag: 
  - references
  - android
  - proguard
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## Tip

`shrinkResources` 명령어를 통해서 난독화 과정에서 사용하지 않는 리소스를 제거 할수 있습니다.

리소스 축소는 코드 축소와 함께만 동작 합니다. 모든 미사용 코드를 제거후 앱에서 사용되지 않는 리소스를 식별 할수 있습니다.

### Proguard Rule 사용방법

Proguard 룰은 필요한것과 불필요한것을 분리 할수 있습니다. 다른 라이브러리 추가시 난독화가 불필요한경우 제거를 해주어야 합니다. 여러 주요 옵션이 많이 있지만 자주 쓰이는 옵션만 정리 하겠습니다.

### 난독화 옵션

| option | description |
| :--- | :--- |
| `-dontwarn 패키지명.**` | 지정해서 경고 무시 | 
| `-keep class 패키지명.**` | 난독화가 필요하지 않은 경우 | 
| `-ignorewarnings` | 경고 무시 | 
| `-dontoptimize` | 최적화 하지 않기 |
| `-dontshrink` | 사용하지 않는 메소드 유지 |
| `-keepclassmembers` | 특정 클래스 멤버 원상태 유지 |
| `-keepattributes` | 내부 클래스 원상태 유지 적용

### 예제

```proguard
-keep class org.xmlpull.v1.** { *; }

-dontwarn org.ejml.**
-dontwarn org.xmlpull.**
-dontwarn io.reactivex.**
-dontwarn com.squareup.okhttp.**
-dontwarn com.thoughtworks.xstream.**
-dontwarn boofcv.**-dontwarn java.awt.**
```

### 자주 사용하는 라이브러리 Proguard Rule

#### 1. Retrofit2

```proguard
# Platform calls Class.forName on types which do not exist on Android to determine platform.
-dontnote retrofit2.Platform
# Platform used when running on Java 8 VMs. Will not be used at runtime.
-dontwarn retrofit2.Platform$Java8
# Retain generic type information for use by reflection by converters and adapters.
-keepattributes Signature
# Retain declared checked exceptions for use by a Proxy instance.
-keepattributes Exceptions
```

#### 2. Glide

```proguard
-keep public class * implements com.bumptech.glide.module.GlideModule
-keep public enum com.bumptech.glide.load.resource.bitmap.ImageHeaderParser$** {
  **[] $VALUES;
  public *;
}

# for DexGuard only
-keepresourcexmlelements manifest/application/meta-data@value=GlideModule
```

#### 3.Picasso

```proguard
-dontwarn com.squareup.okhttp.**
```

---

<TagLinks />