---
lang: ko-KR
title: Intellij Idea > 🩺Troubleshooting
description: Intellij Idea > 🩺Troubleshooting
tags: ["idea", "intellij-idea", "intellij", "jetbrains", "android-studio", "ide", "troubleshooting"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---
## feat. Bind Exception Address already in use

- 💊cmd 실행 

```batch
netsh int ipv4 set dynamicport tcp start=49152 num=16383
netsh int ipv4 set dynamicport udp start=49152 num=16383

net stop winnat
net start winnat
```

<TagLinks />