// import {
//     CNavItem,
//     CSidebar,
//     CSidebarBrand,
//     CSidebarNav,
// } from '@coreui/react';
import { useWindowSize } from '@react-hookz/web/esm';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
// import { BREAKPOINT_MD } from '../../utils/breakpoint';
import { useAppSelector } from '../../utils/store';
import { CNavItem, CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react';

const AppSidebar = () => {
    const showSidebar = useAppSelector((state: any) => state.layout.showSidebar);
    const showSidebarMobile = useAppSelector(
        (state: any) => state.layout.showSidebarMobile
    );
    const windowSize = useWindowSize();
    const [entityId, setEntityId] = useState('')

    const pathname = window.location.pathname;
    const location = useLocation();

    return (
        <CSidebar
            position="sticky"
            visible={true}
            className='tea-sidebar'
        >
            <Link to="/">
                <CSidebarBrand className="d-md-flex pt-5 pb-3 tea-logo">
                    <img className='tea-logo-image' src={require('../../logo.svg').default} alt='teaLogo' />
                </CSidebarBrand>
            </Link>
            <CSidebarNav>
                <CNavItem href={`/`} active={pathname.endsWith('/')}>Round</CNavItem>
                <CNavItem href={`/summary`} active={pathname.endsWith('/summary')}>Summary</CNavItem>
            </CSidebarNav>
        </CSidebar>
    );
};

export default React.memo(AppSidebar);
