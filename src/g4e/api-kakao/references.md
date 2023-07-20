---
lang: ko-KR
title: 📚References
description: 🌱API - Kakao > 📚References
tags: ["kakao", "api", "references", "developer"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: kakao developers - 유용한 참고정보
desc: 이 문서는 REST API 요청 시 필요한 URL 정보와 REST API 요청 및 응답 규격 정보와 API 목록을 제공합니다.
link: https://developers.kakao.com/docs/latest/ko/reference/rest-api-reference
logo: https://developers.kakao.com/docs/static/image/ko/pc/reference.png
color: rgba(3, 22, 108, 0.2)
```

---

## 요구 사양

카카오 플랫폼이 제공하는 REST API는 SSL(Secure Sockets Layer)이 적용된 HTTPS 프로토콜로만 호출 가능합니다. 이 외 개발 환경 요구 사양은 아래의 지원 버전 정보를 참고합니다.

| 이름 | 버전 |
| :--- | :--- |
| OS X | Mavericks 이상 |
| Windows | Windows XP SP3 이상 |
| Java | JRE 1.8.0_101 이상 |
| 브라우저 | <ul><li>Chrome 49 이상</li><li>Firefox 50 이상</li><li>Safari 10 이상</li><li>IE(Internet Explorer) 9 이상</li><li>Edge 14 이상</li></ul> | 
| CentOS/RHEL | ca-certificates-2015.2.4-65.0.1.el6_6.noarch 등 |

::: note 참고

카카오 Open API 플랫폼 SSL 인증서 변경

\* IE를 제외한 다른 브라우저의 최신 버전 사용 권장

:::
### 방화벽 및 ACL 설정

방화벽 및 ACL(Access Control List)로 서비스 서버 접근을 제한하는 경우, 카카오 API를 사용하려면 방화벽 룰(Rule)과 ACL을 설정해야 합니다. 설정해야 할 카카오 IP 정보를 확인하려면 [카카오 IP 목록 가져오기](https://developers.kakao.com/docs/latest/ko/reference/utility#get-ip)를 호출합니다.

---

## 요청

카카오 플랫폼의 API 요청 규격을 구성하는 요소는 다음과 같습니다.

| 구성 요소 | 설명 |
| :--- | :--- |
| 메서드(Method) | 카카오 API 호출 시 사용해야 할 [HTTP 요청 메서드](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods)입니다.<br/>(예: GET, POST, PUT, DELETE) |
| 호스트(Host) | 요청을 받는 카카오 API 서버의 도메인입니다.<br/>(예: kapi.kakao.com) |
| URL | API를 통해 제공되는 리소스마다 지정된 요청 경로입니다.<br/>호스트와 함께 각 API의 엔드포인트(Endpoint)를 구성합니다.<br/>(예: /v2/user/me) |
| 헤더(Header) | 카카오 API 호출 시 필요한 인증 정보(Authorization)나 기타 추가 정보를 전달하는 데 사용합니다.<br/>인증 정보는 액세스 토큰 또는 앱 키를 사용합니다.<br/>일부 카카오모먼트 API는 인증 정보와 함께 광고계정 ID를 헤더에 포함하여 호출해야 합니다.<br/>(예: Authorization: Bearer `${ACCESS_TOKEN}`) |
| 경로 변수(Path variable) | 카카오 API 호출 시, 사용자가 전달한 값을 포함해 URL을 구성할 때 사용합니다.<br/>카카오모먼트 등 일부 카카오 API는 URL에 경로 변수를 포함합니다.<br/>(예: /openapi/v4/campaigns/${id}) | 
| 파라미터(Parameter) | 요청 처리에 필요한 데이터를 전달하는 데 사용합니다.<br/>파라미터는 키와 값의 쌍으로 구성되며, 쿼리 스트링(Query string) 또는 본문을 통해 전달합니다.<br/>각 파라미터는 자료형(Data type)과 필수 전달 여부가 지정돼 있습니다. |


<TagLinks/>
