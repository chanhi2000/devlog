---
lang: ko-KR
title: Tips
description: Regex > Tips
icon: fas fa-lightbulb
category:
  - Regex
  - Tips
tag:
  - regex
  - regular-expression
  - snippet
  - tips
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## Favorite RegEx

### 기관코드 필터

> 기관코드는 7자리로 구성 된 숫자

```regex
^\d{7}
```

### 기관코드 > 중앙행정기관

> B로 시작하는 기관코드도 포함하여 앞자리 1로 시작 되는 7자리로 구성된 숫자

```regex
([1][0-9]{6})|([a-zA-Z][0-9]{6})
```

### CN 사용자

> 한글이름 전/후에 3자리 숫자로 구성 된 문자열

```regex
^[0-9]{3}[가-힇]*[0-9]{3}
```

### URL 패턴

```regex
(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?
```


### uuid

```regex
[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f\u200c\u200b]{4}-[0-9a-f]{12}$
```

### E-mail

```regex
^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})${'$'}
```

---

<TagLinks />