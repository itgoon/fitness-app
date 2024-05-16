import CP from "@/components";
import { ReactNode, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Store from "@/store";

import { useLocation, useNavigate } from "react-router-dom";
import { MemberSortList } from "@/utils/constants";
import {
  ContractInfo,
  TermList,
  TrainerMemberList
} from "@/utils/constants/dummyData";
import { DateReqFormat, castToPrice } from "@/utils/formatUtil";
import dayjs from "dayjs";
import { useSign } from "@/hooks/useSign";

/**
 ****************************************
 * 회원 > 세션관리 > 상세 화면
 ****************************************
 */

const MemberDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState<string>("");
  const [data, setData] = useState(ContractInfo);
  const [sign, setSign] = useState({ data: "", original: "" });

  const [isSignModal, setIsSignModal] = useState(false);
  const { signRef, clear, getFile, isSigned, setIsSigned, getOriginalFile } =
    useSign();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const _name = params.get("name") !== null ? params.get("name") : "";

    setName(_name ? _name : "");
  }, [location]);

  if (!name) return <></>;

  const settingContent = (title: string, content: string | ReactNode) => {
    return (
      <>
        <br />
        <CP.Typography variant="b3">{title}</CP.Typography>
        <CP.Styled.Div padding="0px  0px 0px 12px">
          {typeof content === "string" ? (
            <CP.Typography variant="b4" wrap="wrap">
              {content}
            </CP.Typography>
          ) : (
            content
          )}
        </CP.Styled.Div>
      </>
    );
  };

  const settingSignImage = (target: "member" | "trainer" = "member") => {
    return (
      <CP.Styled.Flex
        justify="center"
        height="200px"
        items="center"
        bg={"--disabled-color"}
        radius="8px"
      >
        {target === "trainer" ? (
          <CP.Image
            src={"/images/dummy/gym_logo.jpeg"}
            height={"inherit"}
            style={{ height: "100%", width: "100%" }}
          />
        ) : (
          <>
            {sign?.data ? (
              <CP.Image
                src={sign?.data}
                height={"inherit"}
                style={{ height: "100%", width: "100%" }}
                onClick={() => {
                  setIsSigned(false);
                  setIsSignModal(true);
                }}
              />
            ) : (
              <CP.Button
                color="--white-color-500"
                type="round"
                width="150px"
                onClick={() => setIsSignModal(true)}
              >
                서명 작성
                <CP.Icon name="mage:edit" size={16} color="--white-color" />
              </CP.Button>
            )}
          </>
        )}
      </CP.Styled.Flex>
    );
  };

  return (
    <CP.Styled.Wrapper
      height={"100%"}
      padding={"0px 16px 16px 16px"}
      overflow="auto"
    >
      <CP.Button type="text" onClick={() => navigate("/member/contract")}>
        <CP.Icon name="icon-park-outline:left" color={"--light-color"} />
        <CP.Typography color="--light-color" variant="b1">
          리스트 보기
        </CP.Typography>
      </CP.Button>
      <CP.Styled.Flex
        justify="center"
        direction="column"
        items="center"
        gap={20}
      >
        <CP.Typography variant="h4">퍼스널트레이닝 계약서</CP.Typography>
        <CP.Styled.Flex padding="10px 0px 0px 0px">
          <CP.Styled.Flex direction="column" gap={4}>
            <CP.Typography variant="h6">인적사항</CP.Typography>
            <CP.Typography variant="b2" inline>
              성명 : {name}
            </CP.Typography>
            <CP.Typography variant="b2" inline>
              생년월일 : {data.birtyday}
            </CP.Typography>
            <CP.Typography variant="b2" inline>
              주소 : {data.addr}
            </CP.Typography>
            <CP.Typography variant="b2" inline>
              휴대폰 : {data.phone}
            </CP.Typography>
            <CP.Typography variant="b2" inline>
              이메일 : {data.email}
            </CP.Typography>
          </CP.Styled.Flex>
          <CP.Styled.Flex direction="column" gap={4}>
            <CP.Typography variant="h6">계약세부사항</CP.Typography>
            <CP.Typography variant="b2" inline>
              상품 : {data.product}
            </CP.Typography>
            <CP.Typography variant="b2" inline>
              가격 : {castToPrice(data.price)}
            </CP.Typography>
            <CP.Typography variant="b2" inline>
              옵션 :
              {data.option?.map((item, index) => {
                let ret = "";
                if (index > 0 && index < data?.option?.length) ret += ", ";
                ret += item;
                return ret;
              })}
            </CP.Typography>
            <CP.Typography variant="b2" inline>
              시작일 :{" "}
              {dayjs(data.startDate, DateReqFormat).format("YYYY년 M월 D일")}
            </CP.Typography>
          </CP.Styled.Flex>
        </CP.Styled.Flex>

        <CP.Styled.Flex direction="column" gap={6}>
          <CP.Typography variant="h6">회원약관</CP.Typography>
          {TermList.map((item) => {
            return (
              <CP.Typography
                variant="b3"
                style={{ marginLeft: "8px", whiteSpace: "normal" }}
              >
                <CP.Icon
                  name="material-symbols:circle"
                  size={5}
                  style={{ marginRight: "8px" }}
                />
                {item}
              </CP.Typography>
            );
          })}
          {settingContent(
            "손해배상",
            "회원은 센터 이용중에 고의, 중대한 과실로 시설의 파손 등 센터에 손해가 발생한 경우에는 이를 배상하여야 합니다. 센터 내 시설물 중에 회원님의 부주의함으로 다치신 경우 당사는 그 손해를 배상하지 않습니다."
          )}
          {settingContent(
            "라커",
            "운동 기간 만료 후 7일 이내 재등록 의사가 없을 시 별도의 통보 없이 개인 사물함은 반납 처리되며, 반납 처리 후 찾아가지 않은 물건은 15일간 보관 후 임의 폐기합니다. (당 센터에서는 사물함 내에 물품에 대해 책임지지 않습니다.)"
          )}
          {settingContent(
            "효력 발생",
            "귀하(회원)는 본 계약서를 서명함으로써 회원권의 효력이 즉시 발생되며, 귀하와 당사 간의 법적 구속력 있는 계약관계가 성립함을 이해하며 본인은 본 약관이 모든 내용을 숙지하고 동의하였음을 인정하는 바입니다."
          )}
        </CP.Styled.Flex>

        <CP.Styled.Flex width="100%" gap={8}>
          <CP.Styled.Flex
            flex={1}
            justify="center"
            items="center"
            gap={8}
            direction="column"
          >
            <CP.Typography variant="b1">{`회원서명 : ${name}`}</CP.Typography>
            {settingSignImage()}
          </CP.Styled.Flex>
          <CP.Styled.Flex
            flex={1}
            justify="center"
            items="center"
            gap={8}
            direction="column"
          >
            <CP.Typography variant="b1">{`담당자 : 리온짐`}</CP.Typography>
            {settingSignImage("trainer")}
          </CP.Styled.Flex>
        </CP.Styled.Flex>

        <CP.Typography variant="h5">
          {dayjs(data.regDate, DateReqFormat).format("YYYY년 M월 D일")}{" "}
        </CP.Typography>
      </CP.Styled.Flex>
      <CP.Popover
        open={isSignModal}
        onClose={() => {
          setIsSigned(false);
          setIsSignModal(false);
        }}
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
            <CP.Styled.Flex gap={8} width={"50%"} justify="flex-end">
              <CP.Button
                onClick={() => {
                  setIsSigned(false);
                  setIsSignModal(false);
                }}
              >
                취소
              </CP.Button>
              <CP.Button
                onClick={() => {
                  setSign({ data: getFile(), original: getOriginalFile() });

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

export default MemberDetailPage;
