// next
import Head from 'next/head';
import { Container, Typography } from '@mui/material';
// layouts
import { useLocales } from 'src/locales';
import DashboardLayout from '../../layouts/dashboard';
// components
import { useSettingsContext } from '../../components/settings';

// ----------------------------------------------------------------------

PageOne.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function PageOne() {
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

        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, minus? Eum adipisci
          minima nihil excepturi a quos at culpa nam corrupti possimus, officia recusandae sint cum
          non sapiente, iste eos? Exercitationem perferendis maiores quidem debitis, unde repellat
          temporibus optio placeat dicta ipsa adipisci, magni eum consequatur, commodi vel nulla.
          Sed consectetur blanditiis culpa corrupti omnis quisquam, nostrum eaque ullam dignissimos?
          Eos itaque debitis unde asperiores, totam perspiciatis illum blanditiis voluptas quasi
          earum laudantium vel quia quos ullam perferendis maiores nam incidunt praesentium odio.
          Deleniti consequatur unde, similique quisquam tempora labore. Ex, est nobis. Repudiandae
          porro dolorum ullam recusandae ad quia soluta iusto, vel veniam quam! Laborum, cumque? Vel
          id maxime voluptas. Quisquam sint enim amet a soluta. Ullam, pariatur iure! Odit, quisquam
          ipsa. Provident, minus unde atque at quam quaerat dignissimos molestiae non? Debitis quod
          quos quas at! Provident itaque velit assumenda ea facere illo, incidunt in maxime voluptas
          officiis. Atque at voluptas possimus quisquam. Accusamus libero harum obcaecati recusandae
          sunt beatae eveniet? Unde aperiam, minima deleniti impedit tenetur aliquam laborum harum
          eius quibusdam iste quod aliquid voluptatibus illo veritatis! Nam quibusdam culpa
          reprehenderit labore. Ipsum labore, vel reiciendis eius, eos velit officiis dignissimos
          incidunt neque sunt iusto quisquam a totam quia maxime. A ad odit temporibus nobis commodi
          recusandae! Dicta voluptatibus dolorem debitis veritatis eaque, repudiandae voluptate quos
          beatae. Molestiae recusandae ducimus unde ab iure nesciunt, laudantium temporibus, vel
          perspiciatis corporis cupiditate! Explicabo nihil dolorum nobis autem, harum quae? Rem
          iure voluptates excepturi officia adipisci laborum sed placeat, perspiciatis omnis.
          Debitis soluta ducimus, voluptatum molestiae ipsa, fuga veritatis facilis quis nisi ad
          labore modi! Voluptatem ex possimus quisquam accusantium. Distinctio vitae laboriosam
          facilis deleniti voluptates quod, iure laborum, sit et labore explicabo dolor, porro
          dignissimos. Ad enim consectetur placeat, saepe hic corrupti, mollitia ipsa ab molestiae
          autem quia iure.
        </Typography>
      </Container>
    </>
  );
}
