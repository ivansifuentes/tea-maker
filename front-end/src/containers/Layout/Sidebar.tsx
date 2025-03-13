import React from 'react';
import { Link } from 'react-router-dom';
import { CNavItem, CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react';

const AppSidebar = () => {
    const pathname = window.location.pathname;
    const token = localStorage.getItem('user-token');

    return (
        <CSidebar
            position="sticky"
            visible={true}
            className='tea-sidebar'
        >
            <Link to="/">
                <CSidebarBrand className="d-md-flex pt-5 pb-3 tea-logo">
                    Tea Maker App
                </CSidebarBrand>
            </Link>
            <CSidebarNav>
                <CNavItem href={`/`} active={pathname.endsWith('/')}>Round</CNavItem>
                <CNavItem href={`/summary`} active={pathname.endsWith('/summary')}>Summary</CNavItem>
                {token && <CNavItem href={`/preferences`} active={pathname.endsWith('/preferences')}>My Preferences</CNavItem> }
            </CSidebarNav>
        </CSidebar>
    );
};

export default React.memo(AppSidebar);
