---
lang: ko-KR
title: "파일 변수 Deep-Dive"
description: "Article(s) > 파일 변수 Deep-Dive"
icon: fa-brands fa-react
category: 
  - Node.js
  - React.js
  - Article(s)
tag: 
  - blog
  - fe-developers.kakaoent.com
  - node
  - nodejs
  - node-js
  - react
  - reactjs
  - react-js
head:
  - - meta:
    - property: og:title
      content: "Article(s) > 파일 변수 Deep-Dive"
    - property: og:description
      content: "파일 변수 Deep-Dive"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/fe-developers.kakaoent.com/240715-handling-file-variables.html
prev: /programming/js-react/articles/README.md
date: 2024-07-15
isOriginal: false
cover: https://fe-developers.kakaoent.com/static/82b76de336e50664ee1472fbaf6ac0d6/2bef9/thumbnail.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "React.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-react/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

---

<SiteInfo
  name="파일 변수 Deep-Dive | 카카오엔터테인먼트 FE 기술블로그"
  desc="파일 변수가 무엇인지 알아보고, 어떻게 활용할 수 있는지 알아봅니다."
  url="https://fe-developers.kakaoent.com/2024/240715-handling-file-variables/"
  logo="https://fe-developers.kakaoent.com/favicon-32x32.png?v=44803cb16c1e2debd3984cf2e8cb2ded"
  preview="https://fe-developers.kakaoent.com/static/82b76de336e50664ee1472fbaf6ac0d6/2bef9/thumbnail.png"/>

---

## 서론

제가 속해있는 스토리FE개발팀에서는 카카오페이지, 카카오웹툰, 타파스 등의 다양한 웹 서비스를 개발하고 운영하고 있습니다. 웹 서비스의 규모가 커지고 제공하는 기능들이 많아지다 보니 다양한 유형의 상태(state)를 효율적으로 관리하는 방법에 대해 고민해야 했는데요.
이 글에서는 저희 팀에서 특정 유형의 상태를 관리하는 방법으로 사용하고 있는 **파일 변수**에 대해 소개하고 파일 변수에 대한 운영 노하우를 공유하고자 합니다.

### Redux

처음에 프로젝트를 개발할 때는 상태에 대해서 깊이 생각할 필요가 없었습니다. 모든 상태를 한 곳에서 통으로 관리해도 충분하다고 생각했고 실제로 프로젝트의 규모가 작을 때에는 전혀 문제가 없었습니다. 따라서 대표적인 상태 관리 라이브러리 중 하나인 Redux를 사용해 하나의 전역 스토어(store)에서 프로젝트의 모든 상태를 관리했습니다.

![redux logo](https://fe-developers.kakaoent.com/static/b89d738038d1209700b2e83dfa2a4b6b/df009/redux-logo.png)

많은 상태 관리 라이브러리 중에서 Redux를 사용하기로 결정했던 이유를 몇 가지 뽑아보자면 다음과 같습니다.

#### Redux 미들웨어

Redux는 액션이 트리거되어 그로 인한 상태의 변경 사항이 스토어에 반영되기까지의 과정을 제어하고 확장할 수 있는 미들웨어 기능을 제공합니다. redux-thunk나 redux-saga와 같은 라이브러리들이 미들웨어에 속합니다.

#### Redux Toolkit

하나의 Redux 플로우를 정의하기 위해서는 상당히 많은 코드가 필요합니다. 액션을 정의하고 리듀서를 구현해야 하며 스토어에 상태를 추가해야 하고, 비동기 작업이 필요하다면 thunk 함수나 saga를 정의해야 합니다. Redux Toolkit을 사용하면 이와 같은 일련의 플로우를 매우 간단하게 구현할 수 있는 API들을 제공합니다.

#### Redux Devtools

Redux의 가장 큰 장점 중 하나는 상태의 불변성을 유지함으로써 상태 변경의 히스토리를 쉽게 추적할 수 있다는 것입니다. 그리고 redux devtools 도구를 통해 이러한 상태 변경 히스토리를 쉽게 확인할 수 있습니다.

이처럼 Redux가 제공하는 여러 이점을 활용해 상태를 잘 관리하고 있었는데, 프로젝트의 규모가 커질수록 한계가 찾아왔습니다. 서버로부터 받아오는 상태를 관리하기 위해 추가된 saga 코드가 많아지다 보니 가독성이 떨어져서 하나의 Redux 플로우를 따라가기가 어려워졌습니다. 특정 페이지에서 한 번에 너무 많은 액션을 트리거 하다보니 Redux Devtools가 부하를 버티지 못하고 다운되어버리는 상황도 종종 발생했습니다. 어떤 값이 주기적으로 변경되는 값이고 어떤 값이 한 번 초기화되고 변경되지 않는 값인지를 한 눈에 파악하기 힘들어졌습니다.
Redux 자체에 문제가 있는 것은 아닙니다. Redux는 모든 상태를 하나의 저장소 안에서 관리한다는 기본 원칙을 충실히 지키고 있습니다. 문제에 대한 책임은 모든 상태를 Redux에 저장해서 관리하고자 했던 저희 팀에게 있었습니다. Redux의 메인테이너인 Mark Erikson은 자신의 블로그에 다음과 같은 말을 남긴 적이 있습니다.

#### “Redux is Overused”

Redux가 불필요한 영역까지 너무 남용되고 있다는 뜻입니다. Mark Erikson이 지적한 것처럼 저희 팀은 Redux를 모든 곳에서 남용해서 사용하고 있었고, 이로 인해 한계를 맞이했습니다.

### 상태에는 유형이 있습니다.

팀에서 사용하는 상태 관리 방식의 한계를 극복하기 위해서는 Redux를 통한 상태 관리의 의존성을 최대한 줄여야 했습니다. Redux로 관리할 필요가 없는 상태 값에는 무엇이 있는지 확인하던 도중 상태를 유형별로 구분할 수 있다는 사실을 발견했고, 이를 통해 저희 팀에서 Redux로 관리하고 있던 상태들을 아래와 같은 유형별로 분류할 수 있었습니다.

- 서버 상태: API 요청 및 응답에 대한 상태
- 추적이 필요한 상태: 값의 변경으로 인해 UI가 리렌더링 되어야 하거나 특정 로직을 트리거 시켜야 하는 등 값의 변경을 계속해서 추적해야 하는 상태
- 추적이 불필요한 상태: 값이 변경되어도 별도의 로직이 수행될 필요가 없어서 값의 변경을 추적할 필요가 없는 상태

**서버 상태**의 경우 기존에 redux-saga 미들웨어를 통해 비동기 API 요청 관련 상태를 관리하던 부분이었습니다. 서버 상태는 굳이 Redux의 전역 스토어로 관리할 필요 없이 [<FontIcon icon="fas fa-globe"/> react-query](https://tanstack.com/query/latest)의 데이터 캐싱 기능을 활용하면 상태 관리를 간단하게 구현할 수 있다는 사실을 발견했습니다. 따라서 redux-saga 미들웨어를 제거하고 react-query 라이브러리를 통해 서버 상태를 관리하도록 일괄 변경했습니다.

::: info

react-query를 활용한 서버 상태 관리는 [esme의 블로그 글](https://fe-developers.kakaoent.com/2022/220224-data-fetching-libs/)에서 더 자세한 내용을 확인하실 수 있습니다.
<!-- TODO: 작성 (/explore/articles/fe-devlopers.kakaoent.com/220224-data-fetching-libs.md) -->

:::

**추적이 필요한 상태**들은 여전히 상태 관리 라이브러리를 통해 관리해 줘야 했습니다. 다만 Redux 미들웨어를 더 이상 활용하지 않기도 하고, 클라이언트 사이드에서 변경되는 UI를 관리하는 정도의 단순한 상태들을 Redux로 관리하기에는 라이브러리가 너무 무겁다고 판단했습니다. 따라서, Redux보다 훨씬 가벼운 Zustand라는 상태 관리 라이브러리를 통해 추적이 필요한 최소한의 상태를 관리하도록 결정했습니다.

**추적이 불필요한 상태**들은 가능하면 별도의 상태 관리 라이브러리 없이 **파일 변수**로 관리하기로 결정했습니다. 여기에서 말하는 ‘추적이 불필요한 상태’란 값이 변경되더라도 별도의 로직을 수행할 필요가 없으나 단순히 개발 편의를 위해 전역 store에 넣어서 관리하는 상태이거나, `window.navigator.userAgent`를 통해 알 수 있는 유저의 환경 정보와 같이 사용자 요청에 대해 결정되며 값이 도중에 변경될 수 없는 상태를 의미합니다.

지금부터 저희 팀에서 추적이 불필요한 상태를 관리하기 위해 사용하고 있는 **파일 변수**가 무엇인지부터 살펴보도록 하겠습니다.

---

## 파일 변수

### 이 글에서 말하는 파일 변수란 무엇인가요?

파일 변수를 활용하는 방법들에 대해 설명하기 전에 우선 이 글에서 말하는 **파일 변수**가 정확히 무엇인지부터 짚고 넘어갈 필요가 있습니다. 왜냐하면 자바스크립트 생태계에서 ‘파일 변수’라는 용어는 엄밀히 말해 존재하지 않기 때문입니다.
자바스크립트에서 변수를 하나 선언하면 해당 변수가 어느 위치에 선언되었는가에 따라 ‘스코프’가 할당됩니다. 일반적으로 잘 알려진 스코프는 다음과 같습니다.

- Global Scope (전역 범위): 코드의 모든 영역에서 선언된 변수에 접근할 수 있습니다. 전역 범위에 선언된 변수를 보통 전역 변수라고 부릅니다.
- Function Scope (함수 범위): 함수 내부에 선언된 변수의 경우 함수 외부에서 접근이 불가능하며 오직 함수 내부에서만 접근이 가능합니다.
- Block Scope (블록 범위): ES6 문법에서 새로 도입된 let 과 const 선언문으로 인해 추가된 스코프로, 중괄호 내부에 let 또는 const로 선언된 변수는 중괄호 외부에서 접근이 불가능하며 오직 중괄호 내부에서만 접근이 가능합니다.

ES6에서는 여기에 더해 ‘모듈’이라는 개념이 새롭게 도입됨에 따라 하나의 스코프가 추가되었는데, 바로 **Module Scope(모듈 범위)** 입니다.

Javascript ES6 문법을 사용할 경우 특정 파일 내에서 export 문을 사용한다면 해당 파일 자체가 하나의 모듈이 됩니다. 그리고 해당 파일 내에서 변수를 선언하면 해당 변수는 선언된 파일 내에서만 접근이 가능하며 외부에서 접근이 불가능합니다.
예를 들어, 아래와 같이 <FontIcon icon="fa-brands fa-js"/>`example.js` 라는 파일 내에서 전역으로 var1이라는 변수를 선언한다면 var1은 <FontIcon icon="fa-brands fa-js"/>`example.js` 파일 내에서 정의된 함수 등에서만 접근이 가능하며 외부 파일에서는 접근이 불가능합니다.

> <FontIcon icon="fa-brands fa-js"/>`example.js`

```js
let var1;

export function func1() {
  ...
}
```

이 글에서 말하는 파일 변수란 이처럼 특정 파일(모듈) 내에 전역으로 정의되어 스코프가 파일 내부로 한정된 변수라고 정의하겠습니다.

다시 말해 파일 변수는 **모듈 범위 전역 변수 (Module Scope Global Variable)** 라고 할 수 있겠습니다만, 저희 팀에서는 이렇게 긴 이름 대신 ‘파일에 종속된 변수다’라는 의미를 직관적으로 알 수 있는 **파일 변수** 라는 용어를 사용하고 있습니다.

### 클라이언트 사이드에서 파일 변수는 어떻게 동작하며 어떻게 사용하나요?

앞서 Redux를 통해 값의 변경을 추적할 필요가 없는 값들을 파일 변수로 관리하겠다고 언급했습니다. 이 글에서는 클라이언트 사이드에서 파일 변수를 활용하는 방법과 서버 사이드에서 활용하는 방법을 나눠서 설명해 드릴 텐데, 우선 클라이언트 사이드부터 소개하겠습니다.

여러분이 온라인 쇼핑몰 웹사이트를 운영하는데 유저의 환경이 모바일 환경인지 PC 환경인지에 따라 웹 사이트의 UI와 UX를 다르게 제공하고 싶다고 가정하겠습니다. 단순하게는 환경에 따라 별도의 아이콘을 보여준다거나, 더 나아가서 PC 환경에서는 모달을 보여주고 모바일 환경에서는 토스트 메시지를 보여주도록 동작을 완전히 분기할 수도 있습니다.

이를 구현하기 위해 유저가 페이지에 최초 진입했을 때 유저의 userAgent 정보를 가져온 후, 이를 바탕으로 유저가 모바일 환경인지 아닌지를 **isMobile** 이라는 불리언 변수에 저장해 관리하고자 합니다. 이 책의 모든 예시는 이 isMobile이라는 값을 어떻게 관리할지에 초점을 맞추겠습니다.

::: info

예시를 최대한 단순화하기 위해서 Boolean 타입 변수인 isMobile을 활용했으나 실 서비스에서는 isMobile 보다 훨씬 복잡하고 더 의미있는 값들도 파일 변수로 관리할 수 있습니다. 저희 팀에서는 유저의 액세스 토큰 정보나 디바이스 ID와 같은 유저 관련 정보들도 파일 변수로 관리하고 있습니다.

:::

![is mobile diagram](https://fe-developers.kakaoent.com/static/c98166ca200aff9c704d17b3289a69d9/6be49/is-mobile-diagram.png)

이 isMobile 변수를 Redux 스토어에서 상태 값으로 관리하도록 구현할 수도 있습니다. 특정 도메인에 종속된 정보가 아니고 여러 컴포넌트에서 활용될 수 있는 정보이니 전역 스토어에 저장해놓고 필요할 때마다 꺼내 쓰면 편하겠죠.
유저의 환경은 유저가 웹 사이트에 남아있는 동안 바뀌지 않는 정보이므로 isMobile의 값을 페이지 최초 진입 시 한 번만 초기화해 준다고 가정했을 때, 아래와 같이 코드를 작성할 수 있을 것입니다.

> <FontIcon icon="fas fa-folder-open"/>`client/`<FontIcon icon="fa-brands fa-js"/>`state.js`

```js
// isMobile이라는 상태를 redux store에 정의합니다.
const initialState = {
  isMobile: undefined,
}
```

> <FontIcon icon="fas fa-folder-open"/>`client/`_app.js

```js
const isMobile = useSelector(store => store.isMobile);
const dispatch = useDispatch();

// userAgent 정보를 분석해 모바일 환경인지 여부를 리턴하는 함수
function parseUserAgent(userAgent) {
  ...
}

// 페이지 최초 진입 시 isMobile 정보를 한 번 갱신해줍니다.
useEffect(() => {
  dispatch(actions.setIsMobile(parseUserAgent(window.navigator.userAgent)));
}, []);
```

_app에서 유저의 userAgent 정보를 바탕으로 Redux 스토어의 `isMobile` 상태 값을 갱신해 주고 있습니다. 우리의 목표는 최대한 Redux로 관리되는 값들을 파일 변수로 관리하도록 변경하는 것이므로, 이 값을 Redux를 통해 ‘관리’할 필요가 있는지 고민해 봅시다.

`isMobile`이라는 값은 한 번 할당되면 더 이상 변경되지 않는 값이기 때문에, 해당 값이 변경됐는지 실시간으로 추적할 필요도 없습니다. 그리고 변경되지 않는 값이므로 UI 리렌더링을 고려할 필요가 없는 것은 물론이고요. 이 변수 하나를 Redux에서 관리하기 위해 최소 `state`, `action`, `reducer`에 대한 코드를 프로젝트에 추가해야 하는데, 이렇게 큰 비용을 들여서 관리할 필요가 있는지 의심스럽습니다.

이 `isMobile`이라는 변수를 파일 변수로 관리하도록 변경해 보면 어떨까요? <FontIcon icon="fa-brands fa-js"/>`media.js` 라는 파일을 생성한 후, 아래와 같이 `isMobile` 이라는 변수를 파일 내에 전역으로 선언합니다.

> <FontIcon icon="fas fa-folder-open"/>`client/`<FontIcon icon="fa-brands fa-js"/>`media.js`

```js
let isMobile = undefined;
```

파일 변수는 선언된 파일 내로 스코프가 한정되기 때문에 외부에서 접근이 불가합니다. 외부에서 isMobile 값을 참조할 수 있도록 getter 함수를 정의하고 export를 통해 내보냅시다.

> <FontIcon icon="fas fa-folder-open"/>`client/`<FontIcon icon="fa-brands fa-js"/>`media.js`

```js
let isMobile = undefined;

export function getIsMobile() {
  if(isMobile === undefined) {
    isMobile = parseUserAgent(window.navigator.userAgent);
  }
  return isMobile;
}

// userAgent 정보를 분석해 모바일 환경인지 여부를 리턴하는 함수
function parseUserAgent(userAgent) {
  ...
}
```

위 getter 함수에서 주목해야 할 점은 초기화 시점에 값의 할당까지 담당하고 있다는 점입니다. getter 함수에서는 단순히 값을 반환하고 setter 함수를 추가로 정의해 이전 코드에서처럼 _app에서 setter 함수를 호출하는 방식으로 구현할 수도 있습니다. 하지만 isMobile과 같이 반드시 앱 시작 시점에 초기화 될 필요가 없고, 한 번 초기화되면 추후 변경되지 않는 값임이 확실한 경우에는 해당 값을 최초로 참조할 때 초기화해 줘도 무방합니다. 이를 싱글턴 패턴이라고 합니다.

위와 같이 isMobile이라는 값을 파일 변수로 정의해 사용한다면 Redux로 관리할 때 필요한 보일러 플레이트 전혀 없이 필요한 모든 곳에서 단순히 getIsMobile 함수를 호출해 값을 가져올 수 있습니다.

### 클라이언트 사이드에서 파일 변수 사용 시 유의할 점은 무엇인가요?

아래 두 상황에서는 파일 변수를 사용할 때 유의해야 합니다.

#### 1. 특정 페이지에 대해 SSG를 사용하는 경우

빌드 타임에 HTML을 생성해 주는 Static Site Generation (SSG)의 경우, 파일 변수를 임포트해서 렌더링에 사용하는 코드를 작성하더라도 클라이언트 사이드에서 관리되는 파일 변수의 값을 활용할 수 없다는 점을 유의해야 합니다. SSG로 제공되는 페이지는 온전히 서버에서 빌드 타임에 HTML이 생성되기 때문에 클라이언트의 현재 상태를 참조할 수 있는 방법이 없기 때문입니다.

위 예시에서 정의한 `getIsMobile` 함수의 경우 서버 환경에는 window 객체가 존재하지 않기 때문에, 해당 함수를 SSG 페이지에서 호출하는 코드를 작성했다면 애플리케이션 빌드 시점에 `window is not defined`라는 에러를 보게 될 것입니다.

#### 2. Hard Navigation으로 페이지를 이동하는 경우

Hard Navigation이란 `window.location.href` 를 통해 특정 URL로 이동하거나 a 태그를 통해 페이지를 이동하는 등 ‘Web API를 활용한 페이지 이동 방식’을 뜻합니다. 이 경우 페이지를 새로고침 하거나 브라우저 주소창에 직접 URL을 쳐서 페이지에 진입하는 것과 동일하게 페이지 자체가 처음부터 다시 그려지는 것이기 때문에, 상태 값과 같이 컨텍스트에 유지되던 데이터와 함께 파일 변수 또한 사라지게 됩니다.

이와 반대되는 개념인 Soft Navigation은 Client-Side Navigation이라고도 불리며, 브라우저의 페이지 이동 방식을 사용하는 대신 자바스크립트를 사용해 페이지 이동을 구현함으로써 더 빠른 페이지 이동을 가능케 하고 기존 데이터를 그대로 유지할 수 있게 해줍니다. 우리가 React로 프로젝트를 구현할 때 라우팅을 위해 `react-router`와 같은 라이브러리를 사용하거나, Next.js에서 `useRouter`와 같은 라우팅 관련 기능들을 사용해야 하는 이유입니다.

따라서, 어떤 이유에서건 Hard Navigation을 프로젝트에서 사용해야 한다면 해당 시점에 클라이언트의 파일 변수 값이 유지되지 않는다는 점을 유의해야 합니다.

### Deep-Dive: 페이지 이동 시 파일 변수의 값이 초기화되지는 않나요?

여기서 이런 의문이 들 수 있습니다.

> **파일 변수를 사용하는 페이지가 아니라 사용하지 않는 페이지로 이동한다면 파일 변수의 값이 사라지는 거 아닌가? 이동한 페이지에서는 더 이상 파일 변수가 정의된 파일을 임포트하지 않는데!**

타당한 의문입니다. 자바스크립트 환경에서는 가비지 컬렉터가 주기적으로 동작하며, 현재 메모리에 할당되어 있는 특정 데이터가 더 이상 참조되지 않는다면 - 혹은 해당 데이터에 더 이상 도달할 수 없다면 - 메모리에서 할당 해제하기 때문입니다. 만약 내가 A라는 페이지에서 isMobile이라는 파일 변수를 임포트해서 사용하다가 파일 변수를 사용하지 않는 B라는 페이지로 이동했을 때, 이동한 페이지에서는 더 이상 isMobile을 참조하는 곳이 없으므로 가비지 컬렉터가 파일 변수를 지워버리지 않을까요?

결론부터 말씀드리자면 한 번 임포트 된 ES6 모듈에 대해서는 가비지 컬렉터에 의해 파일 변수의 값이 날아가는 걱정을 하지 않아도 됩니다. 어떻게 값이 유지되는지를 알기 위해서는 **HTML 스펙**을 조금 깊이 살펴볼 필요가 있습니다.

![](https://fe-developers.kakaoent.com/a37b31fa095176856c15a386140560f9/html.svg)

여러분이 웹 사이트에 접속하면 여러모로 친숙하실 **document** 라는 객체가 생성됩니다. 그리고 이 객체는 Soft Navigation을 통해 URL이 변경되는 등의 동작으로 내부 값이 변경될 수는 있어도, 한 번 생성되면 유저가 웹 사이트를 이탈하거나 Hard Navigation을 통해 기존 DOM 정보를 모두 상실하지 않는 한 계속 유지됩니다.
HTML5에 대한 표준 스펙이 명시되어 있는 [<FontIcon icon="fa-brands fa-html5"/>HTML Standard](https://html.spec.whatwg.org/) 에는 Document에 대한 항목이 존재하는데, 이 항목에는 아래와 같은 내용이 존재합니다.

> 각 Document 객체는 초기에 값이 비어있는 모듈 맵 (Module Map)을 가지고 있다.**

**모듈 맵**이 정확히 무엇이고 어떤 역할을 하는지는 [<FontIcon icon="fa-brands fa-firefox"/>Mozilla 블로그 포스팅](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) 에 아주 상세하게 설명되어 있습니다. 다만 해당 내용이 매우 길기 때문에, 이 글에서는 모듈 맵이 다음과 같은 특성을 가진다는 것만 짚고 넘어가도 충분합니다.

- 모듈 스크립트를 임포트하면 이 정보가 모듈 맵에 저장됩니다.
- 모듈 맵은 모듈 스크립트에 대한 캐시 저장소 역할을 제공합니다.

![module map](https://fe-developers.kakaoent.com/static/5c441e31ef734bf3c987e7c7efb82bcf/1f7be/module-map.png)

그리고 마지막으로 HTML5 표준 스펙에서는 모듈 맵에 대해 다음과 같이 설명하고 있습니다.

> 모듈 맵은 임포트 된 모듈 스크립트들이 Document나 워커 당 한 번만 패치 / 파싱 / 평가되도록 보장하기 위해 사용됩니다.

이 내용들을 조합해 보면 다음과 같은 결론을 내릴 수 있습니다.

**웹 사이트 진입 시 한 번 생성되고 해제되지 않는 Document 객체는 모듈 맵을 가지고 있으며, 이 모듈 맵은 특정 모듈을 단 한 번만 가져오도록 보장해 줍니다.**

이전 페이지에서 임포트 된 모듈이 현재 페이지에서 사용되지 않는다고 가비지 컬렉션을 한다면, 다시 모듈을 사용하는 페이지로 이동했을 때 모듈을 리패치해야 하는데 이는 모듈 맵이 특정 모듈을 단 한 번만 패치하도록 보장해야 한다는 원칙을 깨뜨리는 일이 되겠죠. 따라서, 한 번 임포트 된 모듈은 가비지 컬렉션 되지 않으며 해당 모듈이 전역 변수로써 참조하고 있는 파일 변수 또한 가비지 컬렉션 되지 않는다는 결론을 내릴 수 있습니다.

---

## 서버 사이드 (<FontIcon icon="fa-brands fa-node"/>Node.js 환경)에서 파일 변수는 어떻게 동작하며 어떻게 사용해야 하나요?

지금까지는 클라이언트 환경에서 파일 변수를 활용하는 방법에 대해 알아봤습니다. 그런데, 만약 서버 환경에서 파일 변수를 사용하고 싶다면 어떻게 해야 할까요?
유저가 PC웹 환경이 아니라 모바일 웹 환경에서 /pc-only 라는 URL로 접근을 시도했을 때, 해당 요청을 /mobile-only 라는 URL로 리다이렉트 시키기 위해 <FontIcon icon="fa-brands fa-node"/>Node.js 서버 환경에서 다음과 같은 Express 미들웨어를 작성했다고 가정해 봅시다.

```js
export async function pcOnlyMiddleware(req, res, next) {
  const isMobile = parseUserAgent(req.headers['user-agent']);

  if (req.path === '/pc-only' && isMobile) {
    res.redirect('/mobile-only');
    return;
  }

  next();
  return;
}
```

![is mobile server diagram](https://fe-developers.kakaoent.com/static/34da53a11b6e21e26b7a7007db36f70c/58354/is-mobile-server-diagram.png)

서버 사이드 코드를 작성하다 보니 유저가 모바일 웹 환경인지 여부를 확인해야 하는 경우가 많아졌고, 이때마다 Request 헤더를 일일이 파싱하는 코드를 넣기가 번거로운 나머지 클라이언트 사이드에서 했던 것과 동일하게 isMobile을 파일 변수로 관리하고자 합니다.

> <FontIcon icon="fas fa-folder-open"/>`server/`<FontIcon icon="fa-brands fa-js"/>`media.js`

```js
let isMobile = undefined;

export function getIsMobile() {
  return isMobile;
}

export function setIsMobile(req) {
  if(isMobile === undefined) {
    isMobile = parseUserAgent(req.headers['user-agent']);
  }
}
```

> <FontIcon icon="fas fa-folder-open"/>`server/`<FontIcon icon="fa-brands fa-js"/>`mediaMiddleware.js`

```js
import { setIsMobile } from "./media.js";

export async function mediaMiddleware(req, res, next) {
  setIsMobile(req);
  next();
  return;
}
```

파일 변수 값 초기화에는 request 객체가 필요하기 때문에 싱글턴 패턴을 활용하지 않고 setIsMobile 이라는 setter 함수를 정의했다는 점만 제외하면 클라이언트 사이드에서 사용했던 방식과 거의 유사합니다. 그렇다면 위 코드는 서버 사이드에서 정상적으로 동작할까요?

### 서버 사이드에서 파일 변수는 모든 유저가 공유됩니다.

서버에서 위와 같은 방식으로 파일 변수를 사용한다면 치명적인 문제가 발생할 수 있습니다. 파일 변수라는 자원이 서버에 접근하는 모든 유저에 대해 공유되기 때문입니다.
이 글의 메인 주제는 어디까지나 파일 변수이기 때문에 서버 동작에 대해 깊게 들어가지는 않겠습니다. 완전히 적절하지는 않을 수도 있으나 좀 더 이해하기 쉬운 비유를 통해 어떤 문제가 발생할 수 있는지 설명해 보겠습니다.
여러분이 브라우저를 열고 특정 웹사이트에 접속한다면, 여러분은 해당 웹사이트에 대한 독립적인 ‘컨텍스트’를 하나 생성해 가지게 됩니다. 여기서 말하는 컨텍스트란 현재 접속한 웹사이트에서 여러분에게 UI나 기능들을 제공하기 위해 사용하는 상태 값 등을 의미하며, 이 값은 여러분의 브라우저에 저장되어 관리되는 값이기 때문에 외부에서 여러분의 컨텍스트에 접근하거나 제어할 수 없습니다.
웹 사이트에 접속하는 유저들은 각각의 브라우저에서 각각의 컨텍스트를 가지며 이 컨텍스트 내부에 있는 자원들은 서로 공유되지 않습니다.

![one browser one user](https://fe-developers.kakaoent.com/static/e5f1457a622602560df29c0343c95e5e/01ccc/one-browser-one-user.png)

서버가 하나 떠 있다는 것은 컨텍스트 관점에서 브라우저를 하나만 사용한다는 것과 유사하다고 볼 수 있습니다. 브라우저를 한 유저만 사용하고 있다면 문제가 없습니다. 하나의 유저가 하나의 컨텍스트를 가지는 일반적이고 자연스러운 상황이니까요.
하지만 서버는 기본적으로 다수의 유저에 대한 요청을 처리할 목적으로 구축되며, 여기서 문제가 발생합니다. 여러 유저가 서버에 동시에 접근한다면, 브라우저는 하나만 떠 있는데 그 브라우저를 여러 유저가 동시에 사용하게 된다는 뜻입니다. 즉, 하나의 컨텍스트를 여러 유저가 공유한다는 뜻입니다. 나는 분명히 내 계정으로 로그인했는데 어느 순간부터 나중에 로그인한 다른 유저의 계정을 사용하게 될 수도 있습니다. 즐겨찾기 한 적이 없는 상품들이 어느 순간부터 즐겨찾기에 추가될 수도 있죠. 거의 해킹이나 다를 바 없습니다.

![one browser many user](https://fe-developers.kakaoent.com/static/0ec6055b07b04e13af62366390b50775/8b70b/one-browser-many-user.png)

파일 변수는 모듈에 정의됩니다. 서버에는 브라우저가 하나이므로 모듈도 하나만 임포트되어 사용됩니다. 그리고 이 모듈을 서버의 모든 유저가 공유하게 됩니다. 만약 위 코드와 같이 Express 미들웨어에 파일변수를 정의한다면, 파일변수가 초기화되지 않은 최초 시점에 서버에 접근한 유저에 따라 isMobile의 값이 결정될 것이며 이 값을 모든 유저가 공유하게 될 것입니다. isMobile이라는 값은 각 유저에 대해서 관리되어야 하는데, 이는 우리가 의도했던 동작과는 전혀 다릅니다.
웹사이트에 처음 접속한 A라는 유저가 모바일 웹 환경이라면 isMobile은 true로 초기화될 것이고, 그 이후에 접속한 B라는 유저는 PC웹 환경임에도 불구하고 마치 모웹 환경인 것처럼 인식될 것이라는 뜻입니다. isMobile이 단순한 모바일 여부를 관리하는 값이라 망정이지 유저의 개인정보를 관리하는 값이었다면, 유저 B는 의도치 않게 A의 개인정보에 접근했을 것입니다. 끔찍한 상황이죠.
즉 클라이언트 사이드에서와 같은 방식으로 서버 사이드에서 파일 변수를 사용한다면 내 파일 변수 값을 다른 유저와 공유하게 되고, 다른 유저가 파일 변수 값을 변경하면 나도 영향을 받는다는 문제에 직면하게 됩니다.

### AsyncLocalStorage를 활용해 개별적인 컨텍스트를 가지게 만들어봅시다.

그렇다면 저희가 사용하는 <FontIcon icon="fa-brands fa-node"/>Node.js 서버 환경에서 파일 변수를 활용할 수 없는 걸까요? 현재 문제는 ‘모든 유저가 동일한 브라우저(컨텍스트)를 사용한다’라는 곳에서 출발하므로, 각 유저가 서버에 접근할 때마다 각기 다른 브라우저를 새로 띄워 사용하도록 구현한다면 문제가 해결될 것 같은데요. Node.js가 16.4 버전 이후부터 정식 기능으로 제공하는 클래스 중 하나인 **AsyncLocalStorage** 를 사용하면 이 문제를 해결할 수 있습니다.

::: info

AsyncLocalStorage 클래스를 제공하는 Async Hooks 라이브러리의 경우 제공하는 대다수의 기능이 Stability 1, 즉 실험적 기능으로 제공되고 있습니다. 이 글에서는 Stable로 명시된 안정적인 기능들만 소개합니다.

:::

Node.js의 공식 문서를 보면 AsyncLocalStorage에 대해 다음과 같이 설명하고 있습니다.

::: info

이 클래스는 비동기 작업을 통해 일관성을 유지하는 저장소를 생성합니다. **AsyncLocalStorage의 각 인스턴스는 독립적인 저장소 컨텍스트를 유지합니다.** 여러 인스턴스는 서로의 데이터에 간섭할 위험 없이 동시에 안전하게 존재할 수 있습니다.

:::

위 설명에서 ‘독립적인 저장소 컨텍스트를 유지한다’라는 부분에 주목해야 합니다. AsyncLocalStorage를 사용한다면 각 요청별로 별도의 컨텍스트를 유지할 수 있게 됩니다. 즉, 각 유저에 대해 각기 다른 브라우저를 띄워주는 역할을 할 수 있다는 의미죠.

![many browser many user](https://fe-developers.kakaoent.com/static/06cdd17f2812f5d5b7364cce4e93c608/8cdda/many-browser-many-user.png)

AsyncLocalStorage는 <FontIcon icon="iconfont icon-nextjs"/>`Next.js` 프레임워크 자체에서도 서버 사이드의 headers, cookies 등을 접근할 때 [활용하고 있을만큼 (<FontIcon icon="iconfont icon-github"/>`vercel/next.js`)](https://github.com/vercel/next.js/blob/ea124072571f1b12452a3ae6e4ac6825a74af8bc/packages/next/src/client/components/request-async-storage.external.ts#L1) 현업에서 활발하게 사용되고 있는 기술입니다.

위의 잘못된 파일 변수 예제를 AsyncLocalStorage를 활용해서 다시 구현해 봅시다.

> <FontIcon icon="fas fa-folder-open"/>`server/`<FontIcon icon="fa-brands fa-js"/>`media.js`

```js
import {AsyncLocalStorage} from 'async_hooks';

const isMobile = new AsyncLocalStorage();

export function getIsMobile() {
  return isMobile.getStore();
}

export function setIsMobile(_isMobile, callback) {
  isMobile.run(_isMobile, callback);
}
```

> <FontIcon icon="fas fa-folder-open"/>`server/`<FontIcon icon="fa-brands fa-js"/>`mediaMiddleware.js`

```js
import { setIsMobile } from "./media.js";

export async function mediaMiddleware(req, res, next) {
  const isMobile = parseUserAgent(req.headers['user-agent']);
  setIsMobile(isMobile, next);
  return;
}
```

우선 <FontIcon icon="fa-brands fa-js"/>`media.js` 라는 파일에 `AsyncLocalStorage` 라는 클래스의 인스턴스를 생성한 후, 이를 `isMobile`이라는 파일 변수로 관리합니다. `getStore` 함수는 `AsyncLocalStorage`에 저장된 값을 꺼내기 위해 사용되므로 이 기능을 사용해 getter 함수인 getIsMobile 함수를 구현합니다.

setter 함수인 `setIsMobile`에서 사용된 run 함수는 `AsyncLocalStorage`에 저장할 값을 첫 번째 인자로 받고, 콜백 함수를 두 번째 인자로 받습니다. 콜백 함수를 받는 이유는 `AsyncLocalStorage`가 컨텍스트 저장소를 관리하는 방식 때문인데, 이 저장소는 주어진 콜백 함수로부터 생성된 비동기 작업에 대해서만 접근이 가능합니다. 즉, 이미 run 함수를 호출해 `AsyncLocalStorage` 저장소에 특정 값을 저장했다고 하더라도 콜백 함수로부터 파생된 작업이 아닌 외부 작업이라면 저장소에 접근하지 못합니다.

따라서, `AsyncLocalStorage`에 `isMobile` 정보를 저장하는 역할을 담당하는 `mediaMiddleware` 미들웨어를 가장 앞단에 위치시킨다면 클라이언트 사이드에서와 유사하게 파일 변수를 위치에 구애받지 않고 자유롭게 사용할 수 있습니다. 이제 우리는 `mediaMiddleware` 이후의 모든 서버 작업에 대해 `isMobile`을 원하는 곳에서 자유롭게 사용할 수 있게 되었습니다. 컨텍스트가 공유되는 문제도 더 이상 걱정할 필요가 없습니다.

---

## 환경에 상관없이 파일 변수를 자유롭게 다루려면 어떻게 해야 하나요?

우리는 지금까지 클라이언트 사이드와 서버 사이드에서 각각 파일 변수를 활용하는 방법에 대해 살펴봤습니다. 그런데 위 예시들에서 살펴봤다시피 클라이언트에서 사용되는 파일 변수와 서버에서 사용되는 파일 변수를 각기 다른 파일에 다른 방법으로 선언해서 사용하다 보니 파일 변수를 사용할 때 어떤 환경인지를 항상 신경 써줘야 하는 부분이 불편해 보입니다.

또한 `isMobile`이라는 같은 의미를 가지는 변수를 클라이언트에서는 `window.navigator.userAgent` 라는 정보를 통해 초기화하고 서버에서는 `req.headers['user-agent']` 라는 ‘다른 정보’를 통해 초기화한다는 점도 마음에 걸립니다. 이왕이면 서버와 클라이언트 환경 모두에서 같은 정보를 바라보면 좋을 것 같습니다.

파일 변수를 환경과 상관없이 한 곳에서 관리하고, 서버와 클라이언트에서 동일한 값을 가지도록 만들 수는 없을까요? 지금부터 저희 팀에서 사용하는 방법을 소개하겠습니다.

### 1. 클라이언트와 서버에서 모두 사용할 파일 변수를 정의합니다.

우선 파일 변수 `isMobile`을 아래와 같은 UserAgent 클래스의 인스턴스로 정의하겠습니다. 전체 코드는 다음과 같으며, 아래에서 더 자세하게 살펴보겠습니다.

> media.js

```js

const IS_CLIENT = typeof window !== 'undefined';

class UserAgent {
  #isMobileClient; // Boolean
  #isMobileServer; // AsyncLocalStorage

  public getIsMobile() {
    if(IS_CLIENT) {
      return this.#isMobileClient;
    } else {
      return this.#isMobileServer.get();
    }
  }

  public setIsMobileClient(_isMobile) {
    this.#isMobileClient = _isMobile;
  }

  public setIsMobileServer(_isMobile, callback) {
    if(!this.#isMobileServer) {
      this.#isMobileServer = new AsyncLocalStorage();
    }
    this.#isMobileServer.run(_isMobile, callback);
  }
}

export const isMobile = new UserAgent();
```

```js
export const isMobile = new UserAgent();
```

이전 예시들과는 달리 임의로 정의한 `UserAgent`이라는 클래스의 인스턴스로 파일 변수를 관리하도록 변경되었습니다. 이는 한 곳에서 ‘클라이언트의 isMobile’과 ‘서버의 isMobile’ 값을 각각 별도로 관리하기 위함인데요. 서버에서는 요청별로 별도의 컨텍스트를 유지하기 위해 `AsyncLocalStorage`를 사용해야 하지만 클라이언트에서는 해당 클래스가 지원되지 않고, 클라이언트에서는 단순 Boolean 필드로 관리할 수 있지만 이 경우 서버에서 컨텍스트가 분리되지 않기 때문에 불가피하게 별도로 관리해야 하는 부분입니다.

따라서 서버의 `isMobile` 값은 클래스의 `isMobileServer` 필드로 관리하고 클라이언트는 `isMobileClient` 필드로 관리하도록 구현하고, `private(#)`으로 선언하여 내부 속성에 직접 접근할 수 없도록 정의합니다. 필드 자체는 별도로 관리하나 이후 과정에서 두 필드가 같은 값을 가질 수 있도록 처리할 예정입니다.

```js
public getIsMobile() {
  if(IS_CLIENT) {
    return this.#isMobileClient;
  } else {
    return this.#isMobileServer.get();
  }
}
```

내부적으로는 isMobileServer와 isMobileClient 두 필드로 나눠서 값을 관리하지만, 실제로 `getIsMobile` 함수를 호출해 값을 사용하는 곳에서는 현재 환경을 알 필요가 없도록 함수 내부에서 분기 처리합니다.

```js
public setIsMobileClient(_isMobile) {
  this.#isMobileClient = _isMobile;
}

public setIsMobileServer(_isMobile, callback) {
  if(!this.#isMobileServer) {
    this.#isMobileServer = new AsyncLocalStorage();
  }
  this.#isMobileServer.run(_isMobile, callback);
}
```

`isMobile` 값을 할당해 주는 `setIsMobile` 함수는 아쉽게도 서버용 함수와 클라이언트용 함수 두 개로 분리되었습니다. 이는 서버 사이드의 경우 값 초기화를 위해 반드시 `callback` 함수가 필요하기 때문입니다.

### 2. 서버값을 클라이언트에 넘겨줍니다.

위와 같이 파일 변수를 정의해 줬다면 이젠 파일 변수를 초기화하는 setter 함수들을 어느 위치에서 어떻게 호출해 줘야 서버와 클라이언트가 같은 값을 가질 수 있는지 고민해야 합니다. 서버의 setter 함수를 호출하는 위치는 매우 간단합니다. 서버 사이드를 설명할 때 언급했듯이 가장 앞단에 있는 미들웨어에서 isMobile 값을 초기화해 주면 됩니다.

> mediaMiddleware.js

```js
import { isMobile } from "./media.js";

export async function mediaMiddleware(req, res, next) {
  const _isMobile = parseUserAgent(req.headers['user-agent']);
  isMobile.setIsMobileServer(isMobile, next);
  return;
}
```

문제는 서버에서 Request 헤더의 값을 보고 판단한 `isMobile` 값을 클라이언트 사이드와 공유할 수 있는 방법입니다. 클라이언트의 `window.navigator.userAgent` 값을 활용하지 않는 것이 우리의 목표니까요. 방법에는 여러 가지가 있겠지만, 이 글에서는 <FontIcon icon="iconfont icon-nextjs"/>Next.js의 `_document`를 활용하는 방법을 소개하겠습니다.

**_document**는 <FontIcon icon="iconfont icon-nextjs"/>Next.js가 서버 환경에서 HTML을 렌더링할 때 `<html>`과 `<body>` 태그를 업데이트하는 기능을 제공해 줍니다. 그리고 _document 내의 로직은 어디까지나 서버 환경에서 실행되기 때문에, 유저의 Request 정보를 가져오고 또 조작하는 것도 가능합니다.

따라서 아래와 같이 미들웨어에서 isMobile 여부를 유저의 request 객체에 저장하는 코드를 추가하고,

> mediaMiddleware.js

```js
import { isMobile } from "./media.js";

export async function mediaMiddleware(req, res, next) {
  const _isMobile = parseUserAgent(req.headers['user-agent']);
  isMobile.setIsMobileServer(isMobile, next);
+ req.isMobile = isMobile;
  return;
}
```

`_document`에서 Request 객체에 저장된 isMob`i`le 정보를 꺼낸 후 window 객체에 `isMobile` 정보를 저장하는 인라인 스크립트를 작성합니다. 이로써 클라이언트 환경에서 스크립트가 실행될 때 window 객체에서 서버의 `isMobile` 정보를 참조할 수 있습니다.

::: info

실제로 유저에게 보이는 HTML에 해당 스크립트가 추가되는 것이기 때문에, 파일 변수로 관리되는 변수가 보안에 민감한 정보라면 암호화를 해주는 등의 처리가 필요합니다. 본 예시에서는 보안이 크게 중요하지 않은 `isMobile` 정보이기 때문에 암호화를 고려하지 않았습니다.

:::

> <FontIcon icon="fa-brands fa-react"/>`_document.tsx`

```tsx
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const isMobile = ctx?.req?.isMobile; // 유저의 Request 객체에서 isMobile 정보를 가져옵니다.
 
    return {
      ...initialProps,
      isMobile,
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          // 클라이언트 사이드에서 실행될 인라인 스크립트를 주입합니다.
          <script
            dangerouslySetInnerHTML={{
              __html: >`(function(){window.isMobile='${
                this.props.isMobile
              }'})()`,
            }}
          />
        </Head>
        ...
      </Html>
    )
  }
}
```

window 객체에 isMobile을 추가했다면 이제 거의 다 왔습니다. 클라이언트 사이드에서 파일 변수를 초기화하기 위해 모든 페이지에 대해 항상 우선으로 실행되는 `_app`에서 다음과 같이 클라이언트 setter 함수를 호출할 수도 있습니다.

> <FontIcon icon="fa-brands fa-react"/>`_app.tsx`

```tsx
import { isMobile } from "./media.js";

IS_CLIENT && isMobile.setIsMobileServer(window.isMobile);
```

하지만 저는 싱글턴 패턴을 활용해 클라이언트 setter 함수를 생략하고, 전역 _app에서 초기화해 주는 대신 실제로 isMobile을 최초로 참조할 때 값을 초기화해 주도록 구현해 보겠습니다.

> media.js

```js
class UserAgent {
  ...

  public getIsMobile() {
    if(IS_CLIENT) {
+      if(!this.#isMobileClient) {
+        this.#isMobileClient = window.isMobile;
+        delete window.isMobile;
+      }
      return this.#isMobileClient;
    } else {
      return this.#isMobileServer.get();
    }
  }

>-  public setIsMobileClient(_isMobile) {
>-    this.#isMobileClient = _isMobile;
>-  }
}
```

window 객체에서 isMobile 값을 한 번 꺼낸 이후에는 다시 해당 값을 참조할 일이 없기 때문에 window 객체에서 isMobile 필드 자체를 제거하는 코드도 추가했습니다.

이로써 우리는 서버와 클라이언트에서 파일 변수가 같은 값을 가질 수 있도록 구현했으며, 클라이언트 사이드인지 서버 사이드인지를 전혀 신경 쓰지 않고 어디에서든지 `getIsMobile()` 함수만 호출하면 동일한 파일 변수 값을 참조할 수 있게 되었습니다. 환경에 상관없이 파일 변수를 자유롭게 다룰 수 있게 되었습니다.

> <FontIcon icon="fas fa-folder-open"/>`server/`<FontIcon icon="fa-brands fa-js"/>`some-middleware.js`

```js
import { getIsMobile } from "./media.js";

export async function someMiddleware(req, res, next) {
  // 서버에서 getIsMobile을 호출하면 파일 변수 값을 참조할 수 있습니다.
  const isMobile = getIsMobile();

  if(isMobile) {
    ...
  }
  return;
}
```

> <FontIcon icon="fas fa-folder-open"/>`client/`someComponent.js

```js
import { getIsMobile } from "./media.js";

export function someComponent() {
  // 클라이언트에서도 getIsMobile을 호출하면 파일 변수 값을 참조할 수 있습니다.
  const isMobile = getIsMobile();

  if(isMobile) {
    ...
  }
}

```

---

## 마무리

지금까지 파일 변수란 무엇이고, 어떻게 활용할 수 있는지 알아보았습니다. 물론 여기에서 소개해 드린 활용 방법들은 정답이 아닙니다. 예시에서는 getter와 setter를 별도로 정의했지만 실제로는 변수 자체를 export 해서 사용해도 됩니다. 파일 변수로 관리하고자 하는 값이 어떤 성격의 값이며 어떻게 관리되면 좋은지에 따라 활용법은 달라질 수 있습니다.
그리고 당연하게도 파일 변수가 Redux를 완전히 대체할 수는 없습니다. 실제로 저희 팀에서 기존에 Redux로 관리되던 값을 파일 변수로 관리하도록 변경한 부분도 일부분에 불과합니다. 파일 변수로 관리할 수 있는 값이 무엇인지 깊이 생각해 볼 필요가 있습니다.

이 글을 통해 여러분에게 전해드리고 싶었던 것은 Redux가 만능의 도구가 아니라는 것입니다. 우리가 웹 프로그래밍을 처음 접하게 되면 Redux가 마치 전역으로 상태 값을 관리할 수 있는 가장 뛰어난 방법인 것처럼 착각할 수 있습니다. 하지만 프로그래밍 세계에서는, 특히 웹 프로그래밍의 세계에서는 궁극의 정답이라는 것은 존재할 수 없으며 특정 상황에 적절한 도구를 취사선택해서 사용할 수 있을 뿐입니다. 꾸준히 발전하는 웹 생태계로 인해 오늘의 정답이 내일의 오답이 될 수도 있죠.

우리는 프로그래머로서 언제든 상황에 따라 다른 도구를 선택할 수 있는 역량이 필요합니다. 이 글에서는 여러분에게 **파일 변수**라는, 특정 상황에서 사용할 수 있는 도구가 하나 존재한다는 것을 소개했습니다. 여러분의 코딩 생활에 많은 도움이 되었으면 좋겠습니다.

---

## 출처

<SiteInfo
  name="Blogged Answers: Redux - Not Dead Yet!"
  desc="Some clarification on what's going on with Redux"
  url="https://blog.isquaredsoftware.com/2018/03/redux-not-dead-yet/"
  logo="https://blog.isquaredsoftware.com/images/favicon.ico?2016-09-13"
  preview="https://blog.isquaredsoftware.com/images/logo.png"/>

```component VPCard
{
  "title": "Asynchronous context tracking | Node.js v22.7.0 Documentation",
  "desc": "These classes are used to associate state and propagate it throughout callbacks and promise chains. They allow storing data throughout the lifetime of a web request or any other asynchronous duration. It is similar to thread-local storage in other languages.",
  "link": "https://nodejs.org/api/async_context.html#asynchronous-context-tracking",
  "logo": "https://nodejs.org/static/images/favicons/favicon.png",
  "background": "rgba(90,129,71,0.2)"
}
```

<SiteInfo
  name="DublinCity/AsyncLocalStorage · GitHub"
  desc="AsyncLocalStorage. GitHub Gist: instantly share code, notes, and snippets."
  url="https://gist.github.com/DublinCity/95df459847e743cc7071d929e5e29b1c"
  logo="https://avatars.githubusercontent.com/u/31264833?v=4"
  preview="https://github.githubassets.com/assets/gist-og-image-54fd7dc0713e.png"/>

<SiteInfo
  name="ES modules: A cartoon deep-dive - Mozilla Hacks - the Web developer blog"
  desc="ES modules bring an official, standardized module system to JavaScript. With the release of Firefox 60 in May, all major browsers will support ES modules, and there is current work ..."
  url="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/"
  logo="https://hacks.mozilla.org/favicon.ico"
  preview="https://hacks.mozilla.org/wp-content/uploads/2018/03/08_loader_as_puppeteer_2.png"/>


---

<TagLinks />