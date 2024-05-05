import CP from "@/components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Store from "@/store";

import { MemberSortList } from "@/utils/constants";
import { TrainerMemberList } from "@/utils/constants/dummyData";

/**
 ****************************************
 * 트레이너 > 설정 화면
 ****************************************
 */

const SettingPage = () => {
  return <CP.Styled.Wrapper>{"트레이너 > 설정 화면"}</CP.Styled.Wrapper>;
};

export default SettingPage;
