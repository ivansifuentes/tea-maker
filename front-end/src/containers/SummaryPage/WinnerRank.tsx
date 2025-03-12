import { CCard, CCardBody, CCardTitle } from "@coreui/react";
import { CChart } from "@coreui/react-chartjs";

import { useAppSelector } from "../../utils/store";
import { selectRankList } from "./slice";

function WinnerRank() {
    const rankList = useAppSelector(selectRankList);

    return (
        <CCard>
            <CCardBody className='d-flex flex-column align-items-center'>
                <CCardTitle className="text-center uppercase-font summary-title">
                    Selected on Most Rounds
                </CCardTitle>

                <CChart
                    type="doughnut"
                    data={{
                        labels: rankList.map(x => x.name),
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
                                data: rankList.map(x => x.win_count),
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

export default WinnerRank;
