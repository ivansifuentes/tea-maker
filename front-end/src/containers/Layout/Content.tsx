
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// routes config
import routes from '../../routes';
import { CContainer, CSpinner } from '@coreui/react';

const AppContent = () => {
    return (
        <CContainer lg>
            <Suspense fallback={<CSpinner color="primary" />}>
                <Routes>
                    {routes.map((route) => {
                        return (
                            route.element && (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={<route.element />}
                                />
                            )
                        );
                    })}
                </Routes>
            </Suspense>
        </CContainer>
    );
};

export default React.memo(AppContent);
