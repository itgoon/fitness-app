import { DateReqFormat } from "@/utils/formatUtil";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "moment/locale/ko";
import Typography from "../typography";
import { useMemo } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import Icon from "../icon";
import Button from "../button";
import { Box } from "@mui/material";

interface ListProps {
  id: string;
  title: string;
  start: Date; // new Date("2024-05-08 14:30"),
  end: Date; //new Date("2024-05-08 16:00")
  color?: string;
}
export interface SchedulerProps {
  date?: string; //DateReqFormat
  onChangeData: (e: string) => void;
  onChange?: (e: any) => void; // 아이템 이동 시
  onSelect?: (e: any) => void; // 있는 아이템 선택 시
  onCreate?: (e: any) => void; //빈 슬롯 클릭시
  style?: any;
  list?: ListProps[];
}
moment.locale("ko-KR");

const localizer = momentLocalizer(moment);

const Scheduler = ({
  date = moment().format(DateReqFormat),
  onChangeData,
  list,
  onChange,
  onSelect,
  onCreate
}: SchedulerProps) => {
  const DragAndDropCalendar = withDragAndDrop(BigCalendar);
  const eventSetting = (event: any) => {
    if (!event?.color) return {};

    return {
      style: {
        background: event.color,
        borderColor: event.color
      }
    };
  };

  const titleSetting = useMemo(() => {
    const currentDay = new Date(date).getDate();
    const week = new Date(date).getDay();

    const weekCnt = Math.ceil(currentDay / 7);

    console.log(date, currentDay, week, weekCnt);

    return `${moment(date).format("M")}월 ${weekCnt}주차`;
  }, [date]);
  return (
    <>
      <Box
        sx={{
          height: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px 16px"
        }}
      >
        <Box sx={{ width: "50%", gap: 15 }}>
          <Typography variant="h6">{titleSetting}</Typography>
          <Icon
            onClick={() =>
              onChangeData(moment(date).add(-7, "day").format(DateReqFormat))
            }
            name={"ArrowBack"}
          ></Icon>
          <Icon
            onClick={() =>
              onChangeData(moment(date).add(7, "day").format(DateReqFormat))
            }
            name={"East"}
          ></Icon>
        </Box>
        <Button
          variant={"text"}
          onClick={() => onChangeData(moment().format(DateReqFormat))}
        >
          Today
        </Button>
      </Box>
      <Box
        sx={{
          height: "calc(100% - 100px)",
          width: "100%",
          overflow: "auto",
          flexDirection: "column"
        }}
      >
        <DragAndDropCalendar
          localizer={localizer}
          events={list}
          date={new Date(date)}
          view="week"
          toolbar={false}
          onEventDrop={(e) => (onChange ? onChange(e) : {})}
          allDayAccessor={() => false}
          onEventResize={(e) => {
            console.log("onEventResize", { e });
          }}
          // draggableAccessor="isDraggable"
          onSelectSlot={(e) => (onCreate ? onCreate(e) : {})}
          onSelectEvent={(e) => (onSelect ? onSelect(e) : {})}
          resizable
          selectable
          style={{ height: "100%" }}
          formats={{
            timeGutterFormat: "HH:00"
          }}
          eventPropGetter={eventSetting}
          // components={{ toolbar: Toolbar }}
        />
      </Box>
    </>
  );
};

export default Scheduler;
