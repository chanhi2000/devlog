---
lang: ko-KR
title: 아파치 카프카(Apache Kafka)의 새로운 협의 프로토콜인 KRaft에 대해(2)
description: Article(s) > 아파치 카프카(Apache Kafka)의 새로운 협의 프로토콜인 KRaft에 대해(2)
icon: iconfont icon-apachekafka
category:
  - Java
  - Kotlin
  - Kafka
  - Article(s)
tag: 
  - blog
  - popit.kr
  - java
  - kotlin
  - kafka
  - apache-kafka
head:  
  - - meta:
    - property: og:title
      content: Article(s) > 아파치 카프카(Apache Kafka)의 새로운 협의 프로토콜인 KRaft에 대해(2)
    - property: og:description
      content: 아파치 카프카(Apache Kafka)의 새로운 협의 프로토콜인 KRaft에 대해(2)
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/popit.kr/about-kraft-kafkas-new-consensus-protocol-2.html
prev: /programming/java-kafka/articles/README.md
date: 2024-03-29
isOriginal: false
cover: https://popit.kr//wp-content/uploads/2024/03/kafka-day_kraft1.002-600x450.jpeg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Kafka > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/java-kafka/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="아파치 카프카(Apache Kafka)의 새로운 협의 프로토콜인 KRaft에 대해(2) | Popit"
  desc="이번 글에서는 이전 글에 이어 KRaft의 구성 방법, 마이그레이션 전략, 릴리스 노트와 향후 계획에 대해 살펴보겠습니다. 아직 이전 글 을 읽어보지 못한 분들은 이전 글을 먼저 읽어보시기를 추천드립니다. KRaft의 구성 전통적인 주키퍼 모드를 사용하면서 많은 사용자들이 느꼈던 불편함 중 하나는 바로 주키퍼와 카프카 서버를 별도로 운영해야 한다는 점이었습니다. 이는 단순히 별도의 애플리케이션 운영 관리를 넘어서, 추가로 별도의 물리적 서버 자원의 할당까지 포함하고 있습니다. 제가 받은 많은 질문 중 하나도, 주키퍼 물리 서버의 할당과 관련된 주제로, 주키퍼와 카프카를 동일한 서버에서 실행해도 되는지에 관한 것이었습니다. 사실 주키퍼는 카프카를 관리하는 역할을 하므로, 이상적으로는 카프카와 분리된 별도의 서버에서 운영하는 것을 권장합니다. 하지만 이는 강제성을 요구하는 것도 아니고, 서버의 리소스 제약이 있는 경우 주키퍼와 카프카를 동일한 서버에서 실행할 수도 있습니다.  KRaft의 등장 이후 카프카 사용자들이 환영한 변화중 하나는 주키퍼의 의존성 제거입니다. 이는 애플리케이션의 관리 단순화뿐만 아니라, 물리적 서버의 리소스 절감도 가능하다고 생각했던 것"
  url="https://popit.kr/%ec%95%84%ed%8c%8c%ec%b9%98-%ec%b9%b4%ed%94%84%ec%b9%b4apache-kafka%ec%9d%98-%ec%83%88%eb%a1%9c%ec%9a%b4-%ed%98%91%ec%9d%98-%ed%94%84%eb%a1%9c%ed%86%a0%ec%bd%9c%ec%9d%b8-kraft%ec%97%90-%eb%8c%80-2/"
  logo="https://popit.kr/wp-content/uploads/2016/08/favicon_32x32.png"
  preview="https://popit.kr//wp-content/uploads/2024/03/kafka-day_kraft1.002-600x450.jpeg"/>

<!-- TODO: 작성 -->

---

<TagLinks />