import { CCol, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CHeader, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilCalculator, cilUser } from "@coreui/icons";
import axios from "axios";
import { API_URL } from "../../constants";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
    const navigate = useNavigate();

    return (
        <>
            <CRow>
                <CCol>
                    <CHeader position="sticky" className="global-header">
                        <div className="ms-auto">
                            <CDropdown className="d-inline">
                                <CDropdownToggle color="secondary" caret={false} style={{borderRadius: '1000px'}}>
                                    <CIcon icon={cilUser} />
                                </CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem
                                        key="login"
                                        onClick={async () => {
                                            try {
                                                const res = await axios
                                                    .post(
                                                        `${API_URL}/pretend-login`,
                                                        {
                                                            userId: '1ed75d23-9884-434a-aa92-556deed16db3',
                                                            password: 'pass',
                                                        }
                                                    );
                                                if (res.status === 200) {
                                                    localStorage.setItem(
                                                        'user-token',
                                                        res.data
                                                    );
                                                    navigate(0);
                                                }
                                            } catch (e) {
                                                console.error('problem on login');
                                            }
                                        }}
                                    >
                                        <CIcon
                                            icon={cilCalculator}
                                            className="me-2"
                                        />
                                        Login
                                    </CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                        </div>
                    </CHeader>
                </CCol>
            </CRow>
            
        </>
    );
};

export default AppHeader;
