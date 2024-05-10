import CP from "@/components";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Store from "@/store";

import { MemberSortList } from "@/utils/constants";
import {
  TrainerMemberList,
  TrainerMemberSelectList
} from "@/utils/constants/dummyData";
import { DateFormat } from "@/utils/formatUtil";
import dayjs from "dayjs";
import { SchedulerProps } from "@/components/scheduler/Scheduler";
import { ModalType } from "@/utils/constants/enums";

/**
 ****************************************
 * 트레이너 > 일정관리 화면 > 일정 상세 / 수정 / 등록 모달
 ****************************************
 */

interface Props {
  open: boolean;
  onDismiss: () => void;
  data?: any;
}
const ScheduleModalPage = ({ open, onDismiss, data }: Props) => {
  const [state, setState] = useState(data);

  useEffect(() => {
    setState(data);
  }, [data]);

  return (
    <>
      <CP.Modal open={open} onClose={onDismiss}>
        <CP.Styled.Flex direction="column" gap={20}>
          <CP.Styled.Flex justify="space-between" items="flex-end">
            {state?.id ? (
              <CP.Typography variant="h4">{state?.member}</CP.Typography>
            ) : (
              <CP.Select
                title={"회원 선택"}
                list={TrainerMemberSelectList}
                placeholder="회원 선택"
              />
            )}

            <div>
              <CP.Typography variant="b1" inline style={{ marginRight: "6px" }}>
                {state?.product}
              </CP.Typography>

              {state?.count && (
                <CP.Typography variant="c2" inline color={"--red-color"}>
                  {`잔여 : ${state?.count}회`}
                </CP.Typography>
              )}
            </div>
          </CP.Styled.Flex>
          <CP.Styled.Flex gap={12} items="center">
            <CP.Typography variant="b1">시간</CP.Typography>
            <CP.Select
              placeholder={"시간 선택"}
              selected={state?.start_time}
              onSelect={(e) => setState({ ...state, start_time: e })}
              list={[...Array(48)]?.map((_, index) => {
                const val = `${index < 10 ? `0${index}` : index}:${index % 2 === 0 ? "30" : "00"}`;
                return {
                  label: val,
                  value: val
                };
              })}
            />
          </CP.Styled.Flex>
        </CP.Styled.Flex>

        <CP.Styled.Flex justify="flex-end" gap={10}>
          <CP.Button type="text"> 수정</CP.Button>
          <CP.Button type="text"> 삭제</CP.Button>
        </CP.Styled.Flex>
      </CP.Modal>
    </>
  );
};

export default ScheduleModalPage;
