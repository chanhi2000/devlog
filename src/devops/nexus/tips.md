---
lang: ko-KR
title: Tips
description: Nexus Repository > Tips
icon: fas fa-lightbulb
category:
  - Nexus Repository
  - Tips
tag: 
  - nexus
  - sonatype-nexus
  - "docker"
  - "http"
  - "maven"
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## Artifacts

### <FontIcon icon="fas fa-download"/>Download

From Maven Central

::: tabs

@tab:active <FontIcon icon="iconfont icon-shell"/>shell

```sh
curl -H "Accept: application/zip" \
    "https://repo1.maven.org/maven2/org/jetbrains/kotlin/kotlin-test/1.2.0/kotlin-test-1.2.0.jar" \
    -o kotlin-test-1.2.0.jar
```

@tab <FontIcon icon="fas fa-gears"/>cmd

```batch
curl -H "Accept: application/zip" ^
    "https://repo1.maven.org/maven2/org/jetbrains/kotlin/kotlin-test/1.2.0/kotlin-test-1.2.0.jar" ^
    -o kotlin-test-1.2.0.jar
```

:::

### <FontIcon icon="fas fa-upload"/>Upload

to Local Nexus Repository

::: tabs

@tab:active <FontIcon icon="iconfont icon-shell"/>shell

```sh
curl -v -u admin:admin123 --upload-file "http://10.60.175.90:9880/nexus/service/local/artifact/maven/content" \
    -F r=thirdparty -F hasPom=false -F e=jar -F p=jar \
    -F g=org.jetbrains.kotlin -F a=kotlin-util-klib-metadata -F v=1.7.20 \
    -F file=@kotlin-util-klib-metadata-1.7.20.jar
```

@tab <FontIcon icon="fas fa-gears"/>cmd

```batch
curl -v -u admin:admin123 --upload-file "http://10.60.175.90:9880/nexus/service/local/artifact/maven/content" ^
    -F r=thirdparty -F hasPom=false -F e=jar -F p=jar ^
    -F g=org.jetbrains.kotlin -F a=kotlin-util-klib-metadata -F v=1.7.20 ^
    -F file=@kotlin-util-klib-metadata-1.7.20.jar
```

:::

---

## Update `*.pom`

in Local Nexus Repository

::: tabs

@tab:active <FontIcon icon="iconfont icon-shell"/>Shell

```sh
# Delete all pom related files
curl -v -u admin:admin123 \
    --request DELETE --silent \
    "http://10.60.175.90:9880/nexus/content/repositories/thirdparty/org/jetbrains/kotlin/kotlin-stdlib/1.3.11/kotlin-stdlib-1.3.11.pom"
curl -v -u admin:admin123 \
    --request DELETE --silent \
    "http://10.60.175.90:9880/nexus/content/repositories/thirdparty/org/jetbrains/kotlin/kotlin-stdlib/1.3.11/kotlin-stdlib-1.3.11.pom.md5"
curl -v -u admin:admin123 \
    --request DELETE --silent \
    "http://10.60.175.90:9880/nexus/content/repositories/thirdparty/org/jetbrains/kotlin/kotlin-stdlib/1.3.11/kotlin-stdlib-1.3.11.pom.sha1"
# Upload All    
curl -v -u admin:admin123 \
    --upload-file kotlin-stdlib-1.3.11.pom \
    "http://10.60.175.90:9880/nexus/content/repositories/thirdparty/org/jetbrains/kotlin/kotlin-stdlib/1.3.11/kotlin-stdlib-1.3.11.pom"
```

@tab <FontIcon icon="fas fa-gears"/>cmd

```batch
REM Delete all pom related files
curl -v -u admin:admin123 ^
    --request DELETE --silent ^
    "http://10.60.175.90:9880/nexus/content/repositories/thirdparty/org/jetbrains/kotlin/kotlin-stdlib/1.3.11/kotlin-stdlib-1.3.11.pom"
curl -v -u admin:admin123 ^
    --request DELETE --silent ^
    "http://10.60.175.90:9880/nexus/content/repositories/thirdparty/org/jetbrains/kotlin/kotlin-stdlib/1.3.11/kotlin-stdlib-1.3.11.pom.md5"
curl -v -u admin:admin123 ^
    --request DELETE --silent ^
    "http://10.60.175.90:9880/nexus/content/repositories/thirdparty/org/jetbrains/kotlin/kotlin-stdlib/1.3.11/kotlin-stdlib-1.3.11.pom.sha1"
REM Upload All    
curl -v -u admin:admin123 ^
    --upload-file kotlin-stdlib-1.3.11.pom ^
    "http://10.60.175.90:9880/nexus/content/repositories/thirdparty/org/jetbrains/kotlin/kotlin-stdlib/1.3.11/kotlin-stdlib-1.3.11.pom"
```

:::

<TagLinks />