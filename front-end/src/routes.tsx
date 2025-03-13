import React from 'react';

const RoundPage = React.lazy(() => import('./containers/RoundPage'));
const SummaryPage = React.lazy(() => import('./containers/SummaryPage'));
const PreferencesPage = React.lazy(() => import('./containers/PreferencesPage'));

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
    {
        path: '/preferences',
        name: 'Pref Page',
        element: PreferencesPage,
    },
];

export default routes;
