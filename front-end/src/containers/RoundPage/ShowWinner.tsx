import { CButton, CCol, CRow, CWidgetStatsF } from "@coreui/react";
import { setWinner } from "./slice";
import store from "../../utils/store";
import CIcon from '@coreui/icons-react'
import { cilUser } from '@coreui/icons'
import { Player } from "./RoundPage";

type WinnerProps = {
    winner: Player;
}

function ShowWinner(props: WinnerProps) {
    return (
        <div className="mt-4 pb-4">
            <CRow>
                <CCol>
                    <h3>
                        <label>The Selected Tea Maker Is</label>
                    </h3>
                </CCol>
            </CRow>
            <CRow>
                <CCol md={6}>
                    <CWidgetStatsF
                        className="mb-3"
                        color="warning"
                        icon={<CIcon icon={cilUser} height={24} />}
                        value={props.winner.name}
                    />
                </CCol>
            </CRow>
            <CRow className="my-2">
                <CCol>
                    <CButton
                        onClick={() => store.dispatch(setWinner(undefined))}
                    >
                        Start Again
                    </CButton>
                </CCol>
            </CRow>
        </div>
    );
}

export default ShowWinner;
