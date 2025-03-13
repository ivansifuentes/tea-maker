import { CCol, CRow, CWidgetStatsF } from "@coreui/react";
import { selectPlayers, setPlayers } from "./slice";
import store, { useAppSelector } from "../../utils/store";
import CIcon from '@coreui/icons-react'
import { cilUser, cilDelete } from '@coreui/icons'
import { setUserPlayers } from "../PreferencesPage/slice";

function CurrentPlayers() {
    const players = useAppSelector(selectPlayers);

    const deletePlayer = (playerName: string) => {
        if (!playerName)
            return;
        const filteredPlayers = players.filter((p) => p.name !== playerName);
        store.dispatch(
            setPlayers([...filteredPlayers])
        );
        // empty the userplayers, otherwise if players gets empty, it gets restarted to userPlayers
        store.dispatch(
            setUserPlayers([])
        );
    }

    return (
        <div className="mt-4 pb-4 dark-border-bottom">
            <CRow>
                <CCol>
                    <h3>
                        <label>Current Players</label>
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
                            title={
                                <CIcon
                                    className="cursor-pointer"
                                    icon={cilDelete}
                                    height={20}
                                    onClick={() => deletePlayer(player.name)}
                                />}
                            value={player.name}
                        />
                    </CCol>
                ))}
            </CRow>
        </div>
    );
}

export default CurrentPlayers;
