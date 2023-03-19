---
lang: ko-KR
title: 🩺Troubleshooting
description: 👑Bash > 🩺Troubleshooting
tags: ["bash", "linux", "macos", "terminal", "sed"]
---

# {{ $frontmatter.description }} 관련

[[toc]]

---
## 스크립트 실행오류

### `/bin/sh^M`: bad interpreter: 그런 파일이나 디렉터리가 없습니다.

- 😥유닉스 개행문자와 윈도우 개행문자가 섞여있을 경우 발생
- 💊실행하려는 스크립트에 대하여 아래와 같이 실행

```shell
sed -i -e 's/\r$//' <스크립트.sh>
```

<TagLinks />