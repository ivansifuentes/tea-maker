import { CButton, CCol, CRow, CWidgetStatsF } from "@coreui/react";
import { useState } from "react";
import { selectPlayers, setPlayers, setWinner } from "./slice";
import store, { useAppSelector } from "../../utils/store";
import CIcon from '@coreui/icons-react'
import { cilUser, cilDelete } from '@coreui/icons'
import axios from "axios";
import { API_URL } from "../../constants";

function PickTeaMaker() {
    const players = useAppSelector(selectPlayers);

    const pickTeaMaker = async () => {
        try {
            if (!players.length)
                return;

            const res = await axios.post(API_URL + '/pick-tea-maker', { players });
            console.log({res});
            if (res.status === 200) {
                const data = res.data;
                store.dispatch(
                    setWinner({
                        id: data.id,
                        name: data.name,
                    })
                );
                store.dispatch(
                    setPlayers([])
                );
            }
        } catch (e: any) {
            // setError(e.message ?? 'Something went wrong');
        }
    }

    return (
        <div className="mt-4 pb-4">
            <CRow>
                <CCol md={6}>
                    <CButton
                        onClick={() => pickTeaMaker()}
                        disabled={!players.length}
                    >
                        Pick Tea Maker
                    </CButton>
                </CCol>
            </CRow>
        </div>
    );
}

export default PickTeaMaker;
