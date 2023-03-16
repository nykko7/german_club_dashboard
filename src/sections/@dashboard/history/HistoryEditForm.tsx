import * as Yup from 'yup';
import { useState, useCallback, useMemo } from 'react';
// next
import { useRouter } from 'next/router';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { Grid, Card, Stack, Button, Typography } from '@mui/material';
// routes
import { LoadingButton } from '@mui/lab';
import { PATH_DASHBOARD } from '../../../routes/paths';
// @types
import { IHistory } from '../../../@types/history';
// components
import { useSnackbar } from '../../../components/snackbar';
import FormProvider, { RHFEditor, RHFUpload, RHFTextField } from '../../../components/hook-form';
//
import HistoryEditPreview from './HistoryEditPreview';

export type FormValuesProps = IHistory;

type Props = {
  isEdit?: boolean;
  currentHistory?: IHistory;
};

export default function HistoryEditForm({ isEdit = false, currentHistory }: Props) {
  const { push } = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const [openPreview, setOpenPreview] = useState(false);

  const NewBlogSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    tags: Yup.array().min(2, 'Must have at least 2 tags'),
    metaKeywords: Yup.array().min(1, 'Meta keywords is required'),
    cover: Yup.mixed().required('Cover is required').nullable(true),
    content: Yup.string().required('Content is required'),
  });

  const defaultValues = useMemo(
    () => ({
      title: currentHistory?.title || '',
      description: currentHistory?.description || '',
      content: currentHistory?.content || '',
      cover: currentHistory?.cover || '',
      createdAt: currentHistory?.createdAt || new Date(),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentHistory]
  );

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewBlogSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const values = watch();

  const handleOpenPreview = () => {
    setOpenPreview(true);
  };

  const handleClosePreview = () => {
    setOpenPreview(false);
  };

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      handleClosePreview();
      enqueueSnackbar('Post success!');
      push(PATH_DASHBOARD.history.view);
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
        setValue('cover', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleRemoveFile = () => {
    setValue('cover', null);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={3}>
              <RHFTextField name="title" label="Post Title" />

              <RHFTextField name="description" label="Description" multiline rows={3} />

              <Stack spacing={1}>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                  Content
                </Typography>

                <RHFEditor simple name="content" />
              </Stack>

              <Stack spacing={1}>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                  Cover
                </Typography>

                <RHFUpload
                  name="cover"
                  maxSize={3145728}
                  onDrop={handleDrop}
                  onDelete={handleRemoveFile}
                />
              </Stack>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={1.5}>
            <LoadingButton
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              loading={isSubmitting}
            >
              Post
            </LoadingButton>
            <Button
              fullWidth
              color="inherit"
              variant="outlined"
              size="large"
              onClick={handleOpenPreview}
            >
              Preview
            </Button>
          </Stack>
        </Grid>
      </Grid>

      <HistoryEditPreview
        values={values}
        open={openPreview}
        isValid={isValid}
        isSubmitting={isSubmitting}
        onClose={handleClosePreview}
        onSubmit={handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
}
