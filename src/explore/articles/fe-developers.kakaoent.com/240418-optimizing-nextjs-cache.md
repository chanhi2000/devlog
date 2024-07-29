---
lang: ko-KR
title: "Next.js 캐싱으로 웹 서버 성능 최적화"
description: "Article(s) > Next.js 캐싱으로 웹 서버 성능 최적화"
icon: iconfont icon-nextjs
category: 
  - Node.js
  - Next.js
  - Article(s)
tag: 
  - blog
  - fe-developers.kakaoent.com
  - node
  - nodejs
  - node-js
  - next
  - nextjs
  - next-js
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Next.js 캐싱으로 웹 서버 성능 최적화"
    - property: og:description
      content: "Next.js 캐싱으로 웹 서버 성능 최적화"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/fe-developers.kakaoent.com/240418-optimizing-nextjs-cache.html
prev: /programming/js-next/articles/README.md
date: 2024-05-03
isOriginal: false
cover: https://fe-developers.kakaoent.com/static/64f999e746db02b310c7a08bb93709ac/afa5c/thumbnail.png   
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Next.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-next/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

---

<SiteInfo
  name="Next.js 캐싱으로 웹 서버 성능 최적화 | 카카오엔터테인먼트 FE 기술블로그"
  desc="Next.js의 Full Route Cache를 적극 활용함으로써, 서버 렌더링에 사용되는 CPU 리소스를 최소화한 경험을 공유합니다."
  url="https://fe-developers.kakaoent.com/2024/240418-optimizing-nextjs-cache/"
  logo="https://fe-developers.kakaoent.com/favicon-32x32.png?v=44803cb16c1e2debd3984cf2e8cb2ded"
  preview="https://fe-developers.kakaoent.com/static/64f999e746db02b310c7a08bb93709ac/afa5c/thumbnail.png"/>

올해 초 저희 팀에서는 신규 커머스 서비스를 오픈했습니다. 아무래도 커머스에서는 SEO가 중요하다보니 `Next.js` 의 App Router를 사용해서 SSR(Server Side Rendering)을 구성했는데요.

![[<FontIcon icon="fas fa-globe"/>fanstore.melon.com](https://fanstore.melon.com/ko/malls/1210462545352527872/products)](https://fe-developers.kakaoent.com/static/2c329b8ae854e8f903b58938529d79dc/712f7/fanstore.png)

오픈전 부하테스트 과정에서 예상보다 낮은 TPS(Transaction Per Second)가 확인되어 당황했었습니다.
이 글에서는 저희 팀이 `Next.js`의 Full Route Cache를 적극 활용함으로써, 서버 렌더링에 사용되는 CPU 리소스를 최소화한 경험을 소개합니다.

[[toc]]

---

## 웹 서버의 성능은 왜 중요할까요?

축구경기에서 좋은 패스를 받은 공격수가 슛을 느리게 하는 바람에 골을 놓치는 경우가 종종 있는데요. 마찬가지로 웹 페이지에서도 좋은 컨텐츠, 좋은 상품을 느리게 로딩하는 바람에 고객을 놓치는 사례를 쉽게 확인할 수 있습니다.

- [Pinterest는 로딩속도를 40% 개선한 후, 트래픽이 15% 증가하고 회원가입이 15% 증가했습니다. (<FontIcon icon="fa-brands fa-medium"/>`pinterest-engineering`)](https://medium.com/pinterest-engineering/driving-user-growth-with-performance-improvements-cfc50dafadd7#.wwimdmkpp)
- [<FontIcon icon="fas fa-globe"/>Amazon은 로딩속도가 1초 빨라지면, 매출이 68억달러가 증가한다고 발표했습니다.](https://zdnet.co.kr/view/?no=20190418142445)
- [<FontIcon icon="fas fa-globe"/>온라인 쇼핑몰의 빠른 로딩속도는 사이트의 신뢰도까지 향상 시킨다는 통계도 있습니다.](https://neilpatel.com/blog/loading-time/)

웹 서버의 성능은 당연하게도 **웹페이지의 로딩속도**를 결정하는 중요한 요소 중 하나입니다. 웹 페이지 요청 과정을 표현한 아래 다이어그램에서 노란색 부분, 즉 [<FontIcon icon="fas fa-globe"/>TTFB(Time to First Byte)](https://web.dev/articles/ttfb?hl=ko)에 해당하는 영역이 웹 서버의 성능으로부터 영향을 받습니다.

![[<FontIcon icon="fa-brands fa-firefox"/>developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Navigation_timing)](https://fe-developers.kakaoent.com/fb6f7d36d4bf64e68cc3417a4fecfa26/performance-navigation-timing-timestamp-diagram.svg)

승리를 하는 데에 (이익을 내는 데에) 골을 잘 넣는 것만큼이나 중요한 게 골을 덜 먹히는 것인데요. 웹 서버의 성능을 개선하면 동일한 수준의 트래픽을 처리하는 데 필요한 **인프라 비용**을 낮춤으로써 이익에 기여할 수 있습니다.

---

## 웹 서버의 성능을 향상시키기 위해서 우리는 무엇을 해야 할까요?

[웹 서버의 성능을 향상시키기 위해 알려진 방법 (<FontIcon icon="fa-brands fa-medium"/>`@surksha8`)](https://medium.com/@surksha8/10-proven-strategies-to-boost-your-next-js-app-performance-2de166dcff50)들은 여러 가지 있지만, 우리의 에너지는 한정적이기 때문에 효과가 가장 높은 방법을 선택적으로 적용해야 합니다. 그러기 위해 앞에서 잠깐 언급한 저희 팀 신규 서비스의 특징을 살펴봤습니다.

1. 공연 티켓 구매자들에게만 공연 관련 상품을 판매하는 서비스다 보니 **상품의 개수가 적습니다.** (그마저도 공연이 끝나면 사라집니다.)
2. 핫한 공연은 오픈 시점에 **갑자기 엄청난 트래픽이 발생**할 수 있습니다.
3. 트래픽은 **상품 목록, 상품 상세 페이지에 집중**될 것으로 예상됩니다.
4. 상품 목록, 상품 상세 페이지는 상품 재고 값을 제외하면 **데이터 변경이 거의 없습니다.**

이미 눈치채셨겠지만, 저희는 상품 관련 페이지의 서버 렌더링 결과에 캐싱을 적용하는 것이 가장 효과가 클 것이라 의견을 모았습니다. 상품의 개수가 적고, 트래픽이 발생할 때 특정 상품으로 집중되는 특징은 [<FontIcon icon="fas fa-globe"/>Cache Hit Ratio](https://stackpath.com/edge-academy/what-is-cache-hit-ratio/)에 너무나 유리한 조건입니다.

---

## Next.js의 캐싱 매커니즘

Next.js는 13 버전에서 [<FontIcon icon="iconfont icon-nextjs"/>App router](https://nextjs.org/docs/app)와 함께 [<FontIcon icon="iconfont icon-nextjs"/>새로운 캐싱 매커니즘](https://nextjs.org/docs/app/building-your-application/caching)을 소개했습니다.

| 매커니즘 | 대상 | 장소 | 목적 | 기간 |
| ---: | :--- | :---: | :--- | :--- |
| Request Memoization | fetch 함수의 return값 | 서버 | React Component tree에서 data의 재사용 | request 생명주기 동안 | 
| Data Cache | Data | 서버 | 유저 요청이나 deployment에 의해 저장된 데이터 | 영구적(revalidate 가능) |
| Full Route Cache | HTML, RSC Payload | 서버 | **렌더링 cost 감소 및 성능 향상** | 영구적(revalidate 가능) |
| Router Cache | RSC Payload | 클라이언트 | 네비게이션에 의한 서버 요청 감소 | 세션 또는 정해진 시간 동안 |

이 글에서는 웹 서버의 성능에 집중하고 있기 때문에, 서버에 적용되는 캐시 매커니즘에 대해서만 간단히 소개하겠습니다.

### Request Memoization

웹 서버로 페이지 요청이 들어오면 페이지에 필요한 데이터들을 fetch하게 되는데, 이때 동일한 endpoint로의 API fetch를 여러 컴포넌트에서 수행할 필요가 있다면 Request Memoization이 동작합니다. (React가 `fetch` 함수를 확장해놓았기 때문에 별도 설정은 필요 없습니다.)

상위 컴포넌트에서 API fetch 결과를 prop drilling 하는것 대신, 각 컴포넌트에서 fetch를 수행하도록 구현해도 실제 API 요청은 최초 1회만 전송되고 나머지는 응답값을 재사용합니다.

![[<FontIcon icon="iconfont icon-nextjs"/>request-memoization](https://nextjs.org/docs/app/building-your-application/caching#request-memoization)](https://fe-developers.kakaoent.com/static/43b14b536ac3b3d14cf6640d30ef9550/b17f8/deduplicated-fetch-requests.jpg)

Request Memoization은 서버에서 호출되는 `GET` 메서드에만 적용되므로, `POST`나 `DELETE` API 또는 클라이언트에서 호출되는 API에는 적용되지 않습니다. 그리고 한 번의 서버 렌더링 동안만 유효하기 때문에 따로 `revalidate` 할 필요가 없을 뿐 아니라 할 수도 없습니다.

### Data Cache

우리가 일반적으로 생각할 수 있는 API 캐싱입니다.

```ts
// Revalidate at most every hour
fetch('https://...', { next: { revalidate: 3600 } })
```

`Next.js`가 확장해놓은 `fetch` 함수에 `next.revalidate` 옵션을 넘기면 Data Cache가 동작합니다. 성공적으로 데이터를 가져왔다면 그 응답값을 저장해두었다가 동일한 경로로 `fetch` 함수를 실행할 때 실제 API 호출은 건너뛰고 저장해놓은 응답값을 반환합니다.

하나의 요청 동안만 유효한 Request Memoization과 다르게 Data Cache는 일정 시간 동안에 웹 서버로 들어오는 모든 요청에 대해 동작합니다. 만약 `next.revalidate`를 1초로 설정했다면, 1초에 1000명의 사용자가 접속해도 실제 API 요청은 1회 전송됩니다.

![[<FontIcon icon="iconfont icon-nextjs"/>caching#revalidating](https://nextjs.org/docs/app/building-your-application/caching#revalidating-1)](https://fe-developers.kakaoent.com/static/af82b51d26f067e6ca3b50d8ed107789/b17f8/time-based-revalidation.jpg)

Data Cache를 설명하는 위 이미지에서 한 가지 짚고 싶은 부분은 revalidate 시간이 지나더라도 첫 요청은 캐싱된 값을 (STALE 상태여도) 반환한다는 것입니다. 반환 후 백그라운드에서 API를 호출해서 값을 업데이트하는데, 개발자 의도와 다르게 동작할 수 있기 때문에 캐시를 적용할 때 주의가 필요합니다.

> `router.refresh`로는 Data Cache가 `revalidate`되지 않고, [<FontIcon icon="iconfont icon-nextjs"/>revalidatePath](https://nextjs.org/docs/app/building-your-application/caching#revalidatepath)를 사용해야 합니다. (이때는 즉시 `revalidate` 되기 때문에, 다음 첫 요청에도 새로운 값을 반환합니다.)

### Full Route Cache

웹 서버의 성능을 눈에 띄게 향상시키려면 Full Route Cache를 적용해야 합니다. 서버 렌더링 과정에서 웹 서버의 리소스(특히 CPU)를 대부분 사용하게 되는데, Full Route Cache는 서버 렌더링 결과를 재사용함으로써 이를 줄일 수 있습니다.

![[<FontIcon icon="iconfont icon-nextjs"/>static-and-dynamic-rendering](https://nextjs.org/docs/app/building-your-application/caching#static-and-dynamic-rendering)](https://fe-developers.kakaoent.com/static/48739fa056e8eb0f04b8ded88308de87/b17f8/static-and-dynamic-routes.jpg)

Full Route Cache를 적용하려면 페이지를 Static 렌더링 되도록 구성해야 합니다. 다시 말해 [<FontIcon icon="iconfont icon-nextjs"/>Dynamic Function](https://nextjs.org/docs/app/building-your-application/caching#dynamic-functions)을 사용하지 않아야 하는데, 그렇지 않으면 그림과 같이 Full Route Cache 단계가 SKIP 됩니다. Full Route Cache를 좀 더 자세히 알고 싶다면 [<FontIcon icon="iconfont icon-nextjs"/>공식문서](https://nextjs.org/docs/app/building-your-application/caching#full-route-cache)를 참고하시길 바랍니다.

---

## Next.js의 캐싱 적용하기

### 1. 캐싱 대상 정하기

개인화된 페이지(장바구니, 결제 등)은 폐쇄형 쇼핑몰 특성상 트래픽이 적을 뿐 아니라, 동일한 응답을 내려줘서는 안 되기 때문에 캐싱 적용 대상에서 제외했습니다. 앞서 말했듯 상품 목록/상세 페이지는 비로그인 상태에서도 누구나 조회 가능하고 트래픽이 몰릴 가능성이 있기 때문에 아주 적절한 대상입니다.

![상품 목록 페이지](https://fe-developers.kakaoent.com/static/8bb8cfa0c38eb16056dfbfb184503196/587b0/fanstore-product-list.png)

![상품 상세 페이지](https://fe-developers.kakaoent.com/static/26b7112ec5e50e997392a3df747ff9b5/587b0/fanstore-product-detail.png)

### 2. 변경 범위 파악 및 테스트 코드 보강

Full Route Cache가 동작하게 하려면 [<FontIcon icon="iconfont icon-nextjs"/>Dynamic routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)에 [<FontIcon icon="iconfont icon-nextjs"/>ISR](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration)을 적용하고, 사용 중인 [<FontIcon icon="iconfont icon-nextjs"/>Dynamic Function](https://nextjs.org/docs/app/building-your-application/caching#dynamic-functions)을 제거해야 했습니다. `cookies`, `headers`, `pathParams`, `searchParams` 모두 여기저기에서 사용 중이다 보니 광범위한 변경이 필요했고, 안정적인 변경을 위해서 단위를 쪼개고 관련해서 테스트 코드를 보강했습니다.

### 3. AS-IS 부하 테스트

성과를 수치화하는 것은 직장인에게 중요한 덕목입니다. 결과에 영향을 줄 수 있는 조건들을 통제하여 부하테스트를 진행했습니다. (with. [<FontIcon icon="fas fa-globe"/>nGrinder](https://naver.github.io/ngrinder/))

![곧 괜찮아 질거야](https://fe-developers.kakaoent.com/static/38e2dae2f2fe6c8bbfd7a45839d2feac/d43b4/ngrinder.png)

### 4. 캐시 디버깅 컴포넌트 구현

브라우저에 렌더링 된 페이지가 Full Route Cache를 HIT 했는지를 확인하기 위해 간단한 서버 컴포넌트 하나를 추가했습니다.

```tsx
function DebugCache({path}: {path: string}) {
  return (
    <div>
      {dayjs().valueOf()}
      <RevalidateButton path={path}/>
    </div>
  );
}
```

```tsx
'use client'
function RevalidateButton({ path }: {path: string}) {
  return <button onClick={() => revalidateFullRouteCache(path)}>revalidate</button>
}
```

```tsx
'use server'
import { revalidatePath } from 'next/cache';

export async function revalidateFullRouteCache(path) {
  if (path) {
    revalidatePath(path, 'layout');
  }
}
```

브라우저에서 새로고침을 해도 `dayjs().valueOf()`값이 동일하다면 Full Route Cache가 HIT 했다고 판단할 수 있습니다.

### 5. 코드 변경

목표는 `generateStaticParams`를 통해서 [<FontIcon icon="iconfont icon-nextjs"/>ISR](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration) 방식의 static route로 바꿈으로써 Full Route Cache를 적용하는 것입니다.

### 5.1 URL PATH

저희 서비스는 다국어를 지원하며 url path에 언어값이 포함되어있습니다. 지원하는 언어는 고정돼 있기 때문에, `generateStaticParams`에 바로 적용해서 static 페이지로 만듭니다.

```tsx
// app>[lang]>layout.tsx
export function generateStaticParams() {
  return SUPPORTED_LANGS.map(locale => ({ locale }));
}
```

상품 상세 페이지도 url path에 상품 ID 값이 포함되어있습니다. 하지만 다국어와는 다르게 상품의 ID 값은 고정된 값이 아니기 때문에 `generateStaticParams`에서 빈 배열을 리턴해줍니다. 이렇게 하면 ISR로 동작하게됩니다.

```tsx
// app>[lang]>(static)>상품상세>[id]>page.tsx
export async function generateStaticParams() {
  return [];
}
```

그리고 상품 목록 페이지에서는 태그를 선택해서 상품들을 조회할 수 있는데요.

![](https://fe-developers.kakaoent.com/static/e4e7d3deedc51ecb9623e90bd8bfc119/9d76a/fanstore-filter.png)

선택된 태그를 기존에 `searchParams`로 다뤘는데, static route를 위해서 `pathParams`로 변경했습니다.

`/products?tagId={tagId}` -> `/{tagId}/products`

그렇게 하면 상품 상세 페이지와 동일하게 `generateStaticParams`를 사용해서 ISR로 동작하게 할 수 있습니다.

```tsx
// app>[lang]>(static)>상품목록>[tagId]>page.tsx
export async function generateStaticParams() {
  return [];
}
```

### 5.2 Dynamic Functions

저희 서비스는 여러 가지 인증 체계를 사용하기 때문에 일관된 인증 처리를 위해 [<FontIcon icon="iconfont icon-nextjs"/>middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)에서 `cookies`, `headers`, `searchParams`를 사용해서 전처리하고 있습니다. 모두 dynamic function이기 때문에 middleware 대신 클라이언트에서 전처리하도록 AuthProvider 추가했습니다.

```tsx
// before
// middleware(Server)에서 Client로 마이그레이션 돼야 하는 코드 예시입니다.
export function middleware(request: NextRequest) {

  const { nextUrl } = request;
  nextUrl.searchParams.set(SEARCH_PARAM_KEYS.REGION_TYPE, regionType);
  
  const responseForSetCookie = NextResponse.redirect(nextUrl);
  responseForSetCookie.cookies.set(COOKIE_KEYS.USER_TYPE, getUserType());

  ...
  ...

  return responseForSetCookie;
}
```

```tsx
// after
'use client';

function AuthProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    document.cookie = `${COOKIE_KEYS.USER_TYPE}=${getUserType()}; domain=.melon.com; path:/;`;
    
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(SEARCH_PARAM_KEYS.REGION_TYPE, getRegionType());
    
    ...
    ...

  }, []);

  return children;
}
```

이외에도 API를 호출하는 함수에서 인증을 위해 사용하고 있는 dynamic function을 (인증이 필요 없는) 상품 목록/상세 페이지에서는 사용하지 않도록 처리했습니다.

```tsx
// before
// API 호출하는 부분에서 제거돼야 하는 코드 예시입니다.
  const { cookies } = await import('next/headers');
  const cookieStore = cookies();

  return {
    [HEADER_KEYS.CHANNEL_TYPE]: cookieStore.get(COOKIE_KEYS.CHANNEL_TYPE)?.value as ChannelTypes,
    [HEADER_KEYS.REGION_TYPE]: cookieStore.get(COOKIE_KEYS.REGION_TYPE)?.value as RegionTypes,
  };
```

Header/Footer 컴포넌트에서는 인증이 필요한(개인화된) 데이터가 사용되고 있었습니다. 때문에 캐시 적용이 어려워서 서버 컴포넌트에서 클라이언트 컴포넌트로 변경했습니다. 이렇게 되면 Header와 Footer가 클라이언트에서 dynamic import 되는데, Layout Shift가 발생하지 않도록 Placeholder 컴포넌트도 추가해 줬습니다.

```tsx
const Footer = dynamic(
  () => import('@/common/Footer.client'),
  { ssr: false, loading: () => <ComponentPlaceholder /> },
);
```

### 5.3 Full Route Cache 적용

static route가 가능하게 되었다면, `layout.tsx`에 [<FontIcon icon="iconfont icon-nextjs"/>revalidate](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate) 시간을 설정해서 Full Route Cache가 동작하도록 해줍니다.

```tsx
// app>[lang]>(static)>상품상세>[id]>layout.tsx
export const revalidate = 1; // seconds
```

::: info

Full Route Cache는 Data Cache가 HIT 되었을 때에만 동작합니다. 따라서 Full Route Cache를 적용하려는 페이지의 모든 `fetch`에는 `next.revalidate` 값이 (Full Route Cache의 revalidate 값보다 크거나 같게) 설정돼야 합니다.

next.js [14.0.2 (<FontIcon icon="iconfont icon-github"/>`vercel/next.js`)](https://github.com/vercel/next.js/releases/tag/v14.0.2-canary.3) 이전 버전에서 [<FontIcon icon="iconfont icon-nextjs"/>standalone](https://nextjs.org/docs/pages/api-reference/next-config-js/output#automatically-copying-traced-files) 빌드 하면, [<FontIcon icon="fa-brands fa-firefox"/>304](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304) 응답을 무한으로 캐싱 하는 [버그 (<FontIcon icon="iconfont icon-github"/>`vercel/next.js`)](https://github.com/vercel/next.js/pull/57737)가 존재합니다. 저희는 13대 버전을 사용하고 있기 때문에, major 버전업 대신 해당 부분만 몽키패치해서 해결했습니다.

:::

### 효과는 굉장했다

Full Route Cache 적용 외에도 정적 리소스들(js, css)을 Load Balancer에서 캐싱하도록 적용한 후에 부하테스트를 진행했습니다.

![*before - 평균 TPS 34*](https://fe-developers.kakaoent.com/static/65b8d5d61ed01b63cbd17bee3f02afdc/d30ee/result-before.png    )

![*after - 평균 TPS 220*](https://fe-developers.kakaoent.com/static/5d5eb3c9c50690c0d8d1b38dc20078c9/d30ee/result-after.png)

여러 번의 부하테스트 비교군 중 대표 한 쌍을 가져와 봤습니다. 다른 조건의 부하테스트도 비슷한 수준의 차이를 보입니다. 적게는 5배에서 많게는 10배까지도 TPS가 개선된 것을 확인할 수 있었습니다. TPS의 개선은 당연하게도 응답시간(Mean Test Time)과 CPU 사용률이 개선되었음을 의미합니다.

![*before*](https://fe-developers.kakaoent.com/static/7ce47e1db33f39e258141334298f99b0/e03bf/mtt-before.png)

![*after*](https://fe-developers.kakaoent.com/static/709512ad6d82f80fe9d2e8e8a06b8692/48c0e/mtt-after.png)

### 정리

이 글에서는 자세히 다루지 않았지만 [<FontIcon icon="fa-brands fa-react"/>React Server Component](https://servercomponents.dev/)를 비롯해서 Next.js의 App Router가 아직은 공식적으로 `experimental` 단계인 기능이나 숨어있는 버그들이 있다 보니 프로덕션 단계까지 구현하는 데에 어려움이 많았습니다. 디버깅 툴이 더 고도화되면 좋겠다 생각했고, 다른 라이브러리들의 적절한 대응도 필요해 보였습니다. 그럼에도 이 글의 사례처럼 장점을 적절하게 활용한다면 골을 더 많이 넣는 공격수가 될 수 있지 않을까 생각하며 글을 마칩니다.

---

<TagLinks />