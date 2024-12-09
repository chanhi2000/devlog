---
lang: ko-KR
title: Jetpack Compose Snippets
description: Android > Jetpack Compose Snippets
icon: iconfont icon-jetpack-compose
category:
  - Java
  - Android
  - Jetpack Compose
tag:
  - java
  - kotlin
  - kt
  - android
  - android-studio
  - idea
  - intellij
  - intellij-idea
  - jetpack-compose
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## Selectable Component

::: info Selectable Component

<SiteInfo
  name="andariadarcode/JetpackComposeColorPicker"
  desc="Contribute to andariadarcode/JetpackComposeColorPicker development by creating an account on GitHub."
  url="https://github.com/andariadarcode/JetpackComposeColorPicker/"
  logo="https://github.githubassets.com/favicons/favicon-dark.svg"
  preview="https://opengraph.githubassets.com/8dd1920c1980d83901d38079fbfd3d871f99365a1f4d0fb422f8a344fd5d2755/andariadarcode/JetpackComposeColorPicker"/>

```kotlin :collapsed-lines title="MainActivity.kt"
class MainActivity: ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            ColorPicker()
        }
    }
}

@Composable
fun ColorPicker() {
    val colors = listOf(
        Color(0xfff9a825),
        COlor(0xffff3d00),
        Color(0xff4caf50),
        Color(0xff9c27b0),
        Color(0xff2196f3))
    val currentColor = remember { mutableStateOf(colors[0]) }

    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arragement.Center,
        modifier = Modifier.fillMaxSize()
    ) {
        Row {
            colors.forEach { color -> 
                val isSelected = currentColor.value == color
                Box (
                    modifier = Modifier.padding(4.dp)
                                .size(50.dp)
                                .clip(CircleShape)
                                .background(color)
                                .selectable(
                                    selected = isSelected,
                                    onClick = { currentColor.value = color }
                                )
                ) {
                    if (currentColor.value == color) {
                        Icon(imageVector = Icons.Filled.Done,
                            contentDescription = "Done",
                            tint = Color.White
                            modifier = Modifier.align(Alignment.Center))
                    }
                }
            }
        }

        Text (
            text = "TEXT",
            color = currentColor.value,
            fontSize = 27.sp
        )
    }
}
```

:::

---

<TagLinks />