---
lang: ko-KR
title: Gradle Snippets
description: Android > Gradle Snippets
icon: fas fa-eye-dropper
category:
  - Java
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

- **목적**: Signing처리 된 Android APK 생성 (<FontIcon icon="fas fa-file-lines"/>`keystore.properties` 파일 구성 필요)
- **적업대상 `gradle` 파일**: <FontIcon icon="fas fa-folder-open"/>`./<최종 Android모듈>/`<FontIcon icon="iconfont icon-gradle"/>`build.gradle`
- **기타 준비파일**
  - <FontIcon icon="fas fa-key"/>`./keystore.properties`: Keystore 관련 정보 파일
  - <FontIcon icon="fas fa-key"/>`./<파일명>.keystore`: Keystore파일

```properties title="keystore.properties"
# ...[생략]...
SIGNED_STORE_FILE=./<파일명>.keystore
SIGNED_STORE_PASSWORD=<Keystore비번>
SIGNED_KEY_ALIAS=<Key 별칭값>
SIGNED_KEY_PASSWORD=<Key 비번>
```

::: code-tabs#kotlin

@tab <FontIcon icon="iconfont icon-gradle"/><code>build.gradle</code>

```groovy title="build.gradle"
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

@tab <FontIcon icon="iconfont icon-kotlin"/><code>build.gradle.kts</code>

```groovy title="build.gradle.kts"
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

:::

::: code-tabs#kotlin

@tab <FontIcon icon="iconfont icon-gradle"/><code>build.gradle</code>

```groovy :collapsed-lines title="app/build.gradle"
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

@tab <FontIcon icon="iconfont icon-kotlin"/><code>build.gradle.kts</code>

```kotlin :collapsed-lines title="app/build.gradle.kts"
plugins {
    id('com.android.applications')
    id('kotlin-android')
    id('com.google.gms.google-services')
}
val keystorePropertiesFile = rootProject.file("keystore.properties")
val keystoreProperties = new Properties()
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

:::


실행 시

```sh
gradlew assembleRelease -b ./<최종 Android모듈>/build.gradle --stacktrace
# 또는
gradlew :<최종 Android모듈>:assembleRelease --stacktrace
```

---

## B. `*.apk` 최종 아티팩트 명 지정

- **목적**: Signing처리 된 Android APK 생성 (<FontIcon icon="fas fa-file-lines"/>`keystore.properties` 파일 구성 필요)
- **적업대상 `gradle` 파일**: <FontIcon icon="fas fa-folder-open"/>`./<최종 Android모듈>/`<FontIcon icon="iconfont icon-gradle"/>`build.gradle`

```groovy title="app/build.gradle"
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