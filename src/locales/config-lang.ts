// @mui
import { enUS, esES, deDE } from '@mui/material/locale';

// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: 'Español',
    value: 'es',
    systemValue: esES,
    icon: '/assets/icons/flags/ic_flag_es.svg',
  },
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: '/assets/icons/flags/ic_flag_en.svg',
  },
  {
    label: 'Deutsch',
    value: 'de',
    systemValue: deDE,
    icon: '/assets/icons/flags/ic_flag_de.svg',
  },
];

export const defaultLang = allLangs[0]; // Español
