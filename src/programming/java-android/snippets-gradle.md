---
lang: ko-KR
title: Gradle Snippets
description: Android > Gradle Snippets
icon: fas fa-eye-dropper
category:
  - Android 
  - Gradle Snippets
tag: 
  - gradle
  - groovy
  - android
  - android-studio
  - idea
  - intellij-idea
  - intellij
  - apk
  - signed-config
  - plugin-android
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## A. `assembleRelease` Task를 위한 `signingConfigs` 최소구성

| title | description |
| ---: | :---------- |
| 목적 | Signing처리 된 Android APK 생성 (<FontIcon icon="fas fa-file-lines"/>`keystore.properties` 파일 구성 필요) |
| 적업대상 `gradle` 파일 | `./<최종 Android모듈>/build.gradle` |

### A1. 기타 준비파일

| title | description |
| :---: | :---- |
| `./keystore.properties` | Keystore 관련 정보 파일 |
| `./<파일명>.keystore` | Keystore파일 |

### A2. <FontIcon icon="fas fa-file-lines"/>`keystore.properties`

```properties
# ...[생략]...
SIGNED_STORE_FILE=./<파일명>.keystore
SIGNED_STORE_PASSWORD=<Keystore비번>
SIGNED_KEY_ALIAS=<Key 별칭값>
SIGNED_KEY_PASSWORD=<Key 비번>
```

### A3. `build.gradle`

```groovy
buildscript {
    repositories {
        jcenter()
        google()
    }
    dependencies {
        classpath(plugin.android)
        classpath(plugin.kotlin)
    }
}
```

```groovy
plugins {
    id('com.android.applications')
    id('kotlin-android')
    id('com.google.gms.google-services')
}
def keystorePropertiesFile = rootProject.file("keystore.properties")
def keystoreProperties = new Properties()
keystoreProperties.load(new FileInputStream(keystorePropertiesFile))

android {
    signingConfigs {
        release {
            storeFile file(keystoreProperties["SIGNED_STORE_FILE"])
            storePassword keystoreProperties["SIGNED_STORE_PASSWORD"]
            keyAlias keystoreProperties["SIGNED_KEY_ALIAS"]
            keyPassword keystoreProperties["SIGNED_KEY_PASSWORD"]

            v1SigningEnabled false
            v2SigningEnabled true
        }
    }
    // ...[생략]...
}
```

실행 시

```sh
gradlew assembleRelease -b ./<최종 Android모듈>/build.gradle --stacktrace
```

---

## B. `*.apk` 최종 아티팩트 명 지정

| title | description |
| ---: | :---------- |
| 목적 | Signing처리 된 Android APK 생성 (`keystore.properties` 파일 구성 필요) |
| 적업대상 `gradle` 파일 | `./<최종 Android모듈>/build.gradle` |

```groovy
android {
    // ...[생략]...

    applicationVariants.all { variant ->
        variant.outputs.all {
            outputFileName = "<지정 하고 싶은 아티팩트 명>_${variant.versionName}.apk"
        }
    }
}
```

---

<TagLinks />