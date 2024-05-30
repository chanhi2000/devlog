---
lang: ko-KR
title: Unit Test
description: Swift > Unit Test
icon: fas fa-list-check
category: Swift
tag:
  - ios
  - swift
  - xctest
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## Intro

- Unit tests are means of testing __small bits of code__
- This works well to __reduce bugs__ in new and existing features
- A unit test is essentially a __function__ that __invokes__ some code and __asserts__ that certain conditions are satisfied during code execution

### `xctest`

- Xcode's __testing framework__ for unit testing
- __Integerates__ seamlessly with __Xcode's testing workflow__
- XCTests can be added when creating a __new project__ or through `[File] > [New] > [Target] > [Unit Testing Bundle]`

### `xctest` class

- Adding `@testable` attribute to import statement provides elevated access
- `setUp()` is called _before_ each tests are run
- `tearDownWithError()` provides an opportunity to __perform cleanup__ and to __throw errors__ after each test

```swift
import XCTest
@testable import BMI_Calculator

class PROJECTNAMETests: XCTestCase {
    override func setUpWithError() throws {
        
    }
    override func tearDownWithError() throws {
        
    }
}
```

### Example

- Test should be written as __functions__, the below struct calculates a user BMI - function need to be named as `test..()`

```swift
struct BMICalculator {
    var weightKG: Int
    var heightM: Double
    func returnBMI() -> Double {
        return Double(weightKG) / (heightM * heightM)
    }
}

class BMI_CalculatorTests: XCTestCase {
    func testBMI() {
        let bmiTest = BMICalculator(weightKG: 68, heightM: 1.77)
        let result = bmiTest.returnBMI()
        XCTAssertEqual(result, 21.70512943279896)
    }
}
```

### Notable `XCTAssert`

- There are seeveral `XCTAsserts` worth using, the xample below highlights a few of them:

```swift
func testNotableXCTAssert() {
    // Bool
    let falseBoolResult = false
    XCTAssertFalse(falseBoolResult)

    // Nil
    let nilResult: String? = nil
    XCTAssertNil(nilResult)

    // Greater Than / Less Than
    let greaterThanResult = 12
    XCTAssertGreaterThanOrEqual(graterThanResult, 11)

    // Strings
    let notEqualString = "Example"
    XCTAssertNotEqual(notEqualString, "Test?")
}
```

### Summary

- Testing reduces bugs - especially on __larger__ project with several developers
- Unit tests __CAN__ be __skipped__ or __disabled__
- All unit tests are functions that __MUST__ include "test" in the __function name__
- __Keep tests simple__ so that you're only testing a __unit__.

<TagLinks />