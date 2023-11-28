---
lang: ko-KR
title: SQLite With Swift Tutorial - Getting Started
description: 🕊️Kodeco - Swift > SQLite With Swift Tutorial - Getting Started
tags: ["crashcourse", "kotiln", "android"]
meta:
  - name: 🕊️Kodeco - Swift > SQLite With Swift Tutorial - Getting Started
    content: SQLite With Swift Tutorial - Getting Started
  - property: og:title
    content: SQLite With Swift Tutorial - Getting Started
  - property: og:description
    content: 🕊️Kodeco - Swift > SQLite With Swift Tutorial - Getting Started
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/swift-kodeco/6620276-sqlite-with-swift-tutorial-getting-started.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: SQLite With Swift Tutorial - Getting Started
desc: In this SQLite with Swift tutorial, you’ll learn to use a SQLite database with Swift projects by creating tables and inserting, updating and deleting rows.
link: https://www.kodeco.com/6620276-sqlite-with-swift-tutorial-getting-started
logo: https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-saving-data-persistence-ios-09771a6a821ae79fa6653f51395c14d66cb117d87648bb17bd04f20f9ff48576.svg
color: rgba(135, 99, 210, 0.2)
```

In software development, it doesn’t take long before you need to persist app data. Often, this comes in the form of data structures. But how do you store those structures efficiently?

Fortunately, some great minds have developed solutions for storing structured data in databases and writing language features to access that data. __SQLite__ is available by default on iOS.

In fact, if you’ve used [Core Data](https://www.raywenderlich.com/145809/getting-started-core-data-tutorial) before, you’ve already used SQLite. Core Data is just a layer on top of SQLite that provides a more convenient API.

In this SQLite with Swift tutorial, you’ll learn how to perform the following database operations:

- Create and connect to a database.
- Create a table.
- Insert, update, and delete rows.
- Query the database.
- Handle SQLite errors.

After learning how to perform these fundamental operations, you’ll see how to wrap them in a Swift-like manner. This will let you write abstraction APIs for your apps and avoid working with the more complicated SQLite C APIs. :]

Finally, you’ll briefly learn about the popular open-source Swift wrapper [<FontIcon icon="iconfont icon-github"/>stephencelis/SQLite](https://github.com/stephencelis/SQLite.swift). This will give you a basic understanding of how underlying frameworks work within a wrapper.

::: note Note

Databases like SQLite are massive topics to cover, and covering how to use them is out of scope for this tutorial. This tutorial assumes that you have a basic understanding of relational databases and that you’re primarily here to learn to use SQLite with Swift.

:::

---

## Getting Started

Start by using the [<FontIcon icon="iconfont icon-select"/>`[Download Materials]`][download-material] button at the top or bottom of this tutorial, then open <FontIcon icon="iconfont icon-file"/>`SQLiteTutorial.xcworkspace` from the starter folder. Next, open the <FontIcon icon="iconfont icon-select"/>`[Tutorial]` playground from the <FontIcon icon="iconfont icon-select"/>`[Project navigator]`.

::: note Note

The project is in an Xcode workspace because it uses the __SQLite3__ dependency as an embedded binary. This binary contains all the functionality for the SQLite code you’ll write in this tutorial.

:::

Long-click the Play button at the bottom and notice that your playground runs manually instead of automatically:

![Manual Run drop-down menu](https://koenig-media.raywenderlich.com/uploads/2019/11/sqliteswift_manually_run_playground_highlighted.png)

This means it will only execute when you explicitly invoke the execution by clicking the Play button.

You might also see a `destroyPart1Database()` call at the top of the page. You can safely ignore this since the database file self-destructs each time the playground runs. This ensures all statements execute successfully as you move through this SQLite with Swift tutorial.

---

## Why Should You Choose SQLite?

SQLite isn’t the only way to persist data on iOS. Besides [Core Data](https://developer.apple.com/library/ios/documentation/Cocoa/Conceptual/CoreData/index.html), there are many other alternatives for data persistence including [Realm](https://realm.io), [Couchbase Lite](http://developer.couchbase.com/mobile/#couchbase-lite), [Firebase](https://firebase.google.com/docs) and [NSCoding](http://nshipster.com/nscoding).

Each of these has its own pros and cons — including SQLite itself. There’s no silver bullet for data persistence. As the developer, it’s up to you to determine which option surpasses the others based on your app’s requirements.

SQLite has some advantages:

- Shipped with iOS, it adds no overhead to your app’s bundle.
- SQLite released version 1.0 in August 2000, so it’s tried and tested.
- It’s well-maintained with frequent releases.
- Open-source.
- It uses a query language that’s familiar to database developers and administrators.
- Cross-platform.

The cons of SQLite are subjective and opinionated, so that research is up to you! :]

Now that you’ve committed to finding out how SQLite works with Swift, it’s time to get to know some of the most basic SQLite APIs.

---

## The C API

This part of the SQLite with Swift tutorial walks you through the most common SQLite APIs. Wrapping the __C API__ in Swift methods is ideal, but work through the __C code__ first. You’ll wrap your C code in the second part of this tutorial.

### Opening a Connection

Before doing anything, create a __database connection__.

Add the following function in your playground:

```swift
func openDatabase() -> OpaquePointer? {
  var db: OpaquePointer?
  guard let part1DbPath = part1DbPath else {
    print("part1DbPath is nil.")
    return nil
  }
  if sqlite3_open(part1DbPath, &db) == SQLITE_OK {
    print("Successfully opened connection to database at \(part1DbPath)")
    return db
  } else {
    print("Unable to open database.")
    PlaygroundPage.current.finishExecution()
  }
}
```

This function calls `sqlite3_open()`, which opens or creates a new database file. If it’s successful, it returns an `OpaquePointer`, which is a __Swift type__ for __C pointers__. When you call this function, you’ll have to capture the returned pointer to interact with the database.

Many of the SQLite functions return an `Int32` result code, which is usually a constant in the SQLite library. For example, `SQLITE_OK` represents the result code `0`. Find a list of result codes on the [official SQLite site](https://www.sqlite.org/rescode.html).

Add the following to open the database:

```swift
let db = openDatabase()
```

Click the Play button to run the playground and watch the console output. If the console isn’t open, click the <FontIcon icon="iconfont icon-select"/>`[Show the Debug area]` button to the left of the Play button:

![Showing the Debug area](https://koenig-media.raywenderlich.com/uploads/2019/11/sqliteswift_show_debug_area-2.png)

If `openDatabase()` succeeds, you’ll see some output similar to that below:

```
Successfully opened connection to database at /Users/username/Library/Developer/XCPGDevices/A1EF655D-E318-4CDC-A35A-54349AFE1E62/data/Containers/Data/Application/43A00877-DF24-4E86-8682-22876DEEAFE4/Documents/Part1.sqlite
```

### Creating a Table

Now that you have a connection to a database file, you can create a table. You’ll work with a very simple table to store contacts.

The table consists of two columns: `Id`, which is an `INT` and a `PRIMARY KEY`, and `Name`, which is a `CHAR(255)`.

![The table with ID and Name headers and filled-out rows](https://koenig-media.raywenderlich.com/uploads/2019/12/SQLite-table.png)

Add the following statement, which contains an SQL statement to create the table. Note you’re using Swift’s multi-line syntax:

```swift
let createTableString = """
CREATE TABLE Contact(
Id INT PRIMARY KEY NOT NULL,
Name CHAR(255));
"""
```

Next, add this function:

```swift
func createTable() {
  // 1
  var createTableStatement: OpaquePointer?
  // 2
  if sqlite3_prepare_v2(db, createTableString, -1, &createTableStatement, nil) == 
      SQLITE_OK {
    // 3
    if sqlite3_step(createTableStatement) == SQLITE_DONE {
      print("\nContact table created.")
    } else {
      print("\nContact table is not created.")
    }
  } else {
    print("\nCREATE TABLE statement is not prepared.")
  }
  // 4
  sqlite3_finalize(createTableStatement)
}
```

Going over this, step-by-step:

Next, you check the returned status code to ensure the statement compiled successfully. If so, the process moves to step 3. Otherwise, you print a message noting the statement didn’t compile.

1. First, you create a pointer to reference in the next step.
2. `sqlite3_prepare_v2()` compiles the SQL statement into byte code and returns a status code — an important step before executing arbitrary statements against your database.
3. `sqlite3_step()` runs the compiled statement. In this case, you only step once because this statement has a single result. Later in this tutorial, you’ll see when it’s necessary to step multiple times for a single statement.
4. You must always call `sqlite3_finalize()` on your compiled statement to delete it and avoid resource leaks. Once a statement finalizes, you should never use it again.

::: note Note

If you want to learn more about what happened in step 2, check out the SQLite documentation about [compiling an SQL statement](https://www.sqlite.org/c3ref/prepare.html).

:::

Now, add the following function call:

```swift
createTable()
```

Run your playground. You’ll see the following in your console output:

```
Contact table created.
```

Now that you have a table, it’s time to add some data to it. You’re going to add a single row with an `Id` of `1` and `Name` of `Ray`.

### Inserting Data

Add the following SQL statement:

```swift
let insertStatementString = "INSERT INTO Contact (Id, Name) VALUES (?, ?);"
```

This might look strange if you haven’t had much SQL experience. Why are the values represented by question marks?

Earlier, you used `sqlite3_prepare_v2()` to compile your statement. The `?` syntax tells the compiler that you’ll provide real values when you actually execute the statement.

This lets you compile statements ahead of time, which improves performance since compilation is a costly operation. You can then reuse the compiled statements with different values.

Next, create the following function:

```swift
func insert() {
  var insertStatement: OpaquePointer?
  // 1
  if sqlite3_prepare_v2(db, insertStatementString, -1, &insertStatement, nil) == 
      SQLITE_OK {
    let id: Int32 = 1
    let name: NSString = "Ray"
    // 2
    sqlite3_bind_int(insertStatement, 1, id)
    // 3
    sqlite3_bind_text(insertStatement, 2, name.utf8String, -1, nil)
    // 4
    if sqlite3_step(insertStatement) == SQLITE_DONE {
      print("\nSuccessfully inserted row.")
    } else {
      print("\nCould not insert row.")
    }
  } else {
    print("\nINSERT statement is not prepared.")
  }
  // 5
  sqlite3_finalize(insertStatement)
}
```

Here’s how the function above works:

The first parameter of the function is the statement to bind to, while the second is a non-zero-based index for the position of the `?` you’re binding to. The third and final parameter is the value itself. This binding call returns a status code, but for now, you assume that it succeeds.

1. First, compile the statement and verify that all is well.
2. Here, you define a value for the `?` placeholder. The function’s name — `sqlite3_bind_int()` — implies you’re binding an `Int` to the statement.
3. Perform the same binding process, but this time for a text value. There are two additional parameters on this call. For the purposes of this tutorial, simply pass `-1` and `nil` for them.
4. Use `sqlite3_step()` to execute the statement and verify that it finished.
5. Finalize the statement. If you were going to insert multiple contacts, you’d retain the statement and reuse it with different values.

::: note Note

If you’d like, you can read more about [binding parameters](https://www.sqlite.org/c3ref/bind_blob.html) on the SQLite website.

:::

Next, call your new function:

```swift
insert()
```

Run your playground and verify that you see the following in your console output:

```
Successfully inserted row.
```

### Challenge: Multiple Inserts

Challenge time! Your task is to update `insert()` to insert an array of contacts.

As a hint, you’ll need to reset your compiled statement to its initial state by calling `sqlite3_reset()` before you execute it again.

::: tabs

@tab:active Before


```swift
func insert() {
  var insertStatement: OpaquePointer?
  // 1
  if sqlite3_prepare_v2(db, insertStatementString, -1, &insertStatement, nil) == SQLITE_OK {
    let id: Int32 = 1
    let name: NSString = "Ray"
    // 2
    sqlite3_bind_int(insertStatement, 1, id)
    // 3
    sqlite3_bind_text(insertStatement, 2, name.utf8String, -1, nil)
    // 4
    if sqlite3_step(insertStatement) == SQLITE_DONE {
      print("\nSuccessfully inserted row.")
    } else {
      print("\nCould not insert row.")
    }
  } else {
    print("\nINSERT statement is not prepared.")
  }
  // 5
  sqlite3_finalize(insertStatement)
}
```

@tab After


```swift
func insert() {
  var insertStatement: OpaquePointer?
  // 1
  let names: [NSString] = ["Ray", "Chris", "Martha", "Danielle"]
  if sqlite3_prepare_v2(db, insertStatementString, -1, &insertStatement, nil) == SQLITE_OK {
    print("\n")
    // 2
    for (index, name) in names.enumerated() {
      // 3
      let id = Int32(index + 1)
      sqlite3_bind_int(insertStatement, 1, id)
      sqlite3_bind_text(insertStatement, 2, name.utf8String, -1, nil)
      if sqlite3_step(insertStatement) == SQLITE_DONE {
        print("Successfully inserted row.")
      } else {
        print("Could not insert row.")
      }
      // 4
      sqlite3_reset(insertStatement)
    }
    sqlite3_finalize(insertStatement)
  } else {
    print("\nINSERT statement is not prepared.")
  }
}
```

As you can see, this is similar to the code you already had, with these notable differences:

1. You have an array of contacts now, rather than a single constant.
2. The array enumerates once for each contact.
3. You now generate the index from the index of the enumeration, which corresponds to the placement of the contact’s name in the array.
4. The SQL statement resets at the end of each enumeration so that next one can use it.

:::

Great, you’ve now mastered adding data to your database. In the next section of this tutorial, you’ll learn how to access that data when you need it.

### Querying Contacts

Now that you’ve inserted some rows, it’d be nice to verify they’re really there. :]

Add the following to the playground:

```swift
let queryStatementString = "SELECT * FROM Contact;"
```

This query retrieves all records from the contact table. Using a `*` returns all columns.

Now, add the following function to the query:

```swift
func query() {
  var queryStatement: OpaquePointer?
  // 1
  if sqlite3_prepare_v2(db, queryStatementString, -1, &queryStatement, nil) == 
      SQLITE_OK {
    // 2
    if sqlite3_step(queryStatement) == SQLITE_ROW {
      // 3
      let id = sqlite3_column_int(queryStatement, 0)
      // 4
      guard let queryResultCol1 = sqlite3_column_text(queryStatement, 1) else {
        print("Query result is nil")
        return
      }
      let name = String(cString: queryResultCol1)
      // 5
      print("\nQuery Result:")
      print("\(id) | \(name)")
  } else {
      print("\nQuery returned no results.")
  }
  } else {
      // 6
    let errorMessage = String(cString: sqlite3_errmsg(db))
    print("\nQuery is not prepared \(errorMessage)")
  }
  // 7
  sqlite3_finalize(queryStatement)
}
```

Taking each numbered comment in turn:

1. You prepare the statement.
2. Next, you execute the statement. Note that you’re now checking for the status code `SQLITE_ROW`, which means that you retrieved a row when you stepped through the result.
3. Now, you read the values from the returned row. Given what you know about the table’s structure and your query, you can access the row’s values column-by-column. The first column is an `Int`, so you use `sqlite3_column_int()` and pass in the statement and a zero-based column index. You assign the returned value to the locally-scoped `id` constant.
4. Here, you fetch the text value from the `Name` column. This is a bit messy due to the C API. First, you capture the value as `queryResultCol1` so you can convert it to a proper Swift string on the next line.
5. Print the results.
6. Print an error, if any. Want to get adventurous? Change the table name in `queryStatementString` and see what happens.
7. You finalize the statement.
Now, call your new function:

```swift
query()
```

Run your playground. You’ll see the following output in your console:

```
Query Result:
1 | Ray
```

WOOt! It looks like your data made it to the database after all, unless you got adventurous. :]

### Challenge: Printing Every Row

Your task is to update `query()` to print out every contact in the table.

::: tabs

@tab:active Before

```swift
func query() {
  var queryStatement: OpaquePointer?
  // 1
  if sqlite3_prepare_v2(db, queryStatementString, -1, &queryStatement, nil) == 
      SQLITE_OK {
    // 2
    if sqlite3_step(queryStatement) == SQLITE_ROW {
      // 3
      let id = sqlite3_column_int(queryStatement, 0)
      // 4
      guard let queryResultCol1 = sqlite3_column_text(queryStatement, 1) else {
        print("Query result is nil")
        return
      }
      let name = String(cString: queryResultCol1)
      // 5
      print("\nQuery Result:")
      print("\(id) | \(name)")
  } else {
      print("\nQuery returned no results.")
  }
  } else {
      // 6
    let errorMessage = String(cString: sqlite3_errmsg(db))
    print("\nQuery is not prepared \(errorMessage)")
  }
  // 7
  sqlite3_finalize(queryStatement)
}
```

@tab After

```swift
func query() {
  var queryStatement: OpaquePointer?
  if sqlite3_prepare_v2(
    db, 
    queryStatementString, 
    -1, 
    &queryStatement, 
    nil
  ) == SQLITE_OK {
    print("\n")
    while (sqlite3_step(queryStatement) == SQLITE_ROW) {
      let id = sqlite3_column_int(queryStatement, 0)
      guard let queryResultCol1 = sqlite3_column_text(queryStatement, 1) else {
        print("Query result is nil.")
        return
      }
      let name = String(cString: queryResultCol1)
      print("Query Result:")
      print("\(id) | \(name)")
    }
  } else {
      let errorMessage = String(cString: sqlite3_errmsg(db))
      print("\nQuery is not prepared \(errorMessage)")
  }
  sqlite3_finalize(queryStatement)
}
```

Note that instead of using a single step to retrieve the first row as you did before, you use a `while` loop to execute the step, which will happen as long as the return code is `SQLITE_ROW`. When you reach the last row, the return code will be `SQLITE_DONE`, breaking the loop.

:::

So now, you have created a database and can add contacts to it. But what if you need to make changes to any of those contacts? You’ll tackle that issue in the next section.

### Updating Contacts

Your next step is to update an existing row. Get started by creating the `UPDATE` statement:

```swift
let updateStatementString = "UPDATE Contact SET Name = 'Adam' WHERE Id = 1;"
```

Here, you’re using real values instead of `?` placeholders. You’d usually use the placeholders and bind the statements properly, but this tutorial will skip those steps for brevity.

Next, add the following function to the playground:

```swift
func update() {
  var updateStatement: OpaquePointer?
  if sqlite3_prepare_v2(db, updateStatementString, -1, &updateStatement, nil) == 
      SQLITE_OK {
    if sqlite3_step(updateStatement) == SQLITE_DONE {
      print("\nSuccessfully updated row.")
    } else {
      print("\nCould not update row.")
    }
  } else {
    print("\nUPDATE statement is not prepared")
  }
  sqlite3_finalize(updateStatement)
}
```

This is a similar flow to what you’ve seen before: prepare, step and finalize.

Next, add the following to your playground:

```swift
update()
query()
```

This executes your new function, then calls your previously-defined `query()` function so that you can see the results:

Successfully updated row.

```
Query Result:
1 | Adam
```
Congratulations on updating your first row! How easy was that? :]

You’re doing great! You can now create a table, add contacts to it and update those contacts. In the next step, you’ll learn how to delete those contacts.

### Deleting Contacts

The final step on the path to becoming an SQLite ninja is to delete the row you created. Again, you’ll use the familiar pattern of prepare, step and finalize.

Add the following to the playground:

```swift
let deleteStatementString = "DELETE FROM Contact WHERE Id = 1;"
```

Now, add the following function to execute the statement:

```swift
func delete() {
  var deleteStatement: OpaquePointer?
  if sqlite3_prepare_v2(db, deleteStatementString, -1, &deleteStatement, nil) == 
      SQLITE_OK {
    if sqlite3_step(deleteStatement) == SQLITE_DONE {
      print("\nSuccessfully deleted row.")
    } else {
      print("\nCould not delete row.")
    }
  } else {
    print("\nDELETE statement could not be prepared")
  }
  
  sqlite3_finalize(deleteStatement)
}
```

Are you feeling it now? Prepare, step and finalize. :]

Execute this new function as below:

```swift
delete()
query()
```

Run your playground and you should see the following output in your console:

```
Successfully deleted row.
Query returned no results.
```

::: note Note

If you completed the __Multiple Inserts__ challenge above, your output will look different from that above due to rows still being present in the table.

:::

So you’ve now mastered working with your table, but what about when things inevitably go wrong? In the next section, you’ll learn how to deal with errors.

### Handling Errors

Hopefully, you’ve managed to avoid SQLite errors up to this point. But the time will come when you make a call that doesn’t make sense or simply won’t compile.

Handling error message when these things happen saves a lot of development time. It also gives you the opportunity to present meaningful error messages to your users.

To start, you need an error to handle. Add the following statement, which is intentionally malformed:

```swift
let malformedQueryString = "SELECT Stuff from Things WHERE Whatever;"
```

Now, add a function to execute this malformed statement:

```swift
func prepareMalformedQuery() {
  var malformedStatement: OpaquePointer?
  // 1
  if sqlite3_prepare_v2(db, malformedQueryString, -1, &malformedStatement, nil) 
      == SQLITE_OK {
    print("\nThis should not have happened.")
  } else {
    // 2
    let errorMessage = String(cString: sqlite3_errmsg(db))
    print("\nQuery is not prepared! \(errorMessage)")
  }
  
  // 3
  sqlite3_finalize(malformedStatement)
}
```

Here’s how you’re going to force an error:

1. Prepare the statement, which will fail and will NOT return `SQLITE_OK`.
2. Get the error message from the database using `sqlite3_errmsg()`. This returns a textual description of the most recent error. You then print the error to the console.
3. Finalize the statement.

Call the function to see the error message:

```swift
prepareMalformedQuery()
```

Run your playground. You’ll see the following output in your console:

```
Query is not prepared! no such table: Things
```

Well, that’s actually helpful — you obviously cannot run a `SELECT` statement on a table that doesn’t exist! Despite the intentional error that you created, you should use this example as a pattern for handling other errors from SQLite. Nice job!

### Closing the Database Connection

When you’re done with a database connection, you’re responsible for closing it. But beware — there are a number of things you must do before you can successfully close your database, as described in the [SQLite documentation](https://www.sqlite.org/c3ref/close.html).

Call the close function:

```swift
sqlite3_close(db)
```

Run your playground. You’ll see a status code of 0 on the results sidebar, which represents `SQLITE_OK`.

![Successful close call](https://koenig-media.raywenderlich.com/uploads/2019/11/sqliteswift_close_connection.png)

Great, your close call succeeded!

You’ve successfully created a database, added a table, added rows to the table, queried rows, updated rows and even deleted a row, all using the SQLite C APIs from Swift. Great job!

In the next section, you’ll see how to wrap some of these calls in Swift.

---

## SQLite With Swift

As a Swift developer, you might feel a little uneasy about the first part of this tutorial. The good news is you can take the power of Swift and wrap those C routines to make things easier for yourself.

![swift-weights](https://koenig-media.raywenderlich.com/uploads/2017/09/swift-weights-320x320.png)

For this part of the SQLite with Swift tutorial, click the __Making It Swift__ link at the bottom of the playground:

![Where to find the Making It Swift link](https://koenig-media.raywenderlich.com/uploads/2019/11/sqliteswift_making_it_to_swift_highlighted.png)

### Wrapping Errors

Getting errors from the C API is a bit awkward as a Swift developer. Checking a result code and then calling another function doesn’t make sense in this new world. It would make more sense if functions that fail threw an error. Your next step will be to make that happen in your code.

Add the following:

```swift
enum SQLiteError: Error {
  case OpenDatabase(message: String)
  case Prepare(message: String)
  case Step(message: String)
  case Bind(message: String)
}
```

This is a custom `Error` enum that covers four of the main operations you’re using that can fail. Note how each case has an associated value to hold the error message.

### Wrapping the Database Connection

Another not-so-Swifty aspect of the work you’ve done so far is those blasted `OpaquePointer` types. Your next step will be to take care of those.

Wrap up the database connection pointer in its own class, as shown below:

```swift
class SQLiteDatabase {
  private let dbPointer: OpaquePointer?
  private init(dbPointer: OpaquePointer?) {
    self.dbPointer = dbPointer
  }
  deinit {
    sqlite3_close(dbPointer)
  }
}
```

This looks much better. When you need a database connection, you create a reference to a more meaningful type of `SQLiteDatabase` rather than using an `OpaquePointer`.

You’ll notice the initializer is `private`. That’s because you don’t want your Swift developers passing in that `OpaquePointer`. Instead, you let them instantiate this class with a path to the database file.

Add the following static method to `SQLiteDatabase`:

```swift
static func open(path: String) throws -> SQLiteDatabase {
  var db: OpaquePointer?
  // 1
  if sqlite3_open(path, &db) == SQLITE_OK {
    // 2
    return SQLiteDatabase(dbPointer: db)
  } else {
    // 3
    defer {
      if db != nil {
        sqlite3_close(db)
      }
    }
    if let errorPointer = sqlite3_errmsg(db) {
      let message = String(cString: errorPointer)
      throw SQLiteError.OpenDatabase(message: message)
    } else {
      throw SQLiteError
        .OpenDatabase(message: "No error message provided from sqlite.")
    }
  }
}
```

Here’s what’s happening:

1. You attempt to open the database at the provided path.
2. If successful, you return a new instance of `SQLiteDatabase`.
3. Otherwise, you defer closing the database if the status code is anything but `SQLITE_OK` and throw an error.

Now you can create and open a database connection using much cleaner syntax.

Add the following outside the `SQLiteDatabase` class:

```swift
let db: SQLiteDatabase
do {
    db = try SQLiteDatabase.open(path: part2DbPath ?? "")
    print("Successfully opened connection to database.")
} catch SQLiteError.OpenDatabase(_) {
    print("Unable to open database.")
    PlaygroundPage.current.finishExecution()
}
```

Ah, much more Swift-like. Here, you wrap the attempt to open the database in a `do-try-catch` block and pass the error message from SQLite to the catch block, thanks to that custom enum you added earlier.

Run your playground and watch the console output. You’ll see the following:

```
Successfully opened connection to database.
```

Now, you can use and inspect the `db` instance as a proper and meaningful type.

Before moving on to writing methods that execute statements, it would be nice if `SQLiteDatabase` let you easily access SQLite error messages.

Add the following computed property to the `SQLiteDatabase` class:

```swift
fileprivate var errorMessage: String {
  if let errorPointer = sqlite3_errmsg(dbPointer) {
    let errorMessage = String(cString: errorPointer)
    return errorMessage
  } else {
    return "No error message provided from sqlite."
  }
}
```

Here, you’ve added a computed property, which simply returns the most recent error SQLite knows about. If there is no error, it returns a generic message stating as much.

### Wrapping the Prepare Call

Since you make prepare calls so often, it makes sense to wrap them like the other methods. As you move forward and add functionality to the `SQLiteDatabase` class, you’ll use class extensions.

Add the following extension. This will be useful in your future methods to invoke `sqlite3_prepare_v2()` on SQL statements:

```swift
extension SQLiteDatabase {
 func prepareStatement(sql: String) throws -> OpaquePointer? {
  var statement: OpaquePointer?
  guard sqlite3_prepare_v2(dbPointer, sql, -1, &statement, nil) 
      == SQLITE_OK else {
    throw SQLiteError.Prepare(message: errorMessage)
  }
  return statement
 }
}
```

Here, you declare that `prepareStatement(_:)` can throw an error and then use `guard` to throw that error should `sqlite3_prepare_v2()` fail. Just like before, you pass the error message from SQLite to the relevant case of your custom enum.

### Creating a Contact Struct

Add the following:

```swift
struct Contact {
  let id: Int32
  let name: NSString
}
```

In these examples, you’ll use the same `Contact` table as before, so it makes sense to define a proper `struct` to represent a contact. Next, you’ll learn to actually create the table for a `Contact`

### Wrapping the Table Creation

You’ll knock out the same database tasks as before, but this time you’ll use a “Swift-ier” approach.

To create a table, first, create the following `protocol` for that purpose in your playground:

```swift
protocol SQLTable {
  static var createStatement: String { get }
}
```

Now, extend `Contact` to conform to this new protocol:

```swift
extension Contact: SQLTable {
  static var createStatement: String {
    return """
    CREATE TABLE Contact(
      Id INT PRIMARY KEY NOT NULL,
      Name CHAR(255)
    );
    """
  }
}
```

This code defines `createStatement` and adds a `CREATE TABLE` statement on `Contact` which is useful for keeping the code grouped together.

Now, you’re able to write the following method that accepts types that conform to `SQLTable` to create a table:

```swift
extension SQLiteDatabase {
  func createTable(table: SQLTable.Type) throws {
    // 1
    let createTableStatement = try prepareStatement(sql: table.createStatement)
    // 2
    defer {
      sqlite3_finalize(createTableStatement)
    }
    // 3
    guard sqlite3_step(createTableStatement) == SQLITE_DONE else {
      throw SQLiteError.Step(message: errorMessage)
    }
    print("\(table) table created.")
  }
}
```

Here’s a breakdown of what’s happening:

1. `prepareStatement()` throws, so you must use `try`. You don’t use a `do-try-catch` block because this method itself throws, so any error from `prepareStatement()` simply passes to the caller of `createTable()`.
2. With the power of `defer`, you ensure that your statements are always finalized, regardless of how this method exits its scope.
3. `guard` lets you write a more expressive check for the SQLite status codes.

Give your new method a try by adding the following:

```swift
do {
  try db.createTable(table: Contact.self)
} catch {
  print(db.errorMessage)
}
```

Here, you simply attempt to create the `Contact` and catch an error, if there is one.

Run your playground. The following will appear in your console:

```
Contact table created.
```

Fantastic! Isn’t that a much cleaner API to work with?

### Wrapping Insertions

Moving along, it’s time to insert a row into the `Contact` table. Add the following method in your playground:

```swift
extension SQLiteDatabase {
  func insertContact(contact: Contact) throws {
    let insertSql = "INSERT INTO Contact (Id, Name) VALUES (?, ?);"
    let insertStatement = try prepareStatement(sql: insertSql)
    defer {
      sqlite3_finalize(insertStatement)
    }
    let name: NSString = contact.name
    guard 
      sqlite3_bind_int(insertStatement, 1, contact.id) == SQLITE_OK  &&
      sqlite3_bind_text(insertStatement, 2, name.utf8String, -1, nil) 
        == SQLITE_OK 
      else {
        throw SQLiteError.Bind(message: errorMessage)
    }
    guard sqlite3_step(insertStatement) == SQLITE_DONE else {
      throw SQLiteError.Step(message: errorMessage)
    }
    print("Successfully inserted row.")
  }
}
```

Now that you’ve got your SQLegs – see what I did there? :] – this code shouldn’t be too surprising. Given a `Contact` instance, you prepare a statement, bind the values, execute and finalize.

Again, using a potent mix of `defer`, `guard` and `throw` allows you to take advantage of modern Swift language features.

Call this new method:

```swift
do {
  try db.insertContact(contact: Contact(id: 1, name: "Ray"))
} catch {
  print(db.errorMessage)
}
```

Run your playground. You’ll see the following in your console:

```
Successfully inserted row.
```

### Wrapping Reads

To wrap up the last section on creating the Swift wrapper, you’ll handle querying the database.

Add the following method, which will query the database:

```swift
extension SQLiteDatabase {
  func contact(id: Int32) -> Contact? {
    let querySql = "SELECT * FROM Contact WHERE Id = ?;"
    guard let queryStatement = try? prepareStatement(sql: querySql) else {
      return nil
    }
    defer {
      sqlite3_finalize(queryStatement)
    }
    guard sqlite3_bind_int(queryStatement, 1, id) == SQLITE_OK else {
      return nil
    }
    guard sqlite3_step(queryStatement) == SQLITE_ROW else {
      return nil
    }
    let id = sqlite3_column_int(queryStatement, 0)
    guard let queryResultCol1 = sqlite3_column_text(queryStatement, 1) else {
      print("Query result is nil.")
      return nil
    }
    let name = String(cString: queryResultCol1) as NSString
    return Contact(id: id, name: name)
  }
}
```

This method simply takes the ID of a contact and either returns that contact or `nil`, if there isn’t a contact with that ID. Again, these statements should feel somewhat familiar by now.

Write the code to query the first contact:

```swift
if let first = db.contact(id: 1) {
  print("\(first.id) \(first.name)")
}
```

Run your playground. You’ll see the following output in the console:

```
1 Ray
```

By now, you’ve probably identified some calls you could create in a generic fashion and apply to entirely different tables. The point of the above exercise is to show how you can use Swift to wrap low-level C APIs. This is no simple task for SQLite; there are a ton of intricacies to SQLite that this tutorial didn’t cover.

You might be thinking, “Hasn’t someone already created a wrapper for this?” That’s what the final section is all about.

---

## Introducing <FontIcon icon="fas fa-dove"/>`SQLite.swift`

[Stephen Celis](https://twitter.com/stephencelis) has graciously written a fully-featured Swift wrapper for SQLite named [<FontIcon icon="fas fa-dove"/>`SQLite.swift`](https://github.com/stephencelis/SQLite.swift). Check it out if you decide that SQLite fits the bill for data storage in your app.

SQLite.swift provides an expressive way to represent tables. This lets you get started with SQLite without worrying about its underlying details and idiosyncrasies.

You may even consider wrapping SQLite.swift itself to create a high-level API for your app’s domain model.

Check out the [README.md for [<FontIcon icon="fas fa-dove"/>`SQLite.swift`](https://github.com/stephencelis/SQLite.swift/blob/master/README.md) and decide for yourself if it has a place in your personal code toolbox.

---

## Where to Go From Here?

Download the completed project by using the [<FontIcon icon="iconfont icon-select"/>`[Download Materials]`][download-material] button at the top or bottom of this tutorial. There, you can see other common tasks that this tutorial didn’t have time to cover, including the implemented updates, deletes and multiple row handling.

Debugging is another important part of using SQLite with Swift. In many cases, you’ll need some kind of database browser to see what’s going on under the hood. There are many different apps that can help with this. A quick internet search will show which ones are best for you.

You can also access your SQLite databases directly from your Terminal by typing <FontIcon icon="iconfont icon-file"/>`sqlite3 file.db`. From there, use the `.help` command to see a list of commands, or simply start executing SQL statements directly at the prompt. Find more information on the command-line SQLite client on the [main SQLite site](https://www.sqlite.org/cli.html).

I hope you enjoyed this whirlwind introduction to working with SQLite and Swift! If you have any questions or comments, please join the discussion below.

---

<TagLinks />

[download-material]: https://koenig-media.raywenderlich.com/uploads/2020/01/SQLite-With-Swift-Getting-Started.zip