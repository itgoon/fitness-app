# 🍺 Project Structure

## Project Structure on Flat Design

```
public
├── 정적 이미지 파일
├── 정적 폰트 파일
src
├── api (서버 통신)
├── assets (정적 파일)
├── components (재사용 컴포넌트)
├── hooks (custom hook)
├── models (데이터 구조 모델)
├── pages (view)
├── provider ()
├── route (라우팅)
├── services (서비스)
├── store (상태관리)
├── styles (스타일)
├── utils (공통 상수 및 함수 기능별 정리)
-------- 그외 config 파일
```

### Router

###### 구조

```
route/
├── index.ts
├── routes.ts
├── AppRoutes.tsx
```

###### routes 구성

```
├── 공통
├── 점주
    ├── 점주 페이지에서 사용할 페이지 목록
├── 직원
    ├── 직원 페이지에서 사용할 페이지 목록

```

### CRUD 구조

```
pages/
...
├── user
    ├── index.ts
    ├── User.tsx (조회)
    ├── UpdateUser.tsx (등록/수정)

```

### pages 구조

/pages 내 기본 CRUD 구조

```
pages/
├── login (공통)
    ├── index.ts
    ├── Login.tsx
├── owner (점주_하위 점주 페이지에서 사용하는 페이지)
    ├── main
       ├── index.ts
       ├── Main.tsx
├── employee (직원_하위 점주 페이지에서 사용하는 페이지)
    ├── main
       ├── index.ts
       ├── Main.tsx
       ...
```

## Oepn Api Generator [API Docs](http://3.39.62.104/docs)

##### openapi-generator-cli 모듈을 통해 API Model, Interface 자동 생성 방법

```

    pnpm gen-api ( src/api 하위 폴더내 model API Interface 생성)

```

## Network 통신

##### React Hooks 방법

```
React Hooks

import useApi from 'src/hooks/useApi';

const res = useApi.user.me();
```

##### Service 파일 통해 호출 방법

```
Service

import * as userService from 'src/services/userService';
const me = userService.me();
```

## 상태관리

##### Recoil 라이브러리를 이용한 상태관리 (v.0.7.7)

###### 구조

```
store/
├── index.ts
├── layoutStore.ts (레이아웃 관련 store)
```

###### 사용

```
import Store from "@/store";
import { useRecoilState } from "recoil";

const [lang, setLang] = useRecoilState(Store.Layout.languageState);


 setLang('ko'); //SET


 <>{lang}</> //GET
```
