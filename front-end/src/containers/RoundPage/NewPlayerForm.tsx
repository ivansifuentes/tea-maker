import { CAlert, CButton, CCard, CCol, CFormInput, CRow } from "@coreui/react";
import { useState } from "react";
import { selectPlayers, setPlayers } from "./slice";
import store, { useAppSelector } from "../../utils/store";

function NewPlayerForm() {
    const [newPlayerName, setNewPlayerName] = useState<string>();
    const players = useAppSelector(selectPlayers);

    const [error, setError] = useState<string>();

    const addToPlayers = () => {
        if (!newPlayerName)
            return;
        const exists = players?.some((p) => p.name === newPlayerName);
        // for simplicity-sake, only accept unique names
        if (exists) {
            setError('Player name already exists');
            return;
        }
        store.dispatch(
            setPlayers([...players, {
                name: newPlayerName,
            }])
        );
    }

    return (
        <div className="pb-4 dark-border-bottom">
            <CCol md={4}>
                <CCard className="px-3">
                    <CRow className="my-3">
                        <CCol>
                            Enter a new player
                        </CCol>
                    </CRow>
                    <CRow className="my-3">
                        <CCol>
                            <CFormInput
                                placeholder="Enter name"
                                value={newPlayerName ?? ''}
                                onChange={(e) => setNewPlayerName(e.target.value)}
                            />
                        </CCol>
                    </CRow>
                    <CRow className="my-3">
                        <CCol>
                            <CButton
                                color="primary"
                                onClick={() => addToPlayers()}
                                disabled={!newPlayerName}
                            >
                                Add Player
                            </CButton>
                        </CCol>
                    </CRow>
                    {error && (
                        <CAlert color="danger">{error}</CAlert>
                    )}
                </CCard>
            </CCol>
        </div>
    );
}

export default NewPlayerForm;
