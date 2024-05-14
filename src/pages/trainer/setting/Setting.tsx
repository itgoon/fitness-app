import CP from "@/components";
import Store from "@/store";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Bridge from "@/utils/bridge";
import { PrimaryColorList } from "@/utils/constants/dummyData";
/**
 ****************************************
 * 트레이너 > 설정 화면
 ****************************************
 */

const SettingPage = () => {
  const navigate = useNavigate();
  const [store, setStore] = useRecoilState(Store.Auth.storeState);
  const [color, setColor] = useRecoilState(Store.Layout.colorState);

  const onLogout = () => {
    setStore(undefined);
    navigate("/login");
  };
  return (
    <CP.Styled.Wrapper>
      <CP.CardWrap>
        <CP.Card>
          <CP.Styled.Flex
            padding={"16px"}
            width="100%"
            items="center"
            direction="column"
            gap={8}
          >
            <CP.Styled.Flex>
              <CP.Typography variant="h6">테마 색상 선택</CP.Typography>
            </CP.Styled.Flex>
            <CP.Styled.Flex
              width="auto"
              overflow="auto"
              gap={20}
              // justify="space-between"
            >
              {PrimaryColorList.map((item) => (
                <CP.Styled.EmptyButton
                  onClick={() => setColor(item)}
                  style={{ width: "auto" }}
                >
                  <CP.Styled.Div
                    width="30px"
                    height="30px"
                    radius="50px"
                    position="relative"
                    style={{ background: item, marginBottom: "5px" }}
                  >
                    {color === item && (
                      <CP.Icon
                        name="mingcute:check-fill"
                        size={20}
                        color="--white-color"
                        style={{ position: "absolute", top: 5, right: 5 }}
                      />
                    )}
                  </CP.Styled.Div>
                </CP.Styled.EmptyButton>
              ))}
            </CP.Styled.Flex>
          </CP.Styled.Flex>
        </CP.Card>

        <CP.Card>
          <CP.Button
            type="text"
            onClick={onLogout}
            style={{ textDecoration: "underline" }}
          >
            로그아웃
          </CP.Button>
        </CP.Card>
      </CP.CardWrap>
    </CP.Styled.Wrapper>
  );
};

export default SettingPage;
