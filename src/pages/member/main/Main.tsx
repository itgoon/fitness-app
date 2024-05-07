import CP from "@/components";
import Store from "@/store";
import { Menu, MenuIcon, ResultCode } from "@/utils/constants/enums";
import dayjs from "dayjs";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ScheduleList } from "@/utils/constants";
import { DateFormat, DateReqFormat, getTimeInterval } from "@/utils/formatUtil";

import Bridge from "@/utils/bridge";
import { createBrowserHistory } from "history";

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
        <CP.Styled.Flex
          padding="0px 16px 24px 16px"
          gap={24}
          direction="column"
        >
          <CP.Styled.Flex gap={16} direction="column">
            <CP.Styled.Flex gap={12} direction="column">
              <CP.Typography variant="h5">오늘</CP.Typography>
              <CP.Styled.Flex
                radius="8px"
                // height="276px"
                bg="--primary-bg-color"
                items="center"
                justify="space-between"
                direction="column"
                padding="24px 12px 12px 12px"
                style={{
                  aspectRatio: todayData ? "328/276" : "auto",
                  height: todayData ? "auto" : "160px"
                }}
              >
                <CP.Typography variant="b1">
                  {isYesterDay
                    ? dayjs().add(-1, "d").format("YYYY년 MM월 DD일 (ddd)")
                    : dayjs().format("YYYY년 MM월 DD일 (ddd)")}
                </CP.Typography>
                {todayData ? (
                  <></>
                ) : (
                  <CP.Styled.Flex justify="center" items="center" height="100%">
                    <CP.Typography
                      variant="h6"
                      color="--primary-disabled-color"
                    >
                      오늘은 일정이 없습니다.
                    </CP.Typography>
                  </CP.Styled.Flex>
                )}
              </CP.Styled.Flex>
            </CP.Styled.Flex>
          </CP.Styled.Flex>
        </CP.Styled.Flex>

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
                    border={isToday ? "2px solid var(--primary-color)" : ""}
                    gap={4}
                    bg={
                      shcd && shcd?.isOffDuty === false
                        ? "--transparent-color"
                        : "--disabled-color"
                    }
                    padding="8px 0px"
                  >
                    <CP.Typography
                      variant="c1"
                      color={isToday ? "--primary-color" : "--light-color"}
                    >
                      {isToday ? "오늘" : wk.format("ddd")}
                    </CP.Typography>
                    <CP.Typography variant="h4">{date}</CP.Typography>

                    {shcd && shcd?.isOffDuty === false ? (
                      <div>
                        <CP.Typography variant="c1" color="--primary-color">
                          {shcd?.startTime ? shcd.startTime : "-"}
                        </CP.Typography>
                        <CP.Typography
                          variant="c1"
                          color="--danger-color"
                          opacity="0.6"
                        >
                          {shcd?.endTime ? shcd.endTime : "-"}
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

            {/* {[...Array(ScheduleList.length)]?.map((item, index) => {
              const shcd = data?.find((sc) => sc.weekday === index);

              const wk = dayjs(weekStart, DateReqFormat).add(index, "d");
              const date = dayjs(weekStart, DateReqFormat)
                .add(index, "d")
                .format("DD");

              const isToday =
                wk.format(DateFormat) === dayjs().format(DateFormat);
              return (
                <CP.Card width="62px" height="auto" size="md">
                  <CP.Styled.Flex
                    radius="8px"
                    items="center"
                    direction="column"
                    border={isToday ? "2px solid var(--primary-color)" : ""}
                    gap={4}
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
                          {shcd?.startTime ? shcd.startTime : "-"}
                        </CP.Typography>
                        <CP.Typography
                          variant="c1"
                          color="--danger-color"
                          opacity="0.6"
                        >
                          {shcd?.endTime ? shcd.endTime : "-"}
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
            })} */}
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
                        <CP.Typography color="--light-color" variant="c2">
                          {item?.createdAt
                            ? getTimeInterval(item.createdAt) + " 전"
                            : ""}
                          {/* {item.time} */}
                        </CP.Typography>
                      </CP.Styled.Flex>

                      <CP.Typography variant="b2" wrap="wrap" align="start">
                        {item.message}
                      </CP.Typography>
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
