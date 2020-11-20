const routes = [
  { path: '/', name: 'home', component: () => import(/* webpackChunkName: "home" */ '@/containers/Home') },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '@/containers/About') },
];

export default routes;