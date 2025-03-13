import { CContainer, CRow } from '@coreui/react';
import Sidebar from './Sidebar';
import Content from './Content';
import Header from './Header';

function Layout() {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <CRow className='d-flex flex-row content'>
                <Sidebar />
                <CContainer className='contentArea'>
                    <CRow>
                        <Header />
                    </CRow>
                    <CRow>
                        <Content />
                    </CRow>
                </CContainer>
            </CRow>
        </div>
    );
}

export default Layout;
