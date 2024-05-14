import CP from "@/components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Store from "@/store";

import { MemberSortList } from "@/utils/constants";
import { TrainerMemberList } from "@/utils/constants/dummyData";

/**
 ****************************************
 * 트레이너 > 세션(계약) 화면
 ****************************************
 */
const ContractFilterList = [
  { label: "전체", value: "" },
  { label: "PT 30회권", value: "PT 30회권" },
  { label: "PT 20회권", value: "PT 20회권" },
  { label: "PT 15회권", value: "PT 15회권" }
];

const SchedulePage = () => {
  const navigate = useNavigate();

  const [list, setList] = useState<any[]>(TrainerMemberList);
  const [state, setState] = useState({
    sort: "",
    filter: "",
    search: ""
  });

  const settingListItem = (item: any) => {
    return (
      <CP.Card
        onClick={() =>
          navigate(`/trainer/contract/detail?name=${String(item?.name)}`)
        }
      >
        <CP.Styled.Flex justify="space-between" items="center" padding="10px">
          <CP.Styled.Flex
            direction="column"
            gap={4}
            justify="center"
            width={"25%"}
          >
            <CP.Typography variant="h6" color="--dark-color">
              {item.name}
            </CP.Typography>
            <CP.Typography
              variant="b2"
              color="--light-color"
            >{`${item.age}세 (${item.gender === "f" ? "여" : "남"})`}</CP.Typography>
          </CP.Styled.Flex>

          <CP.Styled.Flex direction="column" gap={4} width="55%">
            <CP.Styled.Flex gap={4} items="flex-end">
              <CP.Typography variant="b1" color="--dark-color">
                {item.production}
              </CP.Typography>
              <CP.Typography
                variant="c2"
                color="--error-color"
              >{`잔여 ${item.rest}회차`}</CP.Typography>
              <CP.Tag state="Available" />
            </CP.Styled.Flex>

            <CP.Typography
              variant="b2"
              color="--light-color"
            >{`${item.start_date} ~ ${item.end_date}`}</CP.Typography>
          </CP.Styled.Flex>

          <CP.Icon name="icon-park-outline:right" color="--light-color" />
        </CP.Styled.Flex>
      </CP.Card>
    );
  };

  return (
    <>
      <CP.Styled.Wrapper>
        <CP.Styled.Flex direction="column" gap={16} height="100%">
          <CP.Styled.Flex gap={8} padding="var(--layout-padding)">
            <CP.Select
              list={MemberSortList}
              size="sm"
              placeholder="정렬"
              title="정렬 선택"
              selected={state.sort}
              onSelect={(e) => setState({ ...state, sort: e })}
            />
            <CP.Select
              list={ContractFilterList}
              size="sm"
              placeholder="필터"
              title="필터 선택"
              selected={state.filter}
              onSelect={(e) => setState({ ...state, filter: e })}
            />

            <CP.Input
              suffix={<CP.Icon name="dashicons:search" color="--light-color" />}
              size="sm"
              value={state.search}
            />
          </CP.Styled.Flex>

          <CP.Styled.Div height="100%" overflow="auto">
            <CP.Styled.Div overflow="hidden" height="auto">
              {list?.length > 0 ? (
                <CP.CardWrap>
                  {list
                    ?.filter((item) => item?.rest !== undefined)
                    ?.map((item) => settingListItem(item))}
                </CP.CardWrap>
              ) : (
                <CP.Styled.Flex
                  direction="column"
                  gap={16}
                  height="60vh"
                  items="center"
                  justify="center"
                >
                  <CP.Icon name="healthicons:no-outline" size={140} />
                  <CP.Typography variant="h5" color="--light-color">
                    작성된 계약서가 없습니다.
                  </CP.Typography>
                </CP.Styled.Flex>
              )}
            </CP.Styled.Div>
          </CP.Styled.Div>
        </CP.Styled.Flex>
      </CP.Styled.Wrapper>
    </>
  );
};

export default SchedulePage;
