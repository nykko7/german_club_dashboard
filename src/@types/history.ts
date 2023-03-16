import { CustomFile } from '../components/upload';

// ----------------------------------------------------------------------

export type IHistory = {
  id: string;
  cover: CustomFile | string | null;
  title: string;
  description: string;
  content: string;
  createdAt?: Date | string | number;
  editedAt?: Date | string | number;
};
