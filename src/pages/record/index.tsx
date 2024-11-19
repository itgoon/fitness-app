import { Box } from '@mui/material';
import { useState } from 'react';

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

export default function Record() {
  const [tabValue, setTabValue] = useState(0);
  const [workoutList, setWorkoutList] = useState([]);
  const [dietList, setDietList] = useState<TdietRecordList[]>(dietRecords);

  const { isEdit, toggleEdit } = useEditContext();

  const [selectedIndex, setSelectedIndex] = useState<number[][]>([]);

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

  const deleteDietList = () => {
    const updatedList = dietList
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
    setSelectedIndex([]);
    setDietList(updatedList);
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

  return (
    <>
      <Box height={'100%'}>
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
          frLabel={'운동'}
          secLabel={'식단'}
        />
        <TabPanel value={tabValue} index={0}>
          <EmptyList />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          {dietList.length > 0 ? (
            <DietTab>
              <RecordList
                arrList={dietList}
                isEdit={isEdit}
                onChange={handleSelect}
                selectedIndex={selectedIndex}
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
