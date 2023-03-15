// next
import Head from 'next/head';
import { Container, Grid, Typography } from '@mui/material';
// layouts
import { useLocales } from 'src/locales';
import DashboardLayout from '../../layouts/dashboard';
// components
import { useSettingsContext } from '../../components/settings';

// sections
import { AnalyticsWidgetSummary } from '../../sections/@dashboard/general/analytics';

// ----------------------------------------------------------------------

Home.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function Home() {
  const { themeStretch } = useSettingsContext();
  const { translate } = useLocales();

  return (
    <>
      <Head>
        <title>{`${translate('welcome_page')}`}</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          {`${translate('german_club')}`}
        </Typography>

        <Typography variant="h4" gutterBottom>{`${translate('welcome_page')}`}</Typography>

        <Grid container spacing={3} marginBottom={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title={`${translate('news')}`}
              total={10}
              icon="ion:newspaper"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title={`${translate('positions.directives.name')}`}
              total={7}
              color="secondary"
              icon="fa-solid:users-cog"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title={`${translate('members')}`}
              total={109}
              color="info"
              icon="fa-solid:users"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title={`${translate('images_in_gallery')}`}
              total={30}
              color="warning"
              icon="clarity:image-gallery-solid"
            />
          </Grid>
        </Grid>

        <Typography paragraph gutterBottom>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequuntur
          laboriosam exercitationem veritatis delectus, labore maxime unde culpa dicta modi at
          repellat dolorum dignissimos doloribus quaerat itaque laborum mollitia consectetur.
        </Typography>
      </Container>
    </>
  );
}
