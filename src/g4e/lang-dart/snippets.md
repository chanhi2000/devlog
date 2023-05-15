---
lang: ko-KR
title: 🔮Snippets
description: 🔰Dart > 🔮Snippets
category: 🔰Dart
tags: ["references", "dart"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## Shimmer

![demo](https://github.com/hnvn/flutter_shimmer/blob/master/screenshots/loading_list.gif?raw=true)

```dart
SizedBox(width: 200.0, height:100.0, 
  child: Shimmer.fromColors(
    baseColor: Colors.red,
    highlightColor: Colors.yellow,
    child: Text('Shimmer', 
      textAlign: TextAlign.center,
      style: TextStyle(
        fontSize: 40.0, fontWeight: FontWeight.bold,
      ),
    ),
  ),
)l
```

---

<TagLinks />
