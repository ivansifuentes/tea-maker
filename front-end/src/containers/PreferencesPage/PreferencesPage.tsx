import { CCol, CContainer, CRow } from "@coreui/react";
import store from "../../utils/store";
import axios from "axios";
import { API_URL } from "../../constants";
import { useEffect } from "react";
import { setUserPlayers } from "./slice";
import UserPlayers from "./UserPlayers";


function PreferencesPage() {
    const fetchData = async () => {
        try {
            const res = await axios.get(API_URL + '/fetch-user-players');
            if (res.status === 200) {
                const data = res.data;
                store.dispatch(
                    setUserPlayers(data)
                );
            }
        } catch (e) {
            console.error({e});
        }
    };

    useEffect(() => {
        fetchData();
      }, []);

    return (
        <CContainer className="mt-3">
            <CRow>
                <CCol>
                    <h3>
                        <label>Preferences</label>
                    </h3>
                </CCol>
            </CRow>
            <CRow>
                <CCol>
                    <h3>
                        <UserPlayers />
                    </h3>
                </CCol>
            </CRow>
        </CContainer>
    );
}

export default PreferencesPage;
