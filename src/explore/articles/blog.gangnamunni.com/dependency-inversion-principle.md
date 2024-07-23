---
lang: ko-KR
title: "외부 툴 변경에 휘둘리지 않는 서버 코드 작성기"
description: "Article(s) > 외부 툴 변경에 휘둘리지 않는 서버 코드 작성기"
icon: iconfont icon-spring
category: 
  - Java
  - Spring
  - Article(s)
tag: 
  - blog
  - blog.gangnamunni.com
  - java
  - spring
  - dip
  - dependency-inversion
  - dependency-inversion-principle
head:
  - - meta:
    - property: og:title
      content: "Article(s) > 외부 툴 변경에 휘둘리지 않는 서버 코드 작성기"
    - property: og:description
      content: "외부 툴 변경에 휘둘리지 않는 서버 코드 작성기"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/blog.gangnamunni.com/dependency-inversion-principle.html
prev: /programming/java-spring/articles/README.md
date: 2021-08-19
isOriginal: false
cover: https://blog.gangnamunni.com/_nuxt/img/ae65a45.jpg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Spring > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/java-spring/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="외부 툴 변경에 휘둘리지 않는 서버 코드 작성기"
  desc="사례로 보는, DIP를 이용한 외부 툴에 의존하지 않는 도메인 모델 설계"
  url="https://blog.gangnamunni.com/post/dependency-inversion-principle/"
  logo="https://blog.gangnamunni.com/favicon.ico"
  preview="https://blog.gangnamunni.com/_nuxt/img/ae65a45.jpg"/>

안녕하세요. 강남언니 백엔드 개발자 Joon입니다. 저는 강남언니 유저들에게 더 많은 가치를 지속적으로 전달할 수 있는 구조, 즉 지속 성장이 가능한 구조에 관심을 가지고 있습니다. 최근 제가 경험한 지속 성장 가능한 소프트웨어 구조 설계 경험을 공유하고자 글을 씁니다.

**지속 성장이 가능한 구조**란 무엇일까요? 우리가 개발하는 소프트웨어는 변경이 매우 잦습니다. 요구 사항이 바뀔 때마다 코드에 큰 변경이 필요한 소프트웨어는 지속 성장이 어려울 겁니다. 즉, **여러 요구 사항 변경에도 쉽게 적응할 수 있는 구조**가 지속 성장 가능한 구조일 것입니다.

최근 강남언니에서는 [<FontIcon icon="fas fa-globe"/>Braze](https://braze.com/)라는 외부 툴을 도입할 니즈가 생겼습니다. 외부 툴은 내부 도메인에 비해 훨씬 더 변경될 가능성이 높고, 그 변경점을 예측하기도 어렵습니다. 심지어는 아예 다른 외부 툴을 사용하겠다는 의사 결정이 있을 수도 있습니다. 그래서 Braze 관련 변경점이 생기더라도 내부 핵심 도메인 모델은 영향 받지 않도록 설계해야 했습니다. 즉, 내부 도메인 모델이 외부 툴 관련 코드에 의존하지 않도록 하는데 집중했습니다.

작업 중 여러 번의 설계 수정이 있었고, 각 설계 단계에서 지속 성장 가능한 구조를 만들기 위해 어떤 고민을 했는지를 소개하겠습니다. 지속 성장이 가능한 구조를 만들기 위해서는 신경 쓸 것이 매우 많을 텐데, 이 글에서는 그 중에서도 외부 툴에 의존하지 않는 내부 도메인 모델을 만드는 것에 집중하려 합니다.

---

## Backgrounds

각 설계 단계를 살펴 보기에 앞서 작업 배경을 먼저 소개하겠습니다. Braze란 무엇이고 왜 도입하려고 하는지, 어떤 요구 사항이 있었는지, 강남언니 API 서버는 어떤 상태인지를 확인하겠습니다.

### Braze

강남언니에서는 상담 신청이 완료되었다는 알림, 게시글에 답글이 달렸다는 알림, 이벤트 광고 등 다양한 정보를 이메일, SMS, 푸시 등을 이용해 유저에게 발송하고 있습니다. 기존에는 이러한 앱 외부 정보 전달을 강남언니 서비스 내에서 자체적으로 처리하고 있었으나, 유저들이 원하는 컨텐츠를 더 쉽게 제공하기 위해 Braze라는 외부 툴을 이용하게 되었습니다.

Braze를 이용하면 보톡스 이벤트를 많이 찾아 본 유저들에게 최근 일주일 동안 가장 많은 유저가 확인한 보톡스 이벤트를 푸시로 발송하는 등, 유저들의 관심사에 맞는 컨텐츠를 쉽게 제공할 수 있습니다.

#### Braze 도입 관련 요구사항

Braze 도입과 관련해서 두 가지 주요 요구 사항이 있었습니다.

##### 유저의 정보 수신 동의 여부를 Braze에 동기화 할 것.

Braze를 이용해 유저들에게 정보를 발송하기 위해서는 유저들이 정보 수신에 동의하는지를 확인해야 합니다. 따라서 Braze에 각 유저의 정보 수신 동의 여부를 최신 버전으로 저장해야 합니다. 서버 단에서 필요한 작업은 유저의 아래 세 가지 정보 수신 동의 여부가 수정되면 이를 Braze에도 동기화하는 것입니다.

- 광고성 푸시 수신 동의 여부
- SMS 수신 동의 여부
- Email 수신 동의 여부

##### Braze 과금 정책에 따라 비용을 최소화 할 것.

Braze는 업데이트가 요청된 필드 수에 비례해 과금하는 정책을 가지고 있습니다. 실제 업데이트가 발생하는 필드 수가 아닌 업데이트가 요청된 필드 수에 비례해 비용이 발생하므로, 정말 업데이트가 필요한 필드만 골라내어 Braze에 업데이트를 요청해야 합니다.

### 강남언니 API 서버

강남언니 백엔드에는 구 API 서버(이하 구서버)와 신 API 서버(이하 신서버)가 동시에 동작하고 있습니다. 현재 새로 만들어지는 도메인 모델은 신서버에 작성하고 있으며, 유저와 같이 오래된 도메인 모델은 구서버에 작성되어 있습니다.

Braze 활용에 필요한 유저 관련 코드는 구서버에 작성되어 있고, Braze와 관련해서 새로 작성하는 코드들은 신서버에 작성된다는 점에 주목해 주세요.

---

## Design

이제 각 설계 단계를 살펴 보겠습니다. 설계에는 크게 두 번의 변경이 있었습니다. 각 단계를 Design V1 ~ V3로 라벨링, 아래 내용들을 각 단계별로 서술하겠습니다.

- 어떻게 동작하는가?
- 왜 이렇게 설계했는가?
- 지속 성장이 가능한 구조인가?

각 단계별 다이어그램은 데이터 흐름, 혹은 프로그램 컨트롤의 흐름을 표현한 것으로, '어떻게 동작하는가?'와 함께 보시는 것을 권장 드립니다.

### Design V1

![](https://static.blog.gangnamunni.com/files/6b/6b00eb04-f97a-4a9b-91fd-a614cd9848c6.jpeg)

Braze에 동기화할 유저의 정보들은 구서버에 있으며, 구서버 API 동작 중에 값이 변경됩니다. 예를 들면, 유저가 회원 정보를 수정하면 구서버에 있는 회원 정보 수정 API가 호출될 것입니다. 이 때 유저의 정보 수신 동의 여부가 변경되면 신서버에 있는 Braze 관련 코드가 동작, Braze에 정보 수신 동의 여부를 수정하도록 요청해야 합니다.

#### 어떻게 동작하는가?

1. 구서버에서 유저의 정보 수신 동의 여부가 변경되면 Internal Event를 발행합니다.
2. Event Handler가 Internal Event를 수신, AWS SNS로 메시지를 전달합니다.
3. SNS를 구독하고 있는 SQS로 메시지가 적재됩니다.
4. 신서버의 SQS Listener가 메시지를 수신, Braze API caller method를 호출합니다.
5. Braze API caller가 Braze API를 호출해 유저의 정보 수신 동의 여부를 업데이트합니다.

#### 왜 이렇게 설계했는가?

Design V1에서 집중한 부분은 아래와 같습니다.

##### 1. 구서버의 동작이 신서버와 Braze의 통신에 영향을 받지 않도록 하기 위해, 구서버와 신서버의 통신을 비동기로 합니다.

만약 구서버와 신서버의 통신이 비동기 방식이 아니라면, 신서버와 Braze의 통신 중 문제가 발생하거나 Braze가 신서버로 반환하는 응답이 지연되는 경우 구서버의 회원 정보 수정 API도 영향을 받습니다.	여러 가지 방법 중 Amazon AWS SQS를 사용해 구서버와 신서버의 통신을 비동기로 만들었습니다.

##### 2. Braze 비용을 최소화하기 위해 각 정보 수신 동의 여부 변경을 따로 트래킹합니다.

정말 변경이 발생한 정보 수신 동의 여부 필드만 Braze에 동기화하기 위해, 각 정보 수신 동의 필드마다 SQS를 하나씩 운영합니다.

#### 지속 성장이 가능한 구조인가?

Design V1은 지속 성장이 가능하지 않은 구조입니다.

##### 1. 언뜻 보면 구서버는 Braze 컨텍스트와 완전히 분리되어 있는 것처럼 보이지만, 사실은 그렇지 않습니다.

Update 필드 수 비례 과금 체계는 Braze-specific합니다. 즉, 비용 최적화를 위해 필드별로 SQS를 두고 각 SQS에 메시지를 나누어 발행하는 것은 Braze 컨텍스트에 영향 받은 설계입니다. Braze가 아닌 다른 툴을 사용하게 되면 구서버까지 수정해야 할 가능성이 높습니다.

##### 2. 신서버에 생성한 module(`braze module`)이 충분히 작은 단위로 구성되지 않았습니다.

SQS Listener는 외부로부터 온 요청을 받아내는 인터페이스입니다. 유저의 정보 수신 동의 여부가 변경되면 Braze에 이를 알리는 것은 비즈니스 로직입니다. 현재 아예 다른 역할을 하는 두 객체가 한 layer에 뭉쳐 있어, Braze 관련 변경점이 생기면 `braze module`을 통째로 수정해야 합니다.

### Design V2

![](https://static.blog.gangnamunni.com/files/7c/7ce08538-ccd9-42cd-a0f2-5a0b84b05722.jpeg)

Design V1의 문제점을 수정하여 Design V2를 만듭니다.

#### 어떻게 동작하는가?

1. 구서버에서 유저의 정보 수신 동의 여부가 변경되면 Internal Event를 발행합니다.
2. Event Handler가 Internal Event를 수신, AWS SNS로 메시지를 전달합니다.
3. SNS를 구독하고 있는 SQS로 메시지가 적재됩니다.
4. SQS를 구독하고 있는 SQS Listener가 메시지를 수신, Logic(service)에 전달합니다.
5. Logic이 실제 변경이 발생한 필드를 구별, 해당 필드를 업데이트하는 Braze API caller method를 호출합니다.
6. Braze API caller가 Braze API를 호출해 유저의 정보 수신 동의 여부를 업데이트합니다.

#### 왜 이렇게 설계했는가?

Design V1의 문제를 어떻게 해결했는지 확인하겠습니다.

> 언뜻 보면 구서버는 Braze 컨텍스트와 완전히 분리되어 있는 것처럼 보이지만, 사실은 그렇지 않습니다.
>
> Update 필드 수 비례 과금 체계는 Braze-specific합니다. 즉, 최적화를 위해 필드별로 SQS를 두고 각 SQS에 SNS를 나누어 발행하는 것은 Braze에 영향 받은 설계입니다. Braze가 아닌 다른 툴을 사용하게 되면 수정해야 할 가능성이 높습니다.

구서버에서 Braze 컨텍스트를 떼어 내기 위해 유저의 정보 수신 동의 여부 변경 SNS를 구독하는 SQS를 하나로 두고, 어떤 정보 수신 동의 여부가 변경되더라도 Internal Event Handler가 Braze 컨텍스트에 독립된 하나의 메시지를 SNS에 전달하도록 합니다.

정말 업데이트가 필요한 정보 수신 동의 여부 필드를 구별하는 코드는 신서버에 작성되어, 구서버에는 더 이상 Braze 컨텍스트가 존재하지 않습니다. Braze가 아닌 다른 툴을 사용하더라도 유저가 정보 수신에 동의하는지 여부는 트래킹해야 할 것이므로, 다른 툴을 사용하게 되었을 때 구서버에 있는 코드는 변경될 가능성이 낮습니다.

> 신서버에 생성한 module(`braze module`)이 충분히 작은 단위로 구성되지 않았습니다.
>
> SQS Listener는 외부로부터 온 요청을 받아내는 인터페이스입니다. 유저의 정보 수신 동의 여부가 변경되면 Braze에 이를 알리는 것은 비즈니스 로직입니다.	현재 아예 다른 역할을 하는 두 객체가 한 layer에 뭉쳐 있어, Braze 관련 변경점이 생기면 `braze module`을 통째로 수정해야 합니다.

신서버의 module도 역할에 따라 더 세분화합니다. 외부와의 인터페이스 역할을 하는 SQS Listener를 `api module`에, 실제 업데이트가 발생해 Braze에 notify 해야 할 필드가 무엇인지를 구별하는 로직을 `logic module`에, Braze와 통신하는 부분을 `braze module`에 둡니다.

#### 지속 성장이 가능한 구조인가?

Design V2 역시 지속 성장이 가능하지 않은 구조입니다.

##### 1. 여전히 신서버에 생성한 module들은 요구 사항 변경에 약한 구조입니다.

앞서 말씀드렸듯이 Braze와 같은 외부 툴 관련 코드는 내부 도메인 모델에 비해 변경될 가능성이 높습니다. Braze 대신 다른 외부 툴을 사용하겠다는 비즈니스 의사 결정은 유저, 계정 등 내부 도메인 모델을 새로 만들어야 한다는 의사 결정보다 더 일어남직 합니다.

```java
public class MemberConsentLogic {

    private final BrazeMemberConsentNotifier notifier;
    
    public MemberConsentLogic(BrazeMemberConsentNotifier notifier) {
        this.notifier = notifier;
    }
    
    public void notify(MemberConsents memberConsents) {
        if (Objects.nonNull(memberConsents.getAgreeAdvtsPush()) {
            notifier.notifyAgreeAdvtsPush(memberConsents.getAgreeAdvtsPush());
        }
        if (Objects.nonNull(memberConsents.getAgreeSms()) {
            notifier.notifyAgreeSms(memberConsents.getAgreeSms());
        }
        if (Objects.nonNull(memberConsents.getAgreeEmail()) {
            notifier.notifyAgreeEmail(memberConsents.getAgreeEmail());
        }
    }
}
```

현재는 Logic이 Braze Notifier에 의존하고 있는데, 따라서 Braze 대신 다른 외부 툴을 사용하게 되면 Logic을 수정해야 합니다.	즉, `logic module`이 수정되어야 합니다.

```java
public class MemberConsentLogic {

    private final AnotherToolNotifier notifier;

    public MemberConsentLogic(AnotherToolNotifier notifier) {
        this.notifier = notifier;
    }
    
    public void notify(MemberConsents memberConsents) {
        notifier.notify(memberConsents);
    }
}
```

위와 같이 로직을 재작성해야 할 가능성이 높습니다.

### Design V3(latest)

![](https://static.blog.gangnamunni.com/files/49/49a4f475-7900-426f-ba95-815eea85d748.jpeg)

Design V2의 문제점을 수정하여 Design V3를 만듭니다.

#### 어떻게 동작하는가?

1. 구서버에서 유저의 정보 수신 동의 여부가 변경되면 Internal Event를 발행합니다.
2. Event Handler가 Internal Event를 수신, AWS SNS로 메시지를 전달합니다.
3. SNS를 구독하고 있는 SQS로 메시지가 적재됩니다.
4. SQS를 구독하고 있는 SQS Listener가 메시지를 수신, Logic(service)에 전달합니다.
5. Logic은 Notifier interface method를 호출합니다.
6. Notifier interface를 구현하는 Braze Notifier가 메시지를 수신, 실제로 변경이 일어난 필드를 구별해 Braze에 유저의 정보 수신 동의 여부를 업데이트합니다.

#### 왜 이렇게 설계했는가?

Design V2의 문제점을 다시 한 번 살펴 보겠습니다.

> 현재는 `logic module`이 `braze module`에 의존하고 있는데, 따라서 Braze 대신 다른 외부 툴을 사용하게 되면 `logic module`이 수정되어야 합니다.
> 
> ... 로직을 재작성해야 할 가능성이 높습니다.

Braze 대신 다른 외부 툴을 사용하게 되었을 때 `braze module`뿐만 아니라 `logic module`에도 변경이 생기게 되는 것이 문제인데, 이는 `logic module`이 `braze module`에 의존하기 때문입니다.

`logic module`이 의존하는 대상이 Braze-specific하기 때문에 Braze를 사용하지 않게 되면 `logic module`이 수정되어야 하는 것인데요, 그렇다면 Braze를 사용하지 않게 되었을 때 `logic module`이 수정되지 않도록 하려면 어떻게 해야 할까요?

![](https://static.blog.gangnamunni.com/files/47/47ed87a6-1b48-4bd8-aaa0-8e5ad2e5ec31.jpeg)

`MemberConsentLogic`이 어떠한 툴에 영향 받지 않는 general한, 추상적인 것에 의존하면 됩니다. 또한 그 추상적인 것을 실제로 Braze-specific하게 구현하면 됩니다. 이 때 툴이 변경되어도 `MemberConsentLogic`이 영향을 받지 않도록 하기 위해 그 추상적인 것은 `logic module` 내부에 배치하였습니다. **따라서 `logic module`과 `braze module`의 dependency 방향이 반전되게 됩니다.**

```java
public interface Notifier {
    void notify(MemberConsents memberConsents);
}
```

```java
public class MemberConsentLogic {
    private final Notifier notifier;

    public MemberConsentLogic(Notifier notifier) {
        this.notifier = notifier;
    }

    public void notify(MemberConsents memberConsents) {
        notifier.notify(memberConsents);
    }
}
```

```java
public class BrazeMemberConsentNotifier implements Notifier {
    @Override
    public void notify(MemberConsents memberConsents) {
        if (Objects.nonNull(memberConsents.getAgreeAdvtsPush()) {
            notifyAgreeAdvtsPush(memberConsents.getAgreeAdvtsPush());
        }
        if (Objects.nonNull(memberConsents.getAgreeSms()) {
            notifyAgreeSms(memberConsents.getAgreeSms());
        }
        if (Objects.nonNull(memberConsents.getAgreeEmail()) {
            notifyAgreeEmail(memberConsents.getAgreeEmail());
        }
    }
    // ...
}
```

#### 지속 성장이 가능한 구조인가?

Braze가 아닌 다른 툴을 사용하게 된 경우를 생각해 보겠습니다.

![](https://static.blog.gangnamunni.com/files/ca/ca805f0e-7109-40f4-a06d-20e096449a7b.jpeg)

이제 `braze module`과 `logic module`의 의존 관계를 끊고,  새로 생성한 모듈이 `logic module`에 의존, interface를 구현하는 새로운 notifier를 생성하면 됩니다. Braze가 아닌 다른 툴을 사용하더라도, `logic module`은 수정할 필요가 없습니다.

이제 강남언니 내부 도메인 모델에는 Braze 관련 컨텍스트가 남아있지 않습니다. 첫 설계에 비해서는 변경이 훨씬 용이한, 지속 성장이 가능한 구조가 되었습니다.

![](https://static.blog.gangnamunni.com/files/03/03cb5c62-583e-4329-9913-89c3f88df09f.jpeg)

---

## DIP(Dependency Inversion Principle)

지금까지 강남언니 서버에 새로운 외부 툴 Braze를 도입하는 과정에 어떻게 지속 성장이 가능한 구조를 만들지, 특히 어떻게 내부 도메인 모델이 외부 툴에 의존하지 않도록 할지 고민한 과정을 소개했습니다.

하지만 위에서 보여드린 설계는 새롭게 발견된 어떤 것이 아닙니다. 위 설계는 Uncle Bob(Robert C. Martin)이 소개한 개발 설계 원칙인 DIP를 적용한 사례입니다. DIP가 무엇인지, 이 글에서 소개한 강남언니의 사례에는 어떻게 DIP가 적용되었는지 간략히 보여드리고 마치겠습니다.

DIP의 정의는 아래와 같습니다.

::: info DIP(Dependency Inversion Principle)

High-level module은 low-level module에 의존하지 않아야 합니다.

High-level module과 low-level module 모두 abstraction(ex. Java interface)에 의존해야 합니다.

Abstraction은 detail에 의존하지 않아야 합니다. Detail이 abstraction에 의존해야 합니다.

:::

여기서 module은 Java module이 아닌 **Java class**로, 아래 본문에서는 high-level module 대신 high-level class, low-level module 대신 low-level class로 표기하겠습니다.

- High-level class는 low-level class에 의존하지 않아야 합니다.
- High-level class와 low-level class 모두 abstraction(ex. Java interface)에 의존해야 합니다.
- Abstraction은 detail에 의존하지 않아야 합니다. Detail이 abstraction에 의존해야 합니다.

즉 위 세 가지 조건을 만족하면 DIP가 적용되는 것인데요, 위 조건들이 dependency inversion과 무슨 관계가 있을까요?

#### Inversion?

먼저, 역전(Inversion)이 있다는 것은 보통의 경우와 반대가 된다는 것으로 이해할 수 있습니다. 따라서 의존 관계(Dependency)에 역전(Inversion)이 있다는 것은 보통의 경우와 의존 관계가 반대가 된다는 것으로 이해할 수 있습니다.

![](https://static.blog.gangnamunni.com/files/ae/ae446bf5-fa3c-4f4b-88fe-cbe26f92eef9.jpeg)

일반적으로 high-level class는 low-level class에 의존합니다. 위와 같이 controller class는 service class에 의존, service class는 repository class에 의존하는 것이 일반적입니다. Design V2에서도 마찬가지로 high-level class가 low-level class에 의존하는 설계를 보여 드렸습니다.

![](https://static.blog.gangnamunni.com/files/7f/7f60f345-feaa-4953-9d30-95d709f45425.jpeg)

하지만 Braze 관련 변경이 `braze module`을 넘어 `logic module`까지 영향을 미치는 것을 방지하고 싶었고, 따라서 `MemberConsentLogic`이 툴에 영향을 받지 않는 추상적인 interface에 의존하도록 했습니다. 그 과정에서 `logic module`과 `braze module`의 의존 관계가 반전되었습니다.

![](https://static.blog.gangnamunni.com/files/3e/3ea1a9bd-976b-49f6-b198-9094861fa5a8.jpeg)

여기서 비교적 high-level class인 `MemberConsentLogic`은 비교적 low-level class인 `BrazeMemberConsentNotifier`에 의존하지 않습니다. 비교적 high-level class인 `MemberConsentLogic`과 비교적 low-level class인 `BrazeMemberConsentNotifier`는 모두 interface에 의존합니다. Interface는 다른 어떤 detail에 의존하지 않습니다. Braze 비용 절감을 위한 로직 등 detail은 모두 interface가 알지 못하며, detail이 interface에 의존하여 구현되고 있습니다.

즉, 내부 도메인 코드가 Braze 컨텍스트에 오염되지 않도록 한 결과, DIP가 적용되었습니다.

끝으로, 많은 개발 설계 패턴, 원칙들과 같이 DIP 역시 trade-off가 존재합니다. Runtime에야 의존 대상이 결정되어 코드를 이해하기 어려워지는 등, DIP를 적용하면 변경에 강한 코드를 작성할 수 있다는 장점이 있으나 그렇다고 모든 의존 관계에 DIP를 적용하는 것이 반드시 좋지는 않을 것입니다. 변경의 여지가 많지 않은 의존 관계에 DIP를 적용하는 것은 오버 엔지니어링입니다.

이 글에서 소개한 사례 역시 Braze라는 외부 툴 사용 여부는 언제든 바뀔 수 있기 때문에 변경에 강한 코드를 작성하는 것이 더욱 필요한 경우였다는 점에 주목해 주시면 좋겠습니다.

이상으로 강남언니 서버에 새로운 툴을 도입하는 과정에서 지속 성장이 가능한 구조를 만들기 위해 어떤 과정을 거쳤는지 소개를 마치겠습니다. 어떻게 하면 외부 툴에 영향 받지 않는 내부 도메인 모델을 만들 수 있는지 궁금하신 분들께 도움이 되면 좋겠습니다.

감사합니다.

---

<TagLinks />
