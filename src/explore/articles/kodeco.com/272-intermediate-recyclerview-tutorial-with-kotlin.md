---
lang: ko-KR
title: Intermediate RecyclerView Tutorial with Kotlin
description: Article(s) > Intermediate RecyclerView Tutorial with Kotlin
icon: fa-brands fa-android
category:
  - Java
  - Kotlin
  - Android
  - Gradle
  - Article(s)
tag: 
  - blog
  - kodeco.com
  - java
  - kotiln
  - android
  - gradle
head:
  - - meta:
    - property: og:title
      content: Article(s) > Intermediate RecyclerView Tutorial with Kotlin
    - property: og:description
      content: Intermediate RecyclerView Tutorial with Kotlin
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/explore/articles/kodeco.com/272-intermediate-recyclerview-tutorial-with-kotlin.html
prev: /programming/java-android/articles/README.md
date: 2017-12-06
isOriginal: false
cover: https://koenig-media.raywenderlich.com/uploads/2017/12/RecyclerViewIntermediate-twitter.png
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
  name="Intermediate RecyclerView Tutorial with Kotlin"
  desc="In this RecyclerView tutorial you will learn how to build out intermediate techniques like swiping, animation and filtering in Kotlin."
  url="https://kodeco.com/272-intermediate-recyclerview-tutorial-with-kotlin"
  logo="https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-user-interface-android-d049bddfca80caac9854127a21a7287890d0ad1cd10fc7d7cb6538dc0d8d76a0.svg"
  preview="https://koenig-media.raywenderlich.com/uploads/2017/12/RecyclerViewIntermediate-twitter.png"/>

Have you ever wanted to go to Mars or just look out over Mars’ horizon? We can’t send you there but we can give you the next best thing: an app with images from all the Mars rovers.

To show those images, we’ll use one of Android’s most popular views: the `RecyclerView`.

The `RecyclerView` layout was introduced in the Lollipop support library and Android developers have been using it for awhile. It is one of the most useful layouts and gives you more flexibility compared to a `ListView` in a much more performant package.

However, you may not know all that you can do with it. In this tutorial, you’ll see how to add sections, animations, dividers, and swipe gestures.

You should be familiar with the basics of using `ReyclerView`. If not, you can read an introduction to using `RecyclerView` [here](https://www.raywenderlich.com/126528/android-recyclerview-tutorial).

Here is a screenshot from the final version of our app:

![mars rover screenshot](https://koenig-media.raywenderlich.com/uploads/2017/10/Screenshot_1507091574-281x500.png =240x)

Checkout those amazing Mars landscapes!

You’re going to continue with the NASA site used in the previous `RecyclerView` tutorial, but do things a bit differently. You’ll be using an API that will return a list of Mars rover photos. Along with the `RecyclerView` of photos, there are two spinners to change the list of photos: one for rovers and the other for cameras.

---

## Getting Started

Download the starter project [<FontIcon icon="iconfont icon-select"/>here][download-material]. Open it up in Android Studio 3.0.1 or later.

Next, head to the NASA site ([https://api.nasa.gov/index.html#apply-for-an-api-key](https://api.nasa.gov/index.html#apply-for-an-api-key)) and get an API key to use for the rover photos.

Build and run your app on an emulator or phone. You should see a default “Hello World!” __TextView__ in the center.

![screenshot](https://koenig-media.raywenderlich.com/uploads/2017/09/Screenshot_20170925-222953-281x500.png =240x)

### Manifest

Add the following to your <FontIcon icon="iconfont icon-code"/>`AndroidManifest.xml` file before the application tag:


```xml
<uses-permission android:name="android.permission.INTERNET"/>
```

This will allow you to get information from the NASA website. Note that this is not considered a “dangerous” permission and the user will not be asked to approve it.

### String Data

To populate the spinners on the main screen, you will need to add strings for the spinners to the <FontIcon icon="iconfont icon-code"/>`strings.xml` file. Open <FontIcon icon="iconfont icon-code"/>`strings.xml` in the <FontIcon icon="fas fa-folder-open"/>`res/values` folder and add the following after the `app_name` string:

```xml
<string name="api_error">Problems getting Photos</string>
<string name="rovers">Rovers</string>
<string name="cameras">Cameras</string>
<string-array name="rovers">
  <item>Curiosity</item>
  <item>Opportunity</item>
  <item>Spirit</item>
</string-array>
<string-array name="camera_names">
  <item>Front Hazard</item>
  <item>Rear Hazard</item>
  <item>Navigation</item>
  <item>Panoramic</item>
  <item>Mast</item>
</string-array>
<string-array name="camera_values">
  <item>FHAZ</item>
  <item>RHAZ</item>
  <item>NAVCAM</item>
  <item>PANCAM</item>
  <item>MAST</item>
</string-array>
```
---

## Main Layout

You need to modify the main layout and add some code to the `MainActivity` class. Start out by replacing the layout in the <FontIcon icon="iconfont icon-code"/>`activity_main.xml` file.

```xml
<?xml version="1.0" encoding="utf-8"?>
<android.support.constraint.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:app="http://schemas.android.com/apk/res-auto"
  xmlns:tools="http://schemas.android.com/tools"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  tools:context="com.raywenderlich.marsrovers.MainActivity">

  <android.support.constraint.ConstraintLayout
    android:id="@+id/control_layout"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:padding="10dp"
    app:layout_constraintLeft_toLeftOf="parent"
    app:layout_constraintTop_toTopOf="parent">

    <TextView
      android:id="@+id/roverLabel"
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:text="@string/rovers"
      app:layout_constraintTop_toTopOf="parent" />

    <android.support.v7.widget.AppCompatSpinner
      android:id="@+id/rovers"
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      app:layout_constraintRight_toRightOf="parent"
      app:layout_constraintTop_toTopOf="parent" />

    <TextView
      android:id="@+id/cameraLabel"
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:layout_marginTop="4dp"
      android:text="@string/cameras"
      app:layout_constraintTop_toBottomOf="@+id/roverLabel" />

    <android.support.v7.widget.AppCompatSpinner
      android:id="@+id/cameras"
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      app:layout_constraintRight_toRightOf="parent"
      app:layout_constraintTop_toBottomOf="@+id/rovers" />
  </android.support.constraint.ConstraintLayout>

  <android.support.v7.widget.RecyclerView
    android:id="@+id/recycler_view"
    android:layout_width="0dp"
    android:layout_height="0dp"
    android:visibility="gone"
    app:layout_constraintBottom_toBottomOf="parent"
    app:layout_constraintLeft_toLeftOf="parent"
    app:layout_constraintRight_toRightOf="parent"
    app:layout_constraintTop_toBottomOf="@+id/control_layout" />

  <ProgressBar
    android:id="@+id/progress"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:indeterminate="true"
    app:layout_constraintBottom_toBottomOf="parent"
    app:layout_constraintLeft_toLeftOf="parent"
    app:layout_constraintRight_toRightOf="parent"
    app:layout_constraintTop_toBottomOf="@+id/control_layout" />

</android.support.constraint.ConstraintLayout>
```

This uses Android's new `ConstraintLayout` to add two rows of spinners, one for the Rover and one for the camera. There’s a `RecyclerView` below the spinners. Below the `RecyclerView` there is a `ProgressBar` that will spin while the data is loading.

Now, time to modify <FontIcon icon="iconfont icon-java"/>`MainActivity.kt`. In the `onCreate()` method, after the call to `setContentView`, add the following:

```kotlin
recycler_view.visibility = View.GONE
recycler_view.layoutManager = LinearLayoutManager(this)
```


When Android Studio gives you an error on `recycler_view`, put your cursor on `recycler_view` and hit <kbd>option</kbd>+<kbd>return</kbd> on Mac or <kbd>Alt</kbd>+<kbd>Enter</kbd> on PC and select <FontIcon icon="iconfont icon-select"/>`[Import]`. This uses the Kotlin Android Extensions to turn the `R.id.recycler_view` id into a `recycler_view` variable.

Now, run the app and you should see the following:

![mars rover screenshot](https://koenig-media.raywenderlich.com/uploads/2017/10/Screenshot_1507085951-281x500.png =240x)

---

## ViewHolder

The `ViewHolder` class holds the inflated view, is created in a `RecyclerView.Adapter` in `onCreateViewHolder` and bound in `onBindViewHolder`.

Before `RecyclerView`, Android developers used `ListView` to achieve similar behavior. As `ListView` usage matured, developers started using the “view holder” pattern and Google then made `ViewHolder` a key part of the `RecyclerView` API.

You’ll be creating a special `ViewHolder` class that will allow you to handle text and image views without using `findViewById`. In this `DefaultViewHolder` class, you’ll start by going through all of the child views and putting them in a map so that you can easily retrieve the view later. See the starter project for the full `DefaultViewHolder` class.

---

## Adapter Layouts

You need to create the two layouts that will be used in the adapter, one for the section headers, and one for the rows themselves. First, you’ll add the header style needed for the header item layout.

### Header Style

Open the <FontIcon icon="iconfont icon-code"/>`styles.xml` file in the values resource folder and add the following style that will be used in the <FontIcon icon="iconfont icon-code"/>`header_item.xml` file:

```xml
<style name="header">
  <item name="android:textSize">16sp</item>
  <item name="android:textColor">@android:color/holo_red_dark</item>
</style>
```

You can use any color you’d like. To create the header, go to the <FontIcon icon="fas fa-folder-open"/>`res/layout` folder. Right-click and choose <FontIcon icon="iconfont icon-select"/>`[New/Layout resource file]`. Name the file <FontIcon icon="iconfont icon-code"/>`header_item.xml`. You can leave the root element as suggested and then replace everything with the following:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:tools="http://schemas.android.com/tools"
  android:layout_width="match_parent"
  android:layout_height="wrap_content"
  android:orientation="vertical"
  android:padding="10dp">

  <TextView
    android:id="@+id/header_text"
    style="@style/header"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    tools:text="Front Hazard" />
</LinearLayout>
```

This is just a `TextView` for the header text.

Next, right-click on the layout folder and create a new layout named <FontIcon icon="iconfont icon-code"/>`row_item.xml`. Again, leave the root element and replace with:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:tools="http://schemas.android.com/tools"
  android:layout_width="match_parent"
  android:layout_height="wrap_content"
  android:orientation="vertical">

  <ImageView
    android:id="@+id/camera_image"
    android:layout_width="match_parent"
    android:layout_height="80dp"
    android:adjustViewBounds="true"
    android:scaleType="fitXY" />

  <TextView
    android:id="@+id/date"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    tools:text="10/07/2017" />
</LinearLayout>
```

This has an `ImageView` for the mars photo and a `TextView` for the date of the image below it.

---

## Data

You’ll be populating the `RecyclerView.Adapter` using data from the NASA site: [https://api.nasa.gov/api.html#MarsPhotos](https://api.nasa.gov/api.html#MarsPhotos).

An easy way to test an API is to use the Postman Chrome extension or the Postman app [https://www.getpostman.com](https://www.getpostman.com/). Once you’ve installed it, take the url `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=` and add your key to the end.

Hit the “Send” button in Postman and you’ll see the returned JSON in the Response section. Notice how it returns an object that has 1 item named photos, which is an array of objects. Now, you’ll create models to hold the data that comes back.

In Android Studio, navigate to the `com.raywenderlich.marsrovers` package. Right click and select <FontIcon icon="iconfont icon-select"/>`[New/Package]` to create a new package named `models`.

Next, right-click on the `models` package and select <FontIcon icon="iconfont icon-select"/>`[New/Kotlin File/Class]`. Name the file `Camera`, choose `Class` as the “Kind” and replace the generated code with the following:

```kotlin
data class Camera(val id: Int, val name: String, val rover_id: Int, val full_name: String)
```


Notice that you are using the `data` keyword to have Kotlin create the getters and setters for you, and that the class doesn’t need a beginning or ending brace as there are no methods. The field names match the names of the fields in the JSON response returned from the NASA API endpoint. You could make the names more readable, but you’d have to add some annotations to do that. For now, just use the given names.

Next, right-click on the `models` package and create a new Kotlin class named `Photo` and replace with the following:

```kotlin
data class Photo(val id : Int, val img_src : String, val earth_date: String, val camera: Camera)
```

Create another Kotlin class named `PhotoList`. The `PhotoList` class just holds a list of photos and is the root element of the JSON data:

```kotlin
data class PhotoList(val photos: List<Photo>)
```

Finally, create a `PhotoRow` class that will be used to indicate that a row is either a photo or a header. This way, you can just have a list of `PhotoRow` objects and check which type to show based on the value of the `RowType` enum. Create a new Kotlin file called `PhotoRow` in the `models` package and add the following:

```kotlin
enum class RowType {
   PHOTO,
   HEADER
}

data class PhotoRow(var type: RowType, var photo: Photo?, var header: String?)
```

The `type` property will distinguish between photos and headers. The row will have either a photo or a header string. Both the photo and header variables are nullable.

---

## Adapter

Your adapter will extend the `RecyclerView.Adapter` class and use `DefaultViewHolder`. Navigate to the <FontIcon icon="fas fa-folder-open"/>`com.raywenderlich.marsrovers.recyclerview` package and add a new Kotlin class called `PhotoAdapter`.

The class will start out like so:

```kotlin
class PhotoAdapter(private var photoList: ArrayList<PhotoRow>) : RecyclerView.Adapter<DefaultViewHolder>() {
```

Along with the passed in list of photos, create two more variables at the beginning of the class:

```kotlin
private var filteredPhotos = ArrayList<PhotoRow>()
private var filtering = false
```


The `filterPhotos` list is used to hold photos for a specific camera, and the `filtering` flag will be true when the user is filtering.

There are three abstract methods of `RecyclerView.Adapter` that have to be implemented: `getItemCount`, `onCreateViewHolder`, and `onBindViewHolder`. You will also override the `getItemViewType` method to return different values for the header and photo row type.

`getItemCount` returns the number of photos available. If filtering is on, return the size from the filtered list:

```kotlin
override fun getItemCount(): Int {
 if (filtering) {
     return filteredPhotos.size
 }
 return photoList.size
}
```

`onBindViewHolder` is where you load the photo or set the header text.

```kotlin
override fun onBindViewHolder(holder: DefaultViewHolder, position: Int) {
  val photoRow : PhotoRow = if (filtering) {
    filteredPhotos[position]
  } else {
    photoList[position]
  }
  if (photoRow.type == RowType.PHOTO) {
    val photo = photoRow.photo
    Glide.with(holder.itemView.context)
        .load(photo?.img_src)
        .into(holder.getImage(R.id.camera_image))
    photo?.earth_date?.let { holder.setText(R.id.date, it) }
  } else {
    photoRow.header?.let { holder.setText(R.id.header_text, it) }
  }
}
```


You can see that you’re using [<FontIcon icon="iconfont icon-github"/>`bumptech/glide`](https://github.com/bumptech/glide) to load images into the `ImageView`. Glide seemed to work better for all of the Mars photos than [Picasso](http://square.github.io/picasso/), which was only able to load some of the images.

`onCreateViewHolder` is where you inflate the layout and return the __ViewHolder__:

```kotlin
override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): DefaultViewHolder {
  val layoutInflater = LayoutInflater.from(parent.context)

  val inflatedView : View = when (viewType) {
    RowType.PHOTO.ordinal -> layoutInflater.inflate(R.layout.row_item, parent,false)
    else -> layoutInflater.inflate(R.layout.header_item, parent,false)
  }
  return DefaultViewHolder(inflatedView)
}
```


For the two methods `onCreateViewHolder` and `onBindViewHolder`, you need to distinguish between a header and photo row. You can do that by checking the PhotoRow’s type, as you’ll see in the next section.

---

## Section Headers

To provide headers for rows, you just need to have different row types. This is done by letting the `RecyclerView` know what type to use for each row.

Override the `getItemViewType` method and return a different integer for each type. You will be returning two different types, one for the header and one for the photo. You can use the ordinal of the enum (so the returned values will be 0 and 1). Add the following method after `onCreateViewHolder`.

```kotlin
override fun getItemViewType(position: Int) =
  if (filtering) {
    filteredPhotos[position].type.ordinal
  } else {
    photoList[position].type.ordinal
  }
```

Both `getItemCount` and `getItemViewType` need to take into account the filtering flags to use either the original `photoList` or the `filteredPhotos` list.

In `onCreateViewHolder`, you load in a row_item layout for photos and a head_item layout for the header. The `onBindViewHolder` checks the type and binds the appropriate items to the __ViewHolder__.

Now run the app to make sure it builds. Since you haven’t added the adapter to the __RecyclerView__ yet, you won’t see anything quite yet, only the spinning ProgressBar.

---

## DiffUtil

`DiffUtil` is a utility class from the `RecyclerView` support library used to calculate the difference between two lists and create the operations that will morph one list into another. It will be used by the `RecyclerView.Adapter` to trigger the optimal data change notifications that are used to animate the __RecyclerView__‘s rows.

To use this method, you need to implement the `DiffUtil.Callback`. Add this to the end of the `PhotoAdapter` class:

```kotlin
class PhotoRowDiffCallback(private val newRows : List<PhotoRow>, private val oldRows : List<PhotoRow>) : DiffUtil.Callback() {
  override fun areItemsTheSame(oldItemPosition: Int, newItemPosition: Int): Boolean {
    val oldRow = oldRows[oldItemPosition]
    val newRow = newRows[newItemPosition]
    return oldRow.type == newRow.type
  }

  override fun getOldListSize(): Int = oldRows.size

  override fun getNewListSize(): Int = newRows.size

  override fun areContentsTheSame(oldItemPosition: Int, newItemPosition: Int): Boolean {
    val oldRow = oldRows[oldItemPosition]
    val newRow = newRows[newItemPosition]
    return oldRow == newRow
  }
}
```

This class checks the items to see if they are the same type or have the same values. The `areItemsTheSame` method just checks the row type but the `areContentsTheSame` checks to see if the rows are equal.

### Additional Methods

To update the photo list, you need to pass in a new list, calculate the difference between the two lists and clear the filter. Add the following methods after `getItemViewType` in `PhotoAdapter` to support clearing the filter list, use `DiffUtil` to tell the __Adapter__ how to update the photo views, and remove rows:

```kotlin
private fun clearFilter() {
    filtering = false
    filteredPhotos.clear()
  }

fun updatePhotos(photos : ArrayList<PhotoRow>) {
   DiffUtil.calculateDiff(PhotoRowDiffCallback(photos, photoList), false).dispatchUpdatesTo(this)
   photoList = photos
   clearFilter()
}

fun removeRow(row : Int) {
   if (filtering) {
       filteredPhotos.removeAt(row)
   } else {
       photoList.removeAt(row)
   }
   notifyItemRemoved(row)
}
```

Notice the `notifyItemRemoved` method. That method will allow animations to occur for the rows around the deleted row because it tells __RecyclerView__ exactly how the data in the adapter has changed. It’s best not to use `notifyDataSetChanged` for this case, as that does not provide __RecyclerView__ with details about exactly what has changed.

---

## Retrofit

To get the data from NASA, you’ll be using the [Retrofit](http://square.github.io/retrofit/) and [Moshi](https://github.com/square/moshi) libraries. You’ll use Retrofit for downloading the data and Moshi for converting it from JSON to our models.

First, create a service interface. Create a new package named __service__ and then right click to create a new Kotlin interface named _`NasaApi`_. Replace the code with the following:

```kotlin
interface NasaApi {
   @GET("mars-photos/api/v1/rovers/{rover}/photos?sol=1000&api_key=<key>")
   fun getPhotos(@Path("rover") rover: String) : Call<PhotoList>
}
```

Substitute your key from the NASA site for `<key>`. This sets up the method to get the list of Photos. The passed in rover string will be substitued for {rover}.

If you need to add an import for `Call`, be sure to use the one from the `retrofit2` package.

Next, you’ll need to create the actual service. Your service should be a Singleton and in Kotlin, creating one is extremely easy.

Right click on the `service` package and select <FontIcon icon="iconfont icon-select"/>`[New/Kotlin File/Class]`, name it `NasaPhotos`, and change the __Kind__ to <FontIcon icon="iconfont icon-select"/>`[Object]`. That’s it! You now have a Kotlin Singleton.

Create a variable named `service` that is used in the `getPhotos` method:

```kotlin
object NasaPhotos {
  private val service : NasaApi
```

And then add an `init` method. This will create the instance of Retrofit, set Moshi as the JSON converter, and finally create the `service` object:

```kotlin
init {
    val retrofit = Retrofit.Builder()
       .baseUrl("https://api.nasa.gov/")
       .addConverterFactory(MoshiConverterFactory.create())
       .build()
    service = retrofit.create(NasaApi::class.java)
}
```

Then, create a new method to make the call for the photos:

```kotlin
fun getPhotos(rover: String) : Call<PhotoList> = service.getPhotos(rover)
```

You’re almost there. You just need to setup the spinners and the __RecyclerView__ adapter, which you’ll do next.

---

## Updating the main UI

It’s time to update `MainActivity` to setup the spinners and load some photos!

Add a few variables to hold the current rover string and the spinner positions, at the top of `MainActivity`

```kotlin
private var currentRover = "curiosity"
private var currentRoverPosition = 0
private var currentCameraPosition = 0
```

Above the `MainActivity` class declaration add:

```kotlin
private const val TAG = "MarsRover"
```

The `TAG` will be used for logging errors.

Add the following below the `onCreate` method:

```kotlin
private fun setupSpinners() {
   setupRoverSpinner()
   setupCameraSpinner()
}

private fun setupCameraSpinner() {
   // Camera spinner
   val cameraStrings = resources.getStringArray(R.array.camera_values)
   val cameraAdapter = ArrayAdapter.createFromResource(this, R.array.camera_names, android.R.layout.simple_spinner_item)
   cameraAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
   cameras.adapter = cameraAdapter
   cameras.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
       override fun onNothingSelected(parent: AdapterView<*>) {
       }

       override fun onItemSelected(parent: AdapterView<*>, view: View, position: Int, id: Long) {
           currentCameraPosition = position
       }
   }
}

private fun setupRoverSpinner() {
   // Setup the spinners for selecting different rovers and cameras
   val roverStrings = resources.getStringArray(R.array.rovers)
   val adapter = ArrayAdapter.createFromResource(this, R.array.rovers, android.R.layout.simple_spinner_item)
   adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
   rovers.adapter = adapter
   rovers.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
       override fun onNothingSelected(parent: AdapterView<*>) {
       }

       override fun onItemSelected(parent: AdapterView<*>, view: View, position: Int, id: Long) {
           if (currentRoverPosition != position) {
               currentRover = roverStrings[position].toLowerCase()
               loadPhotos()
           }
           currentRoverPosition = position
       }
   }
}
```

These setup the spinners to hold the corresponding string arrays.

At the end of the `onCreate` method, add the following two lines that will setup the spinners and load the photos:

```kotlin
setupSpinners()
loadPhotos()
```

Next, you’ll load and sort our photos. Add the following after `setupRoverSpinner` in the `MainActivity`:

```kotlin
private fun loadPhotos() {
    progress.visibility = View.VISIBLE
    recycler_view.visibility = View.GONE
    NasaPhotos.getPhotos(currentRover).enqueue(object : Callback<PhotoList> {
       override fun onFailure(call: Call<PhotoList>?, t: Throwable?) {
           Snackbar.make(recycler_view, R.string.api_error, Snackbar.LENGTH_LONG)
           Log.e(TAG, "Problems getting Photos with error: $t.msg")
       }

       override fun onResponse(call: Call<PhotoList>?, response: Response<PhotoList>?) {
           response?.let { photoResponse ->
               if (photoResponse.isSuccessful) {
                  val body = photoResponse.body()
                  body?.let {
                     Log.d(TAG, "Received ${body.photos.size} photos")
                     if (recycler_view.adapter == null) {
                        val adapter = PhotoAdapter(sortPhotos(body))
                        recycler_view.adapter = adapter
                     } else {
                        (recycler_view.adapter as PhotoAdapter).updatePhotos(sortPhotos(body))
                     }
                   }
                   recycler_view.scrollToPosition(0)
                   recycler_view.visibility = View.VISIBLE
                   progress.visibility = View.GONE
               }
           }
       }
   })
}

fun sortPhotos(photoList: PhotoList) : ArrayList<PhotoRow> {
   val map = HashMap<String, ArrayList<Photo>>()
   for (photo in photoList.photos) {
       var photos = map[photo.camera.full_name]
       if (photos == null) {
           photos = ArrayList()
           map[photo.camera.full_name] = photos
       }
       photos.add(photo)
   }
   val newPhotos = ArrayList<PhotoRow>()
   for ((key, value) in map) {
       newPhotos.add(PhotoRow(RowType.HEADER, null, key))
       value.mapTo(newPhotos) { PhotoRow(RowType.PHOTO, it, null) }
   }
   return newPhotos
}
```

You’ll have to import a few classes to get rid of the errors. Note that any of the imports that provide multiple options should use the ones in the `retrofit2` package.

In the `sortPhotos` method, you put the photos into sections arranged by camera.

Now it’s time to try it out. Build and run the app, and within about 10 or 20 seconds, you should see something like:

![mars rover screenshot](https://koenig-media.raywenderlich.com/uploads/2017/10/Screenshot_1507091574-281x500.png =240x)

If you don’t see any images, make sure you have your personal key in the Retrofit `@GET` annotation.

You can choose different rovers from the spinner in the top right and different cameras from the spinner below the rover spinner but they won’t do anything until they are hooked up. Note also that not all rovers have images from all cameras.

---

## Filtering

In order to filter the list, add the filterCamera method to PhotoAdapter below `getItemViewType`:

```kotlin
fun filterCamera(camera: String) {
   filtering = true
   val newPhotos = photoList.filter { photo -> photo.type == RowType.PHOTO && photo.photo?.camera?.name.equals(camera) } as ArrayList<PhotoRow>
   DiffUtil.calculateDiff(PhotoRowDiffCallback(newPhotos, photoList), false).dispatchUpdatesTo(this)
   filteredPhotos = newPhotos
}
```

Now go back to your `MainActivity` and hook up the camera filtering. Add the following code to the beginning of the `OnItemSelectedListener.onItemSelected()` in the `setupCameraSpinner` method:

```kotlin
if (recycler_view.adapter != null && currentCameraPosition != position) {
   (recycler_view.adapter as PhotoAdapter).filterCamera(cameraStrings[position])
}
```

You pass in the camera string to filter on and create a new list with just those photos. You use Kotlin’s `filter` function on the collection and return a list of photos and has the given camera value.

![Now run the app and choose Opportunity as the new rover and you should see something like](https://koenig-media.raywenderlich.com/uploads/2017/12/opportunity-281x500.png =240x)

---

## ItemDecorators

Unlike __ListView__, __RecyclerView__ does not come with any built-in dividers. Instead, __RecyclerView__ allows you to add your own decorators.

The __RecyclerView__ library comes with a `DividerItemDecoration` that can be used to put dividers between your rows. You can add a divider with this one line, which you should add to `onCreate()` in `MainActivity` after the line: `recycler_view.visibility = View.GONE`:

```kotlin
recycler_view.addItemDecoration(DividerItemDecoration(this, DividerItemDecoration.VERTICAL))
```

You can see the divider after the photo date on the last photo in a section.

To create your own decorator, just subclass `ItemDecoration` and implement the `onDraw` and/or the `onDrawOver` methods.

---

## Animations

__RecyclerView__s allow animations for each row and provides built-in animations for adding and removing rows.

To show an animation for adding a row, make sure you use `notifyItemAdded(position)` instead of calling `notifyDataChanged()`. This lets the view know that just one row has been added and can animate that addition.

For deleting, call `notifyItemRemoved(position)`.

To animate the addition of each item, add the following method to `PhotoAdapter`:

```kotlin
private fun setAnimation(viewToAnimate: View) {
  if (viewToAnimate.animation == null) {
    val animation = AnimationUtils.loadAnimation(viewToAnimate.context, android.R.anim.slide_in_left)
    viewToAnimate.animation = animation
  }
}
```

This will provide an animation where the row slides in from the left.

Then add:

```kotlin
setAnimation(holder.itemView)
```

as the last line in `onBindViewHolder`. Now try running again.

![The animation adds a nice dynamic effect to the presentation of the photos.](https://koenig-media.raywenderlich.com/uploads/2017/10/mars4.gif =240x)

---

## Swiping

Swiping is great way to let your user delete rows. You’re going to implement swiping in both the left and right direction to delete a row.

__RecyclerView__ uses an `ItemTouchHelper` class along with a swipe callback to handle the movement. The callback is simple and you will just call your adapter’s `removeRow` method in the `onSwiped` callback.

Open <FontIcon icon="iconfont icon-java"/>`MainActivity.kt` and add the following at the bottom of the class:

```kotlin
class SwipeHandler(val adapter: PhotoAdapter, dragDirs : Int, swipeDirs : Int) : ItemTouchHelper.SimpleCallback(dragDirs, swipeDirs) {
  override fun onMove(recyclerView: RecyclerView?, viewHolder: RecyclerView.ViewHolder?, target: RecyclerView.ViewHolder?): Boolean {
    return false
  }

  override fun onSwiped(viewHolder: RecyclerView.ViewHolder, direction: Int) {
    adapter.removeRow(viewHolder.adapterPosition)
  }
}
```

In `loadPhotos` you will find the following in the `onResponse` method:

```kotlin
if (recycler_view.adapter == null) {
  val adapter = PhotoAdapter(sortPhotos(body))
  recycler_view.adapter = adapter
```

Add the following after setting the `adapter` value:

```kotlin
val touchHandler = ItemTouchHelper(SwipeHandler(adapter, 0, (ItemTouchHelper.LEFT or ItemTouchHelper.RIGHT)))
touchHandler.attachToRecyclerView(recycler_view)
```

![Run the app and try swiping left or right to delete a row.](https://koenig-media.raywenderlich.com/uploads/2017/10/mars5.gif =240x)

Awesome! You’re just deleting the row from the display in the __RecyclerView__. In another app you would likely delete the item from a database and/or make an API call to delete the corresponding item on a server.

---

## Where to go from here

You’ve done a lot of work and now you know how to add animations, provide a swipe handler, add section headers, and use the `DiffUtil` class. Well done!

A great next step would be to eliminate the `PhotoRow` model class and `DefaultViewHolder` and get the project working with separate Header and Photo model objects and a dedicated `ViewHolder` for each.

The final project for this tutorial is available [<FontIcon icon="fas fa-file-zipper"/>here][download-material-final]. In the final project, be sure to remember to set the API key in <FontIcon icon="iconfont icon-java"/>`NasaApi.kt`.

If you need more information on `RecyclerView`s, you can check out the following Android developer documentation:

- [<FontIcon icon="iconfont icon-android"/>Recyclerview Layouts](https://developer.android.com/guide/topics/ui/layout/recyclerview?hl=ko)
- [<FontIcon icon="iconfont icon-android"/>RecyclerView Class](https://developer.android.com/reference/android/support/v7/widget/RecyclerView.html)
- [<FontIcon icon="iconfont icon-android"/>DiffUtil Class](https://developer.android.com/reference/android/support/v7/util/DiffUtil.html)

I hope you enjoyed this Intermediate RecyclerView tutorial, and if you have any questions or comments, please join the forum discussion below!

Go forward and make great animated `RecyclerViews`!

---

<TagLinks />

[download-material]: https://koenig-media.raywenderlich.com/uploads/2017/12/marsrovers-starter-1.zip
[download-material-final]: https://koenig-media.raywenderlich.com/uploads/2017/12/marsrovers-final-1.zip