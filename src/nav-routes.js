import { lazy } from 'react'

const HomePage = lazy(() => import('./Pages/HomePage'))
const SearchPage = lazy(() => import('./Pages/SearchPage'))
const SubmitPage = lazy(() => import('./Pages/SubmitPage'))
const UserAuthPage = lazy(() => import('./Pages/UserAuthPage'))
const UserAccountPage = lazy(() => import('./Pages/UserAccountPage'))

const ROUTES = [
  {
    path: '/',
    isExact: true,
    component: HomePage,
  },
  {
    path: '/search',
    component: SearchPage,
  },
  {
    path: '/submit',
    component: SubmitPage,
  },
  {
    path: '/auth',
    component: UserAuthPage,
  },
  {
    path: '/account',
    component: UserAccountPage,
  },
]

export default ROUTES
