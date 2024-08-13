# 🍺 Eslint rule

코드 품질 향상을 위한 규칙

---

### Type

```
  0 =   off   = 끄기
  1 = warning = 경고
  2 =  error  = 오류
```

### unused-imports/no-unused-vars : 사용되지 않는 import에 대한 경고

```
 'off' or [{warning or error}, {var, varsIgnorePattern,args, argsIgnorePattern }]
  > var: 'all'|'local'
         변수 선언문에 대한 경고 처리 방식을 지정합니다.
          "all": 모든 변수 선언문에 대해 경고를 발생,
          "local": 지역 변수에 대해서만 경고를 발생
          기본값: "all".
  > varsIgnorePattern :  "^_"
          정규식으로 지정된 패턴에 일치하는 변수 선언문은 경고하지 않음
          기본값: "^_"
  > args:  "all"|"after-used"
          함수의 인수에 대한 경고 처리 방식을 지정
            "all": 모든 인수에 대해 경고를 발생
            "after-used": 사용된 이후에만 경고를 발생
            기본값: "all"
  > argsIgnorePattern: "^_"
          정규식으로 지정된 패턴에 일치하는 함수 인수는 경고하지 않음
          기본값: "^_"

 ** "plugins": ["unused-imports"] 와 함께 사용


```

### unused-imports/no-unused-imports

    unused-imports 기본 세팅 2 >> 사용되지 않은 import에 대한 경고를 활성화

### import/no-unresolved

    eslint-import-resolver-typescript 필수옵션 1 >> import 경로가 잘못된 경우 경고를 활성화

### react/jsx-filename-extension

    jsx 파일 확장자 .jx, .jsx, .ts, .tsx 허용

### no-param-reassign

    파라미터 재할당에 대한 오류 비활성화 (변경인지못하거나 의도와 다른 동작이 있을 수 있어 있는 Rule )

### react/prop-types

    rops 유효성 검사를 허용 여부

### react/require-default-props

    필수 prop이 아닌 모든 prop에 대해 defaultProps 정의를 적용 여부

### react/no-array-index-key

    배열의 index를 key로 사용할 경우 오류 활성화 여부
     목록 렌더링의 항목 순서는 항목이 삽입되거나 삭제되거나 배열이 재정렬되면
     시간이 지남에 따라 변경될 수 있습니다. 키로 인덱스를 사용하면 종종 미묘하고
     혼란스러운 오류가 발생

### react/react-in-jsx-scope

    JSX를 사용할 때 React를 import할 필요가 없도록

### no-unsafe-optional-chaining

     undefined로 확인되는 값에서 optional chanining에 대한 경고를 활성화

### react/jsx-props-no-spreading

     props로 받은 것 바로 props로 넘기기 허용

### import/order

     import 순서 규칙 정의 여부

### no-console

     콘솔 사용 시 발생하는 경고

### no-shadow / @typescript-eslint/no-shadow

     변수와 함수 이름이 외부 범위와 중복 시 오류

### @typescript-eslint/naming-convention

     명명 규칙 오류 (정의 가능)

### import/no-cycle

     서로가 import 시 오류

### import/no-extraneous-dependencies

     테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용

### jsx-a11y/label-has-associated-control

     form label이 form control과 관련이 있는지

### jsx-a11y/no-autofocus

     autoFocus prop을 사용하지 않도록 강제 여부

### no-restricted-imports

```
     특정 경로의 import
     'off' or [{warning or error}, {patterns : ['막을 경로']}]

```

### no-unused-vars / @typescript-eslint/no-unused-vars

     unused-imports 기본 세팅 1 >> 사용되지 않은 변수에 대한 경고를 비활성화

### prettier/prettier

```
     prettierrc에서 설정한 형식이 어긋날 시
     'off' or [{warning or error}, {prettier 규칙}]

```

참고

```
https://www.npmjs.com/package/@typescript-eslint/eslint-plugin/v/5.27.1-alpha.14
https://velog.io/@sangbin2/eslint-prettier-initial-settings

```
