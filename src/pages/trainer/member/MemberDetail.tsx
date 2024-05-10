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

        <CP.Styled.BubbleButton
          width={"60px"}
          onClick={() => navigate("/trainer/contract")}
        >
          <CP.Icon
            name="clarity:contract-line"
            size={30}
            color="--light-color"
          />
        </CP.Styled.BubbleButton>
      </CP.Styled.Flex>

      <CP.Styled.Wrapper overflow="auto" height="calc(100% - 200px)">
        <CP.CardWrap style={{ flexWrap: "nowrap", height: "auto" }}>
          <CP.Card height="auto">
            <CP.Styled.Flex
              direction="column"
              overflow="auto"
              height={"inherit"}
              gap={16}
              padding={"var(--layout-padding)"}
            >
              <CP.Styled.Flex
                justify="space-between"
                items="center"
                width="100%"
              >
                <CP.Styled.Div width="auto">
                  <CP.Typography variant="h6" inline>
                    30회 PT권
                  </CP.Typography>
                  <CP.Typography
                    variant="b2"
                    inline
                    color="--red-color"
                    style={{ marginLeft: "5px" }}
                  >
                    (잔여 12회차)
                  </CP.Typography>
                  <CP.Typography
                    variant="c2"
                    align="start"
                    color="--light-color"
                  >
                    2024.05.01 ~ 2024.12.30
                  </CP.Typography>
                </CP.Styled.Div>
                <CP.Icon name="icon-park-outline:right" color="--light-color" />
              </CP.Styled.Flex>

              <CP.Styled.Flex
                gap={15}
                wrap="wrap"
                justify="center"
                height="100%"
              >
                {[...Array(30)].map((_, index) => {
                  // if (index < 9) {
                  //   return (
                  //     <img src={`/images/dummy/stamp.png`} width={"50px"} height='50px' />
                  //   );
                  // }
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
                    </CP.Styled.Flex>
                  );
                })}
              </CP.Styled.Flex>
            </CP.Styled.Flex>
          </CP.Card>
          <CP.Card height="auto">
            <CP.Styled.Flex
              direction="column"
              overflow="auto"
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

                <CP.MenuItem list={[{ label: "피드백 등록", value: "등록" }]}>
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
