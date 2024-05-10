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
              옵션 : {data.option}
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
              <CP.Typography variant="b3" style={{ marginLeft: "8px" }}>
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

        <CP.Styled.Flex gap={80} width="80%">
          <CP.Typography variant="b1">{`회원서명 : `}</CP.Typography>
          <CP.Typography variant="b1">{`담당자 : `}</CP.Typography>
        </CP.Styled.Flex>

        <CP.Typography variant="h5">
          {dayjs(data.regDate, DateReqFormat).format("YYYY년 M월 D일")}{" "}
        </CP.Typography>
      </CP.Styled.Flex>
    </CP.Styled.Wrapper>
  );
};

export default MemberDetailPage;
