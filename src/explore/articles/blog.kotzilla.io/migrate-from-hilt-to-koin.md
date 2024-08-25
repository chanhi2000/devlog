---
lang: ko-KR
title: "How To Migrate from Hilt to Koin - A Detailed Guide"
description: "Article(s) > How To Migrate from Hilt to Koin - A Detailed Guide"
icon: fa-brands fa-android
category:
  - Java
  - Kotlin
  - Android
  - Gradle
  - Article(s)
tag: 
  - blog
  - blog.kotzilla.io
  - java
  - kotiln
  - android
  - gradle
  - hilt
  - koin
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How To Migrate from Hilt to Koin - A Detailed Guide"
    - property: og:description
      content: "How To Migrate from Hilt to Koin - A Detailed Guide"
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/explore/articles/blog.kotzilla.io/migrate-from-hilt-to-koin.html
prev: /programming/java-android/articles/README.md
date: 2024-07-23
isOriginal: false
cover: https://blog.kotzilla.io/hubfs/Screenshot%202024-07-18%20at%2017.13.33.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Android > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/java-android/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How To Migrate from Hilt to Koin - A Detailed Guide"
  desc="Migrate from Hilt to Koin for Android devs. A step-by-step guide to cover setup, annotation replacements, module migration, testing, & Compose previews."
  url="https://blog.kotzilla.io/migrate-from-hilt-to-koin"
  logo="https://blog.kotzilla.io/hubfs/favicon.png"
  preview="https://blog.kotzilla.io/hubfs/Screenshot%202024-07-18%20at%2017.13.33.png"/>

![Migrate from Hilt to Koin](https://139572340.fs1.hubspotusercontent-eu1.net/hub/139572340/hubfs/Screenshot%202024-08-01%20at%2013.12.26.png?width=1200&length=1200&name=Screenshot%202024-08-01%20at%2013.12.26.png)

Migrating from Hilt to <a href="https://insert-koin.io/">Koin </a>might seem daunting at first, but it's actually more manageable than you might think. To simplify the process, we've put together a comprehensive guide for you.

For Android developers, especially those looking for a dependency injection (DI) solution for their Kotlin Multiplatform (KMP) projects, Koin offers KMP compatibility that Hilt doesn't yet. Our step-by-step guide will help you make the switch smoothly.

::: tip Pro Tip

To allow for a progressive migration, set up both DI frameworks to coexist temporarily. This enables you to migrate parts of your codebase incrementally, reducing the risk of disruption.

:::

This guide covers common scenarios and transformations to streamline your migration process. Plus, we've included a handy cheat sheet for quick reference😉

Get it here 👇

> [<FontIcon icon="fas fa-download"/>Download Cheat Sheet](https://share-eu1.hsforms.com/1OdTs0YwvRIO9yNagrrIa3A2b3ipg)

---

## Setting Up Koin and Koin Annotations

There are three steps (and an optional fourth):

### Step 1: Adding Koin Dependencies

Ok, so, to start using Koin, include the necessary dependencies in your `build.gradle.kts` file.

You need this as it provides the core functionality of the Koin framework, which is necessary for implementing dependency injection in your Android application.

Add the following lines in the dependencies section:

```kotlin
// Koin
implementation("io.insert-koin: koin-android: 3.5.6")
```

### Step 2: Setting Up Koin Annotations

**Now, set up Koin Annotations**, which simplify the configuration and usage of Koin. Koin Annotations help automate the generation of boilerplate code needed for dependency injection. By including these dependencies, you enable annotation processing, which simplifies module and component setup.

Add the KSP Gradle Plugin:

```kotlin
plugins { 
  kotlin("multiplatform")
}
```

::: info

Here's the link to the official doc:

<SiteInfo
  name="KSP with Kotlin Multiplatform | Kotlin Documentation"
  desc="KSP with Kotlin Multiplatform"
  url="https://kotlinlang.org/docs/ksp-multiplatform.html"
  logo="https://kotlinlang.org/assets/images/apple-touch-icon-144x144.png?v2"
  preview="https://kotlinlang.org/assets/images/open-graph/docs.png"/>

:::

Gradle Dependencies:

```kotlin
// Koin Annotations 
implementation("io.insert-koin: koin-annotations:1.3.1")
ksp("io.insert-koin:koin-ksp-compiler:1.3.1")
```

Ensure to include the KSP plugin in your project setup. The KSP (Kotlin Symbol Processing) plugin is responsible for processing annotations during compile time.

This step is necessary for Koin Annotations to work. It allows the framework to generate the required code for dependency injection automatically.

### Step 3: Configuring Source Sets

In Android only, configure your source sets to recognize the KSP-generated code. This configuration ensures that the generated code from KSP is included in your project's source sets. Without this step, the generated classes might not be recognized, leading to compilation errors:

```kotlin
android {
  applicationVariants.all {
    val variantName = name
    sourceSets {
      getByName("main") {
        java.srcDir(File("build/generated/ksp/$variantName/kotlin"))
      }
    }
  }
  // ... 
}
```

### Optional: Activating Compile-Time Safety

To enable compile-time safety checks in Koin, configure KSP with the `KOIN_CONFIG_CHECK` property.Enabling this setting allows Koin to perform configuration checks at compile time, ensuring that all dependencies are correctly defined and reducing the risk of runtime errors due to misconfigurations:

```kotlin
ksp {
  arg("KOIN_CONFIG_CHECK", "true")
}
```

---

## Replacing Hilt Annotations with Koin

Converting Hilt annotations to Koin equivalents involves several changes. If there's no equivalent, you can simply remove the Hilt annotation.

### Hilt Annotations and Their Koin Equivalents

![](https://blog.kotzilla.io/hs-fs/hubfs/Screenshot%202024-07-15%20at%2017.10.52.png?width=1680&height=1302&name=Screenshot%202024-07-15%20at%2017.10.52.png)

### Why Some Hilt Annotations are Not Needed in Koin

#### `@HiltAndroidApp`

::: tabs

@tab:active Hilt

`@HiltAndroidApp` is used to trigger Hilt's code generation and set up the dependency graph for the application.

@tab Koin

Koin doesn't require an annotation on the application class. Instead, you initialize Koin explicitly in the `onCreate` method of your `Application` class using `startKoin`. This approach is more flexible as it does not rely on code generation.

:::

#### `@AndroidEntryPoint`

::: tabs

@tab:active Hilt

`@AndroidEntryPoint` is used to indicate that Hilt should provide dependencies to Android components (activities, fragments, services).

@tab Koin

Koin injects dependencies directly without requiring specific annotations on the components. Dependency injection is achieved using property delegation (e.g., by `inject()`) or constructor injection, making it simpler and more intuitive.

:::

#### `@InstallIn`

::: tabs

@tab:active Hilt

`@InstallIn` specifies the Hilt component in which the module will be installed (e.g., SingletonComponent, ActivityComponent).

@tab Koin

Koin modules do not need to be installed into specific components because Koin uses a simpler and more straightforward module system. You define your modules and then load them when you start Koin. The dependency scope (e.g., singleton, factory) is directly managed within the module definitions.

:::

---

## Initializing Koin

Replace Hilt initialization with `startKoin` in your Application class. Koin requires explicit initialization within the Application class to set up the dependency graph. This setup is crucial for Koin to manage dependencies throughout the application lifecycle.

```kotlin
Kotlin
class MyApplication: Application() {
  override fun onCreate() {
    super.onCreate()
    startkoin {
      androidContext(this@MyApplication) modules (AppModule().module)
    }
  }
}
```

---

## Injecting Dependencies

Convert Hilt injection to Koin injection. Koin uses Kotlin property delegation `by inject()`for dependency injection, which is more idiomatic in Kotlin and eliminates the need for `@Inject` annotations/

![](https://blog.kotzilla.io/hs-fs/hubfs/Screenshot%202024-07-15%20at%2017.22.03.png?width=2400&height=810&name=Screenshot%202024-07-15%20at%2017.22.03.png)

---

## ViewModel Injection

In summary, migrating ViewModel injection from Hilt to Koin involves:

- Using `@KoinViewModel` instead of `@HiltViewModel`.
- Removing `@Inject` annotations and using direct constructor injection.

In Hilt, you use the `@HiltViewModel` annotation to mark a ViewModel class for dependency injection. This annotation, combined with the `@Inject` constructor, allows Hilt to automatically provide the necessary dependencies:

```kotlin
@HiltViewModel
class MyViewModel @Inject constructor (
  private val repository: Repository
): ViewModel()
```

In Koin, you achieve similar functionality using the `@KoinViewModel` annotation. Instead of using `@Inject`, you directly declare the dependencies in the constructor, and Koin takes care of the rest:

```kotlin
@KoinViewModel
class MyViewModel (
  private val repository: Repository
): ViewModel()
```

Koin simplifies ViewModel injection by removing the need for explicit injection annotations. The `@KoinViewModel` annotation ensures that Koin understands the lifecycle of the ViewModel and provides the necessary dependencies.

> [<FontIcon icon="fas fa-download"/>Download Cheat Sheet](https://share-eu1.hsforms.com/1OdTs0YwvRIO9yNagrrIa3A2b3ipg)

---

## Composable Injection

As Jetpack Compose becomes the preferred toolkit for building native UI in Android, integrating dependency injection into Composable functions is crucial for maintaining a clean and modular architecture. Both Hilt and Koin support dependency injection within Composables, but the approach varies between the two frameworks.

Using Hilt, you can inject a ViewModel in a Composable function using the `hiltViewModel` function:

```kotlin
@Composable
fun MyComposable(viewModel: MyViewModel = hiltViewModel())
```

Koin provides the `koinViewModel` function for ViewModel injection in Jetpack Compose, aligning with the Compose paradigm and ensuring dependencies are managed within the Composable lifecycle:

```kotlin
@Composable
fun MyComposable(viewModel: MyViewModel = koinViewModel())
```

For injecting non-ViewModel dependencies, use `koinInject()`:

```kotlin
@Composable
fun MyComposable(myComponent: MyComponent = koinInject())
```

One of the key benefits of using `koinInject` is that it ensures the injected dependencies are managed in line with the Composable lifecycle. When the Composable is recomposed or removed, Koin manages the dependencies accordingly, preventing memory leaks and ensuring optimal resource usage.

---

## Migrating Modules

Migrating dependency injection modules from Hilt to Koin requires a systematic approach to ensure that your dependencies are configured correctly and efficiently. This section will guide you through the necessary steps to transform your Hilt modules into Koin modules.

### Step 1: Replace `@Module` and `@InstallIn` with `@Module` from Koin

In Hilt, modules are annotated with `@Module` and are installed into specific components using `@InstallIn`. This setup helps Hilt understand the scope and lifecycle of the dependencies.

In Koin, the module definition is more straightforward. You define a module using the `module` function, and you don't need a separate annotation to specify the component scope. Koin's approach eliminates the need for `@InstallIn` by using a single `@Module` annotation and managing scopes within the module itself. This simplifies the configuration and reduces boilerplate code.

### Step 2: Change `@Provides` Methods to `@Single` or `@Factory`

In Hilt, you use `@Provides` methods within your modules to specify how to create dependencies. These methods can also indicate the scope of the dependency, such as singleton or scoped.

In Koin, you use `@Single` for singleton instances and `@Factory` for factory-scoped instances directly in the class definition or the module. Koin's annotations like `@Single` and `@Factory` make it clear and concise how dependencies are scoped and provided. This reduces the need for separate methods and keeps the module definition more readable.

### Step 3: Remove `@Inject` from Constructors

In Hilt, constructors are annotated with `@Inject` to indicate where dependencies should be provided.

In Koin, you don't need to annotate constructors with `@Inject`. You simply define the dependencies in the constructor, and Koin handles the rest. Removing `@Inject` annotations aligns with Kotlin's idiomatic way of handling dependency injection. Koin uses constructor injection directly, making the code cleaner and reducing annotation clutter.

### Step 4: Update Module Declarations in `startKoin`

Finally, in Hilt, modules are implicitly registered through the annotation processing system.

In Koin, you need to explicitly declare and load your modules in the `startKoin` function within your Application class. Explicitly declaring modules in `startKoin` ensures that all dependencies are loaded and managed by Koin from the start of the application lifecycle. This approach provides more control and transparency over your dependency graph.

### Step 5: Bridging Components Between Hilt and Koin

To allow for a progressive migration, you can bridge components between Hilt and Koin. This involves setting up both DI frameworks to coexist temporarily, enabling you to migrate parts of your codebase incrementally. This bridging approach allows you to gradually migrate your dependencies from Hilt to Koin without disrupting your entire codebase. It provides flexibility and reduces the risk of introducing errors during the migration process.

> [<FontIcon icon="fas fa-download"/>Download Cheat Sheet](https://share-eu1.hsforms.com/1OdTs0YwvRIO9yNagrrIa3A2b3ipg)

---

## Testing

When migrating from Hilt to Koin, you'll need to adjust your test setup to use Koin's testing utilities instead of Hilt's.

In Hilt, you typically use the `HiltAndroidRule` to set up and tear down the dependency graph for your tests.

Koin provides a straightforward testing API that allows you to set up and tear down the dependency graph in your tests. Here's how you can migrate your test setup from Hilt to Koin:

- Implement the `KoinTest` interface.
- Use the `startKoin` function to initialize your test modules.
- Use the `stopKoin` function to clean up after your tests.

```Kotlin
class MyTest: KoinTest {
  @Before
  fun setup() {
    startkoin { modules (testModule) } }
  
  @After
  fun tearDown() {
    stopKoin()
  }
}
```

---

## Compose Previews

When using Koin, it's essential to set up your Compose previews correctly to ensure they can access the necessary dependencies.

In Hilt, you might use a preview composable to provide the necessary dependencies.

With Koin, you can use the `KoinApplication` composable to provide the required dependencies for your Compose previews. This approach ensures that your preview composables have access to the same dependency graph as the rest of your application, making your previews more accurate and reliable.

Here's how you can set up a Koin-powered Compose preview:

```Kotlin
@Preview
@Composable
fun MyPreviewComposable() {
  KoinApplication(application = { modules (previewModule) }) {
    MyComposable()
  }
}
```

Using the `KoinApplication` composable ensures that your dependencies are correctly provided to your preview composables. This setup mirrors the runtime environment, allowing you to accurately preview how your UI components will behave with the actual dependencies.

### Final Migration Tips

Migrating from Hilt to Koin can be straightforward if you approach it methodically. Here are some tips to help you along the way, ensuring a smooth transition without overwhelming yourself or your codebase.

- **Start with Smaller, Less Dependent Modules**: This allows you to get accustomed to Koin's setup and mechanics without dealing with complex dependency graphs right away.
- **Bridge Components Between Hilt and Koin**: To allow for a progressive migration, set up both DI frameworks to coexist temporarily. This enables you to migrate parts of your codebase incrementally, reducing the risk of disruption.
- **Leverage Koin Annotations for Easier Migration**: For simple dependencies that don't require complex setup or scoping, leverage Koin's default module annotations like `@Single` or `@Factory`This can save time and keep your module definitions clean and concise. It also helps in maintaining readability and reducing boilerplate code.
- **Update Tests Alongside Component Migrations**: As you migrate your components, don't forget to update your tests. Ensure that your test setup uses Koin's testing utilities and that all dependencies are correctly mocked or provided.
- **Verify Dependency Graph After Migration**: Once you've migrated a set of components or modules, take the time to verify the entire dependency graph to ensure everything is wired correctly.

> [<FontIcon icon="fas fa-download"/>Download Cheat Sheet](https://share-eu1.hsforms.com/1OdTs0YwvRIO9yNagrrIa3A2b3ipg)

By following these tips, you'll be able to transition your project from Hilt to Koin smoothly. And don't forget to refer to [<FontIcon icon="fas fa-globe"/>Koin's official docs](https://insert-koin.io/docs/reference/koin-annotations/start/) for any advanced usage and detailed information that might help along the way.

Happy Migration👋

---

<TagLinks />