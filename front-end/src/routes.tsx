import React from 'react';

const RoundPage = React.lazy(() => import('./containers/RoundPage'));
const SummaryPage = React.lazy(() => import('./containers/SummaryPage'));

const routes = [
    {
        path: '/',
        name: 'Round Page',
        element: RoundPage,
    },
    {
        path: '/summary',
        name: 'Summary Page',
        element: SummaryPage,
    },
];

export default routes;
