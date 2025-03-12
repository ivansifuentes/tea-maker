import React from 'react';
import { Link } from 'react-router-dom';
import { CNavItem, CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react';

const AppSidebar = () => {
    const pathname = window.location.pathname;

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
