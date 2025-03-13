import { CCol, CRow, CWidgetStatsF } from "@coreui/react";
import { useAppSelector } from "../../utils/store";
import CIcon from '@coreui/icons-react'
import { cilUser } from '@coreui/icons'
import { selectUserPlayers } from "./slice";

function UserPlayers() {
    const players = useAppSelector(selectUserPlayers);

    return (
        <div className="mt-4 pb-4 dark-border-bottom">
            <CRow>
                <CCol>
                    <h3>
                        <label>My Players</label>
                    </h3>
                </CCol>
            </CRow>
            <CRow>
                {players.map((player) => (
                    <CCol md={4} key={player.name}>
                        <CWidgetStatsF
                            className="mb-3"
                            color="primary"
                            icon={<CIcon icon={cilUser} height={24} />}
                            value={player.name}
                        />
                    </CCol>
                ))}
            </CRow>
        </div>
    );
}

export default UserPlayers;
