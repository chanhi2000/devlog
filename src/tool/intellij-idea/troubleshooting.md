---
lang: ko-KR
title: Troubleshooting
description: Intellij Idea > Troubleshooting
icon: fas fa-bug-slash
category:
  - Intellij Idea
  - Troubleshooting
tag: 
  - java
  - jdk
  - ide
  - jetbrains
  - intellij
  - intellij-idea
  - android-studio
  - productivity
  - programming
  - troubleshooting
---

# {{ $frontmatter.title }} 관련

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

---

<TagLinks />