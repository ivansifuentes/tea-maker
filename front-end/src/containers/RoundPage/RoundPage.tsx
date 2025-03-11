import { CCol, CContainer, CRow } from "@coreui/react";
import NewPlayerForm from "./NewPlayerForm";
import CurrentPlayers from "./CurrentPlayers";
import PickTeaMaker from "./PickTeaMaker";
import { useAppSelector } from "../../utils/store";
import { selectWinner } from "./slice";
import ShowWinner from "./ShowWinner";

export type Player = {
    id?: string;
    name: string;
}

function RoundPage() {
    const winner = useAppSelector(selectWinner);

    if (winner) {
        return (
            <ShowWinner winner={winner} />
        );
    }

    return (
        <CContainer>
            <CRow>
                <CCol>
                    Tea
                </CCol>
            </CRow>
            <NewPlayerForm />
            <CurrentPlayers />
            <PickTeaMaker />
        </CContainer>
    );
}

export default RoundPage;
