---
lang: ko-KR
title: Snippets
description: Dart > Snippets
icon: fas fa-eye-dropper
category:
  - Dart
  - Snippets
tag: 
  - dart
  - flutter
---

# {{ $frontmatter.title }} 관련

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
