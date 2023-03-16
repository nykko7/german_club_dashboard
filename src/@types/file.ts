// ----------------------------------------------------------------------

export type IFolderManager = {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  totalFiles?: number;
  dateCreated: Date | number | string;
  dateModified: Date | number | string;
};

export type IFileManager = {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  dateCreated: Date | number | string;
  dateModified: Date | number | string;
};

export type IFile = IFileManager | IFolderManager;
