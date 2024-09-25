---
lang: ko-KR
title: 4. Testing
description: (4/5) Get started with Quarkus and JPAStreamer
category: 
  - Java
  - Quarkus
  - Youtube
tag: 
  - blog
  - freecodecamp.org
  - java
  - jdk
  - jdk8
  - stream
  - quarkus
  - jpa
  - jpastreamer
  - youtube
  - crashcourse
head:
  - - meta:
    - property: og:title
      content: (4/5) Get started with Quarkus and JPAStreamer
    - property: og:description
      content: 4. Testing
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/get-started-with-quarkus-and-jpastreamer-2/testing.html
date: 2023-11-03
isOriginal: false
author: Julia Gustafsson
cover: https://freecodecamp.org/news/content/images/size/w2000/2023/11/jpastreamer_featureimage_update.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Get started with Quarkus and JPAStreamer",
  "desc": "In the world of software development, innovation often arrives in the form of powerful tools that transform the way we build applications - enter Quarkus, a development platform that's reshaping the Java landscape.  If you are new...",
  "link": "/explore/articles/freecodecamp.org/get-started-with-quarkus-and-jpastreamer-2/README.md",
  "logo": "https://cdn.freecodecamp.org/universal/favicons/favicon.ico",
  "background": "rgba(10,10,35,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Get started with Quarkus and JPAStreamer"
  desc="In the world of software development, innovation often arrives in the form of powerful tools that transform the way we build applications - enter Quarkus, a development platform that's reshaping the Java landscape.  If you are new..."
  url="https://freecodecamp.org/news/get-started-with-quarkus-and-jpastreamer-2/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://freecodecamp.org/news/content/images/size/w2000/2023/11/jpastreamer_featureimage_update.png"/>

<VidStack src="youtube/KZnQ5R8Kd4I" />

## Continuous Testing

You can configure Quarkus to automatically trigger the execution of your JUnit test suite every time you run your application. Or alternatively, trigger the execution manually by pressing <kbd>r</kbd> in the Quarkus dev terminal. Before, I understood the value of test-driven-development (TDD) but I have always felt it got in the way of focusing on the business logic as I would only run them occasionally. This does not mean Quarkus writes the tests for you, but they are easy to execute and the dev mode constantly reminds you that they are there.

Both integration tests and unit tests.

Even though I initially laid out the requirements for this tutorial, there are some specifics to be aware of when it comes to continuous testing. If you used the Quarkus project configurator as described in this tutorial, you should already be set up. Otherwise, make sure that you:

- Depend on the Quarkus JUnit 5 module
- Define a Maven Surefire Plugin version (*e.g.* 3.0.0)  as the default version does not have support for JUnit 5
- (*Optional*) Rest-assured for simple REST endpoint tests

To meet the above requirements, check that you have the following dependencies and plugin configurations in your <FontIcon icon="iconfont icon-code"/>`pom.xml`:

```xml
<dependencies>
  <dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-junit5</artifactId>
    <scope>test</scope>
  </dependency>
  <dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>rest-assured</artifactId>
    <scope>test</scope>
  </dependency>
…

</dependencies>
…

<build>
  <plugins>
    <plugin>
      <artifactId>maven-surefire-plugin</artifactId>
      <version>3.0.0</version>
      <configuration>
        <systemPropertyVariables>
          <java.util.logging.manager>
            org.jboss.logmanager.LogManager
          </java.util.logging.manager>
          <maven.home>${maven.home}</maven.home>
        </systemPropertyVariables>
      </configuration>
    </plugin>
    ….  

  </plugins>
</build>
```

Quarkus tests are placed as your regular JUnit tests in the standard test folder, _i.e._ <FontIcon icon="fas fa-folder-open"/>`/src/test/java` if your build tool is Maven. The only real difference is that you need to annotate your test classes with `@QuarkusTest` for the tests to be recognized by Quarkus. The following sections contains examples on how to craft unit and integration tests.

### Unit Tests

There’s nothing special about creating unit tests with Quarkus apart from the fact that they can be swiftly executed in the development mode. To test the  `FilmRepository`, you can simply inject it into your test class as you did in the `FilmResource` and call your CRUD methods.  

Here is an example of a test that ensures that your `getFilm()`-method retrieves a film with the title “AFRICAN EGG”.

```java
@QuarkusTest
public class FilmRepositoryTest {

  @Inject
  FilmRepository filmRepository;
    
  @Test
  public void test() {
    final Optional<Film> film = filmRepository.getFilm(5);
    assertTrue(film.isPresent());
    assertEquals("AFRICAN EGG", film.get().getTitle());
  }
}
```

### REST Integration Tests

Quarkus also facilitates effortless integration testing of your REST endpoints. By leveraging the rest-assured library, which was mentioned in the previous section, you gain access to a rich API tailored for REST testing.

The next example is reminiscent of the prior unit test, however in the form of an integration test. Upon execution, Quarkus will automatically issue a GET request to your film endpoint, targeting a film with an ID of 5. The test anticipates a successful response (HTTP status code `200`) and verifies that the response body contains the film's title, "__AFRICAN EGG.__"

```java
@QuarkusTest
public class FilmResourceTest {
    @Test
    public void test() {
        given()
            .when().get("/film/5")
            .then()
            .statusCode(200)
            .body(containsString("AFRICAN EGG"));
    }
}
```

### Running the Tests

Assuming you are still running in the Quarkus dev mode, you can use one of these commands to control the test phase:

```
[r] - Re-run all tests
[f] - Re-run failed tests
[v] - Print failures from the last test run
```

The tests results will be recorded in the Quarkus logs:

All 1 tests are passing (0 skipped), 1 tests were run in 336ms. Tests completed at 17:34:25 due to changes to `FilmRepository.class`.

If you want the tests to be executed each time an application change is detected, you can set `quarkus.test.continuous-testing=enabled` in <FontIcon icon="fas fa-file-lines"/>`application.properties`.

You also have the option of executing your tests whenever you are not running in dev mode using the command:

::: tabs

@tab:active quarkus

```sh
quarkus test
```

@tab gradle

```sh
./gradlew quarkusTest
```

@tab mvn

```sh
./mvnw quarkus:test
```

:::

---

<TagLinks />