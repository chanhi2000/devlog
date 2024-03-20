---
lang: ko-KR
title: References
description: API - Kakao > References
icon: iconfont icon-share
category:
  - API 
  - Kakao
  - References
tag: 
  - kakao
  - api
  - references
  - developer
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```component VPCard
{
  "title": "kakao developers - 유용한 참고정보",
  "desc": "이 문서는 REST API 요청 시 필요한 URL 정보와 REST API 요청 및 응답 규격 정보와 API 목록을 제공합니다.",
  "link": "https://developers.kakao.com/docs/latest/ko/reference/rest-api-reference",
  "logo": "https://developers.kakao.com/docs/static/image/ko/pc/reference.png",
  "background": "rgba(3,22,108,0.2)"
}
```

---

## 요구 사양

카카오 플랫폼이 제공하는 REST API는 SSL(Secure Sockets Layer)이 적용된 HTTPS 프로토콜로만 호출 가능합니다. 이 외 개발 환경 요구 사양은 아래의 지원 버전 정보를 참고합니다.

| 이름 | 버전 |
| :--- | :--- |
| OS ❌ | Mavericks 이상 |
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

각 API의 요청 규격이 다르므로, API별 개발 가이드에서 상세 정보를 확인하고 호출해야 합니다. [요구 사양](https://developers.kakao.com/docs/latest/ko/reference/rest-api-reference#requirement)을 함께 참고합니다.

::: note 보안설정

서비스의 필요에 따라 보안 강화 요소로 [허용 IP 주소](https://developers.kakao.com/docs/latest/ko/getting-started/rest-api#allowed-ip-registration)나 [클라이언트 시크릿 코드](https://developers.kakao.com/docs/latest/ko/kakaologin/prerequisite#security)(Client secret code) 설정을 사용할 수 있습니다.

:::

---

## 응답

### 응답 형식

카카오 플랫폼은 API 요청에 대해 응답 코드와 응답 필드로 구성된 응답을 제공합니다. 응답 필드는 각 API의 호스트 및 요청 성공 여부에 따라 구성이 다릅니다.

- 요청 성공 시: HTTP 상태 코드 및 API별 성공 응답 필드 반환
- 요청 실패 시: HTTP 상태 코드 및 `JSON` 형식의 에러 응답 필드 반환, 에러 응답 필드에 에러 코드 및 메시지 포함

아래는 주요 호스트의 에러 응답 필드 구성 및 예시입니다.

#### kauth.kakao.com

| 이름 | 타입 | 설명 | 필수 |
| :--- | :--- | :--- | :---: |
| `error` | String | 에러 코드<br/>[문제 해결](https://developers.kakao.com/docs/latest/ko/kakaologin/trouble-shooting)에서 상세 정보 확인 가능 | ❌ |
| `error_description` | String | 실패 원인을 나타내는 에러 메시지<br/>에러 원인에 대한 참고 정보로써 변경될 수 있으므로, 예외 처리 시에는 에러 코드를 사용해야 함 | ❌ |

#### kapi.kakao.com

| 이름 | 타입 | 설명 | 필수 |
| :--- | :--- | :--- | :---: |
| `code` | Int | 에러 코드 | ❌ |
| `msg` | String | 에러 메시지<br/>에러 원인에 대한 참고 정보로써 변경될 수 있으므로, 예외 처리 시에는 에러 코드를 사용해야 함 | ❌ |

##### 예제

::: tabs 

@tab:active 토큰이 잘못되었을 경우

```json
HTTP/1.1 401 Unauthorized  
WWW-Authenticate: Bearer error=invalid_token
{
  "code":-401,
  "msg":"InvalidTokenException"
}
```

@tab API의 허용된 요청 회수 초과

```json
HTTP/1.1 400 Bad Request  
{
  "code":-10,
  "msg":"API limit has been exceeded."
}
```

@tab 카카오톡 메시지 보내기 기능 접근 권한이 없어 전송 실패

```json
HTTP/1.1 403 Forbidden
{
  "msg": "insufficient scopes.",
  "code": -402,
  "api_type": "TALK_MEMO_DEFAULT_SEND",
  "required_scopes": [
    "talk_message"
  ],
  "allowed_scopes": [
    "profile",
    "account_email"
  ]
}
```

:::

::: note 에러 코드와 에러 메시지

`code`는 특별한 규칙을 가지고 있지 않은 음수의 숫자이고, 실패 원인을 나타내는 `msg`는 요청에 따라 의미가 바뀌지 않는 범위에서 내용이 바뀔 수 있습니다. 예를 들어, `code`가 -401일 경우 전달되는 `msg`의 내용은 아래와 같이 다양하게 전달됩니다.

:::

##### 예

::: tabs

@tab:active 유효하지 않은 앱키나 액세스 토큰으로 요청한 경우

```
"this access token does not exist", "this access token is already expired", "appKey(xxxxxxxx) is already deactivated"
```

@tab [내 애플리케이션] > [플랫폼]에 등록된 도메인이 아닌 도메인에서 API를 호출한 경우

```
"domain mismatched! caller=xxxxxxxx. check out registered web domains."
```

@tab [내 애플리케이션] > [플랫폼]에 등록된 정보와 클라이언트의 정보가 맞지 않을 경우

```
"android keyhash mismatched! caller=xxxxxxxx. check out registered keyhash."
"ios bundle id mismatched! caller=xxxxxxxx. check out registered bundle id."
```

@tab [내 애플리케이션] > [고급설정] > [허용 IP 주소] 설정에 해당하는 IP에서 요청하지 않았을 경우

```
"ip mismatched! callerIp=xxxxxxxx. check out registered ips."
```

:::

### 응답 코드

응답 코드는 요청에 대한 상태를 나타내는 [HTTP 상태 코드](https://developers.kakao.com/docs/latest/ko/reference/rest-api-reference#status-code)(Status code), 에러에 대한 정보를 담은 [에러 코드](https://developers.kakao.com/docs/latest/ko/reference/rest-api-reference#error-code)(Error code)로 나뉩니다. 요청 성공 시 HTTP 상태 코드 200과 함께 요청에 대한 응답 본문(response body)이 반환되고, 요청이 실패한 경우 code와 msg로 이루어진 에러 코드를 반환합니다.

### HTTP 상태 코드

HTTP 상태 코드(HTTP Status code)란 응답 메시지의 첫 번째 줄에 나타나는 세 자리 숫자의 코드로 요청에 대한 상태 정보(성공 또는 실패)를 나타냅니다. 상태 코드는 크게 5가지로 분류되며, 상태 코드의 첫 번째 숫자로 응답의 종류를 파악할 수 있습니다. 자세한 정보는 [RFC 2616](https://tools.ietf.org/html/rfc2616#section-6)을 참고합니다.

아래는 카카오 플랫폼이 API 요청에 대해 응답하는 상태 코드의 종류와 의미입니다.

| 상태 코드 | 상태 | 설명 |
| 200<br/>OK | 성공 | 서버가 클라이언트의 요청을 성공적으로 수행<br/>응답 본문의 경우 각 API별로 응답 본문의 형식이 다를 수 있으므로, 자세한 내용은 각 API별 상세 설명을 참고합니다. |
| 400<br/>Bad Request | 실패 | 일반적인 오류<br/>주로 API에 필요한 필수 파라미터와 관련하여 서버가 클라이언트 오류를 감지해 요청을 처리하지 못한 상태입니다. |
| 401<br/>Unauthorized | 실패 | 인증 오류(주로 토큰 관련)<br/>해당 리소스에 유효한 인증 자격 증명이 없어 요청에 실패한 상태입니다.<br/>응답은 [OAuth 2.0 RFC6750](https://www.rfc-editor.org/rfc/rfc6750.txt) 표준 규격에 따라 헤더에 오류 정보를 포함합니다.<br/>토큰 사용 시: `WWW-Authenticate: Bearer error=invalid_token`<br/>서비스 앱 어드민 키 사용 시: `WWW-Authenticate: KakaoAK error=invalid_token`<br/>상세 오류 정보는 응답 본문에서 확인할 수 있습니다. |
| 403<br/>Forbidden | 실패 | 권한 오류<br/>서버에 요청이 전달되었지만, 권한 때문에 거절된 상태입니다. |
| 429<br/>Too Many Request | 실패 | 쿼터 초과(Daum 검색, 로컬, 모먼트, 키워드광고 API에만 해당)<br/>정해진 사용량이나 초당 요청 한도를 초과한 경우 |
| 500<br/>Internal Server Error | 실패 | 시스템 오류<br/>서버 에러를 총칭하는 에러 코드로, 요청을 처리하는 과정에서 서버가 예상하지 못한 상황에 놓인 상태입니다. |
| 502<br/>Bad Gateway	| 실패 | 시스템 오류<br/>서로 다른 프로토콜을 연결해주는 게이트웨이가 잘못된 프로토콜을 연결하거나 연결된 프로토콜에 문제가 있어 통신이 제대로 되지 않은 상태입니다. |
| 503<br/>Service Unavailable	| 실패 | 서비스 점검중<br/>서버가 요청을 처리할 준비가 되지 않은 상태입니다. |

---

## 에러 코드

아래는 카카오 API 제품별로 발생할 수 있는 에러 코드 정보입니다. 에러 발생 시 `code` 중 해당하는 항목을 찾아 원인을 파악합니다.

### 공통

| 코드 | 설명 | HTTP 상태 코드 |
| -1 | 서버 내부에서 처리 중에 에러가 발생한 경우<br/>__해결 방법__: 재시도	| 400 |
| -2 | 필수 인자가 포함되지 않은 경우나 호출 인자값의 데이타 타입이 적절하지 않거나 허용된 범위를 벗어난 경우<br/>__해결 방법__: 요청 파라미터 확인	| 400 | 
| -3 | 해당 API를 사용하기 위해 필요한 기능(간편가입, 동의항목, 서비스 설정 등)이 활성화 되지 않은 경우<br/>__해결 방법__: [내 애플리케이션]에서 필요한 기능을 선택한 후, [활성화 설정]에서 ON으로 설정한 후 재호출 | 403 |
| -4 | 계정이 제재된 경우나 해당 계정에 제재된 행동을 하는 경우 | 403 |
| -5 | 해당 API에 대한 요청 권한이 없는 경우<br/>__해결 방법__: 해당 API의 이해하기 문서를 참고하여 검수 진행, 권한 획득 후 재호출 | 403 |
| -7 | 서비스 점검 또는 내부 문제가 있는 경우<br/>__해결 방법__: 해당 서비스 공지사항 확인 | 400 |
| -8 | 올바르지 않은 헤더로 요청한 경우<br/>__해결 방법__: 요청 헤더 확인 | 400 |
| -9 | 서비스가 종료된 API를 호출한 경우<br/>__해결 방법__: 공지 메일이나 데브톡 공지확인	| 400 |
| -10 | 허용된 요청 회수를 초과한 경우<br/>__해결 방법__: 쿼터 확인 후 쿼터 범위 내로 호출 조정, 필요시 데브톡으로 제휴 문의 | 400 |
| -401 | 유효하지 않은 앱키나 액세스 토큰으로 요청한 경우, 등록된 앱 정보와 호출된 앱 정보가 불일치 하는 경우
해결 방법: 앱키 확인 또는 토큰 갱신, 개발자 사이트에 등록된 앱 정보 확인	401
-501	카카오톡 미가입 또는 유예 사용자가 카카오톡 또는 톡캘린더 API를 호출한 경우	400
-602	이미지 업로드 시 최대 용량을 초과한 경우	400
-603	카카오 플랫폼 내부에서 요청 처리 중 타임아웃이 발생한 경우	400
-606	업로드할 수 있는 최대 이미지 개수를 초과한 경우	400
-903	등록되지 않은 개발자의 앱키나 등록되지 않은 개발자의 앱키로 구성된 액세스 토큰으로 요청한 경우	400
-911	지원하지 않는 포맷의 이미지를 업로드 하는 경우	400
-9798	서비스 점검중	503
<TagLinks/>
