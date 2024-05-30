---
lang: ko-KR
title: "Swift for C++ Practitioners, Part 2: Reference Types & Optionals"
description: "Article(s) > Swift for C++ Practitioners, Part 2: Reference Types & Optionals"
icon: fa-brands fa-swift
category: 
  - Swift
  - Cpp
  - Article(s)
tag: 
  - blog
  - douggregor.net
  - swift
  - ios
  - c++
  - cpp
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Swift for C++ Practitioners, Part 2: Reference Types & Optionals"
    - property: og:description
      content: "Swift for C++ Practitioners, Part 2: Reference Types & Optionals"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/douggregor.net/swift-for-cpp-practitioners-2.html
prev: /programming/swift/articles/README.md
date: 2024-02-10
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/swift/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "C++ > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/cpp/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Swift for C++ Practitioners, Part 2: Reference Types & Optionals | Doug's Compiler Corner",
  "desc": "Swift for C++ Practitioners, Part 2: Reference Types & Optionals",
  "link": "https://www.douggregor.net/posts/swift-for-cxx-practitioners-reference-types/",
  "background": "rgba(22,22,22,0.2)"
}
```

In our first episode, we talked a lot about value types. In general, you should prefer value types in Swift whenever you can.

However, Object-Oriented Programming (OOP) is a reasonable approach when you need your objects to have identity and to form relationships amongst each other in arbitrary ways. For these cases, Swift has classes with support for inheritance, overriding, and subtyping. A class is defined in Swift with---you guessed it---the `class` keyword:

```swift
class Person {
  var name: String
  var age: Int
  
  init(name: String, age: Int) {
    self.name = name
    self.age = age
  }
  
  func greet() {
    print("Hello \(name)!")
  }
}
```

Classes look a lot like structs, with all the same basic ingredients: stored properties ("non-static data members" in C++ parlance), initializers, methods, etc. Each of these ingredients works basically the same way, so if you know how to write a struct, you're pretty close to writing a class. In fact, you could take nearly any `struct` from my value-types post and use the `class` keyword, and it would probably compile! However, even though it will compile, it will behave *radically* differently, because...

---

## Classes have reference semantics

Let's say we have a little `Temperature` struct:

```swift
struct Temperature {
  var fahrenheit: Double
  
  init(fahrenheit: Double) {
    self.fahrenheit = fahrenheit
  }
}
```

And some sensible-looking code:

```swift
var temp = Temperature(fahrenheit: 70)
home.thermostat.temperature = temp

temp.fahrenheit = 400
home.oven.temperature = temp
home.oven.bake()
```

Fine, right?

If we change that `struct` to a `class`, everything will still compile fine... but it's going to get really, really hot in here. When `Temperature` is a class, it has reference semantics: there is one instance `temp` created in the first line, and that instance is shared between the thermostat and the oven, so changing the temperature on one affects the other.

There are times when reference semantics are the right way to model your problem, and classes are great for those. `Temperature` is an example of something that should remain a struct, because it is intrinsically a value. The key distinguishing characteristics for choosing a class is when you need *identity* and *sharing*, such that two different places in your code need to be able to refer to the same entity, and see the effects of each other's changes to that entity.

Coming from C++, there are other clues as to whether to choose `struct` or `class`. If in C++ you would always pass around the type by pointer or reference (whether a raw pointer or a smart pointer like `std::shared_ptr`), or ever comparing the address of the instances, or if you're going to be deleting the copy constructor, then you probably have reference semantics and should use a `class` in Swift. C++ features like `virtual` functions or `dynamic_cast` are also indicators of reference semantics, but they aren't as strong: these could be merely implementation mechanisms for something else.

Most importantly, in C++ we often use inheritance to get implementations for free in a new type, even without `virtual` functions. The [<FontIcon icon="iconfont icon-cpp"/>Curiously Recurring Template Pattern (CRTP)](https://en.cppreference.com/w/cpp/language/crtp) is one such pattern that uses C++ inheritance even in types that have value semantics. This pattern does *not* translate well into Swift, and there are alternative ways to express this kind of polymorphism through the generics system and so-called "protocol extensions". The fact that one would use inheritance in C++ to model a problem is not a good indicator that one should use classes in Swift. Instead, it all comes back to reference semantics and identity.

---

## Inheritance &amp; overriding

Swift classes allow single inheritance, with overriding of methods. Let's create a subclass of `Person` for employees of some company:

```swift
class Employee: Person {
  let badgeNumber: Int
  
  init(name: String, age: Int, badgeNumber: Int) {
    self.badgeNumber = badgeNumber
    super.init(name: name, age: age)
  }
  
  override func greet() {
    print("Hello \(name), your badge number is \(badgeNumber)!")
  }
}
```

The base class (which we call the *superclass* in Swift) is specified after the colon. There can be at most one superclass, which keeps Objected-Oriented hierarchies a lot more simple and direct. The expressivity gap with C++'s support for multiple inheritance is mostly filled by the generics system, which we'll get to later (sorry, I keep saying that).

All inheritance is effectively `public`. There's no notion of `private` inheritance, and `protected` doesn't even exist in Swift. I'm going to ignore Swift's access control for a while longer, and note that when all of your code is in one Swift module, you often don't think about access control, and it's fine.

Our `Employee` type has an initializer and a `greet` method. The `greet` method overrides the one declared in `Person`, as indicated by the `override` keyword. Class members are effectively `virtual` by default, although one can explicitly mark a specific class or class member as `final` to cut off all subclassing or overriding for that entity for good. Subtyping and virtual dispatch works as one would expect:

```swift
let person: Person = Employee(name: "Doug", age: 39, badgeNumber: 1)
person.greet() // prints "Hello Doug, your badge number is 1!"
```

---

## Member initialization is... backwards?

If you looked at the body of that initializer for `Employee`, it might have freaked you out a little bit:

```swift
  init(name: String, age: Int, badgeNumber: Int) {
    self.badgeNumber = badgeNumber
    super.init(name: name, age: age)
  }
```

Notice how we initialized the data members of our subclass (or "derived class" in C++ parlance) first, and *then* called the superclass initializer. Weird, right?

This is absolutely not how C++ works: C++ initializes the base classes first, and then the members of the derived class, and then executes the code in the constructor of the derived class. But the C++ model has some weird behaviors with virtual function calls [<FontIcon icon="fas fa-globe"/>in constructors](https://isocpp.org/wiki/faq/strange-inheritance#calling-virtuals-from-ctors) that fall out of it. Let's see what happens if we write the above classes in C++ and try to greet the person in the constructor:

```cpp
class Person {
public:
  std::string name;
  int age;
  
  Person(const std::string &name, int age) : name(name), age(age) {
    greet()
  }
  
  virtual void greet() {
    std::cout << "Hello " << name << "!" << std::endl;
  }
}

class Employee: public Person {
  int badgeNumber;
  
  Employee(const std::string &name, int age, int badgeNumber) 
    : Person(name, age), badgeNumber(badgeNumber) { }
  
  void greet() override {
    std::cout << "Hello " << name << ", your badge number is " << badgeNumber << "!" << std::endl;
  }
}

Person *person = new Employee("Doug", 39, 1) // prints "Hello Doug!"
person->greet(); // prints "Hello Doug, your badge number is 1!"
```

Weird-er, right? The problem with calling virtual functions in constructors is that the base class constructor doesn't have a fully-formed object of the subclass type, because the members of the derived class haven't been initialized yet, and it would be undefined behavior to access them. So it's not safe for the `Person` constructor to treat the object as the `Employee` instance it will eventually be. Instead, it treats the object as an instance of `Person`, calling `Person::greet` instead of `Employee::greet`, causing the difference in behavior above. This is also the reason that it's possible to get errors at runtime due to calls to abstract virtual functions in C++, even though the language prevents you from creating an instance of an abstract type. Supporting this weird semantics is also awful for C++ compiler writers; [<FontIcon icon="fas fa-globe"/>read this](https://itanium-cxx-abi.github.io/cxx-abi/abi.html#vtable-ctor) if you'd like to feel bad for them.

Okay, back to Swift. If we go put a call to `greet` in the initializer for `Person`, we'll get consistent output:

```
Hello Doug, your badge number is 1
Hello Doug, your badge number is 1
```

The "backwards" initialization required by Swift, where you must initialize all of your own data members before calling your superclass initializer (via `super.init`), gives an important guarantee: the superclass initializer knows that all of it's subclasses have already initialized all of their own data members before it ever runs. Follow that logic all the way up to the root class's initializer (which has no superclass), and we know that once that initializer has initialized all of its own data members, the object is fully-initialized with its final type. Definite Initialization then makes `self` available (which happens after the `super.init` call in non-root classes), so you can call any overridden method in an initializer and get a consistent result. So the Swift approach, while weird at first, provides more consistent semantics with less syntax than C++, and doesn't require any kind of "default" state for data members. Sometimes weird is actually good, eh?

---

## Deinitializers

Unlike structs and enums, an instance of a class has a well-defined point at which it is destroyed (when it is no longer used). At this point, one can execute cleanup code in the *deinitializer*. A Swift deinitializer is like a C++ destructor, except it's written as `deinit` like this:

```swift
// in Person
deinit {
  print("\(name) has expired")
}
```

Deinitializers are never overridden in the sense that methods are. Rather, all of the deinitializers in the class hierarchy are executed from the most-derived class to the root class, and then all of the data members are destroyed.

---

## Downcasting

Let's say you have a `Person` and you want to check whether it's actually an instance of `Employee`. In C++, you would use `dynamic_cast` to perform the cast dynamically. In Swift, we use `as?`, like this:

```swift
func checkIfEmployee(person: Person) -> Bool {
  if let employee = person as? Employee {
    print("Yes, employee badge number is #\(employee.badgeNumber)")
    return true
  }
  
  return false
}
```

The way to read this is that we are attempting to downcast the `person` instance into an `Employee`. If it succeeds, we'll enter the body of the `if let` with the variable `employee` bound to the same instance as `person`, but with type `Employee`. If it fails, the `if` body doesn't run.
Now, sometimes we *know* based on other invariants in the program that a particular person instance must be an `Employee`. In C++, you would use a `static_cast` here (or a `dynamic_cast` on a reference to the type). In Swift, you can use `as!`, e.g.,

```swift
print("Employee badge number is #\((person as! Employee).badgeNumber)")
```

Swift is going to check this cast at runtime, and halt the program with an error message if `person` is not, in fact, an `Employee`. The `as!` cast should be used only in rare cases where you're unable to express what you need through the type system, and other invariants ensure that it will always succeed. Just like we always do with `static_cast` in C++, right? RIGHT?

---

## Optionals

In bundling together the `as?` cast and the `if let` in the example above, I glossed over what's actually happening here. Specifically, the `as?` can be used anywhere, and it produces a value of *optional* type. If we were to write:

```swift
let maybeEmployee = person as? Employee
```

The type of `maybeEmployee` is `Employee?`, where the question mark implies that might have an `Employee`, or we might have nothing. If you've used the C++ [<FontIcon icon="iconfont icon-cpp"/>`std::optional`](https://en.cppreference.com/w/cpp/utility/optional), it's the same idea, but with syntactic sugar in Swift to make it more ergonomic. `if let` is one of the ways to check whether there's a value inside an optional:

```swift
if let employee = maybeEmployee {
  print("Yes, employee badge number is #\(employee.badgeNumber)")
} else {
  // employee is not available
}
```

Here, the `if let` is checking whether the optional value to the right-hand side of `=` actually contains a value. If so, it pulls that value out and puts it into the variable declared to the left of the `=`. Otherwise, the body of the `if` doesn't run, but the `else` block (if present) would be executed. The `else` block does not have access to the `employee` variable at all.

### Options for accessing optionals

`if let` is the most popular way to extract a value out of an optional, but it isn't the only one. There is also the dual to `if`, called `guard`, which helps with the "early returns" style of programming. We could refactor the code above to look like this:

```swift
guard let employee = maybeEmployee else {
  // employee is not available
  return false
}

// employee is an Employee instance. Use it for the rest of the function
print("Yes, employee badge number is #\(employee.badgeNumber)")
return true
```

A `guard` statement checks that its conditions are true, which can involving introducing new variables. It also requires an `else` block that *must return*, so there is no way to fall out of the `else` block and into later code. Early returns are [<FontIcon icon="fas fa-globe"/>surprisingly controversial](https://www.fluentcpp.com/2018/08/24/how-to-design-early-returns-in-c-based-on-procedural-programming/) in C++, I think because you have to mentally dig for the `return` along all of the paths in the early-returning `if`. Swift's `guard` addresses those concerns by giving this pattern a specific keyword up front (`guard`), making the condition a positive one (you pass the guard if this condition holds), and ensuring that if the condition fails you always do an early return. Enough about `guard`; back to optionals, shall we?

The third way one can look into an optional is with a `switch`, because the `?` syntax is actually just synactic sugar for a use of the generic `Optional` type that's defined in the Swift standard library. It looks like this:

```swift
enum Optional<Wrapped> {
  case none
  case some(Wrapped)
}
```

The `none` case means there is no value, and the `some` case means that there is a value of type `Wrapped`. The angle brackets are for generics, as one would expect, declaring that `Optional` has a type parameter (akin to a *template type parameter* in C++). Given a value of optional type, you can switch on the two cases:

```swift
switch maybeEmployee {
  case .none:
    return false
  
  case .some(let employee):
    print("Yes, employee badge number is #\(employee.badgeNumber)")
    return true
}
```

### Optionals for dictionary access

Optionals can be formed from any type, and are useful for APIs that might return "no result". One great example of this is accessing elements within a Swift [<FontIcon icon="fa-brands fa-swift"/>`Dictionary`](https://developer.apple.com/documentation/swift/dictionary), which is like a [<FontIcon icon="iconfont icon-cpp"/>`std::unordered_map`](https://en.cppreference.com/w/cpp/container/unordered_map), by looking for an element with a specific key. Let's say we create a dictionary that maps from badge numbers to the employee with that badge number, like this:

```swift
// Create a dictionary from (badgeNumber, employee) pairs
let employeesByBadgeNumber: [Int: Employee] = .init(uniqueKeysWithValues: employees.map { 
  employee in (employee.badgeNumber, employee)
})
```

The use of closures will be explained in a separate post, but if you're used to C++ lambdas, it probably looks familiar already. The `[Int: Employee]` syntax is sugar for a `Dictionary` mapping from `Int` keys to `Employee` values. It mirrors the syntax of dictionary literals, i.e., `[1: doug]` is a dictionary containing a single entry mapping `1` to the `doug` instance.

We can look for the employee with a given badge number by subscripting this dictionary. The result of the subscript is going to be an `Employee?`, i.e., it's the employee if one with that badge number was found, or `nil` otherwise, which works very nicely with `if let`:

```swift
if let employee = employeesByBadgeNumber[17] {
  employee.greet()
}
```

again, the type system is helping here: the obvious way to find the value associated with a key is to use subscript, and it returns an optional so you're sure to handle the case where the value is missing. If you find yourself longing for the insert-a-default-if-nothing-is-there behavior of C++'s `std::map` and `std::unordered_map`, there's a special subscript just for you that also takes a default. You could use it like this, say, to count word frequency in a list of words:

```swift
var frequency: [String: Int] = [:]
for word in words {
  frequency[word, default: 0] += 1
}
```

The subscript that takes a default value produces a non-optional value, because an entry `[word: 0]` will be added if one wasn't already present. So, we can increment the frequency of each word directly.

### Optional chaining

Optionals are really common in Swift code, so the language has a number of affordances to make them easier to work with. For example, earlier we wanted to greet an employee with the given badge number, so we wrote this:

```swift
if let employee = employeesByBadgeNumber[17] {
  employee.greet()
}
```

This code is fine. It will work. But it's a little bit verbose, with the whole `if-let` dance to create a new variable. Instead, one can use optional *chaining* to call the `greet` method only when there is an employee, like this:

```swift
employeesByBadgeNumber[17]?.greet()
```

The `?` in this case means that we're doing optional chaining. It is followed by accesses into the instance (i.e., `.greet()`) that only happen when there is a value inside the optional. You can even chain multiple optional accesses together. For example, let's imagine that our `Employee` class added a `manager` data member, i.e.,

```swift
var manager: Employee? = nil
```

We could get the name of the employee 17's manager like this:

```swift
let managerName = employeesByBadgeNumber[17]?.manager?.name
// >----------------------------------------^--------^---->
//                                          1        2
```

Evaluation is left-to-right in Swift, so you can read this as looking in the dictionary for an employee with badge number 17. If that `Employee?` result contains an `Employee` (i.e., it is not `nil`) at the point marked #1, then we access the manager of that employee. If the manager data member contains an `Employee` at the point marked #2, then we access the name of that manager instance.

But what is the type of the `managerName` variable? Well, we know that `Employee.name` is a `String`, but of course at either #1 or #2 we might have encountered a `nil` and had to stop evaluation. We can't just leave `managerName` undefined (gasp!), so instead it gets type `String?`, where it either stores the result of completing the optional chain or it `nil` if a `nil` was encountered along the way.

### Optionals replace the dreaded NULL

In Swift, an instance of class type can never be NULL. If you have a value `employee` of type `Employee`, there is always a valid instance there. Instead of NULL pointers, Swift uses optionals: `Employee?` is either a value employee, or it's `nil`. But unlike the C++ equivalent of `Employee*`, Swift has static affordances to make it easy to use optionals correctly. That means no NULL pointer dereferences, no defensive checks against NULL when you're not sure. Unless you're one of the few using a [<FontIcon icon="iconfont icon-cpp"/>`not_null` smart pointer type](https://www.cppstories.com/2017/10/notnull/), it may surprise you at just how liberating it is to stop thinking about the special case of NULL everywhere and let the type checker support you.

### Aside: How big is an optional?

One last little fun bit of trivial: if I run this C++ code, what values should we expect to get?

```cpp
class Employee { };

int main() {
  std::cout << sizeof(Employee*) << std::endl;
  std::cout << sizeof(std::optional<Employee*>) << std::endl;
}
```

On my system, I get 8 and 16, respectively. Using `std::optional` doubles the storage needed!

Now what happens with the Swift equivalent code?

```swift
class Employee { }

print(MemoryLayout<Employee>.size)
print(MemoryLayout<Employee?>.size)
```

I get 8 for both! Swift is doing an important space optimization behind the scenes: because an `Employee` must refer to a valid address, and the integral value of 0 is not a valid address, Swift will use the integer representation `0` to mean the `.none` of the optional (which corresponds to `nil`) and all other values to mean the `.some` case of the optional. Therefore, it can use a single pointer's width of storage to capture an optional value. This is generally good for memory usage, but it's also really important for interoperability with C++, because a C++ pointer value (that can be `NULL`) can be treated as a Swift optional, and vice-versa.

Now, if you were to create an optional integer, `Int?`, you would see that the optional takes more space than a single `Int`. That's because all possible bit representations in an `Int` are valid values of an `Int`, so we add an extra byte (from 8 to 9 on a 64-bit machine) to tell whether we're in the `.none` or the `.some` case.
But the thing is... spare bits and holes in bit representations are everywhere, and Swift will dig to try to find them. For example, let's add a `Contractor` class and create an enum with three cases:

```swift
enum Payee {
  case employee(Employee)
  case contractor(Contractor)
  case myself
}
```

How big are `Payee` and `Payee?`, based on what we've seen before?. In fact, both are the same 8 bytes on a 64-bit system. It's not magic, it's how computers work: a class like `Employee` or `Contractor` is going to be at least 8-byte-aligned, because of it's object header. That means that a valid reference to a class (basically, a pointer) will always have the lowest three bits be zero: anything else would be a misaligned pointer. So between those two cases, we have three common low bits we can use for whatever we want, and the third case (`myself`) has no data. Three bits is plenty of space to store a discriminator that says whether a given `Payee` instance is an `employee`, `contractor`, or `myself`: we need only mask off the upper bits to figure out what case we're in, and then mask off the lower bits to get a proper `Employee` or `Contractor` pointer when we know which one it is. Cool, right?

That explains `Payee`, but what about the optional `Payee?` size? The principle is the same: `Payee` only needed two of the three low bits to represent its three cases. That leaves one glorious extra bit to distinguish between the `some` and `none` cases, so `Payee?` still needs only 8 bytes.
You can do all of these optimization tricks in C++ with template metaprogramming. Clang uses LLVM's [<FontIcon icon="fas fa-globe"/>`PointerUnion`](https://llvm.org/doxygen/classllvm_1_1PointerUnion.html) class template *extensively* to get this same kind of memory savings, but it's a whole lot nicer when the language just does it for you and you don't have to think about it.

---

## Automatic reference counting

By now you've probably noted the lack of `delete` or `free` or any other kind of explicit deallocation. Swift provides automatic memory management using reference counting: a new instance of class type is allocated with a reference count of 1. Anything that needs to hold onto the object will increment its reference count to do so, and decrement the reference count when it is no longer needed. When the reference count hits zero, the object will be de-initialized and the memory freed.

The C++ standard library has a reference-counting smart pointer template, [<FontIcon icon="iconfont icon-cpp"/>`std::shared_ptr`](https://en.cppreference.com/w/cpp/memory/shared_ptr). If you've used `shared_ptr`, you already have a sense of how reference counting works in practice, and you can think of Swift's classes as using roughly the same semantic model but eliminating the syntactic overhead by bringing it into the language. Swift also has an analogue to [<FontIcon icon="iconfont icon-cpp"/>`std::weak_ptr`](https://en.cppreference.com/w/cpp/memory/weak_ptr), which is a non-owning reference to something that may be kept alive by other `shared_ptr` instances.

However, the `shared_ptr` analogy is somewhat flawed because `std::shared_ptr` makes a number of compromises so that it can be used to point to any type. A `shared_ptr` is often two pointers large, because it has to separate out the "control block" (which handles the reference count) from the raw object pointer. This isn't great for efficiency, and also makes the `get()` operation particularly dangerous: once you've extracted the raw object pointer, there's no way to get back to the safety of a `shared_ptr` unless you've also used [<FontIcon icon="iconfont icon-cpp"/>`std::enable_shared_from_this`](https://en.cppreference.com/w/cpp/memory/enable_shared_from_this). A better comparison to Swift would be [<FontIcon icon="fas fa-globe"/>`boost::intrusive_ptr`](https://www.boost.org/doc/libs/1_84_0/libs/smart_ptr/doc/html/smart_ptr.html#intrusive_ptr), because the Swift reference count is embedded within the object itself. That means you're only passing around a single pointer to the object rather than the two pointers often needed for a `std::shared_ptr`, and reference-counting operations have better locality with the object.

### Weak references

One problem with reference counting is the potential for reference cycles: if object `a` holds a reference to object `b`, and object `b` holds a reference to object `a`, then these two objects will keep each other alive even after the rest of the program has forgotten about them, resulting in a leak:

```swift
class A {
  var b: B?
}

class B {
  var a: A?
}
```

This problem exists in all reference counting implementations, whether it's the C++ `std::shared_ptr` or [<FontIcon icon="fa-brands fa-python"/>Python](https://devguide.python.org/internals/garbage-collector/). Python has a built-in garbage collector to find these reference cycles and arbitrarily break them to free memory, but such an approach requires a fairly heavy runtime. Swift's approach is more like `std::shared_ptr`: the programmer is responsible for ensuring there are no reference cycles, and Swift provides tools to identify and deal with them when they happen.

Weak references are the primary mechanism for breaking cycles. A weak pointer points at an object but does not keep it alive. Weak references are introduced with the `weak` modifier on a variable, e.g.,

```swift
class B {
  weak var a: A?
}
```

A `weak` variable must have optional type, because the object it points to might go away at any point. If the object it points to is destroyed, then the weak reference will get the value `nil`. Code that works with weak references will naturally "promote" the weak reference to a strong reference when working with it, because it's the same operation as determining whether any other optional has a value in it:

```swift
if let a = b.a {
  // a has type A, a strong reference that keeps the object alive
}
```

This is akin to the `lock()` operation of a `std::weak_ptr` returning a possibly-NULL `std::shared_ptr`, but benefits from all of the conveniences for optional types that Swift offers.

### Why reference counting?

We opted for reference counting in Swift because we felt it hit the sweet spot for automatic memory management.
Unlike more traditional garbage collectors, reference counting is deterministic: when your reference count goes to zero, your object goes away. There's no delay until the garbage collector runs where you are using memory than you should be, nor is there ever a need to "pause" the program to run the garbage collector. Moreover, reference counting can be implemented with a tiny runtime footprint---just a couple of atomic operations---vs. a more elaborate garbage collector runtime. It also places no restrictions on the program beyond the need to correctly balance out "retains" and "releases", so you can freely mix reference-counted code with other code in the system (say, in other languages). Finally, reference counting is locally optimizable: if you can prove that an object is kept alive within a given scope, you don't need to perform any reference counting within that region of the code. That means you can optimize away all of the reference counts in a particularly performance-sensitive part of the code while not having to change the basic model used by the same classes elsewhere in the program.

At the other end of the spectrum from a traditional garbage collector are systems with unique ownership, such as [<FontIcon icon="iconfont icon-cpp"/>`std::unique_ptr`](https://en.cppreference.com/w/cpp/memory/unique_ptr). This approach requires no overhead for automatic memory management, but makes it hard to express any data structure that isn't tree-like in nature. Reference counting can express arbitrary graphs of objects directly, making it more flexible than models based on unique ownership.

Coming from C++, the "automatic" part of Swift's automatic reference counting can be frustrating. The optimizer might not remove all of the reference counting that you want it to, and where in C++ you might just grab the raw pointer when your smart pointers aren't optimizing away, Swift makes it a little harder. My advice here is to profile your code: not some micro-benchmark that does no work, but your actual code. If reference-counting is causing performance issues, `swift_retain` and `swift_release` will light up in your profiler and you can work on optimizing those hot spots. Swift has some tools for helping with this, such as `unowned(unsafe)` references (which are effectively raw pointers) as well as ways to be deliberate about ownership, such as [the `consume` operation (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0366-move-function.md). In my experience, most of the time the reference counting isn't in the way, and when it is a problem, one can optimize locally, usually without having to dip into unsafe code.

---

## Wrap-up and what's next?

We dove into Swift's support for Object-Oriented Programming, which is based on classes with single inheritance and method overriding. We went over initialization (*weird*, but good) and de-initialization, as well as down casting.

That led us into the world of optionals, and how Swift uses them to eliminate NULL pointers from the language (Tony Hoare's self-proclaimed [<FontIcon icon="fas fa-globe"/>billion-dollar mistake](https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare/)). Optionals are a huge part of working with Swift, even if you stick to the value-semantic world of structs and enums, so it's worth getting a feel for the syntactic constructs that make them easy to work with.

We're going to take a break on introducing new kinds of types: structs, enums, and classes form the core of Swift's semantic model. Next, we're going to talk a bit about code organization in Swift, and how extensions take all of the fun out of the "free function or member function?" debate.

---

<TagLinks />