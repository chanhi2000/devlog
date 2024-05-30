---
lang: ko-KR
title: Singleton
description: Java > Singleton
icon: fas fa-bone
category:
  - Java
  - Singleton
tag: 
  - git
  - github
  - java
  - kotlin
  - android
head:  
  - - meta:
    - property: og:title
      content: Java > Singleton
    - property: og:description
      content: Singleton
    - property: og:type
      content: article
    - property: og:url
      content: https://chanhi2000.github.io/programming/java/singleton.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

Singleton 은 객체 생성을 제한시키는 목적외에도 지연 초기화(lazy initializaion) 목적도 있다.

## 기본 코드

```java
public class Singleton { 
     private static Singleton instance;      
     private Singleton() {} 
     public static Singleton getInstance() { 
          if (instance == null) 
               instance = new Singleton(); 
          return instance; 
     } 
}
```

`private` 생성자로 외부에서 Singleton 객체를 생성하지 못하게 막고 `getInstance()` 메서드를 통해서만 제공한다. `getInstance()` 에서는 instance 가 `null` 일때만 생성하도록 해 객체 생성을 제한시킨다. 

하지만 이 방식으로 멀티스레드 환경에서 돌리게 되면 race condition 때문에 제대로 동작하지 않을 가능성이 있다. 스레드 A와 스레드 B가 동시에 `getInstance()`를 수행한다고 치자. `instance` 변수가 `null`이라는 사실을 본 다음 스레드 A는 인스턴스를 새로 생성한다. 스레드 B도 `instance` 변수가 `null`인지 살펴본다. 이때 `instance` 변수의 `null` 여부는 스케줄이 어떻게 변경될지 또는 스레드 A가 인스턴스를 생성하고 instance 변수에 저장하기까지 얼마나 걸리는지 등의 예측하기 어려운 타이밍에 따라 달라진다. 원래 `getInstance()`는 항상 같은 인스턴스를 리턴하도록 설계돼 있는데, 스레드 B가 살펴보는 그 시점에 `instance` 변수가 null이면 `getInstance()`를 호출한 두 스레드가 각자 서로 다른 인스턴스를 가져갈 수도 있다.

---

## 멀티스레드 환경에서도 하나만 생성되게 하려면?

### 방법1 `synchronized` 단순추가

```java
public class Singleton { 
     private static Singleton instance; 
     private Singleton() {} 
     public static synchronized Singleton getInstance() { 
          if (instance == null) 
               instance = new Singleton(); 
          return instance; 
     } 
}
```

가장 쉽게 생각나는건 `getInstance` 메서드에 `synchronized` 를 붙이는 거다. 하지만 race condition 은 피했지만 다른 부정적인 임팩트가 발생했다. `getInstance` 메서드에 대한 모든 호출은 동기화 오버헤드를 갖게 됐다. 사실 race condition 가능성은 단지 `instance` 레퍼런스가 처음 할당되는 경우에만 발생하기 때문에 발생할 빈도가 매우 낮다. 따라서 동기화 방법이 오히려 오버헤드가 큰 방법이다.

### 방법2 성질 급한 초기화

성질 급한 초기화 방법은 `static` 구문에서 초기화함으로써 생성될 때나 참조될 때 따로 동기화를 맞출 필요없게 한다.

`static` 으로 선언된 초기화 문장은 JVM 에서 해당 클래스를 읽어들이고 실제 해당 클래스를 사용하기 전에 실행된다. 이런 초기화 과정에서 JVM이 락을 확보하며 각 스레드에서 해당 클래스가 읽혀져 있는지를 확인하기 위해 락을 다시 확보하게 돼 있다. 따라서 JVM이 락을 확보한 상태에서 메모리에 쓰여진 내용은 모든 스레드가 볼 수 있다.

```java
// 자바 병렬 프로그래밍 p501
public class Singleton { 
     private static Singleton instance = new Singleton(); 
     public static Singleton getInstance() { 
          return instance; 
     } 
}
```

단 이 방법은 초기화한 객체의 내용이 그대로인 상태를 가정할 때만 성립한다.

### 방법3 늦은 초기화 홀더 클래스

```java
// 자바 병렬 프로그래밍 p502
public class ResourceFactory { 
     private static class ResourceHolder { 
          public static Resource resource = new Resource(); 
     } 
     public static Resource getResource() { 
          return ResourceHolder.resource; 
     } 
}
```

오로지 `Resource` 클래스를 초기화할 목적으로 늦은 초기화 홀더 클래스 구문을 적용해 작성한 클래스다. JVM은 `ResourceHolder` 클래스를 실제로 사용하기 전까지는 해당 클래스를 초기화하지 않으며, `Resource` 클래스 역시 static 초기화 구문에서 초기화하기 때문에 추가적인 동기화 기법을 적용할 필요가 없다. 어느 스레드건 간에 처음 `getResource()` 메서드를 호출하면 JVM에서 `ResourceHolder` 클래스를 읽어들여 초기화하고, `ResourceHolder` 클래스를 초기화하는 도중에 `Resource` 클래스 역시 초기화하게 돼 있다.

_(이펙티브 자바 item83)_ '지연 초기화는 신중히 사용하라' 에서도 위의 방식을 추천한다. '성능 문제 때문에 정적 필드 초기화를 지연시키고 싶을 때는 초기화 지연 담당 클래스(lazy initialization holder class) 숙어를 적용하라' 라고 되어있다.

```java
// 이펙티브자바 아이템83
private static class FieldHolder {
	static final FieldType field = computeFieldValue();
}

private static FieldType getField() { return FieldHolder.field; }
```

이 숙어가 좋은 점은 `getField` 를 동기화 메서드로 선언하지 않아도 된다는 것이다. 따라서 초기화를 지연시켜도 메서드 이용 비용은 전혀 증가하지 않는다. 최신 VM은 클래스를 초기화하기 위한 필드 접근은 동기화한다. 하지만 클래스가 일단 초기화되고 나면 코드를 바꿔서 앞으로의 필드 접근에는 어떤 동기화나 검사도 필요치 않도록 만든다.

### 방법4 Supplier 사용

자바8에서 추가된 `FunctionalInterface Supplier<T>` 를 사용하는 방법이다.

```java
// Functional Programming in Java8
public class Holder {
  private Supplier<Heavy> heavy = () -> createAndCacheHeavy();
  
  public Holder() {
    System.out.println("Holder created");
  }

  public Heavy getHeavy() {
    return heavy.get();
  }
  //...

  private synchronized Heavy createAndCacheHeavy() {
    class HeavyFactory implements Supplier<Heavy> {
      private final Heavy heavyInstance = new Heavy();

      public Heavy get() { return heavyInstance; }
    }

    if(!HeavyFactory.class.isInstance(heavy)) {
      heavy = new HeavyFactory();
    }
    
    return heavy.get();
  }
}
final Holder holder = new Holder();
holder.getHeavy();
```

Holder의 인스턴스가 생성될 때 Heavy의 인스턴스는 생성되지 않는다. 그리고 처음 `holder.getHeavy()` 가 호출되면 그 안에 `heavy`는 기본 `Supplier<Heavy>` type 이기 때문에 `Supplier` 구현체가 실행된다. 따라서 `createAndCacheHeavy()` 메서드가 실행되고, `heavy` 는 `HeavyFactory`가 아니므로 새롭게 `HeavyFactory` 객체를 만든다. 그리고 `HeavyFactory` 에서 `Heavy` 객체를 만들고 `get()` 메서드를 통해 제공한다. 

그 이후부터는 `heavy` 가 `HeavyFactory` 타입이기 때문에 `getHeavy()` 메서드를 호출했을 때 바로 `heavyInstace()` 를 가져오게 된다. 처음 객체 생성할 때만 `synchronized` 부분으로 보호받고 생성 후 호출은 다르게 접근하여 동기화 오버헤드도 발생시키지 않는다.

### 방법5 `enum`

```java
// 이펙티브자바 item3
public enum EnumSingleton { 
     INSTANCE; 
     public static EnumSingleton getInstance() { 
          return INSTANCE; 
     } 
}
```

이전 방식에 비해 더 간결하고, 직렬화가 자동으로 처리된다. 리플렉션을 통한 공격에도 안전하다. 원소가 하나뿐인 `enum` 자료형이야말로 `Singleton` 을 구현하는 가장 좋은 방법이다.

---

##  Singleton 단점

### 1. 클래스를 Singleton 으로 만들면 클라이언트를 테스트하기가 어려워질 수가 있다. 

Singleton 이 어떤 인터페이스를 구현하는 것이 아니면 가짜 구현으로 대체할 수 없기 때문이다.

### 2. 리플렉션 기능을 통해 `private` 생성자를 호출하는 공격을 받을 수 있다.

`AccessibleObject.setAccessible` 메서드의 도움을 받아 권한 획득이 가능하다.

```java
Constructor<?> con = Private.class.getDeclaredConstructors()[0];
con.setAccessible(true);
Private p = (Private) con.newInstance();
```
 
### 3. Singleton 클래스를 직렬화 가능(`Serializable`) 클래스로 만드려면 클래스 선언에 `implements Serializable`을 추가하는 것으로는 부족하다.

_(이펙티브 자바 item89)_ Singleton 특성을 유지하려면 모든 필드를 `transient`로 선언하고 `readResolve()` 메서드를 추가해야 한다. 그렇지 않으면 직렬화된 객체가 역직렬화될 때마다 새로운 객체가 생기게된다.

```java
public class Elvis implements Serializable {
	
    public static final Elvis INSTANCE = new Elvis();
    private Elvis() { ... }
    
	// Singleton 상태를 유지하기 위한 readResolve 구현 
	private Object readResolve() { 
    	// 동일한 Elvis 객체가 반환되도록 하는 동시에, 가짜 Elvis 객체는 GC가 처리하도록 만든다. 
    	return INSTANCE; 
	}
}
```

역직렬화할 객체의 클래스에 제대로 선언된 `readResolve()` 메서드가 정의되어 있는 경우, 역직렬화가 끝나서 만들어진 객체에 대해 이 메서드가 호출된다.

### 4. `private` 생성자를 갖고 있기 때문에 상속할 수 없다. 

_(토비 스프링)_ 기술적인 서비스만 제공하는 경우라면 상관없겠지만, 애플리케이션의 로직을 담고 있는 일반 오브젝트의 경우 Singleton 으로 만들었을 때 객체지향적인 설계의 장점을 적용하기가 어렵다는 점은 심각한 문제다.

### 5. 서버환경에서는 `Singleton` 이 하나만 만들어지는 것을 보장하지 못한다. 

_(토비 스프링)_ 서버에서 클래스 로더를 어떻게 구성하고 있느냐에 따라서 Singleton 클래스임에도 _하나 이상_ 의 오브젝트가 만들어질 수 있다. 여러 개의 JVM에 분산돼서 설치가 되는 경우에도 각각 독립적으로 오브젝트가 생기기 때문에  Singleton 으로서의 가치가 떨어진다.

### 6. Singleton 의 사용은 전역 상태를 만들 수 있기 때문에 바람직하지 못하다. 

_(토비 스프링)_ Singleton 은 사용하는 클라이언트가 정해져 있지 않다. Singleton 의 스태틱 메서드를 이용해 언제든지 Singleton 에 쉽게 접근할 수 있기 때문에 애플리케이션 어디서든지 사용될 수 있고, 그러다 보면 자연스럽게 전역 상태로 사용되기 쉽다. 아무 객체나 자유롭게 접근하고 수정하고 공유할 수 있는 전역 상태를 갖는 것은 객체지향 프로그래밍에서는 권장되지 않는 프로그래밍 모델이다.

---

<TagLinks />