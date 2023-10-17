---
lang: ko-KR
title: Augmented Reality in Android with Google’s Face API
description: 🅺Kodeco - Android & Kotlin > Augmented Reality in Android with Google’s Face API
tags: ["crashcourse", "kotiln", "android"]
meta:
  - name: 🅺Kodeco - Android & Kotlin > Augmented Reality in Android with Google’s Face API
    content: Augmented Reality in Android with Google’s Face API
  - property: og:title
    content: Augmented Reality in Android with Google’s Face API
  - property: og:description
    content: 🅺Kodeco - Android & Kotlin > Augmented Reality in Android with Google’s Face API
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/kodeco-kotlin-android/523-augmented-reality-in-android-with-google-s-face-api.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Augmented Reality in Android with Google’s Face API
desc: You’ll build a Snapchat Lens-like app called FaceSpotter which draws cartoony features over faces in a camera feed using augmented reality. 
link: https://www.kodeco.com/523-augmented-reality-in-android-with-google-s-face-api
logo: https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-ar-vr-android-847ca6fdd6f2a12866d7e3b66eb5ecf5420ad5695418a64c57f800b1ad89a4d3.svg
color: rgba(0, 184, 126, 0.2)
```

If you’ve ever used [Snapchat’s “Lenses” feature](https://support.snapchat.com/en-US/a/lenses1), you’ve used a combination of __augmented reality__ and __face detection__.

Augmented reality — _AR_ for short — is technical and an impressive-sounding term that simply describes real-world images overlaid with computer-generated ones. As for face detection, it’s nothing new for humans, but finding faces in images is still a new trick for computers, especially _handheld_ ones.

Writing apps that feature AR and face detection used to require serious programming chops, but with Google’s [Mobile Vision](https://developers.google.com/vision) suite of libraries and its [Face API](https://developers.google.com/vision/face-detection-concepts), it’s much easier.

In this augmented reality tutorial, you’ll build a Snapchat Lens-like app called __FaceSpotter__. FaceSpotter draws cartoony features over faces in a camera feed.

In this tutorial, you’ll learn how to:

- Incorporate Google’s Face API into your own apps
- Programmatically identify and track human faces from a camera feed
- Identify points of interest on faces, such as eyes, ears, nose, and mouth
- Draw text and graphics over images from a camera feed


::: tip Note

This tutorial assumes you’re experienced in Android development with Java. If you’re new to the Android world or are not familiar with Android Studio, please have a look at our [Android tutorials](https://www.raywenderlich.com/android-tutorials).

:::

---

## What can Google’s Face API do?

Google’s Face API performs _face detection_, which locates faces in pictures, along with their __position__ (where they are in the picture) and orientation (which way they’re facing, relative to the camera). It can detect [landmarks](https://developers.google.com/vision/face-detection-concepts#landmarks) (points of interest on a face) and perform [classifications](https://developers.google.com/vision/face-detection-concepts#classification) to determine whether the eyes are open or closed, and whether or not a face is smiling. The Face API also detects and follows faces in moving images, which is known as _face tracking_.

Note that the Face API is limited to detecting human faces in pictures. Sorry, cat bloggers…

![sad cat](https://koenig-media.raywenderlich.com/uploads/2017/04/sad-cat.jpg)

The Face API _doesn’t_ perform face recognition, which connects a given face to an identity. It can’t perform that Facebook trick of detecting a face in an image and then identifying that person.

Once you’re able to detect a face, its position and its landmarks in an image, you can use that data to augment the image with your own reality! Apps like Pokemon GO, or Snapchat make use of augmented reality to give users a fun way to use their cameras, and so can you!

---

## Getting Started

Download the __FaceSpotter__ starter project [here](https://koenig-media.raywenderlich.com/uploads/2017/05/FaceSpotter-starter-5.zip) and open it in Android Studio. Build and run the app, and it will ask for permission to use the camera.

![Augmented Reality -Screenshot of FaceSpotter, showing a dialog asking 'Allow FaceSpotter to take pictures and record video?' with two buttons labeled 'DENY' and 'ALLOW'.](https://koenig-media.raywenderlich.com/uploads/2017/05/camera-permission-request.jpg =240x)

Click __ALLOW__, then point the camera at someone’s face.

![Augmented Reality -FaceSpotter Starter](https://koenig-media.raywenderlich.com/uploads/2017/05/facespotter-screenshot-01-1.jpg =240x)

The button in the app’s lower left-hand corner toggles between front and back camera.

This project was made so that you can start using face detection and tracking quickly. Let’s review what’s included.

### Project Dependencies

Open the project’s <FontIcon icon="iconfont icon-folder"/>`app`/<FontIcon icon="iconfont icon-file"/>`build.gradle`:

![Screenshot of the Project pane in Android studio, showing 'build.gradle (Module:app)' highlighted.](https://koenig-media.raywenderlich.com/uploads/2017/04/build.gradle-app-in-project-pane.jpg)

At the end of the `dependencies` section, you’ll see the following:

```gradle
implementaion 'com.google.android.gms:play-services-vision:10.2.0'
implementaion 'com.android.support:design:25.2.0'
```

The first of these lines imports the [Android Vision API](https://developers.google.com/android/reference/com/google/android/gms/vision/package-summary), which supports not just face detection, but barcode detection and text recognition as well.

The second brings in the [Android Design Support Library](https://developer.android.com/training/material/design-library.html), which provides the [Snackbar](https://developer.android.com/reference/android/support/design/widget/Snackbar.html) widget that informs the user that the app needs access to the cameras.

### Using the Cameras

FaceSpotter specifies that it uses the camera and requests the user’s permission to do so with these lines in <FontIcon icon="iconfont icon-file"/> `AndroidManifest.xml`:

![Screenshot of the Project pane in Android studio, showing 'AndroidManifest.xml' highlighted.](https://koenig-media.raywenderlich.com/uploads/2017/04/androidmanifest.xml-in-project-pane.jpg)

```xml
<uses-feature android:name="android.hardware.camera" />
<uses-permission android:name="android.permission.CAMERA" />
```

### Pre-defined Classes

The starter project comes with a few pre-defined classes:

- __FaceActivity__: The main activity of the app which shows the camera preview.
- __FaceTracker__: Follows faces that are detected in images from the camera, and gathers their positions and landmarks.
- __FaceGraphic__: Draws the computer-generated images over faces in the camera images.
- __FaceData__: A data class for passing `FaceTracker` data to `FaceGraphic`.
- __EyePhysics__: Provided by Google in their [<FontIcon icon="iconfont icon-github"/> Mobile Vision sample apps on GitHub](https://github.com/googlesamples/android-vision), it’s a simple physics engine that will animate the AR irises as the faces they’re on move.
- __CameraSourcePreview__: Another class from Google. It displays the live image data from the camera in a view.
- __GraphicOverlay__: One more Google class; FaceGraphic subclasses it.

Let’s take a moment to get familiar with how they work.

`FaceActivity` defines the app’s only activity, and along with handling touch events, also requests for permission to access the device’s camera at runtime (applies to Android 6.0 and above). FaceActivity also creates two objects which FaceSpotter depends on, namely __CameraSource__ and __FaceDetector__.

Open <FontIcon icon="iconfont icon-file"/> `FaceActivity.java` and look for the `createCameraSource` method:

```java
private void createCameraSource() {
  Context context = getApplicationContext();
  
  // 1
  FaceDetector detector = createFaceDetector(context);

  // 2
  int facing = CameraSource.CAMERA_FACING_FRONT;
  if (!mIsFrontFacing) {
    facing = CameraSource.CAMERA_FACING_BACK;
  }

  // 3
  mCameraSource = new CameraSource.Builder(context, detector)
    .setFacing(facing)
    .setRequestedPreviewSize(320, 240)
    .setRequestedFps(60.0f)
    .setAutoFocusEnabled(true)
    .build();
}
```

Here’s what the above code does:

- `setFacing`: Specifies which camera to use.
- `setRequestedPreviewSize`: Sets the resolution of the preview image from the camera. Lower resolutions (like the 320×240 resolution specified) work better with budget devices and provide faster face detection. Higher resolutions (640×480 and higher) are for higher-end devices and offer better detection of small faces and facial features. Try out different settings.
- `setRequestedFps`: Sets the camera frame rate. Higher rates mean better face tracking, but use more processor power. Experiment with different frame rates.
- `setAutoFocusEnabled`: Turns autofocus off or on. Keep this set to true for better face detection and user experience. This has no effect if the device doesn’t have autofocus.

1. Creates a `FaceDetector` object, which detects faces in images from the camera’s data stream.
2. Determines which camera is currently the active one.
3. Uses the results of steps 1 and 2 and the [_Builder pattern_](http://www.javaworld.com/article/2074938/core-java/too-many-parameters-in-java-methods-part-3-builder-pattern.html) to create the camera source. The builder methods are:

Now let’s check out the `createFaceDetector` method:

```java
@NonNull
private FaceDetector createFaceDetector(final Context context) {
  // 1
  FaceDetector detector = new FaceDetector.Builder(context)
    .setLandmarkType(FaceDetector.ALL_LANDMARKS)
    .setClassificationType(FaceDetector.ALL_CLASSIFICATIONS)
    .setTrackingEnabled(true)
    .setMode(FaceDetector.FAST_MODE)
    .setProminentFaceOnly(mIsFrontFacing)
    .setMinFaceSize(mIsFrontFacing ? 0.35f : 0.15f)
    .build();

  // 2 
  MultiProcessor.Factory<Face> factory = new MultiProcessor.Factory<Face>() {
    @Override
    public Tracker<Face> create(Face face) {
      return new FaceTracker(mGraphicOverlay, context, mIsFrontFacing);
    }
  };

  // 3
  Detector.Processor<Face> processor = new MultiProcessor.Builder<>(factory).build();
  detector.setProcessor(processor);

  // 4
  if (!detector.isOperational()) {
    Log.w(TAG, "Face detector dependencies are not yet available.");

    // Check the device's storage.  If there's little available storage, the native
    // face detection library will not be downloaded, and the app won't work,
    // so notify the user.
    IntentFilter lowStorageFilter = new IntentFilter(Intent.ACTION_DEVICE_STORAGE_LOW);
    boolean hasLowStorage = registerReceiver(null, lowStorageFilter) != null;

    if (hasLowStorage) {
      Log.w(TAG, getString(R.string.low_storage_error));
      DialogInterface.OnClickListener listener = new DialogInterface.OnClickListener() {
        public void onClick(DialogInterface dialog, int id) {
          finish();
        }
      };
      AlertDialog.Builder builder = new AlertDialog.Builder(this);
      builder.setTitle(R.string.app_name)
        .setMessage(R.string.low_storage_error)
        .setPositiveButton(R.string.disappointed_ok, listener)
        .show();
    }
  }
  return detector;
}
```

Taking the above comment-by-comment:

- __setLandmarkType__: Set to `NO_LANDMARKS` if it should not detect facial landmarks (this makes face detection faster) or `ALL_LANDMARKS` if landmarks should be detected.
- __setClassificationType__: Set to `NO_CLASSIFICATIONS` if it should not detect whether subjects’ eyes are open or closed or if they’re smiling (which speeds up face detection) or `ALL_CLASSIFICATIONS` if it should detect them.
- __setTrackingEnabled__: Enables/disables face tracking, which maintains a consistent ID for each face from frame to frame. Since you need face tracking to process live video and multiple faces, set this to true.
- __setMode__: Set to `FAST_MODE` to detect fewer faces (but more quickly), or `ACCURATE_MODE` to detect more faces (but more slowly) and to detect the Euler Y angles of faces (we’ll cover this topic later).
- __setProminentFaceOnly__: Set to `true` to detect only the most prominent face in the frame.
- __setMinFaceSize__: Specifies the smallest face size that will be detected, expressed as a proportion of the width of the face relative to the width of the image.

1. Creates a `FaceDetector` object using the Builder pattern, and sets the following properties:
2. Creates a [factory](https://en.wikipedia.org/wiki/Factory_method_pattern) class that creates new `FaceTracker` instances.
3. When a face detector detects a face, it passes the result to a __processor__, which determines what actions should be taken. If you wanted to deal with only one face at a time, you’d use an instance of [`Processor`](https://developers.google.com/android/reference/com/google/android/gms/vision/Detector.Processor). In this app, you’ll handle _multiple_ faces, so you’ll create a [`MultiProcessor`](https://developers.google.com/android/reference/com/google/android/gms/vision/MultiProcessor) instance, which creates a new `FaceTracker` instance for each detected face. Once created, we connect the processor to the detector.
4. The face detection library downloads as the app is installed. It’s large enough that there’s a chance that it may not be downloaded when the user runs the app for the first time. This code handles that case, as well as the when the device doesn’t have enough storage for the library.

With the intro taken care of, it’s time to detect some faces!

---

## Finding Faces

---

## Landmarks Ahoy!

---

## Classifications

---

## Giving Faces the Cartoon Treatment

---

## What’s Your Angle?

---

## Bouncing Irises

---

## Where to Go From Here?

---
