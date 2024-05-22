---
lang: ko-KR
title: 아파치 카프카(Apache Kafka)의 새로운 협의 프로토콜인 KRaft에 대해(1)
description: Article(s) > 아파치 카프카(Apache Kafka)의 새로운 협의 프로토콜인 KRaft에 대해(1)
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
      content: Article(s) > 아파치 카프카(Apache Kafka)의 새로운 협의 프로토콜인 KRaft에 대해(1)
    - property: og:description
      content: 아파치 카프카(Apache Kafka)의 새로운 협의 프로토콜인 KRaft에 대해(1)
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/popit.kr/about-kraft-kafkas-new-consensus-protocol-1.html
prev: /programming/java-kafka/articles/README.md
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
  name="아파치 카프카(Apache Kafka)의 새로운 협의 프로토콜인 KRaft에 대해(1) | Popit"
  desc="이번 글에서는 아파치 카프카(Apache Kafka)의 새로운 협의 프로토콜인 KRaft에 대해 다룰 예정입니다. 카프카를 사용하면서 초기에는 최신 버전의 릴리스를 추구했지만, 카프카가 점점 데이터 파이프라인의 중심이 되면서 보다 보수적으로 접근하게 되었습니다. 지금까지 KRaft에 대해 크게 고려하지 않았으나 이제는 KRaft에 대한 준비와 주키퍼 모드로 운영 중인 카프카를 마이그레이션 하는 방법 등에 대해서도 심도 있는 검토가 필요한 생각이 들었습니다. 이번에 새롭게 KRaft에 대한 자료 조사도 하고, 마이그레이션 테스트도 진행하면서 경험한 내용들을 간략히 공유하고자 합니다. 전체 글의 내용은 KRaft의 등장 배경과 중요성, 마이그레이션 전략, 릴리스 노트와 향후 계획 등을 설명하며, 총 2편으로 나누어 작성하겠습니다. 먼저 KRaft의 등장 배경과 중요성에 대해 살펴보겠습니다."
  url="https://www.popit.kr/%ec%95%84%ed%8c%8c%ec%b9%98-%ec%b9%b4%ed%94%84%ec%b9%b4apache-kafka%ec%9d%98-%ec%83%88%eb%a1%9c%ec%9a%b4-%ed%98%91%ec%9d%98-%ed%94%84%eb%a1%9c%ed%86%a0%ec%bd%9c%ec%9d%b8-kraft%ec%97%90-%eb%8c%80/"
  logo="https://www.popit.kr/wp-content/uploads/2016/08/favicon_32x32.png"
  preview="https://www.popit.kr//wp-content/uploads/2024/03/kafka-day_kraft1.002-600x450.jpeg"/>

> 2024.03.26

<!-- TODO: 작성 -->

---

<TagLinks />