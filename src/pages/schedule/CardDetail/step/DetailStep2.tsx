import dayjs from 'dayjs';
import ResponsePage from '../../../../components/custom/ResponsePage';
const matchingArray = (selectedCard) => {
  const { time, count, trainer, date } = selectedCard;

  const dataList = [
    { label: '예약 일자', value: dayjs(date).format('YYYY년 MM월 DD일') },
    { label: '레슨 시간', value: time },
    { label: '레슨/회차', value: count },
    { label: '담당 강사', value: trainer },
    { label: '취소 일시', value: dayjs().format('YYYY-MM-dd hh:mm') }
  ];
  return dataList;
};

export default function DetailStep2({ selectedCard }) {
  return (
    <ResponsePage
      title={'예약이 취소되었습니다.'}
      iconName={'CloseSvg'}
      dataList={matchingArray(selectedCard)}
      onClick={() => console.log('예약 내역 페이지')}
      closeMsg={'예약 내역 보기'}
      clickMsg={'홈으로'}
    />
  );
}
