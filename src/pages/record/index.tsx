import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import RecordHeader from './layout/RecordHeader';
import { useEditContext } from '../../hooks/useEditState';
import RecordBottom from './layout/RecordBottom';
import Tabs from '../../components/custom/Tabs/Tabs';
import { TdietRecordList } from './types';
import TabPanel from '../../components/custom/Tabs/TabPanel';
import DietTab from './tab/DietTab';
import RecordList from './tab/RecordList';
import EmptyList from './tab/EmptyList';
import { dietRecords } from '../../utils/dummy';
import WorkoutTab from './tab/WorkoutTab';

/**
 * ******************************************************
 * 기록 화면
 * ******************************************************
 */

export default function Record() {
  const [tabValue, setTabValue] = useState(0);
  const [workoutList, setWorkoutList] = useState([]);
  const [dietList, setDietList] = useState<TdietRecordList[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number[][]>([]);

  const { isEdit, toggleEdit } = useEditContext();
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
    dietList.map((list, fIdx) => {
      list.imageUrls.map((li, sIdx) => {
        selectionArray.push([fIdx, sIdx]);
      });
    });
    setSelectedIndex(selectionArray);
  };

  const onDelete = () => dietList
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

    // setSelectedIndex((prevState) =>
    //   prevState.map(([fIdx, sIdx]) => {
    //     return [fIdx, sIdx + 1];
    //   })
    // );
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
      <Box>
        <RecordHeader
          isEdit={isEdit}
          handleEdit={() => {
            toggleEdit();
            setSelectedIndex([]);
          }}
        />
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          frLabel="운동"
          secLabel="식단"
        />
        <TabPanel value={tabValue} index={0}>
          {dietList?.length > 0 ? <WorkoutTab>work</WorkoutTab> : <EmptyList />}
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          {dietList?.length > 0 ? (
            <DietTab>
              <RecordList
                arrList={dietList}
                isEdit={isEdit}
                selectedIndex={selectedIndex}
                onChange={handleSelect}
                onClickImage={onClickImage}
                onDelete={viewImageDelete}
                afterChange={handleAfterChange}
              />
            </DietTab>
          ) : (
            <EmptyList />
          )}
        </TabPanel>
      </Box>

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
