---
lang: ko-KR
title: 날 닮은 너를, 부족한 너를.
description: Article(s) > 날 닮은 너를, 부족한 너를.
icon: fa-brands fa-java
category: 
  - Java
  - Article(s)
tag: 
  - blog
  - blog.gangnamunni.com
  - java
  - arraylist
  - arrays
head:
  - - meta:
    - property: og:title
      content: Article(s) > 날 닮은 너를, 부족한 너를.
    - property: og:description
      content: 날 닮은 너를, 부족한 너를.
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/blog.gangnamunni.com/arrays-arraylist-arraylist.html
prev: /programming/java/articles/README.md
date: 2019-09-01
isOriginal: false
cover: https://blog.gangnamunni.com/_nuxt/img/ae65a45.jpg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Java > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/java/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="날 닮은 너를, 부족한 너를."
  desc="Arrays.arrayList 는 ArrayList 와 다르다"
  url="https://blog.gangnamunni.com/post/Arrays-arrayList-ArrayList/"
  logo="https://blog.gangnamunni.com/favicon.ico"
  preview="https://blog.gangnamunni.com/_nuxt/img/ae65a45.jpg"/>

`Arrays.asList(어레이)` 는 `String[]` 등의 배열을 `List<String>` 리스트로 바꿀 때 매우 자주 쓰던 메소드였습니다.

그런데 어느날 이렇게 짜고 나니 오류가 빠방!!!

```java
// 사진 url 배열을 리스트로 만들고
List<String> photoList = Arrays.asList(photoUrls);
// 해당 리스트에 또 다른 사진들을 추가 arrayList 형태
List<String> photoList2 = getPhotoList();
photoList.addAll(photoList2); // java.lang.UnsupportedOperationException
```

`java.lang.UnsupportedOperationException` 은 자주 못보던 오류라 열심히 찾아봤더니, 문제는 `Arrays.asList()` method 의 결과물은 우리가 흔히 쓰는 `java.util.ArrayList` 가 아니라 `Arrays` 안에 있는 inner class 였습니다.

## Arrays$arrayList

```java
/**
 * @serial include
 */
private static class ArrayList<E> extends AbstractList<E>
    implements RandomAccess, java.io.Serializable
{
    private static final long serialVersionUID = -2764017481108945198L;
    private final E[] a;

    ArrayList(E[] array) {
        a = Objects.requireNonNull(array);
    }

    @Override
    public int size() {
        return a.length;
    }

    @Override
    public Object[] toArray() {
        return a.clone();
    }

    @Override
    @SuppressWarnings("unchecked")
    public <T> T[] toArray(T[] a) {
        int size = size();
        if (a.length < size)
            return Arrays.copyOf(this.a, size,
                                    (Class<? extends T[]>) a.getClass());
        System.arraycopy(this.a, 0, a, 0, size);
        if (a.length > size)
            a[size] = null;
        return a;
    }

    /***
            중략
            ***/

    @Override
    public void sort(Comparator<? super E> c) {
        Arrays.sort(a, c);
    }
}
```

위 코드를 보시면 알 수 있듯이, abstractList 를 상속받아서 생성되었고 딱히 list 에 있는 `add` 나 `addAll` method 를 override 하지 않고 있습니다. 그렇기에 결국 해당  `addAll(컬렉션)` 을 사용하면 `AbstractCollection` 의 `addAll` 메소드가 수행되게 됩니다. ( `AbstractList` 에 `addAll(collection)` 메소드가 없기때문에 상속받은 `AbstractCollection`것을 수행)

```java
/** AbstractCollection class 발췌 **/
public boolean addAll(Collection<? extends E> c) {
    boolean modified = false;
    for (E e : c)
        if (add(e)) // abstractList 의 add 사용
            modified = true;
    return modified;
}
/** AbstractCollection class 발췌 **/

// 일반적인 add 메소드는 가능
public boolean add(E e) {
    **add(size(), e);** // 아래 add(index,element) 호출
    return true;
}

// 오류남... 결국 add(index,element) 를 재구현 하지 않으면 죄다 못쓰는 메소드
public void add(int index, E element) {
    throw new UnsupportedOperationException();
}
```

위와 같은 `addAll` 메소드를 그대로 사용하다보니 처음에 제가 `addAll` 하게 된 부분에서 `UnsupportedOperationException` 가 나오게 된 것입니다. 파라미터에 인덱스가 있는 `add` 를 Override 해야지만 `addAll` 도 쓸 수 있게 되는 상태로 보이는데, `Arrays.asList` 의 결과인 `Arrays$arrayList`클래스는 굳이 그렇게 만들지 않았기에 오류가 나네요.

---

## 결론

`Arrays.asList(배열)` 의 결과인 `arrayList` 는 기존의`java.util.ArrayList`  와는 다르며, `addAll` 메소드를 쓸 수 없는 상태다... 라고 알아 두면 될것 같습니다.

아무튼 이렇게 또 하나 배우게 되는 하루였습니다. 닮았지만 부족한 녀석을 주의하세요.

---

<TagLinks />