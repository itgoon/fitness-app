/* eslint-disable no-empty */
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';

import { localStorageGetItem } from 'src/utils/storageAvailable';

import Store from 'src/store';

import { useSettingsContext } from 'src/components/settings';

import { allLangs, defaultLang } from './configLang';

// ----------------------------------------------------------------------

export function useLocales() {
  const langStorage = localStorageGetItem('i18nextLng');
  const currentLang =
    allLangs.find((lang) => lang.value === langStorage) || defaultLang;
  return {
    allLangs,
    currentLang
  };
}

// ----------------------------------------------------------------------

export function useTranslate() {
  const { t, i18n, ready } = useTranslation();
  const [authState, setAuth] = useRecoilState(Store.Auth.authState);
  const settings = useSettingsContext();

  const onChangeLang = useCallback(
    async (newlang: string) => {
      await loadTranslate(newlang);
      i18n.changeLanguage(newlang);
      settings.onChangeDirectionByLang(newlang);
    },
    [i18n, settings, authState]
  );

  const loadTranslate = async (newlang: string) => {
    // if (!authState?.token) return;

    try {
      //
    } catch (err) {}
  };

  return {
    t,
    i18n,
    ready,
    onChangeLang
  };
}
