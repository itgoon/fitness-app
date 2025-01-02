export type DeviceType = {
  type: string;
};

// 로그인 타입
export type ReqLogin = {
  userId: string;
  password: string;
  device?: DeviceType;
};

export type UserProfile = {
  id?: string;
  email?: string;
  avatar?: string;
  image?: string;
  name?: string;
  role?: string;
  tier?: string;
};

// 2차인증 타입
export interface ReqAuthenticate extends ReqLogin {
  mfaCode: string;
}
export interface ResAuthenticate {
  // id: string; // 사용자 식별자
  token: string; // 토큰정보
  isLoggedIn: boolean;
  isInitialized: boolean;

  user?: UserProfile | null;
}

export interface ResAuthSecretKey {
  secretKey: string;
  qrCode: string;
}

export interface ResAuthInfo {
  memberId: number; // 사용자 식별자
  loginLogId: number; // 로그인 식별자
  memberName: {
    // 사용자 명
    first: string;
    last: string;
    fullName: string;
  };
  permissions: any; // 사용자 권한
  currentBrand: {
    // 현재 접속 브랜드
    id: number; // 현재 접속 브랜드 식별자
    name: string; // 현재 접속 브랜드 이름
    authority: boolean;
    imgUrl: string;
    child: any;
  };
  scopeTypeList: any;
}
