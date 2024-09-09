## NODE.JS

- Node 16.x || 18.x

## USING PNPM

- pnpm i OR pnpm i --legacy-peer-deps
- pnpm run dev

## Project Structure on Flat Design

```
├───src
│   ├───api ( api 관리 폴더 ) : 프로젝트에서 사용되는 전체적인 api호출을 생성 및 관리해주는 폴더
│   │     │
│   ├───page ( UI 상위 페이지 ) : UI화면 파일 생성 및 관리 폴더
│   │     ├───login ( 로그인 폴더 ): 로그인 UI화면 파일 생성 및 관리 폴더
│   │     │      ├───index ( 로그인 분기 파일 ) : 로그인 폴더 접근 후 로그인, 2차인증 분기 파일
│   │     │      ├───login ( 로그인 페이지 ) : 로그인(사이트 접속시 메인) UI화면
│   │     │      ├───verify ( 2차인증 페이지 ) : 로그인 이후 2차 인증 UI화면
│   │     ├───user ( 사용자 관리 폴더 ) : 사용자 관리 UI화면 파일 생성 및 관리 폴더
│   │     │      ├───detail ( 사용자 상세 폴더) : 사용자 관리 상세 페이지 UI화면 파일 생성 및 관리 폴더
│   │     │      │       ├───detail ( 사용자 상세 페이지 ) : 사용자 관리 상세 페이지 UI화면
│   │     │      │       ├───userAuth ( 사용자 상세 페이지 권한 테이블 ) : 사용자 관리 상세 페이지 권한 페이블 파일
│   │     │      │       ├───userInfo ( 사용자 상세 페이지 정보 수정 이력 테이블 ) : 사용자 관리 상세 페이지 정보 수정 이력 페이블 파일
│   │     │      ├───edit ( 사용자 수정 페이지 ) : 사용자 수정 페이지 UI화면
│   │     │      ├───index ( 사용자 분기 파일 ) : 사용자 관리 회원관리, 상세, 수정, 등록 분기 파일
│   │     │      ├───list ( 사용자 리스트 페이지 ) : 사용자 목록 페이지 UI화면
│   │     │      ├───new ( 사용자 등록 페이지 ) : 사용자 등록 페이지 UI화면
│   │     ├───403 ( 사용자 폴더 ) : 권한 오류시 UI화면
│   │     ├───404 ( 사용자 폴더 ) : 존재하지 않는 페이지 접근시 UI화면
│   │     ├───500 ( 사용자 폴더 ) : 서버 오류 발생시 UI화면
│   │     │
│   ├───layout ( layout 상위 페이지 ) : 프로젝트 화면별 레이아웃 파일 생성 및 관리 폴더
│   │     ├───auth ( 인증 폴더 ) : 인증관련 화면 레이아웃 생성 및 관리 폴더
│   │     ├───common ( 공통 폴더 ) : 공통으로 사용되는 레이아웃 생성 및 관리 폴더
│   │     ├───dashboatd ( 어드민 폴더 ) : 로그인 이후 전체적인 어드민 레이아웃 생성 및 관리 폴더
│   │     ├───main ( 메인 폴더 ) : 헤더, 메인, 풋터 등 전체적인 기본 구조 레이아웃 폴더
│   │     │
│   ├───hook ( hook 상위 페이지 ) : 상태 연동 파일 생성 및 관리 폴더
│   │     ├───useBooleans ( 인증 폴더 ) : 데이터값 전달 파일
│   │     ├───useLocalStorage ( 공통 폴더 ) : 로컬스토리지 데이터 사용 파일
│   │     ├───useResponsive ( 어드민 폴더 ) : 화면의 전체적인 반응형 처리 동작 파일
│   │     │
│   ├───components ( 컴포넌트 상위 페이지 ) : 화면을 구성하는 각 요소 단위를 컴포넌트화 하여 생성 및 관리 해주는 폴더 ex) table, label, loadingScreen
│   │     │
│   ├───type ( 타입 상위 페이지 ) : 화면에서 사용되는 데이터들의 타입을 지정해주고 생성 및 관리하는 폴더
│   │     │
│   ├───route ( 라우트 상위 페이지 ) : 화면 경로 및 url을 지정 및 생성, 관리 폴더
│   │     ├───components ( 컴포넌트 라우트 폴더 ) : 컴포넌트 ex) 로그인 등 의 페이지 에서 이동기능의 컴포넌트 생성 및 관리 폴더
│   │     ├───hook ( 공통 폴더 ) : params, pathname등의 값을 생성및 관리 해주는 파일 생성 및 관리
│   │     ├───main ( 어드민 폴더 ) :
│   │     │     ├───dashboard ( 어드민 폴더 ) : 로그인 이후 어드민 페이지 내부 모든 경로 생성및 관리 폴더
│   │     │     ├───index ( 로그인 폴더 ) : 사이트 접속시 생성되는 화면(현재는 로그인 페이지로 설정)
│   │     │     ├───main ( 메인 라우트 폴더 ) : 프로젝트 와 오류시 상황에 맞는 오류페이지를 표시해 주는 폴더
│   │     │
│   ├───assets ( 아이콘 관련 폴더 ) : 프로젝트에 사용할 파일을 저장하거나 복사하는 폴더
-------- 그외 config 파일
```

## CSS

    MUI-component를 사용해 프로 젝트를 구성 했으며 간단하게 사용법을 설명드리면

1. MUI 템플릿 불러오기: 필요한 컴포넌트를 사용하기 위해 해당 컴포넌트를 불러옵니다.

- import { Button, TextField, Typography } from '@mui/material';

2. MUI 템플릿 사용하기

   <div>
     <Typography variant="h1">Hello, MUI!</Typography>
     <TextField label="Enter something" variant="outlined" />
     <Button variant="contained" color="primary">
       Click Me
     </Button>
   </div>

   3. MUI 템플릿 커스터마이징하기

      MUI 컴포넌트는 다양한 props를 통해 커스터마이징할 수 있습니다. 예를 들어, Button 컴포넌트의 경우 variant와 color props를
      사용하여 스타일을 변경할 수 있습니다.

   <Button variant="outlined" color="secondary">
       Click Me
   </Button>

   4. 스타일에 타입 인터페이스 사용하기

      타입스크립트를 사용하여 MUI의 스타일을 타입 안전하게 관리할 수 있습니다. 예를 들어, 아래와 같이 컴포넌트의 스타일을 지정할 수 있습니다.

   import React from 'react';
   import { Button, ButtonProps } from '@mui/material';

   interface MyButtonProps extends ButtonProps {
   // 추가적인 커스텀 props 정의
   }

   const MyButton: React.FC<MyButtonProps> = ({ children, ...props }) => {
   return <Button {...props}>{children}</Button>;
   };

   export default MyButton;

### API

1. api폴더에 파일 생성
   (ex. 로그인 관련 api라면 `api/auth.ts` 생성)

2. api 호출은 해당 컴포넌트에서 호출

3. api 통신 때 데이터 가공이 필요하면 service폴더에서 파일 생성 후 함수를 만들어 데이터를 가공하여 전달
   (ex. 로그인 관련 service라면 `service/authSErvice.ts` 생성)

4. service파일을 service/index.ts에 연결

### CustomModal ( Custom Modal, Alert, Confirm )

- ModalProvider > CustomModal | Alert, Confirm 화면 제어

```
const {openModal, openAlert, openConfirm} = useModal();

  openModal({
    type: 'findStore', //모달 타입
    data: { // 커스텀 데이터로 해당 모달 제어
      onClickData: (store) => {
        setValue('store', store, { shouldValidate: true });
      },
    },
    onClose: () => {} //닫기 후 처리
  });

  openAlert({
    title: '타이틀',
    subtitle: '서브타이틀',
    onClose: () => {} //닫기 후 처리
  });

  openConfirm({
    title: '타이틀',
    content: '서브타이틀', //string, element
    onClick: () => {} //성공 후 제어
    onClose: () => {} //닫기 후 처리
  });

```
