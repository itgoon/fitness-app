import CP from "@/components";
import dayjs, { Dayjs } from "dayjs";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Store from "@/store";

import { MemberSortList } from "@/utils/constants";
import { TrainerMemberList } from "@/utils/constants/dummyData";
import Calendar from "@/components/calendar";
import { DateFormat, DateReqFormat, DateViewFormat } from "@/utils/formatUtil";

/**
 ****************************************
 * 회원 > 일정관리 화면
 ****************************************
 */

const SchedulePage = () => { 
  const [newValue, setNewValue] = useState();

  const handlechange = (newChangeDate: any) =>  setNewValue(newChangeDate) ;
   
  return (
    <>
      <CP.Styled.Wrapper>
        <CP.Calendar value={newValue} onChange={handlechange}  format={DateReqFormat}/>
        <CP.Styled.Div padding="5px 30px">
          <CP.Typography variant="h6">{newValue? dayjs(newValue, DateReqFormat).format(DateViewFormat) : dayjs().format(DateViewFormat)}</CP.Typography>
        </CP.Styled.Div>
      </CP.Styled.Wrapper>
    </>
  );
};

export default SchedulePage;
