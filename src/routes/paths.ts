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
  },
  gallery: {
    root: path(ROOTS_DASHBOARD, '/news'),
    list: path(ROOTS_DASHBOARD, '/news/list'),
  },
  history: {
    root: path(ROOTS_DASHBOARD, '/news'),
    list: path(ROOTS_DASHBOARD, '/news/list'),
  },
};
