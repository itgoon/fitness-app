import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import TabPanel from '../../components/custom/TabPanel';
import Header from '../../components/custom/Header';
import WorkoutList from './tab/WorkoutList';
import DietList from './tab/DietList';
import EmptyList from './tab/EmptyList';
import Gallery1 from '../../assets/images/gallery1.jpeg';
const dietRecords = [
  {
    date: '2024-09-11',
    type: 'diet',
    content: '첫번째 식단',
    imageName: [Gallery1, Gallery1, Gallery1, Gallery1],
    imageUrls: [Gallery1, Gallery1, Gallery1, Gallery1]
  },
  {
    date: '2024-09-11',
    type: 'diet',
    content: '첫번째 식단',
    imageName: [Gallery1, Gallery1, Gallery1, Gallery1],
    imageUrls: [Gallery1, Gallery1, Gallery1, Gallery1]
  },
  {
    date: '2024-09-12',
    type: 'diet',
    content: '첫번째 식단',
    imageName: [Gallery1, Gallery1, Gallery1, Gallery1],
    imageUrls: [Gallery1, Gallery1, Gallery1, Gallery1]
  }
];

export default function Record() {
  const [tabValue, setTabValue] = useState(0);
  const [workoutList, setWorkoutList] = useState([]);
  const [dietList, setDietList] = useState(dietRecords);
  return (
    <Box height={'100%'}>
      <Header stepTitle="기록" />
      <Box height={'calc(100% - 56px)'}>
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          scrollButtons={false}
          variant="fullWidth"
        >
          <Tab label={'운동'}></Tab>
          <Tab label={'식단'}></Tab>
        </Tabs>
        <Box height={'calc(100% - 50px)'} padding={2}>
          <TabPanel value={tabValue} index={0}>
            {workoutList.length > 0 ? <WorkoutList /> : <EmptyList />}
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            {dietList.length > 0 ? (
              <DietList dietList={dietList} />
            ) : (
              <EmptyList />
            )}
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
