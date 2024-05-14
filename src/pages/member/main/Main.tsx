import CP from "@/components";
import Store from "@/store";
import dayjs from "dayjs";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ScheduleList } from "@/utils/constants";
import { DateFormat, DateReqFormat, getTimeInterval } from "@/utils/formatUtil";

import Bridge from "@/utils/bridge";
import { createBrowserHistory } from "history";
import {
  MemberMainAlarm,
  MemberScheduleList
} from "@/utils/constants/dummyData";

/**
 ****************************************
 * 회원 메인 화면
 ****************************************
 */

dayjs.locale("ko");

const notiPerPage = 5;

const MainPage = () => {
  const navigate = useNavigate();
  const history = createBrowserHistory();

  const [alarmList, setAlarmList] = useState<any[]>([]);
  // const [schedule, setSchedule] = useState<ResWorkSchedule[]>();
  const [weekStart, setWeekStart] = useState("");

  const [data, setData] = useState<any[]>([]);
  const [todayData, setTodayData] = useState<any | undefined>(undefined);
  const [isYesterDay, setIsYesterDay] = useState(false);

  useLayoutEffect(() => {
    settingWeek();
    setAlarmList(MemberMainAlarm);
    setData(MemberScheduleList);
  }, []);
  const settingWeek = () => {
    const todayWeek = dayjs().format("d");

    if (todayWeek === "0")
      return setWeekStart(dayjs().add(-6, "d").format(DateReqFormat));
    const startWeek = dayjs()
      .add(Number(`-${Number(todayWeek) - 1}`), "d")
      .format(DateReqFormat);

    setWeekStart(startWeek);
  };

  return (
    <>
      <CP.Styled.Wrapper overflow="auto" padding="16px 0px 50px 0px">
        <CP.Menu title="이번주 스케줄" isCard>
          <CP.CardWrap
            direction="row"
            className="hiddenScroll"
            style={{
              flexWrap: "nowrap",
              overflow: "auto"
            }}
          >
            {[...Array(ScheduleList.length)]?.map((_, index) => {
              const wk = dayjs(weekStart, DateReqFormat).add(index, "d");
              const date = dayjs(weekStart, DateReqFormat)
                .add(index, "d")
                .format("DD");

              const shcd = data?.find(
                (sc) =>
                  sc.date ===
                  dayjs(weekStart, DateReqFormat)
                    .add(index, "d")
                    .format(DateReqFormat)
              );

              const isToday =
                wk.format(DateFormat) === dayjs().format(DateFormat);
              return (
                <CP.Card width="62px" height="auto" radius="8px" size="lg">
                  <CP.Styled.Flex
                    radius="8px"
                    items="center"
                    direction="column"
                    border={
                      isToday
                        ? "2px solid var(--primary-color)"
                        : "2px solid var(--border-color)"
                    }
                    gap={4}
                    bg={shcd ? "--transparent-color" : "--disabled-color"}
                    padding="8px 0px"
                  >
                    <CP.Typography
                      variant="c1"
                      color={isToday ? "--primary-color" : "--light-color"}
                    >
                      {isToday ? "오늘" : wk.format("ddd")}
                    </CP.Typography>
                    <CP.Typography variant="h4">{date}</CP.Typography>

                    {shcd ? (
                      <div>
                        <CP.Typography variant="c1" color="--primary-color">
                          {shcd?.time ? shcd.time : "-"}
                        </CP.Typography>
                        <CP.Typography variant="c1" color="--primary-color">
                          PT
                        </CP.Typography>
                      </div>
                    ) : (
                      <CP.Styled.Div width="25px">
                        <CP.Typography
                          wrap="wrap"
                          variant="c1"
                          color="--light-color"
                        >
                          일정없음
                        </CP.Typography>
                      </CP.Styled.Div>
                    )}
                  </CP.Styled.Flex>
                </CP.Card>
              );
            })}
          </CP.CardWrap>
        </CP.Menu>

        <CP.Styled.Flex
          direction="column"
          width="100%"
          gap={12}
          items="center"
          padding="8px 16px"
        >
          <CP.Styled.Flex width="100%" justify="space-between">
            <CP.Typography variant="h5">오늘 알림</CP.Typography>
            <CP.Styled.StyleA
              variant="c2"
              onClick={() => navigate("/member/alarm")}
            >
              전체 알림
            </CP.Styled.StyleA>
          </CP.Styled.Flex>

          {alarmList?.length > 0 ? (
            <>
              {alarmList?.map((item: any) => {
                if (!item) return;

                return (
                  <CP.Card height="auto">
                    <CP.Styled.Flex
                      gap={6}
                      direction="column"
                      items="flex-start"
                      padding={"12px"}
                    >
                      <CP.Styled.Flex justify="space-between">
                        <CP.Typography variant="b2" wrap="wrap" align="start">
                          {item.message}
                        </CP.Typography>

                        <CP.Typography variant="c2" wrap="wrap" align="end">
                          {item.time}
                        </CP.Typography>
                      </CP.Styled.Flex>
                    </CP.Styled.Flex>
                  </CP.Card>
                );
              })}
            </>
          ) : (
            <CP.Styled.Flex
              direction="column"
              gap={8}
              height="200px"
              justify="center"
              items="center"
            >
              <CP.Typography variant="b1" color="--light-color">
                오늘은 새로운 알림이 없습니다.
              </CP.Typography>
            </CP.Styled.Flex>
          )}
        </CP.Styled.Flex>
      </CP.Styled.Wrapper>
    </>
  );
};

export default MainPage;
