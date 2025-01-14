import MainPng from '../assets/images/main.png';
import Gallery1 from '../assets/images/gallery1.jpeg';
import Gallery2 from '../assets/images/gallery2.png';

export const dummyCondition = [
  '이용약관 문구 영역입니다. 이용약관 문구 영역입니다. 이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다. 이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다. 이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다. 이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다. 이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다. 이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.이용약관 문구 영역입니다.'
];
export const dummyCondition2 = [
  '1. 강습은 수업료 전액이 지물된 이후로부터 시작됩니다.',
  '2. 회원은 매 세션마다 서명해야 합니다.',
  '3. 모든 세션은 기재된 유효기간 이내에 사용 . 및환불이 가능하며, 유효기간 이후 잔여세션은 일괄 자동 소멸 처리 됩니다.',
  '4. 강습을 중도 해지하고자 할 경우(환불), 위약금(납부된 전체 금액의 10%)과 함께 진행된 수업료(수업료 정산은 1세션 기준 / [Lv3 70,000 / Lv2 60,000 / Lv1 50,000]를 기준으로 하며, 수업 횟수 정산은 회원 서명이'
];

// dashboardPage
export const dummyMonthCount1 = [{ date: '2024-12-14', count: 1 }];
export const dummyMonthCount2 = [{ date: '2024-12-13', count: 1 }];
export const dummyCardData = [
  { label: '센터명', value: '리온짐' },
  { label: '요청 일시', value: '2024년 12월 7일 12시 00분' },
  { label: '작성 기한', value: '2024년 12월 13일 11시 59분' }
];

// contractTable
export const contractList = [
  { label: '이름', value: '김철수' },
  { label: '성별', value: '남성' },
  { label: '레슨', value: '[Lv1] 10회' },
  { label: '시작 일자', value: '2024년 08월 19일' },
  { label: '유효 일자', value: '2024년 10월 31일' },
  { label: '결제 방식', value: '카드결제' },
  { label: '결제 금액', value: '550,000원' }
];

// QR 더미
//  basic QR 데이터
export const QRCustomerData = {
  centerName: { label: '센터명', value: '리온짐' },
  lesson: { label: '레슨', value: '[Lv1] 10회' },
  count: { label: '레슨 횟수', value: '10회' },
  trainer: { label: '담당강사', value: '홍길동' },
  contractDate: { label: '계약 일자', value: '2024.08.04' },
  effectiveDate: { label: '유효 일자', value: '2025.12.30' }
};

export const QRCenterData = [
  { label: '센터명', value: '리온짐' },
  { label: '대표', value: '홍길동' },
  { label: '전화번호', value: '032-123-4567' },
  { label: '주소', value: '부천시 원미구 신흥로 256 1층' }
];
// qr

// tabs  workoutRecord
export const dummyWorkOutRecordList = [
  { date: '2024-09-19', time: '19:10 ~ 20:00', weight: '72kg' },
  { date: '2024-09-20', time: '19:10 ~ 20:00', weight: '72kg' },
  { date: '2024-09-21', time: '19:10 ~ 20:00', weight: '72kg' }
];

// tabs 일정 페이지 reservationList
export const dummyReservaitonListCard: any[] = [
  {
    date: '2024-09-19',
    time: '8:00',
    place: '리온짐',
    count: '3/ 10회',
    trainer: '홍길동 강사',
    chipState: 'warning'
  },
  {
    date: '2024-09-19',
    time: '12:00',
    place: '리온짐',
    count: '3/ 10회',
    trainer: '홍길동 강사',
    chipState: 'error'
  },
  {
    date: '2024-09-29',
    time: '11:00',
    place: '리온짐',
    count: '3/ 10회',
    trainer: '홍길동 강사',
    chipState: 'primary'
  },
  {
    date: '2024-09-29',
    time: '11:00',
    place: '리온짐',
    count: '3/ 10회',
    trainer: '홍길동 강사',
    chipState: 'primary'
  },
  {
    date: '2024-09-29',
    time: '11:00',
    place: '리온짐',
    count: '3/ 10회',
    trainer: '홍길동 강사',
    chipState: 'primary'
  },
  {
    date: '2024-09-29',
    time: '11:00',
    place: '리온짐',
    count: '3/ 10회',
    trainer: '홍길동 강사',
    chipState: 'primary'
  }
];

// calendar dummydata
export const dummyMonthWorkoutList = [
  { type: 'lesson', date: '2024-12-05' },
  { type: 'lesson', date: '2024-12-29' },
  { type: 'workout', date: '2024-12-29' },
  { type: 'lesson', date: '2024-12-31' },
  { type: 'workout', date: '2024-12-30' },
  { type: 'lesson', date: '2024-12-21' },
  { type: 'workout', date: '2024-12-20' },
  { type: 'lesson', date: '2024-12-01' },
  { type: 'workout', date: '2025-01-22' }
];
// 일정 페이지
//

// tabs 기록 페이지 식단 데이터
export const dietRecords = [
  {
    date: '2024-09-11',
    type: 'diet',
    content: '첫번째 식단',
    imageName: [MainPng, MainPng, MainPng, MainPng, Gallery1, Gallery1],
    imageUrls: [MainPng, MainPng, MainPng, MainPng, Gallery1, Gallery1]
  },
  {
    date: '2024-09-12',
    type: 'diet',
    content: '첫번째 식단',
    imageName: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2],
    imageUrls: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2]
  },
  {
    date: '2024-09-12',
    type: 'diet',
    content: '첫번째 식단',
    imageName: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2],
    imageUrls: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2]
  },
  {
    date: '2024-09-12',
    type: 'diet',
    content: '첫번째 식단',
    imageName: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2],
    imageUrls: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2]
  },
  {
    date: '2024-09-12',
    type: 'diet',
    content: '첫번째 식단',
    imageName: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2],
    imageUrls: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2]
  },
  {
    date: '2024-09-12',
    type: 'diet',
    content: '첫번째 식단',
    imageName: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2],
    imageUrls: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2]
  },
  {
    date: '2024-09-13',
    type: 'diet',
    content: '첫번째 식단',
    imageName: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2],
    imageUrls: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2]
  },
  {
    date: '2024-09-14',
    type: 'diet',
    content: '첫번째 식단',
    imageName: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2],
    imageUrls: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2]
  },
  {
    date: '2024-09-19',
    type: 'diet',
    content: '첫번째 식단',
    imageName: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2],
    imageUrls: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2]
  },
  {
    date: '2024-09-19',
    type: 'diet',
    content: '첫번째 식단',
    imageName: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2],
    imageUrls: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2]
  }
];
