---
lang: ko-KR
title: 안드로이드 MotionLayout
description: Article(s) > 안드로이드 MotionLayout
icon: fa-brands fa-android
category: 
  - Java
  - Android
  - Article(s)
tag: 
  - blog
  - blog.gangnamunni.com
  - java
  - android
  - motionlayout
head:
  - - meta:
    - property: og:title
      content: Article(s) > 안드로이드 MotionLayout
    - property: og:description
      content: 안드로이드 MotionLayout
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/blog.gangnamunni.com/motionlayout.html
prev: /programming/java-android/articles/README.md
date: 2019-12-03
isOriginal: false
cover: https://blog.gangnamunni.com/_nuxt/img/ae65a45.jpg
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
  name="안드로이드 MotionLayout"
  desc="Android MotionLayout 사용해보기"
  url="https://blog.gangnamunni.com/post/MotionLayout/"
  logo="https://blog.gangnamunni.com/favicon.ico"
  preview="https://blog.gangnamunni.com/_nuxt/img/ae65a45.jpg"/>

## Android MotionLayout

안드로이드에서는 아래와 같은 툴을 사용해서 애니메이션 처리를 할 수 있었습니다.

- Animated Vector Drawable
- Property Animation Framework
- LayoutTransition Animation
- Layout transitions with TransitionManager
- CoordinatorLayout

그리고 2018년에 구글에서는 MotionLayout 이라는 새로운 애니메이션 툴을 발표했습니다.

지금부터 MotionLayout 을 한번 훑어보려 합니다.

---

## MotionLayout 특징

1. MotionLayout 은 ConstraintLayout 을 상속받은 ViewGroup 입니다.
2. MotionLayout 은 property animation framework, TransitionManger, CoordinatorLayout 의 혼합체 라고 할 수 있습니다.
3. TransitionManager 와 같이 두 layout 간의 변화를 애니메이션 처리 할 수 있습니다.
4. Property Animation 과 같이 View의 속성을 애니메이션 처리 할 수 있습니다.
5. CoordinatorLayout 과 같이 사용자의 터치에 따라 반응하는 애니메이션 처리 할 수 있습니다.
6. Fully Declarative 합니다. 애니메이션에 관한 모든것을 XML 으로 선언가능합니다.
7. ConstraintLayout 2.0에 포함되어 있으며, support library 로 Api level 14이상에서 호환됩니다. (2019.9.29 현재 ConstraintLayout 2.0 은 베타로 사용가능)
8. TransitionManager 는 Nested Layout 이나 Activity Transition 에도 사용가능하나, MotionLayout 은 직접적인 하위 view 들에게만 적용 가능합니다.

*결론적으로, MotionLayout 은 한 번 시작하면 끝날때 까지 컨트롤할 수 없는 애니메이션이 아닌, UI Element 와 사용자가 실시간으로 상호작용하는 애니메이션 처리가 필요 할 때 적절한 선택으로 보입니다.*

이후로는 아래와 같은 순서로 정리하겠습니다.

- MotionLayout 구조
- 기본 사용 예제
- ConstraintSet 사용 예제
- KeyFrameSet 사용 예제
- 각종 속성 설명
- 안드로이드 OS 퀵메뉴 만들어보기

---

## MotionLayout 구조

![](https://static.blog.gangnamunni.com/files/ee923615-d6b1-4380-a654-c92e14bc0c13)

MotionLayout 은 MotionScene 을 레퍼런싱 하고, 애니메이션 관련된 모든 것은 이 MotionScene 에 정의됩니다.

`ConstraintSet` 은 `Constraint` 정의를 위한 별도의 layout xml 파일을 만들 필요 없이 직접 `Constraint` 를 정의할 때 사용할 수 있습니다. 타겟 뷰의 크기와 위치를 선언할 수 있으며, `CustomAttribute` 를 통해 타겟 뷰의 다른 속성들도 정의할 수 있습니다.

`Transition` 은 애니메이션의 시작과 끝 `Constraint` 를 정의하고, duration 등의 기타 애니메이션 속성들을 정의합니다. 사용자와 인터랙션할 수 있는 `OnClick` 과 `OnSwipe` 핸들러를 등록할 수 있으며, `KeyFrameSet` 을 통해 애니메이션의 시작과 끝 뿐만 아니라 그 사이 지점들의 `Constraint` 를 정의할 수 있습니다.

*자세한 속성들에 대한 설명 이전에 일단은 MotionLayout 을 사용해서 간단한 애니메이션을 구현하는 예제를 살펴보려 합니다.*

---

## MotionLayout 기본 예제

![](https://static.blog.gangnamunni.com/files/b920d635-8d64-437e-9ba4-52dbddf6b99c)

위와 같이 터치에 따라 움직이는 뷰를 만들기 위해 먼저 MotionLayout xml 파일을 만듭니다.

::: tabs

@tab:active <FontIcon icon="iconfont icon-code"/>`motion_layout_ex1.xml`

`id:button` 인 View 가 애니메이션 할 대상이며, 위치에 대한 정의는 하지 않아도 됩니다. `MotionLayout` 의 `app:layoutDescription` 속성으로 `scene_01` 을 설정해 주었는데, 바로 모든 애니메이션 관련 내용이 들어갈 `MotionScene` 을 정의한 파일입니다.

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.motion.widget.MotionLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/motionLayout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    app:layoutDescription="@xml/scene_01"
    tools:showPaths="true">

    <View
        android:id="@+id/button"
        android:layout_width="64dp"
        android:layout_height="64dp"
        android:background="@color/colorAccent" />

</androidx.constraintlayout.motion.widget.MotionLayout>
```

@tab <FontIcon icon="iconfont icon-code"/>`scene_01.xml`

`MotionScene` 안에 `Transition` 을 정의하고, `motion:constraintSetStart` 와 `motion:constraintSetEnd` 속성으로 layout 들을 설정해주었습니다. 이 layout 들은 각각 애니메이션의 시작과 끝의 View 의 위치를 정의해놓은 파일입니다.

그리고 `Transition` 안에 `OnSwipe` 핸들러를 정의해 사용자의 터치에 반응하도록 하였습니다. `motion:touchAnchorId` 로 애니메이션 처리할 뷰의 id 를 등록해 주었으며, 그 외의 속성들은 간단한 사용법만을 전달하기 위해 뒤에서 다루겠습니다.

```xml
<?xml version="1.0" encoding="utf-8"?>
<MotionScene xmlns:motion="http://schemas.android.com/apk/res-auto">

    <Transition
        motion:constraintSetEnd="@layout/motion_cl_end"
        motion:constraintSetStart="@layout/motion_cl_start">

        <OnSwipe
            motion:dragDirection="dragLeft"
            motion:touchAnchorId="@+id/button"
            motion:touchAnchorSide="right"/>

    </Transition>
</MotionScene>
```

@tab <FontIcon icon="iconfont icon-code"/>`motion_cl_*.xml`

> <FontIcon icon="iconfont icon-code"/>`motion_cl_start.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <View
        android:id="@+id/button"
        android:layout_width="64dp"
        android:layout_height="64dp"
        android:layout_marginStart="8dp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

> <FontIcon icon="iconfont icon-code"/>`motion_cl_end.xml`

`Transition` 에 정의해둔 애니메이션의 시작과 끝 layout xml 파일입니다.

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <View
        android:id="@+id/button"
        android:layout_width="64dp"
        android:layout_height="64dp"
        android:layout_marginEnd="8dp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

:::

이것으로 끝입니다.  다음에는 `ConstraintSet` 사용 예제를 보겠습니다.

---

## ConstraintSet 사용 예제

![](https://static.blog.gangnamunni.com/files/66d3f540-6882-41e1-80ec-17f3ef0a09b6)

::: tabs

@tab:active <FontIcon icon="iconfont icon-code"/>`motion_layout_ex2.xml`

동일하게 MotionLayout layout xml 을 만들고, `layoutDescription` 으로 <FontIcon icon="iconfont icon-code"/>`scene_02.xml` 을 참조해주었습니다.

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.motion.widget.MotionLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:id="@+id/motionLayout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    app:layoutDescription="@xml/scene_02"
    app:showPaths="true">

    <View
        android:id="@+id/button"
        android:layout_width="64dp"
        android:layout_height="64dp"
        android:background="@color/colorAccent" />

</androidx.constraintlayout.motion.widget.MotionLayout>
```

@tab <FontIcon icon="iconfont icon-code"/>`scene_02.xml`

기본예제와 다르게, `Transition` 의 `motion:constraintSetStart`, `motion:constraintSetEnd` 속성에 레이아웃 파일이 아닌 `ConstraintSet` 의 id를 설정해주었습니다. `Constraint` 에는 `layout_height` 가 변경되도록 설정하고 `CustomAttribute` 로 `backgroundColor` 도 설정해주었습니다. `CustomAttribute` 는 타겟 뷰가 가지고 있는 여러 속성들을 설정해줄 수 있습니다. `attributeName` 은 타겟뷰의 getter/setter 메소드명과 동일하게 해주면 되고, value 는 color, Integer, Float, Dimension, String 등 값을 설정해줄 수 있습니다.

즉, 타겟뷰를 커스텀뷰로 만들고 `setFaceSize(size: Int)` 라는 메소드를 만들면 `motion:attributeName=”faceSize”`, `motion:customIntegerValue=”10”` 이런식으로 자유도 높게 사용할 수 있습니다.

```xml
<?xml version="1.0" encoding="utf-8"?>
<MotionScene xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:motion="http://schemas.android.com/apk/res-auto">

    <Transition
        motion:constraintSetEnd="@id/end"
        motion:constraintSetStart="@id/start"
        motion:motionInterpolator="linear">

        <OnSwipe
            motion:dragDirection="dragLeft"
            motion:touchAnchorId="@+id/button"
            motion:touchAnchorSide="right" />
    </Transition>

    <!--  ConstraintSet 을 통해 background color 조정  -->
    <ConstraintSet android:id="@+id/start">
        <Constraint
            android:id="@+id/button"
            android:layout_width="64dp"
            android:layout_height="64dp"
            android:layout_marginStart="8dp"
            motion:layout_constraintBottom_toBottomOf="parent"
            motion:layout_constraintStart_toStartOf="parent"
            motion:layout_constraintTop_toTopOf="parent">

            <CustomAttribute
                motion:attributeName="backgroundColor"
                motion:customColorValue="@color/colorPrimary" />

        </Constraint>
    </ConstraintSet>

    <ConstraintSet android:id="@+id/end">
        <Constraint
            android:id="@+id/button"
            android:layout_width="64dp"
            android:layout_height="32dp"
            android:layout_marginEnd="8dp"
            motion:layout_constraintBottom_toBottomOf="parent"
            motion:layout_constraintEnd_toEndOf="parent"
            motion:layout_constraintTop_toTopOf="parent">

            <CustomAttribute
                motion:attributeName="backgroundColor"
                motion:customColorValue="@color/colorAccent" />

        </Constraint>
    </ConstraintSet>
</MotionScene>
```

:::

`ConstraintSet` 사용법을 간단히 살펴보았습니다.

다음은 `ConstraintSet` 과 `ImageFilterView` 를 같이 사용해보겠습니다.

---

## `ConstraintSet` 과 `ImageFilterView` 사용 예제

![](https://static.blog.gangnamunni.com/files/b3562453-7d14-4df1-9d9f-8ad250d66afa)

타겟뷰에 `ImageFilterView` 를 사용해서 이미지가 변경되는 애니메이션을 만들어보겠습니다.

::: tabs

@tab:active <FontIcon icon="iconfont icon-code"/>`motion_layout_ex3.xml`

타겟뷰에 `ImageFilterView` 를 사용했습니다. `ImageFilterView` 는 `AppCompatImageView` 를 상속받는 뷰로 이미지에 여러가지 효과를 줄 수 있는 뷰입니다. `src` 에 변경전 이미지를, `altSrc` 에 변경후 이미지를 세팅해주었습니다. (png 이든 벡터 이미지든 상관없이 정상동작합니다)

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.motion.widget.MotionLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:id="@+id/motionLayout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    app:layoutDescription="@xml/scene_03"
    app:showPaths="true">

    <androidx.constraintlayout.utils.widget.ImageFilterView
        android:id="@+id/image"
        android:layout_width="64dp"
        android:layout_height="64dp"
        android:background="@color/white"
        android:src="@drawable/ic_999_icon_gnb_info_off"
        app:altSrc="@drawable/ic_999_icon_gnb_info_on" />

</androidx.constraintlayout.motion.widget.MotionLayout>
```

@tab <FontIcon icon="iconfont icon-code"/>`scene_03.xml`

이번에는 `CustomAttribute` 에 crossfade 라는 속성을 설정해주었습니다. `ImageFilterView` 에는 `public void setCrossfade(float crossfade)` 라는 함수가 있기에 가능한 것입니다.

```xml
<?xml version="1.0" encoding="utf-8"?>
<MotionScene xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:motion="http://schemas.android.com/apk/res-auto">

    <Transition
        motion:constraintSetEnd="@id/end"
        motion:constraintSetStart="@id/start"
        motion:motionInterpolator="linear">

        <OnSwipe
            motion:dragDirection="dragLeft"
            motion:touchAnchorId="@+id/image"
            motion:touchAnchorSide="right" />
    </Transition>

    <ConstraintSet android:id="@+id/start">
        <Constraint
            android:id="@+id/image"
            android:layout_width="64dp"
            android:layout_height="64dp"
            android:layout_marginStart="8dp"
            motion:layout_constraintBottom_toBottomOf="parent"
            motion:layout_constraintStart_toStartOf="parent"
            motion:layout_constraintTop_toTopOf="parent">

        <CustomAttribute
            motion:attributeName="crossfade"
            motion:customFloatValue="0" />

        </Constraint>
    </ConstraintSet>

    <ConstraintSet android:id="@+id/end">
        <Constraint
            android:id="@+id/image"
            android:layout_width="64dp"
            android:layout_height="64dp"
            android:layout_marginEnd="8dp"
            motion:layout_constraintBottom_toBottomOf="parent"
            motion:layout_constraintEnd_toEndOf="parent"
            motion:layout_constraintTop_toTopOf="parent">

        <CustomAttribute
            motion:attributeName="crossfade"
            motion:customFloatValue="1" />

        </Constraint>
    </ConstraintSet>
</MotionScene>
```

:::

---

## KeyFrameSet 사용 예제

![](https://static.blog.gangnamunni.com/files/c9058dbd-2de3-45b9-b914-d1735cf0dcc9)

`MotionLayout` 의 기본 아이디어는 애니메이션의 시작과 끝의 상태인 “resting state” 를 `ConstraintSet` 으로 구현하는 것입니다. 여기에 `KeyFrameSet` 을 사용하면 시작과 끝 사이지점의 상태 또한 구현할 수 있습니다. (이는 resting state 는 아니고 단순히 지나가는 state 입니다.)

::: tabs

@tab:active <FontIcon icon="iconfont icon-code"/>`motion_layout_ex4.xml`

`layoutDescription` 으로 <FontIcon icon="iconfont icon-code"/>`scene_04.xml` 을 설정해주었습니다.

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.motion.widget.MotionLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:id="@+id/motionLayout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    app:layoutDescription="@xml/scene_04"
    app:showPaths="true">

    <View
        android:id="@+id/button"
        android:layout_width="64dp"
        android:layout_height="64dp"
        android:background="@color/colorAccent" />

</androidx.constraintlayout.motion.widget.MotionLayout>
```

@tab <FontIcon icon="iconfont icon-code"/>`scene_04.xml`

`<Transition>` 안의<`KeyFrameSet>` 이라는 태그를 주목해서 보겠습니다.

`<KeyFrameSet>` 에 `<KeyAttribute>`와 `<KeyPosition>`을 세팅해주었습니다.

`<KeyPosition>` 은 레이아웃 위치를 설정할 때 사용할 수 있습니다. `motion:motionTarget` 속성으로 애니메이팅할 타겟뷰를 설정해주고, `motion:keyPositionType` 으로 `parentRelative` 을 설정했습니다. 이는 타겟뷰의 위치를 부모뷰와의 상대적 위치로 계산합니다. `motion:percentY` 를 0.25로 설정해줌으로, 부모뷰의 상단부터 하단까지의 25% 인 지점에 위치하도록 합니다. `motion:framePosition` 으로 전체 애니메이션의 시작과 끝 사이 어느위치에서의 상태인지를 설정합니다. 50으로 해 주었으니 전체 애니메이션의 딱 중간 부분을 나타냅니다.

`<KeyAttribute>` 는 레이아웃 위치 이후 뷰의 속성들을 설정할 때 사용할 수 있습니다. 예제에서는 scale 을 2로 해서 뷰의 크기를 2배로 높였고, rotation 은 반시계방향으로 45도 회전하도록 해주었습니다.

```xml
<?xml version="1.0" encoding="utf-8"?>
<MotionScene xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:motion="http://schemas.android.com/apk/res-auto">

    <Transition
        motion:constraintSetEnd="@id/end"
        motion:constraintSetStart="@id/start"
        motion:motionInterpolator="linear">

        <OnSwipe
            motion:dragDirection="dragLeft"
            motion:touchAnchorId="@+id/button"
            motion:touchAnchorSide="right" />

        <KeyFrameSet>
            <KeyAttribute
                android:rotation="-45"
                android:scaleX="2"
                android:scaleY="2"
                motion:framePosition="50"
                motion:motionTarget="@+id/button" />
        
            <KeyPosition
                motion:framePosition="50"
                motion:keyPositionType="parentRelative"
                motion:motionTarget="@+id/button"
                motion:percentY="0.25" />
        </KeyFrameSet>
    </Transition>

    <ConstraintSet android:id="@+id/start">
        <Constraint
            android:id="@+id/button"
            android:layout_width="64dp"
            android:layout_height="64dp"
            android:layout_marginStart="8dp"
            motion:layout_constraintBottom_toBottomOf="parent"
            motion:layout_constraintStart_toStartOf="parent"
            motion:layout_constraintTop_toTopOf="parent">

            <CustomAttribute
                motion:attributeName="backgroundColor"
                motion:customColorValue="@color/colorPrimary" />

        </Constraint>
    </ConstraintSet>

    <ConstraintSet android:id="@+id/end">
        <Constraint
            android:id="@+id/button"
            android:layout_width="64dp"
            android:layout_height="64dp"
            android:layout_marginEnd="8dp"
            motion:layout_constraintBottom_toBottomOf="parent"
            motion:layout_constraintEnd_toEndOf="parent"
            motion:layout_constraintTop_toTopOf="parent">

            <CustomAttribute
                motion:attributeName="backgroundColor"
                motion:customColorValue="@color/colorAccent" />

        </Constraint>
    </ConstraintSet>
</MotionScene>
```

:::

*지금까지 기본예제, `ConstraintSet` 사용 예제, `KeyFrameSet` 사용 예제를 다루어보았습니다. 다음은 `MotionLayout`, `MotionScene` 과 관련된 여러가지 속성들을 더 자세히 다루어보겠습니다.*

---

## 속성

::: tabs

@tab:active MotionLayout

- `app:layoutDescription=”reference”` MotionScene xml 파일을 설정합니다.
- `app:applyMotionScene=”boolean”` MotionScene 을 적용할지 여부 (기본값은 true)
- `app:showPaths=”boolean”`모션 path 를 보여줄지 여부. true 로 설정시 타겟 뷰가 움직이는 방향이 UI상에 점선으로 표시됩니다. (실제 배포할 때는 false 로 해줘야 합니다!)
- `app:progress=”float”`Transition progress 를 강제설정합니다. (0~1)
- `app:currentState=”reference”`특정 ConstraintSet 으로 강제설정합니다.
- 기타 ConstraintLayout 의 속성들

@tab Transition

- `motion:constraintSetStart`시작 ConstraintSet 또는 Constraint 값들을 가져올 layout xml 파일을 설정합니다.
- `motion:constraintSetEnd`끝 ConstraintSet 또는 Constraint 값들을 가져올 layout xml 파일을 설정합니다.
- `motion:motionInterpolator`전체 애니메이션의 보간처리 할 방법을 설정합니다.
  - ex) linear, easeIn, easeOut 등등
- `motion:duration`애니메이션 진행시간을 설정합니다. Transition 의 `<OnSwipe>` 핸들러에 대해서는 동작하지 않고 `<OnClick>` 을 설정 해주었을 때만 동작합니다.
- `motion:autoTransition`한 state 에서 다른 state 로 자동으로 이동하도록 설정합니다.
- `jumpToStart`: 끝 sate 에 도달시 시작 state 로 한번에 이동합니다.
- `jumpToEnd`: 시작 state 일시 끝 state 로 한번에 이동합니다.
- `animateToStart`: 끝 state 에 도달시 시작 state 로 애니메이션을 실행합니다.
- `animateToEnd`: 시작 state 일시 끝 state 로 애니메이션을 실행합니다.

@tab OnClick

- `motion:motionTarget`타겟 뷰의 id 를 설정합니다.
- `motion:clickAction`클릭시 애니메이션의 실행방향을 설정합니다.
  - `{toggle | transitionToEnd | transitionToStart | jumpToEnd | jumpToStart}`

@tab OnSwipe

- `motion:touchAnchorId`애니메이팅 할 타겟 뷰의 id 를 설정합니다.
- `motion:touchRegionId`터치 범위를 제한합니다. 기본적으로 MotionLayout 전체를 터치할 수 있지만, 특정 뷰를 설정해주어, 해당 뷰 안에서만 터치할 수 있도록 할 때 유용합니다.
- `motion:touchAnchorSide`움직일 뷰의 측면을 설정해줍니다.
  - `{top | left | right | bottom}`
- `motion:dragDirection`스와이프 할 방향을 설정합니다.
  - `{dragUp | dragDown | dragLeft | dragRight}`
- `motion:dragScale`스와이프 거리 factor 를 설정합니다. 0.5로 설정시 스와이프 거리를 2배로 해야 합니다. (실험해보았으나 왜 인지 현재는 작동은 하지 않는 속성이었습니다.)
- `motion:moveWhenScrollAtTop`타겟뷰가 Scroll 가능한 뷰 (`ScrollView`, `RecyclerView` 등)일 경우 스와이프를 하면 스크롤을 먼저 실행하고 스크롤이 최상단에 왔을 경우에 움직이도록 한다고 이해 했습니다만, 정상동작 확인은 못했습니다.

@tab Constraint

- `motion:transitionEasing`이 state 에서 애니메이션 시작시의 easing curve 설정
  - `{curve(1.0,0,0,1.0) | standard | accelerate | decelerate | linear }`
- `motion:pathMotionArc`이 state 와 다른 state 의 좌표상 x, y 위치가 모두 다를 경우 호를 그리며 움직이도록 설정
  - `{startVertical | startHorizontal | none }`
- `motion:transitionPathRotate`타겟 뷰가 path 를 따라감에 따라 회전되도록 설정
- 기타 `View` 의 기본 속성과 `ConstraintLayout` 기본 속성과 `<CustomAttribute>` 의 속성들

@tab KeyPosition

`KeyFrameSet` 의 `KeyPosition` 은 레이아웃 위치에 대한 설정

- `motion:motionTarget`타겟 뷰 id 설정
- `motion:framePosition`애니메이션의 0(시작) ~ 100(끝) 사이의 지점을 설정
- `motion:transitionEasing`이 KeyFrame 에서 애니메이션 시작시의 easing curve
  - `{curve(1.0,0,0,1.0) | standard | accelerate | decelerate | linear }`
- `motion:pathMotionArc`이 KeyFrame 과 다음 state 의 좌표상 x, y 위치가 모두 다를 경우 호를 그리며 움직이도록 설정
  - `{startVertical | startHorizontal | none }`
- `motion:keyPositionType`선형의 path 안에서 이 KeyFrame 의 레이아웃상의 위치를 계산하는 방법 설정
- `parentRelative`: 타겟 뷰의 부모 뷰를 기준으로 위치 계산
  - *ex) percentY=0.5 이면 부모뷰의 중앙 y 좌표에 위치*
- `deltaRelative`: 시작과 끝 state 의 x 또는 y 좌표의 delta(차이값)를 기준으로 위치 계산
  - *ex) 시작과 끝의 y 좌표가 100 px 만큼 차이날 때 percentY=0.5 이면 시작의 y 좌표에서 50 px 만큼* 하단에 위치
- `pathRelative`: 시작과 끝의 path 길이를 기준으로 위치 계산 
  - *ex) 전체 path 길이가 100 px 라고 할 때, percentY=0.5 이면 시작의 y좌표에서 50 px만큼 하단에 위치*
- `motion:percentX`X-좌표 상에서의 백분율 거리 (KeyPostionType 에 따라 다른 기준 적용)
- `motion:percentY`Y-좌표 상에서의 백분율 거리 (KeyPositionType 에 따라 다른 기준 적용)
- `motion:percentWidth`시작과 끝의 width 차이를 기준으로 한 백분율 width.  
  - *ex) width 차이가 100, percentWidth 가 2 라면 이 KeyFrame 에서의 width 는 200이 됨*
- `motion:percentHeight`시작과 끝의 height 차이를 기준으로 한 백분율 height(시작과 끝의 height 차이가 없는 경우 작동 안함)
- `motion:sizePercent`시작 size 를 기준으로 백분율 사이즈 (타겟 뷰가 고정사이즈인경우, CustomAttribute 의 scale 을 사용할 것).  
  - *ex) 시작시 size 가 100x100, sizePercent=2 이면 이 KeyFrame 에서의 size 는 200x200*

@tab KeyCycle

`KeyFrameSet` 의 `KeyCycle` 은 이전 state 에서 해당 `framePosition` 까지 특정 속성들을 진동시킨다.

- `motion:motionTarget`타겟 뷰 id 설정
- `motion:framePosition`애니메이션의 0(시작) ~ 100(끝) 사이의 지점을 설정
- `motion:waveShape`진동 웨이브의 모양
  - `{sin | square | triangle | sawtooth | reverseSawtooth | cos | bounce}`
- `motion:wavePeriod`이 `FrameSet` 까지의 진동 횟수
- `motion:waveOffset`해당 속성의 offset 값
- `<CustomAttribute>` 로 설정한 타겟 뷰의 커스텀 속성들(reflection 을 이용한 setter 함수의 이름을 이용합니다.)
- 뷰의 기본 속성들

@tab KeyAttribute

애니메이션중 해당 위치에서 레이아웃 이후 타겟 뷰의 속성들을 설정합니다.

- `motion:motionTarget`타겟 뷰 id 설정
- `motion:framePosition`애니메이션의 0(시작) ~ 100(끝) 사이의 지점을 설정
- `motion:transitionEasing`이 state 에서 애니메이션 시작시의 easing curve 설정
  - `{curve(1.0,0,0,1.0) | standard | accelerate | decelerate | linear }`
- `motion:transitionPathRotate`타겟 뷰가 path 를 따라감에 따라 회전되도록 설정
- 뷰의 기본 속성들
- `<CustomAttribute>` 로 설정한 타겟 뷰의 커스텀 속성들(reflection 을 이용한 setter 함수의 이름을 이용합니다.)

:::

*지금까지 각 태그들이 어떤 속성을 갖고 있는지 알아보았습니다.마지막으로 MotionLayout 을 사용해서 안드로이드 OS 퀵메뉴를 만들어보겠습니다.*

---

## 안드로이드 OS 퀵세팅 비스무리하게 따라해보기

![](https://static.blog.gangnamunni.com/files/e0e62e69-4d00-43cc-bba2-927e5554f729)

`MotionLayout` 을 이용해서 간단한 안드로이드 퀵세팅을 구현해보았습니다.

::: tabs

@tab <FontIcon icon="iconfont icon-code"/>`quick_setting_activity.xml`

움직일 아이콘 12개를 준비해주고, `layoutDescription` 으로 <FontIcon icon="iconfont icon-code"/>`scene_quick_setting.xml` 을 참조하도록 했습니다.

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.motion.widget.MotionLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/white"
    app:layoutDescription="@xml/scene_quick_setting"
    tools:motionProgress="0">

    <ImageView
        android:id="@+id/backgroundImage"
        android:layout_width="0dp"
        android:layout_height="0dp"
        android:adjustViewBounds="true"
        android:scaleType="centerCrop"
        android:src="@drawable/free_cat"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <View
        android:id="@+id/iconBackground"
        android:layout_width="0dp"
        android:layout_height="0dp"
        android:background="@color/quick_setting_background"
        app:layout_constraintBottom_toBottomOf="@+id/view9"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <!--  Row 1  -->
    <ImageView
        android:id="@+id/view1"
        android:layout_width="@dimen/quick_setting_icon_width"
        android:layout_height="wrap_content"
        android:adjustViewBounds="true"
        android:paddingBottom="30dp"
        android:scaleType="fitCenter"
        android:src="@drawable/ic_cake_black_24dp" />

    <ImageView
        android:id="@+id/view2"
        android:layout_width="@dimen/quick_setting_icon_width"
        android:layout_height="wrap_content"
        android:adjustViewBounds="true"
        android:paddingBottom="30dp"
        android:scaleType="fitCenter"
        android:src="@drawable/ic_fingerprint_black_24dp" />

    <ImageView
        android:id="@+id/view3"
        android:layout_width="@dimen/quick_setting_icon_width"
        android:layout_height="wrap_content"
        android:adjustViewBounds="true"
        android:paddingBottom="30dp"
        android:scaleType="fitCenter"
        android:src="@drawable/ic_volume_up_black_24dp" />

    <ImageView
        android:id="@+id/view4"
        android:layout_width="@dimen/quick_setting_icon_width"
        android:layout_height="wrap_content"
        android:adjustViewBounds="true"
        android:paddingBottom="30dp"
        android:scaleType="fitCenter"
        android:src="@drawable/ic_access_alarms_black_24dp" />

    <!--  Row 2  -->
    <ImageView
        android:id="@+id/view5"
        android:layout_width="@dimen/quick_setting_icon_width"
        android:layout_height="wrap_content"
        android:adjustViewBounds="true"
        android:paddingBottom="30dp"
        android:scaleType="fitCenter"
        android:src="@drawable/ic_airplanemode_active_black_24dp" />

    <ImageView
        android:id="@+id/view6"
        android:layout_width="@dimen/quick_setting_icon_width"
        android:layout_height="wrap_content"
        android:adjustViewBounds="true"
        android:paddingBottom="30dp"
        android:scaleType="fitCenter"
        android:src="@drawable/ic_bluetooth_black_24dp" />

    <ImageView
        android:id="@+id/view7"
        android:layout_width="@dimen/quick_setting_icon_width"
        android:layout_height="wrap_content"
        android:adjustViewBounds="true"
        android:paddingBottom="30dp"
        android:scaleType="fitCenter"
        android:src="@drawable/ic_bug_report_black_24dp" />

    <ImageView
        android:id="@+id/view8"
        android:layout_width="@dimen/quick_setting_icon_width"
        android:layout_height="wrap_content"
        android:adjustViewBounds="true"
        android:paddingBottom="30dp"
        android:scaleType="fitCenter"
        android:src="@drawable/ic_cloud_queue_black_24dp" />

    <!--  Row 3  -->
    <ImageView
        android:id="@+id/view9"
        android:layout_width="@dimen/quick_setting_icon_width"
        android:layout_height="wrap_content"
        android:adjustViewBounds="true"
        android:paddingBottom="30dp"
        android:scaleType="fitCenter"
        android:src="@drawable/ic_favorite_border_black_24dp" />

    <ImageView
        android:id="@+id/view10"
        android:layout_width="@dimen/quick_setting_icon_width"
        android:layout_height="wrap_content"
        android:adjustViewBounds="true"
        android:paddingBottom="30dp"
        android:scaleType="fitCenter"
        android:src="@drawable/ic_location_on_black_24dp" />

    <ImageView
        android:id="@+id/view11"
        android:layout_width="@dimen/quick_setting_icon_width"
        android:layout_height="wrap_content"
        android:adjustViewBounds="true"
        android:paddingBottom="30dp"
        android:scaleType="fitCenter"
        android:src="@drawable/ic_screen_rotation_black_24dp" />

    <ImageView
        android:id="@+id/view12"
        android:layout_width="@dimen/quick_setting_icon_width"
        android:layout_height="wrap_content"
        android:adjustViewBounds="true"
        android:paddingBottom="30dp"
        android:scaleType="fitCenter"
        android:src="@drawable/ic_thumb_up_black_24dp" />

</androidx.constraintlayout.motion.widget.MotionLayout>
```

@tab <FontIcon icon="iconfont icon-code"/>`scene_quick_setting.xml`

상하로 터치할 것이므로 `OnSwipe` 방향을 `dragDown` 으로 하고, `constraintSetStart` 와 `constraintSetEnd` 를 설정해주었습니다.

`ConstraintSet` 의 `start` 에는 아이콘 8개가 한 행으로 보이도록 하고 나머지 4개의 아이콘은 보이지 않도록 설정해주었습니다.

`ConstraintSet` 의 `end` 에는 3행 4열로 아이콘을 열거하고 모두 보이도록 설정해주었습니다.

```xml
<?xml version="1.0" encoding="utf-8"?>
<MotionScene xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:motion="http://schemas.android.com/apk/res-auto">

    <Transition
        motion:constraintSetEnd="@id/end"
        motion:constraintSetStart="@id/start"
        motion:motionInterpolator="linear">

        <OnSwipe
            motion:dragDirection="dragDown"
            motion:touchAnchorSide="bottom" />

        <KeyFrameSet>
        <!-- Row 1 -->

        <!-- Row 2 -->
            <KeyPosition
                motion:framePosition="50"
                motion:keyPositionType="deltaRelative"
                motion:motionTarget="@+id/view5"
                motion:percentX="0"
                motion:percentY="1" />

            <KeyPosition
                motion:framePosition="50"
                motion:keyPositionType="deltaRelative"
                motion:motionTarget="@+id/view6"
                motion:percentX="0"
                motion:percentY="1" />

            <KeyPosition
                motion:framePosition="50"
                motion:keyPositionType="deltaRelative"
                motion:motionTarget="@+id/view7"
                motion:percentX="0"
                motion:percentY="1" />

            <KeyPosition
                motion:framePosition="50"
                motion:keyPositionType="deltaRelative"
                motion:motionTarget="@+id/view8"
                motion:percentX="0"
                motion:percentY="1" />

            <!-- Row 3 -->

            <KeyPosition
                motion:framePosition="50"
                motion:keyPositionType="deltaRelative"
                motion:motionTarget="@+id/view9"
                motion:percentX="1"
                motion:sizePercent="1" />

            <KeyPosition
                motion:framePosition="50"
                motion:keyPositionType="deltaRelative"
                motion:motionTarget="@+id/view10"
                motion:percentX="1"
                motion:sizePercent="1" />

            <KeyPosition
                motion:framePosition="50"
                motion:keyPositionType="deltaRelative"
                motion:motionTarget="@+id/view11"
                motion:percentX="1"
                motion:sizePercent="1" />

            <KeyPosition
                motion:framePosition="50"
                motion:keyPositionType="deltaRelative"
                motion:motionTarget="@+id/view12"
                motion:percentX="1"
                motion:sizePercent="1" />

            <KeyAttribute
                android:alpha="0"
                motion:framePosition="70"
                motion:motionTarget="@+id/view9" />

            <KeyAttribute
                android:alpha="0"
                motion:framePosition="70"
                motion:motionTarget="@+id/view10" />

            <KeyAttribute
                android:alpha="0"
                motion:framePosition="70"
                motion:motionTarget="@+id/view11" />

            <KeyAttribute
                android:alpha="0"
                motion:framePosition="70"
                motion:motionTarget="@+id/view12" />
        </KeyFrameSet>
    </Transition>

    <ConstraintSet android:id="@+id/start">
        <!-- Row 1 -->
        <Constraint
            android:id="@+id/view1"
            android:layout_width="@dimen/quick_setting_icon_width_start"
            android:layout_height="wrap_content"
            android:layout_marginTop="20dp"
            android:visibility="visible"
            motion:layout_constraintEnd_toStartOf="@+id/view2"
            motion:layout_constraintHorizontal_chainStyle="spread"
            motion:layout_constraintStart_toStartOf="parent"
            motion:layout_constraintTop_toTopOf="parent" />

        <Constraint
            android:id="@+id/view2"
            android:layout_width="@dimen/quick_setting_icon_width_start"
            android:layout_height="wrap_content"
            android:layout_marginTop="20dp"
            android:visibility="visible"
            motion:layout_constraintEnd_toStartOf="@+id/view3"
            motion:layout_constraintStart_toEndOf="@+id/view1"
            motion:layout_constraintTop_toTopOf="parent" />

        <Constraint
            android:id="@+id/view3"
            android:layout_width="@dimen/quick_setting_icon_width_start"
            android:layout_height="wrap_content"
            android:layout_marginTop="20dp"
            android:visibility="visible"
            motion:layout_constraintEnd_toStartOf="@+id/view4"
            motion:layout_constraintStart_toEndOf="@+id/view2"
            motion:layout_constraintTop_toTopOf="parent" />

        <Constraint
            android:id="@+id/view4"
            android:layout_width="@dimen/quick_setting_icon_width_start"
            android:layout_height="wrap_content"
            android:layout_marginTop="20dp"
            android:visibility="visible"
            motion:layout_constraintEnd_toStartOf="@+id/view5"
            motion:layout_constraintStart_toEndOf="@+id/view3"
            motion:layout_constraintTop_toTopOf="parent" />

        <!-- Row 2 -->

        <Constraint
            android:id="@+id/view5"
            android:layout_width="@dimen/quick_setting_icon_width_start"
            android:layout_height="wrap_content"
            android:layout_marginTop="20dp"
            android:visibility="visible"
            motion:layout_constraintEnd_toStartOf="@+id/view6"
            motion:layout_constraintStart_toEndOf="@+id/view4"
            motion:layout_constraintTop_toTopOf="parent" />

        <Constraint
            android:id="@+id/view6"
            android:layout_width="@dimen/quick_setting_icon_width_start"
            android:layout_height="wrap_content"
            android:layout_marginTop="20dp"
            android:visibility="visible"
            motion:layout_constraintEnd_toStartOf="@+id/view7"
            motion:layout_constraintStart_toEndOf="@+id/view5"
            motion:layout_constraintTop_toTopOf="parent" />

        <Constraint
            android:id="@+id/view7"
            android:layout_width="@dimen/quick_setting_icon_width_start"
            android:layout_height="wrap_content"
            android:layout_marginTop="20dp"
            android:visibility="visible"
            motion:layout_constraintEnd_toStartOf="@+id/view8"
            motion:layout_constraintStart_toEndOf="@+id/view6"
            motion:layout_constraintTop_toTopOf="parent" />

        <Constraint
            android:id="@+id/view8"
            android:layout_width="@dimen/quick_setting_icon_width_start"
            android:layout_height="wrap_content"
            android:layout_marginTop="20dp"
            android:visibility="visible"
            motion:layout_constraintEnd_toEndOf="parent"
            motion:layout_constraintStart_toEndOf="@+id/view7"
            motion:layout_constraintTop_toTopOf="parent" />

        <!-- Row 3 -->

        <Constraint
            android:id="@+id/view9"
            android:layout_width="@dimen/quick_setting_icon_width"
            android:layout_height="wrap_content"
            android:visibility="gone"
            motion:layout_constraintEnd_toStartOf="@+id/view10"
            motion:layout_constraintHorizontal_chainStyle="spread"
            motion:layout_constraintStart_toStartOf="parent"
            motion:layout_constraintTop_toBottomOf="@+id/view5" />

        <Constraint
            android:id="@+id/view10"
            android:layout_width="@dimen/quick_setting_icon_width"
            android:layout_height="wrap_content"
            android:visibility="gone"
            motion:layout_constraintEnd_toStartOf="@+id/view11"
            motion:layout_constraintStart_toEndOf="@+id/view9"
            motion:layout_constraintTop_toBottomOf="@+id/view5" />

        <Constraint
            android:id="@+id/view11"
            android:layout_width="@dimen/quick_setting_icon_width"
            android:layout_height="wrap_content"
            android:visibility="gone"
            motion:layout_constraintEnd_toStartOf="@+id/view12"
            motion:layout_constraintStart_toEndOf="@+id/view10"
            motion:layout_constraintTop_toBottomOf="@+id/view5" />

        <Constraint
            android:id="@+id/view12"
            android:layout_width="@dimen/quick_setting_icon_width"
            android:layout_height="wrap_content"
            android:visibility="gone"
            motion:layout_constraintEnd_toEndOf="parent"
            motion:layout_constraintStart_toEndOf="@+id/view11"
            motion:layout_constraintTop_toBottomOf="@+id/view5" />

    </ConstraintSet>

    <ConstraintSet android:id="@+id/end">
        <!-- Row 1 -->
        <Constraint android:id="@+id/view1"
            android:layout_width="@dimen/quick_setting_icon_width"
            android:layout_height="wrap_content"
            android:layout_marginTop="20dp"
            android:visibility="visible"
            motion:layout_constraintEnd_toStartOf="@+id/view2"
            motion:layout_constraintHorizontal_chainStyle="spread"
            motion:layout_constraintStart_toStartOf="parent"
            motion:layout_constraintTop_toTopOf="parent" />

        <Constraint android:id="@+id/view2"
            android:layout_width="@dimen/quick_setting_icon_width"
            android:layout_height="wrap_content"
            android:layout_marginTop="20dp"
            android:visibility="visible"
            motion:layout_constraintEnd_toStartOf="@+id/view3"
            motion:layout_constraintStart_toEndOf="@+id/view1"
            motion:layout_constraintTop_toTopOf="parent" />

        <Constraint android:id="@+id/view3"
            android:layout_width="@dimen/quick_setting_icon_width"
            android:layout_height="wrap_content"
            android:layout_marginTop="20dp"
            android:visibility="visible"
            motion:layout_constraintEnd_toStartOf="@+id/view4"
            motion:layout_constraintStart_toEndOf="@+id/view2"
            motion:layout_constraintTop_toTopOf="parent" />

        <Constraint android:id="@+id/view4"
            android:layout_width="@dimen/quick_setting_icon_width"
            android:layout_height="wrap_content"
            android:layout_marginTop="20dp"
            android:visibility="visible"
            motion:layout_constraintEnd_toEndOf="parent"
            motion:layout_constraintStart_toEndOf="@+id/view3"
            motion:layout_constraintTop_toTopOf="parent" />

        <!-- Row 2 -->

        <Constraint android:id="@+id/view5"
            android:layout_width="@dimen/quick_setting_icon_width"
            android:layout_height="wrap_content"
            android:visibility="visible"
            motion:layout_constraintEnd_toStartOf="@+id/view6"
            motion:layout_constraintStart_toStartOf="parent"
            motion:layout_constraintTop_toBottomOf="@+id/view1" />

        <Constraint android:id="@+id/view6"
            android:layout_width="@dimen/quick_setting_icon_width"
            android:layout_height="wrap_content"
            android:visibility="visible"
            motion:layout_constraintEnd_toStartOf="@+id/view7"
            motion:layout_constraintStart_toEndOf="@+id/view5"
            motion:layout_constraintTop_toBottomOf="@+id/view1" />

        <Constraint android:id="@+id/view7"
            android:layout_width="@dimen/quick_setting_icon_width"
            android:layout_height="wrap_content"
            android:visibility="visible"
            motion:layout_constraintEnd_toStartOf="@+id/view8"
            motion:layout_constraintStart_toEndOf="@+id/view6"
            motion:layout_constraintTop_toBottomOf="@+id/view1" />

        <Constraint android:id="@+id/view8"
            android:layout_width="@dimen/quick_setting_icon_width"
            android:layout_height="wrap_content"
            android:visibility="visible"
            motion:layout_constraintEnd_toEndOf="parent"
            motion:layout_constraintStart_toEndOf="@+id/view7"
            motion:layout_constraintTop_toBottomOf="@+id/view1" />

        <!-- Row 3 -->

        <Constraint android:id="@+id/view9"
            android:layout_width="@dimen/quick_setting_icon_width"
            android:layout_height="wrap_content"
            android:visibility="visible"
            motion:layout_constraintEnd_toStartOf="@+id/view10"
            motion:layout_constraintHorizontal_chainStyle="spread"
            motion:layout_constraintStart_toStartOf="parent"
            motion:layout_constraintTop_toBottomOf="@+id/view5" />

        <Constraint android:id="@+id/view10"
            android:layout_width="@dimen/quick_setting_icon_width"
            android:layout_height="wrap_content"
            android:visibility="visible"
            motion:layout_constraintEnd_toStartOf="@+id/view11"
            motion:layout_constraintStart_toEndOf="@+id/view9"
            motion:layout_constraintTop_toBottomOf="@+id/view5" />

        <Constraint android:id="@+id/view11"
            android:layout_width="@dimen/quick_setting_icon_width"
            android:layout_height="wrap_content"
            android:visibility="visible"
            motion:layout_constraintEnd_toStartOf="@+id/view12"
            motion:layout_constraintStart_toEndOf="@+id/view10"
            motion:layout_constraintTop_toBottomOf="@+id/view5" />

        <Constraint android:id="@+id/view12"
            android:layout_width="@dimen/quick_setting_icon_width"
            android:layout_height="wrap_content"
            android:visibility="visible"
            motion:layout_constraintEnd_toEndOf="parent"
            motion:layout_constraintStart_toEndOf="@+id/view11"
            motion:layout_constraintTop_toBottomOf="@+id/view5" />

    </ConstraintSet>
</MotionScene>
```

:::

이렇게만 해주었을 때 아래 이미지와 같이 아이콘들이 자신의 `start` 상태와 `end` 상태를 직선으로 움직입니다.

![](https://static.blog.gangnamunni.com/files/996e3049-783b-4b47-8934-038cddd553cf)

아이콘들이 직선으로 움직이기 때문에 1, 2행의 아이콘이 겹치는 현상이 발생하고, 3열의 아이콘들도 아이콘이 작아지며 사라져서 아름답지가 않습니다.

좀 더 `Material` 스러운 애니메이션을 위해 `KeyFrame` 을 삽입했습니다.

위 `KeyFrame` 설정을 간단히 설명하면, 2행의 아이콘들은 `framePosition` 50 에 아래와 같은 속성을 주었습니다.

```xml
    motion:keyPositionType=”deltaRelative”
    motion:percentX=”0"
    motion:percentY=”1"
```

애니메이션의 50%인 시점에 X 위치는 start 상태가 되도록 하고 Y위치는 end 상태가 되도록 합니다. (아이콘들이 50% 까지는 우측으로만 이동합니다.)

3행의 아이콘들은 `framePosition` 50 에 아래와 같은 속성을 주었습니다.

```xml
    motion:keyPositionType=”deltaRelative”
    motion:percentX=”1"
    motion:sizePercent=”1"
```

애니메이션의 50%인 시점에 X 위치는 end 상태가 되도록 하고 크기도 end 상태가 되도록 합니다. (아이콘들이 50% 까지는 위로만 움직이며 크기도 변화하지 않습니다.)

3행에 아이콘에는 추가적으로 알파 애니메이션을 주었습니다. `KeyAttribute` 를 사용해서 `framePosition` 70 에 alpha 값을 0으로 설정해서 애니메이션의 70%인 지점에서 아이콘이 완전히 보이지 않도록 설정했습니다.

이것으로 코드 한 줄 없이 xml 만으로 안드로이드 퀵세팅과 비슷한 애니메이션을 만들어 보았습니다. 물론 필요시 `MotionLayout` 의 progress 를 programmatically 제어하는등의 커스터마이징 역시 가능합니다.

지금까지 `MotionLayout` 을 가볍게 살펴보았습니다. 비록 지금은 Beta 버전이기에 실제 서비스에 사용하기에는 조금 위험할 수도 있으나, 이렇게 간단히 인터랙션 애니메이션을 구현할 수 있다는 점에서 빨리 정식 빌드가 나오길 기대하고 있습니다.

> 예제 GitHub

<SiteInfo
  name="april21dev/motion_layout_example"
  desc="MotionLayout 예제"
  url="https://github.com/april21dev/motion_layout_example"
  logo="https://avatars.githubusercontent.com/u/19661767?v=4"
  preview="https://opengraph.githubassets.com/050a641b7a6e9e3027702143b35a5ff4db3e211c0ca2ca7a69043d2ec578c418/april21dev/motion_layout_example"/>

> References

<SiteInfo
  name="MotionLayout  |  Android Developers"
  desc="This Layout supports transitions between constraint sets defined in MotionScenes"
  url="https://developer.android.com/reference/android/support/constraint/motion/MotionLayout"
  logo="https://gstatic.com/devrel-devsite/prod/v1698cdd3153b47734bb6d9d8688c4490898207543be76b2c5805f109c27c7695/android/images/touchicon-180.png"
  preview="https://developer.android.com/static/images/social/android-developers.png"/>

<SiteInfo
  name="Introduction to MotionLayout (part I)"
  desc="MotionLayout is a new class available in the ConstraintLayout 2.0 library to help Android developers manage motion and widget animation in their application. The second half (29 min in) of our…"
  url="https://medium.com/google-developers/introduction-to-motionlayout-part-i-29208674b10d"
  logo="https://miro.medium.com/v2/1*m-R_BkNf1Qjr1YbyOIJY2w.png"
  preview="https://miro.medium.com/v2/da:true/resize:fit:700/1*--BinUe-6XZPrZhPys6mzA.gif"/>

---

<TagLinks />