# SPC TFT 프로젝트 가이드

## Rest API 명세서

#### 점주

- [로그인](https://dev.clp.kr/anchor/api/static/docs/storehead/storehead_account.html#resources-account-sign-in-password-and-social)
- 나의 매장 조회
- 직원 목록 조회
- 직원 상세 조회
- 직원 퇴사
- 로그아웃

#### 직원

- 로그인
- 나의 매장 조회
- 로그아웃

## 토큰 인증 정보

#### Redis 접속 정보

- host : 52.78.18.80
- DB : 1
- password : clp738!
- port : 6379

#### 토큰 사용 방법

- 로그인 성공하면 Redis DB 1에 키를 만들어서 회원 정보를 저장합니다.
  - Key Sample (점주)
    - SSM::SPC::STOREHEAD::IOS::c001876a-92f9-4ac3-87ab-a303fea7028b
    - 프로젝트::회사코드::회원타입::디바이스타입::authToken
  - Key Sample (직원)
    - SSM::SPC::STUDENT::IOS::c001876a-92f9-4ac3-87ab-a303fea7028b
    - 프로젝트::회사코드::회원타입::디바이스타입::authToken
- 로그인 성공하면 Response에 회원의 컨디션과 authToken이 있습니다.
- 2Page API 호출 할 때 authToken을 header에 추가해서 요청하면 됩니다.
- 로그인된 회원정보를 확인하려면 Redis DB 1에서 조회하면 됩니다.
- Redis에 등록된 정보는 3일후에 만료 됩니다.
- 만료된 회원은 다시 로그인 처리 하면 됩니다.

## AWS 인프라 계정 생성 및 권한 부여

#### 계정 정보

- Account : 250058502806
- Username : ssm-user
- password : !Emcast0707!

#### 인프라 구성

- ssm-user 계정으로 개발 및 운영 서버 세팅
- EC2, VPC, RDS, Security Groups 등은 신규 생성 가능합니다.
- EC2, RDS 생성 할 때 태그를 꼭 등록 해야합니다.
  - TAG
    - name : Project, Value : SSM
- region은 서울 region만 사용이 가능합니다.

## 깃 저장소

#### git site : https://git.clp.kr

#### Repository

- [Backend](https://git.clp.kr/ssm/ssm-backend)
- [Frontend](https://git.clp.kr/ssm/ssm-react)
