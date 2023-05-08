---
lang: ko-KR
title: 🧞‍♂️KTX
description: 🅺Kotlin > 🧞‍♂️KTX
tags: ["java", "jdk", "jdk7", "jdk8", "singleton", "enum", "javadocs","kotlin", "companion-object"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## Retrofit

```kotlin
suspend fun <T> Repository.safeApiCall(
    dispatcher: CoroutineDispatcher,
    apiCall: suspend () -> T
): ApiResult<T> {
    return withContext(dispatcher) {
        try {
            withTimeout(NETWORK_TIMEOUT) {
                delay(NETWORK_DELAY)
                Success(apiCall.invoke())
            }
        } catch (t: Throwable) {
            when(t) {
                is TimeoutCancellationException -> {
                    val code = 408
                    GenericError(code, NETWORK_ERROR_TIMEOUT)
                }
                is IOException -> {
                    NetworkError
                }
                is HttpException -> {
                    val code = t.code()
                    val errorResponse = convertErrorBody(t)
                    GenericError(code, errorResponse)
                }
                else -> {
                    GenericError(null, UNKNOWN_ERROR)
                }
            }
        }
    }
}

```