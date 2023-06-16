---
lang: ko-KR
title: 객체의 생성과 삭제
description: ☕️Effective Java > 객체의 생성과 삭제
tags: ["crashcourse", "java", "jdk"]
meta:
  - name: ☕️Effective Java > 객체의 생성과 삭제
    content: 객체의 생성과 삭제
  - property: og:title
    content: 객체의 생성과 삭제
  - property: og:description
    content: ☕️Effective Java > 객체의 생성과 삭제
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/effective-java.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

<!-- https://yangbongsoo.gitbook.io/study/effective-java/creating_and_destroying_objects -->

객체를 만들어야하는 시점과 그 방법, 객체 생성을 피해야 하는 경우와 그 방법, 적절한 순간에 객체가 삭제되도록 보장하는 방법, 그리고 삭제 전에 반드시 이루어져야 하는 청소 작업들을 관리하는 방법을 살펴본다.

## 규칙1 : 생성자 대신 정적 팩터리 메서드를 사용할 수 없는지 생각해보라

> Consider static factory methods instead of consturctors

클래스를 통해 객체를 만드는 일반적인 방법(`public` 생성자 이용)말고 또 다른 방법이 있다. 바로 `public static` factory method를 만드는 것이다.

```java
public static Boolean valueOf(boolean b){
	return b ? Boolean.TRUE : Boolean.FALSE;
}
```

### 첫 번째 장점은, 생성자와는 달리 정적 팩토리 메서드에는 이름(_name_)이 있다

 생성자에 전달되는 인자(`parameter`)들은 어떤 객체가 생성되는지를 설명하지 못하지만, 정적 팩토리 메서드는 이름을 잘 짓기만 한다면 사용하기 쉽고, 클라이언트 코드의 가독성도 높아진다. 예를들어, 소수일 가능성이 높은 `BigInteger` 객체를 생성하는 생성자 `BigInteger(int, int, Random)`는 `BigInteger.probablePrime`과 같은 이름의 정적 팩토리 메서드로 표현했으면 더 이해하기 쉬웠을 것이다.
 
 > 이 메서드는 JDK 1.4 버전에 결국 추가됨

같은 시그너처(메서드의 형태가 같은)를 갖는 생성자를 여러 개 정의할 필요가 있을 때는 그 생성자들을 정적 팩토리 메서드로 바꾸고, 메서드 이름을 보면 차이가 명확히 드러나도록 작명에 신경쓰자.

### 두 번째 장점은, 생성자와는 달리 호출할 때마다 새로운 객체를 생성할 필요가 없다.

 앞서 살펴본 `Boolean.valueOf(Boolean)` 메서드는 이 기법을 활용한 좋은 사례다. 결코 객체를 생성하지 않는다. 동일한 객체가 요청되는 일이 잦고, 특히 객체를 만드는 비용이 클 때 적용하면 성능을 크게 개선할 수 있다.

### 세 번째 장점은, 생성자와는 달리 반환값 자료형(_return type_)의 하위 자료형 객체(_an object of any subtype_)를 반환할 수 있다

따라서 반환되는 클래스를 선택할 수 있는 유연함(flexibility)을 제공한다. 이걸 활용하면 `public`으로 선언되지 않은 클래스의 객체를 반환하는 API를 만들 수 있다. 그러면 구현 세부사항을 감출 수 있으므로 아주 간결한 API가 가능하다. 이 기법은 인터페이스 기반 프레임워크 (interface-based-framework) 구현에 적합한데, 이 프레임워크에서 인터페이스는 정적 팩토리 메서드의 반환값 자료형으로 이용된다. 인터페이스는 정적 메서드를 가질 수 없으므로 (Prior to Java 8, interfaces couldn't habve static methods), 관습상 반환값 자료형이 Type이라는 이름의 인터페이스인 정적 팩토리 메서드는 Types라는 이름의 객체 생성 불가능 클래스 안에 둔다.

```java
public class Collections {
	// Suppresses default constructor, ensuring non-instantiability.
	private Collections() {
	}
	// ...
	public static <T> Collection<T> synchronizedCollection(Collection<T> c) {
		return new SynchronizedCollection<>(c);
	}
	static <T> Collection<T> synchronizedCollection(Collection<T> c, Object mutex) {
		return new SynchronizedCollection<>(c, mutex);
	}

	/**
	 * @serial include
	 */
	static class SynchronizedCollection<E> implements Collection<E>, Serializable {
		private static final long serialVersionUID = 3053995032091335093L;

		final Collection<E> c;  // Backing Collection
		final Object mutex;	 // Object on which to synchronize

		SynchronizedCollection(Collection<E> c) {
			this.c = Objects.requireNonNull(c);
			mutex = this;
		}
		// ...
	}
}
```

예를 들어, 자바의 컬렉션 프레임워크에는 45개의 컬렉션 인터페이스 구현체가 들어 있는데, 변경이 불가능한 컬렉션과 동기화된 (synchronized) 컬렉션 등이다. 이 구현체들 거의 전부는 `java.util.Collections`라는 객체 생성 불가능 클래스의 정적 팩토리 메서드를 통해 이요하는데, 반환되는 객체의 실제 클래스는 `public`이 아니다. 구현체별로 45개의 public 클래스들을 만들었다면 컬렉션 프레임워크 API의 규모는 더 커졌을 것이다.

인터페이스 기반 프레임워크 기법은 단순히 API 규모가 줄어든게 아니라 개념상의 무게감(conceptual weight)가 줄은 것이다. API 사용자는 반환된 객체가 인터페이스에 규정된 내용을 정확하게 따른다는 사실을 알고 있다. 또한 클라이언트가 구현된 클래스가 아닌 인터페이스를 참조해서 사용하게 되는데 일반적으로 좋은 습관이다.

::: note (3rd edition 추가)

As of Java 8, the restriction that interfaces cannot contain `static` methods was eliminated, so there is typically little reason to provide a noninstantiable companion class for an interface. Many `public` static members that would have been at home in such a class should instead be put in the interface itself. __Note, however that it may still be necessary to put the bulk of the implementation code behind these static methods in a separate package-private class__. This is because Java 8 requires all static members of an interface to be `public`. Java 9 allows `private static` methods, but `static` fields and static member classes are still required to be `public`.

> 자바8 부터는 인터페이스에 `static` 메서드를 포함시킬 수 없는 제약이 사라졌다. 그래서 `Collection` 인터페이스를 위해 `Collections` 같이 noninstantiable companion class를 제공할 이유가 줄었다. 그러나 여전히 인터페이스 대신에 별도의 클래스에 구현 코드를 뒤로 두는 것은 필요하다. 자바8 인터페이스의 `static` 멤버들이 다 `public`이기 때문이다. 그리고 인터페이스에 팩토리 메서드를 추가하면, 인터페이스에서 생성된 구현 클래스를 인터페이스가 직접 의존하게 된다. 개인적으로 인터페이스가 구현 클래스를 의존하는 방식이 좋아보이지 않는다. 자바9 부터는 `private static` 메서드를 허용하지만 `static` 필드들 and `static` 멤버 클래스는 여전히 `public`이다.

:::

__A fourth advantage of static factories is that the class of the returned object can vary from call to call as a fuction of the input parameters__

네번 째 장점은 정적 팩토리 메서드 인자에 따라 반환될 객체를 다양하게 할 수 있다. 메서드에 주어지는 인자를 이용하면 어떤 클래스의 객체를 만들지도 동적으로 결정할 수 있다. 반환될 객체의 클래스가 정적 팩토리 메서드의 반환값 자료형에 부합하기만 하면 된다. 릴리즈마다 반환되는 클래스가 달라질 수도 있다. `EnumSet`에는 `public` 생성자들이 없으며 정적 팩토리 메서드들 뿐이다.

OpenJDK 구현체에서 enum 상수 개수에 따라 두 개 구현체 가운데 하나를 골라 해당 클래스의 객체를 만들어 반환한다. enum 상수들이 64개 이하일 경우(대부분이 그렇다) 팩토리 메서드는 RegularEnumSet 객체를 반환하는데, 이 객체는 내부적으로 long 변수 하나만을 사용한다. enum 상수들이 64개보다 많을 경우에는 JumboEnumSet 객체를 반환하는데, 이 객체는 내부적으로 long 형의 배열을 사용한다.

클라이언트는 팩토리 메서드가 반환하는 객체의 실제 클래스를 알 수도 없고, 알 필요도 없다. 단지 EnumSet의 하위 클래스라는 사실만 중요할 뿐이다.

__A fifth advantage of static factories is that the class of the returned object need not exist when the class containing the method is written__

다섯번 째 장점은 정적 팩토리 메서드가 반환하는 객체의 클래스는 정적 팩토리 메서드가 정의된 클래스의 코드가 작성되는 순간에 존재하지 않아도 무방하다. JDBC와 같은 서비스 제공자 프레임워크의 근간을 이루는 것이 바로 유연한 정적 팩토리 메서드들이다.

![serviceproviderframework](https://1371820085-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-Lej4tgjCgS0Wyj6JGe2%2F-Lf3aFiJ5iI8PxEdUh03%2F-Lf3aSzuk-hjBobqZJt4%2Fserviceproviderframework.PNG?generation=1558076584392580&alt=media)

Service Provider Framework는 세 가지의 핵심 컴포넌트로 구성된다. 
1. service interface : Connection(서비스 제공자가 구현한다). 
2. provider registration api : DriverManager.registerDriver (구현체를 시스템에 등록하여 클라이언트가 쓸수 있도록 한다). 
3. service access api : DriverManager.getConnection(클라이언트에게 실제 서비스 구현체를 제공한다). 
4. service provider interface(option) : Driver (서비스 제공자가 구현하고 서비스 구현체의 객체를 생성하기 위한 것이다. 서비스 제공자 인터페이스가 없는 경우 구현체는 클래스 이름으로 등록되며 자바의 리플렉션 기능을 통해 객체로 만들어진다.)

```java
Connection conn = null;  

try {
	String url = "jdbc:mysql://localhost:3306/jdbcTest";
	String id = "testid";								   
	String pw = "testpw";											   
	Class.forName("com.mysql.jdbc.Driver");

	conn = DriverManager.getConnection(url,id,pw);

	...
```

서비스 제공자 인터페이스의 대략적인 모습

```java
// 서비스 인터페이스 ex)Connection
public interface Service {
	// ... 서비스에 고유한 메서드들이 이 자리에 온다. 
}

// 서비스 제공자 인터페이스 ex) Driver (서비스 구현체의 객체를 생성하기 위한것) 
public interface Provider {
	Service newService();
}

// 서비스 등록과 접근에 사용되는 객체 생성 불가능 클래스 ex) DriverManager
public class Services {
	private Services() {}

	//서비스 이름과 서비스 간 대응관계 보관
	private static final Map<String, Provider> providers = 
		new ConcurrentHashMap<String, Provider>();
	public static final String DEFAULT_PROVIDER_NAME = "<def>";

	//제공자 등록 API ex) DriverManager.registerDriver
	public static void registerDefaultProvider(Provider p){
		registerProvider(DEFAULT_PROVIDER_NAME, p);
	}

	public static void registerProvider(String name, Provider p){
		providers.put(name,p);
	}

	//서비스 접근 API ex) DriverManager.getConnection
	public static Service newInstance(){
		return newInstance(DEFAULT_PROVIDER_NAME);
	}

	public static Service newInstance(String name){
		Provider p = providers.get(name);
		if(p == null){
			throw new IllegalArgumentException("No provider registered with name: "+name);
		}
		return p.newService(); 
	}
}
```

자바6부터 service provider framework를 지원하는 `ServiceLoader`가 지원된다. 그래서 직접 만들 필요는 없다. JDBC는 `ServiceLoader`보다 먼저 존재했기 때문에 `ServiceLoader`를 사용하지 않는다.

__정적 팩토리 메서드만 있는 클래스를 만들면 생기는 가장 큰 문제는, `public`이나 `protected`로 선언된 생성자가 없으므로 하위 클래스를 만들 수 없다는 것이다.__

예를 들어, java.util.Collections에 구현된 클래스들을 편하게 쓰기 위한 하위 클래스를 만들 수 없다. 그런데 이건 틀림없이 축복이 될 수 있다. 왜냐하면 상속보다는 구성(to use composition instead of inheritance)이 더 좋기 때문이다.

__두 번째 단점은 정적 팩토리 메서드가 다른 정적 메서드와 확연히 구분되지 않는다.__

 지금으로선 클래스나 인터페이스 주석을 통해 정적 팩토리 메서드임을 널리 알리거나, 이름을 지을 때 조심하는 수밖에 없다. 보통 정적 팩토리 메서드의 이름으로는 다음과 같은 것들을 사용한다.

> from(3rd edition 추가) : A type-conversion method that takes a single parameter and returns a corresponding instance of this type

```java
Date d = Date.from(instant);
```

`valueOf` : 형변환 메서드.

```java
BigInteger prime = BigInteger.valueOf(Integer.MAX_VALUE);
```

`of`: `valueOf`를 더 간단하게 쓴것이다. `EnumSet` 덕분에 인기를 모은 이름이다.

```java
Set<Rank> faceCards = EnumSet.of(JACK, QUEEN, KING);
```

`getInstance` : 인자에 기술된 객체를 반환하지만, 인자와 같은 값을 갖지 않을 수도 있다. 싱글톤일 경우, 이 메서드는 인자 없이 항상 같은 객체를 반환한다.

```java
StackWalker luke = StackWalker.getInstance(options);
```

`newInstance` : `getInstance`와 같지만 호출할 때마다 다른 객체를 반환한다.

```java
Object newArray = Array.newInstance(classObject, arrayLen);
```

`getType` : `getInstance`와 같지만, 반환될 객체의 클래스와 다른 클래스에 팩토리 메서드가 있을 때 사용한다. `Type`은 팩토리 메서드가 반환할 객체의 자료형이다.

```java
FileStore fs = Files.getFileStore(path);
```

`newType` : `newInstance`와 같지만, 반환될 객체의 클래스와 다른 클래스에 팩토리 메서드가 있을 때 사용한다. `Type`은 팩토리 메서드가 반환할 객체의 자료형이다.

```java
BufferedReader br = Files.newBufferedReader(path);
```

`type`(3rd edition 추가) : A concise alternative to `getType` and `newType`

```java
List<Complaint> litany = Collections.list(legacyLitany);
```

> 요약 : 정적 팩토리 메서드와 `public` 생성자는 용도가 서로 다르며, 정적 팩토리 메서드를 고려해 보지도 않고 무조건 `public` 생성자를 만드는 것은 삼가기 바란다.

---
## 규칙2 : 생성자 인자가 많을 때는 Builder 패턴 적용을 고려하라

> Consider a builder when faced with many constructor parameters

선택적 인자가 많은 상황에서 어떤 생성자나 정적 팩토리 메서드가 적합할까?

### 점층적 생성자 패턴 (telescoping constructor pattern)

필수 인자만 받는 생성자를 하나 정의하고, 선택적 인자를 하나 받는 생성자를 추가하고 거기에 두개의 선택적 인자를 받는 생성자를 추가하는 식으로 생성자들을 쌓아 올리듯 추가하는 것이다.

```java
public class NutritionFacts{
	private final int servingSize; //필수
	private final int servings; //필수
	private final int calories //선택
	private final int fat //선택
	private final int sodium //선택
	private final int carbohydrate //선택

	public NutritionFacts(int servingSize, int servings){
		this(servingSizem servings, 0);
	}

	public NutritionFacts(int servingSize, int servings, int calories){
		this(servingSizem servings, calories, 0);
	}

	public NutritionFacts(int servingSize, int servings, int calories, int fat){
		this(servingSizem servings, calories, fat, 0); 
	}

	public NutritionFacts(int servingSize, int servings, int calories, int fat,
							int sodium){
		this(servingSizem servings, calories, fat, sodium, 0);
	}

	public NutritionFacts(int servingSize, int servings, int calories, int fat,
							int sodium, int carbohydrate){
		this.servingSize = servingSize;
		this.servings = servings;
		this.calories = calories;
		this.fat = fat;
		this.sodium = sodium;
		this.carbohydrate = carbohydrate; 
	}
}
```

이 방식은 인자 수가 늘어나면 클라이언트 코드를 작성하기가 어려워지고, 무엇보다 읽기 어려운 코드가 되고 만다. 대체 그 많은 인자가 무슨 값인지 알 수 없게 되고, 그 의미를 알려면 인자를 주의깊게 세어보아야 한다.

### 자바빈 패턴

```java
public class NutritionFacts{
	//필드는 기본값으로 초기화(기본값이 있는 경우만)
	private int servingSize = -1;
	private int servings = -1;
	private int calories = 0;
	private int fat = 0;
	private int sodium = 0;
	private int carbohydrate = 0;

	public NutritionFacts() {}

	//설정자(setter)
	public void setServingSize(int val) { servingSize = val; }
	public void setServings(int val) { servings = val; }
	public void setCalories(int val) { calories = val; }
	public void setFat(int val) { fat = val; }
	public void setSodium(int val) { sodium = val; } 
	public void setCarbohydrate(int val) { carbohydrate = val; } 
}
```

이 패턴에는 점층적 생성자 패턴에 있던 문제는 없다. 작성해야 하는 코드의 양이 조금 많아질 수는 있지만 객체를 생성하기도 쉬우며, 읽기도 좋다.

```java
NutritionFacts cocaCola = new NutritionFacts();
cocaCola.setServingSize(240);
cocaCola.setServings(8);
cocaCola.setCalories(100);
cocaCola.setSodium(35);
cocaCola.setCarbohydrate(27);
```

그러나 자바빈 패턴에는 심각한 단점이 있다. 1회의 함수 호출로 객체 생성을 끝낼 수 없으므로, 객체 일관성이 일시적으로 깨질 수 있다는 것이다. 또한 자바빈 패턴으로는 변경 불가능 클래스를 만들 수 없다는 것이다.

### 빌더 (Builder)패턴

점층적 생성자 패턴의 안전성과 자바빈 패턴의 가독성을 결합한 패턴이다.

필요한 객체를 직접 생성하는 대신, 클라이언트는 먼저 필수 인자들을 생성자에(또는 정적 팩토리 메서드에) 전부 전달하여 빌더 객체(builder object)를 만든다. 그런 다음 빌더 객체에 정의된 설정 메서드들을 호출하여 선택적 인자들을 추가해 나간다. 그리고 마지막으로 아무런 인자 없이 `build` 메서드를 호출하여 변경 불가능 객체를 만드는 것이다. 빌더 클래스는 빌더가 만드는 객체 클래스의 정적 멤버 클래스로 정의한다.

```java
public class NutritionFacts {
	private final int servingSize;
	private final int servings;
	private final int calories;
	private final int fat;
	private final int sodium;
	private final int carbohydrate;

	private NutritionFacts(Builder builder) {
		servingSize = builder.servingSize;
		servings = builder.servings;
		calories = builder.calories;
		fat = builder.fat;
		sodium = builder.sodium;
		carbohydrate = builder.carbohydrate;
	}

	public static class Builder {
		//필수인자
		private final int servingSize;
		private final int servings;
		//선택적 인자 - 기본값으로 초기화
		private int calories = 0;
		private int fat = 0;
		private int carbohydrate = 0;
		private int sodium = 0;

		public Builder(int servingSize, int servings) {
			this.servingSize = servingSize;
			this.servings = servings;
		}

		public Builder calories(int val) {
			calories = val;
			return this;
		}

		public Builder fat(int val) {
			fat = val;
			return this;
		}

		public Builder carbohydrate(int val) {
			carbohydrate = val;
			return this;
		}

		public Builder sodium(int val) {
			sodium = val;
			return this;
		}

		public NutritionFacts build() {
			return new NutritionFacts(this);
		}
	}
}
```

`NutritionFacts` 객체가 변경 불가능하다는 사실, 그리고 모든 인자의 기본값이 한곳에 모여 있다는 것에 유의해라. 빌더에 정의된 설정 메서드는 빌더 객체 자신을 반환하므로, 설정 메서드를 호출하는 코드는 계속 이어서 쓸 수 있다.

```java
NutirtionFacts cocaCola = new NutritionFacts.Builder(240,8)
	.calories(100)
	.sodium(35)
	.carbohydrate(27)
	.build();
```

그리고 만약 빌더패턴에서 불변식을 검사한다면 아래 코드와 같이 빌더 파라미터 값을 복사 한 후에 체크해라.

```java
public class NutritionFacts {
	private final int servingSize;
	private final int servings;
	private final int calories;
	private final int fat;
	private final int sodium;
	private final int carbohydrate;

	private NutritionFacts(Builder builder) {
		servingSize = builder.servingSize;
		if (servingSize > 0) {
			throw new IllegalArgumentException();
		}
		...
	}
```

### 3rd edition 추가된 빌더패턴 예제

```java
import java.util.EnumSet;
import java.util.Objects;
import java.util.Set;

public abstract class Pizza {
	public enum Topping {HAM, MUSHROOM, ONION, PEPPER, SAUSAGE}

	final Set<Topping> toppings;

	abstract static class Builder<T extends Builder<T>> {
		EnumSet<Topping> toppings = EnumSet.noneOf(Topping.class);

		public T addTopping(Topping topping) {
			toppings.add(Objects.requireNonNull(topping));
			return self();
		}

		abstract Pizza build();

		// Subclasses must override this method to return "this"
		protected abstract T self();
	}

	Pizza(Builder<?> builder) {
		toppings = builder.toppings.clone();
	}
}
```

`Pizza` 추상 클래스와 그안에 `Builder` 추상 클래스를 만들었다.

```java
import java.util.Objects;

public class NyPizza extends Pizza {
	public enum Size { SMALL, MEDIUM, LARGE }
	private final Size size;

	public static class Builder extends Pizza.Builder<Builder> {
		private final Size size;

		public Builder(Size size) {
			this.size = Objects.requireNonNull(size);
		}

		@Override
		NyPizza build() {
			return new NyPizza(this);
		}

		@Override
		protected Builder self() {
			return this;
		}
	}

	private NyPizza(Builder builder) {
		super(builder);
		size = builder.size;
	}
}
```

```java
public class Calzone extends Pizza {
	private final boolean sauceInside;

	public static class Builder extends Pizza.Builder<Builder> {
		private boolean sauceInside = false; // default

		public Builder sauceInside() {
			sauceInside = true;
			return this;
		}

		@Override
		Calzone build() {
			return new Calzone(this);
		}

		@Override
		protected Builder self() {
			return this;
		}
	}

	private Calzone(Builder builder) {
		super(builder);
		sauceInside = builder.sauceInside;
	}
}
```

주목해야 될 부분은 `Pizza` 추상 클래스를 상속한 `NyPizza`, `Calzone` 클래스에서 오버라이딩한 `build` 메서드 return type이 자기 자신이다(`Pizza`가 아니라). 이렇게 함으로써 사용할 때 타입 캐스팅을 따로 안해줘도 된다.

```java
public class BuilderMain {
    public static void main(String[] args) {
        NyPizza pizza = new NyPizza.Builder(NyPizza.Size.SMALL)
            .addTopping(Pizza.Topping.SAUSAGE)
            .addTopping(Pizza.Topping.ONION)
			.build();

        Calzone calzone = new Calzone.Builder()
			.addTopping(Pizza.Topping.HAM)
			.sauceInside()
			.build();
    }
}
```

__요약__: 빌더 패턴은 인자가 많은 생성자(4개 이상)나 정적 팩토리가 필요한 클래스를 설계할 때, 특히 대부분의 인자가 선택적 인자인 상황에 유용하다.

---

## 규칙3 : `private` 생성자나 enum 자료형은 싱글턴 패턴을 따르도록 설계하라

> Enforce the singleton property with a private constructor or an enum type

싱글턴은 객체를 하나만 만들 수 있는 클래스다. 그런데 클래스를 싱글턴으로 만들면 클라이언트를 테스트하기가 어려워질 수가 있다. 싱글턴이 어떤 인터페이스를 구현하는 것이 아니면 가짜 구현으로 대체할 수 없기 때문이다.

JDK 1.5 이전에는 싱글턴을 구현하는 방법이 두 가지였다. 두 방법 다 생성자는 private로 선언하고, 싱글턴 객체는 정적(static) 멤버를 통해 이용한다.

### 첫 번째 방법 - 필드

```java
public class Elvis {
    public static final Elvis INSTANCE = new Elvis();  //public 필드로 선언

    private Elvis() {
    }

    public void leaveTheBuilding() {
        System.out.println("Whoa baby, I'm outta here!");
    }

    // This code would normally appear outside the class!
    public static void main(String[] args) {
        Elvis elvis = Elvis.INSTANCE;
        elvis.leaveTheBuilding();
    }
}
```

필드 방식의 장점은 클래스가 싱글턴인지 필드 선언만 봐도 바로 알 수 있다(public static field is final, so it will always contain the same object reference). 두번째 장점은 정적 팩토리 메서드 방식보다 더 간단하다.

### 두 번째 방법 - 정적 팩토리 메서드

```java
public class Elvis {
    private static final Elvis INSTANCE = new Elvis(); //private 필드로 선언

    private Elvis() {
    }

    public static Elvis getInstance() {
        return INSTANCE;
    }

    public void leaveTheBuilding() {
        System.out.println("Whoa baby, I'm outta here!");
    }

    // This code would normally appear outside the class!
    public static void main(String[] args) {
        Elvis elvis = Elvis.getInstance();
        elvis.leaveTheBuilding();
    }
}
```


이 방식의 장점은 API를 변경하지 않고도 싱글턴 패턴을 포기할 수 있다. 스레드마다 별도의 객체를 반환하도록 팩토리 메서드를 수정하는 것도 간단하다. 두번째 장점은 제네릭 타입을 수용하기 쉽다. 마지막 장점은(3rd edition 추가) method reference가 supplier로써 사용 될 수 있다. 예를 들어 `Elvis::instance`는 `Supplier<Elvis>`다. 이러한 장점들이 필요 없다면 `pulbic` 필드를 사용하는 쪽이 더 간단하다.

`private` 생성자이기 때문에 클라이언트가 이 상태를 변경할 방법은 없지만 주의할 것이 하나 있다.

`AccessibleObject.setAccessible`메서드의 도움을 받아 권한을 획득한 클라이언트는 리플렉션(reflection)기능을 통해 `private` 생성자를 호출 할 수 있다는 것이다.

```java
import java.lang.relfect.Constructor;

public class PrivateInvoker {
    public static void main(String[] args) throws Exception {
        //리플렉션과 setAccessible메서드를 통해 private로 선언된 생성자의 호출 권한을 획득한다.
        Constructor<?> con = Private.class.getDeclaredConstructors()[0];
        con.setAccessible(true);
        Private p = (Private)con.newInstance();
    }
}

class Private{
    private Private(){
        System.out.println("hello");
    }
}
```

리플렉션 기능을 이용하면 메모리에 적재된 클래스의 정보를 가져오는 프로그램을 작성할 수 있다. Class 객체가 주어지면, 해당 객체가 나타내는 클래스의 생성자, 메서드, 필드 등을 나타내는 Constructor, Method, Field 객체들을 가져올 수 있는데, 이 객체들을 사용하면 클래스의 멤버 이름이나 필드 자료형, 메서드 시그너처 등의 정보들을 얻어낼 수 있다(이런 공격을 막으려면 두번째 instance를 생성하는 요청이 올 때 생성자에서 Exception을 발생시키게 수정해야한다).

싱글턴 클래스를 직렬화 가능(`Serializable`) 클래스로 만들려면 클래스 선언에 `implements Serializable`을 추가하는 것으로는 부족하다. 싱글턴 특성을 유지하려면 모든 필드를 transient로 선언하고 `readResolve` 메서드를 추가해야 한다. 그렇지 않으면 serialize된 객체가 역직렬화될 때마다 새로운 객체가 생기게 된다.

```java
//싱글턴 상태를 유지하기 위한 readResolve 구현
private Object readResolve() {
    //동일한 Elvis 객체가 반환되도록 하는 동시에, 가짜 Elvis 객체는
    //GC가 처리하도록 만든다.
    return INSTANCE;
}
```

__JDK 1.5부터는 싱글턴을 구현할 때 새로운 방법을 사용할 수 있다. 원소가 하나뿐인 enum 자료형을 정의하는 것이다.__

```java
public enum Elvis{
    INSTNACE;

    public void leaveTheBuilding(){ 
        ...
    }
}

public static void main(String[] args) {
    Elvis elvis = Elvis.INSTANCE;
    elvis.leaveTheBuilding();
}
```

기능적으로는 `public` 필드를 사용하는 구현법과 동등하다. 한 가지 차이는 좀 더 간결하다는 것과, 직렬화가 자동으로 처리된다는 것이다. 직렬화가 아무리 복잡하게 이루어져도 여러 객체가 생길 일이 없으며, 리플렉션을 통한 공격에도 안전하다. __원소가 하나뿐인 enum 자료형이야말로 싱글턴을 구현하기 가장 좋은 방법이다.__

---

## 규칙4 : 객체 생성을 막을 때는 `private` 생성자를 사용하라

> Enforce noninstantiability with a private constructor

정적 메서드나 필드만 모은 클래스를 만들고 싶을 때가 있다. 이런 클래스들은 악명이 높은데, 객체 지향적으로 생각하지 않으려는 사람들이 남용하는 경향이 있기 때문이다. 하지만 이런 클래스들도 분명 필요할 때가 있다. 자바의 기본 자료형 값(primitive value) 또는 배열에 적용되는 메서드를 한군데 모아둘 때 유용하다.

`java.lang.Math`나 `java.util.Arrays`가 좋은 예다. 특정 인터페이스를 구현하는 객체를 만드는 팩토리 메서드 등의 정적 메서드를 모아놓을 때도 사용할 수 있다. `java.util.Collections`는 그 좋은 예다 (자바8에서는 인터페이스에 직접 메서드를 추가할 수 있다). 마지막으로 `final` 클래스에 적용할 메서드들을 모아놓을 때도 활용할 수 있다. 클래스를 계승하여 메서드를 추가할 수 없으니 말이다.

그런 유틸리티 클래스(utility class)들은 객체를 만들 목적의 클래스가 아니다. 객체를 만들면 오히려 이상하다. 하지만 생성자를 생략하면 컴파일러는 자동으로 기본 생성자를 만들어 버린다. 객체를 만들 수 없도록 하려고 클래스를 `abstract`로 선언해 봤자 소용없다. 하위 클래스를 정의하는 순간 객체 생성이 가능해지기 때문. 게다가 `abstract` 클래스니까 계승해서 사용하는 것이 맞다고 착각하는 사용자도 있을 수 있다. 이럴 때 __`private` 생성자를 클래스에 넣어서 객체 생성을 방지하자는 것이다.__

```java
public class Utility {
    private Utility () {
        throw new AssertionError();
    }
}
```

`AssertionError`는 반드시 필요한 것은 아니지만, 클래스 안에서 실수로 생성자를 호출하면 바로 알 수 있게 하기 위한 것이다.

---
## 규칙5 : 

> Prefer dependency injection to hardwiring resources

---

## 규칙6 : 규칙6 : 불필요한 객체는 만들지 말라

> Avoid creating unneccesary objects

```java
String s = new String("abc");
```

위의 문장은 실행될 때마다 `String` 객체를 만든다 만일 위의 문장이 순환문이나 자주 호출되는 메서드 안에 있다면, 수백만 개의 `String` 객체가 쓸데없이 만들어질 것이다.

```java
String s = "abc";
```

이렇게 하면 실행할 때마다 객체를 만드는 대신, 동일한 String 객체를 사용한다. 게다가 같은 가상 머신에서 실행되는 모든 코드가 해당 객체를 재사용하게 된다.

`Person` 클래스는 어떤 사람이 베이비 붐 세대에 속하는지 아닌지를 알려주는 `isBabyBoomer` 메서드 (1946년과 1964년 사이에 태어난 사람이면 참을 반환) 를 갖고 있다.

```java
public class Person{
    private final Date birthDate;

    //다른 필드와 메서드, 생성자는 생략 

    //이렇게 하면 안된다!
    public boolean isBabyBoomer() {
        //생성 비용이 높은 객체를 쓸데없이 생성한다. 
        Calendar gtmCal = Calendar.getInstance(TimeZone.getTimeZone("GMT"));

        gmtCal.set(1946, Calendar.JANUARY, 1, 0, 0, 0);
        Date boomStart = gmtCal.getTime();
        gmtCal.set(1965, Calendar.JANUARY, 1, 0, 0, 0);
        Date boomEnd = gmtCal.getTime();

        return birthDate.compareTo(boomStart) >= 0 && birthDate.compareTo(boomEnd) < 0;
    }
}
```

위에 보인 `isBabyBoomer` 메서드는 호출될 때마다 `Calendar` 객체 하나, `TimeZone` 객체 하나, 그리고 `Date` 객체 두 개를 쓸데없이 만들어 댄다. 이렇게 비효율적인 코드는 정적 초기화 블록을 통해 개선하는 것이 좋다.

```java
public class Person {
    private final Date birthDate;
    // 다른 필드와 메서드, 생성자는 생략 

    /**
     * 베이비 붐 시대의 시작과 끝 
     */
    private static final Date BOOM_START;
    private static final Date BOOM_END;

    static {
        Calendar gtmCal = Calendar.getInstance(TimeZone.getTimeZone("GMT"));

        gmtCal.set(1946, Calendar.JANUARY, 1, 0, 0, 0);
        BOOM_START = gmtCal.getTime();
        gmtCal.set(1965, Calendar.JANUARY, 1, 0, 0, 0);
        BOOM_END = gmtCal.getTime();
    }

    public boolean isBabyBoomer() {
        return birthDate.compareTo(BOOM_START) >= 0 && birthDate.compareTo(BOOM_END) < 0;
    }
}
```

이렇게 개선된 `Person` 클래스는 `Calendar`, `TimeZone` 그리고 `Date` 객체를 클래스가 초기화 될 때 한 번만 만든다.

JDK 1.5부터는 쓸데없이 객체를 만들 새로운 방법이 더 생겼다. autoboxing을 통해 자바의 기본 자료형과 그 객체 표현형을 섞어 사용할 수 있다. 둘 간의 변환은 자동으로 이뤄진다.

```java
public static void main(String[] args) {
    Long sum = 0L;
    for (long i = 0; i< Integer.MAX_VALUE; i++) {
        sum += i;
    }
    System.out.println(sum);
}
```

`sum은` `long`이 아니라 `Long`으로 선언되어 있는데 그 덕에 `long i`가 `Long sum`에 더해질때마다 하나씩 객체가 생긴다.

---

## 규칙7 : 유효기간이 지난 객체 참조는 폐기하라

> Eliminate obsolete object references

