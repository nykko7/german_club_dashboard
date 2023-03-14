// @mui
import { Alert, Tooltip, Stack, Typography, Link, Box } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import LoginLayout from '../../layouts/login';
//
import AuthLoginForm from './AuthLoginForm';
// import AuthWithSocial from './AuthWithSocial';
import LanguagePopover from '../../layouts/dashboard/header/LanguagePopover';
import useLocales from '../../locales/useLocales';

// ----------------------------------------------------------------------

export default function Login() {
  // const { method } = useAuthContext();

  const { translate } = useLocales();

  return (
    <LoginLayout title={`${translate('hi_welcome_back')}`}>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Stack
          flexGrow={1}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          <Typography variant="h4">{`${translate('sign_in_to_dashboard')}`}</Typography>
          <LanguagePopover />
        </Stack>

        {/* <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New user?</Typography>

          <Link variant="subtitle2">Create an account</Link>
        </Stack> */}

        {/* <Tooltip title={method} placement="left">
          <Box
            component="img"
            alt={method}
            src={`/assets/icons/auth/ic_${method}.png`}
            sx={{ width: 32, height: 32, position: 'absolute', right: 0 }}
          />
        </Tooltip> */}
      </Stack>

      <Alert severity="info" sx={{ mb: 3 }}>
        {`${translate('use_email')}`}: <strong>demo@minimals.cc</strong> /{' '}
        {`${translate('password')}`} :<strong> demo1234</strong>
      </Alert>

      <AuthLoginForm />

      {/* <AuthWithSocial /> */}
    </LoginLayout>
  );
}
