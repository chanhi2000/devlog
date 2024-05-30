---
lang: ko-KR
title: adb
description: Android > adb
icon: fas fa-terminal
category: 
  - Android 
  - adb 
tag: 
  - adb
  - android
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## 구성

- client: development machine에서 동작. shell에서 client를 invocation해서 command 실행 가능. ADT, DDMS도 client
- server: development machine의 background process이며, client와 daemon 사이에서의 communication을 관리
- daemon: 각각의 device에서 동작하는 background process

client를 시작하면, ADB server가 실행중인지 확인해서 실행중이지 않으면 server를 시작시킨다. server가 시작되면 TCP의 5037 port로 binding해서 adb client로부터의 command를 받아들이는데, 모든 client는 server와 communication 하기 위해 5037 port를 사용.

> 실행파일 : `${android_sdk_path}/tools/adb`


## Command 입력 형식

```sh
adb [-d | -e | -s <serialNumber>] <command>
```

### `adb devices`

adb server와 연결된 device를 보여준다.

형식 : [serialNumber] [state]
- `serialNumber` = type-consolePort (ex : emulator-5554)
- `state` 
  - offline (device가 adb와 아직 연결되지 않았거나 응답이 없는 상태)
  - device (adb server와 연결된 상태)

### `-s` option 

여러개의 device가 연결되어 있는 상태에서 특정 device에 command를 입력하고 싶을 때 사용

형식

```sh
adb -s <serialNumber> <command>
# ex : adb -s emulator-5554 install sample.apk
```

## Port forwarding

device의 port를 forwarding 하고 싶을 때 사용하는 명령

> ex : port 6100에서 7100으로 forwarding 하고 싶은 경우
>> `adb forward tcp:6100 tcp:7100`

---

## Script(s)

## 종합 리포트

```sh
adb dumpsys <service>       # app/service 상태정보 덤프, 서비스별로 추가 파라미터 받을 수 있음
adb dumpstate <...>         # device 상태정보 덤프. 상태정보를 추출하는 여러 명령어들의 조합으로 구성
adb dumpcrash <...>         # 애플리케이션이 crach될 때의 상태정보 덤프
adb bugreport <출력할 경로>  # logcat + dumpsys + dumpstat
```

## 로그


```sh
adb logcat # 로그캣 보기
```

## `adb shell`

```sh
#
# 앱 (강제로) 죽이기
# 
adb shell am force-stop <PACKAGE_NAME> 
#
# 단말기에 설치 된 앱 apk파일 추출
#
adb shell pm path kr.go.mobile.testbed.iff 
# package:/data/app/kr.go.mobile.testbed.iff-OOdwhCmgyXRvbOh3PjJdUw==/base.apk
adb pull /data/app/kr.go.mobile.testbed.iff-yxAQZiMbPotN8fOSLIJR2Q==/base.apk path/to/desired/destination
#
# 현재 Activity PID찾기 
# 
adb shell "dumpsys activity | grep top-activity"
#
# 시스템 기본정보: 하드웨어, 커널 등
#
adb shell cat /proc/version     # 커널 버전
adb shell cat /proc/cpuinfo     # 프로세서 정보, CPU타입, 모델 제조사 등
adb shell cat /porc/meminfo     # 메모리 정보, 실제 메모리 및 가상 메모리
adb shell cat /proc/devices     # 현재 커널에 설정되어 있는 장치 목록
adb shell mount                 # 마운트된 모든 장치 정보
adb shell df                    # 하드디스크 사용량
adb shell cat /porc/filesystems # 커널에 설정되어 있는 파일시스템 목록
adb shell cat /proc/swaps       # 스왑 파티션의 크기와 사용량
adb shell cat /proc/interrupts  # 장치가 사용중인 인터럽트(IRQ)목록 표시
adb shell cat /proc/ioports     # 현재 사용중인 input/output 포트
adb shell cat /proc/partitions  # 파티션 정보
adb shell cat /proc/uptime      # 시스템이 얼마나 살아있었는지
adb shell cat /proc/stat        # 시스템 상태에 관한 다양한 정보, CPU 사용 통계, 부팅이후 page fault 발생 횟수 등
adb shell cat /proc/zoneinfo    # ZONEINFO
adb shell dmesg                 # 시스템 부팅시 나왔던 메시지
adb shell ps                    # 실행중인 프로세스 정보
adb shell ps -p -t              # 프로세스와 쓰레드 목록
adb shell set                   # 환경설정값 출력 1
adb shell printenv              # 환경설정값 출력 2
#
# 시스템 리소스 사용 현황
#
adb shell vmstat                # 시스템 리소스 상황 모니터, CPU, I/O, Memory 등
adb shell cat /proc/diskstats   # 디스크 utilization과 throughput. 즉 디스크 I/O현황
adb shell top                   # 시스템 프로세스 상황 모니터링/ 프로세스별 CPU사용량, 메모리와 스왑 사용량 등
adb shell procrank              # 프로세스별 메모리
adb shell dumpsys meminfo <PID> # 해당 프로세스 메모리 상세 정보
adb shell cat /proc/<PID>/stat  # 해당 프로세스에 대한 정보, 시작시간, 상태, CPU 사용량 등
adb shell cat /proc/<PID>/maps  # 해당 프로세스의 메모리 맵 정보
adb shell cat /proc/vmstat      # 버추얼 메모리 통계?
adb shell librank               # 라이브러리별 메모리 사용량?
#
# 네트워크 관련
#
adb shell cat /proc/net/netlink # 네트워크 정보
adb shell netcfg                # 네트워크 인터페이스와 IP주소 목록
adb shell netstat               # 네트워크 연결상태 확인
adb shell nc                    # 네트워크용 cat 명령어(netcat)
adb shell ifconfig              # 네트워크 인터페이스 설정 정보. 장치명을 파라미터로 받음. ip 주소. 서브넷마스크 등
adb shell tcpdump               # 실시간 패킷 모니터링
adb shell iftop                 # 네트워크를 위한 top
adb shell route                 # 해당 호스트까지 연결하는 중간 경로 정보인 라우팅 테이블 표시
adb shell ping                  # 원격 호스트와의 연결 테스트
adb shell cat /proc/net/route   # Route
#
# 안드로이드 제공
# 
adb shell pm <...>              # package manager의 약자. 패키지/permission/instrumentation/feature 목록, 패키지 설치/제거 등
adb shell am <...>              # activity manager의 약자, 액티비티 시작, Intent 브로드캐스팅, Instrumentation 시작, profiling 시작 / 중지 등
adb shell service <...>         # 안드로이드 서비스 목록 표시, 서비스에 명령 전달
adb shell monkey <...>          # 애플리케이션에 랜덤 이벤트 발생시킴. 사용자 이벤트, 시스템 이벤트의 무작위 발행
adb shell cat /data/anr/traces.txt # VM TRACES (쓰레드 덤프)
adb shell cat /proc/binder/proc/<PID> # 바인더 프로세스 상태
adb shell cat /proc/binder/xxx : 바인더 관련 정보(xxx은 transaction, transaction_log, failed_transaction_log, stats 등)
adb shell cat /data/system/packages.xml : 설치된 패키지 세팅 정보
adb shell setprop               # system property 셋팅
adb shell getprop               # 셋팅된 system property 목록 출력
```

## App 내부저장소 접근 / 확인

```sh
adb shell cd /data/data/[packageNm] # 경로 이동
```






Copying files



## `pull`

device에서 file을 copy해 올 때 사용 (recursively)

`adb pull <remote> <local>`

## `push`

pull과 반대로 file을 device에 복사해 넣고 싶을 때 사용 (recursively)

`adb push <local> <remote>`

```sh
adb push foo.txt /sdcard/foo.txt) (/sdcard/foo.txt 에서 /sdcard는 device에 존재하는 path
adb push 300정진규001_env.cer /sdcard/GPKI/certificate/class2/300정진규001_env.cer
adb push 300정진규001_env.key /sdcard/GPKI/certificate/class2/300정진규001_env.key
adb push 300정진규001_sig.cer /sdcard/GPKI/certificate/class2/300정진규001_sig.cer
adb push 300정진규001_sig.key /sdcard/GPKI/certificate/class2/300정진규001_sig.key
```

<!-- 

Listing of adb Commands

Options
-d

연결된 USB device에만 direct로 command 전송

USB device가 하나 이상이면 error return


-e

실행중인 device에만 command 전송

하나 이상의 device가 실행중이면 error return



-s <serialNumber>

특정 device에만 command 전송 (serialNumber 형식은 위 내용 참조)




General



devices

연결된 모든 device list 출력



help

제공되는 adb command list 출력



version

adb version 출력




Debug


logcat [<option>] [<filter-specs>]

log data 출력


bugreport

bugreport를 위한 dumpsys(system data dump), dumpstate(state dump), logcat data 출력


jdwp

특정 device의 JDWP process들의 list(pid) 출력



Data


install <path-to-apk>

application 설치



pull <remote> <local>

push <local> <remote>

위 내용 참조



Ports and Networking


forward <local> <remote>

특정 local port를 remote port로 fowarding

Scheme

tcp:<portnum>

local:<UNIX domain socket name>

dev:<character device name>

jdwp:<pid>



ppp <tty> [parm]...

USB로 PPP 실행

<tty> : PPP stream을 위한 tty

[parm] : PPP option




Scripting



get-serialno

adb의 serial number 출력


get-state

adb의 state 출력 (device / offline)


wait-for-device

device가 online일 때 까지 command 실행 정지



ex : adb wait-for-device shell getprop (state가 device가 되면 shell getprop command 실행



Note : 완전히 boot 된 이후에 사용 가능한 install 등의 command를 함께 사용할 경우 wait-for-device는 device state만 확인하므로 fully boot 되지 않았을 경우 error 발생 가능



Server


start-server

adb server가 실행중인지 확인해서 running 상태가 아니면 실행



kill-server

adb server process를 종료




Shell



shell

target device 안에서 remote shell을 시작



shell [<shellCommand>]

target device 안에서 shell command를 실행하고 remote shell을 빠져나간다





Shell Command 실행



ADB는 ash shell을 제공하는데, ash shell의 실행 바이너리는 device 내부의 /system/bin 경로에 존재


adb [-d | -e | -s <serialNumber>] shell로 remote shell을 실행한 후에 shell을 종료하고 싶으면 Ctrl + D or exit 입력




UI/Application Exerciser Monkey


User event의 random stream을 생성해 device에서 실행시키는 tool (stress test 용도)


ex : adb shell monkey -v -p packageName 500 (500가지의 random stream)




Other Shell Commands


device의 /system/bin 경로의 file들을 살펴보거나, adb -help로 확인



dumpsys

system data의 dump를 표시



dumpstate

state의 dump를 file로 저장


logcat [<option>]...[<filter-spec>]

logging을 가능하게 하거나 화면에 표시



dmesg

kernel debugging message를 화면에 출력



start

device를 시작(재시작)



stop

device 종료




Using logcat Commands


adb logcat

단순히 전체 log를 보고싶은 경우 사용 또는 remote shell에서 logcat 실행


Android에서 모든 log message는 tag와 priority를 가지고 있음

tag : system component를 짧은 문자열로 표현 (ex : view system의 경우 "View")

priority (ordered from lowest to highest)

V (Verbose)

D (Debug)

I (Info)

W (Warning)

E (Error)

F (Fatal)

S (Silent)


logcat 실행 후에 나타나는 log message에서 tag와 priority가 첫 column에 priority/tag 형태로 표시


ex : I/ActivityManager( 585) : Starting activity : Intent { action = android.intent.action... }



logcat의 filter는 tag:priority 형태로 표현하는데 tag는 표시하려는 tag의 이름을 입력하면 되고 입력한 priority와 상위 priority의 log들을 표시



ex : adb logcat ActivityManager:I MyApp:D *:S

ActivityManager의 I(Info) level 이상, MyApp의 D(Debug) level 이상의 log들만 표시



default filter expression


환경변수 ANDROID_LOG_TAGS에 default로 사용할 filter expression을 setting 후에 export 해서 사용



ex : export ANDROID_LOG_TAGS="ActivityManager:I MyApp:D *:S"



Note : remote shell을 사용해서 logcat을 실행하고 있을 경우 export 되지 않음 (?)




Controlling Log Output Format



-v option을 사용해서 출력되는 log의 f
-->

---

<TagLinks />