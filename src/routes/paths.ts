// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: '/login',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  home: path(ROOTS_DASHBOARD, '/home'),
  // two: path(ROOTS_DASHBOARD, '/two'),
  // three: path(ROOTS_DASHBOARD, '/three'),
  users: {
    root: path(ROOTS_DASHBOARD, '/users'),
    list: path(ROOTS_DASHBOARD, '/users/list'),
    account: path(ROOTS_DASHBOARD, '/users/account'),
    create: path(ROOTS_DASHBOARD, '/users/create'),
    edit: (name: string) => path(ROOTS_DASHBOARD, `/users/${name}/edit`),
  },
  news: {
    root: path(ROOTS_DASHBOARD, '/news'),
    list: path(ROOTS_DASHBOARD, '/news/list'),
    new: path(ROOTS_DASHBOARD, '/news/new'),
    view: (id: string) => path(ROOTS_DASHBOARD, `/news/${id}`),
    edit: (id: string) => path(ROOTS_DASHBOARD, `/news/${id}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, '/news/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
    demoView: path(ROOTS_DASHBOARD, '/news/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
  },
  gallery: {
    root: path(ROOTS_DASHBOARD, '/gallery/list'),
  },
  history: {
    root: path(ROOTS_DASHBOARD, '/history'),
    view: path(ROOTS_DASHBOARD, '/history/view'),
    edit: path(ROOTS_DASHBOARD, '/history/edit'),
  },
};
