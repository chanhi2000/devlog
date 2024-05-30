---
lang: ko-KR
title: WebService
description: Java > WebService
icon: fas fa-tower-broadcast
category:
  - Java
  - WebService
tag: 
  - java
  - jdk
  - webservice
  - ws
  - apache
  - apache-cxf
  - apache-axis
  - apache-axis2
  - wsdl2java
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## WebService Client

### Apache Axis2

::: tabs

@tab:active 리눅스

```sh
. ./wsdl2java.sh -u -t -ss -sd -g -b \
    -o ./BmsSifDctToProcessMobService \
    -uri http://onnara.saas.gcloud.go.kr/bms/service/BmsSifDctToProcessMobService?wsdl
```

@tab 윈도우 Cmd

```batch
wsdl2java.bat -u -t -ss -sd -g -b ^
    -o .\BmsSifDctToProcessMobService ^
    -uri http://onnara.saas.gcloud.go.kr/bms/service/BmsSifDctToProcessMobService?wsdl
```

@tab 윈도우 Pwsh

```powershell

```

:::

### Apache CXF

리눅스 환경에서는

```sh
. ./wsdl2java.sh -u -t -ss -sd -g -b \
    -o ./BmsSifDctToProcessMobService \
    -uri http://onnara.saas.gcloud.go.kr/bms/service/BmsSifDctToProcessMobService?wsdl
```

윈도우 환경에서 Cmd

```batch
wsdl2java.bat -u -t -ss -sd -g -b ^
    -o .\BmsSifDctToProcessMobService ^
    -uri http://onnara.saas.gcloud.go.kr/bms/service/BmsSifDctToProcessMobService?wsdl
```

윈도우 환경에서 Pwsh

```powershell

```

<TagLinks />