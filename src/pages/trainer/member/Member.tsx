import CP from "@/components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Store from "@/store";

import { MemberSortList } from "@/utils/constants";
import { TrainerMemberList } from "@/utils/constants/dummyData";

/**
 ****************************************
 * 트레이너 > 회원관리 화면
 ****************************************
 */

const MemberPage = () => {
  const navigate = useNavigate();

  const [list, setList] = useState<any[]>(TrainerMemberList);
  const [state, setState] = useState({
    sort: "",
    search: ""
  });

  const settingListItem = (item: any) => {
    return (
      <CP.Card
        onClick={() =>
          navigate(`/trainer/member/detail?name=${String(item?.name)}`)
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
            </CP.Styled.Flex>

            <CP.Typography
              variant="b2"
              color="--light-color"
            >{`${item.start_date} ~ ${item.end_date}`}</CP.Typography>
          </CP.Styled.Flex>

          <CP.Icon muiName="KeyboardArrowRight" color="--light-color" />
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
            <CP.Input
              suffix={<CP.Icon muiName="Search" color="--light-color" />}
              size="sm"
              value={state.search}
            />
          </CP.Styled.Flex>

          <CP.Styled.Div height="100%" overflow="auto">
            <CP.Styled.Div overflow="hidden" height="auto">
              {list?.length > 0 ? (
                <CP.CardWrap>
                  {list?.filter((item) => item.isToday)?.length > 0 && (
                    <CP.Title>오늘자 PT</CP.Title>
                  )}
                  {list
                    ?.filter((item) => item.isToday)
                    ?.map((item) => settingListItem(item))}

                  {list?.filter((item) => item.isToday)?.length > 0 && (
                    <CP.Styled.Division padding={30} />
                  )}

                  {list
                    ?.filter((item) => !item.isToday)
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
                  <CP.Icon name="nodata" size={140} type="img" />
                  <CP.Typography variant="h5" color="--light-color">
                    작성된 근로계약서가 없습니다.
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

export default MemberPage;
