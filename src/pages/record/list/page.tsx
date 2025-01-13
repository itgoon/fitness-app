import { useEffect, useState } from 'react';
import Icon from 'src/components/Icon';
import { useNavigate } from 'react-router';
import { paths } from 'src/routes/paths';
import Header from 'src/components/common/headers/Header';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { RecordFileService } from 'src/service';
import RecordBottom from './RecordBottom';
import WorkoutList from './WorkoutList';
import DietList from './DietList';

/**
 * ******************************************************
 * 기록 화면
 * ******************************************************
 */
export default function RecordPage() {
  const navigate = useNavigate();

  const [tabValue, setTabValue] = useState(0);

  const [isEdit, setIsEdit] = useState(false);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    loadRecordFileList();
  }, [tabValue]);

  // 리스트 패칭
  const loadRecordFileList = async () => {
    const res = await RecordFileService.loadRecordFileList({
      type: tabValue === 0 ? 'FITNESS' : 'DIET'
    });

    console.log(res);
  };

  // 탭 변경
  const onTabChange = (event: React.SyntheticEvent, newValue: any) => {
    setTabValue(newValue);
    setIsEdit(false);
    setSelectedItems([]);
  };

  // 더보기 클릭
  const onMoreClick = () => {
    setIsEdit((prev) => !prev);
    setSelectedItems([]);
  };

  // 전체 선택
  const onAllSelect = () => {
    setSelectedItems([]);
  };

  // 삭제
  const onDelete = async () => {
    await RecordFileService.deleteMultiRecordFile({
      requestBody: selectedItems
    });

    loadRecordFileList();
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
          isEdit ? (
            <Typography color="grey.900" onClick={() => setIsEdit(false)}>
              취소
            </Typography>
          ) : (
            <Icon size={22} name="MoreVertRounded" onClick={onMoreClick} />
          )
        }
      />

      {/* 탭 */}
      <Tabs
        value={tabValue}
        onChange={onTabChange}
        scrollButtons={false}
        variant="fullWidth"
      >
        <Tab label="운동" />
        <Tab label="식단" />
      </Tabs>

      {/* 컨텐츠 */}
      <Box px={2.5} py={3}>
        {tabValue === 0 && <WorkoutList />}
        {tabValue === 1 && <DietList />}
      </Box>

      {/* 삭제 UI */}
      {isEdit && (
        <RecordBottom
          onAllSelect={onAllSelect}
          count={selectedItems.length}
          onDelete={onDelete}
        />
      )}
    </>
  );
}
