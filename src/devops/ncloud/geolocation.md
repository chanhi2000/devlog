---
lang: ko-KR
title: GeoLocation
description: NCloud > GeoLocation
icon: fas fa-map-location-dot
category:
  - API
  - NCloud
  - GeoLocation
tag: 
  - api
  - ncloud
  - geolocation
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "geoLocation",
  "desc": "이 문서는 로컬(Local) API 구현 방법을 소개합니다.",
  "link": "https://api.ncloud-docs.com/docs/ai-application-service-geolocation-geolocation",
  "logo": "https://cdn.document360.io/6998976f-9d95-4df8-b847-d375892b92c2/Images/Documentation/ncp-apidocs-logo-ko-v2.svg?sv=2019-07-07&sig=%2BBwzSOKM3ncVlbtsmgsw34maSoGIcbZywuZAkWLgoAw%3D&spr=https%2Chttp&st=2023-07-25T01%3A42%3A59Z&se=2023-07-25T01%3A52%3A59Z&srt=o&ss=b&sp=r",
  "background": "rgba(2, 219, 106, 0.2)"
}
```

---

## 개요

GeoLocation은 사용자 IP 기반 위치 정보를 제공하는 국내 유일의 서비스입니다. 이 서비스를 이용하여 사용자의 위치 및 지역 기반 콘텐츠 개인화, 광고 타겟팅, 트래픽 분석, DRM 관리, 어뷰징/ Fraud 탐지 등을 할 수 있습니다. GeoLocation은 네이버 클라우드 플랫폼에서 제공하는 API 서비스로, 고객 서버에서 질의한 IP 주소에 대하여 지역 정보 DB(GeoLocation DB)를 검색하여 해당 지역의 정보를 고객 서버로 전달합니다. 이때 제공되는 정보에는 국가, 시/군/구, 동, 인근 지역의 좌표, 통신사 정보 등입니다. IP 주소별 위치 정보는 매일 수시로 갱신되며 항상 최신 정보를 반영할 수 있도록 유지되고 있습니다. 네이버 클라우드 플랫폼 API는 RESTful 형태로 제공되며 HTTP GET 메서드 호출을 통해서 이루어집니다.

::: info 공통 설정

| 메서드 | URL | 인증 방식 |
| :--- | :--- | :--- |
| `GET` | https://geolocation.apigw.ntruss.com/geolocation/v2 | Sub Account Access Key / API Gateway Signature |

### 요청헤더

| 헤더명 | 설명 |
| :---: | :--- | 
| `x-ncp-apigw-timestamp` | 1970년 1월 1일 00:00:00 협정 세계시(UTC)부터의 경과 시간을 __밀리초(Millisecond)__ 로 나타내며 __API Gateway 서버와 시간 차가 5분 이상__ 나는 경우 __유효하지 않은 요청으로 간주__ <br/> `x-ncp-apigw-timestamp:{Timestamp}` |
| `x-ncp-iam-access-key` | 네이버 클라우드 플랫폼 포털에서 발급받은 Access Key ID 값<br/>`x-ncp-iam-access-key:${Sub Account Access Key}` |
| `x-ncp-apigw-signature-v2` | Access Key ID 값과 Secret Key로 암호화한 서명<br/>`x-ncp-apigw-signature-v2:${API Gateway Signature}` |

:::

---

## `geolocation/v2/geoLocation` 

> 

::: info 기본정보

| 메서드 | URL | 인증 방식 |
| :--- | :--- | :--- |
| `GET` | https://geolocation.apigw.ntruss.com/geolocation/v2/geoLocation | Sub Account Access Key / API Gateway Signature |

:::

### 요청

::: tabs 

@tab:active curl

```sh
curl -v -X GET "https://geolocation.apigw.ntruss.com/geolocation/v2/geoLocation" \
  -H "x-ncp-apigw-timestamp: ${Timestamp}" \
  -H "x-ncp-iam-access-key: ${Sub Account Access Key}" \
  -H "x-ncp-apigw-signature-v2: ${API Gateway Signature}" \
  

```

:::

### 응답

::: tabs 

@tab:active curl

:::

---



