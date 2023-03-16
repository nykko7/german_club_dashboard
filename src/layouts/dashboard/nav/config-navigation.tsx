// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  // GENERAL
  home: icon('ic_home'),
  // MANAGEMENT
  members: icon('ic_members'),
  news: icon('ic_news'),
  gallery: icon('ic_image_gallery'),
  history: icon('ic_history'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [{ title: 'home', path: PATH_DASHBOARD.home, icon: ICONS.home }],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'management',
    items: [
      {
        title: 'members',
        path: PATH_DASHBOARD.users.root,
        icon: ICONS.members,
        children: [
          { title: 'list', path: PATH_DASHBOARD.users.list },
          { title: 'create', path: PATH_DASHBOARD.users.create },
        ],
      },
      {
        title: 'news',
        path: PATH_DASHBOARD.news.root,
        icon: ICONS.news,
        children: [
          { title: 'list', path: PATH_DASHBOARD.news.list },
          { title: 'create', path: PATH_DASHBOARD.news.new },
        ],
      },
      {
        title: 'gallery',
        path: PATH_DASHBOARD.gallery.root,
        icon: ICONS.gallery,
      },
      {
        title: 'history',
        path: PATH_DASHBOARD.history.root,
        icon: ICONS.history,
      },
    ],
  },
];

export default navConfig;
