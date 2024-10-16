import React, { useCallback } from 'react';

import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useTranslate } from 'src/locales';

import Iconify from 'src/components/iconify';

import { UserTableFilters, UserTableFilterValue } from 'src/types/user';

// ----------------------------------------------------------------------

type Props = {
  filters: UserTableFilters;
  onFilters: (name: string, value: UserTableFilterValue) => void;
  dateError: boolean;
  StatusOptions: string[];
  DutyOptions: string[];
  TypeOptions: string[];
};

export default function UserTableToolbar({
  filters,
  onFilters,
  dateError,
  StatusOptions,
  DutyOptions,
  TypeOptions
}: Props) {
  const { t } = useTranslate();
  const placeholderText = t('검색어를 입력하세요...');

  const handleFilterName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onFilters('name', event.target.value);
    },
    [onFilters]
  );

  const handleFilterService = useCallback(
    (event: SelectChangeEvent<string[]>) => {
      onFilters(
        'service',
        typeof event.target.value === 'string'
          ? event.target.value.split(',')
          : event.target.value
      );
    },
    [onFilters]
  );

  const DutyFilterService = useCallback(
    (event: SelectChangeEvent<string[]>) => {
      onFilters(
        'service',
        typeof event.target.value === 'string'
          ? event.target.value.split(',')
          : event.target.value
      );
    },
    [onFilters]
  );

  console.log('StatusOptions : ', StatusOptions);
  return (
    <>
      <Stack
        spacing={2}
        alignItems={{ xs: 'flex-end', md: 'center' }}
        direction={{
          xs: 'column',
          md: 'row'
        }}
        sx={{
          p: 2.5,
          pr: { xs: 2.5, md: 1 }
        }}
      >
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 180 }
          }}
        >
          <InputLabel>{t('상태')}</InputLabel>

          <Select
            value={filters.service}
            onChange={handleFilterService}
            input={<OutlinedInput label="Service" />}
            renderValue={(selected) =>
              selected.map((value) => value).join(', ')
            }
            sx={{ textTransform: 'capitalize' }}
          >
            {StatusOptions.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox
                  disableRipple
                  size="small"
                  checked={filters.service.includes(option)}
                />
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 180 }
          }}
        >
          <InputLabel>{t('직무')}</InputLabel>

          <Select
            value={filters.service}
            onChange={DutyFilterService}
            input={<OutlinedInput label="Service" />}
            sx={{ textTransform: 'capitalize' }}
          >
            {DutyOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 180 }
          }}
        >
          <InputLabel>{t('상태')}</InputLabel>

          <Select
            multiple
            value={filters.service}
            onChange={handleFilterService}
            input={<OutlinedInput label="Service" />}
            renderValue={(selected) =>
              selected.map((value) => value).join(', ')
            }
            sx={{ textTransform: 'capitalize' }}
          >
            {TypeOptions.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox
                  disableRipple
                  size="small"
                  checked={filters.service.includes(option)}
                />
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 180 }
          }}
        >
          <InputLabel>{t('상태')}</InputLabel>

          <Select
            // multiple
            value={filters.service}
            // onChange={(e) => setFilters({...filter, status : event.target.value})}
            input={<OutlinedInput label="Service" />}
            // renderValue={(selected) => selected.map((value) => value).join(', ')}
            sx={{ textTransform: 'capitalize' }}
          >
            {TypeOptions.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox
                  disableRipple
                  size="small"
                  checked={filters.service.includes(option)}
                />
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          flexGrow={1}
          sx={{ width: 1 }}
        >
          <TextField
            fullWidth
            value={filters.name}
            onChange={handleFilterName}
            placeholder={placeholderText}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify
                    icon="eva:search-fill"
                    sx={{ color: 'text.disabled' }}
                  />
                </InputAdornment>
              )
            }}
          />
        </Stack>
      </Stack>
    </>
  );
}
