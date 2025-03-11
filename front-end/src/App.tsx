import '@coreui/coreui/dist/css/coreui.min.css'
import { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './global/fonts/fonts.css';
import './styles/index.scss';

const Layout = React.lazy(() => import('./containers/Layout'));

function App() {
  return (
    <Suspense>
        <Routes>
            <Route path="*" element={<Layout />} />
        </Routes>
    </Suspense>
  );
}

export default App;
