import { RouteObject } from 'react-router';
import { App } from '../App';
import { Home } from '../pages/Home';
import { UserPage } from '../pages/User';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/user/:id?', element: <UserPage /> },
    ],
  },
];
