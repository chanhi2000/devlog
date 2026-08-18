# 코딩테스트 문제 및 해답 정리

- 정확성 시간 제한 / 메모리 제한: 모든 문제 공통 **10초 / 2GB**

---

## 1. 로그 수집 필터링

### 문제 설명

당신은 로그 수집 프로그램을 만들게 되었습니다. 특정 조건들을 만족한 로그만을 수집해야 하며, 그 외의 로그는 수집하지 않아야 합니다.

조건은 다음과 같습니다.

- 로그는 `"team_name : t application_name : a error_level : e message : m"` 형식이어야 합니다.
  - `t`, `a`, `e`, `m`은 알파벳 소문자 혹은 알파벳 대문자로만 이루어진 길이 1 이상의 문자열입니다.
  - `team_name`, `application_name`, `error_level`, `message`, `:`, `t`, `a`, `e`, `m`은 한 칸의 공백으로 구분되어 있어야 합니다.
- 로그의 길이는 100 이하여야 합니다.

로그 수집 프로그램으로 분석할 로그들이 담긴 문자열 배열 `logs`가 매개변수로 주어질 때, `logs`에 담긴 로그 중 **수집하지 않는** 로그의 개수를 return 하도록 solution 함수를 완성해 주세요.

### 제한사항

- 1 ≤ `logs`의 길이 ≤ 100
  - 1 ≤ `logs`의 원소 길이 ≤ 200
  - `logs`의 원소는 알파벳, 숫자, 공백, 특수 문자로 이루어져 있습니다.

### 입출력 예

#### 입출력 예 #1

```json
[
  "team_name : db application_name : dbtest error_level : info message : test",
  "team_name : test application_name : I DONT CARE error_level : error message : x",
  "team_name : ThisIsJustForTest application_name : TestAndTestAndTestAndTest error_level : test message : IAlwaysTestingAndWillTestForever",
  "team_name : oberervability application_name : LogViewer error_level : error"
]
```

> 결과: 3

1. `"team_name : db application_name : dbtest error_level : info message : test"`
   - 형식에 맞는 로그입니다.
2. `"team_name : test application_name : I DONT CARE error_level : error message : x"`
   - application_name 내용에 `I DONT CARE`가 들어가 있습니다. 공백이 들어가면 안 되므로 수집하지 않는 로그입니다.
3. `"team_name : ThisIsJustForTest application_name : TestAndTestAndTestAndTest error_level : test message : IAlwaysTestingAndWillTestForever"`
   - 형식은 맞지만 로그의 길이가 100을 넘어가므로 수집하지 않는 로그입니다.
4. `"team_name : oberervability application_name : LogViewer error_level : error"`
   - message 부분이 누락되어 있으므로 수집하지 않는 로그입니다.

따라서, 수집하지 않는 로그는 총 3개이므로 3을 return 하면 됩니다.

#### 입출력 예 #2

```json
[
  "team_name : MyTeam application_name : YourApp error_level : info messag : IndexOutOfRange",
  "no such file or directory", 
  "team_name : recommend application_name : recommend error_level : info message : RecommendSucces11", 
  "team_name : recommend application_name : recommend error_level : info message : Success!",
  " team_name : db application_name : dbtest error_level : info message : test", 
  "team_name    : db application_name : dbtest error_level : info message : test", 
  "team_name : TeamTest application_name : TestApplication error_level : info message : ThereIsNoError"
]
```

> 결과: 6

1. `"team_name : MyTeam application_name : YourApp error_level : info messag : IndexOutOfRange"`
   - message가 들어가야 할 부분에 e가 빠진 messag가 들어가 있으므로 수집하지 않는 로그입니다.
2. `"no such file or directory"`
   - 형식에 전혀 맞지 않으므로 수집하지 않는 로그입니다.
3. `"team_name : recommend application_name : recommend error_level : info message : RecommendSucces11"`
   - message 내용에 숫자가 들어있으므로 수집하지 않는 로그입니다.
4. `"team_name : recommend application_name : recommend error_level : info message : Success!"`
   - message 내용에 특수문자가 들어있으므로 수집하지 않는 로그입니다.
5. `" team_name : db application_name : dbtest error_level : info message : test"`
   - 가장 앞부분에 공백이 있으므로 수집하지 않는 로그입니다.
6. `"team_name    : db application_name : dbtest error_level : info message : test"`
   - team_name과 `:` 사이에 공백이 한 칸이 아니므로 수집하지 않는 로그입니다.
7. `"team_name : TeamTest application_name : TestApplication error_level : info message : ThereIsNoError"`
   - 형식에 맞는 로그입니다.

따라서, 수집하지 않는 로그는 총 6개이므로 6을 return 하면 됩니다.

### 해답

```js
function solution(logs) {
  const pattern = /^team_name : [A-Za-z]+ application_name : [A-Za-z]+ error_level : [A-Za-z]+ message : [A-Za-z]+$/;

  /*let answer = 0;
  for (const log of logs) {
    if (log.length > 100 || !pattern.test(log)) {
      answer++;
    }
  }
  return answer;*/
  return logs.reduce((acc, log) => {
    return (log.length > 100 || !pattern.test(log)) ? acc + 1 : acc;
  }, 0);
}
```

```java
import java.util.regex.Pattern;

class Solution {
    private static final Pattern PATTERN = Pattern.compile(
        "^team_name : [A-Za-z]+ application_name : [A-Za-z]+ error_level : [A-Za-z]+ message : [A-Za-z]+$"
    );

    public int solution(String[] logs) {
        int answer = 0;
        for (String log : logs) {
            if (log.length() > 100 || !PATTERN.matcher(log).matches()) {
                answer++;
            }
        }
        return answer;
    }
}

```

#### 풀이 요약

- `[A-Za-z]+`로 알파벳 대소문자만으로 이루어진 길이 1 이상의 값을 검사합니다.
- `^`와 `$`로 앞뒤에 다른 문자가 붙는 경우를 차단하고, 키워드와 `:` 사이 공백은 정확히 한 칸으로 고정합니다.
- 길이 조건은 `log.length > 100`으로 별도 검사합니다.
- 복잡도: 시간 O(전체 로그 길이), 공간 O(1)

---

## 2. 앱 삭제

### 문제 설명

당신의 휴대폰에는 1~`n`번의 번호를 가진 앱 `n`개가 설치되어 있습니다. 앱 이용 기록이 주어지며, 앱 이용 기록 하나는 이용 일자, 이용한 앱 번호와 이용 시간으로 이루어져 있습니다.

당신은 앱 이용 기록을 보고 다음 두 가지 조건을 모두 만족하는 앱들을 삭제하려 합니다.

1. 최근 `recent`일 동안 `recently_use`시간 **이하**로 이용한 앱
2. 전체 기간 동안 `total_use`시간 **미만**으로 이용한 앱

다음은 앱의 개수 `n` = 4, `recent` = 5, `recently_use` = 5, `total_use` = 10일 때의 예시입니다.

**앱 이용 기록**

| 이용 일자 | 앱 번호 | 이용 시간 |
|---|---|---|
| 1일 전 | 1번 앱 | 2시간 |
| 1일 전 | 2번 앱 | 3시간 |
| 2일 전 | 4번 앱 | 3시간 |
| 3일 전 | 1번 앱 | 4시간 |
| 5일 전 | 3번 앱 | 3시간 |
| 5일 전 | 2번 앱 | 2시간 |
| 7일 전 | 4번 앱 | 4시간 |
| 8일 전 | 3번 앱 | 3시간 |
| 10일 전 | 4번 앱 | 3시간 |

**앱별 이용한 시간**

| 앱 번호 | 최근 5일 | 전체 기간 |
|---|---|---|
| 1번 앱 | 6시간 | 6시간 |
| 2번 앱 | 5시간 | 5시간 |
| 3번 앱 | 3시간 | 6시간 |
| 4번 앱 | 3시간 | 10시간 |

- 1번 앱은 최근 5일 동안 6시간 동안 이용하였으므로 삭제하지 않습니다.
- 2번, 3번 앱은 최근 5일 동안 5시간 이하로 이용하였으면서, 전체 기간 동안 10시간 미만으로 이용하였으므로 삭제합니다.
- 4번 앱은 최근 5일 동안 5시간 이하로 이용하였지만, 전체 기간 동안 10시간 이상 이용한 앱이므로 삭제하지 않습니다.

그러므로 삭제해야 할 앱 번호는 2번, 3번 앱입니다.

앱의 개수를 나타내는 정수 `n`, 최근 일자 기준을 나타내는 정수 `recent`, 삭제할 시간 기준을 나타내는 두 정수 `recently_use`, `total_use`와 앱 이용 기록을 담은 2차원 정수 배열 `records`가 매개변수로 주어집니다. 삭제해야 할 앱 번호를 오름차순으로 1차원 정수 배열에 담아 return 하도록 solution 함수를 완성해주세요.

### 제한사항

- 1 ≤ `n` ≤ 100
- 1 ≤ `recent` ≤ 1,000
- 1 ≤ `recently_use` ≤ `total_use` ≤ 1,000
- 1 ≤ `records`의 길이 ≤ 10,000
  - `records`의 원소는 [`이용 일자`, `앱 번호`, `이용 시간`] 형태의 길이 3인 정수 배열이며, `이용 일자`일 전에 `앱 번호`를 가진 앱을 `이용 시간` 동안 이용하였음을 나타냅니다.
  - 1 ≤ `이용 일자` ≤ 1,000
  - 1 ≤ `앱 번호` ≤ `n`
  - 1 ≤ `이용 시간` ≤ 20
  - `records`는 `이용 일자` 기준 오름차순으로 정렬되어 있습니다.
- 삭제해야 할 앱이 적어도 하나 이상 존재하는 입력만 주어집니다.

### 입출력 예

| `n` | recent | recently_use | total_use | records | result |
|---|---|---|---|---|---|
| 4 | 5 | 5 | 10 | `[[1,1,2],[1,2,3],[2,4,3],[3,1,4],[5,3,3],[5,2,2],[7,4,4],[8,3,3],[10,4,3]]` | `[2, 3]` |
| 3 | 3 | 10 | 30 | `[[1,2,7],[2,1,3],[3,1,5],[4,2,15],[5,2,10]]` | `[1, 3]` |

### 입출력 예 설명

#### 입출력 예 #1

> 문제 예시와 같습니다.

- n (앱 개수): `4`
- recent: `4`
- recently_use (최근 일자): `5`
- total_use (삭제할 일자): `5`

records: 

```json
[
  [1,1,2],
  [1,2,3],
  [2,4,3],
  [3,1,4],
  [5,3,3],
  [5,2,2],
  [7,4,4],
  [8,3,3],
  [10,4,3]
]
```

> 결과: `[2, 3]`

#### 입출력 예 #2

- n: `3`
- recent: `3`
- recently_use: `10`
- total_use: `30`

records: 

```json
[
  [1,2,7],
  [2,1,3],
  [3,1,5],
  [4,2,15],
  [5,2,10]
]
```

> 결과: `[2, 3]`

**앱 이용 기록**

| 이용 일자 | 앱 번호 | 이용 시간 |
|---|---|---|
| 1일 전 | 2번 앱 | 7시간 |
| 2일 전 | 1번 앱 | 3시간 |
| 3일 전 | 1번 앱 | 5시간 |
| 4일 전 | 2번 앱 | 15시간 |
| 5일 전 | 2번 앱 | 10시간 |

**앱마다 이용한 시간**

| 앱 번호 | 최근 3일 | 전체 기간 |
|---|---|---|
| 1번 앱 | 8시간 | 8시간 |
| 2번 앱 | 7시간 | 32시간 |
| 3번 앱 | 0시간 | 0시간 |

- 1번, 3번 앱은 최근 3일 동안 10시간 이하로 이용하였으면서, 전체 기간 동안 30시간 미만으로 이용하였으므로 삭제합니다.
- 2번 앱은 최근 3일 동안 10시간 이하로 이용하였지만, 전체 기간 동안 30시간 이상 이용한 앱이므로 삭제하지 않습니다.

따라서 `[1, 3]`을 return 합니다.

### 해답

```js
function solution(n, recent, recently_use, total_use, records) {
  const recentSum = new Array(n + 1).fill(0);
  const totalSum = new Array(n + 1).fill(0);

  for (const [day, app, time] of records) {
    totalSum[app] += time;
    if (day <= recent) {
      recentSum[app] += time;
    }
  }

  /* const answer = [];
  for (let i = 1; i <= n; i++) {
    if (recentSum[i] <= recently_use && totalSum[i] < total_use) {
      answer.push(i);
    }
  }
  return answer; */
  return Array.from({ length: n }, (_, i) => i + 1)
    .filter((app) => recentSum[app] <= recently_use && totalSum[app] < total_use);
}
```

```java
import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] solution(
        int n, int recent, int recently_use, int total_use,
        int[][] records
    ) {
        int[] recentSum = new int[n + 1];
        int[] totalSum = new int[n + 1];

        for (int[] r : records) {
            int day = r[0], app = r[1], time = r[2];
            totalSum[app] += time;
            if (day <= recent) {
                recentSum[app] += time;
            }
        }

        List<Integer> list = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            if (recentSum[i] <= recently_use && totalSum[i] < total_use) {
                list.add(i);
            }
        }

        int[] answer = new int[list.size()];
        for (int i = 0; i < answer.length; i++) {
            answer[i] = list.get(i);
        }
        return answer;
    }
}
```

#### 풀이 요약

- 앱별로 최근 사용 시간(`이용 일자 <= recent`)과 전체 사용 시간을 누적합니다.
- 조건 1은 **이하**(`<=`), 조건 2는 **미만**(`<`)이므로 비교 연산자에 주의합니다.
- 복잡도: 시간 O(`records` 길이 + n), 공간 O(n)

---

## 3. 재택근무 대상자

### 문제 설명

어떤 회사에서 담당 업무에 따라 사원 몇 명을 재택근무로 전환하려 합니다. 업무는 `재택 가능한 업무`, `출근해야 할 업무` 두 가지 종류가 있습니다. 어떤 사원의 업무가 `재택 가능한 업무`로만 이루어져 있다면, 그 사원은 재택근무 대상자입니다.

회사에는 1번부터 `num_employees`번까지 각각 다른 사원 번호를 가진 `num_employees`명의 사원들이 있습니다. 회사의 사원들은 `num_teams`개의 팀으로 나뉘어 있으며, 사원마다 소속된 팀 번호가 있습니다. 팀마다 최소 한 명은 출근해야 합니다. 만약 어떤 팀에서 팀원 모두가 재택근무 대상자일 때, 사원 번호가 가장 빠른 사람이 출근하기로 했습니다. 이에 해당하지 않는 재택근무 대상자들은 재택근무를 하게 됩니다. 당신은 재택근무를 하게 될 사원의 번호를 구하려 합니다.

다음과 같은 업무와 사원들의 정보가 있을 때의 예시를 들어보겠습니다.

- 재택 가능한 업무: `development marketing hometask`
- 출근해야 할 업무: `recruitment education officetask`

| 사원 번호 | 소속 팀 번호 | 담당 업무 |
|---|---|---|
| 1 | 1 | development hometask |
| 2 | 1 | recruitment marketing |
| 3 | 2 | hometask |
| 4 | 2 | development marketing hometask |
| 5 | 3 | marketing |
| 6 | 3 | officetask |
| 7 | 3 | development |

- 재택 가능한 업무만 하는 사원은 (1, 3, 4, 5, 7) 5명입니다.
- 1, 3번 팀은 출근하는 팀원이 있지만 2번 팀은 모두 재택근무 대상자입니다. 그러므로, 2번 팀에서 사원 번호가 가장 빠른 3번 사원은 출근해야 합니다.
- 재택근무를 하게 될 사원은 (1, 4, 5, 7) 4명입니다.

팀의 개수를 나타내는 정수 `num_teams`, 재택 가능한 업무들을 나타내는 문자열 배열 `remote_tasks`, 출근해야 할 업무들을 나타내는 문자열 배열 `office_tasks`, 사원들의 정보를 1번 사원부터 순서대로 나타내는 문자열 배열 `employees`가 매개변수로 주어집니다. 재택근무를 하게 될 사원들의 번호를 정수 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해 주세요. 최소 한 명 이상 재택근무를 하게 될 사원이 존재하는 경우만 주어집니다.

### 제한사항

- 1 ≤ `num_teams` ≤ 10
- 1 ≤ `remote_tasks`의 길이 ≤ 100
- 3 ≤ `remote_tasks`의 원소의 길이 ≤ 20
- 1 ≤ `office_tasks`의 길이 ≤ 100
- 3 ≤ `office_tasks`의 원소의 길이 ≤ 20
- `remote_tasks`와 `office_tasks`는 중복되는 원소가 나타나지 않으며, 서로 중복되는 원소가 없습니다.
- `remote_tasks`와 `office_tasks`의 원소는 알파벳 소문자로만 이루어져 있습니다.
- `num_teams` < `employees`의 길이 = `num_employees` ≤ 100
- `employees`의 원소는 `"team_number task_list"` 형태의 문자열입니다. `team_number`는 해당 사원의 팀 번호를 나타내고, `task_list`는 해당 사원의 담당 업무를 나타내는 문자열입니다.
  - 1 ≤ `team_number` ≤ `num_teams`
  - 1 ~ `num_teams`의 각각의 팀에는 적어도 한 명 이상 소속된 팀원이 있습니다.
  - 모든 사원은 최소 1개 ~ 최대 40개의 업무를 담당합니다.
  - `task_list`는 담당 업무를 하나의 공백으로 구분해 담고 있습니다. 반드시 `remote_tasks`, `office_tasks` 둘 중 하나에 나타난 업무만 담겨 있습니다.
  - `task_list`에는 같은 업무가 중복되어 나타나지 않습니다.

### 입출력 예

| num_teams | remote_tasks | office_tasks | employees | result |
|---|---|---|---|---|
| 3 | `["development","marketing","hometask"]` | `["recruitment","education","officetask"]` | `["1 development hometask","1 recruitment marketing","2 hometask","2 development marketing hometask","3 marketing","3 officetask","3 development"]` | `[1,4,5,7]` |
| 2 | `["design"]` | `["building","supervise"]` | `["2 design","1 supervise building design","1 design","2 design"]` | `[3,4]` |

### 입출력 예 설명

#### 입출력 예 #1

- 문제 예시와 동일합니다.

#### 입출력 예 #2

- 재택 가능한 업무: `design`
- 출근해야 할 업무: `building supervise`

| 사원 번호 | 소속 팀 번호 | 담당 업무 |
|---|---|---|
| 1 | 2 | design |
| 2 | 1 | supervise building design |
| 3 | 1 | design |
| 4 | 2 | design |

- 재택 가능한 업무만 하는 사원은 (1, 3, 4) 3명입니다.
- 1번 팀은 출근하는 팀원이 있지만 2번 팀은 모두 재택근무 대상자입니다. 그러므로, 2번 팀에서 사원 번호가 가장 빠른 1번 사원은 출근해야 합니다.
- 재택근무를 하게 될 사원은 (3, 4) 2명입니다.

### 해답

```js
function solution(num_teams, remote_tasks, office_tasks, employees) {
  const remoteSet = new Set(remote_tasks);

  const n = employees.length;
  const hasOffice = new Array(num_teams + 1).fill(false); // 팀별 출근자 존재 여부
  const firstMember = new Array(num_teams + 1).fill(0);   // 팀별 가장 빠른 사원 번호
  /*const canRemote = new Array(n + 1).fill(false);         // 사원별 재택 대상 여부

  employees.forEach((info, idx) => {
    const id = idx + 1;
    const [team, ...tasks] = info.split(" ");
    const t = Number(team);

    // if (firstMember[t] === 0) firstMember[t] = id;
    if (!firstMember[t]) firstMember[t] = id;

    const isRemote = tasks.every((task) => remoteSet.has(task));
    if (isRemote) {
      canRemote[id] = true;   // 사원 번호로 기록
    } else {
      hasOffice[t] = true;    // 팀 번호로 기록
    }
  });

  // 팀원 전원이 재택 대상자면 사원 번호가 가장 빠른 사람은 출근
  for (let t = 1; t <= num_teams; t++) {
    if (!hasOffice[t]) {
      canRemote[firstMember[t]] = false;
    }
  }

  const answer = [];
  for (let id = 1; id <= n; id++) {
    if (canRemote[id]) answer.push(id);
  }    
  return answer;*/
  const canRemote = employees.map((info, idx) => {
    const [team, ...tasks] = info.split(" ");
    const t = Number(team);
    if (!firstMember[t]) firstMember[t] = idx+1;

    const ok = tasks.every((task) => remoteSet.has(task));
    if (!ok) hasOffice[t] = true;
    return ok;
  });

  const mustGoIn = new Set(
    firstMember.filter((id, t) => t>0 && !hasOffice[t])
  );

  return employees.map((_, idx) => idx+1)
    .filter((id) => canRemote[id-1] && !mustGoIn.has(id));
}
```

```java
import java.util.*;

class Solution {
    public int[] solution(
        int num_teams, 
        String[] remote_tasks, 
        String[] office_tasks,
        String[] employees
    ) {
        Set<String> remoteSet = new HashSet<>(Arrays.asList(remote_tasks));

        int n = employees.length;
        boolean[] hasOffice = new boolean[num_teams + 1]; // 팀별 출근자 존재 여부
        int[] firstMember = new int[num_teams + 1];       // 팀별 가장 빠른 사원 번호
        boolean[] canRemote = new boolean[n + 1];         // 사원별 재택 대상 여부

        for (int idx = 0; idx < n; idx++) {
            int id = idx + 1;
            String[] parts = employees[idx].split(" ");
            int t = Integer.parseInt(parts[0]);

            if (firstMember[t] == 0) firstMember[t] = id;

            boolean isRemote = true;
            for (int i = 1; i < parts.length; i++) {
                if (!remoteSet.contains(parts[i])) {
                    isRemote = false;
                    break;
                }
            }

            if (isRemote) {
                canRemote[id] = true;   // 사원 번호로 기록
            } else {
                hasOffice[t] = true;    // 팀 번호로 기록
            }
        }

        for (int t = 1; t <= num_teams; t++) {
            if (!hasOffice[t]) {
                canRemote[firstMember[t]] = false;
            }
        }

        List<Integer> list = new ArrayList<>();
        for (int id = 1; id <= n; id++) {
            if (canRemote[id]) list.add(id);
        }
        return list.stream().mapToInt(Integer::intValue).toArray();
    }
}
```

#### 풀이 요약

- 사원의 모든 업무가 `remote_tasks`에 속하면(`every`) 재택 대상자, 아니면 소속 팀에 출근자가 있다고 기록합니다.
- 출근자가 없는 팀은 가장 빠른 사원 번호를 재택 대상에서 제외합니다.
- 주의: 재택 대상 기록은 **사원 번호(`id`)**, 출근자 기록은 **팀 번호(`t`)** 인덱스를 사용합니다.
- 복잡도: 시간 O(전체 업무 수), 공간 O(n + num_teams)

---

## 4. 하루 처리 가능 업무량의 최솟값

### 문제 설명

한 회사에서 신입사원을 뽑으려고 합니다. 신입사원을 뽑는 기준은 하루에 처리 가능한 업무량이 기준값 이상이어야 한다는 것입니다. 당신은 이 기준값을 구하려고 합니다.

이 회사에서 근무한 한 직원이 지난 1년 동안 처리한 업무를 바탕으로 하루에 얼마나 많은 양의 일을 처리할 수 있어야 하는지 계산하려고 합니다.

한 업무에 대한 정보는 `[요청일, 마감일, 업무량]` 형태를 갖고 있습니다. `요청일`은 해당 업무가 요청되어 업무를 시작할 수 있는 날을 의미하며, `마감일`은 해당 업무가 처리되어 끝나야 하는 기한을 의미합니다. 마감일이 되기 전에 업무를 끝내거나, 마감일 당일에 업무를 끝내는 것도 가능합니다. `업무량`은 해당 업무를 끝내기 위해 얼마나 많은 일을 해야 하는 것인지를 의미합니다. 요청일, 마감일은 0 이상의 정수, 업무량은 1 이상의 정수로 나타냅니다.

다음은 주어진 업무를 나타내는 예시입니다.

| 업무 번호 | 요청일 | 마감일 | 업무량 |
|---|---|---|---|
| 1 | 0 | 1 | 4 |
| 2 | 1 | 3 | 7 |
| 3 | 2 | 2 | 3 |
| 4 | 3 | 4 | 5 |

하루에 처리 가능한 업무량이 4인 경우, 아래 방법으로 모든 업무를 기한 내에 처리할 수 있습니다.

- 0일에 1번 업무를 모두 처리합니다. 마감일까지 1일 남았지만 마감일 이전에 일을 끝내는 것이 가능합니다.
- 1일에 새로 요청된 2번 업무를 4만큼 처리합니다. 2번 업무는 앞으로 3만큼의 업무량이 남았습니다.
- 2일에 새로 요청된 3번 업무를 모두 처리합니다. 아직 1만큼 더 업무를 처리할 수 있으므로, 2번 업무를 1만큼 처리합니다. 2번 업무는 앞으로 2만큼의 업무량이 남았습니다.
- 3일에 2번 업무를 마저 처리합니다. 아직 2만큼 더 업무를 처리할 수 있으므로, 새로 요청된 4번 업무를 2만큼 처리합니다. 4번 업무는 앞으로 3만큼의 업무량이 남았습니다.
- 4일에 4번 업무를 마저 처리합니다.

위와 같이 하루에 처리 가능한 업무량이 4인 경우, 모든 업무를 기한 내에 처리할 수 있습니다. 만약 4보다 적다면, 주어진 모든 업무를 기한 내에 처리할 수 없습니다. 따라서 모든 업무를 처리하기 위한, 하루에 처리 가능한 업무량의 최솟값은 4입니다.

지난 1년간 모든 업무의 요청일, 마감일, 업무량을 담은 2차원 정수 배열 `tasks`가 매개변수로 주어집니다. 주어진 모든 업무를 기한 내에 처리하기 위해 필요한 '하루에 처리 가능한 업무량'의 최솟값을 return 하도록 solution 함수를 완성해주세요.

### 제한사항

- 1 ≤ `tasks`의 길이 ≤ 20,000
  - `tasks`의 원소는 `[요청일, 마감일, 업무량]` 형태의 정수 배열입니다.
  - 0 ≤ 요청일 ≤ 마감일 < 365
  - 1 ≤ 업무량 ≤ 1,000,000
  - `tasks`는 요청일을 기준으로 오름차순 정렬되어 있습니다.

### 입출력 예

| tasks | result |
|---|---|
| `[[0, 1, 4], [1, 3, 7], [2, 2, 3], [3, 4, 5]]` | 4 |
| `[[0, 0, 5], [1, 1, 10], [2, 2, 15], [3, 3, 20]]` | 20 |
| `[[0, 300, 301], [0, 150, 151], [151, 300, 150]]` | 2 |

### 입출력 예 설명

#### 입출력 예 #1

- 문제 예시와 같습니다.

#### 입출력 예 #2

- 모든 요청을 요청이 들어온 당일에 처리해야 합니다.
- 3일에 새로 들어온 요청을 하루 만에 처리하기 위해서는 '하루 처리 가능 업무량'이 20 이상이어야 하며, '하루 처리 가능 업무량'이 20일 때 주어진 모든 업무를 기한 내에 처리할 수 있습니다.
- 따라서 20을 return 합니다.

#### 입출력 예 #3

- 첫 번째 요청은 0일부터 300일까지 하루에 1만큼 업무를 처리하면 기한 내에 처리할 수 있습니다.
- 두 번째 요청은 0일부터 150일까지 하루에 1만큼 업무를 처리하면 기한 내에 처리할 수 있습니다.
- 세 번째 요청은 151일부터 300일까지 하루에 1만큼 업무를 처리하면 기한 내에 처리할 수 있습니다.
- 따라서 '하루 처리 가능 업무량'이 2일 때 주어진 모든 업무를 기한 내에 처리할 수 있습니다. 따라서 2를 return 합니다.

### 해답

```js
const DAYS = 365;

function solution(tasks) {
  // w[s][e] = total workload of tasks with start day s and deadline e
  const w = Array.from({ length: DAYS }, () => new Array(DAYS).fill(0));
  for (const [s, e, v] of tasks) w[s][e] += v;

  // W[b] = total workload of tasks fully inside [a, b], for the current a
  const W = new Array(DAYS).fill(0);
  let answer = 0;

  for (let a = DAYS - 1; a >= 0; a--) {
    let row = 0; // workload of tasks starting exactly at a with deadline <= b
    for (let b = a; b < DAYS; b++) {
      row += w[a][b];
      W[b] += row;
      const len = b - a + 1;
      answer = Math.max(answer, Math.floor((W[b] + len - 1) / len)); // ceil
    }
  }
  return answer;

  // byStart[요청일] = [[마감일, 업무량], ...]
  const byStart = Array.from({ length: DAYS }, () => []);
  let maxTotal = 0;
  for (const [s, e, w] of tasks) {
    byStart[s].push([e, w]);
    maxTotal += w;
  }

  /**
   * @name canFinish
   * @description 하루 처리량 C로 모든 업무를 기한 내에 끝낼 수 있는지 판정
   * 
   * @param {number} C 하루처리량
   * @return true: 끝낼 수 있음, false: 끝낼 수 없음
   */
  const canFinish = (C) => {
    const remain = new Array(DAYS).fill(0); // remain[마감일] = 남은 업무량

    for (let d = 0; d < DAYS; d++) {
      for (const [e, w] of byStart[d]) {
        remain[e] += w;
      }

      // 마감일이 빠른 업무부터 C만큼 처리 (EDF)
      let cap = C;
      for (let e = d; e < DAYS && cap > 0; e++) {
        if (remain[e] === 0) continue;
        const use = Math.min(cap, remain[e]);
        remain[e] -= use;
        cap -= use;
      }

      // 오늘이 마감인 업무가 남아 있으면 실패
      if (remain[d] > 0) return false;
    }
    return true;
  }

  // 하루 처리량에 대한 이분 탐색
  let lo = 1;
  let hi = maxTotal;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (canFinish(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}
```

```java
import java.util.ArrayList;
import java.util.List;

class Solution {
    private static final int DAYS = 365;
    private List<int[]>[] byStart;

    public long solution(int[][] tasks) {
        byStart = new List[DAYS];
        for (int d = 0; d < DAYS; d++) byStart[d] = new ArrayList<>();

        long maxTotal = 0;
        for (int[] task : tasks) {
            byStart[task[0]].add(new int[]{task[1], task[2]}); // [마감일, 업무량]
            maxTotal += task[2];
        }

        long lo = 1, hi = maxTotal;
        while (lo < hi) {
            long mid = (lo + hi) / 2;
            if (canFinish(mid)) hi = mid;
            else lo = mid + 1;
        }
        return lo;
    }

    /**
     * canFinish
     * 하루 처리량 C로 모든 업무를 기한 내에 끝낼 수 있는지 판정
     * 
     * @param C 하루처리량
     * @return true: 끝낼 수 있음, false: 끝낼 수 없음
     */
    private boolean canFinish(long C) {
        long[] remain = new long[DAYS]; // remain[마감일] = 남은 업무량

        for (int d = 0; d < DAYS; d++) {
            for (int[] t : byStart[d]) {
                remain[t[0]] += t[1];
            }

            // 마감일이 빠른 업무부터 C만큼 처리 (EDF)
            long cap = C;
            for (int e = d; e < DAYS && cap > 0; e++) {
                if (remain[e] == 0) continue;
                long use = Math.min(cap, remain[e]);
                remain[e] -= use;
                cap -= use;
            }

            // 오늘이 마감인 업무가 남아 있으면 실패
            if (remain[d] > 0) return false;
        }
        return true;
    }
}
```

#### 풀이 요약

- 하루 처리량이 클수록 기한을 맞추기 쉬우므로(단조성) **이분 탐색**으로 최솟값을 찾습니다.
- 판정은 날짜별로 시뮬레이션하며 **마감일이 가장 빠른 업무부터 처리(EDF)** 합니다. 이 방식이 가능 여부를 가장 정확하게 판단합니다.
- 날짜가 365일뿐이므로 힙 대신 마감일별 남은 업무량 배열을 사용합니다.
- 총 업무량은 최대 2 × 10^10이지만 JavaScript `Number`의 안전 정수 범위(약 9 × 10^15) 안이므로 문제없습니다.
- 복잡도: 시간 O(log(총 업무량) × 365² + n), 공간 O(365 + n)
