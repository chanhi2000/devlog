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

---

## 03. 스프링부트 2.x 버전 안내

---

## 04. 댓글 (삭제예정)

---


<TagLinks />