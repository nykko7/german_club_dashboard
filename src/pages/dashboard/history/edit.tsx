// next
import Head from 'next/head';
// @mui
import { Container } from '@mui/material';
// routes
import { useLocales } from 'src/locales';
import HistoryEditForm from 'src/sections/@dashboard/history/HistoryEditForm';
import { _history } from 'src/_mock/arrays';
import { useState } from 'react';
import { PATH_DASHBOARD } from '../../../routes/paths';
// layouts
import DashboardLayout from '../../../layouts/dashboard';
// components
import { useSettingsContext } from '../../../components/settings';
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';
// sections

// ----------------------------------------------------------------------

EditHistoryPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function EditHistoryPage() {
  const { themeStretch } = useSettingsContext();
  const { translate } = useLocales();

  const defaultHistory = _history;
  const [history, setHistory] = useState(defaultHistory);

  return (
    <>
      <Head>
        <title> {`${translate('edit_history')}`}</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading={`${translate('edit_history')}`}
          links={[
            {
              name: 'Dashboard',
              href: PATH_DASHBOARD.root,
            },
            {
              name: `${translate('history')}`,
              href: PATH_DASHBOARD.history.root,
            },
            {
              name: `${translate('edit')}`,
            },
          ]}
        />

        <HistoryEditForm isEdit currentHistory={history} />
      </Container>
    </>
  );
}
