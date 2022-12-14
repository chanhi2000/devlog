---
lang: ko-KR
title: WebService
description: WebService
tags: ["java", "jdk", "webservice", "ws", "apache", "apache-cxf", "apache-axis", "apache-axis2", "wsdl2java"]
---

# {{ $frontmatter.description }} 관련

[[toc]]

---
## WebService Client

### Apache Axis2

리눅스 환경에서는

```shell
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

### Apache CXF

리눅스 환경에서는

```shell
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