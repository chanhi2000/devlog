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
    content: https://chanhi2000.github.io/crashcourse/java-effective-java.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

<!-- https://yangbongsoo.gitbook.io/study/java-effective-java/creating_and_destroying_objects -->

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

__스택이 커졌다가 줄어들면서__ 제거한 객체들을 GC가 처리하지 못하는 경우가 있다. 첨자 값이 `size`보다 작은 곳에 있는 요소들은 실제로 쓰이는 참조들이지만, 나머지 영역에 있는 참조들은 그렇지 않다. 문제는 남아있는 객체를 통해 참조되는 다른 객체들도 쓰레기 수집에서 제외된다.

![하지만 GC 입장에서는 free object라는 사실을 알 도리가 없다.](https://1371820085-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-Lej4tgjCgS0Wyj6JGe2%2F-Lf3aFiJ5iI8PxEdUh03%2F-Lf3aT-IMlC59PxB14Mg%2Fstack.PNG?generation=1558076584419169&alt=media)

이런 문제는 간단히 고칠 수 있다. 쓸 일 없는 객체 참조는 무조건 `null`로 만드는 것이다.

```java
public Object pop() {
    if(size ==0)
        throw new EmptyStackException();
    Object result = elements[--size];
    elements[size] = null //만기 참조 제거
    return result;
}
```

__만기 참조를 제거하는 가장 좋은 방법은 해당 참조가 보관된 변수가 유효범위를 벗아나게 두는 것이다.__

__캐시도 메모리 누수가 흔히 발생하는 장소다. 메모리 누수가 흔히 발견되는 또 한곳은 리스너 등의 역호출자(callback)다.__


---

## 규칙8 : 종료자 사용을 피하라

> Avoid finalizers and cleaners

종료자(`finalizer`) 사용은 예측할 수 없고 종종 위험하고 일반적으로 필요없다. 종료자를 사용하면 시스템 오류, 성능 문제, 이식성 문제가 발생할 수 있다.

::: note Note

As of Java 9, finalizers have been deprecated, but they are still being used by the Java libraries. The Java 9 replacement for finalizers is cleansers. Cleaners are less dangerous than finalizers, but still unpredictable, slow, and generally unnecessary.

> 자바 9부터 finalizers는 deprecated됐지만, 여전히 자바 라이브러리들이 사용중이다. 자바 9에서는 finalizers 대신 cleaners로 대체됐다. cleaners는 finalizers보다는 덜 위험하지만, 여전히 예측할 수 없고 느리고 일반적으로 불필요하다.

:::

C++에서 소멸자는 객체에 배정된 자원을 반환하는 일반적인 수단이며, 생성자와 쌍으로 존재해야 한다. 하지만 자바에서는 GC가 알아서 반환하므로 프로그래머가 특별히 할 일이 없다. C++에서 소멸자는 메모리 이외의 자원을 반환하는 데도 사용되는데, 자바에서는 보통 try-with-resources 나 try-finally 블록이 그런 용도로 사용된다.

종료자의 한 가지 단점은, 즉시 실행되리라는 보장이 전혀 없다는 것이다. 어떤 객체에 대한 모든 참조가 사라지고 나서 종료자가 실행되기까지는 긴 시간이 걸릴 수도 있다. 따라서 긴급한(time-critical) 작업을 종료자 안에서 처리하면 안 된다. 예를 들어 종료자 안에서 파일을 닫도록 하면 치명적이다. 파일 기술자(file descriptor)는 유한한 자원이기 때문이다. JVM은 종료자를 천천히 실행하므로 열린 상태의 파일이 많이 남아 있을 수 있다. 그런 상황에서 새로운 파일을 열려고 하면, 한 번에 열 수 있는 파일의 개수에 제한이 있으므로 오류가 나게 된다.

그리고 finalizers 와 cleaners 실행 시점은 GC 알고리즘 구현에 따라 다양하다. 그래서 JVM에 따라 동작이 달라질 수 있기 때문에 이식성 문제가 발생할 수 있다. 또한 자바 언어 명세서에는 어떤 스레드가 종료자를 실행해야 하는지 아무 언급도 없으므로 이식성(portability)을 보장하면서 이 문제를 해결할 방법은 없다. 종료자 사용을 피하는 것만이 유일한 길이다.

::: note Note

There is no portable way to prevent this sort of problem other than to refrain from using finalizers. Cleaners are a bit better than finalizers in this regard because class authors have control over their own cleaner threads, but cleaners still run in the background, under the control of the garbage collector, so there can be no guarantee of prompt cleaning.

> 자바 명세에서는 어느 스레드가 finalizers를 실행시키는걸 보장하지 않았다. 그래서 finalizers를 안쓰는 것 말고 portable하게 할 수 없다.Cleaners는 조금 나은데 class authors가 자신의 cleaner 스레드를 제어할 수 있기 때문이다. 하지만 cleaners는 여전히 백그라운드에서 gc 제어로 돌기 때문에 즉시 실행의 보장이 없다.
>

:::

자바 명세는 종료자가 즉시 샐행되어야 한다는 문구도 없지만, 종료자가 결국에는 반드시 실행되어야 한다는 문구도 없다. 따라서 종료자가 실행되지 않은 객체가 남은 상태로 프로그램이 끝나게 되는 일도 충분히 가능하다. 그러므로 지속성이 보장되어야 하는 중요 상태 정보(critical persistent state)는 종료자로 갱신하면 안된다.

::: note Note

As a consequence, you should never depend on a finalizer or cleaner to update persistent state. for example, depending on a finalizer or cleaner to release a persistent lock on a shared resource such as a database is a good way to bring your entire distributed system to a grinding halt.

> persistent state update는 finalizer 나 cleaner에 의존해서는 안된다. 분산시스템 전체를 먹통으로 만드는 가장 좋은 방법은, db같은 공유 자원에 대한 persistent lock을 종료자가 반환하게 구현하는 것이다.

:::

```java
@Override
protected void finalize() throws Throwable {
	super.finalize();
	// 여기서 persistent lock을 반환하게 구현
}
```

System.gc나 `System.runFinalization` 같은 메서드에 마음이 흔들리면 곤란하다. 이런 메서드들은 종료자가 실행될 가능성을 높여주긴 하지만 보장하진 않는다. 종료자 실행을 보장하는 메서드들은 `System.runFinalizersOnExit`와 `Runtime.runFinalizersOnExit` 뿐인데, 이들 메서드는 심각한 결함을 갖고 있어서 이미 명세에서 폐기되었다.

또다른 문제는 종료 처리 도중에 무점검 예외가 던져지면, 해당 예외는 무시되며 종료 과정은 중단된다. 이런 예외는 객체의 상태를 망가뜨릴 수 있다. 일반적으로는 무점검 예외가 발생하면 스레드는 종료되고 스택 추적 정보가 표시되지만 종료자 안에서는 아니다. 경고 문구조차 출력되지 않는다.

```java
@Override
protected void finalize() throws Throwable {
	super.finalize();
	if ( ) {

	} else {
		throw new BongException();
	}
}
```

::: note Note

Cleaners do not have this problem because a library using a cleaner has control over its thread. 

> Cleaners는 이 문제를 갖고 있지 않은데 cleaner를 사용하는 라이브러리가 그 스레드를 제어하기 때문이다.

:::

그리고 종료자를 사용하면 성능이 심각하게 떨어진다. 필자의 컴퓨터에서 일반 AutoCloseable 객체를 만들고 try-with-resources를 이용해 close 시킬 때는 GC에 반환하는데 12ns가 걸렸다. finalizer를 사용하면 550ns로 증가했다. 왜냐하면 종료자가 GC 효율성을 억제시키기 때문이다.

::: note Note 

Cleaners are comparable in speed to finalizers if you use them to clean all instances of the class (about 500 ns per instance on my machine), but cleaners are much faster if you use them only as a safety net, as discussed below. Under these circumstances, creating, cleaning, and destroying an object takes about 66 ns on my machine, which means you pay a factor of five (not fifty) for the insurance of a safety net if you don't use it.

> Cleaners는 모든 클래스 인스턴스를 clean한다고 했을 땐 약 500ns로 finalizer와 속도가 비슷하다. 하지만 안전망에서만 사용한다면 66ns로 훨씬 빨라진다.

:::

::: note Note

Finalizers have a serious security problem: they open your class up to finalizer attacks.

[Finalizer Attact에 대한 설명](https://yangbongsoo.gitbooks.io/study/content/finalizer-attack.html)

이 책에서는 finalizer attack에 대한 설명이 자세하지 않아서 위에 따로 자세히 설명함.

:::

### (2rd edition 내용)

그렇다면 파일이나 스레드처럼 명시적으로 반환하거나 삭제해야 하는 자원을 포함하는 객체의 클래스는 어떻게 작성해야 하는 것일까?

그냥 명시적인 종료 메서드(termination method)를 하나 정의하고, 더 이상 필요하지 않는 객체라면 클라이언트가 해당 메서드를 호출하도록 하라. 한 가지 명심할 것은 종료 여부를 객체 안에 보관해야 한다는것. 즉, 유효하지 않은 객체임을 표시하는 `private` 필드를 하나 두고, 모든 메서드 맨 앞에 해당 필드를 검사하는 코드를 두어 이미 종료된 객체에 메서드를 호출하면 `IllegalStateException`이 던져지도록 해야 한다는 것이다. 이런 명시적 종료 메서드의 예로는 `OutputStream`이나 `InputStream`, `java.sql.Connection`에 정의된 close 메서드가 있다.

이런 명시적 종료 메서드는 보통 `try`-`finally` 문과 함께 쓰인다. 객체 종료를 보장하기 위해서다. 명시적 종료 메서드를 `finally` 문 안에서 호출하도록 해 놓으면 객체 사용 과정에서 예외가 던져져도 종료 메서드가 실행되도록 만들 수 있다.

종료자가 적합한 곳이 두 군데 정도 있는데 하나는, 명시적 종료 메서드 호출(`close`)을 잊은 경우에 대비하는 안전망으로서의 역할이다. 하지만 종료자는 그런 자원을 발견하게 될 경우 반드시 경고 메시지를 로그로 남겨야 한다.

명시적 종료 메서드 패턴을 따르는 예로 들었던 네 가지 클래스들(`FileInputStream`, `FileOutputStream`, `Timer`, `Connection`)은 종료 메서드가 호출되지 않을 경우에 대비하여 종료자 안전망을 갖추고 있다. 불행히도 이들 종료자는 경고 로그를 남기지 않는다. API가 공개된 다음에는 그런 기능을 추가하는 것이 일반적으로 불가능한데, 이미 작성된 클라이언트 코드를 깨뜨리게 될 것이기 때문이다.

두 번째 경우는 네이티브 피어(native peer)와 연결된 객체를 다룰 때다. 네이티브 피어는 일반 자바 객체가 네이티브 메서드를 통해 기능 수행을 위임하는 네이티브 객체를 말한다. 네이티브 피어는 일반 객체가 아니므로 gc가 알 수 없을 뿐더러 자바 측 피어 객체(java peer)가 반환될 때 같이 반환할 수도 없다. 네이티브 피어가 중요한 자원을 점유하고 있지 않다고 가정한다면, 종료자는 그런 객체의 반환에 걸맞다. 네이티브 피어가 즉시 종료되어야 하는 자원을 포함하는 경우에는, 앞서 설명한 대로 명시적인 종료 메서드를 클래스에 추가해야 한다.

위와 같이 종료자를 사용해야 하는 드문 상황에 처했다면 super.finalize 호출은 잊지 말자. "종료자 연결(finalizer chaining)"이 자동으로 이루어지지 않는다. 만일 (`Object`가 아닌) 어떤 클래스가 종료자를 갖고 있고 하위 클래스가 해당 메서드를 재정의하는 경우, 하위 클래스의 종료자는 상위 클래스의 종료자를 명시적으로 호출해야 한다. 이때 하위 클래스의 상태는 try 블록 안에서 종료시켜야 하고, 상위 클래스 종료자는 finally 블록 안에서 호출해야 한다. 그래야 하위 클래스의 종료 과정에서 예외가 발생해도 상위 클래스 종료자는 반드시 호출되도록 할 수 있다.

```java
// 수동 종료자 연결
@Override
protected void finalize() throws Throwable {
  try {
    ... // 하위 클래스의 상태를 종료함
  } finally {
    super.finalize();
  }
}
```

하위 클래스에서 상위 클래스 종료자를 재정의하면서 상위 클래스 종료자 호출을 잊으면, 상위 클래스 종료자는 절대로 호출되지 않는다. 이런 멍청한 하위 클래스 덕에 생기는 문제를 방지하는 한 가지 방법은, 종료되어야 하는 모든 객체마다 여벌의 객체를 하나 더 만드는 것이다. 종료되어야 하는 객체의 클래스 안에 종료자를 정의하는 대신, 익명 클래스안에 종료자를 정의하는 것이다. 이 익명 클래스의 목적은 해당 클래스의 객체를 포함하는 객체를 종료시키는 것이다. 이 익명 클래스로 만든 객체는 종료 보호자라고 부르는데, 종료되어야 하는 객체 안에 하나씩 넣는다. 종료 보호자의 바깥 객체에는 종료 보호자를 참조하는 private 필드가 있다. 따라서 바깥 객체에 대한 모든 참조가 사라지는 순간, 종료 보호자의 종료자도 실행 가능한 상태가 된다. 이 보호자 객체의 종료자는 필요한 종료 작업을, 마치 바깥 객체의 종료자인 것처럼 수행한다.

```java
// 종료 보호자 숙어
public class Foo {
  // 이 객체는 바깥 객체(Foo 객체)를 종료시키는 역할만 한다.
  private final Object finalizerGuardian = new Object() {
    @Override
    protected void finalize() throws Throwable {
      ... // 바깥 Foo 객체를 종료시킴
    }
  };
  ... // 이하 생략
}
```

`public` 클래스 `Foo`에는 종료자가 없다는 것에 유의하자(`Object`에서 계승된, 무시해도 좋은 finalize 메서드 말곤 없다). 따라서 하위 클래스의 종료자가 상위 클래스의 종료자를 호출하건 말건 상관 없다. 이 기법은 종료자가 있는 비-final 클래스를 구현할 때 반드시 고려해야 한다.

### 3rd edition 내용

그렇다면 파일이나 스레드처럼 삭제해야 하는 자원을 포함하는 객체의 클래스는 어떻게 작성해야 하는 것일까? 클래스에 `AutoCloseable` 인터페이스를 구현해서 더 이상 필요없을 때 close() 메서드를 호출해라 (try-with-resources를 사용하면 exception 발생에도 종료가 보장된다).

언급할 가치가 있는 한가지 세부 사항은 인스턴스가 닫혀 있는지 여부를 추적해야한다는 것이다. `close` 메서드는 개체가 더 이상 유효하지 않은 필드를 기록해야 하며 다른 메서드는 이 필드를 검사하여 이미 종료된 객체에 메서드를 호출하면 `IllegalStateException`을 발생시켜야 한다.

종료자가 적합한 곳이 두 군데 정도 있는데 하나는 close 메서드 호출을 잊은 경우에 대비하는 안전망으로서의 역할이다. `cleaner`나 `finalizer`가 즉시 또는 전부 실행된다는 보장은 없지만, `close` 메서드를 잊었을 때 아무것도 안하는 것보다는(늦어지더라도) 있는게 낫다. `FileInputStream`, `FileOutputStream`, `ThreadPoolExecutor`, `java.sql.Connection` 자바 라이브러리들은 안전망으로써 `finalizer`를 구현하고 있다.

두 번째 경우는 네이티브 피어(native peer)와 연결된 객체를 다룰 때다. 네이티브 피어는 일반 자바 객체가 네이티브 메서드를 통해 기능 수행을 위임하는 네이티브 객체를 말한다. 네이티브 피어는 일반 객체가 아니므로 gc가 알 수 없을 뿐더러 자바 측 피어 객체(java peer)가 반환될 때 같이 반환할 수도 없다. 네이티브 피어가 중요한 자원을 점유하고 있지 않다고 가정한다면, 종료자는 그런 객체의 반환에 걸맞다. 네이티브 피어가 즉시 종료되어야 하는 자원을 포함하는 경우에는, 앞서 설명한 대로 close 메서드를 클래스에 추가해야 한다.

`Cleaners`는 사용하기가 약간 까다롭다. 아래 코드는 간단한 Room 클래스다(`room`이 반환되기 전에 `clean` 되야 한다고 가정하자). `Room` 클래스는 `AutoCloseable` 인터페이스를 구현했다. automatic cleaning safety net이 `cleaner`를 사용한다는 사실은 단지 구현 세부 사항이다. `finalizers`와 다르게 `cleaners`는 클래스의 public API를 오염시키지 않는다.

```java
// An autocloseable class using a cleaner as a safety net
public class Room implements AutoCloseable {
    private static final Cleaner cleaner = Cleaner.create();

    // Resource that requires cleaning. Must not refer to Room!
    private static class State implements Runnable {
        int numJunkPiles; // Number of junk piles in this room

        State(int numJunkPiles) {
            this.numJunkPiles = numJunkPiles;
        }

        // Invoked by close method or cleaner
        @Override
        public void run() {
            System.out.println("Cleaning room");
            numJunkPiles = 0;
        }
    }

    // The state of this room, shared with our cleanable
    private final State state;

    // Our cleanable. Cleans the room when it's eligible for gc
    private final Cleaner.Cleanable cleanable;

    public Room(int numJunkPiles) {
        state = new State(numJunkPiles);
        cleanable = cleaner.register(this, state);
    }

    @Override
    public void close() {
        cleanable.clean();
    }
}
```

중첩된 State `static` 클래스는 `clean`될 자원을 갖고 있다. 위의 경우 단순한 `numJunkPiles` 필드다(represents the amount of mess in the room). 좀 더 현실적이라면 native peer를 가리키는 포인터를 갖는 final long이 될것이다.

State 클래스는 `Runnable` 인터페이스를 구현했고 `Room` 생성자에서 State 인스턴스를 등록할 때 `Cleanable`을 통해서 run 메서드가 한번만 호출된다. `run` 메서드 호출은 두가지 중 하나에 의해 트리거 된다. 보통 `Room`의 close 메서드에서 `Cleanable`의 `clean` 메서드를 호출할 때 트리거 된다. 만약 `Room` 인스턴스가 GC 자격을 얻을 때까지 `close` 메서드가 호출되지 않는다면, `Cleaner`는 `State`의 `run` 메서드를 호출할 것이다 (hopefully).

`State` 인스턴스가 `Room` 인스턴스를 참조하지 않는것은 크리티컬하다. 만약 참조했다면, `Room` 인스턴스가 GC 자격을 얻는 것을 (그리고 자동으로 `clean`되는) 막아주는 순환성을 생성하게 된다. 그러므로 `State` 클래스는 반드시 중첩된 `staic` 클래스여야 한다. 왜냐하면 non static 중첩 클래스는 자신을 둘러싼 클래스 인스턴스 참조를 포함하기 때문이다. 

it is similarly inadvisable to use a lambda beacause they can easily capture references to enclosing objects.

Room cleaner는 오직 안전망으로 사용되야 한다. 만약 `Room` 객체 생성을 try-with-resource 블록으로 감쌌다면, automatic cleaning은 절대 필요하지 않다.

```java
public class Adult {
    public static void main(String[] args) {
        try (Room myRoom = new Room(7)) {
            System.out.println("Goodbye");
        }
    }
}
```

위와 같이 실행시키면 Cleaning room 메세지와 함께 `Goodbye`가 출력될 것이다. 그러나 아래와 같이 실행하면 어떻게 될까?

```java
public class Teenager {
public static void main(String[] args) {
        new Room(99);
        System.out.println("Peace out");
    }
}
```

Cleaning room 메세지와 함께 `Peace out`이 출력되길 기대하겠지만, Cleaning room은 출력되지 않고 그냥 끝나버린다. 이게 전에 얘기했던 unpredictability이다. Cleaner 스펙은 `System.exit` 중 클리너의 동작은 구현에 따라 다르다고 말한다. cleaning action에 대한 보장이 없다. 필자가 System.gc()를 추가했더니 끝나기 전에 Cleaning room을 출력했다. 그러나 우리가 실행했을 때 그게 반드시 그렇게 된다는 보장이 없다.

