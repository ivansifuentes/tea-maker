import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

export default createBrowserRouter([
    // match everything with "*"
    { path: '*', element: App() },
]);
