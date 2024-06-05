---
lang: ko-KR
title: SPM-GL-01
description: Mermaid.js > SPM-GL-01
category:
  - Mermaid.js
  - SPM-GL-01
tag: 
  - js
  - node
  - nodejs
  - mermaid
  - mermaidjs
  - example
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## 절차도

```mermaid
---
title: 절차도
---
flowchart TB
  Z[(Gitlab)]
  Y[(유지보수SVN)]

  subgraph A[기능개선 계획수립]
    direction LR
    A1((정기/수시 기능개선 검토 계획)) --> A2[기능개선 후도도출]
    A2 --> A3[기능개선 계획]
    A2 --> | 기능개선 계획 안 | A4[기능개선 후보선정]
    A4 --> | 기능개선 계획 안 | A5[기능개선 대상선정]
    A5 --> A6[기능개선 계획수립] 
    A6 --> A7[기능개선 계획승인]
    A6 --> | 기능개선 계획| Z
  end

  subgraph B[개발 및 테스트]
    direction LR
    A7 --> B1[분석 / 설계]
    B1 --> B2[변경 영향도 분석]
    B2 --> B3[개발 단위테스트]
    B3 --> B4[통합테스트]
    B4 --> B5[통합테스트 승인]
    B5 --> B6[보안취약점 점검]
    B5 --> |테스트 결과사항 등록| Z
  end

  subgraph C[변경확인 및 승인]
    direction LR
    B6 --> C1[변경내역 확인]
    C2{ + } --> C3[산출물 제출]
    C2 --> C4[기능개선 내역공유]
    C3 --> C5[산출물 QC승인]
    C3 --> Y
    Y --> C5
    C4 --> | 시연테스트 계획서 | C6[시연테스트] 
    C6 --> C7[베포테스트 서버반영요청]
    C7 --> C8((배포관리절차 - 정기,수시))
  end
```

```plantuml
---
title: 절차도
---
sequenceDiagram
  participant A as 품질관리자
  participant B as 개발 통합테스트 담당자
  participant C as 기능개선 관리자
  participant D as 한국지역정보개발원
  participant E as 행정안전부
  C->>C: 정기/수시 기능개선 검토회의
  C->>C: 기능개선 후보도출
  note right of C: 기능개선 계획(안)
  C->>D: 기능개선 후보선정
  note right of D: 기능개선 계획(안)
  D->>E: 기능개선 대상선정
  E->>C: 기능개선 계획수립
  C->>D: 기능개선 계획승인
  D->>B: 분석/설계
  B->>C: 변경 영향도 분석
  C->>B: 개발 단위테스트
  B->>B: 통합테스트
  B->>C: 통합테스트 승인
  note right of C: 테스트 결과사항 등록
  C->>D: Gitlab
  C->>C: 보안취약점 점검
  C->>A: 변경내역 확인
  A->>B: 산출물제출
  B->>A: 산출물 QC승인
  A->>C: 기능개선 내역공유
```

---

<TagLinks />