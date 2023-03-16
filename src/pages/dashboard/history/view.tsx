// next
import Head from 'next/head';

// @mui
import { Box, Divider, Stack, Container, Typography, Pagination } from '@mui/material';
// routes
import { _history } from 'src/_mock/arrays';
import { useState } from 'react';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import Markdown from 'src/components/markdown';
import { PATH_DASHBOARD } from '../../../routes/paths';
// layouts
import DashboardLayout from '../../../layouts/dashboard';
// components
import { useSettingsContext } from '../../../components/settings';
import useLocales from '../../../locales/useLocales';

// sections
import { HistoryHero } from '../../../sections/@dashboard/history';

// ----------------------------------------------------------------------

ViewHistory.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function ViewHistory() {
  const { themeStretch } = useSettingsContext();
  const { translate } = useLocales();

  const [history, setHistory] = useState(_history);

  const [loadingHistory, setLoadingHistory] = useState(true);

  const [errorMsg, setErrorMsg] = useState(null);

  // EJEMPLO DE COMO HACER UNA PETICION A UNA API
  // const getHistory = useCallback(async () => {
  //   try {
  //     const response = await axios.get('/api/blog/post', {
  //       params: { title },
  //     });

  //     setPost(response.data.post);
  //     setLoadingPost(false);
  //   } catch (error) {
  //     console.error(error);
  //     setLoadingPost(false);
  //     setErrorMsg(error.message);
  //   }
  // }, [title]);

  // useEffect(() => {
  //   if (title) {
  //     getPost();
  //   }
  // }, [getPost, title]);

  return (
    <>
      <Head>
        <title>{`${translate(`history`)}`}</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <CustomBreadcrumbs
          heading="Post Details"
          links={[
            {
              name: 'Dashboard',
              href: PATH_DASHBOARD.root,
            },
            {
              name: `${translate(`history`)}`,
              href: PATH_DASHBOARD.history.root,
            },
          ]}
        />
        {history ? (
          <Stack
            sx={{
              borderRadius: 2,
              boxShadow: (theme) => ({
                md: theme.customShadows.card,
              }),
            }}
          >
            <HistoryHero history={history} />
            <Markdown
              children={history.content}
              sx={{
                px: { md: 5 },
                mt: 5,
              }}
            />
          </Stack>
        ) : (
          <Typography variant="h3" component="h1" paragraph>
            {`${translate(`history`)}`}
          </Typography>
        )}
      </Container>
    </>
  );
}
