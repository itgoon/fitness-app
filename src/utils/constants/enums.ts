export enum ResultCode {
  COMMON_0000_CODE = "COMMON_0000_CODE",
  COMMON_0001_CODE = "COMMON_0001_CODE",
  COMMON_0007_CODE = "COMMON_0007_CODE", //휴면
  COMMON_1000_CODE = "COMMON_1000_CODE",
  COMMON_1100_CODE = "COMMON_1100_CODE",
  COMMON_1200_CODE = "COMMON_1200_CODE",
  COMMON_1202_CODE = "COMMON_1202_CODE",
  COMMON_1204_CODE = "COMMON_1204_CODE",
  COMMON_1232_CODE = "COMMON_1232_CODE",
  COMMON_1303_CODE = "COMMON_1303_CODE",
  COMMON_1335_CODE = "COMMON_1335_CODE",
  COMMON_1500_CODE = "COMMON_1500_CODE",
  COMMON_1501_CODE = "COMMON_1501_CODE",
  COMMON_0401_CODE = "COMMON_0401_CODE",
  COMMON_0403_CODE = "COMMON_0403_CODE",
  COMMON_0408_CODE = "COMMON_0408_CODE",
  COMMON_0422_CODE = "COMMON_0422_CODE",
  COMMON_0500_CODE = "COMMON_0500_CODE",
  COMMON_0501_CODE = "COMMON_0501_CODE",
  COMMON_0502_CODE = "COMMON_0502_CODE",
  COMMON_0503_CODE = "COMMON_0503_CODE",
  COMMON_0504_CODE = "COMMON_0504_CODE",
  COMMON_2007_CODE = "COMMON_2007_CODE", //점주 등록매장이 모두 정지상태인 경우
  CUSTOM_0001_CODE = "CUSTOM_0001_CODE", //로그인 휴면 상태
  CUSTOM_0500_CODE = "CUSTOM_0500_CODE" //서버 이슈
}

export enum Menu {
  employee = "직원 관리",
  commute = "출퇴근 관리",
  contract = "근로계약 관리",
  paystub = "급여 관리"
}
export enum MenuIcon {
  employee = "ManageAccounts",
  commute = "TimelapseOutlined",
  contract = "MenuBook",
  paystub = "LocalActivity"
}
export enum SidebarIcon {
  HOME = "Home",
  STORE = "Store",
  EMPLOYEE = "Group",

  WORK = "AccessTimeFilled",

  CONTRACT = "FactCheck",
  SALARY = "MonetizationOn",
  SETTING = "Settings",
  LOGOUT = "Logout",

  HISTORY = "MenuBook",
  MYWORK = "AssignmentInd",
  EMPCONTRACT = "Assignment"
}

export enum SalaryType {
  hourly = "시급",
  daily = "일급",
  salary = "월급"
}

export enum SalaryDate {
  everyday = "매일",
  everyweek = "매주",
  monthly = "매월"
}
