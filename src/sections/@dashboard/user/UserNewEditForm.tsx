import * as Yup from 'yup';
import { useCallback, useEffect, useMemo } from 'react';
// next
import { useRouter } from 'next/router';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, Typography } from '@mui/material';
// utils
import { fData } from '../../../utils/formatNumber';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// i18n
import { useLocales } from '../../../locales';
// @types
import { IMember } from '../../../@types/member';
// import { IUserAccountGeneral } from '../../../@types/user';
// assets
import { countries } from '../../../assets/data';
// components
// import Label from '../../../components/label';
import { CustomFile } from '../../../components/upload';
import { useSnackbar } from '../../../components/snackbar';
import FormProvider, {
  RHFSelect,
  // RHFSwitch,
  RHFTextField,
  RHFUploadAvatar,
} from '../../../components/hook-form';

// ----------------------------------------------------------------------

interface FormValuesProps extends Omit<IMember, 'avatarUrl'> {
  avatarUrl: CustomFile | string | null;
}

type Props = {
  isEdit?: boolean;
  currentUser?: IMember;
};

const ROLES = [
  'president',
  'vice_president',
  'secretary',
  'treasurer',
  'board_member',
  'honor_advisor',
  'honor_member',
  'member',
];

export default function UserNewEditForm({ isEdit = false, currentUser }: Props) {
  const { translate, currentLang } = useLocales();

  const { push } = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = useMemo(
    () =>
      Yup.object().shape({
        firstName: Yup.string().required(`${translate(`firstName_is_required`)}`),
        lastName: Yup.string().required(`${translate(`lastName_is_required`)}`),
        secondSurname: Yup.string().nullable(true),
        email: Yup.string()
          .required(`${translate(`email_is_required`)}`)
          .email(`${translate(`email_must_be_valid`)}`),
        phoneNumber: Yup.string().required(`${translate(`phoneNumber_is_required`)}`),
        address: Yup.string().required(`${translate(`address_is_required`)}`),
        country: Yup.string().required(`${translate(`country_is_required`)}`),
        city: Yup.string().required(`${translate(`city_is_required`)}`),
        role: Yup.string().required(`${translate(`role_is_required`)}`),
        avatarUrl: Yup.string().nullable(true),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentLang]
  );
  // const NewUserSchema = Yup.object().shape({
  //   firstName: Yup.string().required(`${translate(`firstName_is_required`)}`),
  //   lastName: Yup.string().required(`${translate(`lastName_is_required`)}`),
  //   secondSurname: Yup.string().nullable(true),
  //   email: Yup.string()
  //     .required(`${translate(`email_is_required`)}`)
  //     .email(`${translate(`email_must_be_valid`)}`),
  //   phoneNumber: Yup.string().required(`${translate(`phoneNumber_is_required`)}`),
  //   address: Yup.string().required(`${translate(`address_is_required`)}`),
  //   country: Yup.string().required(`${translate(`country_is_required`)}`),
  //   city: Yup.string().required(`${translate(`city_is_required`)}`),
  //   role: Yup.string().required(`${translate(`role_is_required`)}`),
  //   avatarUrl: Yup.string().nullable(true),
  // });

  const defaultValues = useMemo(
    () => ({
      firstName: currentUser?.firstName || '',
      lastName: currentUser?.lastName || '',
      secondSurname: currentUser?.secondSurname || '',
      email: currentUser?.email || '',
      phoneNumber: currentUser?.phoneNumber || '',
      address: currentUser?.address || '',
      country: currentUser?.country || '',
      city: currentUser?.city || '',
      avatarUrl: currentUser?.avatarUrl || null,
      role: currentUser?.role || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentUser]
  );

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    // watch,
    // control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  // const values = watch();

  useEffect(() => {
    if (isEdit && currentUser) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentUser]);

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
      push(PATH_DASHBOARD.users.list);
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('avatarUrl', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ pt: 10, pb: 5, px: 3 }}>
            <Box sx={{ mb: 5 }}>
              <RHFUploadAvatar
                name="avatarUrl"
                maxSize={3145728}
                onDrop={handleDrop}
                helperText={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.secondary',
                    }}
                  >
                    Allowed *.jpeg, *.jpg, *.png, *.gif
                    <br /> max size of {fData(3145728)}
                  </Typography>
                }
              />
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <RHFTextField name="firstName" label={`${translate('firstName')}`} />
              <RHFTextField name="lastName" label={`${translate('lastName')}`} />
              <RHFTextField name="secondSurname" label={`${translate('secondSurname')}`} />
              <RHFTextField name="email" label={`${translate('email')}`} />
              <RHFTextField name="phoneNumber" label={`${translate('phoneNumber')}`} />

              <RHFSelect
                native
                name="country"
                label={`${translate('country')}`}
                placeholder={`${translate('country')}`}
              >
                <option value="" />
                {countries.map((country) => (
                  <option key={country.code} value={country.label}>
                    {country.label}
                  </option>
                ))}
              </RHFSelect>

              {/* <RHFTextField name="state" label="State/Region" /> */}
              <RHFTextField name="city" label={`${translate('city')}`} />
              <RHFTextField name="address" label={`${translate('address')}`} />
              {/* <RHFTextField name="zipCode" label="Zip/Code" /> */}
              {/* <RHFTextField name="company" label="Company" /> */}

              <RHFSelect
                native
                name="role"
                label={`${translate('role')}`}
                placeholder={`${translate('role')}`}
              >
                <option value="" />
                {ROLES.map((role) => (
                  <option key={role} value={role}>
                    {`${translate(`positions.${role}.name`)}`}
                  </option>
                ))}
              </RHFSelect>
            </Box>

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {!isEdit ? 'Create User' : 'Save Changes'}
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
