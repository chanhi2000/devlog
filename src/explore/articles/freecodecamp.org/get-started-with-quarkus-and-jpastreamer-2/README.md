---
lang: ko-KR
title: Get started with Quarkus and JPAStreamer
description: Article(s) > Get started with Quarkus and JPAStreamer
icon: iconfont icon-quarkus
category: 
  - Java
  - Quarkus
  - Youtube
tag: 
  - blog
  - freecodecamp.org
  - java
  - jdk
  - jdk8
  - stream
  - quarkus
  - jpa
  - jpastreamer
  - youtube
  - crashcourse
head:
  - - meta:
    - property: og:title
      content: Article(s) > Get started with Quarkus and JPAStreamer
    - property: og:description
      content: Get started with Quarkus and JPAStreamer
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/get-started-with-quarkus-and-jpastreamer-2/
prev: /programming/java-quarkus/articles/README.md
date: 2023-11-03
isOriginal: false
author: Julia Gustafsson
cover: https://freecodecamp.org/news/content/images/size/w2000/2023/11/jpastreamer_featureimage_update.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Quarkus > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/java-quarkus/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Get started with Quarkus and JPAStreamer"
  desc="In the world of software development, innovation often arrives in the form of powerful tools that transform the way we build applications - enter Quarkus, a development platform that's reshaping the Java landscape.  If you are new..."
  url="https://freecodecamp.org/news/get-started-with-quarkus-and-jpastreamer-2/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://freecodecamp.org/news/content/images/size/w2000/2023/11/jpastreamer_featureimage_update.png"/>

<VidStack src="youtube/KZnQ5R8Kd4I" />

In the world of software development, innovation often arrives in the form of powerful tools that transform the way we build applications - enter Quarkus, a development platform that's reshaping the Java landscape.

If you are new to the Quarkiverse, this tutorial is a great way to start exploring how it can radically improve your Java development experience. I’ll show you how to quickly assemble a REST application on the Quarkus platform, leveraging the power of JPAStreamer, a Hibernate extension to handle database interactions with the elegance of the Java Stream API.

By the end of this walkthrough, you'll possess the know-how to seamlessly streamline your forthcoming Java applications for cloud deployment. Moreover, I wouldn't be surprised if you discover that Java is far more enjoyable with live code reloads and continuous testing.

In this course, you'll learn how to use Quarkus and JPAStreamer to build a REST web application. Quarkus is an open-source framework tailored for Java, optimized for building speedy cloud-native microservices and serverless applications, especially in containerized environments like Kubernetes. JPAStreamer, on the other hand, is a Java library that simplifies database interactions by allowing JPA entities to harness the expressiveness of Java Stream operations.

---

## What We’ll Build

This tutorial serves as a comprehensive guide to building a robust Quarkus application. We'll cover every essential aspect, from setting up your development environment and establishing a database connection, to defining REST endpoints, mastering Java Streams with JPAStreamer for powerful queries, effortless continuous testing, and achieving native compilation. The final result is a lightweight REST application that serves information from a sample Film in a split second after a cold start, laying the groundwork for your future Quarkus projects.

On the surface, this looks like yet another guide on how to develop an application, but in practice, it is also a glimpse into what developing with Quarkus _feels_ like.

During the development, you will become familiar with the following topics:

- Setting up a Quarkus project
- Connecting to a MySQL Docker instance
- Using the Quarkus development mode
- Expressing queries as Java Streams with JPAStreamer
- Performing continuous testing
- Compiling the application natively for rapid start-up times and minimal memory consumption

### What Makes Quarkus Special?

Quarkus is often described as a cutting-edge, cloud-native framework designed for modern Java and Kotlin applications. Its mission is to tackle longstanding Java challenges, such as prolonged start-up times, high memory consumption, and a rather slow development experience.

It is able to achieve this objective with two clever design feats - an improved build process that performs much of the heavy lifting at build time instead of application start-up, and as an extension of that - a developer mode that allows you to spin up your application and incorporate any code updates on the fly.

Four years after its initial release, Quarkus boasts a wide range of extensions, ensuring seamless integration with all the major Java libraries like Hibernate, Spring, and JUnit.

### What is JPAStreamer?

JPAStreamer is a lightweight library designed to simplify database access in Java applications that utilizes the Java Persistence API (JPA). Its power lies in its expressive and type-safe Stream queries that help enhance coding precision and productivity.

JPAStreamer optimizes performance by translating pipelines into Hibernate Query Language (HQL) queries. Unlike using getResultStream() in Hibernate, which materializes all entities, JPAStreamer ensures only relevant entities are fetched, akin to using SQL directly.

Imagine fetching 10 films from a database where each title starts with "A" and is at least 1 hour long. With JPAStreamer, the query is as simple as:

```java
List<Film> films = jpaStreamer.stream(Film.class)
  .filter(Film$.title.startsWith("A")
  .and(Film$.length.greaterThan(60))
  .limit(10)
  .collect(Collectors.toList());
```

---

## Prerequisites

Before we roll up our sleeves and start coding, it's important to ensure you have everything you need in place. Even though the walkthrough covers any details necessary to get a fully functional application, it is assumed that you are:

- Familiar with Basic Java
- Acquainted with the Java Stream API
- Comfortable with Database Interactions using JPA/Hibernate

If you're planning to follow along on your local machine, make sure your development environment meets the following requirements:

- Java 11 or later
- An IDE of your choice (the guide is using IntelliJ)
- Maven (or Gradle)
- [Quarkus CLI](https://quarkus.io/guides/cli-tooling)
- [Docker](https://docs.docker.com/get-docker/) and Docker CLI (or your own database)
- *Optional - GraalVM installation*

```component VPCard
{
  "title": "1. Project Setup",
  "desc": "(1/5) Get started with Quarkus and JPAStreamer",
  "link": "/explore/articles/freecodecamp.org/get-started-with-quarkus-and-jpastreamer-2/project-setup.md",
  "logo": "https://cdn.freecodecamp.org/universal/favicons/favicon.ico",
  "background": "rgba(10,10,35,0.2)"
}
```

```component VPCard
{
  "title": "2. Getting Started",
  "desc": "(2/5) Get started with Quarkus and JPAStreamer",
  "link": "/explore/articles/freecodecamp.org/get-started-with-quarkus-and-jpastreamer-2/getting-started.md",
  "logo": "https://cdn.freecodecamp.org/universal/favicons/favicon.ico",
  "background": "rgba(10,10,35,0.2)"
}
```

```component VPCard
{
  "title": "3. JPA & JPAStreamer",
  "desc": "(3/5) Get started with Quarkus and JPAStreamer",
  "link": "/explore/articles/freecodecamp.org/get-started-with-quarkus-and-jpastreamer-2/jpa-jpastreamer.md",
  "logo": "https://cdn.freecodecamp.org/universal/favicons/favicon.ico",
  "background": "rgba(10,10,35,0.2)"
}
```

```component VPCard
{
  "title": "4. Testing",
  "desc": "(4/5) Get started with Quarkus and JPAStreamer",
  "link": "/explore/articles/freecodecamp.org/get-started-with-quarkus-and-jpastreamer-2/testing.md",
  "logo": "https://cdn.freecodecamp.org/universal/favicons/favicon.ico",
  "background": "rgba(10,10,35,0.2)"
}
```

```component VPCard
{
  "title": "5. Others",
  "desc": "(5/5) Get started with Quarkus and JPAStreamer",
  "link": "/explore/articles/freecodecamp.org/get-started-with-quarkus-and-jpastreamer-2/others.md",
  "logo": "https://cdn.freecodecamp.org/universal/favicons/favicon.ico",
  "background": "rgba(10,10,35,0.2)"
}
```

---

## References

- [Quarkus project configurator](https://code.quarkus.io)
- [JPAStreamer](https://jpastreamer.org) 
- [<FontIcon icon="iconfont icon-github"/>`speedment/freeCodeCamp-tutorial`](speedment/freeCodeCamp-tutorial)
- [Kotlin Spring. Abstract Class의 Entity 시 getter final 이슈](https://v3.leedo.me/devs/81)
- [Error: Getters of lazy classes cannot be final Kotlin Spring Boot](https://stackoverflow.com/questions/59704375/error-getters-of-lazy-classes-cannot-be-final-kotlin-spring-boot)
- [Live reload doesn't work for kotlin, gradle kotlin dsl project #37109](https://github.com/quarkusio/quarkus/issues/37109)
- [스포카에서 Kotlin으로 JPA Entity를 정의하는 방법](https://spoqa.github.io/2022/08/16/kotlin-jpa-entity.html)
- [<FontIcon icon="iconfont icon-github"/>`speedment/jpa-streamer`: ](https://github.com/speedment/jpa-streamer/blob/master/docs/modules/fetching-data/pages/stream-examples.adoc)

---

<TagLinks />