---
lang: ko-KR
title: Makefile
description: Shell > Makefile
category: 
  - Shell
  - Article(s)
tag: 
  - sh
  - bash
  - c
  - cpp
  - gnu
  - blog
head:
  - - meta:
    - property: og:title
      content: Makefile
    - property: og:description
      content: Makefile
    - property: og:url
      content: https://chanhi2000.github.io/g4e/cli-shell/articles/devkuma/makefile.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "Makefile | devkuma", 
  "desc": "Makefile은 UNIX 계열 OS에서 일반적인 빌드 도구인 'make'(make 명령어)에 실행할 절차를 기술한 텍스트 파일이다.", 
  "link": "https://www.devkuma.com/docs/makefile/", 
  "logo": "https://www.devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

.<FontIcon icon="iconfont icon-file"/>`Makefile`은 UNIX 계열 OS에서 일반적인 빌드 도구인 `make`에 실행할 절차를 기술한 텍스트 파일이다.

---

## 개요

`make`는 개발자가 작성한 소스 코드에서 최종 실행파일을 얻기 위해 컴파일, 링크 등 일련의 단계를 연속적으로 자동으로 수행해주는 ‘빌드 도구’의 하나로, 오래전부터 리눅스 등 유닉스 계열 OS에서 표준으로 사용되고 있다.

`make`에서는 개발자가 수행하고자 하는 일련의 절차를 Makefile에 기술하고, make 명령어에 이를 주면 내용을 해석하여 명령어 실행 등을 연속적으로 자동으로 수행하며, make 명령어 한 번 실행으로 실행파일 생성이 완료된다.

---

## `Makefile`이란?

`Makefile`에는 컴파일러, 소스 파일, 생성물, 빌드 순서, 빌드 순서, 종속성 등을 기술하고, `make` 명령을 실행만 하면 빌드할 수 있다. 그 내용을 보면 프로그램 빌드 방법을 알 수 있다. 또한 `make`는 업데이트가 필요한 파일을 자동으로 판단해 컴파일 횟수를 최소화해 개발 시간을 단축할 수 있다.

유명한 GNU에서 제공하는 GNU Make의 Home Page에 따르면 Make는 다음과 같은 Tool이라고 한다.

> GNU Make is a tool which controls the generation of executables and other non-source files of a program from the program’s source files.

이에 따르면 다음과 같은 장점이 있는 것 같다.

- 앤드유저는 그 방법을 자세히 몰라도 패키지를 빌드하고 설치할 수 있다.
- 변경된 소스 파일을 기반으로 업데이트가 필요한 파일을 자동으로 파악하고, 적절한 순서를 자동으로 결정한다.
- Make는 C 언어뿐만 아니라 다른 컴파일 언어도 지원한다.

```component VPCard
{
  "title": "Make - GNU Project - Free Software Foundation",
  "desc": "GNU Make is a tool which controls the generation of executables and other non-source files of a program from the program's source files.",
  "link": "https://www.gnu.org/software/make/",
  "logo": "https://www.gnu.org/graphics/gnu-head-mini.png",
  "background": "rgba(163,45,42,0.2)"
}
```

---

## `Makefile` 기본 작성법

많은 라이브러리를 사용하는 C/ C++을 빌드할 때 `make`를 사용하면 유용하다. `make`를 사용하려면 대상 `Makefile`이 필요한데, 이번에는 그 작성법을 소개한다.

`Makefile`의 기본 구문은 두 줄로 한 단위이며, 윗줄에 `Target: SourceFile`, 아랫줄에 ‘실행할 명령어(맨 앞에 탭 문자)‘를 각각 기술한다. 줄 바꿈을 `;`(세미콜론)으로 대체하여 한 줄로 묶을 수도 있다. `변수명=값` 형태로 변수를 정의할 수도 있으며, 파일명 등의 지정에 변수를 사용할 수 있다.

의존 관계를 기록하는 부분이다.

```makefile
Target : [Prerequisites]
	Recipe
```

- `Target`
  - 프로그램에 의해 생성되는 파일의 이름이다.
- `Prerequisites`
  - 전제 조건
  - 타겟을 생성하기 위한 입력으로 사용되는 파일이다.
  - 여러 파일도 가능하고, 생략할 수도 있다.
- `Recipe`
  - recipe가 성립하기 위해서는 prerequisites가 필요하다.
  - `make`가 실행할 액션이다.
  - 여러 줄 가능하다. (행을 분할할 경우 `\`를 사용한다)
  - 열 앞에는 Tab 입력은 필수이다.

빌드할 때 사용하는 명령어를 다음과 같은 규칙에 따라 작성한다.

```makefile
Target: SourceFile
	Command
```

간단한 예로 들면 아래와 같이 작성할 수 있다.

```makefile
hello: hello.c
	gcc -o hello hello.c
```

그러고, 생성된 파일을 삭제하거나 복사하는 명령도 추가로 작성할 수도 있다.

```makefile
clean:
	rm -f *~ hello 
install: hello 
	install -s hello.exe Path
```

`make`를 실행할 때에 아무런 인자를 지정하지 않으면 맨 위에 있는 `Target`이 실행된다. 위의 `clean`이나 `install`을 실행하고 싶다면 아래와 같이 인수를 지정한다. `shell make clean make install` `Makefile`이 아닌 다른 파일을 `Makefile`로 지정하고 싶다면, `-f` 옵션으로 다음과 같이 실행할 수 있다.

```sh
make -f sample.mk
```

또한, 요소를 변수로 취급할 수 있다. 간단한 예는 다음과 같다.

```makefile
CXX            = g++
OPTIMIZE       = -O3
CFLAGS         = -IC:/Users/include \
	-IC:/Python/include 
DEST           = C:/Users/Local
LDFLAGS        = -LC:/Users/Local/libs
LIBS           = -lpython
OBJS           = hello

all: clean $(PROGRAM) install
$(PROGRAM): $(OBJS)
	$(CXX) -o $(OBJS) $(OBJS).cpp $(CFLAGS) $(LDFLAGS) $(LIBS)
clean: rm -f *~ $(OBJS)
install: $(PROGRAM)
	install -s $(OBJS).exe $(DEST)
```

---

## `Makefile` 변수

`Makefile`의 변수는 두 가지가 있다. 암묵적 변수와 새로 정의되는 변수이다. 암묵적 변수는 암묵적 규칙에서 사용되는 특정 사전 정의된 변수를 말한다.

### 암묵적 규칙이란?

다양화되는 규칙은 굳이 설명하지 않아도 미리 암묵적인 정의된 변수가 있다.

<FontIcon icon="iconfont icon-c"/>C 소스 파일의 컴파일에 사용되는 레시피는 실제로 `$(CC) -c $(CFLAGS) $(CPPFLAGS)`라는 코드가 실행되고 있다. `CC`, `CFLAGS`, `CPPFLAGS`는 미리 변수로 정의되어 있으며, 이 내용을 덮어써서 컴파일 레시피를 다시 작성할 수도 있다.

### 암묵적 변수 목록

주요한 변수 항목은 아래와 같다.

| 변수 이름 | 설명 | default |
| :---: | :--- | :--- | 
| `AR` | 아카이브 메인테넌스 프로그램 | `ar` |
| `AS` | 어셈블리 실행 프로그램 | `as` |
| `CC` | C 프로그램 컴파일 프로그램	| `cc` |
| `CXX` | C++ 프로그램 컴파일 프로그램 | `g++` |
| `CO` | RCS의 배포 프로그램 | `co` |
| `CPP` | C 전처리 프로그램, 표준 출력에 결과 | `$(CC) -E` |
| `FC` | Fortranr과 Ratfor 프로그램을 위한 컴파일 또는 전처리기 프로그램 | `f77` |
| `GET` | SCCS의 배포 프로그램 | `get` |
| `LEX` | Lex 문법을 C 또는 Ratfor로 변환하는 프로그램 | `lex` |
| `PC` | Pascal 프로그램 컴파일 프로그램 | `pc` |
| `YACC` | Yacc 문법을 C 또는 Ratfor로 변환하는 프로그램 | `yacc` |
| `YACCR` | Yacc 문법을 Ratfor로 변환하는 프로그램 | `yacc -r` |
| `MAKEINFO` | Texinfo 소스 파일을 Info 파일로 변환하는 프로그램 | `makeinfo` |
| `TEX` | TeX 소스에서 TeX DVI 파일을 만드는 프로그램 | `tex` |
| `TEXI2DVI` | Texinfo 소스에서 TeX DVI 파일을 만드는 프로그램 | `texi2dvi` |
| `WEAVE` | 웹을 TeX로 번역하는 프로그램 | `weave` |
| `CWEAVE` | C Web을 TeX로 번역하는 프로그램 | `cweave` |
| `TANGLE` | 웹을 파스칼로 번역하는 프로그램 | `tangle` |
| `CTANGLE` | C 웹을 C로 번역하는 프로그램 | `ctangle` |
| `RM` | 파일을 삭제하는 명령 | `rm -f` |
| `ARFLAGS` | 아카이브 유지 보수 프로그램에 제공하는 플래그	| `rv` |
| `ASFLAGS` | 어셈블러에 주는 플래그(`.s` 또는 `.S` 파일에 대해 명시적으로 호출되는 경우) | 없음 |
| `CFLAGS` | C 컴파일러에 주는 플래그 | 없음 |
| `CXXFLAGS` | <FontIcon icon="fa-brands fa-name"/>C++ 컴파일러에 주는 플래그 | 없음 |
| `COFLAGS` | RCS co 프로그램에 주는 플래그 | 없음 |
| `CPPFLAGS` | C 프리프로세서 및 프로그램에 제공하는 플래그(C 및 Fortran 컴파일러 | 없음 |
| `FFLAG` | Fortran 컴파일러에 주는 플래그 | 없음 |
| `GFLAG` | SCCS get 프로그램에 주는 플래그 | 없음 |
| `LDFLAGS` | 링커 ld를 호출할 때 컴파일러에 주는 플래그 | 없음 |
| `LFLAGS` | Lex에게 주는 플래그 | 없음 |
| `PFLAGS` | Pascal 컴파일러에 주는 플래그 | 없음 |
| `RFLAGS` | Ratfor 프로그램에 대한 Fortran 컴파일러에 제공하는 플래그 | 없음 |
| `YFLAGS` | Yacc에게 주는 플래그 | 없음 |

```component VPCard
{
  "title": "GNU make",
  "desc": "Implicit Variables",
  "link": "https://www.gnu.org/software/make/manual/make.html#Implicit-Variables",
  "logo": "https://www.gnu.org/graphics/gnu-head-mini.png",
  "background": "rgba(163,45,42,0.2)"
}
```

### 변수 정의

`Makefile` 내에서 변수를 정의하는 방법에는 두 가지가 있다.

| 기호 | 상세 |
| :---: | :--- |
| `=` | 재귀적으로 확장되는 변수 |
| `:=` | 단순하게 전개되는 변수 |

```makefile
foo = $(bar)
bar = $(ugh)
ugh = Huh?

all:
  echo $(foo) # => Hub?
```

### 변수 호출

`$(name)`, 또는 `${name}`

```makefile
objects = program.o foo.o utils.o # => program.o foo.o utils.o
program : $(objects)
        cc -o program $(objects) 

$(objects) : defs.h
```

### 규칙 내에서 작동하는 자동 변수

자동변수는 타겟과 전제조건을 호출할 때 사용할 수 있는 표기법이다. 약어로 사용할 수 있을 뿐만 아니라, 조건에 따라 필요한 것만 참조하는 기능을 가진 것도 있다.

#### `$@` 대상 이름

현재 타켓 이름.

| 변수 | 설명 |
| :---: | :--- |
| `$@` | 규칙의 타겟 이름이다. `$(@)`로 써도 같은 의미를 가진다. |
| `(@D)` | 규칙 타겟의 디렉토리 이름. |
| `(@F)` | 규칙 타겟의 파일 이름. |

```makefile
aaa/bbb/foo:
	echo $@     # => aaa/bbb/foo
	echo $(@D)  # => aaa/bbb
	echo $(@F)  # => foo
```

#### `$<` 종속성의 첫 번째 이름

전제 조건의 첫 번째 이름이다.

| 변수 | 설명 |
| :---: | :--- |
| `$<` | 전제 조건의 첫 번째 이름이다. `$(<)`로 써도 같은 의미를 가진다. |
| `$(<D)` | 전제 조건의 첫 번째 디렉토리 이름. |
| `$(<F)` | 전제 조건의 첫 번째 파일 이름. |

```makefile
output/foo: input/bar input/baz
	echo $<     # => input/bar
	echo $(<D)  # => input
	echo $(<F)  # => bar
```

#### `$^` 대상의 모든 종속성 이름

대상의 모든 전제 조건의 이름이다.

| 변수 | 설명 |
| :---: | :--- |
| `$^` | 대상의 전제 조건의 이름이다. `$(^)`로 써도 같은 의미를 갖는다. |
| `$(^D)` | 대상 전제 조건의 디렉토리 이름. |
| `$(^F)` | 대상 전제 조건의 파일 이름. |

```makefile
output/foo: input/bar input/baz
	echo $^     # => input/bar input/baz
	echo $(^D)  # => input input
	echo $(^F)  # => bar baz
```

#### `$?` 대상보다 타임스탬프가 새로운 종속성의 이름

타겟보다 타임스탬프가 새로운 전제 조건의 이름이다.

| 변수 | 설명 |
| :---: | :--- |
| `$?` | 대상보다 새로운 모든 전제 조건의 이름이다. `$(?)` 로 써도 같은 의미를 가진다. |
| `$(?D)` | 대상보다 새로운 모든 전제 조건의 디렉토리 이름. |
| `$(?F)` | 대상보다 새로운 모든 전제 조건의 파일 이름. |

```makefile
output/foo: input/bar input/baz
	echo $?     # => input/bar
	echo $(?D)  # => input
	echo $(?F)  # => bar
```

#### `$+` 대상의 모든 종속성 이름

대상의 모든 전제 조건의 이름(중복이 있어도 생략하지 않음). 일반적으로 `$^`가 더 많이 사용된다.

| 변수 | 설명 |
| :---: | :--- |
| `$+` | 중복이 포함된 대상의 전제 조건의 이름이다. `$(+)`로 써도 같은 의미를 가진다. |
| `$(+D)` | 중복이 포함된 대상 전제 조건의 디렉토리 이름. |
| `$(+F)` | 중복이 포함된 대상 전제조건의 파일명. |

```makefile
output/foo: input/baz input/baz input/baz
	echo $+     # => input/baz input/baz input/baz
	echo $(+D)  # => input input input
	echo $(+F)  # => baz baz baz
```

#### `$*` 대상의 패턴 매칭과 일치하는 부분

대상의 패턴과 일치하는 부분이다. 관련 파일을 생성할 때 등에 유용하다.

| 변수 | 설명 |
| :---: | :--- |
| `$*` | 대상의 패턴과 일치하는 부분이다. `$(*)`로 써도 같은 의미를 가진다. |
| `$(*D)` | 대상의 패턴과 일치하는 부분의 디렉토리 이름. |
| `$(*F)` | 대상의 패턴과 일치하는 부분의 파일명. |

---

## `Makefile`의 함수

Make에는 `Makefile` 내에서 문자열 처리와 조건부 분기를 위한 함수가 있다. 주요 함수는 다음과 같다.

```component VPCard
{
  "title": "Functions (GNU make)",
  "desc": "8 Functions for Transforming Text",
  "link": "https://www.gnu.org/software/make/manual/html_node/Functions.html",
  "logo": "https://www.gnu.org/graphics/gnu-head-mini.png",
  "background": "rgba(163,45,42,0.2)"
}
```

### 텍스트 변환을 위한 함수

함수는 `makefile`에서 변수를 정의할 때, 텍스트 조작을 하기 위해 사용된다. 여기서는 주요 함수를 소개한다.

함수는 다음과 같은 구문으로 호출된다.

```makefile
$(function arguments)
${function arguments}
```

```component VPCard
{
  "title": "GNU make",
  "desc": "8.2 Functions for String Substitution and Analysis",
  "link": "https://www.gnu.org/software/make/manual/make.html#Text-Functions",
  "logo": "https://www.gnu.org/graphics/gnu-head-mini.png",
  "background": "rgba(163,45,42,0.2)"
}
```

#### `shell` 함수

쉘을 실행합니다.

```makefile
files := $(shell echo *.c)
INCLUDE := $(shell find $(INCDIRS) -type d)
SRCDIR = ./srcs
SRCS := $(shell find $(SRCDIR) -name *.c)
all:
	echo $(files) # => hoge.c foo.c
	echo $(INCLUDE) # => include
	echo $(SRCDIR) # => ./srcs
	echo $(SRCS) # => hoge.c foo.c

RESULT = $(shell seq 1 10)
all:
	echo $(RESULT)  # => 1 2 3 4 5 6 7 8 9 10
```

#### `addprefix` 함수

앞에 문자열을 추가합니다. `-l` 옵션 등을 사용할 때 유용할 것 같다.

`$(addprefix prefix,names...)`

```makefile
FILES := foo bar
all:
	echo $(addprefix src/,$(FILES))  # => src/foo src/bar
```

#### `dir` 함수

파일 이름에 대한 함수. 디렉토리만 추출한다.

`$(dir names...)`

`names`의 파일명에서 디렉토리 부분을 추출한다. 파일명의 디렉토리 부분은 마지막 슬래시 이전의 모든 부분이다. 슬래시를 포함하지 않으면 디렉토리 부분은 문자열 ./가 된다.

```makefile
FILES := src/hoge.c src/hoge.h index.html
all:
	echo $(dir $(FILES))  # => src/ src/ ./
```

#### `notdir` 함수

파일명 검색하는 함수

```makefile
FILES := ./dir/hoge.txt
all:
	echo $(notdir $(FILES))  # => hoge.txt
```

#### 대체 참조

바꾸기 참조는 변수의 값을 지정된 변경 사항으로 대체한다. 이는 `$(var: 대체전 = 대체후)` (또는 `${var: 대체전 = 대체후})`의 형태로 변수 `var`의 값을 가져와 단어 끝에 있는 모든 a를 b로 대체하고 결과 문자열을 대체한다.

그러고, 단어 내 임의의 수의 문자와 일치하는 와일드카드 역할을 한다. 대체 참조는 `patsubst` 함수의 약어이다.

```makefile
foo := a.o b.o c.o
bar := $(foo:%.o=%.c)

all:
  echo $(bar) # => a.c b.c c.c
```

`patsubst` 함수를 지정한 경우

```makefile
$(patsubst pattern(대체전), replacement(대체후), text(대상))
foo := a.o b.o c.o
bar := $(patsubst %.o,%.c,$(foo))

all:
    echo $(bar) # => a.c b.c c.c
```

#### `realpath` 함수

존재하는 전체 경로 가져오기

```makefile
"$(realpath ./dir/hoge.txt)"//C:users/hoge/bin/hoge.txt
```

#### `suffix` 함수

확장자 가져오기

```makefile
"$(suffix ./dir/hoge.txt)"//.txt
```

#### `wildcard` 함수

와일드카드를 사용하여 존재하는 파일명 검색

```makefile
"$(suffix ./dir/*.txt)"//hoge.txt hogehoge.txt
```

### 조건부 분기를 위한 함수

#### `if`

조건부 분기

```makefile
"$(if $(VAR1),$(exist),$(none))"
```

#### `ifeq`

조건부 분기별 작성법

```makefile
ifeq ($(CC),gcc)
  libs=$(libs_for_gcc)
else
  libs=$(normal_libs)
endif
```

---

## `Makefile` 디버깅 방법

GNU Make의 `-n` 옵션은 `Makefile`의 명령을 실행하지 않고 출력한다.

`Makefile`이 아래와 같이 정의되어 있을 때,

```makefile
CC = gcc
OBJ = hoge.c
CFLAGS = -c $(OBJ)
```

### 처리 출력

`make` 명령어 `-n` 옵션을 아래와 같이 넣어 실행하면, `make`가 어떤 처리를 하는지 출력할 수 있다.

```sh
make -n
#
# gcc -c hoge.c -o hoge
```

어떻게 작성되는 확인 할때, 유용하게 사용할 수 있다.

### `warning` 함수

`make` 실행 시 내용을 출력해 준다.

```makefile
$(warning MAKE = $(MAKE))  # => Makefile:18: MAKE = /Library/Developer/CommandLineTools/usr/bin/make
$(warning CC = $(CC)) # => Makefile:19: CC = gcc
$(warning CFLAGS = $(CFLAGS)) # => Makefile:20: CFLAGS =  -Wall -Wextra -Werror
```

---

## g++와 make와 cmake의 install 방법

### <FontIcon icon="fa-brands fa-windows"/>Windows에서 설치

Windows OS에서 **g++/gcc**는 **MinGW**를, `make`는 **GnuWin**을, `cmake`는 **cmake.zipinstall**을 통해 사용할 수 있다.

::: tabs 

@tab GUI로 g++ install


```component VPCard
{
  "title": "MinGW-w64 - for 32 and 64 bit Windows download | SourceForge.net",
  "desc": "Download MinGW-w64 - for 32 and 64 bit Windows for free. A complete runtime environment for gcc. The mingw-w64 project is a complete runtime environment for gcc to support binaries native to Windows 64-bit and 32-bit operating systems.",
  "link": "https://sourceforge.net/projects/mingw-w64/",
  "logo": "https://a.fsdn.com/con/img/sandiego/svg/originals/sf-icon-orange-no_sf.svg",
  "background": "rgba(255,103,0,0.2)"
}
```

installer를 Download하여 설치한다.

@tab GUI로 make install

```component VPCard
{
  "title": "Make for Windows",
  "desc": "Make: GNU make utility to maintain groups of programs",
  "link": "https://gnuwin32.sourceforge.net/packages/make.htm",
  "logo": "https://gnuwin32.sourceforge.net/favicon.ico",
  "background": "rgba(255,255,255,0.2)"
}
```

- installer를 Download하여 설치한다.
- <FontIcon icon="fas fa-folder-open"/>`C:Program Files (x86)\GnuWin32\bin`으로 경로를 지정한다.

@tab GUI로 cmake를 install

```component VPCard
{
  "title": "Download CMake",
  "desc": "You can either download binaries or source code archives for the latest stable or previous release or access the current development (aka nightly) distribution through Git. This software may not be exported in violation of any U.S. export laws or regulations.  For more information regarding Export Control matters please go to https://www.kitware.com/legal.",
  "link": "https://cmake.org/download/",
  "logo": "https://cmake.org/favicon.ico",
  "background": "rgba(0,55,101,0.2)"
}
```

- installer를 Download하여 설치한다.

@tab Chocolatey에서 g++ & make를 install한다.

```bat
choco install mingw
choco install make
```

:::

#### 환경 변수 설정

아래의 `path` 등에 설치되므로 `path`를 통해 설치한다.

- <FontIcon icon="fas fa-folder-open"/>`C:\Program Files (x86)\MinGW\bin`
- <FontIcon icon="fas fa-folder-open"/>`C:\Program Files (x86)\GnuWin32\bin`
 
### <FontIcon icon="fa-brands fa-debian"/>리눅스에서 설치

::: tabs

@tab:active 일괄적으로 install

```sh
sudo apt install build-essential
```

@tab 개별적으로 install

```sh
sudo apt install g++
sudo apt install make
```

:::

---

## 정리

`Makefile` 작성 방법에 대해 정리해 보았다. 비망록으로 업데이트해 나갈 것이다.

---

<TagLinks />