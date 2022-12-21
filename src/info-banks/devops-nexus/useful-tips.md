---
lang: ko-KR
title: Useful Tips
description: Useful Tips
tags: ["nexus", "sonatype-nexus", "docker", "http", "maven"]
---

# {{ $frontmatter.description }} 관련

[[toc]]

---
## Artifacts

### ⤵️Download
From Maven Central

```shell
curl -H "Accept: application/zip" \
    "https://repo1.maven.org/maven2/org/jetbrains/kotlin/kotlin-test/1.2.0/kotlin-test-1.2.0.jar" \
    -o kotlin-test-1.2.0.jar
```

```batch
curl -H "Accept: application/zip" ^
    "https://repo1.maven.org/maven2/org/jetbrains/kotlin/kotlin-test/1.2.0/kotlin-test-1.2.0.jar" ^
    -o kotlin-test-1.2.0.jar
```

### ⤴️Upload
to Local Nexus Repository

```shell
curl -v -u admin:admin123 "http://10.60.175.90:9880/nexus/service/local/artifact/maven/content" \
    -F r=thirdparty -F hasPom=false -F e=jar -F p=jar \
    -F g=org.jetbrains.kotlin -F a=kotlin-util-klib-metadata -F v=1.7.20 \
    -F file=@kotlin-util-klib-metadata-1.7.20.jar
```

```batch
curl -v -u admin:admin123 "http://10.60.175.90:9880/nexus/service/local/artifact/maven/content" ^
    -F r=thirdparty -F hasPom=false -F e=jar -F p=jar ^
    -F g=org.jetbrains.kotlin -F a=kotlin-util-klib-metadata -F v=1.7.20 ^
    -F file=@kotlin-util-klib-metadata-1.7.20.jar
```

<TagLinks />