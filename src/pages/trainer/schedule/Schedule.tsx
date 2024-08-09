import CP from "@/components";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Store from "@/store";

import { MemberSortList } from "@/utils/constants";
import {
  TrainerMemberList,
  TrainerMemberSelectList
} from "@/utils/constants/dummyData";
import { DateFormat, DateReqFormat, TimeFormat } from "@/utils/formatUtil";
import dayjs from "dayjs";
import { SchedulerProps } from "@/components/scheduler/Scheduler";
import UpdateModal from "./UpdateModal";

/**
 ****************************************
 * 트레이너 > 일정관리 화면
 ****************************************
 */

const dummyData = [
  {
    id: "0",
    member: "B회원",
    count: 6,
    product: "30회 PT권",
    type: "PT",
    date: "2024-05-13",
    start_time: "11:00",
    duration: 50,
    color: "#f00"
  },

  {
    id: "1",
    member: "A회원",
    count: 4,
    type: "PT",
    product: "20회 PT권",
    date: "2024-05-14",
    start_time: "14:30",
    duration: 50,
    color: "#999"
  },
  {
    id: "2",
    member: "C회원",
    count: 6,
    type: "PT",
    date: "2024-05-16",
    start_time: "16:00",
    product: "50회 PT권",
    duration: 50,
    color: "#00f"
  },
  {
    id: "3",
    member: "B회원",
    count: 6,
    product: "30회 PT권",
    type: "PT",
    date: "2024-05-16",
    start_time: "12:00",
    duration: 50,
    color: "#f00"
  },

  {
    id: "4",
    member: "A회원",
    count: 4,
    type: "PT",
    product: "20회 PT권",
    date: "2024-05-17",
    start_time: "15:30",
    duration: 50,
    color: "#999"
  },
  {
    id: "5",
    member: "C회원",
    count: 6,
    type: "PT",
    date: "2024-05-12",
    start_time: "09:30",
    product: "50회 PT권",
    duration: 50,
    color: "#00f"
  }
];
const SchedulePage = () => {
  const [date, setDate] = useState(dayjs().format(DateReqFormat));
  const [list, setList] = useState(dummyData);
  const [detailModal, setDetailModal] = useState<{ open: boolean; data: any }>({
    open: false,
    data: undefined
  });
  const [getDataModal, setGetDataModal] = useState<{
    open: boolean;
    data: any;
  }>({
    open: false,
    data: "전체"
  });
  const [state, setState] = useState({ filter: "" });

  const settingList = useMemo(() => {
    if (!list) return [];

    // let _list: SchedulerProps["list"] = [];

    return list?.map((item) => {
      const end_time = dayjs(item.start_time, "HH:mm")
        .add(item.duration, "minute")
        .format("HH:mm");

      return {
        id: item.id,
        // title: `${item.start_time} ${item.member}님 ${item.type} ${item.count ? item.count + "회차" : ""}`,
        title: `${item.start_time} ${item.member}님 ${item.type}`,
        start: new Date(`${item.date} ${item.start_time}`),
        end: new Date(
          `${item.date} ${dayjs(item.start_time, "HH:mm").add(item.duration, "minute").format("HH:mm")}`
        ),
        color: item?.color ? item.color : "#ddd"
      };
    });
  }, [list]);

  const onChangeList = (e: any) => {
    console.log({ e });

    if (!e) return;

    const { event, start } = e;

    if (!event) return;

    const newTime = start ? dayjs(start) : dayjs(event.start);
    console.log({ newTime });
    let newList: any[] = [];

    list?.map((item) => {
      if (item.id !== event.id) newList.push(item);
      else
        newList.push({
          ...item,
          date: newTime.format(DateReqFormat),
          start_time: newTime.format(TimeFormat)
        });
    });

    setList(newList);
  };

  const onCreate = (e?: any) => {
    // if (!e?.start) return;

    const _date = e ? dayjs(e.start) : "";

    setDetailModal({
      open: true,
      data: {
        id: "",
        member: "",
        date: _date ? _date.format(DateReqFormat) : "",
        start_time: _date ? _date.format(TimeFormat) : ""
      }
    });
  };

  const onDelete = (id: string) => {
    setList(list?.filter((item) => item.id !== id));
  };

  return (
    <>
      <CP.Styled.Wrapper>
        <CP.Styled.Flex
          gap={8}
          padding="var(--layout-padding)"
          justify="space-between"
          items="center"
        >
          <CP.Select
            size="sm"
            list={TrainerMemberSelectList}
            placeholder="회원선택"
            title="회원 선택"
            selected={state.filter}
            onSelect={(e) => setState({ ...state, filter: e })}
          />

          <CP.Styled.Flex
            gap={8}
            padding={"5px 0px"}
            justify="flex-end"
            items="flex-end"
          >
            <CP.Button
              size="sm"
              onClick={() => setGetDataModal({ ...getDataModal, open: true })}
            >
              이전 주 데이터 가져오기
            </CP.Button>
            <CP.Button size="sm" onClick={() => onCreate()}>
              등록
            </CP.Button>
          </CP.Styled.Flex>
        </CP.Styled.Flex>

        {/* <CP.Calendar /> */}
        <CP.Scheduler
          date={date}
          onChangeData={(e) => setDate(e)}
          list={settingList}
          onSelect={(e: any) => {
            console.log({ e });
            if (!e) return;

            setDetailModal({
              open: true,
              data: list.find((item) => item.id === e?.id)
            });
          }}
          onCreate={(e: any) => onCreate(e)}
          onChange={(e: any) => onChangeList(e)}
        />
      </CP.Styled.Wrapper>

      <UpdateModal
        open={detailModal.open}
        onDismiss={() => setDetailModal({ open: false, data: undefined })}
        data={detailModal.data}
        onDelete={(id: string) => onDelete(id)}
      />

      <CP.Modal
        open={getDataModal.open}
        onClose={() => setGetDataModal({ open: false, data: undefined })}
        type="confirm"
      >
        <CP.Styled.Flex direction="column" gap={10}>
          <CP.Typography variant="h6">
            가져올 회원을 선택해주세요.
          </CP.Typography>
          <CP.Select
            // isAll
            selected={getDataModal?.data}
            onSelect={(e) => setGetDataModal({ ...getDataModal, data: e })}
            list={[{ label: "전체", value: "전체" }].concat(
              TrainerMemberSelectList
            )}
          />
        </CP.Styled.Flex>
      </CP.Modal>
    </>
  );
};

export default SchedulePage;