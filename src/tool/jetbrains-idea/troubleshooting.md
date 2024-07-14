---
lang: ko-KR
title: Troubleshooting
description: Intellij Idea > Troubleshooting
icon: fas fa-bug-slash
category:
  - IDE
  - Jetbrains
  - Intellij Idea
  - Troubleshooting
tag:
  - ide
  - java
  - jdk
  - jetbrains
  - intellij
  - intellij-idea
  - android-studio
  - productivity
  - programming
  - troubleshooting
head:
  - - meta:
    - property: og:title
      content: Intellij Idea > Troubleshooting
    - property: og:description
      content: Troubleshooting
    - property: og:url
      content: https://chanhi2000.github.io/tool/jetbrains-idea/troubleshooting.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## feat. Bind Exception Address already in use

- .<FontIcon icon="fas fa-gears"/>cmd 실행

```batch
netsh int ipv4 set dynamicport tcp start=49152 num=16383
netsh int ipv4 set dynamicport udp start=49152 num=16383

net stop winnat
net start winnat
```

---

<TagLinks />