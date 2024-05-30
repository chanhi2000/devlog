---
lang: ko-KR
title: API
description: HTTP > API
icon: fas fa-bullseye
category: 
  - HTTP
  - API
tag: 
  - references
  - api
  - js
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## affirmation.dev

> https://www.affirmations.dev 
>> Daily affirmations API to keep your mental good and healthy.

```js
fetch('https://www.affirmations.dev')
    .then(response => response.json())
    .then(data => console.log(data));

// JSON result
/* 
{"affirmation":"Your life is already a miracle of chance waiting for you to shape its destiny"}
*/
```

---

## onwater.io

```js
const latitude = 23.92323;
const longitude = -66.3;
const accessToken = 'your_access_token';

fetch(`https://api.onwater.io/api/v1/results/${latitude},${longitude}/?access_token=${accessToken}`)
    .then(response => response.json())
    .then(data => console.log(data));

// JSON result
/* 
{
  "query": "23.92323,-66.3",
  "request_id": "dbfc0929-286f-4bea",
  "lat": 23.92323,
  "lon": -66.3,
  "water": true
}
*/
```

---

## fixer.io

> https://fixer.io
>> Foreign exchange rates and currency conversion JSON API

```js
fetch('https://data.fixer.io/api/latest')
    .then(response => response.json())
    .then(data => console.log(data));

// JSON result
/* 
{
  "base": USD,
  "date": "2018-02-13",
  "rates": {
     "CAD": 1.260046,
     "CHF": 0.933058,
     "EUR": 0.806942,
     "GBP": 0.719154,
     [170 world currencies]
  }
}
*/
```

<TagLinks />