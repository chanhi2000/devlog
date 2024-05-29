---
lang: ko-KR
title: 로컬
description: Kakao > 로컬
icon: fas fa-map-location-dot
category:
  - API 
  - Kakao
  - Geolocation
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
  "link": "https://developers.kakao.com/docs/latest/ko/local/dev-guide",
  "logo": "https://developers.kakao.com/docs/static/image/ko/pc/local.png",
  "background": "rgba(3, 22, 108, 0.2)"
}
```

---

## `/v2/local/search/address`

> 주소 검색하기

::: info 기본정보

| 메서드 | URL | 인증 방식 |
| :--- | :--- | :--- |
| `GET` | https://dapi.kakao.com/v2/local/search/address.`${FORMAT}` | REST API 키 |

주소를 지도 위에 정확하게 표시하기 위해 해당 주소의 좌표 정보를 제공하는 API입니다. 주소에 해당하는 지번 주소, 도로명 주소, 좌표, 우편번호, 빌딩명 등의 다양한 정보를 함께 제공합니다. 이 API는 지번 주소, 도로명 주소 모두 지원합니다.

애플리케이션(이하 앱) REST API 키를 헤더에 담아 `GET`으로 요청합니다. 검색어와 함께 결과 형식 파라미터의 값을 선택적으로 추가할 수 있습니다.

응답은 `JSON`과 `XML` 형식을 지원합니다. 요청 시 URL의 `${FORMAT}` 부분에 원하는 응답 형식을 지정할 수 있습니다. 별도로 포맷을 지정하지 않은 경우 응답은 `JSON` 형식으로 반환됩니다.

:::

### 요청

::: tabs

@tab:active curl

```sh
curl -v -X GET "https://dapi.kakao.com/v2/local/search/address.json" \
  -H "Authorization: KakaoAK ${REST_API_KEY}" \
  --data-urlencode "query=전북 삼성동 100" 
```

@tab 설명

### 헤더 

| 이름 | 설명 | 필수 |
| :--- | :--- | :---: |
| Authorization | `Authorization: KakaoAK ${REST_API_KEY}`<br/>인증 방식, REST API 키로 인증 요청 | ✅ |

### 경로 변수

| 이름 | 타입 | 설명 | 필수 |
| :--- | :--- | :--- | :---: |
| `FORMAT` | String	| 응답 형식(기본값: `JSON`) | ❌ |

### 쿼리 파라미터

| 이름 | 타입 | 설명 | 필수 |
| :--- | :--- | :--- | :---: |
| `query` | String | 검색을 원하는 질의어 | ✅ |
| `analyze_type` | String | 검색 결과 제공 방식 <br/>다음 중 하나:<br/><ul><li>`similar`: 입력한 건물명과 일부만 매칭될 경우에도 확장된 검색 결과 제공, 미지정 시 similar가 적용됨</li><li>`exact`: 주소의 정확한 건물명이 입력된 주소패턴일 경우에 한해, 입력한 건물명과 정확히 일치하는 검색 결과 제공</li></ul><br/>(기본값: `similar`)<br/><br/>__참고__: [품질 향상을 위한 주소 검색 API 업데이트](https://devtalk.kakao.com/t/112161)	| ❌ |
| `page` | Integer | 결과 페이지 번호<br/>(최소: 1, 최대: 45, 기본값: 1) | ❌ |
| `size` | Integer | 한 페이지에 보여질 문서의 개수<br/>(최소: 1, 최대: 30, 기본값: 10) | ❌ |

:::

### 결과

::: tabs

@tab:active json

```json
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
{
  "meta": {
    "total_count": 4,
    "pageable_count": 4,
    "is_end": true
  },
  "documents": [
    {
      "address_name": "전북 익산시 부송동 100",
      "y": "35.97664845766847",
      "x": "126.99597295767953",
      "address_type": "REGION_ADDR",
      "address": {
        "address_name": "전북 익산시 부송동 100",
        "region_1depth_name": "전북",
        "region_2depth_name": "익산시",
        "region_3depth_name": "부송동",
        "region_3depth_h_name": "삼성동",
        "h_code": "4514069000",
        "b_code": "4514013400",
        "mountain_yn": "N",
        "main_address_no": "100",
        "sub_address_no": "",
        "x": "126.99597295767953",
        "y": "35.97664845766847"
      },
      "road_address": {
        "address_name": "전북 익산시 망산길 11-17",
        "region_1depth_name": "전북",
        "region_2depth_name": "익산시",
        "region_3depth_name": "부송동",
        "road_name": "망산길",
        "underground_yn": "N",
        "main_building_no": "11",
        "sub_building_no": "17",
        "building_name": "",
        "zone_no": "54547",
        "y": "35.976749396987046",
        "x": "126.99599512792346"
      }
    },
    ...
  ]
}
```

@tab 설명

### 헤더 

| 이름 | 설명 | 필수 |
| :--- | :--- | :---: |
| Content-type | 응답 데이터 타입<br/><ul><li>content-type: application/json;charset=UTF-8 또는</li><li>content-type: text/xml;charset=UTF-8</li></ul> | ✅ |

### 본문

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `meta`| Meta | 응답 관련 정보 |
| `documents`| Document[] | 응답 결과 |

### Meta

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `total_count` | Integer | 검색어에 검색된 문서 수 |
| `pageable_count` | Integer | `total_count` 중 노출 가능 문서 수<br/>(최대: 45) |
| `is_end` | Boolean | 현재 페이지가 마지막 페이지인지 여부<br/>값이 false면 다음 요청 시 page 값을 증가시켜 다음 페이지 요청 가능 | 

### Document

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `address` | Address | 지번 주소 상세 정보 |
| `road_address` | RoadAddress | 도로명 주소 상세 정보 |

### Address

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `address_name` | String | 전체 지번 주소 |
| `region_1depth_name` | String | 지역 1 Depth, 시도 단위 |
| `region_2depth_name` | String | 지역 2 Depth, 구 단위 |
| `region_3depth_name` | String | 지역 3 Depth, 동 단위 |
| `mountain_yn` | String | 산 여부, `Y` 또는 `N` |
| `main_address_no` | String | 지번 주번지 |
| `sub_address_no` | String | 지번 부번지, 없을 경우 빈 문자열("") 반환 |
| `x`| String | X 좌표값, 경위도인 경우 경도(longitude) | 
| `y`| String | Y 좌표값, 경위도인 경우 위도(latitude) | 

> `zip_code`: Deprecated, 우편번호(String), 6자리, 공지 참고

### RoadAddress

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `address_name`| String | 전체 도로명 주소 | 
| `region_1depth_name`| String | 지역명1 | 
| `region_2depth_name`| String | 지역명2 | 
| `region_3depth_name`| String | 지역명3 | 
| `road_name`| String | 도로명 | 
| `underground_yn`| String | 지하 여부, `Y` 또는 `N` | 
| `main_building_no`| String | 건물 본번 | 
| `sub_building_no`| String | 건물 부번, 없을 경우 빈 문자열("") 반환 | 
| `building_name`| String | 건물 이름 | 
| `zone_no`| String | 우편번호(5자리) | 
| `x`| String | X 좌표값, 경위도인 경우 경도(longitude) | 
| `y`| String | Y 좌표값, 경위도인 경우 위도(latitude) | 

:::

---

## `/v2/local/geo/coord2regioncode`

> 좌표로 행정구역정보 받기

::: info 기본정보

| 메서드 | URL | 인증 방식 |
| :--- | :--- | :--- |
| `GET` | https://dapi.kakao.com/v2/local/geo/coord2regioncode.`${FORMAT}` | REST API 키 | 

다양한 좌표계에 대한 좌표값을 받아 해당 좌표에 부합하는 행정동, 법정동을 얻는 API입니다. 대략적인 지역 정보를 제공하여 해당 위치에 맞는 다른 서비스(맛집, 날씨 등등)를 연계하는데 활용 가능합니다.

앱 REST API 키를 헤더에 담아 `GET`으로 요청합니다. 좌표와 함께 좌표계 등 파라미터를 선택적으로 추가할 수 있습니다.

응답은 `JSON`과 `XML` 형식을 지원합니다. 요청 시 URL의 `${FORMAT}` 부분에 원하는 응답 형식을 지정할 수 있습니다. 별도로 포맷을 지정하지 않은 경우 응답은 `JSON` 형식으로 반환됩니다.

:::

### 요청

::: tabs

@tab:active curl

```sh
curl -v -X GET "https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=127.1086228&y=37.4012191" \
  -H "Authorization: KakaoAK ${REST_API_KEY}"
```

@tab 설명

### 헤더 

| 이름 | 설명 | 필수 |
| :--- | :--- | :---: |
| Authorization | `Authorization: KakaoAK ${REST_API_KEY}`<br/>인증 방식, REST API 키로 인증 요청 | ✅ |


### 경로 변수

| 이름 | 타입 | 설명 | 필수 |
| :--- | :--- | :--- | :---: |
| `FORMAT` | String	| 응답 형식(기본값: `JSON`) | ❌ |


### 쿼리 파라미터 

| 이름 | 타입 | 설명 | 필수 |
| :--- | :--- | :--- | :---: |
| `x` | String | X 좌표값, 경위도인 경우 경도(longitude) | ✅ |
| `y` | String | Y 좌표값, 경위도인 경우 위도(latitude) | ✅ |
| `input_coord` | String | x, y 로 입력되는 값에 대한 좌표계<br/>지원 좌표계: `WGS84`, `WCONGNAMUL`, `CONGNAMUL`, `WTM`, `TM`<br/>(기본값: WGS84) | ❌ |

:::

### 결과

::: tabs 

@tab:active json

```json
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
{
  "meta": {
    "total_count": 2
  },
  "documents": [
    {
      "region_type": "B",
      "address_name": "경기도 성남시 분당구 삼평동",
      "region_1depth_name": "경기도",
      "region_2depth_name": "성남시 분당구",
      "region_3depth_name": "삼평동",
      "region_4depth_name": "",
      "code": "4113510900",
      "x": 127.10459896729914,
      "y": 37.40269721785548
    },
    {
      "region_type": "H",
      "address_name": "경기도 성남시 분당구 삼평동",
      "region_1depth_name": "경기도",
      "region_2depth_name": "성남시 분당구",
      "region_3depth_name": "삼평동",
      "region_4depth_name": "",
      "code": "4113565500",
      "x": 127.1163593869371,
      "y": 37.40612091848614
    }
  ]
}
```

@tab 설명
### 헤더 

| 이름 | 설명 | 필수 |
| :--- | :--- | :---: |
| Content-type | 응답 데이터 타입<br/><ul><li>content-type: application/json;charset=UTF-8 또는</li><li>content-type: text/xml;charset=UTF-8</li></ul> | ✅ |

### 본문

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `meta`| Meta | 응답 관련 정보 |
| `documents`| Document[] | 응답 결과 |

### Meta

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `total_count` | Integer | 검색어에 검색된 문서 수 |
| `pageable_count` | Integer | `total_count` 중 노출 가능 문서 수<br/>(최대: 45) |
| `is_end` | Boolean | 현재 페이지가 마지막 페이지인지 여부<br/>값이 false면 다음 요청 시 page 값을 증가시켜 다음 페이지 요청 가능 | 

### Document

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `address` | Address | 지번 주소 상세 정보 |
| `road_address` | RoadAddress | 도로명 주소 상세 정보 |

### Address

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `address_name` | String | 전체 지번 주소 |
| `region_1depth_name` | String | 지역 1 Depth, 시도 단위 |
| `region_2depth_name` | String | 지역 2 Depth, 구 단위 |
| `region_3depth_name` | String | 지역 3 Depth, 동 단위 |
| `mountain_yn` | String | 산 여부, `Y` 또는 `N` |
| `main_address_no` | String | 지번 주번지 |
| `sub_address_no` | String | 지번 부번지, 없을 경우 빈 문자열("") 반환 |
| `x`| String | X 좌표값, 경위도인 경우 경도(longitude) | 
| `y`| String | Y 좌표값, 경위도인 경우 위도(latitude) | 

> `zip_code`: Deprecated, 우편번호(String), 6자리, 공지 참고

### RoadAddress

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `address_name`| String | 전체 도로명 주소 | 
| `region_1depth_name`| String | 지역명1 | 
| `region_2depth_name`| String | 지역명2 | 
| `region_3depth_name`| String | 지역명3 | 
| `road_name`| String | 도로명 | 
| `underground_yn`| String | 지하 여부, `Y` 또는 `N` | 
| `main_building_no`| String | 건물 본번 | 
| `sub_building_no`| String | 건물 부번, 없을 경우 빈 문자열("") 반환 | 
| `building_name`| String | 건물 이름 | 
| `zone_no`| String | 우편번호(5자리) | 
| `x`| String | X 좌표값, 경위도인 경우 경도(longitude) | 
| `y`| String | Y 좌표값, 경위도인 경우 위도(latitude) | 

:::

---

## `/v2/local/geo/coord2address`

> 좌표로 주소 변환하기

::: info 기본정보

| 메서드 | URL | 인증 방식 |
| :--- | :--- | :--- |
| `GET` | https://dapi.kakao.com/v2/local/geo/coord2address.`${FORMAT}` | REST API 키 | 

좌표 정보의 지번 주소와 도로명 주소 정보를 반환하는 API입니다. 도로명 주소는 좌표에 따라 반환되지 않을 수 있습니다.

앱 REST API 키를 헤더에 담아 `GET`으로 요청합니다. 좌표와 함께 좌표계 파라미터를 추가할 수 있습니다.

응답은 `JSON`과 `XML` 형식을 지원합니다. 요청 시 URL의 `${FORMAT}` 부분에 원하는 응답 형식을 지정할 수 있습니다. 별도로 포맷을 지정하지 않은 경우 응답은 `JSON` 형식으로 반환됩니다.

요청 성공 시 응답은 `documents` 하위에 지번 주소 또는 도로명 주소 상세 정보를 포함합니다.

:::

### 요청 

::: tabs

@tab:active curl

```sh
curl -v -X GET "https://dapi.kakao.com/v2/local/geo/coord2address.json?x=127.423084873712&y=37.0789561558879&input_coord=WGS84" \
  -H "Authorization: KakaoAK ${REST_API_KEY}"
```

@tab 설명

### 헤더 

| 이름 | 설명 | 필수 |
| :--- | :--- | :---: |
| Authorization | `Authorization: KakaoAK ${REST_API_KEY}`<br/>인증 방식, REST API 키로 인증 요청 | ✅ |


### 경로 변수

| 이름 | 타입 | 설명 | 필수 |
| :--- | :--- | :--- | :---: |
| `FORMAT` | String	| 응답 형식(기본값: `JSON`) | ❌ |


### 쿼리 파라미터 

| 이름 | 타입 | 설명 | 필수 |
| :--- | :--- | :--- | :---: |
| `x` | String | X 좌표값, 경위도인 경우 경도(longitude) | ✅ |
| `y` | String | Y 좌표값, 경위도인 경우 위도(latitude) | ✅ |
| `input_coord` | String | x, y 로 입력되는 값에 대한 좌표계<br/>지원 좌표계: `WGS84`, `WCONGNAMUL`, `CONGNAMUL`, `WTM`, `TM`<br/>(기본값: WGS84) | ❌ |

:::

### 응답

::: tabs

@tab:active curl

```json
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
{
  "meta": {
    "total_count": 1
  },
  "documents": [
    {
      "road_address": {
        "address_name": "경기도 안성시 죽산면 죽산초교길 69-4",
        "region_1depth_name": "경기",
        "region_2depth_name": "안성시",
        "region_3depth_name": "죽산면",
        "road_name": "죽산초교길",
        "underground_yn": "N",
        "main_building_no": "69",
        "sub_building_no": "4",
        "building_name": "무지개아파트",
        "zone_no": "17519"
      },
      "address": {
        "address_name": "경기 안성시 죽산면 죽산리 343-1",
        "region_1depth_name": "경기",
        "region_2depth_name": "안성시",
        "region_3depth_name": "죽산면 죽산리",
        "mountain_yn": "N",
        "main_address_no": "343",
        "sub_address_no": "1",
      }
    }
  ]
}
```

@tab 설명

### 헤더 

| 이름 | 설명 | 필수 |
| :--- | :--- | :---: |
| Content-type | 응답 데이터 타입<br/><ul><li>content-type: application/json;charset=UTF-8 또는</li><li>content-type: text/xml;charset=UTF-8</li></ul> | ✅ |

### 본문

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `meta`| Meta | 응답 관련 정보 |
| `documents`| Document[] | 응답 결과 |

### Meta

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `total_count` | Integer | 검색어에 검색된 문서 수 |

### Document

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `address` | Address | 지번 주소 상세 정보 |
| `road_address` | RoadAddress | 도로명 주소 상세 정보 |

### Address

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `address_name` | String | 전체 지번 주소 |
| `region_1depth_name` | String | 지역 1 Depth, 시도 단위 |
| `region_2depth_name` | String | 지역 2 Depth, 구 단위 |
| `region_3depth_name` | String | 지역 3 Depth, 동 단위 |
| `mountain_yn` | String | 산 여부, `Y` 또는 `N` |
| `main_address_no` | String | 지번 주번지 |
| `sub_address_no` | String | 지번 부번지, 없을 경우 빈 문자열("") 반환 |

> `zip_code`: Deprecated, 우편번호(String), 6자리, 공지 참고

### RoadAddress

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `address_name`| String | 전체 도로명 주소 | 
| `region_1depth_name`| String | 지역명1 | 
| `region_2depth_name`| String | 지역명2 | 
| `region_3depth_name`| String | 지역명3 | 
| `road_name`| String | 도로명 | 
| `underground_yn`| String | 지하 여부, `Y` 또는 `N` | 
| `main_building_no`| String | 건물 본번 | 
| `sub_building_no`| String | 건물 부번, 없을 경우 빈 문자열("") 반환 | 
| `building_name`| String | 건물 이름 | 
| `zone_no`| String | 우편번호(5자리) |

:::

---

## `/v2/local/geo/transcoord`

> 좌표계 변환하기

::: info 기본정보

| 메서드 | URL | 인증 방식 |
| :--- | :--- | :--- |
| `GET` | https://dapi.kakao.com/v2/local/geo/transcoord.`${FORMAT}` | REST API 키 | 

x, y 값과 입력 및 출력 좌표계를 지정해 변환된 좌표 값을 구해, 서로 다른 좌표계간 데이터 호환이 가능하도록 합니다.

앱 REST API 키를 헤더에 담아 GET으로 요청합니다. 좌표와 함께 좌표계 파라미터의 값을 선택해 요청합니다.

응답은 JSON과 XML 형식을 지원합니다. 요청 시 URL의 ${FORMAT} 부분에 원하는 응답 형식을 지정할 수 있습니다. 별도로 포맷을 지정하지 않은 경우 응답은 JSON 형식으로 반환됩니다.

:::

### 요청

::: tabs

@tab:active curl

```sh
curl -v -X GET "https://dapi.kakao.com/v2/local/geo/transcoord.json?x=160710.37729270622&y=-4388.879299157299&input_coord=WTM&output_coord=WGS84" \
  -H "Authorization: KakaoAK ${REST_API_KEY}"
```

@tab 설명

### 헤더 

| 이름 | 설명 | 필수 |
| :--- | :--- | :---: |
| Authorization | `Authorization: KakaoAK ${REST_API_KEY}`<br/>인증 방식, REST API 키로 인증 요청 | ✅ |


### 경로 변수

| 이름 | 타입 | 설명 | 필수 |
| :--- | :--- | :--- | :---: |
| `FORMAT` | String	| 응답 형식(기본값: `JSON`) | ❌ |


### 쿼리 파라미터 

| 이름 | 타입 | 설명 | 필수 |
| :--- | :--- | :--- | :---: |
| `x` | String | X 좌표값, 경위도인 경우 경도(longitude) | ✅ |
| `y` | String | Y 좌표값, 경위도인 경우 위도(latitude) | ✅ |
| `input_coord` | String | x, y 로 입력되는 값에 대한 좌표계<br/>지원 좌표계: `WGS84`, `WCONGNAMUL`, `CONGNAMUL`, `WTM`, `TM`<br/>(기본값: `WGS84`) | ❌ |
| `output_coord` | String | 변환할 좌표계<br/>지원 좌표계: `WGS84`, `WCONGNAMUL`, `CONGNAMUL`, `WTM`, `TM`, `KTM`, `UTM`, `BESSEL`, `WKTM`, `WUTM`<br/>(기본값: `WGS84`) | ✅ |

:::

### 결과

::: tabs

@tab:active json

```json
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
{
  "meta": {
    "total_count": 1
  },
  "documents": [
    {
      "x": 126.57740680000002,
      "y": 33.453357700000005
    }
  ]
}
```

@tab 설명

### 헤더 

| 이름 | 설명 | 필수 |
| :--- | :--- | :---: |
| Content-type | 응답 데이터 타입<br/><ul><li>content-type: application/json;charset=UTF-8 또는</li><li>content-type: text/xml;charset=UTF-8</li></ul> | ✅ |

### 본문

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `meta`| Meta | 응답 관련 정보 |
| `documents`| Document[] | 응답 결과 |

### Meta

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `total_count` | Integer | 검색어에 검색된 문서 수 |

### Document

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `x` | Double | X 좌표, 경위도인 경우 경도(longitude) |
| `y` | Double | Y 좌표, 경위도인 경우 위도(latitude) |

:::

---

## `/v2/local/search/keyword`

> 키워드로 장소 검색하기

::: info 기본정보

| 메서드 | URL | 인증 방식 |
| :--- | :--- | :--- |
| `GET` | https://dapi.kakao.com/v2/local/search/keyword.`${FORMAT}` | REST API 키 | 

질의어에 매칭된 장소 검색 결과를 지정된 정렬 기준에 따라 제공합니다. 현재 위치 좌표, 반경 제한, 정렬 옵션, 페이징 등의 기능을 통해 원하는 결과를 요청 할 수 있습니다.

앱 REST API 키를 헤더에 담아 `GET`으로 요청합니다. 원하는 검색어와 함께 결과 형식 파라미터의 값을 선택적으로 추가할 수 있습니다.

응답은 `JSON`과 `XML` 형식을 지원합니다. 요청 시 URL의 `${FORMAT}` 부분에 원하는 응답 형식을 지정할 수 있습니다. 별도로 포맷을 지정하지 않은 경우 응답은 `JSON` 형식으로 반환됩니다.

요청 성공 시 응답의 장소 정보는 이름, 주소, 좌표, 카테고리 등의 기본 정보와 다양한 부가정보, 카카오 맵의 장소 상세 페이지로 연결되는 URL을 제공합니다.

:::

### 요청

::: tabs

@tab:active curl

> 요청: 서울 강남구 삼성동 20km 반경에서 카카오프렌즈 매장 검색

```sh
curl -v -X GET "https://dapi.kakao.com/v2/local/search/keyword.json?y=37.514322572335935&x=127.06283102249932&radius=20000" \
  -H "Authorization: KakaoAK ${REST_API_KEY}" \
  --data-urlencode "query=카카오프렌즈" 
```

@tab 설명

### 헤더

| 이름 | 설명 | 필수 |
| :--- | :--- | :---: |
| Authorization | `Authorization: KakaoAK ${REST_API_KEY}`<br/>인증 방식, REST API 키로 인증 요청 | ✅ |


### 경로 변수

| 이름 | 타입 | 설명 | 필수 |
| :--- | :--- | :--- | :---: |
| `FORMAT` | String	| 응답 형식(기본값: `JSON`) | ❌ |


### 쿼리 파라미터 

| 이름 | 타입 | 설명 | 필수 |
| :--- | :--- | :--- | :---: |
| `query` | String | 검색을 원하는 질의어	| ✅ |
| `category_group_code` | CategoryGroupCode | 카테고리 그룹 코드, 카테고리로 결과 필터링을 원하는 경우 사용	| ❌ |
| `x` | String | 중심 좌표의 X 혹은 경도(longitude) 값<br/>특정 지역을 중심으로 검색할 경우 radius와 함께 사용 가능	| ❌ |
| `y` | String | 중심 좌표의 Y 혹은 위도(latitude) 값<br/>특정 지역을 중심으로 검색할 경우 radius와 함께 사용 가능 | ❌ |
| `radius` | Integer | 중심 좌표부터의 반경거리. 특정 지역을 중심으로 검색하려고 할 경우 중심좌표로 쓰일 x,y와 함께 사용<br/>(단위: 미터(m), 최소: 0, 최대: 20000) | ❌ |
| `rect` | String | 사각형의 지정 범위 내 제한 검색을 위한 좌표<br/>지도 화면 내 검색 등 제한 검색에서 사용 가능<br/>좌측 X 좌표, 좌측 Y 좌표, 우측 X 좌표, 우측 Y 좌표 형식 | ❌ |
| `page` | Integer | 결과 페이지 번호<br/>(최소: 1, 최대: 45, 기본값: 1) | ❌ |
| `size` | Integer | 한 페이지에 보여질 문서의 개수<br/>(최소: 1, 최대: 45, 기본값: 15) | ❌ | 
| `sort` | String	| 결과 정렬 순서<br/>distance 정렬을 원할 때는 기준 좌표로 쓰일 x, y와 함께 사용<br/>distance 또는 accuracy(기본값: `accuracy`)	| ❌ |

### CategoryGroupCode

| 이름 | 설명 |
| :--- | :--- |
| `MT1` | 대형마트 |
| `CS2` | 편의점 |
| `PS3` | 어린이집, 유치원 |
| `SC4` | 학교 |
| `AC5` | 학원 |
| `PK6` | 주차장 |
| `OL7` | 주유소, 충전소 |
| `SW8` | 지하철역 |
| `BK9` | 은행 |
| `CT1` | 문화시설 |
| `AG2` | 중개업소 |
| `PO3` | 공공기관 |
| `AT4` | 관광명소 |
| `AD5` | 숙박 |
| `FD6` | 음식점 |
| `CE7` | 카페 |
| `HP8` | 병원 |
| `PM9` | 약국 |

:::

### 응답

::: tabs

@tab:active json

```json
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
{
  "meta": {
    "same_name": {
      "region": [],
      "keyword": "카카오프렌즈",
      "selected_region": ""
    },
    "pageable_count": 14,
    "total_count": 14,
    "is_end": true
  },
  "documents": [
    {
      "place_name": "카카오프렌즈 코엑스점",
      "distance": "418",
      "place_url": "http://place.map.kakao.com/26338954",
      "category_name": "가정,생활 > 문구,사무용품 > 디자인문구 > 카카오프렌즈",
      "address_name": "서울 강남구 삼성동 159",
      "road_address_name": "서울 강남구 영동대로 513",
      "id": "26338954",
      "phone": "02-6002-1880",
      "category_group_code": "",
      "category_group_name": "",
      "x": "127.05902969025047",
      "y": "37.51207412593136"
    },
    ...
  ]
}
```

@tab 설명

### 헤더

| 이름 | 설명 | 필수 |
| :--- | :--- | :---: |
| Content-type | 응답 데이터 타입<br/><ul><li>content-type: application/json;charset=UTF-8 또는</li><li>content-type: text/xml;charset=UTF-8</li></ul> | ✅ |

### 본문

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `meta`| Meta | 응답 관련 정보 |
| `documents`| Document[] | 응답 결과 |

### Meta

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `total_count` | Integer | 검색어에 검색된 문서 수 |
| `pageable_count` | Integer | `total_count` 중 노출 가능 문서 수 (최대: 45) |
| `is_end` | Boolean | 현재 페이지가 마지막 페이지인지 여부<br/>값이 `false`면 다음 요청 시 page 값을 증가시켜 다음 페이지 요청 가능 |
| `same_name` | SameName | 질의어의 지역 및 키워드 분석 정보 |

### SameName

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `region` | String[] | 질의어에서 인식된 지역의 리스트<br/>예: '중앙로 맛집' 에서 중앙로에 해당하는 지역 리스트 |
| `keyword` | String | 질의어에서 지역 정보를 제외한 키워드<br/>예: '중앙로 맛집' 에서 '맛집' |
| `selected_region` | String | 인식된 지역 리스트 중, 현재 검색에 사용된 지역 정보 |

### Document

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `id` | String | 장소 ID |
| `place_name` | String | 장소명, 업체명 |
| `category_name` | String | 카테고리 이름 |
| `category_group_code` | String | 중요 카테고리만 그룹핑한 카테고리 그룹 코드 |
| `category_group_name` | String | 중요 카테고리만 그룹핑한 카테고리 그룹명 |
| `phone` | String | 전화번호 |
| `address_name` | String | 전체 지번 주소 |
| `road_address_name` | String | 전체 도로명 주소 |
| `x` | Double | X 좌표, 경위도인 경우 경도(longitude) |
| `y` | Double | Y 좌표, 경위도인 경우 위도(latitude) |
| `place_url` | String | 장소 상세페이지 URL |
| `distance` | String | 중심좌표까지의 거리 (단, x,y 파라미터를 준 경우에만 존재)<br/>단위 meter |

:::

---

## `/v2/local/search/category`

> 카테고리로 장소 검색하기

::: info 기본정보

| 메서드 | URL | 인증 방식 |
| :--- | :--- | :--- |
| `GET` | https://dapi.kakao.com/v2/local/search/category.`${FORMAT}` | REST API 키 | 

미리 정의된 카테고리 코드에 해당하는 장소 검색 결과를 지정된 정렬 기준에 따라 제공합니다.

앱 REST API 키를 헤더에 담아 `GET`으로 요청합니다. 카테고리 코드와 함께 위치 좌표, 반경 제한, 결과 정렬 순서, 페이징 등의 파라미터를 선택적으로 사용할 수 있습니다.

응답은 `JSON`과 `XML` 형식을 지원합니다. 요청 시 URL의 `${FORMAT}` 부분에 원하는 응답 형식을 지정할 수 있습니다. 별도로 포맷을 지정하지 않은 경우 응답은 `JSON` 형식으로 반환됩니다.

각 장소 정보는 이름, 주소, 좌표, 카테고리 등의 기본 정보와 다양한 부가정보, 카카오맵의 장소 상세 페이지로 연결되는 URL을 제공합니다.

:::

### 요청

::: tabs

@tab:active curl

> 서울 강남구 삼성동 20km 반경에서 약국 검색

```sh
curl -v -X GET "https://dapi.kakao.com/v2/local/search/category.json?category\_group\_code=PM9&radius=20000" \
  -H "Authorization: KakaoAK ${REST_API_KEY}"
```

@tab 설명

### 헤더

| 이름 | 설명 | 필수 |
| :--- | :--- | :---: |
| Authorization | `Authorization: KakaoAK ${REST_API_KEY}`<br/>인증 방식, REST API 키로 인증 요청 | ✅ |


### 경로 변수

| 이름 | 타입 | 설명 | 필수 |
| :--- | :--- | :--- | :---: |
| `FORMAT` | String	| 응답 형식(기본값: `JSON`) | ❌ |


### 쿼리 파라미터 

| 이름 | 타입 | 설명 | 필수 |
| :--- | :--- | :--- | :---: |
| `category_group_code` | CategoryGroupCode | 카테고리 그룹 코드, 카테고리로 결과 필터링을 원하는 경우 사용	| ✅ |
| `x` | String | 중심 좌표의 X 혹은 경도(longitude) 값<br/>특정 지역을 중심으로 검색할 경우 radius와 함께 사용 가능	| (x,y,radius) 또는 rect 필수 |
| `y` | String | 중심 좌표의 Y 혹은 위도(latitude) 값<br/>특정 지역을 중심으로 검색할 경우 radius와 함께 사용 가능 | (x,y,radius) 또는 rect 필수 |
| `radius` | Integer | 중심 좌표부터의 반경거리. 특정 지역을 중심으로 검색하려고 할 경우 중심좌표로 쓰일 x,y와 함께 사용. 단위 meter, 0~20000 사이의 값 | (x,y,radius) 또는 rect 필수 |
| `rect` | String | 사각형 범위내에서 제한 검색을 위한 좌표<br/>지도 화면 내 검색시 등 제한 검색에서 사용 가능<br/>좌측 X 좌표, 좌측 Y 좌표, 우측 X 좌표, 우측 Y 좌표 형식<br/>x, y, radius 또는 rect 필수 | ❌ |
| `rect` | String | 사각형의 지정 범위 내 제한 검색을 위한 좌표<br/>지도 화면 내 검색 등 제한 검색에서 사용 가능<br/>좌측 X 좌표, 좌측 Y 좌표, 우측 X 좌표, 우측 Y 좌표 형식 | ❌ |
| `page` | Integer | 결과 페이지 번호<br/>(최소: 1, 최대: 45, 기본값: 1) | ❌ |
| `size` | Integer | 한 페이지에 보여질 문서의 개수<br/>(최소: 1, 최대: 45, 기본값: 15) | ❌ | 
| `sort` | String	| 결과 정렬 순서<br/>distance 정렬을 원할 때는 기준 좌표로 쓰일 x, y와 함께 사용<br/>distance 또는 accuracy(기본값: `accuracy`)	| ❌ |

### CategoryGroupCode

| 이름 | 설명 |
| :--- | :--- |
| `MT1` | 대형마트 |
| `CS2` | 편의점 |
| `PS3` | 어린이집, 유치원 |
| `SC4` | 학교 |
| `AC5` | 학원 |
| `PK6` | 주차장 |
| `OL7` | 주유소, 충전소 |
| `SW8` | 지하철역 |
| `BK9` | 은행 |
| `CT1` | 문화시설 |
| `AG2` | 중개업소 |
| `PO3` | 공공기관 |
| `AT4` | 관광명소 |
| `AD5` | 숙박 |
| `FD6` | 음식점 |
| `CE7` | 카페 |
| `HP8` | 병원 |
| `PM9` | 약국 |

:::

### 응답

::: tabs

@tab:active json

```json
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
{
  "meta": {
    "same_name": null,
    "pageable_count": 11,
    "total_count": 11,
    "is_end": true
  },
  "documents": [
    {
      "place_name": "장생당약국",
      "distance": "",
      "place_url": "http://place.map.kakao.com/16618597",
      "category_name": "의료,건강 > 약국",
      "address_name": "서울 강남구 대치동 943-16",
      "road_address_name": "서울 강남구 테헤란로84길 17",
      "id": "16618597",
      "phone": "02-558-5476",
      "category_group_code": "PM9",
      "category_group_name": "약국",
      "x": "127.05897078335246",
      "y": "37.506051888130386"
    },
    ...
  ]
}
```

@tab 설명

### 헤더

| 이름 | 설명 | 필수 |
| :--- | :--- | :---: |
| Content-type | 응답 데이터 타입<br/><ul><li>content-type: application/json;charset=UTF-8 또는</li><li>content-type: text/xml;charset=UTF-8</li></ul> | ✅ |

### 본문

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `meta`| Meta | 응답 관련 정보 |
| `documents`| Document[] | 응답 결과 |

### Meta

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `total_count` | Integer | 검색어에 검색된 문서 수 |
| `pageable_count` | Integer | `total_count` 중 노출 가능 문서 수 (최대: 45) |
| `is_end` | Boolean | 현재 페이지가 마지막 페이지인지 여부<br/>값이 `false`면 다음 요청 시 page 값을 증가시켜 다음 페이지 요청 가능 |
| `same_name` | SameName | 질의어의 지역 및 키워드 분석 정보 |

### SameName

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `region` | String[] | 질의어에서 인식된 지역의 리스트<br/>예: '중앙로 맛집' 에서 중앙로에 해당하는 지역 리스트 |
| `keyword` | String | 질의어에서 지역 정보를 제외한 키워드<br/>예: '중앙로 맛집' 에서 '맛집' |
| `selected_region` | String | 인식된 지역 리스트 중, 현재 검색에 사용된 지역 정보 |

### Document

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `id` | String | 장소 ID |
| `place_name` | String | 장소명, 업체명 |
| `category_name` | String | 카테고리 이름 |
| `category_group_code` | String | 중요 카테고리만 그룹핑한 카테고리 그룹 코드 |
| `category_group_name` | String | 중요 카테고리만 그룹핑한 카테고리 그룹명 |
| `phone` | String | 전화번호 |
| `address_name` | String | 전체 지번 주소 |
| `road_address_name` | String | 전체 도로명 주소 |
| `x` | Double | X 좌표, 경위도인 경우 경도(longitude) |
| `y` | Double | Y 좌표, 경위도인 경우 위도(latitude) |
| `place_url` | String | 장소 상세페이지 URL |
| `distance` | String | 중심좌표까지의 거리 (단, x,y 파라미터를 준 경우에만 존재)<br/>단위 meter |

:::

---

<TagLinks/>
