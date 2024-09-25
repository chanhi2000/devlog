---
lang: ko-KR
title: 3. JPA & JPAStreamer
description: (3/5) Get started with Quarkus and JPAStreamer
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
      content: (3/5) Get started with Quarkus and JPAStreamer
    - property: og:description
      content: 3. JPA & JPAStreamer
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/get-started-with-quarkus-and-jpastreamer-2/jpa-jpastreamer.html
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

## Fetching Films with Java Streams and JPAStreamer

So far our application has not touched the database, but that is our next move. We start simple and gradually build up Stream queries that are more powerful.

Initiate this process by establishing a dedicated repository package adjacent to the existing model package. Inside this repository section, create a class named FilmRepository. As the name implies, this class will serve as the hub for our database queries. This class needs to be annotated with `@ApplicationScoped` for it to be injected into your `FilmResource` later.

Then, to start harnessing JPAStreamer, integrate it into the repository by injecting a JPAStreamer instance. This instance is your access point to the Stream query API. Here is what your class should look like at this point:

```java
@ApplicationScoped
FilmRepository() {

  @Inject
  JPAStreamer jpaStreamer;
  // ... 생략 ... 
}
```

### Fetching an Entity by Id

The first endpoint will fetch the title of a film, given an id. This will be your first opportunity to leverage JPAStreamer to perform queries. You can think of a Stream query as a virtual pipeline that is trafficked by all the Films in the database. The operations appended to the pipeline will decide what entities are allowed through, and in what shape. For example, a filter operation is the equivalent of a `WHERE` statement as it puts a logical constraint on the resulting entities.

To initiate a Stream query, you simply call the method `JPAStreamer.stream()` and provide it with a source of your choice. In this case, our source is the Film table, represented by the entity `Film.class`. The return value of this operation is a standard `Stream<Film>`. This means you can, in practice, apply any Stream operation available in the Stream API to manipulate the Film entities.

But not so fast - your choice of Stream operations significantly influences performance, particularly with large datasets! If you're familiar with the Stream API, you've likely encountered numerous lambda-based examples for predicates and mappings such as this:

```java
.filter(f -> f.getFilmId().equals(filmId))
```

However, this predicate cannot be optimized by JPAStreamer as the anonymous lambda holds too little metadata to make a correct SQL translation. Therefore, make it a habit to express predicates using the JPAStreamer metamodel. Guided by IntelliSense in your IDE, this is simple:

```java
.filter(Film$.id.equal(filmId))
```

Upon execution, this operation will in fact be translated to a SQL WHERE operation to ensure that the filtering is performed in the database, not in the JVM, for efficiency.

With this knowledge, you can go ahead and create a method that fetches films based on their id as follows:

```java
public Optional<Film> film(int filmId) {
  return jpaStreamer.stream(Film.class)
    .filter(Film$.filmId.equal(filmId))
    .findFirst();
}
```

As before, use the <kbd>s</kbd> key to reload your application in the terminal and browse to: `http://localhost:8080/film/23`

Assuming all is well, you'll be greeted by the film's title: `ANACONDA CONFESSIONS`

A quick look in the application log reveals the Hibernate query that was issued by JPAStreamer, confirming the presence of a `WHERE` operation.

```
Hibernate:
  select
    f1_0.film_id,
    f1_0.description,
    f1_0.language_id,
    f1_0.last_update,
    f1_0.length,
    f1_0.original_language_id,
    f1_0.rating,
    f1_0.rental_duration,
    f1_0.rental_rate,
    f1_0.replacement_cost,
    f1_0.special_features,
    f1_0.title
  from
    film f1_0
  where
    f1_0.film_id=? limit ?
```

### Paged Queries

When grappling with a substantial dataset, shipping users the entire results might prove unpractical or even unfeasible. That's where paging enters the scene, limiting the result set. Leveraging Java Stream queries, paging becomes an effortless endeavor. You can easily navigate through pages by skipping preceding data with the `skip()`-operator and constraining the results to a predefined page size with `limit()`.

Assuming a page size of 20, you can facilitate client access to films that match or exceed a specified length while maintaining an orderly sequence based on length. Here's how:

```java
private static final int PAGE_SIZE = 20; 

// ... 생략 ...

public Stream<Film> paged(long page, int minLength) {
  return jpaStreamer.stream(Film.class)
    .filter(Film$.length.greaterThan(minLength))
    .sorted(Film$.length)
    .skip(page * PAGE_SIZE)
    .limit(PAGE_SIZE);
}
```

To accommodate this paged content, your `FilmResource` needs a new endpoint:

```java
@GET
@Path("/paged/{page}/{minLength}")
@Produces(MediaType.TEXT_PLAIN)
public String paged(long page, int minLength) {
  return filmRepository.paged(page, minLength)
    .map(f -> String.format("%s (%d min)", f.getTitle(), f.getLength()))
    .collect(Collectors.joining("\n"));
}
```

A simple call to [http://localhost:8080/paged/3/120](http://localhost:8080/paged/3/120) fetches the movies on the third page, each lasting a minimum of 2 hours, yielding an anticipated response:

```
AMERICAN CIRCUS (129 min)
UNFORGIVEN ZOOLANDER (129 min)
...
CHOCOLATE DUCK (132 min)
STREAK RIDGEMONT (132 min)
```

A quick look in the Quarkus dev terminal reveals that all Stream operators where embedded in the query as `WHERE`-, `ORDER BY`- and `LIMIT`-operator with a lower and upper value:  

```
Hibernate:
  select
    f1_0.film_id,
    f1_0.description,
    f1_0.language_id,
    f1_0.last_update,
    f1_0.length,
    f1_0.original_language_id,
    f1_0.rating,
    f1_0.rental_duration,
    f1_0.rental_rate,
    f1_0.replacement_cost,
    f1_0.special_features,
    f1_0.title
  from
    film f1_0
  where
    f1_0.length>?
  order by
    f1_0.length limit ?,
    ?
```

### Projections

You've probably noticed that you're retrieving the entire array of Film table columns, although you only include the title and length in your response. You can save application resources by using a projection as the Stream source instead of the full table. The `filmId` is required as it is the primary key.

```java
public Stream<Film> paged(long page, int minLength) {
  return jpaStreamer.stream(Projection.select(Film$.filmId, Film$.title, Film$.length))
    .filter(Film$.length.greaterThan(minLength))
    .sorted(Film$.length)
    .skip(page * PAGE_SIZE)
    .limit(PAGE_SIZE);
}
```

This change also require that you enhance the `Film` entity with a matching constructor.

```java
public Film(short filmId, String title, int length) {
  this.filmId = filmId;
  this.title = title;
  this.length = length;
}
```

Now go ahead and make a second request to the paged endpoint and observe how the query is limited to three columns.

[http://localhost:8080/paged/3/120](http://localhost:8080/paged/3/120)

```
Hibernate:
  select
    f1_0.film_id,
    f1_0.title,
    f1_0.length
  from
    film f1_0
  where
    f1_0.length>?
  order by
    3 limit ?,
    ?
```

### Joins

Now onto something a little more interesting - performing a Stream join. A join is a combination of several tables, translated to Stream queries, which means you need to update the Stream source to include entities from an additional table.

In section 5.2 you defined a mapping between the Film and Actor-table via the field `List<Actor>` actors.  With JPAStreamer, you can achieve a join of the Film and Actor table by creating a `StreamConfiguration<Film>` that references this field as follows:

```java
StreamConfiguration<Film> sc = StreamConfiguration.of(Film.class).joining(Film$.actors);
```

The stream configuration now replaces `Film.class` as the stream source. While where at it we might as well add another filter and flip the sorting order. Notice how multiple predicates can by combined with the and/or-operators.

```java
public Stream<Film> actors(String startsWith, int minLength) {

  final StreamConfiguration<Film> sc = StreamConfiguration
    .of(Film.class).joining(Film$.actors);
  return jpaStreamer.stream(sc)
    .filter(Film$.title.startsWith(startsWith)
      .and(Film$.length.greaterThan(minLength)))
    .sorted(Film$.length.reversed());
}
```

As a response to the clients, it seems suitable to present the title of the films, the films’ length (to confirm that the sorting order is correct), and a list of the starring actors:

```java
@GET
@Path("/actors/{startsWith}/{minLength}")
@Produces(MediaType.TEXT_PLAIN)
public String actors(String startsWith, short minLength) {
  return filmRepository.actors(startsWith, minLength)
    .map(f -> String.format("%s (%d min): %s",
      f.getTitle(),
      f.getLength(),
      f.getActors().stream()
        .map(a -> String.format("%s %s", a.getFirstName(), a.getLastName()))
        .collect(Collectors.joining(", "))))
    .collect(Collectors.joining("\n"));
}
```

Now try calling the new endpoint with a start character A and a minimum length of 2 hours: [http://localhost:8080/actors/A/120](http://localhost:8080/actors/A/120). You should expect the following results:

```
ANALYZE HOOSIERS (181 min): TOM MCKELLEN, TOM MIRANDA, JESSICA BAILEY, GRETA MALDEN, ED GUINESS
ALLEY EVOLUTION (180 min): KARL BERRY, JUDE CRUISE, ALBERT JOHANSSON, GREGORY GOODING, JOHN SUVARI
...
ALAMO VIDEOTAPE (126 min): JOHNNY CAGE, SCARLETT DAMON, SEAN GUINESS, MICHAEL BENING
ARIZONA BANG (121 min): KARL BERRY, RAY JOHANSSON, RUSSELL BACALL, GRETA KEITEL
```

Below is the resulting query, confirming that the join was applied.

```
Hibernate:
  select
    f1_0.film_id,
    a1_0.film_id,
    ...
  from
    film f1_0
  left join
    (film_actor a1_0
  join
    actor a1_1
      on a1_1.actor_id=a1_0.actor_id)
        on f1_0.film_id=a1_0.film_id
    where
      f1_0.title like replace(?,'\\','\\\\')
      and f1_0.length>?
    order by
      f1_0.length desc
```

### Updating Films

While JPAStreamer’s strength lies in reading data, you can use it to update your database as well. Let’s say the imagined video rental store has a price model based on the length of the films. In that case, you want to be able to adjust the rental rate based on length. That’s easily achieved by filtering out the relevant films and applying the operator `forEach()` to set a new price. By annotating the method with `@Transactional`, you ensure that Hibernate persists the changes to your Film entities.

```java
@Transactional
public void updateRentalRate(int minLength, int maxLength, BigDecimal rentalRate) {
  jpaStreamer.stream(Film.class)
    .filter(Film$.length.between(minLength, maxLength))
    .forEach(f -> {
      f.setRentalRate(rentalRate);
  });
}
```

I’ll leave it to you to create an endpoint that facilitates clients to initiate rental rate updates.

---

<TagLinks />