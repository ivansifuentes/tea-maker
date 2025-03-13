import { CCol, CContainer, CRow } from "@coreui/react";
import NewPlayerForm from "./NewPlayerForm";
import CurrentPlayers from "./CurrentPlayers";
import PickTeaMaker from "./PickTeaMaker";
import store, { useAppSelector } from "../../utils/store";
import { selectPlayers, selectWinner, setPlayers } from "./slice";
import ShowWinner from "./ShowWinner";
import { selectUserPlayers, setUserPlayers } from "../PreferencesPage/slice";
import axios from "axios";
import { API_URL } from "../../constants";
import { useEffect } from "react";

export type Player = {
    id?: string;
    name: string;
}

function RoundPage() {
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

    const winner = useAppSelector(selectWinner);
    const players = useAppSelector(selectPlayers);
    const userPlayers = useAppSelector(selectUserPlayers);

    // If user has preferred list of players, don't start from zero
    if (!players.length && userPlayers.length > 0) {
        store.dispatch(setPlayers(userPlayers));
    }

    if (winner) {
        return (
            <ShowWinner winner={winner} />
        );
    }

    return (
        <CContainer className="mt-3">
            <CRow>
                <CCol>
                    <h3>
                        <label>Tea Making Round</label>
                    </h3>
                </CCol>
            </CRow>
            <NewPlayerForm />
            {players.length > 0 && <CurrentPlayers />}
            {players.length > 0 && <PickTeaMaker />}
        </CContainer>
    );
}

export default RoundPage;
