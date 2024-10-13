---
lang: ko-KR
title: Article(s)
description: Kafka > Article(s)
icon: fas fa-square-share-nodes
category: 
  - Java
  - Kotlin
  - Kafka
  - Article(s)
tag: 
  - blog
  - digitalocean.com
  - learnk8s.io
  - popit.kr
  - d2.naver.com
  - java
  - kotlin
  - kafka
  - apache-kafka
head:
  - - meta:
    - property: og:title
      content: kafka > Article(s)
    - property: og:description
      content: Article(s)
    - property: og:url
      content: https://chanhi2000.github.io/programming/java-kafka/articles/
---

# {{ $frontmatter.title }} 관련

<SiteInfo
  name="DigitalOcean | Cloud Infrastructure for Developers"
  desc="An ocean of simple, scalable cloud solutions."
  url="https://digitalocean.com/community/tutorials?sort_by=oldest"
  logo="https://digitalocean.com/_next/static/media/favicon.594d6067.ico"
  preview="https://www.digitalocean.com/_next/static/media/social-share-default.e8530e9e.jpeg"/>

<SiteInfo
  name="Learnk8s — the Kubernetes training company"
  desc="We help you get started on your Kubernetes journey through comprehensive online, in person or remote training."
  url="https://learnk8s.io/archive"
  logo="https://static.learnk8s.io/f7e5160d4744cf05c46161170b5c11c9.svg"
  preview="https://static.learnk8s.io/6dbec52a8d352b7cd5625cf903bf4de4.png"/>

```component VPCard
{
  "title": "Popit | 전문 지식 공유를 위한 팀블로그",
  "desc": "전문 지식 공유를 위한 팀블로그",
  "link": "https://popit.kr/page/1",
  "logo": "https://popit.kr/wp-content/uploads/2016/08/favicon_32x32.png",
  "background": "rgba(0,21,41,0.2)"
}
```

<SiteInfo
  name="NAVER D2"
  desc=""
  url="https://d2.naver.com"
  lokafka="d2.naver.com/favicon.ico"
  preview="d2.naver.com/sitebanner.png"/>

[[toc]]

---

## <FontIcon icon="fa-brands fa-digital-ocean"/>DigitalOcean | Cloud Infrastructure for Developers

> digitalocean.com

```component VPCard
{
  "title": "How to Integrate Existing Systems with Kafka Connect | DigitalOcean",
  "desc": "In this tutorial, you’ll learn how to ingest data into Kafka topics using Kafka Connect - a tool used for reliably transferring data between Kafka and other …",
  "link": "https://chanhi2000.github.io/bookshelf/digitalocean.com/how-to-integrate-existing-systems-with-kafka-connect.md",
  "logo": "https://digitalocean.com/_next/static/media/favicon.594d6067.ico",
  "background": "rgba(29,55,209,0.2)"
}
```

```component VPCard
{
  "title": "How To Set Up a Multi-Node Kafka Cluster using KRaft | DigitalOcean",
  "desc": "Learn to create a Kafka cluster with KRaft for scalable, fault-tolerant real-time data processing in this step-by-step tutorial…",
  "link": "https://chanhi2000.github.io/bookshelf/digitalocean.com/how-to-set-up-a-multi-node-kafka-cluster-using-kraft.md",
  "logo": "https://digitalocean.com/_next/static/media/favicon.594d6067.ico",
  "background": "rgba(29,55,209,0.2)"
}
```

```component VPCard
{
  "title": "How To Manage Kafka Programmatically | DigitalOcean",
  "desc": "Discover how to master Kafka cluster management with KafkaAdminClient API, kcat CLI, and Kafka Cruise Control for efficient Kafka cluster management…",
  "link": "https://chanhi2000.github.io/bookshelf/digitalocean.com/how-to-manage-kafka-programmatically.md",
  "logo": "https://digitalocean.com/_next/static/media/favicon.594d6067.ico",
  "background": "rgba(29,55,209,0.2)"
}
```

---

## Learnk8s — the Kubernetes training company

> learnk8s.io

```component VPCard
{
  "title": "Scaling Microservices with Message Queues, Spring Boot and Kubernetes",
  "desc": "Learn how to scale SpringBoot apps in Kubernetes using the autoscaler and a message broker such as Kafka, RabbitMQ or ActiveMQ.",
  "link": "https://chanhi2000.github.io/bookshelf/learnk8s.io/scaling-spring-boot-microservices.md",
  "logo": "https://static.learnk8s.io/f7e5160d4744cf05c46161170b5c11c9.svg",
  "background": "rgba(86,154,209,0.2)"
}
```

```component VPCard
{
  "title": "Designing and testing a highly available Kafka cluster on Kubernetes",
  "desc": "Learn how to design a Kafka cluster to achieve high availability using standard kubernetes resources and test how it tolerates maintenance and total node failures.",
  "link": "https://chanhi2000.github.io/bookshelf/learnk8s.io/kafka-ha-kubernetes.md",
  "logo": "https://static.learnk8s.io/f7e5160d4744cf05c46161170b5c11c9.svg",
  "background": "rgba(86,154,209,0.2)"
}
```

<!-- END: learnk8s.io -->

---

## Popit | 전문 지식 공유를 위한 팀블로그

> popit.kr
  
```component VPCard
{
  "title": "아파치 카프카(Apache Kafka)의 새로운 협의 프로토콜인 KRaft에 대해(1) | Popit",
  "desc": "이번 글에서는 아파치 카프카(Apache Kafka)의 새로운 협의 프로토콜인 KRaft에 대해 다룰 예정입니다. 카프카를 사용하면서 초기에는 최신 버전의 릴리스를 추구했지만, 카프카가 점점 데이터 파이프라인의 중심이 되면서 보다 보수적으로 접근하게 되었습니다. 지금까지 KRaft에 대해 크게 고려하지 않았으나 이제는 KRaft에 대한 준비와 주키퍼 모드로 운영 중인 카프카를 마이그레이션 하는 방법 등에 대해서도 심도 있는 검토가 필요한 생각이 들었습니다. 이번에 새롭게 KRaft에 대한 자료 조사도 하고, 마이그레이션 테스트도 진행하면서 경험한 내용들을 간략히 공유하고자 합니다. 전체 글의 내용은 KRaft의 등장 배경과 중요성, 마이그레이션 전략, 릴리스 노트와 향후 계획 등을 설명하며, 총 2편으로 나누어 작성하겠습니다. 먼저 KRaft의 등장 배경과 중요성에 대해 살펴보겠습니다.",
  "link": "https://chanhi2000.github.io/bookshelf/popit.kr/about-kraft-kafkas-new-consensus-protocol-1.md",
  "logo": "https://popit.kr/wp-content/uploads/2016/08/favicon_32x32.png",
  "background": "rgba(0,21,41,0.2)"
}
```

```component VPCard
{
  "title": "아파치 카프카(Apache Kafka)의 새로운 협의 프로토콜인 KRaft에 대해(2) | Popit",
  "desc": "이번 글에서는 이전 글에 이어 KRaft의 구성 방법, 마이그레이션 전략, 릴리스 노트와 향후 계획에 대해 살펴보겠습니다. 아직 이전 글 을 읽어보지 못한 분들은 이전 글을 먼저 읽어보시기를 추천드립니다. KRaft의 구성 전통적인 주키퍼 모드를 사용하면서 많은 사용자들이 느꼈던 불편함 중 하나는 바로 주키퍼와 카프카 서버를 별도로 운영해야 한다는 점이었습니다. 이는 단순히 별도의 애플리케이션 운영 관리를 넘어서, 추가로 별도의 물리적 서버 자원의 할당까지 포함하고 있습니다. 제가 받은 많은 질문 중 하나도, 주키퍼 물리 서버의 할당과 관련된 주제로, 주키퍼와 카프카를 동일한 서버에서 실행해도 되는지에 관한 것이었습니다. 사실 주키퍼는 카프카를 관리하는 역할을 하므로, 이상적으로는 카프카와 분리된 별도의 서버에서 운영하는 것을 권장합니다. 하지만 이는 강제성을 요구하는 것도 아니고, 서버의 리소스 제약이 있는 경우 주키퍼와 카프카를 동일한 서버에서 실행할 수도 있습니다.  KRaft의 등장 이후 카프카 사용자들이 환영한 변화중 하나는 주키퍼의 의존성 제거입니다. 이는 애플리케이션의 관리 단순화뿐만 아니라, 물리적 서버의 리소스 절감도 가능하다고 생각했던 것",
  "link": "https://chanhi2000.github.io/bookshelf/popit.kr/about-kraft-kafkas-new-consensus-protocol-2.md",
  "logo": "https://popit.kr/wp-content/uploads/2016/08/favicon_32x32.png",
  "background": "rgba(0,21,41,0.2)"
}
```

---

## <FontIcon icon="iconfont icon-naver"/>NAVER D2

```component VPCard
{
  "title": "Kafka NetworkClient Internals | NAVER D2",
  "desc": "Kafka NetworkClient Internals",
  "link": "https://d2.naver.com/helloworld/0853669",
  "logo": "d2.naver.com/favicon.ico",
  "background": "rgba(54,235,127,0.2)"
}
```

```component VPCard
{
  "title": "일 3,000만 건의 네이버페이 주문 메시지를 처리하는 Kafka 시스템의 무중단 전환 사례 | NAVER D2",
  "desc": "일 3,000만 건의 네이버페이 주문 메시지를 처리하는 Kafka 시스템의 무중단 전환 사례",
  "link": "https://d2.naver.com/helloworld/8404108",
  "logo": "d2.naver.com/favicon.ico",
  "background": "rgba(54,235,127,0.2)"
}
```

---

<TagLinks />