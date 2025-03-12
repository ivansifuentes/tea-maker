import { CCard, CCardBody, CCardTitle } from "@coreui/react";
import { CChart } from "@coreui/react-chartjs";
import { selectParticipantList } from "./slice";
import { useAppSelector } from "../../utils/store";

function TopParticipants() {
    const topList = useAppSelector(selectParticipantList);

    return (
        <CCard>
            <CCardBody className='d-flex flex-column align-items-center'>
                <CCardTitle className="text-center uppercase-font summary-title">
                    Most Rounds Played
                </CCardTitle>

                <CChart
                    type="doughnut"
                    data={{
                        labels: topList.map(x => x.name),
                        datasets: [
                            {
                                backgroundColor: [
                                    '#4FC0E8',
                                    '#A0D468',
                                    '#CCD0D9',
                                    '#FFCE55',
                                    '#656D78',
                                    '#434A54',
                                ],
                                data: topList.map(x => x.round_count),
                            },
                        ],
                    }}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false,
                            }
                        }
                    }}
                    wrapper={true}
                />
            </CCardBody>
        </CCard>
    );
}

export default TopParticipants;
