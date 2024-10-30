import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar as CustomDateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useEffect, useState } from 'react';
import { dummyMonthWorkoutList } from '../../../utils/dummy';
import { Badge, Typography } from '@mui/material';
import Icon from '../../Icon';

type workData = {
  type: string;
  date: string;
};

interface IDatePicker {
  workData?: workData[];
}
/**
 * 할 일
 * 우선 같은날 여러 데이터가 있는 경우 밷지가 나오는 것을 확인하고
 * 해당 디자인에 맞춰 css를 수정할지 picersday 안에 랜더링 되게 할지 정하기
 */
const renderBadge = (work: workData) => {
  switch (work.type) {
    case 'lesson':
      return <Badge color={'warning'} variant={'alway'} />;
    case 'workout':
      return <Badge color={'success'} variant={'online'} />;
    case 'all':
      return (
        <>
          <Badge
            sx={{
              '.MuiBadge-badge': {
                right: '11px !important'
              }
            }}
            color={'warning'}
            variant={'alway'}
          />
          <Badge
            sx={{
              '.MuiBadge-badge': {
                right: '1px !important'
              }
            }}
            color={'success'}
            variant={'online'}
          />
        </>
      );
  }
};
function ServerDay(
  props: PickersDayProps<Dayjs> & { highlightedDays?: workData[] }
) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;
  const workForDay = highlightedDays.filter((work) =>
    dayjs(work.date).isSame(day, 'day')
  );

  const hasWorkForDay = !outsideCurrentMonth && workForDay.length > 0;
  return (
    <>
      {hasWorkForDay ? (
        workForDay.map((work, key) => (
          <PickersDay
            {...other}
            outsideCurrentMonth={outsideCurrentMonth}
            day={day}
            key={key}
          >
            <Typography color="inherit" variant="Body15/semiBold">
              {dayjs(day).format('DD')}
            </Typography>
            {renderBadge(work)}
          </PickersDay>

          // </Badge>
        ))
      ) : (
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
        >
          <Typography color="inherit" variant="Body15/semiBold">
            {dayjs(day).format('DD')}
          </Typography>
        </PickersDay>
      )}
    </>
  );
}
const viewChangeIcon = () => {
  return <Icon size={18} name="ExpendMoreSvg"></Icon>;
};
export default function DateCalendar({
  workData = dummyMonthWorkoutList
}: IDatePicker) {
  const [highlightedDays, setHighlightedDays] = useState<workData[]>([]);

  useEffect(() => {
    if (workData) {
      setHighlightedDays(reducingArray(workData));
    }
  }, []);

  // 같은 날짜가 있는지 그리고 두 값의 타입이 다른 값은 type을 all 로 변경하여 배열에 집어넣어서 리턴해야 한다.
  const reducingArray = (array: workData[]): workData[] => {
    const workDayList = array.reduce<workData[]>((acc, current) => {
      // 현재 날짜와 같은 날짜가 이미 acc에 있는지 확인
      const existing = acc.find((item) => item.date === current.date);

      if (existing) {
        // 같은 날짜가 있으면, 'type'을 'all'로 설정
        if (existing.type !== current.type) {
          existing.type = 'all';
        }
      } else {
        // 같은 날짜가 없으면, current를 acc에 추가
        acc.push(current);
      }
      return acc;
    }, []);
    return workDayList;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <CustomDateCalendar
        showDaysOutsideCurrentMonth
        slots={{
          switchViewIcon: viewChangeIcon,
          day: ServerDay
        }}
        slotProps={{
          day: {
            highlightedDays
          } as any
        }}
      />
    </LocalizationProvider>
  );
}
