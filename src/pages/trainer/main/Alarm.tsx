import CP from "@/components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Store from "@/store";

import { MemberSortList } from "@/utils/constants";
import { TrainerMemberList } from "@/utils/constants/dummyData";

/**
 ****************************************
 * 트레이너 > 알림 화면
 ****************************************
 */

const AlarmPage = () => {
  return <CP.Styled.Wrapper>{" 알림 화면"}</CP.Styled.Wrapper>;
};

export default AlarmPage;
