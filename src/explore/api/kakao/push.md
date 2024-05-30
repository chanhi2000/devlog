---
lang: ko-KR
title: 푸시알람
description: Kakao > 푸시알람
icon: fas fa-bell
category:
  - API 
  - Kakao
  - 푸시알람
tag: 
  - kakao
  - api
  - references
  - developer
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "kakao developers - 로컬", 
  "desc": "이 문서는 로컬(Local) API 구현 방법을 소개합니다.", 
  "link": "https://developers.kakao.com/docs/latest/ko/push/rest-api", 
  "logo": "https://developers.kakao.com/docs/static/image/ko/pc/local.png", 
  "background": "rgba(3, 22, 108, 0.2)"
}
```

---

::: warning 주의: 푸시 알림 보내기

푸시 토큰 등록, 보기, 삭제는 Android와 iOS SDK도 지원하지만, 푸시 알림을 보내는 기능은 REST API로만 지원합니다. 또한 Apple Push Notification service(APNs), Firebase Cloud Messaging(FCM) 인증 정보를 내 애플리케이션(이하 앱) 정보에 미리 등록해두어야 합니다. 인증 정보 발급 및 등록 방법은 [설정하기](https://developers.kakao.com/docs/latest/ko/push/prerequisite#authentication)를 참고합니다.

:::

::: warning 주의: API 버전 변경

푸시 알림 API의 버전이 v1에서 v2로 업그레이드됩니다.

- 적용 일자: 2020년 12월 2일
- 변경 사항: [Google Cloud Messaging(GCM)](https://developers.google.com/cloud-messaging)가 Firebase Cloud Messaging(FCM)으로 대체됨에 따라 push_type 값 변경

:::

---

## `/v2/push/register`

> 푸시 토큰 등록하기

::: info 기본정보

| 메서드 | URL | 인증 방식 |
| :--- | :--- | :--- |
| `POST` | https://kapi.kakao.com/v2/push/register | 서비스 앱 어드민 키 | 

푸시 알림을 받을 사용자의 푸시 토큰(디바이스 토큰)을 카카오 푸시 서비스에 등록하는 API입니다.

앱 어드민 키(Admin Key)와 APNs, FCM으로부터 발급 받은 푸시 토큰이 필요합니다. 어드민 키를 사용하는 API이므로 보안 위험을 피하기 위해 반드시 서버에서 호출해야 합니다.

> 허용 IP 주소 설정
> 
> 푸시 알림 발송에 보다 안전을 기하려면 카카오 API를 호출하는 IP를 제한할 수 있습니다. [내 애플리케이션] > [허용 IP 주소]에서 사용할 IP를 등록합니다. 자세한 정보는 [보안: 허용 IP 주소](https://developers.kakao.com/docs/latest/ko/getting-started/rest-api#allowed-ip-registration)를 참고합니다.

`uuid`는 서비스에서 각 사용자에게 발급한 고유 숫자 값을 사용합니다. `device_id`는 푸시 알림을 받을 각 기기를 등록하기 위한 값입니다. 같은 사용자가 여러 대의 기기를 사용하는 경우, 푸시 토큰을 기기별로 등록해 푸시 알림을 보낼 수 있도록 하는 용도입니다.

푸시 토큰 등록 성공시, HTTP 상태 코드 200 응답과 함께 푸시 토큰이 며칠 뒤 만료되는지를 나타내는 숫자 값을 받습니다. 이 기간은 자동으로 갱신되지 않으므로, 기간 이내에 해당 사용자 및 기기에 대한 푸시 토큰을 재등록해야 합니다

:::

### 요청

::: tabs

@tab:active curl

```sh
curl -v -X POST "https://kapi.kakao.com/v2/push/register" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Authorization: KakaoAK ${SERVICE_APP_ADMIN_KEY}" \
  -d "uuid=1234" \
  -d "device_id=0f365b39-c33d-39be-bdfc-74aaf5534470" \
  -d "push_type=fcm" \
  --data-urlencode "push_token=APA91bEZ3fjwrKV2mxAFvZMC960zKBWBVffLErwZgFzsFnzzsxgi5lSQlq3zvzObZBe4OnbwkTZfMqV7_a6fF0AJNgUjt5Scpo2BTaHyLVlK54QmwIQBahUwJprKjj0YvF_rh8l7CTvl6TRxqlqO_NIwaoAcI0MssA"
```

@tab 설명

### 헤더

| 이름 | 설명 | 필수 |
| :--- | :--- | :---: |
| Authorization | `Authorization: KakaoAK ${SERVICE_APP_ADMIN_KEY}`<br/>인증 방식, 서비스 앱 어드민 키로 인증 요청 | ✅ |


### 본문

| 이름 | 타입 | 설명 | 필수 |
| :--- | :--- | :--- | :---: |
| `uuid` | String | 사용자 고유 ID, 1~((2^63)-1) 범위의 정수만 사용 가능 | ✅ |
| `device_id` | String | 동일 사용자의 기기(Device)를 구분하는 ID<br/>`uuid` 내에서 유일한 값이어야 함<br/>APNs의 경우, 기기마다 푸시 토큰이 다르기 때문에 APNs로부터 받은 토큰을 그대로 사용해도 무방<br/>FCM은 기기 고유 ID를 생성하는 알고리즘 필요 | ✅ |
| `push_type` | String | 푸시 서버 타입, apns 혹은 fcm | ✅ |
| `push_token` | String | APNs(64자), FCM으로부터 발급받은 푸시 토큰 | ✅ |

:::


### 응답

::: tabs

@tab:active json

```json
HTTP/1.1 200 OK
Content-Length: 2
Content-type: application/json;charset=UTF-8

-1
```

@tab 설명

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| NONE | Integer | 푸시 토큰 만료 예정 기간, `-1`인 경우 무제한 |

:::

---

## `/v2/push/tokens`

> 푸시 토큰 보기

| 메서드 | URL | 인증 방식 |
| :--- | :--- | :--- |
| `GET/POST` | https://kapi.kakao.com/v2/push/tokens | 서비스 앱 어드민 키 | 

카카오 푸시 서비스에 등록된 사용자의 푸시 토큰 정보를 조회하는 API입니다.

푸시 토큰 보기 요청 시, `uuid` 또는 `uuids` 중 하나는 반드시 포함해야 합니다. `uuid`는 특정 사용자 한 명의 푸시 토큰을, `uuids`는 최대 100명의 사용자 푸시 토큰을 조회할 때 각각 사용합니다. 메소드는 `GET` 또는 `POST`를 사용하며, 앱 어드민 키를 사용해 서버에서 요청해야 합니다.

요청 성공 시 응답은 `JSON Array`로 푸시 토큰 정보를 받습니다. 카카오 푸시 알림 기능은 멀티 디바이스를 지원하므로, 각 사용자 앞으로 여러 개의 푸시 토큰이 등록돼 있을 수 있습니다. 각 푸시 토큰 정보는 `uuid`, `device_id`, 푸시 토큰 종류와 값, 생성 및 업데이트 일시를 포함합니다.

### 요청

::: tabs

@tab:active uuid로 요청

```sh
curl -v -X GET "https://kapi.kakao.com/v2/push/tokens" \
  -H "Authorization: KakaoAK ${SERVICE_APP_ADMIN_KEY}" \
  -d "uuid=1234"
```

@tab curl uuids로 요청

```sh
curl -v -X POST "https://kapi.kakao.com/v2/push/tokens" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Authorization: KakaoAK ${SERVICE_APP_ADMIN_KEY}" \
  --data-urlencode 'uuids=["1234", "5678"]'
```

@tab 설명

### 헤더

| 이름 | 설명 | 필수 |
| :--- | :--- | :---: |
| Authorization | `Authorization: KakaoAK ${SERVICE_APP_ADMIN_KEY}`<br/>인증 방식, 서비스 앱 어드민 키로 인증 요청 | ✅ |


### 쿼리 파라미터

| 이름 | 타입 | 설명 | 필수 |
| :--- | :--- | :--- | :---: |
| `uuid` | String | 사용자 고유 ID, 1~((2^63)-1) 범위의 정수만 사용 가능 | ✅ |
| `uuids` | String[] | 사용자 고유 ID 목록, ID 100개 이하 | ✅ |

> 한 사용자의 푸시 토큰 정보를 요청하려면 `uuid`를 필수 파라미터로 전달, 여러 사용자의 푸시 토큰 정보를 요청하려면 `uuids`를 필수 파라미터로 전달

:::

### 응답

::: tabs

@tab:active json

```json
HTTP/1.1 200 OK
Content-type: application/json;charset=UTF-8
[
    {
    "uuid":"9876543211234",
    "device_id":"0f365b39-c33d-39be-bdfc-74aaf5534470",
    "push_type":"fcm",
    "push_token":"APA91bEZ3fjwrKV2mxAFvZMC960zKBWBVffLErwZgFzsFnzzsxgi5lSQlq3zvzObZBe4OnbwkTZfMqV7_a6fF0AJNgUjt5Scpo2BTaHyLVlK54QmwIQBahUwJprKjj0YvF_rh8l7CTvl6TRxqlqO_NIwaoAcI0MssA",
    "created_at":"2014-07-29T06:24:12Z",
    "updated_at":"2014-07-29T06:24:12Z"
    }
]
```

@tab 설명

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `uuid` | String | 사용자 고유 ID, 1~((2^63)-1) 범위의 정수만 사용 가능 |
| `device_id` | String | 동일 사용자의 기기(Device)를 구분하는 ID |
| `push_type` | String | 푸시 서버 타입, apns 혹은 fcm |
| `push_token` | String | APNs(64자), FCM으로부터 발급 받은 푸시 토큰 |
| `created_at` | Datetime | 푸시 토큰을 처음 등록한 시각 |
| `updated_at` | Datetime | 푸시 토큰을 업데이트한 시각 |

> * user_id: Deprecated, 사용자 고유 ID(String), `uuid`를 사용하도록 변경

:::

---

## `/v2/push/deregister`

> 푸시 토큰 삭제하기

::: info 기본정보

:::

### 요청

::: tabs

@tab:active curl

@tab 설명

:::

### 응답

::: tabs

@tab:active json

@tab 설명

:::

---

## `/v2/push/send`

> 푸시 알림 보내기

::: info 기본정보

:::

### APNs 전송 가능 용량

APNs는 푸시 알림 한 건당 4KB 이하, iOS 7 이하인 경우 256bytes 이하여야 전송 가능합니다. 전송 가능 용량 제한은 수신 데이터 기준이며 `topic`, `push_alert`, `return_url`, `push_token`를 제외한 파라미터에 적용됩니다. VoIP(Voice over Internet Protocol) 알림의 경우, 최대 5KB까지 지원합니다. 전송하려는 데이터의 용량이 4KB 이상이고 `message`가 `String` 타입인 경우, `message` 값의 뒷부분을 자르고 ".."를 붙여 전송합니다.

### APNs 앱 번들의 메시지 세트 활용 방법

메시지 경량화 및 사용자 맞춤형 콘텐츠 활용을 위해 특정 푸시 알림 메시지 세트(Set)를 앱 번들(App Bundle)에 저장하고, 푸시 알림 보내기 요청 시 사용할 메시지 세트와 대입할 값을 전달하는 방식도 지원합니다.(참고: [Creating the Remote Notification Payload](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html))

예를 들면 아래와 같은 메시지 세트를 앱 번들에 저장해 사용할 수 있습니다.

```
"COMMENT_ALERT_FORMAT" = "%@님 외 %@명이 댓글을 달았습니다.";
```

해당 메시지 세트를 사용하려면 푸시 알림 보내기 요청 시 다음과 같이 `message` 하위에 메시지 포맷에 정의된 키는 `loc-key`, 대입할 값은 `loc-args`에 각각 전달합니다.

```json
{
  "message":{
    "loc-key" : "COMMENT_ALERT_FORMAT",
    "loc-args" : ["홍길동", "2"]
  }
}
```

실제 푸시 알림은 다음과 같이 전달됩니다.

```
홍길동님 외 2명이 댓글을 달았습니다.
```

### 요청

::: tabs

@tab:active curl

@tab 설명

:::

### 응답

::: tabs

@tab:active json

@tab 설명

:::

<TagLinks/>