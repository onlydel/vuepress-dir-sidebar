# Tasks

## 기능

- 일종의 todo와 같은 작은 개념에서 시작한다.
- 할일을 기록한다.
- 주간회의시 활용할 수 있다.
- 시작일시와 완료일시를 지정할수 있지만 필수는 아니다.
- 깃허브 이슈와 연동할수 있다.
- 일정 달력에 표시할 수 있다.
- 프로젝트 하위 속성 으로서 포함될수 있다.

## schema

``` javascript
{
    subject: {
        type: String,
    },
    state: {
        type: String,
        allowedValues: ['plan', 'working', 'finished'],
    },
    startAt: {
        label: '시작예정일시',
        type: Date,
    },
    finishAt: {
        label: '완료예정일시',
        type: Date,
    }
    startedAt: {
        label: '시작일시',
        type: Date,
    },
    finishedAt: {
        label: '완료일시',
        type: Date,
    }
}
```