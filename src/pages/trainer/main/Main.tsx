import CP from "@/components";
import {
  TrainerMainAlarm,
  TrainerMainTimeline
} from "@/utils/constants/dummyData";
import dayjs from "dayjs";
import { useEffect, useLayoutEffect, useState } from "react";

/**
 ****************************************
 * 트레이너 메인 화면
 ****************************************
 */

const MonthList: { label: string; cnt: number }[] = [
  { label: "레슨", cnt: 7 },
  { label: "신규회원", cnt: 4 },
  { label: "재등록회원", cnt: 3 }
];

const MainPage = () => {
  const [isMonthList, setIsMonthList] = useState(false);
  const [alarmList, setAlarmList] = useState<any[]>(TrainerMainAlarm);
  return (
    <CP.Styled.Wrapper>
      {/* <CP.Styled.Flex padding='20px 0px'direction='column' gap={24}  height='100%'> */}
      <CP.Styled.Div
        padding="20px 0px"
        style={{
          display: "grid",
          gap: 24,
          height: "100%",
          gridTemplateRows: isMonthList ? "auto 150px 30%" : "auto 50px 30%"
        }}
      >
        <CP.Styled.Div>
          <CP.Styled.Div padding="0px var(--layout-padding)">
            <CP.Title>오늘의 일정</CP.Title>
          </CP.Styled.Div>

          <CP.Styled.Div height="100%" width="100%" overflow="auto">
            <CP.Timeline
              list={TrainerMainTimeline.map((item) => {
                return {
                  time: item.time,
                  content: (
                    <CP.CardWrap padding="0px">
                      <CP.Card radius="50px" height="auto">
                        <CP.Styled.Flex
                          padding="6px 12px"
                          items="center"
                          justify="space-between"
                        >
                          <CP.Typography
                            align="start"
                            variant="b1"
                            color="--dark-color"
                            wrap="wrap"
                          >
                            {item.content}
                          </CP.Typography>
                          <CP.MenuItem
                            list={[
                              { label: "변경", value: "변경" },
                              { label: "삭제", value: "삭제" },
                              { label: "서명", value: "서명" }
                            ]}
                          ></CP.MenuItem>
                        </CP.Styled.Flex>
                      </CP.Card>
                    </CP.CardWrap>
                  )
                };
              })}
            />
          </CP.Styled.Div>
        </CP.Styled.Div>

        {isMonthList ? (
          <CP.Styled.Div>
            <CP.Styled.Flex
              padding="4px var(--layout-padding)"
              justify="space-between"
            >
              <CP.Title>{dayjs().format("YYYY년 M월")}</CP.Title>
              <CP.Button type="text" onClick={() => setIsMonthList(false)}>
                접기
              </CP.Button>
            </CP.Styled.Flex>

            <CP.CardWrap direction="row" style={{ paddingTop: "0px" }}>
              {MonthList?.map((item) => {
                if (!item) return;

                return (
                  <CP.Card width="31%">
                    <CP.Styled.Div position="relative" height="100%">
                      <CP.Typography
                        variant="h6"
                        style={{ position: "absolute", top: 8, left: 12 }}
                      >
                        {item.label}
                      </CP.Typography>
                      <CP.Typography
                        variant="h2"
                        style={{ position: "absolute", bottom: 8, right: 12 }}
                      >
                        {item.cnt}
                      </CP.Typography>
                    </CP.Styled.Div>
                  </CP.Card>
                );
              })}
            </CP.CardWrap>
          </CP.Styled.Div>
        ) : (
          <CP.Styled.Flex
            justify="center"
            items="center"
            padding="var(--layout-padding)"
          >
            <CP.Button
              type="round"
              size="lg"
              width="100%"
              onClick={() => setIsMonthList(true)}
            >
              {dayjs().format("YYYY년 M월")} 통계 보기
            </CP.Button>
          </CP.Styled.Flex>
        )}

        <CP.Styled.Div>
          <CP.Styled.Div
            padding={"var(--layout-padding)"}
            style={{ paddingTop: "0px" }}
          >
            <CP.Title>오늘의 알림</CP.Title>
          </CP.Styled.Div>
          {alarmList?.length > 0 ? (
            //  <CP.Styled.Div height='100%' width='100%' >
            <CP.CardWrap
              style={{
                height: "100%",
                paddingTop: "0px",
                paddingBottom: "50px",
                flexWrap: "nowrap",
                overflow: "auto"
              }}
            >
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
                        <CP.Typography variant="b1" wrap="wrap" align="start">
                          {item.message}
                        </CP.Typography>

                        <CP.Typography variant="b2" wrap="wrap" align="end">
                          {item.time}
                        </CP.Typography>
                      </CP.Styled.Flex>
                    </CP.Styled.Flex>
                  </CP.Card>
                );
              })}
            </CP.CardWrap>
          ) : (
            <CP.Styled.Flex
              direction="column"
              gap={8}
              height="100%"
              justify="center"
              items="center"
            >
              <CP.Typography variant="b1" color="--light-color">
                오늘은 새로운 알림이 없습니다.
              </CP.Typography>
            </CP.Styled.Flex>
          )}
        </CP.Styled.Div>
      </CP.Styled.Div>

      {/* </CP.Styled.Flex> */}
    </CP.Styled.Wrapper>
  );
};

export default MainPage;
