---
lang: ko-KR
title: 🐘Gradle > Troubleshooting
description: 🐘Gradle > Troubleshooting
tags: ["gradle", "groovy", "idea", "intellij-idea", "intellij", "insecure-protocols", "https"]
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## Repository SSL not applied

사용한 Gradle 버전: `7.2`

```gradle
repositories {
    maven {
        url repo.ons
    }
}
```

리포 적용 했을 때 Gradle Sync 에 실패

```
Using insecure protocols with respositories, without explicit opt-in, is unsupported, Switch maven repository ... [생략]
```

아래와 같이 처리 `allowInsecureProtocol true` 플래그 추가하여 처리

```gradle
repositories {
    maven {
        url repo.ons
        allowInsecureProtocol true
    }
}
```

---

<TagLinks />