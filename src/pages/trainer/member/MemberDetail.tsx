import CP from "@/components";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Store from "@/store";

import { MemberSortList } from "@/utils/constants";
import { TrainerMemberList } from "@/utils/constants/dummyData";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { DateFormat } from "@/utils/formatUtil";

/**
 ****************************************
 * 트레이너 > 회원관리 > 상세 화면
 ****************************************
 */

const MemberDetailPage = () => {
  const location = useLocation();
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const _name = params.get("name") !== null ? params.get("name") : "";

    setName(_name ? _name : "");
  }, [location]);

  return (
    <>
      <CP.Styled.Flex
        height={"200px"}
        padding={"var(--layout-padding) 25px"}
        justify="space-between"
        // bg="--primary-bg-color"
        items="center"
      >
        <CP.Styled.BubbleButton width={"60px"}>
          <CP.Icon name="solar:phone-bold" size={30} color="--light-color" />
        </CP.Styled.BubbleButton>

        <CP.Styled.Flex direction="column" items="center" width="auto" gap={15}>
          <CP.Avatar src="" size={100} />
          <CP.Styled.Flex items="center" gap={6} justify="center">
            <CP.Typography variant="b1">{name}</CP.Typography>
            <CP.Typography variant="b2">(20세 여)</CP.Typography>
          </CP.Styled.Flex>
        </CP.Styled.Flex>

        <CP.Styled.BubbleButton width={"60px"}>
          <CP.Icon
            name="mingcute:kakao-talk-fill"
            size={30}
            color="--light-color"
          />
        </CP.Styled.BubbleButton>
      </CP.Styled.Flex>

      <CP.Styled.Wrapper height="calc(100% - 200px)">
        <CP.CardWrap style={{ flexWrap: "nowrap" }}>
          <CP.Card>
            <CP.Styled.Flex
              justify="space-between"
              items="flex-start"
              padding="16px 10px"
            >
              <CP.Styled.Flex direction="column" gap={6} width="55%">
                <CP.Styled.Flex gap={4} items="flex-end">
                  <CP.Typography variant="b1" color="--dark-color">
                    30회 PT권
                  </CP.Typography>
                  <CP.Typography
                    variant="c2"
                    color="--error-color"
                  >{`잔여 12회차`}</CP.Typography>
                  <CP.Tag state="Available" />
                </CP.Styled.Flex>

                <CP.Typography
                  variant="b2"
                  color="--light-color"
                >{`2024.04.01 ~ 2024.12.30`}</CP.Typography>
                <CP.Typography
                  variant="b2"
                  color="--light-color"
                >{`2,000,000원`}</CP.Typography>
              </CP.Styled.Flex>

              <CP.Icon name="icon-park-outline:right" color="--light-color" />
            </CP.Styled.Flex>
          </CP.Card>

          <CP.Card height="auto">
            <CP.Styled.Flex
              style={{ maxHeight: "250px" }}
              direction="column"
              height={"100%"}
              gap={16}
              padding={"var(--layout-padding)"}
            >
              <CP.Styled.Flex
                justify="space-between"
                items="center"
                height="30px"
                width="100%"
              >
                <CP.Typography variant="h6" inline>
                  운동
                </CP.Typography>

                <CP.Icon name="icon-park-outline:right" color="--light-color" />
              </CP.Styled.Flex>

              <CP.Styled.Div height="calc(100% - 30px)" overflow="auto">
                <CP.Styled.Flex
                  gap={15}
                  wrap="wrap"
                  justify="center"
                  height="auto"
                >
                  {[...Array(30)].map((_, index) => {
                    return (
                      <CP.Styled.Flex
                        radius="50px"
                        border={index < 9 ? "" : "1px solid #ccc"}
                        justify="center"
                        items="center"
                        width="50px"
                        height="50px"
                        style={{
                          backgroundImage:
                            index < 9 ? `url(/images/dummy/stamp.png)` : "",

                          backgroundSize: "cover"
                        }}
                      >
                        {index < 9 && (
                          <CP.Typography
                            variant="b1"
                            color="--red-color"
                            wrap="wrap"
                          >
                            {dayjs("4/1", "M/D")
                              .add(4 * index, "d")
                              .format("M/D")}
                          </CP.Typography>
                        )}
                        {index === 9 && (
                          <CP.Typography
                            variant="b1"
                            color="--red-color"
                            wrap="wrap"
                          >
                            5/10
                            <br /> 예정
                          </CP.Typography>
                        )}
                        {index > 9 && (
                          <CP.Typography
                            variant="b1"
                            color="--white-color-400"
                            wrap="wrap"
                          >
                            {index + 1}회차
                          </CP.Typography>
                        )}
                      </CP.Styled.Flex>
                    );
                  })}
                </CP.Styled.Flex>
              </CP.Styled.Div>
            </CP.Styled.Flex>
          </CP.Card>
          <CP.Card height="auto">
            <CP.Styled.Flex
              direction="column"
              height={"inherit"}
              gap={16}
              padding={"var(--layout-padding)"}
            >
              <CP.Styled.Flex
                justify="space-between"
                items="center"
                width="100%"
              >
                <CP.Typography variant="h6">
                  {dayjs().format(DateFormat)} 식단
                </CP.Typography>

                <CP.MenuItem
                  list={[
                    { label: "피드백 등록", value: "등록" },
                    { label: "리스트", value: "리스트" }
                  ]}
                >
                  <CP.Icon name="charm:menu-kebab" />
                </CP.MenuItem>
              </CP.Styled.Flex>

              <CP.Styled.Flex gap={10} wrap="nowrap" overflow="auto">
                {["eat1.png", "eat2.png", "eat3.jpg", "eat4.jpg"].map(
                  (item) => {
                    return (
                      <CP.Styled.Div
                        style={{
                          backgroundImage: `url(/images/dummy/${item})`,
                          backgroundSize: "cover",
                          minWidth: "90px"
                        }}
                        height="70px"
                        radius="8px"
                        width="90px"
                      />
                    );
                  }
                )}
              </CP.Styled.Flex>
            </CP.Styled.Flex>
          </CP.Card>
        </CP.CardWrap>
      </CP.Styled.Wrapper>
    </>
  );
};

export default MemberDetailPage;
