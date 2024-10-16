import { ResStore } from '../corporation/store';

// 사용자 목록 요청
export interface ReqMemberSearch {
  size: number;
  page: number;
  sort: string;
}

// 사용자 목록 응답
export interface ResMember {
  id: number;
  birth: boolean;
  maskingMemberStatus: string;
  responsibilityName: string;
  isEmailAuth: boolean;
  isTerms: boolean;
  phone: string;
  loginCount: number;
  registration: number;
  duty: {
    id: number;
    name: string;
  };
  responsibility: {
    id: number;
    name: string;
    defaultRole: {
      id: number;
      name: string;
      type: {
        value: string;
        text: string;
      };
    };
  };
  license: {
    name: string;
    licenseMemberId: any;
    type: {
      value: number;
      text: string;
      translate: any;
    };
    translate: string;
    id: number;
  };
  store: ResStore;
  name: {
    first: string;
    fullName: string;
    last: string;
  };
  point: any;
  dutyId: number;
  dutyName: string;
  text: string;
  ACTIVATION: string;
  brandName: string;
  deactivatedUser: boolean;
  isSocial: boolean;
  registrationDate: number;
  roleNames: string;
  status: {
    text: string;
    translate: string;
    value: string;
  };
  storeCode: string;
  storeId: number;
  storeName: string;
  userId: string;
}

export interface ReqMember {
  id: number;
  birth?: boolean;
  maskingMemberStatus?: string;
  responsibilityName?: string;
  isEmailAuth?: boolean;
  isTerms?: boolean;
  phone?: string;
  loginCount?: number;
  registration?: number;
  memo?: string;
  duty: {
    id: number;
    name?: string;
  };
  responsibility: {
    id: number;
    name?: string;
    defaultRole?: {
      id: number;
      name: string;
      type: {
        value: string;
        text: string;
      };
    };
  };
  license?: {
    name: string;
    licenseMemberId: any;
  };
  store: ResStore;
  name: {
    first: string;
    fullName?: string;
    last?: string;
  };
  point?: {
    present: number;
  };
  dutyId?: number;
  dutyName?: string;
  text?: string;
  ACTIVATION?: string;
  brandName?: string;
  deactivatedUser?: boolean;
  isSocial?: boolean;
  registrationDate?: number;
  roleNames?: string;
  status?: {
    text: string;
    translate: string;
    value: string;
  };
  storeCode?: string;
  storeId?: number;
  storeName?: string;
  userId: string;
  password?: string;
}
export interface ReqNewMember extends Omit<ReqMember, 'id'> {
  id?: number;
  password: string;
}

export interface ResMemberHistory {
  accessIp: string;
  memo: string;
  modifierInfo: {
    modifier: {
      brandName: string;
      deactivatedUser: boolean;
      dutyName: string;
      id: number;
      levelName: string;
      maskingMemberStatus: string;
      name: {
        first: string;
        fullName: string;
        last: string;
      };
      point: number;
      profile: {
        defaultBackgroundColor: any;
        file: any;
        patterns: any;
      };
      responsibilityName: string;
      status: {
        value: string;
        text: string;
        translate: string;
        customValues: any;
      };
      storeName: string;
      time: number;
      userId: string;
    };
    register: {
      brandName: string;
      deactivatedUser: boolean;
      dutyName: string;
      id: number;
      levelName: string;
      maskingMemberStatus: string;
      name: {
        first: string;
        fullName: string;
        last: string;
      };
      point: number;
      profile: {
        defaultBackgroundColor: any;
        file: any;
        patterns: any;
      };
      responsibilityName: string;
      status: {
        value: string;
        text: string;
        translate: string;
        customValues: any;
      };
      storeName: string;
      time: number;
      userId: string;
    };
  };
}

export interface ResMemberRole {
  applicationType: {
    value: string;
    text: string;
    translate: string;
    customValues: any;
  };
  items: any[];
  permissions: any;
  roleId: number;
  roleName: string;
  scopeType: {
    text: string;
    translate: string;
    value: string;
  };
}
