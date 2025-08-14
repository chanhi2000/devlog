---
lang: ko-KR
title: Gradle Kotlin DSL (Android)
description: Snippets > Gradle Kotlin DSL (Android)
icon: fa-brands fa-android
category:
  - Gradle
  - Android
  - Snippets
tag: 
  - gradle
  - groovy
  - idea
  - intellij-idea
  - intellij
  - android
head:
  - - meta:
    - property: og:title
      content: Snippets > Gradle Kotlin DSL (Android)
    - property: og:description
      content: Gradle Kotlin DSL (Android)
    - property: og:url
      content: https://chanhi2000.github.io/programming/gradle/snippets/gradle-kotlin-dsl-android.html
prev: /programming/gradle/snippets/README.md
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Gradle > Snippets",
  "desc": "Snippets",
  "link": "/programming/gradle/snippets/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

## 모바일 온나라

### <VPIcon icon="iconfont icon-gradle"/>`settings.gradle`

::: tabs

@tab:active Before

```groovy
include ":onnara01", ":onnara02", "onnara-ui-common"
```

@tab <VPIcon icon="iconfont icon-kotlin"/>settings.gradle.kts

```kotlin
include(":onnara01")
include(":onnara02")
include(":onnara-ui-common")
```

:::

### <VPIcon icon="iconfont icon-gradle"/>`dependencies.gradle`

::: tabs

@tab:active Before

```groovy
ext {
    versions = [
            // 모바일 온나라 1.0
            appname_onnara01: "모바일 온나라 1.0",
            vcode_onnara01: 20231109,
            vname_onnara01: "1.0.7",

            // 모바일 온나라 2.0
            appname_onnara02: "모바일 온나라 2.0",
            vcode_onnara02: 20231116,
            vname_onnara02: "1.1.3",

            vname_onnara01_testbed: "0.0.3", // 패치만 증가하여 관리
            vname_onnara02_testbed: "0.0.8", // 패치만 증가하여 관리

            // android > build
            compileSdk: 29,
            buildTools: "29.0.3",
            minSdk: 24,
            targetSdk : 27,

            // plugins
            android: "3.5.4",
            kotlin: "1.3.50",
            coroutine: "1.3.9",
            gms: "4.3.10",
            dokka: "1.7.20",

            // dependencies > android
            androidx_appcompat: "1.2.0",
            androidx_constraint: "2.0.4",
            androidx_core: "1.3.1",
            androidx_lifecycle: "2.3.1",
            androidx_activity: "1.0.0",

            // dependencies > firebase
            firebaseBom: "29.0.4",

            // dependenceis > network
            retrofit: "2.9.0",
            okhttp3: "4.1.0",
            gson: "2.9.0",

            // dependencies > other
            timber: "4.7.1",
            stetho: "1.5.0",
            flipper: "0.154.0",
            soloader: "0.10.1",

            // test
            androidx_runner: "1.2.0",
            androidx_espresso: "3.2.0",
    ]

    plugin = [
            android: "com.android.tools.build:gradle:${versions.android}",
            kotlin: "org.jetbrains.kotlin:kotlin-gradle-plugin:${versions.kotlin}",
            gms: "com.google.gms:google-services:${versions.gms}",
            dokka: [
                    "org.jetbrains.dokka:dokka-gradle-plugin:${versions.dokka}",
                    "org.jetbrains.dokka:versioning-plugin:${versions.dokka}",
            ],
    ]

    dep = [
            kotlinStdlib: [
                    "org.jetbrains.kotlin:kotlin-stdlib:${versions.kotlin}",
                    "org.jetbrains.kotlinx:kotlinx-coroutines-android:${versions.coroutine}",
            ],
            androidx: [
                    "androidx.appcompat:appcompat:${versions.androidx_appcompat}",
                    "androidx.constraintlayout:constraintlayout:${versions.androidx_constraint}",
                    "androidx.core:core-ktx:${versions.androidx_core}",
                    "androidx.lifecycle:lifecycle-common:${versions.androidx_lifecycle}",
                    "androidx.lifecycle:lifecycle-livedata:${versions.androidx_lifecycle}",
                    "androidx.lifecycle:lifecycle-livedata-core:${versions.androidx_lifecycle}",
                    "androidx.lifecycle:lifecycle-runtime:${versions.androidx_lifecycle}",
                    "androidx.lifecycle:lifecycle-runtime-ktx:${versions.androidx_lifecycle}",
                    "androidx.lifecycle:lifecycle-viewmodel:${versions.androidx_lifecycle}",
                    "androidx.lifecycle:lifecycle-viewmodel-savedstate:${versions.androidx_lifecycle}",
//                  "androidx.activity:activity-ktx:${versions.androidx_activity}"
            ],
            retrofit: [
//                    "com.squareup.retrofit2:retrofit:${versions.retrofit}",
//                    "com.squareup.retrofit2:converter-gson:${versions.retrofit}",
                    "com.squareup.okhttp3:okhttp:${versions.okhttp3}",
                    "com.squareup.okhttp3:logging-interceptor:${versions.okhttp3}",
            ],
            gson: "com.google.code.gson:gson:${versions.gson}",
            firebaseBom: "com.google.firebase:firebase-bom:${versions.firebaseBom}",

            timber: "com.jakewharton.timber:timber:${versions.timber}",
            stetho: [
                    "com.facebook.stetho:stetho:${versions.stetho}",
                    "com.facebook.stetho:stetho-timber:${versions.stetho}",
                    "com.facebook.stetho:stetho-js-rhino:${versions.stetho}",
            ],
            stethoOkhttp3: "com.facebook.stetho:stetho-okhttp3:${versions.stetho}",
            soloader: "com.facebook.soloader:soloader:${versions.soloader}",
            flipperDebug: [
                    "com.facebook.flipper:flipper:${versions.flipper}",
                    "com.facebook.flipper:flipper-network-plugin:${versions.flipper}",
            ],
            flipperRelease: "com.facebook.flipper:flipper-noop:${versions.flipper}",
            androidxUiTest: [
                    "androidx.test:runner:${versions.androidx_runner}",
                    "androidx.test:rules:${versions.androidx_runner}",
                    "androidx.test.espresso:espresso-core:${versions.androidx_espresso}",
                    "androidx.test.espresso:espresso-web:${versions.androidx_espresso}",
                    "androidx.test.espresso:espresso-intents:${versions.androidx_espresso}",
            ]
    ]
}
```

@tab <VPIcon icon="fas fa-folder-open"/>buildSrc/<VPIcon icon="iconfont icon-kotlin"/>build.gradle.kts

```kotlin
plugins {
    id("org.gradle.kotlin.kotlin-dsl") version "1.2.9"
}

repositories {
    mavenCentral()
}
```

:::

### <VPIcon icon="iconfont icon-gradle"/>`build.gradle`

::: tabs

@tab:active Before

```groovy
// Top-level build file where you can add configuration options common to all sub-projects/modules.
buildscript {
    apply from: "dependencies.gradle"

    repositories {
        jcenter()
        google()
    }

    dependencies {
        classpath(plugin.android)
        classpath(plugin.kotlin)
        classpath(plugin.gms)
        classpath(plugin.dokka)
    }
}

allprojects {
    repositories {
        mavenCentral()
        jcenter()
        google()
        maven { url "https://jitpack.io" }
    }
    tasks.withType(JavaCompile) {
        options.compilerArgs << "-Xlint:deprecation" << "-Xlint:unchecked"
    }
}

task clean(type: Delete) {
    delete rootProject.buildDir
}
```

@tab <VPIcon icon="iconfont icon-kotlin"/>build.gradle.kts

```kotlin

```

:::

### <VPIcon icon="fas fa-folder-open"/>`onnara-ui-common`/<VPIcon icon="iconfont icon-gradle"/>`build.gradle`

::: tabs

@tab:active Before

```groovy
plugins {
    id("com.android.library")
    id("kotlin-android")
    id("kotlin-android-extensions")
//  id("org.jetbrains.dokka")
}

android {
    compileSdkVersion versions.compileSdk
    buildToolsVersion versions.buildTools

    defaultConfig {
        minSdkVersion versions.minSdk
        targetSdkVersion versions.targetSdk
    }

    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
    kotlinOptions {
        jvmTarget = "${JavaVersion.VERSION_1_8}"
    }
}

dependencies {
    implementation(dep.kotlinStdlib)
    implementation(dep.androidx)
    implementation(dep.gson)
    implementation(dep.timber)
}
```

@tab <VPIcon icon="iconfont icon-kotlin"/>build.gradle.kts

```kotlin

```

:::

### <VPIcon icon="fas fa-folder-open"/>`onnara01/`<VPIcon icon="iconfont icon-gradle"/>`build.gradle`

::: tabs

@tab:active Before

```groovy
```

@tab <VPIcon icon="iconfont icon-kotlin"/>build.gradle.kts

```groovy
```

:::

### <VPIcon icon="fas fa-folder-open"/>`onnara02/`<VPIcon icon="iconfont icon-gradle"/>`build.gradle`

::: tabs

@tab:active Before

```kotlin

```

@tab <VPIcon icon="iconfont icon-kotlin"/>build.gradle.kts

```groovy
```

:::

---

<TagLinks />