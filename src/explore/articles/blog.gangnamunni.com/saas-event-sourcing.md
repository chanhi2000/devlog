---
lang: ko-KR
title: "[SaaS] 시간여행이 가능한 시스템 아키텍처"
description: "Article(s) > [SaaS] 시간여행이 가능한 시스템 아키텍처"
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
  - event-driven
  - ddd
head:
  - - meta:
    - property: og:title
      content: "Article(s) > [SaaS] 시간여행이 가능한 시스템 아키텍처"
    - property: og:description
      content: "[SaaS] 시간여행이 가능한 시스템 아키텍처"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/blog.gangnamunni.com/saas-event-sourcing.html
prev: /programming/java-spring/articles/README.md
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

```component VPCard
{
  "title": "[SaaS] 시간여행이 가능한 시스템 아키텍처",
  "desc": "복잡한 의료 도메인에 Event Sourcing 적용 by 강남언니 블로그",
  "link": "https://blog.gangnamunni.com/post/saas-event-sourcing/",
  "logo": "https://blog.gangnamunni.com/favicon.ico",
  "background": "rgba(255,84,15,0.2)"
}
```

> 2024.03.18

안녕하세요 힐링페이퍼에서 백엔드 엔지니어로 근무하고 있는 Manggo입니다. 여러분들이 해결하고 있는 도메인 문제들 중 변경 사항 하나하나가 중요하거나, 변경 사항별로 레포트를 제공한다거나, 변경한 시점으로 돌아가 무언가를 해야 하는 경우가 있으실까요? 그럴 때 아주 좋은 패턴이 바로 [<FontIcon icon="fas fa-globe"/>이벤트 소싱](https://martinfowler.com/eaaDev/EventSourcing.html) 입니다. 이벤트 소싱은 마틴 파울러가 쓴  [<FontIcon icon="fas fa-globe"/>Development of Further Patterns of Enterprise Application Architecture](https://martinfowler.com/eaaDev/) 에서 소개되었습니다.

마틴파울러의 글에 적혀있는 이벤트 소싱의 설명은 다음과 같습니다.

> The fundamental idea of Event Sourcing is that of ensuring every change to the state of an application is captured in an event object, and that these event objects are themselves stored in the sequence they were applied for the same lifetime as the application state itself.

풀어서 설명해보자면, 일반적인 애플리케이션은 상태를 저장하고, 계속 변경합니다. 이것과 다르게, 이벤트 소싱 패턴을 사용하는 애플리케이션은 현재 상태가 만들어지기까지 발생한 이벤트를 저장합니다. 이 이벤트들을 차례대로 재생하면 현재의 상태를 알 수 있습니다.

---

## Background

```component VPCard
{
  "title": "Event Sourcing",
  "desc": "Capture all changes to an application state as a sequence of events.",
  "link": "https://martinfowler.com/eaaDev/EventSourcing.html",
  "logo": "https://martinfowler.com/favicon.ico",
  "background": "rgba(239,91,161,0.2)"
}
```

```component VPCard
{
  "title": "loom/loom-java",
  "desc": "Loom is a set of frameworks for implementing distributed messaging and the event sourcing pattern",
  "link": "https://github.com/loom/loom-java",
  "logo": "https://avatars.githubusercontent.com/u/28099492?s=200&v=4",
  "background": "rgba(10,10,10,0.2)"
}
```

### 상태 기반 시스템 vs 이벤트 기반 시스템

일반적인 개발 환경에서는 데이터에 변경을 가한 후 영속장치에 바로 반영하기 때문에, 영속장치에는 최종 스냅샷만 남아있습니다. 간단한 사칙연산으로 예를 들어보자면, 영속장치에 11이라는 숫자가 있을때 11이 `(0 + 1 + 1 + … + 1)`로 생성되었는지, `((0 + 1) * 10 + 1)`로 생성되었는지 모르고 결과값인 11만 알 수 있습니다. 이때 마지막 시나리오에서 `*10`이 아닌 `+10`을 하는 버그를 만들었다면 어떻게 될까요? 영속장치에는 12라는 값이 저장됐을 것이고 어디서 버그가 발생했는지 우리는 추적을 할 수 없습니다. 해당 버그는 우리가 `*` 연산자를 곱연산이 아닌 합연산으로 잘못 개발했을 수도 있고, 사용자가 합연산으로 잘못 입력했을 수도 있습니다.

위 예시에 이벤트 소싱을 적용을 하면 어떻게 될까요? `*10`을 `+10`으로 처리하는 버그가 발생했다는 가정에는 `*10`이라는 이벤트가 있기 때문에 `*10` 이벤트를 처리하는 잘못된 로직만 변경해주면 해결이 가능합니다. `+10`으로 잘못 입력되었을 경우 `*10`이 아닌 `+10`이벤트가 쌓여있기 때문에 사용자 입력이 `+10`으로 잘못 됐음을 바로 확인이 가능합니다.

위와 같은 예시의 버그를 추적하기 위해 사용자 입력을 순서대로 로그로 쌓아서 해결 할 수도 있습니다. 또한 로그를 기반으로 로직의 문제점이 있는지 혹은 입력이 잘못되었는지 찾아서 문제를 해결 할 수도 있습니다. 간단해 보이는 과정이지만, 로그와 도메인 데이터간 무결성을 맞추기 위한 작업, 트랜잭션을 보장하기 위한 작업, 로그를 기반으로 입력을 다시 해보고 로직을 수정하는 작업, 수정된 로직을 기반으로 영속장치에 데이터를 변경하는 작업 등 매우 까다롭고 힘든 과정이 될 것으로 예상됩니다.

### Why 이벤트 소싱?

고객사인 미용의료 병원에서 환자가 내원을 하게 되면 유기적이고 다양한 과정들을 거쳐서 시술을 받고 귀가를 하게 됩니다.

환자가 내원을 해서 키오스크로 접수를 하거나 데스크 직원에게 이야기하여 접수를 하고 시술 상담을 받거나 바로 시술을 받는 준비를 하거나, 시술을 여러개 받는다면 어떤것부터 받을 준비를 하고 어떤 원장님에게 시술들을 받을건지, 시술 후 사진을 촬영해야 하는지 진정관리를 받아야 하는지 등 순서가 정해져 있는 것들도 있지만 그때그때 상황에 따라서 유기적으로 환자의 내원 흐름이 달라지게 됩니다.

이러한 과정 속에서 병원에서는 어떤 직원이 어떤 환자에게 어떤 과정들을 거치게 했는지 추적하고 싶은 니즈가 있으며 서비스로 제공을 받고 싶어 합니다. 또한 바쁜 병원속에서 환자에게 제공되는 경험들에 문제가 발생하는 것을 최대한 줄이고 문제가 발생하였다면 정확하고 빠르게 대응을 하고 싶은 니즈가 있습니다. 이런 요구사항들을 만족시키기 위해서 힐링페이퍼 B2B SaaS팀에서는 결제, 예약, 병원 내원 프로세스 등 어딧로그(audit log)를 제공해야 하며 과거의 사실에 기반한 연산이 중요한 도메인들에 이벤트 소싱을 적용하게 되었습니다. 이와 같은 경험을 바탕으로 어떻게 이벤트 소싱을 적용하고 구현했는지 소개를 하고자 합니다.

---

## 이벤트 소싱 구현

### 플로우 요약

이벤트 스트림을 애플리케이션에 적용시켜서 실제로 사용하는 플로우를 차트로 요약해보면 다음과 같습니다.

1. Client로부터 명령 API를 요청받습니다.
2. Controller가 요청을 StreamCommand를 포함한 Message로 변환하여 Headspring으로 전달합니다.
3. Headspring은 StreamCommand에 들어있는 streamId를 기반으로 EventStore로부터 이벤트들을 조회합니다.
4. Headspring은 조회된 이벤트들과 EventHandler들을 이용하여 복원(rehydrate)과정을 거쳐 가장 최신 State를 만듭니다.
5. 만들어진 State와 요청으로부터 받은 Command를 CommandExecutor에 전달하여 이벤트를 생성합니다
6. 생성된 이벤트를 EventStore에 저장합니다.
7. EventStore는 이벤트를 저장하고 해당 이벤트를 MessageBus로 보내 이벤트를 외부에 발행합니다.

![](https://static.blog.gangnamunni.com/files/34/3433035d-e1ff-402a-b04a-81d77335f8ea.jpeg)

이벤트 소싱을 구현하기 위해서는 초기 상태 팩토리(state seed factory), 이벤트 저장소(event store), 이벤트 처리기(event handler), 이벤트 발행기(command executor), 상태 복원기(rehydrator)가 기본적으로 필요합니다. 사전 지식에 링크해둔 Loom 저장소에 이 모든 요소들의 인터페이스와 구현체가 잘 정리되어 있습니다.

이제 저희 팀에서 구현한 예약 시스템을 예시로 각 요소들을 설명하고자 합니다. 예약 시스템은 환자의 예약, 병원 업무 프로세스 등을 관리하는 도메인입니다. 이 도메인의 이름을 Schedule이라고 지었고, State로 정의하였습니다. 간소화된 Schedule을 기반으로 각 컴포넌트들의 구현을 소개하겠습니다.

### State

Schedule 상태 입니다. 상태의 속성들과 생성자, 그리고 초기 상태 팩토리가 포함되어 있습니다. setter 메소드를 사용하지 않고 copy 방식을 이용하기 위해서 Lombok의 Builder 및 toBuilder 어노테이션을 이용하였습니다.

```java
public enum ReservationStatus {
    RESERVED,
    CANCELED
}

@Getter
@NoArgsConstructor
public class Reservation {
    private OffsetDateTime startDateTime;
    private OffsetDateTime endDateTime;
    private ReservationStatus status;

    @Builder(toBuilder = true)
    public Reservation(
        OffsetDateTime startDateTime,
        OffsetDateTime endDateTime,
        ReservationStatus status
    ) {
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.status = status;
    }
}

@Getter
public class Schedule {
    private String id;
    private String visitorId;
    private Reservation reservation;
		private List<Object> events;

    @Builder(toBuilder = true)
    public Schedule(
        String id,
        String visitorId,
        Reservation reservation,
				List<Object> events
    ) {
        this.id = id;
        this.visitorId = visitorId;
        this.reservation = reservation;
				this.events = events;
    }

    public static Schedule seedFactory(String id) {
        return Schedule.builder()
            .id(id)
            .reservation(new Reservation())
            .build();
    }
}
```

### Event

이벤트 소싱은 상태의 변경사항들을 이벤트로 관리하기 때문에 변경되는 데이터들을 이벤트에 담아야합니다.

Schedule에서 발행되는 도메인 이벤트들은 매우 많지만 그중에서 `Reserved` , `ReservationCanceled` 두 이벤트들을 이용하여 간단하게 소개하도록 하겠습니다.

```java
public record Reserved(
    String visitorId,
    OffsetDateTime startDateTime,
    OffsetDateTime endDateTime
) {
}

// 더 많은 속성들이 있지만 이번 글에서는 생략합니다
public record ReservationCanceled() {
}
```

### Command

위 이벤트를 발행하는 명령들 입니다

```java
public record Reserve(
    String visitorId,
    OffsetDateTime startDateTime,
    OffsetDateTime endDateTime
){
}

public record CancelReservation() {
}
```

### CommandExecutor

명령을 받아서 이벤트를 생성하는 명령 실행기 입니다. `CommandExecutor` 인터페이스는 loom-java에 정의되어 있습니다. `ReserveCommand`를 처리할때 중복예약을 방지한다는 도메인 논리가 존재한다고 가정해보겠습니다.

```java
public class ReserveCommandExecutor implements CommandExecutor<Schedule, Reserve> {

    @Override
    public Iterable<Object> produceEvents(Schedule state, Reserve command) {
        if (!state.getEvents().isEmpty()) {
            throw new RuntimeException("Already reserved");
        }
        return List.of(
            new Reserved(
                command.visitorId(),
                command.startDateTime(),
                command.endDatetTime()
            )
        );
    }
}
```

도메인 명령은 명령을 정상적으로 실행시킬 수 있는지에 대해서 검증이 필요하며 특정 케이스에 대해서 실패를 해야 합니다. 그렇기 때문에 이벤트를 발행하기 전 State에 이미 이벤트가 있는지 검증한 후 있다면 예외를 발생시키고 그렇지 않다면 이벤트를 응답합니다.

### EventHandler

발행된 이벤트를 처리하여 상태를 복원시키는 이벤트 처리기 입니다. 이벤트는 과거에 발생된 사실이며 이미 발생시점에 검증이 되었기 때문에 이벤트 처리기는 이벤트에 대해서 따로 검증하지 않으며 항상 성공해야 합니다. `EventHandler` 인터페이스는 loom-java에 정의되어 있습니다

```java
public class ReservedEventHandler implements EventHandler<Schedule, Reserved> {

    @Override
    public Schedule handleEvent(Schedule state, Reserved event) {
        return state.toBuilder()
            .reservation(
                state.getReservation().toBuilder()
                    .startDateTime(event.startDateTime())
                    .endDateTime(event.endDateTime())
                    .status(ReservationStatus.RESERVED)
                    .build()
            )
            .visitorId(event.visitorId())
            .build();
    }
}
```

### EventStore

이벤트를 저장하고 조회하는 저장소 입니다. 이벤트를 저장하는 `collectEvents`와 조회하는 `queryEvents` 메서드를 정의하고 있으며, 자세한 인터페이스는 loom-java에 정의되어 있습니다.

```java
public class ScheduleEventStore implements EventStore {
    /* ... 생략 ... */
    private final ScheduleEventRepository scheduleEventRepository;
    private final MessageBus messageBus;
    /* ... 생략 ... */

    public ScheduleEventStore(
        /* ... 생략 ... */
        ScheduleEventRepository scheduleEventRepository,
        MessageBus messageBus
        /* ... 생략 ... */
    ) {
        /* ... 생략 ... */
        this.scheduleEventRepository = scheduleEventRepository;
        this.messageBus = messageBus;
        /* ... 생략 ... */
    }

    @Override
    public void collectEvents(
        String tenantId,
        String processId,
        String initiator,
        String predecessorId,
        String streamId,
        long startVersion,
        Iterable<Object> events
    ) {
        /* ... 생략 ... */
        scheduleEventRepository.saveAll(
            tenantId,
            processId,
            initiator,
            predecessorId,
            streamId,
            startVersion,
            eventList,
            typeStrategy
        );
        List<ScheduleEventDataModel> pendingEvents = scheduleEventRepository.getPendingEvents(
            tenantId,
            streamId
        );
        sendMessages(tenantId, streamId, pendingEvents);
        scheduleEventRepository.makeEventsPublished(tenantId, pendingEvents);
    }
    /* ... 생략 ... */
}
```

이벤트 스토어 레코드 별로 메세지가 발행되었는지 안되었는지 체크를 하고, 발행이 되지 않은 모든 이벤트를 메세지 브로커로 전달하게 됩니다. 이를 통해서 이벤트가 At Least Once 발행이 될 수 있도록 합니다.

`MessageBus`는 <FontIcon icon="iconfont icon-kafka"/>Apache Kafka, Kinesis, AWS SNS + SQS, Azure EventHub 등 다양한 메세지 브로커중 순서를 보장할 수 있는 메세지 브로커를 이용하여 구현합니다. 저희는 Kinesis를 통해서 구현하였습니다.

### Event Stream

이벤트 스트림에서는 첫번째 이벤트 부터 가장 최신의 이벤트를 가지고 State로 복원시킬 수 있어야 하고, 복원된 상태에서 명령을 받아 다음 이벤트를 발행할 수 있어야 합니다. loom-java에서는 `Headspring`이라는 abstract class를 통해 두 가지 기능이 구현되어 있습니다.

`Rehydrator`라는 복원기를 상속받으며 `MessageHandler`를 구현하도록 되어 있습니다.

```java
public abstract class Headspring<S> extends Rehydrator<S>
    implements MessageHandler
```

명령 메세지를 처리하는 구현을 보면, 1. 최신 버전의 상태를 복원시키고 2. 명령 실행기를 실행시켜 이벤트를 생성하고 3. 생성된 이벤트를 이벤트 스토어에 저장합니다. `rehydrateState`는 첫번째 이벤트부터 순차적으로 적용하여 State로 변환해나갑니다.

```java
    @Override
    public void handle(Message message) {
        StreamCommand<?> command = (StreamCommand<?>) (message.getData());
        Snapshot<S> snapshot = rehydrateState(command.getStreamId());
        String predecessorId = message.getId();
        eventStore.collectEvents(
            getStateType(),
            message.getProcessId(),
            message.getInitiator(),
            predecessorId,
            command.getStreamId(),
            snapshot.getVersion() + <span class="hljs-number">1,
            produceEvents(snapshot.getState(), command));
    }

    public final Snapshot<S> rehydrateState(String streamId) {
        return foldl(
            this::handleEvent,
            Snapshot.seed(streamId, seedFactory.apply(streamId)),
            stream(eventReader.queryEvents(stateType, streamId, <span class="hljs-number">1)));
    }
```

이벤트 스트림에서 처리할 수 있는 이벤트 처리기들과 명령 실행기들을 주입받아서 스트림을 완성시켜줍니다.

```java
public class ScheduleHeadspring extends Headspring<Schedule> {

    public ScheduleHeadspring(
        EventStore eventStore
    ) {
        super(
            eventStore,
            Schedule::seedFactory,
            List.of(
                new ReserveCommandExecutor(),
                new CancelReservationCommandExecutor(),
                /* ... 생략 ... */
            ),
            List.of(
                new ReservedEventHandler(),
                new ReservationCanceledEventHandler(),
                /* ... 생략 ... */
            )
        );
    }
}
```

---

## 이벤트 소싱 적용 후

![위 이미지는 가상의 인물로 이루어진 테스트 화면 입니다.](https://static.blog.gangnamunni.com/files/71/711642a1-28c7-4538-8276-3e0b3982cae0.png)

![위 이미지는 더미 데이터로 이루어진 테스트 화면 입니다.](https://static.blog.gangnamunni.com/files/b1/b1d8a86b-cbc6-444f-b579-3c593a117ca9.gif)

이벤트 소싱을 적용하면서 저희가 가장 크게 체감한 장점과 해결해야 했던 챌린징을 소개하고자 합니다.

### 장점

**DDD(Domain Driven Design)를 적용하기 수월하다.**

- DDD에 소개되어 있는 애그리것(Aggregate)패턴을 적용하기 너무 좋았습니다. 이벤트 스트림을 하나의 애그리것으로 정의하면 DDD에서 이야기 하는 애그리것 패턴을 만족하게 됩니다.
- 도메인 문제를 해결하기 위해서 웹프레임워크, ORM등 실제 도메인에 없는 컨텍스트들을 주입하지 않고 개발하기 수월합니다. 순수 프로그래밍 언어를 이용하여 이벤트를 생성하고 상태를 복원하는 로직만 작성하면 되기 때문에 실제 도메인을 써드파티로 오염시키지 않고 프로그램으로 작성이 가능합니다. 즉 도메인 관심사가 아닌 기술들을 의존하지 않고 도메인 로직을 작성하기 수월합니다.
- 비교적 복잡한 도메인문제를 해결하기 위해서 팀에서 종종 [<FontIcon icon="fas fa-globe"/>EventStorming](https://www.eventstorming.com/)을 이용하는데, 이벤트 스토밍을 통해 팀에서 정의한 명령 및 이벤트들을 기반으로 개발을 하면 되기 때문에 실제 도메인을 프로그램으로 반영하기 수월합니다.

### 챌린징

이벤트 소싱을 이용하여 위에서 소개한 것 뿐만 아니라 다른 장점들을 취하긴 했지만  해결해야 하는 챌린징또한 존재했습니다. 조회를 할때 성능상의 큰 부하가 발생할 수 있다는 사실인데요, 스트림 하나에 대해서 조회를 한다면 해당 스트림에 이벤트가 별로 없을때 큰 부하가 가지는 않겠지만 여러 스트림에 대한 조회 조건을 맞춰야 할때 혹은 하나의 스트림에 이벤트가 많을때 스냅샷 혹은 조회모델이 필요할 수 있습니다.

예로 들었던 Schedule 도메인의 경우, A시간부터 B시간까지 잡혀있는 스케줄을 조회해야 하는 유즈케이스가 존재합니다. 일반적인 개발 방식에서는 State의 속성을 기반으로 DB에 쿼리를 작성하여 실행할 수 있지만, 이벤트 소싱을 적용했을 때는 State가 DB에 저장되지 않기 때문에 모든 스트림 복원과정을 거쳐 상태를 만든 후 필터링을 해야합니다. 이 과정은 애플리케이션에 매우 큰 부하를 줄 수 있습니다.

이런 문제를 극복하기 위해서 저희는 CQRS패턴을 적용하여 해결하였습니다. 명령모델을 이벤트 소싱을 통해 구현하고, 조회모델을 따로 두어 조회 유즈케이스에 대한 챌린징을 극복할 수 있습니다. 이에 대한 소개는 다음 글에서 작성하도록 하겠습니다.

---

<TagLinks />
