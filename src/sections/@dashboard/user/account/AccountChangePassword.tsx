import * as Yup from 'yup';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { Stack, Card } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// @types
import { useLocales } from 'src/locales';
import { IUserAccountChangePassword } from '../../../../@types/user';
// components
import Iconify from '../../../../components/iconify';
import { useSnackbar } from '../../../../components/snackbar';
import FormProvider, { RHFTextField } from '../../../../components/hook-form';

// ----------------------------------------------------------------------

type FormValuesProps = IUserAccountChangePassword;

export default function AccountChangePassword() {
  const { enqueueSnackbar } = useSnackbar();

  const { translate } = useLocales();

  const ChangePassWordSchema = Yup.object().shape({
    oldPassword: Yup.string().required(`${translate('old_password_is_required')}`),
    newPassword: Yup.string()
      .min(6, `${translate('password_must_be_at_least_6_characters')}`)
      .required(`${translate('new_password_is_required')}`),
    confirmNewPassword: Yup.string().oneOf(
      [Yup.ref('newPassword'), null],
      `${translate('password_must_match')}`
    ),
  });

  const defaultValues = {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  const methods = useForm({
    resolver: yupResolver(ChangePassWordSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar('Update success!');
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <Stack spacing={3} alignItems="flex-end" sx={{ p: 3 }}>
          <RHFTextField name="oldPassword" type="password" label={`${translate('old_password')}`} />

          <RHFTextField
            name="newPassword"
            type="password"
            label={`${translate('new_password')}`}
            helperText={
              <Stack component="span" direction="row" alignItems="center">
                <Iconify icon="eva:info-fill" width={16} sx={{ mr: 0.5 }} />{' '}
                {`${translate('password_must_be_at_least_6_characters')}`}
              </Stack>
            }
          />

          <RHFTextField
            name="confirmNewPassword"
            type="password"
            label={`${translate('confirm_new_password')}`}
          />

          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            {`${translate('save_changes')}`}
          </LoadingButton>
        </Stack>
      </Card>
    </FormProvider>
  );
}
