import { Box } from '@mui/material';
import { useState } from 'react';
import TabPanel from '../../components/custom/TabPanel';
import EmptyList from './tab/EmptyList';
import MainPng from '../../assets/images/main.png';
import Gallery1 from '../../assets/images/gallery1.jpeg';
import Gallery2 from '../../assets/images/gallery2.png';

import RecordHeader from './layout/RecordHeader';
import { useEditContext } from '../../hooks/useEditState';
import RecordBottom from './layout/RecordBottom';
import Tabs from '../../components/custom/Tabs/Tabs';
import RecordList from './tab/RecordList';
import WorkoutTab from './tab/WorkoutTab';
import DietTab from './tab/DietTab';

export interface radioIndex {
  firstIndex: number[];
  secondIndex: number[];
}
interface IdietRecords {
  date: string;
  type: string;
  content: string;
  imageName: string[];
  imageUrls: string[];
}
const dietRecords = [
  {
    date: '2024-09-11',
    type: 'diet',
    content: '첫번째 식단',
    imageName: [MainPng, MainPng, MainPng, MainPng, Gallery1, Gallery1],
    imageUrls: [MainPng, MainPng, MainPng, MainPng, Gallery1, Gallery1]
  },
  {
    date: '2024-09-12',
    type: 'diet',
    content: '첫번째 식단',
    imageName: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2],
    imageUrls: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2]
  },
  {
    date: '2024-09-12',
    type: 'diet',
    content: '첫번째 식단',
    imageName: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2],
    imageUrls: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2]
  },
  {
    date: '2024-09-12',
    type: 'diet',
    content: '첫번째 식단',
    imageName: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2],
    imageUrls: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2]
  },
  {
    date: '2024-09-12',
    type: 'diet',
    content: '첫번째 식단',
    imageName: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2],
    imageUrls: [Gallery1, Gallery1, Gallery2, Gallery2, Gallery2]
  }
];

export default function Record() {
  const [tabValue, setTabValue] = useState(0);
  const [workoutList, setWorkoutList] = useState([]);
  const [dietList, setDietList] = useState<IdietRecords[]>(dietRecords);

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
        <Box height={'calc(100% - 56px)'} overflow={'auto'}>
          <Tabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
            frLabel={'운동'}
            secLabel={'식단'}
          />
          <Box height={'calc(100% - 50px)'} padding={2}>
            <TabPanel value={tabValue} index={0}>
              {workoutList.length > 0 ? (
                <WorkoutTab>
                  <RecordList
                    arrList={[]}
                    isEdit={isEdit}
                    onChange={handleSelect}
                    selectedIndex={selectedIndex}
                  />
                </WorkoutTab>
              ) : (
                <EmptyList />
              )}
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
        </Box>
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
