import { CButton, CCol, CRow, CWidgetStatsF } from "@coreui/react";
import { selectPlayers, selectSpotlighted, setPlayers, setSpotlighted, setWinner } from "./slice";
import store, { useAppSelector } from "../../utils/store";
import CIcon from '@coreui/icons-react'
import { cilUser } from '@coreui/icons'
import axios from "axios";
import { API_URL, PICK_PAUSE } from "../../constants";

function PickTeaMaker() {
    const players = useAppSelector(selectPlayers);
    const spotlighted = useAppSelector(selectSpotlighted);

    const pickTeaMaker = async () => {
        try {
            if (!players.length)
                return;

            const res = await axios.post(API_URL + '/pick-tea-maker', { players });
            // For dramatic effect, show every player card with a small pause
            for (let i = 0; i < players.length; i++) {
                store.dispatch(setSpotlighted(i));
                await new Promise(r => setTimeout(r, PICK_PAUSE));
            }
            store.dispatch(setSpotlighted(undefined));

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
            {typeof spotlighted === 'undefined' && (
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
            )}
            {typeof spotlighted !== 'undefined' && (
                <>
                    <CRow>
                        <CCol>
                            <h4>
                                Picking Tea Maker...
                            </h4>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol md={6}>
                            <CWidgetStatsF
                                className="mb-3"
                                color="info"
                                icon={<CIcon icon={cilUser} height={24} />}
                                value={players[spotlighted].name}
                            />
                        </CCol>
                    </CRow>
                </>
            )}
        </div>
    );
}

export default PickTeaMaker;
