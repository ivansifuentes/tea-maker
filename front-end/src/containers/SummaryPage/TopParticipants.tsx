import { CCard, CCardBody, CCardTitle } from "@coreui/react";
import { CChart } from "@coreui/react-chartjs";
import { selectParticipantList } from "./slice";
import { useAppSelector } from "../../utils/store";

function TopParticipants() {
    const topList = useAppSelector(selectParticipantList);

    return (
        <CCard className="summary-chart-card">
            <CCardBody className='d-flex flex-column align-items-center'>
                <CCardTitle className="text-center uppercase-font summary-title">
                    Most Rounds Played
                </CCardTitle>

                <CChart
                    type="bar"
                    data={{
                        labels: topList.map(x => x.name),
                        datasets: [
                            {
                                label: 'Rounds played',
                                data: topList.map(x => x.round_count),
                            }
                        ],
                    }}
                    className='summary-bar'
                    options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                        
                    }}
                    wrapper={true}
                />
            </CCardBody>
        </CCard>
    );
}

export default TopParticipants;
