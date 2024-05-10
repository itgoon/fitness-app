export const TrainerMainTimeline = [
  { time: "09:00", content: "A회원 PT" },
  { time: "11:20", content: "B회원 PT" },
  { time: "11:30", content: "C회원 상담" },
  { time: "13:00", content: "D회원 PT" },
  { time: "16:30", content: "E회원 PT" },
  { time: "17:00", content: "A회원 PT" },
  { time: "17:30", content: "B회원 PT" },
  { time: "18:30", content: "C회원 상담" },
  { time: "20:00", content: "D회원 PT" },
  { time: "21:30", content: "E회원 PT" },
  { time: "22:00", content: "A회원 PT" },
  { time: "23:00", content: "B회원 PT" }
];

export const TrainerMainAlarm = [
  { time: "09:00", message: "A회원 입장하셨습니다." },
  { time: "11:30", message: "A회원님 PT 시간입니다." },
  { time: "09:00", message: "A회원 입장하셨습니다." },
  { time: "11:30", message: "A회원님 PT 시간입니다." }
];

export const TrainerMemberList = [
  {
    name: "A회원",
    age: 20,
    gender: "f",
    production: "30회 PT권",
    rest: 12,
    start_date: "2024-01-02",
    end_date: "2024-07-01",
    isToday: true
  },

  {
    name: "A회원",
    age: 20,
    gender: "f",
    production: "30회 PT권",
    rest: 0,
    start_date: "2021-03-20",
    end_date: "2021-12-19",
    isToday: true
  },

  {
    name: "B회원",
    age: 29,
    gender: "m",
    production: "30회 PT권",
    rest: 23,
    start_date: "2024-03-01",
    end_date: "2024-09-30",
    isToday: false
  },
  {
    name: "C회원",
    age: 31,
    gender: "m",
    production: "30회 PT권",
    rest: 26,
    start_date: "2024-02-08",
    end_date: "2024-08-07",
    isToday: true
  },
  {
    name: "D회원",
    age: 17,
    gender: "f",
    production: "6개월 회원권",
    rest: 9,
    start_date: "2023-12-20",
    end_date: "2024-04-30",
    isToday: undefined
  },
  {
    name: "E회원",
    age: 20,
    gender: "f",
    production: "30회 PT권",
    rest: 12,
    start_date: "2024-01-02",
    end_date: "2024-07-01",
    isToday: true
  },
  {
    name: "F회원",
    age: 29,
    gender: "m",
    production: "6개월 회원권",
    rest: undefined,
    start_date: "2024-03-01",
    end_date: "2024-09-30",
    isToday: false
  },
  {
    name: "G회원",
    age: 31,
    gender: "m",
    production: "30회 PT권",
    rest: 26,
    start_date: "2024-02-08",
    end_date: "2024-08-07",
    isToday: false
  },
  {
    name: "H회원",
    age: 17,
    gender: "f",
    production: "20회 PT권",
    rest: 9,
    start_date: "2023-12-20",
    end_date: "2024-04-30",
    isToday: false
  },
  {
    name: "I회원",
    age: 20,
    gender: "f",
    production: "30회 PT권",
    rest: 12,
    start_date: "2024-01-02",
    end_date: "2024-07-01",
    isToday: false
  },
  {
    name: "J회원",
    age: 29,
    gender: "m",
    production: "30회 PT권",
    rest: 23,
    start_date: "2024-03-01",
    end_date: "2024-09-30",
    isToday: false
  },
  {
    name: "K회원",
    age: 31,
    gender: "m",
    production: "30회 PT권",
    rest: 26,
    start_date: "2024-02-08",
    end_date: "2024-08-07",
    isToday: false
  },
  {
    name: "DL회원",
    age: 17,
    gender: "f",
    production: "20회 PT권",
    rest: 9,
    start_date: "2023-12-20",
    end_date: "2024-04-30",
    isToday: false
  }
];

export const MemberScheduleList = [
  { date: "2024-05-10", time: "14:00" },
  { date: "2024-05-13", time: "10:00" },
  { date: "2024-05-16", time: "13:00" }
];

export const MemberMainAlarm = [
  { time: "09:00", message: "금일 14시 PT가 예정되어 있습니다." },
  { time: "11:30", message: "5/3 일자의 식단 피드백이 도착하였습니다." },
  { time: "09:00", message: "5/4 일자의 PT 운동이 등록되었습니다." },
  { time: "11:30", message: "차주의 일정이 도착하였습니다. 확인해주세요. " }
];

export const ContractInfo = {
  name: "A회원",
  birtyday: "1992-03-02",
  addr: "경기도 부천시 원미구",
  phone: "010-1111-5555",
  email: "aaa@gmail.com",
  product: "30회 PT권",
  price: "2000000",
  pay: "card",
  option: ["locker", "uniform"],
  startDate: "2024-05-01",
  regDate: "2024-04-20"
};

export const TermList = [
  "레슨은 세션 단위로 진행되며 1세션 비용은 8만원 입니다.",
  "레슨 시간은 50분입니다.",
  "레슨 변경/취소 시에는 레슨 3시간 이전에만 변경 가능합니다.",
  "레슨 기간은 12회 - 30일 / 24회 - 60일 / 36회 - 90일 / 50회 - 150일 / 100회 - 300일을 초과할 수 없습니다.",
  "담당 트레이너가 강습을 할 수 없는 경우, 동일한 자격을 갖춘 다른 트레이너로 교체될 수 있습니다.",
  "강습 비용은 레슨 진행 중 환불 되지 않습니다.",
  "회원권을 양도할 경우 양도비용 (8만원)이 발생합니다."
];

export const TrainerMemberSelectList = [
  { label: "A회원", value: "A" },
  { label: "B회원", value: "B" },
  { label: "C회원", value: "C" },
  { label: "D회원", value: "D" },
  { label: "E회원", value: "E" }
];
