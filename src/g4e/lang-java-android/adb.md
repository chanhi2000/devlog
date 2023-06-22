---
lang: ko-KR
title: 🐚adb
description: 🤖Android > 🐚adb
tags: ["references", "android"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## 앱 (강제로) 죽이기

```sh
adb shell am force-stop <PACKAGE_NAME>
```

---

## `dumpState` 보고서 출력

```sh
adb bugreport <출력할 경로>
```

---

## 단말기에 설치 된 앱 `apk` 추출

```sh
adb shell pm path kr.go.mobile.testbed.iff
# package:/data/app/kr.go.mobile.testbed.iff-yxAQZiMbPotN8fOSLIJR2Q==/base.apk
adb pull /data/app/kr.go.mobile.testbed.iff-yxAQZiMbPotN8fOSLIJR2Q==/base.apk path/to/desired/destination
```

<TagLinks />