import { Flex, TimerProgressWrapper } from "../styled";
import Typography from "../typography";
import { useWindowSize } from "@/hooks/useWindowSize";
import { DateReqFormat, TimeFormat } from "@/utils/formatUtil";
import { Flat } from "@alptugidin/react-circular-progress-bar";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useMemo, useRef, useState } from "react";
import { convert } from "html-to-text";

dayjs.extend(duration);

type TimeProps = {
  label: string;
  value: string;
};
export interface TimerProgressProps {
  start: TimeProps;
  end: TimeProps;
  placeholder?: string;
  isStart: boolean;
  isEnd: boolean;
}

const TimerProgress = ({
  start,
  end,
  placeholder,
  isStart,
  isEnd
}: TimerProgressProps) => {
  const ref = useRef(null);
  const [percentage, setPercentage] = useState(0);
  const [percentRotate, setPercentRotate] = useState<string[]>(["", ""]);

  const [title, setTitle] = useState({ h: 0, m: 0 });

  useEffect(() => {
    getRotate();
  }, [percentage, title]);

  useEffect(() => {
    // settingData();
    if (!isStart) return;

    const id = setInterval(() => {
      settingData();
    }, 1000);

    if (isEnd && percentage === 100) return clearInterval(id);

    return () => clearInterval(id);
  }, [isStart, isEnd]);

  const settingData = () => {
    if (isEnd && percentage === 100) return;

    const resetData = () => {
      setTitle({ h: 0, m: 0 });
      setPercentage(0);
      return;
    };
    if (!(start?.value && end?.value)) return resetData;

    const now = dayjs();
    const day = dayjs().format(DateReqFormat);

    let str = dayjs(`${day} ${start.value}`, `${DateReqFormat} ${TimeFormat}`);
    let ed = dayjs(`${day} ${end.value}`, `${DateReqFormat} ${TimeFormat}`);

    //종료시간이 시작시간보다 이전일경우 종료 일자를 다음날로
    if (ed < str) ed = ed.add(1, "d");

    //종료 되기 전까지 종료시간을 현재 시간으로
    let last = isEnd ? ed : now; //now < ed ? now : ed;

    if (last < str) last = last.add(1, "d");

    const dura = Math.floor(dayjs.duration(last.diff(str)).asMinutes());

    if (dura >= 0) {
      setTitle({ h: Math.floor(dura / 60), m: Math.floor(dura % 60) });
    } else if (dura < 0) {
      setTitle({
        h: 0,
        m: 0
      });
    }

    const dura2 = Math.floor(dayjs.duration(ed.diff(str)).asMinutes());
    const _percent = Math.floor((dura / dura2) * 100);
    setPercentage(_percent < 0 ? 0 : _percent < 100 ? _percent : 100);
  };

  const getRotate = () => {
    const _svgList = document.querySelectorAll("svg");

    if (_svgList?.length > 3) {
      const _percentSvg = _svgList[1];
      const _circleSvg = _svgList[3];

      let _trans1 = _percentSvg?.outerHTML.split('transform="rotate(');
      let _trans2 = _circleSvg?.outerHTML.split('transform="rotate(');

      const _tran1 = _trans1[1].split(",");
      const _tran2 = _trans2[1].split(",");

      setPercentRotate([_tran1[0], _tran2[0]]);

      // const ret = _tran?.length > 0 ? `${_tran[0]}` : "rotate(-90";
      // return ret;
    }
  };
  return (
    <TimerProgressWrapper
      rotate={percentRotate[0]}
      circleRotate={percentRotate[1]}
    >
      <Flat
        progress={percentage}
        showValue={false}
        showMiniCircle={true}
        sx={{
          miniCircleSize: 4,
          miniCircleColor: "#fff",
          bgStrokeColor: "var(--white-color)",
          strokeColor: "var(--primary-color)",
          valueWeight: "lighter",
          shape: "half",
          barWidth: 4
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center"
        }}
      >
        {!isStart ? (
          <Typography variant="h1" color="--primary-disabled-color">
            {placeholder ? placeholder : ""}
          </Typography>
        ) : (
          <Typography
            variant="h1"
            color={isEnd ? "--primary-disabled-color" : "--dark-color"}
          >{`${title.h}h ${title.m}m`}</Typography>
        )}
      </div>
      <div className="workText">
        <Flex position="relative" height="100%" gap={32}>
          <Flex justify="flex-start">
            <Typography
              variant={"b1"}
              align="center"
              color={
                isStart || percentage === 0
                  ? "--primary-disabled-color"
                  : "--dark-color"
              }
            >
              {[start.label, <br />, start.value]}
            </Typography>
          </Flex>
          <Flex justify="flex-end">
            <Typography
              variant={"b1"}
              align="center"
              color={
                isEnd || !isStart // || percentage === 0
                  ? "--primary-disabled-color"
                  : "--dark-color"
              }
            >
              {[end.label, <br />, end.value]}
            </Typography>
          </Flex>
        </Flex>
      </div>
    </TimerProgressWrapper>
  );
};

export default TimerProgress;
