import { CCol, CContainer, CRow } from "@coreui/react";
import NewPlayerForm from "./NewPlayerForm";
import CurrentPlayers from "./CurrentPlayers";
import PickTeaMaker from "./PickTeaMaker";
import { useAppSelector } from "../../utils/store";
import { selectPlayers, selectWinner } from "./slice";
import ShowWinner from "./ShowWinner";

export type Player = {
    id?: string;
    name: string;
}

function RoundPage() {
    const winner = useAppSelector(selectWinner);
    const players = useAppSelector(selectPlayers);

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
