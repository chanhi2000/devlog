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