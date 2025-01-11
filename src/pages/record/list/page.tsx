import { useEffect, useState } from 'react';
import Icon from 'src/components/Icon';
import { useNavigate } from 'react-router';
import { paths } from 'src/routes/paths';
import Header from 'src/components/common/headers/Header';
import { Box, Tab, Tabs } from '@mui/material';
import { dietRecords } from 'src/utils/dummy';
import RecordBottom from './RecordBottom';
import WorkoutTab from './WorkoutTab';
import RecordList from './RecordList';
import { TdietRecordList } from '../types';

/**
 * ******************************************************
 * 기록 화면
 * ******************************************************
 */

export default function Record() {
  const navigate = useNavigate();

  const [tabValue, setTabValue] = useState(0);

  const [workoutList, setWorkoutList] = useState([]);

  const [dietList, setDietList] = useState<TdietRecordList[]>([]);

  const [selectedIndex, setSelectedIndex] = useState<number[][]>([]);

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setDietList(dietRecords);
  }, []);

  const onClickImage = (firstIndex: number, secondIndex: number) => {
    setSelectedIndex([[firstIndex, secondIndex]]);
  };

  const handleSelect = (firstIndex: number, secondIndex: number) => {
    const isSelected = selectedIndex.some(
      ([fIndex, sIndex]) => fIndex === firstIndex && sIndex === secondIndex
    );
    if (isSelected) {
      // 선택 해제
      setSelectedIndex((prev) =>
        prev.filter(
          ([fIndex, sIndex]) =>
            !(fIndex === firstIndex && sIndex === secondIndex)
        )
      );
    } else {
      // 선택 추가
      setSelectedIndex((prev) => [...prev, [firstIndex, secondIndex]]);
    }
  };

  const selectAll = () => {
    const selectionArray: number[][] = [];
    dietList.forEach((list, fIdx) => {
      list.imageUrls.forEach((li, sIdx) => {
        selectionArray.push([fIdx, sIdx]);
      });
    });
    setSelectedIndex(selectionArray);
  };

  const onDelete = () =>
    dietList
      .map((list, idx) => {
        if (selectedIndex.some(([fIndex, sIndex]) => fIndex === idx)) {
          return {
            ...list,
            imageUrls: list.imageUrls.filter(
              (_, secondIndex) =>
                !selectedIndex.some(
                  ([fIndex, sIndex]) => fIndex === idx && sIndex === secondIndex
                )
            )
          };
        }
        return list;
      })
      .filter((list) => list?.imageUrls.length > 0);

  const viewImageDelete = () => {
    const updatedData = onDelete();
    setDietList(updatedData);

    setSelectedIndex((prevState) => {
      if (prevState.length > 0) {
        const [firstIndex, secondIndex] = prevState[0];

        if (updatedData[firstIndex]?.imageUrls.length > secondIndex) {
          return [[firstIndex, secondIndex]];
        }
        return [[firstIndex, updatedData[firstIndex].imageUrls.length - 1]];
      }
      return [];
    });
  };

  const deleteDietList = () => {
    const updatedData = onDelete();
    setSelectedIndex([]);
    setDietList(updatedData);
  };

  // slideChange
  const handleAfterChange = (index) => {
    setSelectedIndex((prevState: number[][]) => {
      const currentState = prevState[0] || [0, 0]; // 현재 상태의 첫 번째 요소 가져오기
      return [[currentState[0], index]]; // 2차원 배열 형태로 반환
    });
  };

  return (
    <>
      {/* 헤더 */}
      <Header
        left={
          <Icon
            name="AddRounded"
            sx={{ marginTop: -1, marginLeft: -2, color: '#262626' }}
            size={24}
            onClick={() => navigate(paths.record.new)}
          />
        }
        title="기록"
        right={
          <Icon
            size={22}
            name="MoreVertRounded"
            onClick={() => {
              setIsEdit((prev) => !prev);
              setSelectedIndex([]);
            }}
          />
        }
      />

      {/* 탭 */}
      <Tabs
        value={tabValue}
        onChange={(e, newValue) => setTabValue(newValue)}
        scrollButtons={false}
        variant="fullWidth"
      >
        <Tab label="운동" />
        <Tab label="식단" />
      </Tabs>

      <Box px={2.5} py={3}>
        {tabValue === 0 && <WorkoutTab>work</WorkoutTab>}
        {tabValue === 1 && (
          <RecordList
            arrList={dietList}
            isEdit={isEdit}
            selectedIndex={selectedIndex}
            onChange={handleSelect}
            onClickImage={onClickImage}
            onDelete={viewImageDelete}
            afterChange={handleAfterChange}
          />
        )}
      </Box>

      {/* 삭제 UI */}
      {isEdit && (
        <RecordBottom
          selectImageCount={selectedIndex.length}
          onSelectAll={selectAll}
          onDelete={deleteDietList}
        />
      )}
    </>
  );
}
