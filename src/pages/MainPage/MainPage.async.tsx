import { lazy } from 'react';

// export const AboutPageAsync = lazy(() => import('./AboutPage'));

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./MainPage')), 1500);
    })
);
