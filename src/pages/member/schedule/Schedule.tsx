import CP from "@/components";
import dayjs, { Dayjs } from "dayjs";

import { ReactHTML, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Store from "@/store";

import { MemberSortList } from "@/utils/constants";
import { TrainerMemberList } from "@/utils/constants/dummyData";
import Calendar from "@/components/calendar";
import { DateFormat, DateReqFormat, DateViewFormat } from "@/utils/formatUtil";
import Carousel from "@/components/carousel";

/**
 ****************************************
 * 회원 > 일정관리 화면
 ****************************************
 */
interface DietItem {
  title?: string;
  imgPath?: string | URL;
}

interface DietData {
  eat1?: DietItem;
  eat2?: DietItem;
  eat3?: DietItem;
  eat4?: DietItem;
}

export interface DummyDataItem {
  date: string;
  type: string;
  user_data: string;
  video?: {
    videoUrl1?: string | URL;
    videoUrl2?: string | URL;
  };
  diet?: DietData;
}
const dummydata = [
  {
    date: "2024-05-01",
    type: "PT",
    user_data: "30회 pt권",
    video: { videoUrl1: "video1.mp4", videoUrl2: "video2.mp4" },
    diet: { eat1: { title: "아침아침", imgPath: "eat1.png" }, eat2: { title: "점심", imgPath: "eat2.png" }, eat3: { title: "저녁", imgPath: "eat3.jpg" }, eat4: { title: "간식", imgPath: "eat4.jpg" } }
  },
  {
    date: "2024-05-04",
    type: "IN",
    user_data: "30회 pt권",
    video: { videoUrl1: "", videoUrl2: "" },
    diet: { eat1: { title: "아침", imgPath: "eat1.png" }, eat2: { title: "점심", imgPath: "eat2.png" }, eat3: { title: "저녁", imgPath: "eat3.jpg" }, eat4: { title: "간식", imgPath: "eat4.jpg" } }
  },
  {
    date: "2024-05-11",
    type: "IN",
    user_data: "30회 pt권",
    video: { videoUrl1: "", videoUrl2: "" },
    diet: { eat1: { title: "아침", imgPath: "eat3.jpg" }, eat2: { title: "점심", imgPath: "eat1.png" }, eat3: { title: "저녁", imgPath: "eat2.png" }, eat4: { title: "간식", imgPath: "eat4.jpg" } }
  },
  {
    date: "2024-05-14",
    type: "PT",
    user_data: "30회 pt권",
    video: { videoUrl1: "video3.mp4", videoUrl2: "video4.mp4" },
    diet: { eat1: { title: "아침", imgPath: "eat3.jpg" }, eat2: { title: "점심", imgPath: "eat2.png" }, eat3: { title: "저녁", imgPath: "eat1.png" }, eat4: { title: "간식", imgPath: "eat4.jpg" } }
  },
]

const SchedulePage = () => {
  const [newValue, setNewValue] = useState(dayjs().format(DateReqFormat));
  const [openCarousel, setOpenCarousel] = useState(null);
  
  const calendarHandlechange = (newChangeDate: any) => setNewValue(newChangeDate);
  const carouselSelectedKey = (idx: any) => setOpenCarousel(idx)
  const findData = () => {
    if (newValue) {
      return dummydata?.find((item) => item.date === newValue);
    }
    return null;
  }
  const newValueData = findData();
  
  const { eat1, eat2, eat3, eat4 } = newValueData?.diet || {};
  const { videoUrl1, videoUrl2 } = newValueData?.video || {};

  return (
    <>
      <CP.Styled.Wrapper>
        {/* header 415 */}
        <CP.Calendar value={newValue} onChange={(calendarHandlechange)} format={DateReqFormat} />

        {openCarousel !== null && (
          <CP.Modal open={true} onClose={() => setOpenCarousel(null)} padding={"0"}>
            <Carousel newValueData={newValueData} openCarousel={openCarousel} />
          </CP.Modal>
        )}

        <CP.CardWrap style={{ flexWrap: "nowrap" }}>
          {/* left 5px */}
          <CP.Typography variant="h6" style={{display: "inline-block", paddingLeft: "10px"}}>{newValue ? dayjs(newValue, DateReqFormat).format(DateViewFormat) : dayjs().format(DateViewFormat)}</CP.Typography>
          {newValueData?.type === "PT" ? (<CP.Card height="auto">
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
                <CP.Styled.Flex direction="column" gap={6} width="55%">
                  <CP.Styled.Flex gap={4} items="flex-end">
                    <CP.Typography variant="b1" color="--dark-color">
                      {newValueData?.user_data}
                    </CP.Typography>
                    <CP.Typography
                      variant="c2"
                      color="--error-color"
                    >{`잔여 1회차`}</CP.Typography>
                    <CP.Tag state="Available" />
                  </CP.Styled.Flex>

                </CP.Styled.Flex>

                <CP.Icon name="icon-park-outline:right" color="--light-color" />
              </CP.Styled.Flex>

              <CP.Styled.Flex gap={10} wrap="nowrap" overflow="auto">
                {newValueData?.video ? newValueData?.video && Object.values(newValueData.video).map((item) => {
                  return (
                    <CP.Styled.Div
                      style={{
                        minWidth: "90px"
                      }}
                      height="80px"
                      radius="8px"
                      width="110px"
                    ><video width="110px" height="80px" controls src={`/public/images/dummy/${item}`}></video></CP.Styled.Div>

                  );
                }) : (
                  <CP.Typography
                    variant="c2"
                    color="--black-color"
                  > 영상이 등록되지 않았습니다. 등록하시겠습니까?</CP.Typography>
                )}
              </CP.Styled.Flex>
            </CP.Styled.Flex>
          </CP.Card>) : ""}

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
                  {newValue ? dayjs(newValue, DateReqFormat).format(DateViewFormat) : dayjs().format(DateViewFormat)} 식단
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
                {newValueData?.diet ? newValueData?.diet && Object.values(newValueData.diet).map((item, idx) => {
                  return (
                    <CP.Styled.Div
                      key={idx}
                      onClick={() => carouselSelectedKey(idx)}
                      style={{
                        backgroundImage: `url(/images/dummy/${item.imgPath})`,
                        backgroundSize: "cover",
                        minWidth: "90px"
                      }}
                      height="70px"
                      radius="8px"
                      width="90px"
                    />
                  );
                }) : (
                  <CP.Typography
                    variant="c2"
                    color="--black-color"
                  > 식단이 등록되지 않았습니다. 등록하시겠습니까?</CP.Typography>
                )}
              </CP.Styled.Flex>
            </CP.Styled.Flex>
          </CP.Card>
        </CP.CardWrap>
      </CP.Styled.Wrapper>


    </>
  );
};
// 클릭하면 모달창과 같이 carousel이 띄워지게 넘길 데이터는 식단 이름 이미지
export default SchedulePage;
