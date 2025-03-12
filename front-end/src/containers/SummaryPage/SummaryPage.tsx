import { CCol, CContainer, CRow } from "@coreui/react";
import store from "../../utils/store";
import WinnerRankTable from "./WinnerRankTable";
import TopParticipants from "./TopParticipants";
import axios from "axios";
import { API_URL } from "../../constants";
import { useEffect } from "react";
import { setParticipantList, setRankList } from "./slice";
import TopParticipantsTable from "./TopParticipantsTable";
import WinnerRank from "./WinnerRank";

function SummaryPage() {
    const fetchData = async () => {
        try {
            const res = await axios.get(API_URL + '/fetch-top-participants');
            if (res.status === 200) {
                const data = res.data;
                store.dispatch(
                    setParticipantList(data)
                );
            }
            const rankRes = await axios.get(API_URL + '/fetch-winner-rank');
            if (rankRes.status === 200) {
                const data = rankRes.data;
                store.dispatch(
                    setRankList(data)
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
                        <label>Summary</label>
                    </h3>
                </CCol>
            </CRow>
            <CRow>
                <CCol md={6}>
                    <WinnerRankTable />
                </CCol>
                <CCol md={6}>
                    <WinnerRank />
                </CCol>
            </CRow>
            <CRow>
                <CCol md={6}>
                    <TopParticipantsTable />
                </CCol>
                <CCol md={6}>
                    <TopParticipants />
                </CCol>
            </CRow>

        </CContainer>
    );
}

export default SummaryPage;
