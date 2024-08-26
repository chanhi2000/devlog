---
lang: ko-KR
title: A Guide to Object-Oriented Programming Principles
description: Article(s) > A Guide to Object-Oriented Programming Principles
icon: fa-brands fa-java
category: 
  - Java
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - java
head:
  - - meta:
    - property: og:title
      content: Article(s) > A Guide to Object-Oriented Programming Principles
    - property: og:description
      content: A Guide to Object-Oriented Programming Principles
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/a-guide-to-object-oriented-programming-principles.html
prev: /programming/java/articles/README.md
date: 2024-06-18
isOriginal: false
cover: https://freecodecamp.org/news/content/images/size/w1000/2024/06/oop-principles.png
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
  name="A Guide to Object-Oriented Programming Principles"
  desc="A programming language is generally classified based on its support for one or more paradigms. Object-oriented programming is one such paradigm, where the code is organized as objects. It is used to develop desktop and mobile applications or more complex web or enterprise applications. Using object-oriented programming, you can build..."
  url="https://freecodecamp.org/news/a-guide-to-object-oriented-programming-principles/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://freecodecamp.org/news/content/images/size/w1000/2024/06/oop-principles.png"/>

A programming language is generally classified based on its support for one or more paradigms. 

Object-oriented programming is one such paradigm, where the code is organized as objects. 

It is used to develop desktop and mobile applications or more complex web or enterprise applications. 

Using object-oriented programming, you can build modular and scalable software that is easy to maintain.

In this article, you will learn about the principles of object-oriented Programming that lay the foundation for building robust systems. 

We will use Java as the programming language for the examples provided below.

---

## What is Object-Oriented Programming?

Object-Oriented Programming is a programming methodology that models real-world entities in the form of objects.

These objects are instances of classes.

A class can be thought of as a blueprint and each class can contain fields, which define the attributes of the object, and methods, which describe the object's behavior. Each class can be developed, tested, and debugged independently.

Now that you have an understanding of the basic definition of object-oriented programming, let us jump right in and learn about its core principles.

There are four core principles, or pillars, in the object-oriented Programming paradigm. They are:

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

What do they mean? Let us explore further with a simple explanation followed by an example for each of them in the following sections.

---

## What is Abstraction?

Abstraction is defined as the concept of hiding the details of implementation and exposing only the necessary functionalities of the object to the user. 

The keywords that you need to keep in mind here are: 'Implementation hiding'.

Abstraction in Java can be achieved through Interfaces and Abstract classes.

```java
abstract class Animal {
    public abstract void makeSomeNoise();
}

class Dog extends Animal {
    public void makeSomeNoise() {
        System.out.println("Bark");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.makeSomeNoise(); // Output - Bark
    }
}
```

In the above example, abstraction is achieved with the help of an abstract class named `Animal`.

Here, only the necessary functionality of the class is exposed via the `makeSomeNoise()` method.

The details of implementation are hidden in the abstract class and they are only provided in the concrete class `Dog`, which extends the `Animal` class. 

Note that you will learn more about the `extends` keyword while we discuss Inheritance.

---

## What is Encapsulation?

Encapsulation refers to the concept of encapsulating or wrapping up the member variables (data) and the methods (behavior) of an object into a single unit, such as a class. 

The internal information of the object is hidden so that we can prevent unintended modifications and allow only controlled access. The keywords that you need to keep in mind here are: 'Information hiding'.

Encapsulation in Java is achieved through access modifiers. We mark the fields as `private` and make them accessible via public setter and getter methods.

```java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void display() {
        System.out.println("Name: " + name + <", Age: " + age);
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person("Raj", 30);
        person.display(); // Output - Name: Raj, Age: 30

        person.setName("Kumar");
        person.setAge(25);
        person.display(); // Output - Name: Kumar, Age: 25
    }
}
```

In the above example, the fields and methods are encapsulated within a class named `Person`. 

You declare the fields `name` and `age` as `private` and provide public setter and getter methods `getName()`, `setName()`, `getAge()`, and `setAge()` to modify the values as needed. 

---

## What is Inheritance?

Inheritance establishes a hierarchical relationship between two classes.

In this concept, one class inherits the fields (properties) and methods (behavior) of another class, while having properties and behavior of its own.

The class that inherits from another is called a subclass, derived class, or child class. The class from which the subclass inherits is known as the superclass, base class, or parent class.

In Java, inheritance is achieved using the `extends` keyword.

```java
class Animal {
    public void makeSomeNoise(){
        System.out.println("Make some animal noise");
    }
}

class Dog extends Animal {
    public void makeSomeNoise() {
        System.out.println("Bark");
    }
    public void doSomething(){
        System.out.println("Play with ball");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.makeSomeNoise(); // Output - Bark
        myDog.doSomething(); // Output - Play with ball
    }
}
```

In the above example, the `extends` keyword indicates that the `Dog` class is the subclass of the `Animal` class. 

The `Dog` class inherits the `makeSomeNoise()` method from the `Animal` class. This allows the `Dog` class to reuse the method and provide its own implementation without having to rewrite it completely. 

You can also note that the `Dog` class has its own behavior through the `doSomething()` method. 

Inheritance defines an "IS-A" relationship between the two classes. In our example, Dog IS-A Animal.

Note that Java supports multi-level inheritance. For example, `class Labrador` inherits from `class Dog`, which in turn inherits from `class Animal`. However, it does not support multiple inheritance. That is, a class is not allowed to inherit from two or more parent classes.

---

## What is Polymorphism?

Poly (many), morph (forms).

Polymorphism defines the capability of an object to be represented in different forms. 

In Java, polymorphism can be categorized into two types: compile-time polymorphism and runtime polymorphism.

Compile-time polymorphism is achieved through method overloading – multiple methods have the same name but different type or number of parameters.

```java
class MathOperation {
    public int add(int a, int b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        MathOperation math = new MathOperation();
        System.out.println(math.add(95, 5));       // Output - 100
        System.out.println(math.add(75, 5, 20));   // Output - 100
    }
}
```

In the above example, we have overloaded the `add()` method. There are two methods with the same name `add` but they have different number of parameters. 

During compilation, based on the number of parameters passed to the method, the appropriate call is made.

Runtime polymorphism is achieved through method overriding – a subclass has a method with the same name and same set of parameters as that of its superclass method. However, it provides its own implementation of the method. 

Here, the method resolution happens at runtime.

```java
class Animal {
    public void makeSomeNoise() {
        System.out.println("Make some animal noise");
    }
}

class Dog extends Animal {
    @Override
    public void makeSomeNoise() {
        System.out.println("Barks");
    }
}

class Cat extends Animal {
    @Override
    public void makeSomeNoise() {
        System.out.println("Meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myAnimal; 

        myAnimal = new Dog(); 
        myAnimal.makeSomeNoise(); // Output - Barks

        myAnimal = new Cat(); 
        myAnimal.makeSomeNoise(); // Output - Meows
    }
}
```

In the above example, the `makeSomeNoise()` method of the `Animal` class is overridden by the `Dog` and `Cat` subclasses and they provide their own implementation of this method. 

During object creation, the `Animal` variable holds a `Dog` or `Cat` object and when the `makeSomeNoise()` method is called, the appropriate overridden method is called based on the actual object type.

---

## Conclusion

In this article, we explored the fundamental principles of Object-Oriented Programming (OOP). 

Familiarity with these concepts is crucial for building robust, maintainable, and scalable software systems.

---

<TagLinks />