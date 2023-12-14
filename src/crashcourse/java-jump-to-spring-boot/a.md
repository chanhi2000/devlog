---
lang: ko-KR
title: A. 부록
description: 🍃Jump to Spring Boot > A. 부록
tags: ["crashcourse", "java", "spring", "spring-boot" , "jdk", "wikidocs"]
meta:
  - name: 🍃Jump to Spring Boot > A. 부록
    content: A. 부록
  - property: og:title
    content: A. 부록
  - property: og:description
    content: 🍃Jump to Spring Boot > A. 부록
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/java-jump-to-spring-boot/a.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: A. 부록
desc: 점프 투 스프링부트 - WikiDocs
link: https://wikidocs.net/163574
logo: https://wikidocs.net/static/img/favicon.ico
color: rgba(255, 255, 255, 0.2)
```

---

## 01. 인텔리제이 사용하기

STS 대신 인텔리제이 커뮤니티 에디션을 사용하려면 다음의 안내에 따라 인텔리제이를 설치하고 사용하자.

### Spring Initializr

인텔리제이를 설치하기 전에 스프링부트 개발을 도와주는 Spring Initializr를 사용해 보자. 곧 우리가 설치할 인텔리제이 무료버전인 CE(Comunity Edition)는 스프링 도구 지원이 안되지만 Spring Initializr를 사용하면 스프링부트 개발을 쉽게 시작할 수 있다. Spring Initializr를 통해 스프링부트 프로젝트를 설정하여 다운로드할수 있다.

다음 URL에 접속하자.

> [🌐https://start.spring.io](https://start.spring.io)

![접속하면 다음과 같은 화면이 나타난다.](https://wikidocs.net/images/page/164891/C_A-01_3.png)

위 화면에서 빨간 색 박스와 동일하게 다음과 같이 설정한다.

- __Project__: Gradle Project
- __Language__: Java
- __Sprint Boot__: 2.6.6 (SNAPSHOT 또는 M2, M3 가 붙지 않은 최신 버전을 선택한다.)
- __Project Meta Data__
  - __Group__: `com.mysite`
  - __Artifact__: `sbb`
  - __Name__: `sbb`
  - __Description__: My project for Sprint Boot
  - __Package name__ : `com.mysite.sbb`
  - __Packaging__: Jar
  - __Java__: 11

위와 같이 설정하고 <FontIcon icon="iconfont icon-select"/>`["ADD DEPENDENCIES"]` 버튼을 누르자. 그러면 다음과 같은 팝업창이 나타난다.

![<FontIcon icon="iconfont icon-select"/>`["Spring Web"]`을 선택하자. 그러면 다음과 같이 "Spring Web"이 추가된다.](https://wikidocs.net/images/page/164891/C_A-01_4.png)

![마지막으로 <FontIcon icon="iconfont icon-select"/>`["GENERATE"]` 버튼을 누른다.](https://wikidocs.net/images/page/164891/C_A-01_5.png) 

그러면 <FontIcon icon="iconfont icon-file"/>`sbb.zip` 파일이 다운로드 된다. <FontIcon icon="iconfont icon-file"/>`sbb.zip` 파일을 "프로젝트 홈 디렉터리"에 압축해제하자.

> 프로젝트 홈 디렉터리: 윈도우는 <FontIcon icon="iconfont icon-file"/>`C:/Users/<사용자명>/projects` 디렉터리를 사용하고 맥 OS라면 <FontIcon icon="iconfont icon-file"/>`/Users/<사용자명>/projects`를 사용하자.

그러면 프로젝트 홈 디렉터리 밑에 <FontIcon icon="iconfont icon-folder"/>`sbb` 디렉터리가 생성될 것이다. 이제 인텔리제이를 설치하고 <FontIcon icon="iconfont icon-folder"/>`sbb` 디렉터리를 인텔리제이에서 <FontIcon icon="iconfont icon-select"/>`["Open"]` 하여 스프링부트 프로젝트를 시작할수 있다.

### 인텔리제이 설치

다음의 URL에서 인텔리제이를 다운로드 하자.

- [https://www.jetbrains.com/ko-kr/idea/download/](https://www.jetbrains.com/ko-kr/idea/download/)

위 URL에 접속하면 Ultimate와 Community 두 가지 버전이 있는데 무료인 Community 버전을 다운로드하여 설치하자.

설치 후 인텔리제이를 실행하자. 

![인텔리제이를 처음 실행하면 다음과 같은 창이 나올 것이다.](https://wikidocs.net/images/page/164891/C_A-01_2.png)

.<FontIcon icon="iconfont icon-select"/>`["Open"]` 버튼을 누르고 위에서 압축해제한 <FontIcon icon="iconfont icon-folder"/>`sbb` 디렉터리를 선택한다. 

![그러면 다음과 같이 sbb 프로젝트가 인텔리제이에서 시작된다.](https://wikidocs.net/images/page/164891/O_A-01_6.png)

프로젝트 시작후에는 Gradle 작업(라이브러리 다운로드 등)으로 인한 시간이 1~2분 정도 소요된다.

::: info SDK 오류

.<FontIcon icon="iconfont icon-folder"/>`com/mysite/sbb/`<FontIcon icon="iconfont icon-java"/>`SbbApplication.java` 파일을 열었을 때 오류가 발생한다면 SDK가 지정되지 않은 경우이므로 에디터 창 상단에 표시되는 "SDK" 설정을 통해 설치된 자바 SDK를 지정하자.

:::

### 롬복 플러그인 설치

다음처럼 <FontIcon icon="iconfont icon-select"/>`[Preferences -> Plugins]` 에서 롬복(Lombok)을 검색하여 설치하자.

![롬복이 디폴트로 설치되어 있으면 enable 되었는지만 확인하자.](https://wikidocs.net/images/page/164891/O_A-01_7.png)

### Auto Reload 설정

인텔리제이에서 자바 파일을 수정하거나 템플릿을 수정할 경우 수작업 없이 자동으로 변경 사항을 적용하려면 다음과 같이 설정해야 한다.

#### Java

![자바 파일을 변경한 후 자동 적용되게 하려면 다음처럼 <FontIcon icon="iconfont icon-select"/>`[Preferences -> Build, Execution, Deployment -> Compiler]` 에서 다음 항목을 활성화해야 한다.](https://wikidocs.net/images/page/164891/C_A-01_13.png)

![그리고 <FontIcon icon="iconfont icon-select"/>`[Preferences -> Advanced Settings]` 에서 다음 항목을 활성화해야 한다.](https://wikidocs.net/images/page/164891/C_A-01_1.png)

> 1-05장의 Spring Boot Devtools를 설치한 후에 적용하자.

#### 타임리프(thymeleaf)

템플릿 파일을 변경한 후 자동 적용되게 하려면 `application.properties` 파일에 다음과 같은 내용을 추가하자.

> 파일명: <FontIcon icon="iconfont icon-folder"/>`sbb/src/main/resources/`<FontIcon icon="iconfont icon-file"/>`application.properties`

```properties
// (... 생략 ...)
spring.thymeleaf.cache=false
spring.thymeleaf.prefix=file:src/main/resources/templates/
```

템플릿을 사용하는 [2-07장](02G.md) 부터 필요.
`jar` 배포시에는 `spring.thymeleaf.prefix` 항목을 주석처리해야 한다. (오류 보고가 있음)

### Unused 경고 메시지 끄기

인텔리제이 커뮤니티 버전은 스프링을 지원하지 않기 때문에 스프링의 컨트롤러와 URL 매핑 메서드들에서 Unused 경고 메시지가 나타난다. 하지만 무시할수 없을 만큼 많은 경고 메시지가 나오기 때문에 이 항목은 설정에서 끄는게 좋다.

![다음처럼 <FontIcon icon="iconfont icon-select"/>`[Preferences -> Editor -> Inspections]` 메뉴에서 "Java -> Declaration redundancy" 항목 중 <FontIcon icon="iconfont icon-select"/>`["Unused declaration"]` 항목을 체크해제하자.](https://wikidocs.net/images/page/164891/C_A-01_8.png)

### Gradle

그레이들로 로컬 서버를 실행하는 방법과 배포 파일(`jar`)을 생성하는 방법에 대해서 알아보자.

#### 로컬 서버 실행하기

![다음과 같이 그레이들 창에서 <FontIcon icon="iconfont icon-select"/>`[sbb -> Tasks -> application -> bootRun]` 을 선택하자.](https://wikidocs.net/images/page/164891/O_A-01_9.png)

![그리고 우측 마우스 버튼을 눌러 <FontIcon icon="iconfont icon-select"/>`[Run sbb bootRun]`을 선택한다.](https://wikidocs.net/images/page/164891/O_A-01_10.png)

![그러면 다음과 같이 로컬서버가 실행되는 모습을 인텔리제이 하단에서 확인할수 있다.](https://wikidocs.net/images/page/164891/O_A-01_11.png)

#### 배포파일 생성하기

![다음과 같이 그레이들 창에서 <FontIcon icon="iconfont icon-select"/>`[sbb -> Tasks -> build -> bootJar]` 을 선택하자.](https://wikidocs.net/images/page/164891/O_A-01_12.png)

그리고 우측 마우스 버튼을 눌러 <FontIcon icon="iconfont icon-select"/>`Run sbb [bootJar]`를 선택한다. 그러면 <FontIcon icon="iconfont icon-folder"/>`build/libs/` 디렉터리에 <FontIcon icon="iconfont icon-java"/>`sbb-0.0.1-SNAPSHOT.jar`와 같은 배포 파일이 생성된다.

---

## 02. AWS 라이트세일 사용 취소

AWS 서비스를 더 이상 운영하지 않는다면 인스턴스와 고정IP 그리고 데이터베이스를 삭제하여 의도하지 않은 요금 발생을 막자.

### 인스턴스와 고정 IP 삭제

AWS 라이트세일 인스턴스는 3달간 무료로 사용할 수 있고 이후엔 비용이 발생한다. 이를 원치 않는다면 인스턴스와 고정 IP를 삭제해야 한다. 

![인스턴스는 다음처럼 AWS 라이트세일 홈페이지 화면의 <FontIcon icon="iconfont icon-select"/>`[인스턴스]` 탭에서 삭제할 수 있다](https://wikidocs.net/images/page/163575/C_001.png)

![고정 IP는 다음처럼 <FontIcon icon="iconfont icon-select"/>`[네트워킹]` 탭에서 삭제할 수 있다.](https://wikidocs.net/images/page/163575/C_002.png)

### 데이터베이스 삭제

![데이터베이스는 다음처럼 <FontIcon icon="iconfont icon-select"/>`[데이터베이스]` 탭에서 삭제할 수 있다.](https://wikidocs.net/images/page/163575/C_003.png)

---

## 03. 스프링부트 2.x 버전 안내

이 책은 스프링부트 3.x 버전을 기준으로 한다. 만약 스프링부트 2.x 버전으로 이 책의 내용을 공부하고 싶다면 다음의 안내에 따라 스프링부트 2.x 버전을 사용할수 있다.

### `jakarta` 패키지 변경

이 책에 사용한 `import jakarta.*` 패키지를 모두 `import javax.*` 패키지를 사용하도록 변경해야 한다. 즉, `jakarta`로 되어 있는 `import` 문은 전부 `javax`로 교체하여 사용해야 한다.

### <FontIcon icon="iconfont icon-java"/>`SecurityConfig.java`

스프링부트 2.x 버전의 스프링 시큐리티 설정은 다음의 <FontIcon icon="iconfont icon-java"/>`SecurityCofnig.java` 파일로 대체해야 한다. `antMatchers`, `ignoringAntMatchers` 등의 URL 패턴 매치하는 부분들이 변경되었다.

```java
package com.mysite.sbb;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.header.writers.frameoptions.XFrameOptionsHeaderWriter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.mysite.sbb.user.UserSecurityService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserSecurityService userSecurityService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers("/**").permitAll()
            .and()
                .csrf().ignoringAntMatchers("/h2-console/**")
            .and()
                .headers()
                .addHeaderWriter(new XFrameOptionsHeaderWriter(
                        XFrameOptionsHeaderWriter.XFrameOptionsMode.SAMEORIGIN))
            .and()
                .formLogin()
                .loginPage("/user/login")
                .defaultSuccessUrl("/")
            .and()
                .logout()
                .logoutRequestMatcher(new AntPathRequestMatcher("/user/logout"))
                .logoutSuccessUrl("/")
                .invalidateHttpSession(true)
                ;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userSecurityService).passwordEncoder(passwordEncoder());
    }
}
```

### 스프링부트 2.x 깃허브 주소

이 책은 스프링부트 2.x 버전부터 작성된 책이다. 스프링부트 2.x 버전으로 작성된 소스코드는 다음의 깃허브 주소에서 확인할 수 있다.

[<FontIcon icon="iconfont icon-github"/>`pahkey/sbb`](https://github.com/pahkey/sbb)

---

## 04. 댓글 (삭제예정)

::: warn 주의

아래 내용은 "점프 투 스프링부트" 예전 버전의 내용이므로 현재까지 진행한 소스코드에 적용할때는 주의해야 함
질문 또는 답변에 대하여 짤막하게 답해서 올리는 글을 댓글이라고 한다. 이번에는 질문과 답변에 댓글(`Comment`) 기능을 추가해 보자.

:::

### 댓글 도메인

댓글 역시 질문과 답변처럼 하나의 도메인으로 취급하자. 

![먼저 다음처럼 `com.mysite.sbb.comment` 패키지를 생성하자.](https://wikidocs.net/images/page/162570/3-11_1.png)

### 댓글 모델

#### `Comment` 모델

댓글 작성을 위해서 가장 먼저 준비해야 할 것은 댓글 모델이다.

> 파일명: <FontIcon icon="iconfont icon-folder"/>`/sbb/src/main/java/com/mysite/sbb/comment/`<FontIcon icon="iconfont icon-java"/>`Comment.java`

```java
package com.mysite.sbb.comment;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

import com.mysite.sbb.answer.Answer;
import com.mysite.sbb.question.Question;
import com.mysite.sbb.user.SiteUser;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    private SiteUser author;

    @Column(columnDefinition = "TEXT")
    private String content;

    private LocalDateTime createDate;

    private LocalDateTime modifyDate;

    @ManyToOne
    private Question question;

    @ManyToOne
    private Answer answer;
}
```

`Comment` 모델의 속성은 다음과 같다.

| 필드 | 설명 |
| :--- | :--- |
| `id` | 댓글의 고유번호 | 
| `author` | 댓글 작성자 | 
| `content` | 댓글 내용 | 
| `createDate` | 댓글 작성일시 | 
| `modifyDate` | 댓글 수정일시 | 
| `question` | 이 댓글이 달린 질문 | 
| `answer` | 이 댓글이 달린 답변 | 

만약 질문에 댓글이 작성될 경우에는 `question`에 값이 저장되고 답변에 댓글이 작성될 경우에는 `answer`에 값이 저장될 것이다. 한 사람이 여러개의 댓글을 달수 있고 질문 또는 답변 한개에 여러개의 댓글을 달수 있기 때문에 `author`, `question`, `answer` 속성에는 `@ManyToOne` 애너테이션을 설정해야 한다.

![위와 같이 댓글 모델을 작성하면 다음과 같은 테이블이 생성될 것이다.](https://wikidocs.net/images/page/162570/3-11_2.png)

그리고 댓글을 수정하거나 삭제한 후에 질문 상세 페이지로 리다이렉트 하기 위해서는 댓글을 통해 질문의 `id`를 알아내는 `getQuestionId` 메서드가 필요하다. 이후 진행할 댓글 수정, 삭제에서 필요한 기능이지만 편의를 위해 여기서 먼저 만들고 가도록 하자.

다음과 같이 `Comment` 모델에 `getQuestionId` 메서드를 추가하자.

> 파일명: <FontIcon icon="iconfont icon-folder"/>`/sbb/src/main/java/com/mysite/sbb/comment/`<FontIcon icon="iconfont icon-java"/>`Comment.java`

```java{12-20}
package com.mysite.sbb.comment;

// (... 생략 ...)

@Entity
@Getter
@Setter
public class Comment {

    // (... 생략 ...)

    public Integer getQuestionId() {
        Integer result = null;
        if (this.question != null) {
            result = this.question.getId();
        } else if (this.answer != null) {
            result = this.answer.getQuestion().getId();
        }
        return result;
    }
}
```

`getQuestionId` 메서드는 댓글을 통해 질문의 id 값을 리턴하는 메서드로 `question` 속성이 `null`이 아닌 경우는 질문에 달린 댓글이므로 `this.question.getId()` 값을 리턴하고 답변에 달린 댓글인 경우 `this.answer.getQuestion().getId()` 값을 리턴하다.

#### `Question` 모델

그리고 질문에서 댓글을 참조하기 위해 다음과 같이 질문 모델을 수정하자.

> 파일명: <FontIcon icon="iconfont icon-folder"/>`/sbb/src/main/java/com/mysite/sbb/question`<FontIcon icon="iconfont icon-java"/>`Question.java`

```java{4,13-14}
package com.mysite.sbb.question;

// (... 생략 ...)
import com.mysite.sbb.comment.Comment;
// (... 생략 ...)

@Getter
@Setter
@Entity
public class Question {
    // (... 생략 ...)

    @OneToMany(mappedBy = "question")
    private List<Comment> commentList;
}
```

질문에 작성된 댓글 리스트를 참조하기 위해 `commentList` 속성을 `@OneToMany` 애너테이션으로 생성했다. `Comment` 모델에서 `Question`을 연결하기 위한 속성명이 `question`이므로 `mappedBy`의 값으로 "question"이 전달되어야 한다.

#### `Answer` 모델

마찬가지로 답변에서 댓글을 참조하기 위해 다음과 같이 답변 모델을 수정하자.

> 파일명: <FontIcon icon="iconfont icon-folder"/>`/sbb/src/main/java/com/mysite/sbb/answer/ `<FontIcon icon="iconfont icon-java"/>`Answer.java`

```java{4,13-14}
package com.mysite.sbb.answer;

// (... 생략 ...)
import com.mysite.sbb.comment.Comment;
// (... 생략 ...)

@Entity
@Getter
@Setter
public class Answer {
    // (... 생략 ...)

    @OneToMany(mappedBy = "answer")
    private List<Comment> commentList;
}
```

답변에 작성된 댓글 리스트를 참조하기 위해 `commentList` 속성을 `@OneToMany` 애너테이션으로 생성했다.

### 질문 댓글

질문에 댓글을 등록할 수 있는 기능을 추가해 보자. 이제 스프링부트에 새 기능을 추가하는 패턴에 익숙해졌을 것이다. 질문 댓글은 질문 작성과 거의 차이가 없으므로 코드작성을 빠르게(한번에) 진행해 보자.

#### 질문 댓글 링크

질문 상세 템플릿을 다음과 같이 수정하자.

> 파일명: <FontIcon icon="iconfont icon-folder"/>` C:\projects\mysite\templates\pybo`<FontIcon icon="iconfont icon-page"/>`question_detail.html`

```html{13-32}
<html layout:decorate="~{layout}">
<div layout:fragment="content" class="container my-3">
    <h2 class="border-bottom py-2" th:text="${question.subject}"></h2>
    <div class="card my-3">
        <div class="card-body">
            <!-- (... 생략 ...) -->
            <div class="my-3" sec:authorize="isAuthenticated()"
                th:if="${question.author != null and #authentication.getPrincipal().getUsername() == question.author.username}">
                <a th:href="@{|/question/modify/${question.id}|}" class="btn btn-sm btn-outline-secondary">수정</a>
                <a href="javascript:void(0);" class="delete btn btn-sm btn-outline-secondary"
                    th:data-uri="@{|/question/delete/${question.id}|}">삭제</a>
            </div>
            <!-- 질문 댓글 Start -->
            <div class="mt-3" th:if="${not #lists.isEmpty(question.commentList)}">
                <div th:each="comment,index : ${question.commentList}" class="comment py-2 text-muted">
                    <span style="white-space: pre-line;" th:text="${comment.content}"></span>
                    <span th:if="${comment.modifyDate != null}"
                        th:text="| - ${comment.author.username}, ${#temporals.format(comment.createDate, 'yyyy-MM-dd HH:mm')} (수정: ${#temporals.format(comment.modifyDate, 'yyyy-MM-dd HH:mm')})|"></span>
                    <span th:if="${comment.modifyDate == null}"
                        th:text="| - ${comment.author.username}, ${#temporals.format(comment.createDate, 'yyyy-MM-dd HH:mm')}|"></span>
                    <a sec:authorize="isAuthenticated()"
                        th:if="${#authentication.getPrincipal().getUsername() == comment.author.username}"
                        th:href="@{|/comment/modify/${comment.id}|}" class="small">수정</a>,
                    <a sec:authorize="isAuthenticated()"
                        th:if="${#authentication.getPrincipal().getUsername() == comment.author.username}"
                        href="javascript:void(0);" class="small delete" th:data-uri="@{|/comment/delete/${comment.id}|}">삭제</a>
                </div>
            </div>
            <div>
                <a th:href="@{|/comment/create/question/${question.id}|}" class="small"><small>댓글 추가 ..</small></a>
            </div>
            <!-- 질문 댓글 End -->
        </div>
    </div>
    <h5 class="border-bottom my-3 py-2" th:text="|${#lists.size(question.answerList)}개의 답변이 있습니다.|"></h5>
<!-- (... 생략 ...) -->
```

내용이 많지만 어렵지 않다. 찬찬히 살펴보자.

질문에 등록된 댓글 전부를 보여 주기위해 `question.commentList` 루프를 돌며 댓글 내용과 글쓴이, 작성일시, 수정일시를 출력했다. 또 댓글 글쓴이와 로그인한 사용자가 같으면 '수정', '삭제' 링크가 보이도록 했다. 그리고 루프 바깥쪽에는 댓글을 작성할 수 있는 '댓글 추가 ..' 링크도 추가했다.

루프에 의해 반복되는 댓글 각각은 `comment`라는 스타일 클래스를 따로 지정했다. 댓글 영역은 좀 작은 글씨로 보여질 필요가 있기 때문이다. 지금까지 빈 파일로 되어있던 <FontIcon icon="iconfont icon-css"/>`style.css`에 `comment` 클래스에 대한 내용을 다음처럼 추가하도록 하자.

> 파일명: <FontIcon icon="iconfont icon-folder"/>`/sbb/src/main/resources/static`<FontIcon icon="iconfont icon-css"/>`style.css`

```css
.comment {
    border-top:dotted 1px #ddd;
    font-size:0.7em;
}
```

`comment` 클래스는 댓글 각각의 상단에 점선을 추가하고 글꼴 크기를 `0.7em`으로 설정하는 스타일이다.

#### <FontIcon icon="iconfont icon-java"/>`CommentRepository`

댓글 데이터를 처리하기 위해 다음과 같이 `Comment` 리포지터리를 작성하자.

> 파일명: <FontIcon icon="iconfont icon-folder"/>`/sbb/src/main/java/com/mysite/sbb/comment/`<FontIcon icon="iconfont icon-name"/>`CommentRepository.java`

```java
package com.mysite.sbb.comment;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
}
```

#### <FontIcon icon="iconfont icon-java"/>`CommentService`

그리고 리포지터리를 사용하여 댓글을 조회하고 생성, 수정, 삭제하는 서비스를 다음과 같이 만들자.

> 파일명: <FontIcon icon="iconfont icon-folder"/>`/sbb/src/main/java/com/mysite/sbb/comment/`<FontIcon icon="iconfont icon-name"/>`CommentService.java`

```java
package com.mysite.sbb.comment;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mysite.sbb.question.Question;
import com.mysite.sbb.user.SiteUser;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public Comment create(Question question, SiteUser author, String content) {
        Comment c = new Comment();
        c.setContent(content);
        c.setCreateDate(LocalDateTime.now());
        c.setQuestion(question);
        c.setAuthor(author);
        c = this.commentRepository.save(c);
        return c;
    }

    public Optional<Comment> getComment(Integer id) {
        return this.commentRepository.findById(id);
    }

    public Comment modify(Comment c, String content) {
        c.setContent(content);
        c.setModifyDate(LocalDateTime.now());
        c = this.commentRepository.save(c);
        return c;
    }

    public void delete(Comment c) {
        this.commentRepository.delete(c);
    }
}
```

`CommentService` 클래스에 생성(`create`), 조회(`getComment`), 수정(`modify`), 삭제(`delete`) 메서드를 생성했다.

#### <FontIcon icon="iconfont icon-java"/>`CommentForm`

그리고 댓글 작성시 필요한 `CommentForm`을 다음과 같이 작성하자.

> 파일명: <FontIcon icon="iconfont icon-folder"/>`/sbb/src/main/java/com/mysite/sbb/comment/`<FontIcon icon="iconfont icon-name"/>`CommentForm.java`

```java
package com.mysite.sbb.comment;

import jakarta.validation.constraints.NotEmpty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentForm {
    @NotEmpty(message = "내용은 필수항목입니다.")
    private String content;
}
```

`CommentForm`에 필요한 속성은 "내용(`content`)" 하나 뿐이다.

#### <FontIcon icon="iconfont icon-java"/>`CommentController`

그리고 질문 댓글을 작성, 수정, 삭제하기 위한 댓글 컨트롤러를 다음과 같이 작성하자.

> 파일명: <FontIcon icon="iconfont icon-folder"/>`/sbb/src/main/java/com/mysite/sbb/comment/`<FontIcon icon="iconfont icon-name"/>`CommentController.java`

```java
package com.mysite.sbb.comment;

import java.security.Principal;
import java.util.Optional;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.server.ResponseStatusException;

import com.mysite.sbb.question.Question;
import com.mysite.sbb.question.QuestionService;
import com.mysite.sbb.user.SiteUser;
import com.mysite.sbb.user.UserService;

@Controller
@RequestMapping("/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private QuestionService questionService;

    @Autowired
    private UserService userService;

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/create/question/{id}")
    public String createQuestionComment(CommentForm commentForm) {
        return "comment_form";
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping(value = "/create/question/{id}")
    public String createQuestionComment(@PathVariable("id") Integer id, @Valid CommentForm commentForm,
            BindingResult bindingResult, Principal principal) {
        Optional<Question> question = this.questionService.getQuestion(id);
        Optional<SiteUser> user = this.userService.getUser(principal.getName());
        if (question.isPresent() && user.isPresent()) {
            if (bindingResult.hasErrors()) {
                return "comment_form";
            }
            Comment c = this.commentService.create(question.get(), user.get(), commentForm.getContent());
            return String.format("redirect:/question/detail/%s", c.getQuestionId());
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "entity not found");
        }
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/modify/{id}")
    public String modifyComment(CommentForm commentForm, @PathVariable("id") Integer id, Principal principal) {
        Optional<Comment> comment = this.commentService.getComment(id);
        if (comment.isPresent()) {
            Comment c = comment.get();
            if (!c.getAuthor().getUsername().equals(principal.getName())) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "수정권한이 없습니다.");
            }
            commentForm.setContent(c.getContent());
        }
        return "comment_form";
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping("/modify/{id}")
    public String modifyComment(@Valid CommentForm commentForm, BindingResult bindingResult, Principal principal,
            @PathVariable("id") Integer id) {
        if (bindingResult.hasErrors()) {
            return "comment_form";
        }
        Optional<Comment> comment = this.commentService.getComment(id);
        if (comment.isPresent()) {
            Comment c = comment.get();
            if (!c.getAuthor().getUsername().equals(principal.getName())) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "수정권한이 없습니다.");
            }
            c = this.commentService.modify(c, commentForm.getContent());
            return String.format("redirect:/question/detail/%s", c.getQuestionId());

        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "entity not found");
        }
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/delete/{id}")
    public String deleteComment(Principal principal, @PathVariable("id") Integer id) {
        Optional<Comment> comment = this.commentService.getComment(id);
        if (comment.isPresent()) {
            Comment c = comment.get();
            if (!c.getAuthor().getUsername().equals(principal.getName())) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "삭제권한이 없습니다.");
            }
            this.commentService.delete(c);
            return String.format("redirect:/question/detail/%s", c.getQuestionId());
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "entity not found");
        }
    }
}
```

질문을 작성, 수정, 삭제하는 것과 동일한 방법이라서 각각의 메서드를 따로 설명하지는 않겠다. 다만 댓글을 작성하기 위해 <FontIcon icon="iconfont icon-page"/>`comment_form.html` 템플릿이 필요하고 댓글을 작성, 수정, 삭제한 후에는 해당 질문의 상세 페이지로 이동하기 위해 질문의 id 값이 필요하여 `c.getQuestionId()`를 사용했다는 점에 유의하자.

#### <FontIcon icon="iconfont icon-page"/>`comment_form.html`

그리고 댓글 작성과 수정시 필요한 `comment_form` 템플릿을 다음과 같이 작성하자.

> 파일명: <FontIcon icon="iconfont icon-folder"/>`/sbb/src/main/resources/templates/`<FontIcon icon="iconfont icon-page "/>`comment_form.html`

```html
<html layout:decorate="~{layout}">
<div layout:fragment="content" class="container">
    <h5 class="my-3 border-bottom pb-2">댓글 등록</h5>
    <form th:object="${commentForm}" method="post">
        <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}" />
        <nav th:replace="form_errors :: formErrorsFragment"></nav>
        <div class="mb-3">
            <label for="content" class="form-label">내용</label>
            <textarea th:field="*{content}" class="form-control" rows="10"></textarea>
        </div>
        <input type="submit" value="저장하기" class="btn btn-primary my-2">
    </form>
</div>
```

질문, 답변과 마찬가지로 댓글 등록과 수정에 함께 사용하기 위해 `action` 속성을 사용하지 않고 CSRF 항목도 수동으로 추가했다.

#### 질문 댓글 기능 확인

![이와 같이 수정 후 질문 상세 화면에서 <FontIcon icon="iconfont icon-select"/>`<댓글 추가 ..>`를 눌러 댓글을 추가해 보고 수정과 삭제 기능도 잘 작동하는지 확인해 보자.](https://wikidocs.net/images/page/162570/3-11_3.png)

### 답변 댓글

질문 댓글과 동일한 방법으로 구현 가능하므로 생략한다.

---

<TagLinks />