---
lang: ko-KR
title: Basics
description: Shell > Basics
icon: fas fa-egg
category:
  - Shell
  - Basics
tag: 
  - bash
  - linux
  - macos
  - terminal
  - alias
  - tail
  - multiline
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## if statement

가장 기본적인 if-else 구문의 형식

```sh
if command; then
   # <commands>
fi
```

bash 쉘은 `if`문 줄에 정의된 명령을 실행한다. 이 명령의 종료 상태가 `0`(명령이 성공적으로 완료됨) 이라면 `then` 아래에 있는 명령이 실행된다. 명령의 종료 상태가 `0`이 아니라면 `then` 아래에 있는 명령은 실행되지 않고, bash 쉘은 스크립트의 다른 명령으로 넘어간다.

::: details if-then-else

```sh
if command; then
    # <commands>
else
    # <commands>
fi
```

`if`문 줄의 명령이 0이 아닌 종료 상태 코드를 돌려주면 bash 쉘은 `else` 부분의 명령을 실행한다.

::: details 중첩된 if문

```sh
if command1; then
    # <commands>
elif command2; then
    # <more commands>
fi
```

elif는 if-then 구문의 `else` 부분을 이어 나간다. `elif` 명령의 종료 상태 코드가 `0`이라면 bash는 두 번째 `then`문 부부너의 명령들(more commands)을 실행한다.

::: details 테스트 명령 써보기
 
```sh
if test condition; then
    명령
fi
```

테스트 명령에 나와있는 조건이 참으로 평가되면 테스트 명령은 종료 상태 코드를 0으로 돌려준다.

bash 쉘은 if-then 구문에서 테스트 명령을 쓰지 않고도 조건을 테스트하는 다른 방법을 제공한다.

```sh
if [ condition ]; then
    명령
fi
```
대괄호는 테스트 조건을 정의한다. 한 가지 주의할 점이 있다. 여는 대괄호 뒤와 닫는 대괄호 앞에 각각 빈 칸이 있어야 한다. 안그러면 오류 메세지가 나타난다. 테스트 명령 및 테스트 조건은 세 가지 종류의 조건을 평가할 수 있다(파일 비교, 숫자 비교, 문자열 비교).

:::

::: details 파일 비교

쉘 스크립트에서 가장 강력하고 가장 많이 사용되는 비교다. 리눅스 파일 시스템에서 파일과 디렉토리의 상태를 테스트할 수 있다.

| 비교 | 설명 |
| :--- | :--- |
| `-d file` | 파일이 존재하고 디렉토리인지 검사한다 | 
| `-e file` | 파일이 존재하는지 검사한다 | 
| `-f file` | 파일이 존재하고 파일인지 검사한다 | 
| `-L file` | 파일이 심볼릭 링크이면 참 | 
| `-r file` | 파일이 존재하고 읽을 수 있는지 검사한다 | 
| `-s file` | 파일이 존재하고 비어 있지 않은지 검사한다 | 
| `-w file` | 파일이 존재하고 기록할 수 있는지 검사한다 | 
| `-x file` | 파일이 존재하고 실행할 수 있는지 검사한다 | 
| `-O file` | 파일이 존재하고 현재 사용자가 소유한 것인지 검사한다 | 
| `-G file` | 파일이 존재하고 기본 그룹이 현재 사용자와 같은지 검사한다 | 
| `file1 -nt file2` | file1이 file2보다 새것인지 검사한다 |
| `file1 -ot file2` | file1이 file2보다 오래된 것인지 검사한다 |

### 디렉토리 확인하기

지정된 디렉토리가 시스템에 존재하는지 보려면 `-d` 검사를 한다. 보통은 디렉토리에 파일을 쓰거나 디렉토리의 위치를 변경하기 전에 사용하면 좋다.

```sh
jump_directory=/home/arthur

if [ -d $jump_directory ]; then
    echo "hi"
fi
```

### 개체가 존재하는지 여부 검사하기

```sh
location=$HOME
file_name="bong"

if [ -e $location ]; then # Directory does exist
    if [ -e $location/$file_name ]; then
        echo "file does exist"
    else
        echo "file doesn't exist"
    fi
else
    echo "Directory doesn't exist"
fi
```

스크립트에서 파일 또는 디렉토리를 사용하기 전에 이 개채가 있는지 확인하려면 -e 비교를 사용한다(-e 비교는 파일과 디렉토리 양쪽 모두에 적용된다).

:::

::: details 숫자 비교

| 비교 | 설명 |
| :--- | :--- |
| `n1 -eq n2` | `n1`과 `n2`가 같은지 검사한다 |
| `n1 -ge n2` | `n1`이 `n2`보다 크거나 같은지 검사한다 |
| `n1 -gt n2` | `n1`이 `n2`보다 큰지 검사한다 |
| `n1 -le n2` | `n1`이 `n2`보다 작거나 같은지 검사한다 |
| `n1 -lt n2` | `n1`이 `n2`보다 작은지 검사한다 |
| `n1 -ne n2` | `n1`과 `n2`가 같지 않은지 검사한다 |

```sh
if [ $val1 -gt 1 ]; then
   echo "hi"
fi
```

:::

::: details 문자열 비교

| 비교 | 설명 |
| :--- | :--- |
| `str1 = str2` | `str1`이 `str2`와 같은지 검사한다 |
| `str1 != str2` | `str1`이 `str2`와 같지 않은지 검사한다 |
| `str1 < str2` | `str1`이 `str2`보다 작은지 검사한다 |
| `str1 > str2` | `str1`이 `str2`보다 큰지 검사한다 |
| `-n str1` | `str1`의 길이가 0보다 큰지(0이 아닌지) 검사한다 |
| `-z str1` | `str1`의 길이가 0인지 검사한다 |

문자열이 같은가 같지 않은가 비교할 때는 모든 문장부호와 대문자도 고려된다는 점을 잊지 말자.

```sh
testuser=bong

if [ $USER = $testuser ]; then
    echo "hi"
fi
```

어떤 문자열이 다른 문자열보다 큰가 작은가를 판단할 때부터 일이 복잡해진다. 문자열이 큰지의 여부를 테스트하는 기능을 사용하려고 할 때 두가지 문제가 있다.

첫째, 부등호 기호를 이스케이프 해야 하는 것. 그렇지 않으면 쉘은 이를 리다이렉트 기호로 해석해서 문자열 값을 파일 이름으로 사용한다.

```sh
val1=baseball
val2=hockey

if [ $val1 \> $val2 ]
then
    echo "hi"
fi
```

둘째, 어느 것이 더 큰지 순서를 결정하는 논리는 sort 명령에서 쓰이는 것과 같지 않다.

비교 테스트에서는 표준 ASCII 순서를 사용하며, 정렬 순서를 결정하기 위하여 각 문자의 ASCII 숫자 코드값을 이용한다. sort 명령은 시스템 로케일의 언어 설정에 정의된 정렬 순서를 사용한다. 영어라면 로케일 설정은 소문자를 대문자보다 앞서서 정렬하도록 지정한다.

비어있고 초기화되지 않은 변수는 쉘 스크립트 테스트에 치명적인 영향을 미칠 수 있다. 변수의 내용이 확실하지 않으면 숫자 또는 문자열 비교를 사용하기 전에 -n 또는 -z를 사용하여 값을 포함하는지 테스트하는 것이 가장 좋다.

```sh
val1=testing

if [ -n $val1 ]; then
    echo "hi"
fi

if [ -z $val2 ]; then
    echo "hi"
fi
```

:::

---

## for문

```sh
FILE="/Users/bong"

for state in $(ls $FILE)
do
  echo $state
done
```

```sh
for i in ~/bong*.sh; do
    if [ -r "$i" ]; then
        . $i
    fi
done
```

for문 돌리면서 스크립트 파일 실행

::: details C 스타일 for문

```sh
TEST_TRIES=7
TEST_INTERVAL_SECONDS=5

for (( TRY_COUNT = 1; TRY_COUNT <= $TEST_TRIES; TRY_COUNT ++ )); do
    sleep $TEST_INTERVAL_SECONDS
    echo "Checking HTTP port. ("$TRY_COUNT"/$TEST_TRIES)"

    HTTP_STATUS_CODE=`curl -sL -o /dev/null -I -w "%{http_code}" $TEST_URL --max-time 10`
    if [ $HTTP_STATUS_CODE -gt 199 ] && [ $HTTP_STATUS_CODE -lt 300 ]; then
        echo "The Spring Boot process has started successfully."
        break
    fi
    if [ $TRY_COUNT = $TEST_TRIES ]; then
        echo "ERROR : The Spring Boot process failed to start."
        exit 1
    fi
done
```

:::

---

## while문

::: details 기본 while 형식

```sh
var1=10

while [ $var1 -gt 0 ]; do
  echo $var1
  var1=$[ $var1 - 1 ]
done
```

:::

::: details `getopts` 명령어 사용

```sh
# -a 옵션이 있는지 플래그 변수 a_flag와
# -p 옵션의 구분자를 정의하기
a_flag=0
separator=""

while getopts "ap:" option
do
  case $option in
    a)
      a_flag=1
      ;;
    p)
      separator="$OPTARG"
      ;;
    \?)
      echo "Usage: getopts.sh [-a] [-p separator] target_dir" 1>&2
      exit 1
      ;;
    esac
done
```

:::

---

## case 명령

```sh
case variable in
  pattern1 | pattern2) 
    commands1
    ;;
  pattern3) 
    commands2
    ;;
  *) 
    default commands
    ;;
esac
```

::: details 예제

### `bong.sh`

```sh
echo_host() {
  host=`hostname`
  echo "[$host] $1"
}

#### Main #####

OPTION=$1

case $OPTION in
  "start") start_nginx;;
  "stop") stop_nginx;;
  "restart") restart_nginx;;
  *) echo_host "option : $0 start|stop|restart";;
esac
```

### `bong.sh` 실행결과

```sh
./bong.sh ttt
# [MyMacBook] option : ./bong.sh start|stop|restart
```

:::

## 스크립트 종료하기

::: info 리눅스 종료 상태코드

| 코드 | 설명 |
| :--- | :--- |
| `0` | 명령이 성공적으로 완료됨 |
| `1` | 일반 알 수 없는 오류 |
| `2` | 쉘 명령을 잘못 사용함 |
| `126` | 명령을 실행할 수 없음(Permission denied) |
| `127` | 명령을 찾을 수 없음 |
| `128` | 잘못된 종료 매개변수 |
| `128+x` | 치명적인 오류로 리눅스 신호 x를 포함 |
| `130` | <kbd>Ctrl</kbd>+<kbd>C</kbd>로 명령이 종료됨 |
| `255` | 범위를 벗어난 종료 상태 |

::: 

::: details 종료 코드 확인하는 명령어

```sh
echo $?
```
> cf) 종료 상태 코드는 0 ~ 255까지 쓸 수 있다.

:::

::: details exit 명령

쉘 스크립트는 마지막 명령의 종료 상태로 끝마친다. 사용자 정의 종료 상태 코드를 돌려주도록 이를 변경할 수 있다. exit 명령은 스크립트가 종료될 때 종료 상태를 지정할 수 있다.

### `test13`

```sh
#!/bin/bash
var1=10
var2=30
var3=$[$var1 + $var2]
echo The answer is $var3
exit5
#exit $var3 처럼 exit 명령의 매개변수에 변수를 사용할 수도 있다.
```

### 결과

```sh
chmod u+x test13
./test13
# The answer is 40
echo $?
# 5
```

:::

---

## Multiline 입력

`\` 을 붙여 커맨드 입력

```sh
wsdl2java.sh -u -t -ss -sd -g -b \
    -o ./BmsSifDctToProcessMobService \
    -uri http://onnara.saas.gcloud.go.kr/bms/service/BmsSifDctToProcessMobService?wsdl
```

---

## aliases

### Basics

```sh
alias ls='ls -l'
```

### with Argument(s)

```sh
alias wrap_args='f(){ echo before "$@" after;  unset -f f; }; f'
wrap_args x y z
# before x y z after
```
> You can replace `$@` with $`1` if you only want the first argument.

::: info Explanation

This creates a temporary function `f`, which is passed the arguments.

Alias arguments are only passed at the end. Note that `f` is called at the very end of the alias.

The `unset -f` removes the function definition as the alias is executed so it doesn't hang around afterwards.

:::

---

## 쉘 스크립트 작성후 실행하기 전에 문법을 확인하는 `-n` 옵션

```sh
sh -n script.sh
```

---

## `ps`

::: details `java` 프로세스 PID 리스트업 해서 출력

```sh
ps -ef | grep java | awk '{print $2}'
```

:::

::: details `grep` 하면 방금 실행한 것도 잡히기 때문에 그거 제외해주는 명령어

```sh
ps -ef | grep java | grep -v grep
```

:::

::: details pid가 여러개일 때 check하는 if문 추가적으로

```sh
ps -ef | grep nginx | grep -v grep | wc -l
```

응용: `check_running()`

```sh
check_running() {
    PID=`ps -ef | grep nginx | grep -v grep | awk '{print $2}'`
    if [[ -n $PID ]] ; then
        echo "nginx process already started (PID:$PID)"
        exit 1
    fi
}
```

:::

---

## Make tasks running in background

커멘드 뒤에 `&` 추가

```sh
tail -f /var/log/messages &
```

결과창에 `[1] 614`이 나온다면

```sh
fg 1
```

를 입력하여 다시 foreground로 복귀

---

## Quickly jump to frequently-used directories

```sh
CDPATH='.:~:/usr/local/apache/htdocs:/disk1/backups'
export CDPATH
```

`cd` 입력 후 자주 찾는 디렉토리를 알려준다.

---

## Perform calculations

숫자계산

```sh
echo $((16/2))
```

<TagLinks />