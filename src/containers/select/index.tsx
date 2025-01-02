import { useState, useEffect, useCallback } from 'react';

import { Select, MenuItem, FormLabel, FormControl } from '@mui/material';

import { localStorageGetItem } from 'src/utils/storageAvailable';

import { CodeService } from 'src/service';
import { useTranslate } from 'src/locales';

import { RHFSelect } from 'src/components/hookForm';

import { ResCombo, ComboName, ComboType } from 'src/types/code';

interface SelectBoxProps {
  label?: string;
  name?: string;
  key?: string;
  value: number | string | undefined;
  disabled?: boolean;
  isNone?: boolean;
  onChange: (e: any) => void;
  onBlue?: (e: any) => void;
  comboType: ComboType;
  params?: any;
  comboName: ComboName;
  error?: undefined | boolean;
  isForm?: boolean;
}

const SelectBox = ({
  label,
  value,
  isNone = true,
  disabled = false,
  comboType,
  comboName,
  params,
  isForm = false,
  ...props
}: SelectBoxProps) => {
  const [combos, setCombos] = useState<ResCombo[]>([]);
  const { t } = useTranslate();

  const langStorage = localStorageGetItem('i18nextLng');
  useEffect(() => {
    if (!comboType || !comboName) return;
    loadComboList();
  }, [comboType, comboName, params, langStorage]);

  const loadComboList = useCallback(async () => {
    const { data, meta } = await CodeService.loadComboList(comboType, comboName, params);
    if (meta.errCode !== 0) {
      return alert(t('exception.unknown.server.error'));
    }
    return setCombos(data);
  }, [comboType, comboName, params]);

  return (
    <FormControl disabled={disabled} fullWidth>
      <FormLabel
        style={{
          marginLeft: '0.71em',
          marginTop: '-0.71em',
          paddingLeft: '0.44em',
          paddingRight: '0.44em',
          zIndex: 2,
          backgroundColor: 'white',
          position: 'absolute',
          fontSize: '0.75em',
        }}
        // id={`select_${props.name}`}
        htmlFor={`select_${props.name}`}
      >
        {label}
      </FormLabel>

      {isForm ? (
        <RHFSelect
          {...props}
          name={String(props.name)}
          sx={{ textTransform: 'capitalize' }}
          value={combos.length > 0 ? value : ''}
          aria-label={String(label)}
        >
          {isNone && (
            <MenuItem key="none" value="">
              <em>None</em>
            </MenuItem>
          )}

          {combos.map((option) => (
            <MenuItem key={`key_${option.value}`} value={option.value}>
              {t(option.translate)}
            </MenuItem>
          ))}
        </RHFSelect>
      ) : (
        <Select
          {...props}
          id={props.name}
          name={String(props.name)}
          sx={{ textTransform: 'capitalize' }}
          value={combos.length > 0 ? value || '' : ''}
          inputProps={{
            id: `select_${props.name}`,
            'aria-label': `select_${props.name}`,
          }}
        >
          {isNone && (
            <MenuItem key={`select_${props.name}_item_none`} value="">
              <em>None</em>
            </MenuItem>
          )}

          {combos.map((option) => (
            <MenuItem key={`select_${props.name}_item_${option.value}`} value={option.value}>
              {t(option.translate)}
            </MenuItem>
          ))}
        </Select>
      )}
    </FormControl>
  );
};

export default SelectBox;
