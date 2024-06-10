---
lang: ko-KR
title: Introduction to Google Maps API for Android with Kotlin
description: Article(s) > Introduction to Google Maps API for Android with Kotlin
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
      content: Article(s) > Introduction to Google Maps API for Android with Kotlin
    - property: og:description
      content: Introduction to Google Maps API for Android with Kotlin
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/explore/articles/kodeco.com/230-introduction-to-google-maps-api-for-android-with-kotlin.html
prev: /programming/java-android/articles/README.md
date: 2018-01-17
isOriginal: false
cover: https://koenig-media.raywenderlich.com/uploads/2018/01/Mapping-kotlin-twitter.png
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
  name="Introduction to Google Maps API for Android with Kotlin"
  desc="In this Google Maps API Tutorial for Android you will learn how to retrieve the user’s current location, get location updates and search for places."
  url="https://kodeco.com/230-introduction-to-google-maps-api-for-android-with-kotlin"
  logo="https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-other-core-apis-android-e2f05defab3a37db4e2d49c3eaea0750a2c1f9419af4ef95d2fd58af01dcfce4.svg"
  preview="https://koenig-media.raywenderlich.com/uploads/2018/01/Mapping-kotlin-twitter.png"/>

::: note Update Note

This tutorial is now up to date with the latest version of the Google Maps API, the latest version of Android Studio version 3.0.1, and uses Kotlin for app development. Update by Joe Howard. Original tutorial by Eunice Obugyei.

:::

From fitness apps such as Runkeeper to games such as Pokemon Go, location services are an increasingly important part of modern apps. 

In this Google Maps API tutorial, you will create an app named **City Guide**. The app allows a user to search for a location, use Google Maps to show the address of the location and listen for the user’s location changes. 

You will learn how to use the Google Maps Android API, the Google Location Services API and the Google Places API for Android to do the following:

- Show a user’s current location
- Display and customize markers on a map
- Retrieve the address of a location given the coordinates
- Listen for location updates
- Search for places

::: note

This Google Maps API tutorial assumes you are already familiar with the basics of Android development with Kotlin. If you are completely new to Android development, read through our [Beginning Android Development with Kotlin](https://kodeco.com/478209-beginning-android-development-with-kotlin-part-one-installing-android-studio) tutorial to familiarize yourself with the basics. <!-- TODO: 작성 (/explore/articles/kodeco.com/478209-beginning-android-development-with-kotlin-part-one-installing-android-studio.md) -->

:::

---

## Getting Started

Open **Android Studio 3.0.1** or later and select **Start a new Android Studio project** from the **Quick Start** menu, or choose **File/New Project…**:

![](https://koenig-media.raywenderlich.com/uploads/2018/01/welcome.png)

In the **Create New Project** dialog, on the **Create Android Project** view, enter the name of the app as **City Guide**, company domain of **android.raywenderlich.com**, select your preferred folder location for the project files, make sure that **Include Kotlin support**, and click **Next**: 

![](https://koenig-media.raywenderlich.com/uploads/2018/01/new_project.png)

On the **Target Android Devices** view, check the **Phone and Tablet** box and select the minimum SDK you want the app to support. Specify **API 16** from the **Minimum SDK** drop down and click **Next**.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/target.png)

On the **Add an Activity to Mobile** view, select the **Google Maps Activity** and click **Next**.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/add_activity.png)

On the **Configure Activity** view, click **Finish** to complete the project creation process.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/configure_activity.png)

Android Studio will use Gradle to build your project. This may take a few seconds.

Open <FontIcon icon="iconfont icon-kotlin"/>`MapsActivity.kt`. It should look like this:

```kotlin
package com.raywenderlich.android.cityguide

import android.support.v7.app.AppCompatActivity
import android.os.Bundle

import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.SupportMapFragment
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.MarkerOptions

class MapsActivity : AppCompatActivity(), OnMapReadyCallback {

  private lateinit var mMap: GoogleMap

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_maps)
    // Obtain the SupportMapFragment and get notified when the map is ready to be used.
    val mapFragment = supportFragmentManager
        .findFragmentById(R.id.map) as SupportMapFragment
    mapFragment.getMapAsync(this)
  }

  /**
   * Manipulates the map once available.
   * This callback is triggered when the map is ready to be used.
   * This is where we can add markers or lines, add listeners or move the camera. In this case,
   * we just add a marker near Sydney, Australia.
   * If Google Play services is not installed on the device, the user will be prompted to install
   * it inside the SupportMapFragment. This method will only be triggered once the user has
   * installed Google Play services and returned to the app.
   */
  override fun onMapReady(googleMap: GoogleMap) {
    mMap = googleMap

    // Add a marker in Sydney and move the camera
    val sydney = LatLng(-34.0, 151.0)
    mMap.addMarker(MarkerOptions().position(sydney).title("Marker in Sydney"))
    mMap.moveCamera(CameraUpdateFactory.newLatLng(sydney))
  }
}
```

1. `MapsActivity` currently implements the **OnMapReadyCallback** interface and extends **AppCompatActivity**.
2. The class overrides **AppCompatActivity**’s `onCreate()` method
3. You also override **OnMapReadyCallback**’s **onMapReady()** method. This method is called when the map is ready to be used. The code declared in this method creates a marker with coordinates near Sydney, Australia and adds the marker to the map. 

The template adds the following in the **manifests/AndroidManifest.xml**:

1. A declaration of the `ACCESS_FINE_LOCATION` permission. This is required to access the user’s precise location.
2. The `com.google.android.geo.API_KEY` meta-data. This is used to specify the API key.

The template also adds a **Google Play Services** dependency to <FontIcon icon="iconfont icon-gradle"/>`build.gradle`. This dependency exposes the Google Maps and Location Services APIs to the application.

```groovy
implementation 'com.google.android.gms:play-services-maps:11.8.0'
```

![When the build is complete, run the app to see what you have](https://koenig-media.raywenderlich.com/uploads/2016/09/mapping_start_project_6_run_1.png =240x)

All you have is a blank screen with no map; you haven’t yet set up the API key for the Google Map. You’ll do that next.

::: note

If you’re using an emulator, the emulator’s installed version will have to satisfy the version of Google Play Services required in your <FontIcon icon="iconfont icon-gradle"/>`build.gradle` file. If you see a message that you need to update the emulator’s Google Play Services version, you can either download the latest Google APIs using your Android Studio SDK Manager and install on your Virtual Device, or lower the version in your gradle dependency.

:::

---

## Using the Google Maps APIs

To use any of the [<FontIcon icon="fa-brands fa-android"/>Google Maps APIs](https://developers.google.com/maps/android/), you need to create an API key and enable any required APIs from the [<FontIcon icon="fa-brands fa-google"/>developer console](https://console.developers.google.com). If you don’t already have a Google account, [<FontIcon icon="fa-brands fa-google"/>create one](https://accounts.google.com/SignUpWithoutGmail) now — it’s free!

### Creating API Keys

Open <FontIcon icon="fas fa-folder-open"/>`res/values/`<FontIcon icon="iconfont icon-code"/>`google_maps_api.xml`. You will see the following:

![](https://koenig-media.raywenderlich.com/uploads/2018/01/api_key.png)

Now copy and paste the link shown above into your browser.

![On the **Enable an API** page, select **Create a project** and click <FontIcon icon="iconfont icon-select"/>`[Continue]`.](https://koenig-media.raywenderlich.com/uploads/2016/09/mapping_start_project_8_create_api_2.png)

![On the next screen, click the <FontIcon icon="iconfont icon-select"/>`[Create API key]` button to continue.](https://koenig-media.raywenderlich.com/uploads/2016/09/mapping_start_project_9_create_api_3.png)

![When that’s done, copy the API key shown in the **API key created** dialog and click <FontIcon icon="iconfont icon-select"/>`[Close]`.](https://koenig-media.raywenderlich.com/uploads/2018/01/api_key2.png)

Head back to <FontIcon icon="iconfont icon-code"/>`google_maps_api.xml`, replace the value of `google_maps_key` key with the copied API key. 

![Build and run again. You should see a map with a red marker on the screen.](https://koenig-media.raywenderlich.com/uploads/2018/01/first_map.png =240x)

Go back to the [<FontIcon icon="fa-brands fa-google"/>developer console](https://console.developers.google.com/apis/library) and enable the **Google Places API for Android**. You will be using this later on to search for a place:

![](https://koenig-media.raywenderlich.com/uploads/2018/01/enable_google_places.png)

### Setting up a Fused Location Client

Before adding any Kotlin code, you’ll need to configure Android Studio to automatically insert `import` statements to save you from having to add each one manually.

Go to your Android Studio Preferences (or Settings on PC) and go to **Editor > General > Auto Import**, select the **Add unambiguous imports on the fly** and the **Show import popup** checkboxes, and click **OK**.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/imports.png)

Open <FontIcon icon="iconfont icon-kotlin"/>`MapsActivity.kt` and first rename the `GoogleMap` property to `map` by setting the cursor on it and hitting <kbd>Shift</kbd>+<kbd>F6</kbd>: 

```kotlin
private lateinit var map: GoogleMap
```

Open your app <FontIcon icon="iconfont icon-gradle"/>`build.gradle` file and add the Google Maps location dependency:

```groovy
implementation 'com.google.android.gms:play-services-location:11.8.0'
```

Next, add a `FusedLocationProviderClient` to `MapActivity`

```kotlin
private lateinit var fusedLocationClient: FusedLocationProviderClient
```

Add the following line of code to the end of `onCreate()`,

```kotlin
fusedLocationClient = LocationServices.getFusedLocationProviderClient(this)
```

Have `MapActivity` implement the `GoogleMap.OnMarkerClickListener` interface, which defines the `onMarkerClick()`, called when a marker is clicked or tapped:

```kotlin
class MapsActivity : AppCompatActivity(), OnMapReadyCallback,
    GoogleMap.OnMarkerClickListener {
    /* ... 생략 ... */
}
```

Now you need to implement all methods declared in each of the interfaces added above. To do this, follow the steps below:

![Place the cursor anywhere on the class declaration and click on the red light bulb icon that appears above the class declaration.<br/>Select **Implement members** from the options that appear.](https://koenig-media.raywenderlich.com/uploads/2018/01/implement_members.png)

![On the **Implement members** dialog, click <FontIcon icon="iconfont icon-select"/>`[OK]`.](https://koenig-media.raywenderlich.com/uploads/2018/01/implement_members.png)



Update **onMarkerClick()** to be

```kotlin
override fun onMarkerClick(p0: Marker?) = false
```

Add the following code to **onMapReady()**:

```kotlin
map.getUiSettings().setZoomControlsEnabled(true)
map.setOnMarkerClickListener(this)
```

Here you enable the zoom controls on the map and declare `MapsActivity` as the callback triggered when the user clicks a marker on this map.

![Now build and run the app and click the marker on the map near Sydney, and you’ll see the title text appear](https://koenig-media.raywenderlich.com/uploads/2018/01/sydney.png =240x)

Enter a different set of latitude and longitude values and you’ll see the marker move to your chosen location.  

Replace the Sydney code with the following code to set a marker at New York City with the title “My Favorite City”:

```kotlin
val myPlace = LatLng(40.73, -73.99)  // this is New York 
map.addMarker(MarkerOptions().position(myPlace).title("My Favorite City"))
map.moveCamera(CameraUpdateFactory.newLatLng(myPlace))
```

![Build and run.](https://koenig-media.raywenderlich.com/uploads/2018/01/nyc1.png =240x)

Notice the map automatically centered the marker on the screen; `moveCamera()` does this for you. However, the zoom level of the map isn’t right, as it’s fully zoomed out.

Modify `moveCamera()` as shown below:

```kotlin
map.moveCamera(CameraUpdateFactory.newLatLngZoom(myPlace, 12.0f))
```

Zoom level 0 corresponds to the fully zoomed-out world view. Most areas support zoom levels up to 20, while more remote areas only support zoom levels up to 13. A zoom level of 12 is a nice in-between value that shows enough detail without getting crazy-close.

![Build and run to view your progress so far.](https://koenig-media.raywenderlich.com/uploads/2018/01/nyc2.png =240x)

---

## User Permissions

Your app needs the `ACCESS_FINE_LOCATION` permission for getting the user’s location details; you’ve already included this in **AndroidManifest.xml**.

Starting with Android 6.0, user permissions are handled a little differently than before. You don’t request permission during the installation of your app; rather, you request them at run time when the permission is actually required. 

Permissions are classified into two categories: **[<FontIcon icon="fa-brands fa-android"/>normal](https://developer.android.com/guide/topics/security/normal-permissions.html)** and **[<FontIcon icon="fa-brands fa-android"/>dangerous](https://developer.android.com/guide/topics/security/permissions.html#perm-groups)** categories. Permissions that belong to the dangerous category require run time permission from the user. Permissions that request access to the user’s private information such as the user’s [<FontIcon icon="fa-brands fa-android"/>CONTACTS](https://developer.android.com/reference/android/Manifest.permission_group.html#CONTACTS), [<FontIcon icon="fa-brands fa-android"/>CALENDAR](https://developer.android.com/reference/android/Manifest.permission_group.html#CALENDAR), [<FontIcon icon="fa-brands fa-android"/>LOCATION](https://developer.android.com/reference/android/Manifest.permission_group.html#LOCATION) etc. are categorised as dangerous permissions.

Open <FontIcon icon="iconfont icon-kotlin"/>`MapsActivity.kt` and add a `companion object` with the code to request location permission:

```kotlin
companion object {
  private const val LOCATION_PERMISSION_REQUEST_CODE = 1  
}
```

Create a new method called `setUpMap()` as follows.

```kotlin
private fun setUpMap() {
  if (ActivityCompat.checkSelfPermission(this,
      android.Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
    ActivityCompat.requestPermissions(this,
        arrayOf(android.Manifest.permission.ACCESS_FINE_LOCATION), LOCATION_PERMISSION_REQUEST_CODE)
    return
  }
}
```

The code above checks if the app has been granted the `ACCESS_FINE_LOCATION` permission. If it hasn’t, then request it from the user.

Add a call to `setUpMap()` at the end of `onMapReady()`.

![Build and run; click <FontIcon icon="iconfont icon-select"/>`[Allow]` to grant permission.](https://koenig-media.raywenderlich.com/uploads/2018/01/allow.png =240x)

::: note

A thorough discussion of user permissions is beyond the scope of this tutorial, but check out [<FontIcon icon="fa-brands fa-android"/>this](https://developer.android.com/training/permissions/requesting.html) document on requesting permissions at run time.

:::

---

## Getting Current Location

One of the most common uses for location services is finding the user’s current location. You do this by requesting the last known location of the user’s device from the Google Play services location APIs.

In <FontIcon icon="iconfont icon-kotlin"/>`MapsActivity.kt`, add the following new property:

```kotlin
private lateinit var lastLocation: Location
```

Next, remove the code in `onMapReady()` that put a marker in New York:

```kotlin
override fun onMapReady(googleMap: GoogleMap) {
  map = googleMap
  
  map.uiSettings.isZoomControlsEnabled = true
  map.setOnMarkerClickListener(this)

  setUpMap()
}
```

Add the code below to the bottom of **setUpMap()**:

```kotlin
// 1
map.isMyLocationEnabled = true

// 2
fusedLocationClient.lastLocation.addOnSuccessListener(this) { location ->
  // Got last known location. In some rare situations this can be null.
  // 3
  if (location != null) {
    lastLocation = location
    val currentLatLng = LatLng(location.latitude, location.longitude)
    map.animateCamera(CameraUpdateFactory.newLatLngZoom(currentLatLng, 12f))
  }
}
```

Taking each commented section in turn:

1. **isMyLocationEnabled = true** enables the `my-location` layer which draws a light blue dot on the user’s location. It also adds a button to the map that, when tapped, centers the map on the user’s location.
2. **fusedLocationClient.getLastLocation()** gives you the most recent location currently available.
3. If you were able to retrieve the the most recent location, then move the camera to the user’s current location.

![Build and run to view your progress so far. You’ll see a light blue dot on the user’s location:](https://koenig-media.raywenderlich.com/uploads/2018/01/boston.png =240x)

### Emulator Testing

It’s best to use a real Android device to test a map application. If for some reason, you need to test from an emulator, you can do so by mocking location data in the emulator.

One way to do this is by using the emulator’s extended controls. Here’s how you’d do that:

![1. Start the emulator. On the right hand panel, click the more icon (**…**) to access the **Extended Controls**](https://koenig-media.raywenderlich.com/uploads/2016/11/Screen-Shot-2016-11-24-at-9.09.43-AM.png =240x)

![2. Select the **Location** item on the left hand side of the **Extended Controls** dialog.](https://koenig-media.raywenderlich.com/uploads/2016/09/Screen-Shot-2016-09-20-at-10.40.22-AM.png)

Enter the latitude and longitude values in the specified fields and click <FontIcon icon="iconfont icon-select"/>`[Send]`.

---

## Markers

As you may have noticed from the last run, the blue dot on the user’s location is not very prominent. The Android Maps API lets you use a marker object, which is an icon that can be placed at a particular point on the map’s surface.

In <FontIcon icon="iconfont icon-kotlin"/>`MapsActivity.kt` add the following code.

```kotlin
private fun placeMarkerOnMap(location: LatLng) {
  // 1
  val markerOptions = MarkerOptions().position(location)
  // 2
  map.addMarker(markerOptions)
}
```

1. Create a `MarkerOptions` object and sets the user’s current location as the position for the marker 
2. Add the marker to the map

Now replace the `setUpMap()` with the following:

```kotlin
private fun setUpMap() {
  if (ActivityCompat.checkSelfPermission(this, android.Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
    ActivityCompat.requestPermissions(this, arrayOf(android.Manifest.permission.ACCESS_FINE_LOCATION), LOCATION_PERMISSION_REQUEST_CODE)
    return
  }

  map.isMyLocationEnabled = true

  fusedLocationClient.lastLocation.addOnSuccessListener(this) { location ->
    // Got last known location. In some rare situations this can be null.
    if (location != null) {
      lastLocation = location
      val currentLatLng = LatLng(location.latitude, location.longitude)
      placeMarkerOnMap(currentLatLng)
      map.animateCamera(CameraUpdateFactory.newLatLngZoom(currentLatLng, 12f))
    }
  }
}
```

The only change you made to `setUpMap()` here is adding a call to `placeMarkerOnMap()` to show the marker.

Build and run to view your progress so far.

![You should see a pin on the user’s location](https://koenig-media.raywenderlich.com/uploads/2018/01/boston_marker.png =240x)

Don’t like the default Android pins? You can also create a marker with a custom icon as the pin. Go back to `placeMarkerOnMap()` and add the following line of code after the `MarkerOptions` instantiation:

```kotlin
markerOptions.icon(
  BitmapDescriptorFactory.fromBitmap(
    BitmapFactory.decodeResource(resources, R.mipmap.ic_user_location)
  )
)
```

Download custom pins named `ic_user_location` [<FontIcon icon="fas fa-file-zipper"/>from this link](https://koenig-media.raywenderlich.com/uploads/2016/09/ic_user_location.zip) and unzip it.

![Switch to the **Project** view in the Project pane and copy all the files to the corresponding <FontIcon icon="fas fa-folder-open"/>`mipmap` folders of the project](https://koenig-media.raywenderlich.com/uploads/2018/01/mipmap.png)

Build and run to view your progress so far.

![The marker on your location should now be using the `ic_user_location` icon in the project](https://koenig-media.raywenderlich.com/uploads/2018/01/custom_marker.png)

What if all you want is the default pin but in a different color? Try to figure this out by yourself, and then check the spoiler below if you need more help:

::: details Answer

Add this line of code  to `placeMarkerOnMap()` instead:

```kotlin
markerOptions.icon(BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_GREEN))
```

![This uses the default marker but in a green color instead of the default red.](https://koenig-media.raywenderlich.com/uploads/2018/01/green_marker.png)

:::

---

## Changing the Map Type

Depending on the functionality of your app, the normal map view might not be detailed enough for you.

The Android Maps API provides different map types to help you out: `MAP_TYPE_NORMAL`, `MAP_TYPE_SATELLITE`, `MAP_TYPE_TERRAIN`, `MAP_TYPE_HYBRID`

Add the following inside `setUpMap()` just below the `setMyLocationEnabled()` call:

```kotlin
map.mapType = GoogleMap.MAP_TYPE_TERRAIN
```

`GoogleMap.MAP_TYPE_TERRAIN` displays a more detailed view of the area, showing changes in elevation

::: tabs

@tab MAP_TYPE_NORMAL

![`GoogleMap.MAP_TYPE_NORMAL` displays a typical road map with labels. This is default type.](https://koenig-media.raywenderlich.com/uploads/2018/01/terrain.png =240x)

@tab MAP_TYPE_SATELLITE

![`GoogleMap.MAP_TYPE_SATELLITE` displays a satellite view of an area with no labels](https://koenig-media.raywenderlich.com/uploads/2018/01/satellite.png =240x)

@tab MAP_TYPE_HYBRID

![`GoogleMap.MAP_TYPE_HYBRID` displays a combination of the satellite and normal mode](https://koenig-media.raywenderlich.com/uploads/2018/01/hybrid.png =240x)

:::

---

## Implementing Geocoding

Now that you have the user’s location, it would be nice if you could show the address of that location when the user clicks on the marker.  Google has a class that does exactly that: `Geocoder`. This takes the coordinates of a location and returns a readable address and vice versa.

Open `MapsActivity`. Add the following method:

```kotlin
private fun getAddress(latLng: LatLng): String {
  // 1
  val geocoder = Geocoder(this)
  val addresses: List<Address>?
  val address: Address?
  var addressText = ""
    
  try {
    // 2
    addresses = geocoder.getFromLocation(latLng.latitude, latLng.longitude, 1)
    // 3
    if (null != addresses &amp;&amp; !addresses.isEmpty()) {
      address = addresses[0]
      for (i in 0 until address.maxAddressLineIndex) {
        addressText += if (i == 0) address.getAddressLine(i) else "\n" + address.getAddressLine(i)
      }
    }
  } catch (e: IOException) {
    Log.e("MapsActivity", e.localizedMessage)
  }

  return addressText
}
```

The import for `Address` is ambiguous, so specify the following import to resolve the issue:

```kotlin
import android.location.Address
```

Briefly, here’s what’s going on:

1. Creates a Geocoder object to turn a latitude and longitude coordinate into an address and vice versa.
2. Asks the geocoder to get the address from the location passed to the method.
3. If the response contains any address, then append it to a string and return.

Replace `placeMarkerOnMap()` with the following.

```kotlin
private fun placeMarkerOnMap(location: LatLng) {
  val markerOptions = MarkerOptions().position(location)

  val titleStr = getAddress(location)  // add these two lines
  markerOptions.title(titleStr)

  map.addMarker(markerOptions)
}
```

Here you added a call to `getAddress()` and added this address as the marker title.

Build and run to view your progress so far

![Click on the marker to see the address](https://koenig-media.raywenderlich.com/uploads/2018/01/address.png =240x)

Click anywhere on the map to dismiss the address. 

Notice that when you move locations, the blue dot moves with you, but the marker remains at it’s first location. If you’re using a physical device, try moving around to see this. If you are on emulator, change your coordinates to another location in your emulator control.

The marker doesn’t move because your code does not know that the location has changed. The blue dot is controlled by the Google API, not your code. If you want the marker to follow the blue dot always, you need to receive location updates as a call-back in your code.

---

## Receiving Location Updates

Knowing your user’s location at all times can help you provide a better experience. This section of the tutorial shows you how to continuously receive updates of your user’s location.

To do this, you first have to create a location request. 

Open `MapsActivity`. Now add the following properties:

```kotlin
// 1
private lateinit var locationCallback: LocationCallback
// 2
private lateinit var locationRequest: LocationRequest
private var locationUpdateState = false

companion object {
  private const val LOCATION_PERMISSION_REQUEST_CODE = 1
  // 3
  private const val REQUEST_CHECK_SETTINGS = 2
}
```

1. Declare a [<FontIcon icon="fa-brands fa-android"/>`LocationCallback`](https://developers.google.com/android/reference/com/google/android/gms/location/LocationCallback) property.
2. Declare a [<FontIcon icon="fa-brands fa-android"/>`LocationRequest`](https://developers.google.com/android/reference/com/google/android/gms/location/LocationRequest) property and a location updated state property.
3. `REQUEST_CHECK_SETTINGS` is used as the request code passed to `onActivityResult`.

Next add the following:

```kotlin
private fun startLocationUpdates() {
  //1
  if (ActivityCompat.checkSelfPermission(this,
      android.Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
    ActivityCompat.requestPermissions(this,
        arrayOf(android.Manifest.permission.ACCESS_FINE_LOCATION),
        LOCATION_PERMISSION_REQUEST_CODE)
    return
  }
  //2
  fusedLocationClient.requestLocationUpdates(locationRequest, locationCallback, null /* Looper */)
}
```

1. In `startLocationUpdates()`, if the `ACCESS_FINE_LOCATION` permission has not been granted, request it now and return.
2. If there is permission, request for location updates.

Now add the following method:

```kotlin
private fun createLocationRequest() {
  // 1
  locationRequest = LocationRequest()
  // 2
  locationRequest.interval = 10000
  // 3
  locationRequest.fastestInterval = 5000
  locationRequest.priority = LocationRequest.PRIORITY_HIGH_ACCURACY

  val builder = LocationSettingsRequest.Builder()
      .addLocationRequest(locationRequest)

  // 4
  val client = LocationServices.getSettingsClient(this)
  val task = client.checkLocationSettings(builder.build())

  // 5
  task.addOnSuccessListener {
    locationUpdateState = true
    startLocationUpdates()
  }
  task.addOnFailureListener { e ->
    // 6
    if (e is ResolvableApiException) {
      // Location settings are not satisfied, but this can be fixed
      // by showing the user a dialog.
      try {
        // Show the dialog by calling startResolutionForResult(),
        // and check the result in onActivityResult().
        e.startResolutionForResult(this@MapsActivity,
            REQUEST_CHECK_SETTINGS)
      } catch (sendEx: IntentSender.SendIntentException) {
        // Ignore the error.
      }
    }
  }
}
```

Here’s what’s going on in `createLocationRequest()`:

![Before you start requesting for location updates, you need to check the state of the user’s location settings.](https://koenig-media.raywenderlich.com/uploads/2018/01/location.png =240x)

Now add the following three methods:

Here’s what’s going on:

Setup the `LocationCallback()` in `onCreate()` to be:

Here you update `lastLocation` with the new location and update the map with the new location coordinates. 

Next, add a call to `createLocationRequest()` to the bottom of `onCreate()`:

Your app is now set to receive location updates. When you change your location, the map will update with a new marker showing your new location. Note that the markers are still clickable to get the address as before.

Build and run.

![Play around with the app to view the changes](https://koenig-media.raywenderlich.com/uploads/2018/01/moving.png =240x)

Since this app is supposed to be a guide, a user should be able to search for places of interest to them, right?

That’s where the Google Places API comes in; it provides your app the functionality to search for millions of institutions and places of interest. It’s Android Library provides a number of cool functionalities, one of them being the **Place Picker**, which is a UI widget that lets you provide a place search functionality with very few lines of code. Too good to be true? Try it!

Add the places API to your app <FontIcon icon="iconfont icon-gradle"/>`build.gradle`:

Once again, open `MapsActivity`.

Add this constant to the `companion object`:

Now add the following method:

This method creates a new builder for an intent to start the Place Picker UI and then starts the `PlacePicker` intent.

Now add the following lines of code to `onActivityResult()`:

Here you retrieve details about the selected place if it has a `RESULT_OK` result for a `PLACE_PICKER_REQUEST` request, and then place a marker on that position on the map. 

You are almost ready to try out the place search — you just need to call **loadPlacePicker()** inside the code.

You’ll create a floating action button (FAB) at the bottom-right of the map to trigger this method. FAB requires `CoordinatorLayout` which is part of the design support library.

Go back to <FontIcon icon="iconfont icon-gradle"/>`build.gradle` for the app and add the **Android support design library** as a dependency:

Then replace the contents of **res > layout > activity_maps.xml** with the following lines of code:

You were using a fragment element for map earlier; you’ve kept that and added a floating action button.

In `MapsActivity`, add the following lines of code to `onCreate()`:

Build and run.

![Now when you click the search button at the bottom of the map the place picker will load](https://koenig-media.raywenderlich.com/uploads/2018/01/harvard.gif =240x)

You can download the final project from this tutorial [<FontIcon icon="fas fa-file-zipper"/>here][download-material-final]. Remember to put a valid Google Maps API key in <FontIcon icon="iconfont icon-code"/>`google_maps_api.xml` when running the final project.

This Google Maps API tutorial only brushed the surface of what you can do with the Google Maps APIs. The official Google documentation has much more about [<FontIcon icon="fa-brands fa-google"/>web services](https://developers.google.com/maps/web-services/) and [<FontIcon icon="fa-brands fa-android"/>and the Android API here](https://developers.google.com/maps/documentation/android-api/).

You can also check out the developer page on other ways to [<FontIcon icon="fa-brands fa-android"/>customize the marker](https://developers.google.com/maps/documentation/android-api/marker#customize_a_marker). User permission checks for run-time permissions need a better implementation than what you’ve done in this Google Maps API tutorial; the docs also have some great information [<FontIcon icon="fa-brands fa-android"/>about more advanced permission granting here](https://developer.android.com/training/permissions/requesting.html).

Check out the developer pages for extensive reading on the [<FontIcon icon="fa-brands fa-android"/>Google Places API for Android](https://developers.google.com/places/android-api/), [receiving location updates](https://developer.android.com/training/location/change-location-settings.html#location-request) and mocking location data via the [<FontIcon icon="fa-brands fa-android"/>emulator’s extended controls](https://developer.android.com/studio/run/emulator.html#extended).

If you have any questions or comments, please feel free to join the forum discussion below!

1. You create an instance of LocationRequest, add it to an instance of `LocationSettingsRequest.Builder` and retrieve and handle any changes to be made based on the current state of the user’s location settings.
2. `interval` specifies the rate at which your app will like to receive updates.
3. `fastestInterval` specifies the fastest rate at which the app can handle updates. Setting the `fastestInterval` rate places a limit on how fast updates will be sent to your app.
4. re you start requesting for location updates, you need to check the state of the user’s location settings.
5. You create a settings client and a task to check location settings.
6. A task `success` means all is well and you can go ahead and initiate a location request.
7. A task `failure` means the location settings have some issues which can be fixed. This could be as a result of the user’s location settings turned off

![You fix this by showing the user a dialog](https://koenig-media.raywenderlich.com/uploads/2018/01/location.png =240x)

Now add the following three methods:

```kotlin
// 1
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent) {
  super.onActivityResult(requestCode, resultCode, data)
  if (requestCode == REQUEST_CHECK_SETTINGS) {
    if (resultCode == Activity.RESULT_OK) {
      locationUpdateState = true
      startLocationUpdates()
    }
  }
}

// 2
override fun onPause() {
  super.onPause()
  fusedLocationClient.removeLocationUpdates(locationCallback)
}

// 3
public override fun onResume() {
  super.onResume()
  if (!locationUpdateState) {
    startLocationUpdates()
  }
}
```

Here’s what’s going on:

1. Override `AppCompatActivity`’s `onActivityResult()` method and start the update request if it has a `RESULT_OK` result for a `REQUEST_CHECK_SETTINGS` request.
2. Override `onPause()` to stop location update request
3. Override `onResume()` to restart the location update request.

Setup the `LocationCallback()` in `onCreate()` to be:

```kotlin
locationCallback = object : LocationCallback() {
  override fun onLocationResult(p0: LocationResult) {
    super.onLocationResult(p0)

    lastLocation = p0.lastLocation
    placeMarkerOnMap(LatLng(lastLocation.latitude, lastLocation.longitude))
  }
}
```

Here you update `lastLocation` with the new location and update the map with the new location coordinates.

Next, add a call to `createLocationRequest()` to the bottom of `onCreate()`:

```kotlin
createLocationRequest()
```

Your app is now set to receive location updates. When you change your location, the map will update with a new marker showing your new location. Note that the markers are still clickable to get the address as before.

Build and run.

![Play around with the app to view the changes](https://koenig-media.raywenderlich.com/uploads/2018/01/moving.png =240x)

---

## Place Search

Since this app is supposed to be a guide, a user should be able to search for places of interest to them, right?

That’s where the Google Places API comes in; it provides your app the functionality to search for millions of institutions and places of interest. It’s Android Library provides a number of cool functionalities, one of them being the **Place Picker**, which is a UI widget that lets you provide a place search functionality with very few lines of code. Too good to be true? Try it!

Add the places API to your app <FontIcon icon="iconfont icon-gradle"/>`build.gradle`:

```groovy
implementation 'com.google.android.gms:play-services-places:11.8.0'
```

Once again, open `MapsActivity`.

Add this constant to the `companion object`:

```kotlin
private const val PLACE_PICKER_REQUEST = 3
```

Now add the following method:

```kotlin
private fun loadPlacePicker() {
  val builder = PlacePicker.IntentBuilder()

  try {
    startActivityForResult(builder.build(this), PLACE_PICKER_REQUEST)

  } catch (e: GooglePlayServicesRepairableException) {
    e.printStackTrace()
  } catch (e: GooglePlayServicesNotAvailableException) {
    e.printStackTrace()
  }
}
```

This method creates a new builder for an intent to start the Place Picker UI and then starts the `PlacePicker` intent.

Now add the following lines of code to `onActivityResult()`:

```kotlin
if (requestCode == PLACE_PICKER_REQUEST) {
  if (resultCode == RESULT_OK) {
    val place = PlacePicker.getPlace(this, data)
    var addressText = place.name.toString()
    addressText += "\n" + place.address.toString()

    placeMarkerOnMap(place.latLng)
  }
}
```

Here you retrieve details about the selected place if it has a `RESULT_OK` result for a `PLACE_PICKER_REQUEST` request, and then place a marker on that position on the map. 

You are almost ready to try out the place search — you just need to call `loadPlacePicker()` inside the code.

You’ll create a floating action button (FAB) at the bottom-right of the map to trigger this method. FAB requires `CoordinatorLayout` which is part of the design support library.

Go back to <FontIcon icon="iconfont icon-gradle"/>`build.gradle` for the app and add the **Android support design library** as a dependency:

```groovy
implementation 'com.android.support:design:26.1.0'
```

::: note

As usual, if you are using a newer Android SDK version, you may need to update the version of this dependency as well so they match.

:::

Then replace the contents of **res > layout > activity_maps.xml** with the following lines of code:

```xml
<?xml version="1.0" encoding="utf-8"?>
<android.support.design.widget.CoordinatorLayout
  xmlns:android="http://schemas.android.com/apk/res/android"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  android:fitsSystemWindows="true">

  <fragment
    android:id="@+id/map"
    class="com.google.android.gms.maps.SupportMapFragment"
    android:layout_width="match_parent"
    android:layout_height="match_parent"/>

  <android.support.design.widget.FloatingActionButton
    android:id="@+id/fab"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_gravity="bottom|end"
    android:layout_marginRight="8dp"
    android:layout_marginBottom="112dp"
    android:src="@android:drawable/ic_menu_search"/>

</android.support.design.widget.CoordinatorLayout>
```

You were using a fragment element for map earlier; you’ve kept that and added a floating action button.

In `MapsActivity`, add the following lines of code to `onCreate()`:

```kotlin
val fab = findViewById<FloatingActionButton>(R.id.fab)
fab.setOnClickListener {
  loadPlacePicker()
}
```

Build and run.

![Now when you click the search button at the bottom of the map the place picker will load](https://koenig-media.raywenderlich.com/uploads/2018/01/harvard.gif =240x)

---

## Where to Go From Here?

You can download the final project from this tutorial [<FontIcon icon="fas fa-file-zipper"/>here][download-material-final]. Remember to put a valid Google Maps API key in **google_maps_api.xml** when running the final project.

This Google Maps API tutorial only brushed the surface of what you can do with the Google Maps APIs. The official Google documentation has much more about [<FontIcon icon="fa-brands fa-google"/>web services](https://developers.google.com/maps/web-services/) and [<FontIcon icon="fa-brands fa-android"/>and the Android API here](https://developers.google.com/maps/documentation/android-api/).

You can also check out the developer page on other ways to [<FontIcon icon="fa-brands fa-android"/>customize the marker](https://developers.google.com/maps/documentation/android-api/marker#customize_a_marker). User permission checks for run-time permissions need a better implementation than what you’ve done in this Google Maps API tutorial; the docs also have some great information [<FontIcon icon="fa-brands fa-android"/>about more advanced permission granting here](https://developer.android.com/training/permissions/requesting.html).

Check out the developer pages for extensive reading on the [<FontIcon icon="fa-brands fa-android"/>Google Places API for Android](https://developers.google.com/places/android-api/), [receiving location updates](https://developer.android.com/training/location/change-location-settings.html#location-request) and mocking location data via the [<FontIcon icon="fa-brands fa-android"/>emulator’s extended controls](https://developer.android.com/studio/run/emulator.html#extended).

If you have any questions or comments, please feel free to join the forum discussion below!

1. Override `AppCompatActivity`’s `onActivityResult()` method and start the update request if it has a `RESULT_OK` result for a `REQUEST_CHECK_SETTINGS` request.
2. Override `onPause()` to stop location update request
3. Override `onResume()` to restart the location update request.

::: note

As usual, if you are using a newer Android SDK version, you may need to update the version of this dependency as well so they match.

:::

```kotlin
// 1
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent) {
  super.onActivityResult(requestCode, resultCode, data)
  if (requestCode == REQUEST_CHECK_SETTINGS) {
    if (resultCode == Activity.RESULT_OK) {
      locationUpdateState = true
      startLocationUpdates()
    }
  }
}

// 2
override fun onPause() {
  super.onPause()
  fusedLocationClient.removeLocationUpdates(locationCallback)
}

// 3
public override fun onResume() {
  super.onResume()
  if (!locationUpdateState) {
    startLocationUpdates()
  }
}
```

```kotlin
locationCallback = object : LocationCallback() {
  override fun onLocationResult(p0: LocationResult) {
    super.onLocationResult(p0)

    lastLocation = p0.lastLocation
    placeMarkerOnMap(LatLng(lastLocation.latitude, lastLocation.longitude))
  }
}
```

```kotlin
createLocationRequest()
```

```groovy
implementation 'com.google.android.gms:play-services-places:11.8.0'
```

```kotlin
private const val PLACE_PICKER_REQUEST = 3
```

```kotlin
private fun loadPlacePicker() {
  val builder = PlacePicker.IntentBuilder()

  try {
    startActivityForResult(builder.build(this), PLACE_PICKER_REQUEST)
  } catch (e: GooglePlayServicesRepairableException) {
    e.printStackTrace()
  } catch (e: GooglePlayServicesNotAvailableException) {
    e.printStackTrace()
  }
}
```

```kotlin
if (requestCode == PLACE_PICKER_REQUEST) {
  if (resultCode == RESULT_OK) {
    val place = PlacePicker.getPlace(this, data)
    var addressText = place.name.toString()
    addressText += "\n" + place.address.toString()

    placeMarkerOnMap(place.latLng)
  }
}
```

```groovy
implementation 'com.android.support:design:26.1.0'
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<android.support.design.widget.CoordinatorLayout
  xmlns:android="http://schemas.android.com/apk/res/android"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  android:fitsSystemWindows="true">

  <fragment
    android:id="@+id/map"
    class="com.google.android.gms.maps.SupportMapFragment"
    android:layout_width="match_parent"
    android:layout_height="match_parent"/>

  <android.support.design.widget.FloatingActionButton
    android:id="@+id/fab"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_gravity="bottom|end"
    android:layout_marginRight="8dp"
    android:layout_marginBottom="112dp"
    android:src="@android:drawable/ic_menu_search"/>

</android.support.design.widget.CoordinatorLayout>
```

```kotlin
val fab = findViewById<FloatingActionButton>(R.id.fab)
fab.setOnClickListener {
  loadPlacePicker()
}
```

---

<TagLinks />

[download-material-final]: https://koenig-media.raywenderlich.com/uploads/2018/01/cityguide-final-1.zip