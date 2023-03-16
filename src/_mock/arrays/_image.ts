import _mock from '../_mock';

// ----------------------------------------------------------------------

const GB = 1000000000 * 24;

const getFileName = (index: number) => `cover_${index + 1}.jpg`;

const getFileUrl = (index: number) => _mock.image.cover(index + 1);

// ----------------------------------------------------------------------

export const _images = [...Array(20)].map((_, index) => ({
  id: `${_mock.id(index)}_files`,
  name: getFileName(index),
  size: GB / ((index + 1) * 500),
  type: 'jpg',
  url: getFileUrl(index),
  dateCreated: _mock.time(index),
  dateModified: _mock.time(index),
}));
// ----------------------------------------------------------------------
