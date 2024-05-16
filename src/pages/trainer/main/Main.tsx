import CP from "@/components";
import {
  TrainerMainAlarm,
  TrainerMainTimeline
} from "@/utils/constants/dummyData";
import { useNavigate } from "react-router-dom";
import { DateFormat, TimeFormat } from "@/utils/formatUtil";
import dayjs from "dayjs";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSign } from "@/hooks/useSign";

/**
 ****************************************
 * 트레이너 메인 화면
 ****************************************
 */
interface SignProps {
  data: string;
  date: string;
}

const MonthList: { label: string; cnt: number }[] = [
  { label: "레슨", cnt: 7 },
  { label: "신규회원", cnt: 4 },
  { label: "재등록회원", cnt: 3 }
];

const MainPage = () => {
  const navigate = useNavigate();
  const [isMonthList, setIsMonthList] = useState(false);
  const [alarmList, setAlarmList] = useState<any[]>(TrainerMainAlarm);
  const { signRef, clear, getFile, isSigned, setIsSigned, getOriginalFile } =
    useSign();

  const [sign, setSign] = useState<SignProps>({
    data: "",
    date: ""
  });

  const [isSignModal, setIsSignModal] = useState(false);

  return (
    <CP.Styled.Wrapper overflow="auto">
      {/* <CP.Styled.Flex padding='20px 0px'direction='column' gap={24}  height='100%'> */}
      <CP.Styled.Flex
        // height="100%"
        gap={24}
        direction="column"
      >
        <CP.Styled.Div>
          <CP.Styled.Div padding=" var(--layout-padding)">
            <CP.Title>{dayjs().format("YYYY년 M월")}</CP.Title>
          </CP.Styled.Div>

          <CP.CardWrap direction="row" style={{ paddingTop: "5px" }}>
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

        <CP.Styled.Div padding="0px 0px 0px var(--layout-padding) ">
          <CP.Title>오늘의 일정</CP.Title>

          <CP.Styled.Div height="100%" width="100%">
            <CP.Timeline
              list={TrainerMainTimeline.map((item) => {
                return {
                  time: item.time,
                  color:
                    dayjs() >
                    dayjs(
                      `${dayjs().format(DateFormat)} ${item.time}`,
                      `${DateFormat} ${TimeFormat}`
                    )
                      ? "grey"
                      : item?.type === "PT"
                        ? "primary"
                        : "secondary",
                  content: (
                    <CP.CardWrap padding="5px">
                      <CP.Card radius="50px" height="auto">
                        <CP.Styled.Flex
                          padding="4px 12px"
                          items="center"
                          justify="space-between"
                          style={{ minHeight: 40 }}
                        >
                          <div>
                            <CP.Typography
                              align="start"
                              variant="b1"
                              color="--light-color"
                              wrap="wrap"
                              inline
                            >
                              {item.time}
                            </CP.Typography>
                            <CP.Typography
                              align="start"
                              variant="b2"
                              color="--dark-color"
                              wrap="wrap"
                              inline
                              style={{ marginLeft: "4px" }}
                            >
                              {item.content}
                            </CP.Typography>
                          </div>

                          {dayjs() >
                            dayjs(
                              `${dayjs().format(DateFormat)} ${item.time}`,
                              `${DateFormat} ${TimeFormat}`
                            ) &&
                            item.type === "PT" && (
                              <CP.Button
                                type="text"
                                style={{ height: "auto" }}
                                onClick={() => setIsSignModal(true)}
                              >
                                서명
                              </CP.Button>
                            )}
                          {/* <CP.MenuItem
                            list={[
                              { label: "변경", value: "변경" },
                              { label: "삭제", value: "삭제" },
                              { label: "서명", value: "서명" }
                            ]}
                          ></CP.MenuItem> */}
                        </CP.Styled.Flex>
                      </CP.Card>
                    </CP.CardWrap>
                  )
                };
              })}
            />
          </CP.Styled.Div>
        </CP.Styled.Div>

        <CP.Styled.Div>
          <CP.Styled.Div
            padding={"var(--layout-padding)"}
            style={{ paddingTop: "0px" }}
          >
            <CP.Styled.Flex width="100%" justify="space-between">
              <CP.Typography variant="h5">오늘 알림</CP.Typography>
              <CP.Styled.StyleA
                variant="c2"
                onClick={() => navigate("/trainer/alarm")}
              >
                전체 알림
              </CP.Styled.StyleA>
            </CP.Styled.Flex>
          </CP.Styled.Div>
          {alarmList?.length > 0 ? (
            //  <CP.Styled.Div height='100%' width='100%' >
            <CP.CardWrap
              style={{
                height: "100%",
                paddingTop: "0px",
                paddingBottom: "50px",
                flexWrap: "nowrap"
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
      </CP.Styled.Flex>

      {/* </CP.Styled.Flex> */}
      <CP.Popover
        open={isSignModal}
        onClose={() => setIsSignModal(false)}
        direction="bottom"
      >
        <CP.Styled.Flex
          gap={16}
          direction="column"
          padding={"var(--layout-padding)"}
        >
          <CP.Styled.Flex justify="space-between">
            <CP.Typography variant="h6">서명 입력</CP.Typography>
            <CP.Styled.StyleA variant="b2" onClick={clear}>
              지우기
            </CP.Styled.StyleA>
          </CP.Styled.Flex>
          <CP.Styled.Div
            border="1px solid var(--light-color)"
            width="100%"
            height="250px"
          >
            <CP.Sign
              width="250px"
              height="250px"
              placeholder="서명"
              defaultValue={sign?.data ? sign.data : undefined}
              signRef={signRef}
              isSigned={isSigned}
              setIsSigned={setIsSigned}
            ></CP.Sign>
          </CP.Styled.Div>
          <CP.Styled.Flex justify={!isSigned ? "space-between" : "flex-end"}>
            <CP.Typography
              style={{ width: "50%" }}
              variant="b2"
              color="--error-color"
            >
              {!isSigned ? "서명을 입력해주세요." : ""}
            </CP.Typography>
            <CP.Styled.Flex
              gap={8}
              width={"50%"}
              justify="flex-end"
              padding="0px 0px 8px 0px"
            >
              <CP.Button onClick={() => setIsSignModal(false)}>취소</CP.Button>
              <CP.Button
                disabled={!isSigned}
                onClick={() => {
                  setIsSignModal(false);
                }}
              >
                저장
              </CP.Button>
            </CP.Styled.Flex>
          </CP.Styled.Flex>
        </CP.Styled.Flex>
      </CP.Popover>
    </CP.Styled.Wrapper>
  );
};

export default MainPage;
