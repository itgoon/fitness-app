import CP from "@/components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import Store from "@/store";

import { MemberSortList } from "@/utils/constants";
import { TrainerMemberList } from "@/utils/constants/dummyData";

/**
 ****************************************
 * 트레이너 > 회원관리 > 상세 화면
 ****************************************
 */

const MemberDetailPage = () => {
  const location = useLocation();
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const _name = params.get("name") !== null ? params.get("name") : "";

    setName(_name ? _name : "");
  }, [location]);

  return (
    <CP.Styled.Wrapper>{`트레이너 > 회원관리 > ${name}님 상세`}</CP.Styled.Wrapper>
  );
};

export default MemberDetailPage;
