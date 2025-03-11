import React from 'react';

const RoundPage = React.lazy(() => import('./containers/RoundPage'));

const routes = [
    {
        path: '/',
        name: 'Round Page',
        element: RoundPage,
    },
];

export default routes;
