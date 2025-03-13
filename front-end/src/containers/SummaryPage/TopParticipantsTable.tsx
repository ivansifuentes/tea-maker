import { CCard, CCardBody, CCardTitle, CCol, CRow } from '@coreui/react';
import { useAppSelector } from '../../utils/store';
import { selectParticipantList } from './slice';

function TopParticipantsTable() {
    const topList = useAppSelector(selectParticipantList);

    return (
        <CCard className="summary-chart-card">
            <CCardBody className='d-flex flex-column justify-content-center'>
                <CCardTitle className="text-center uppercase-font summary-title">
                    Top Participants
                </CCardTitle>
                <CRow>
                    <CCol>
                        <div className='d-flex flex-row summary-list-row summary-header'>
                            <div className='summary-list-column'>
                                Name
                            </div>
                            <div className='summary-list-column'>
                                Rounds Played
                            </div>
                        </div>
                        {topList.map((r, i) => (
                            <div key={`${r.name}-${i}`} className='d-flex flex-row summary-list-row'>
                                <div className='summary-list-column'>
                                    {r.name}
                                </div>
                                <div className='summary-list-column'>
                                    {r.round_count}
                                </div>
                            </div>
                        ))}
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    )
}

export default TopParticipantsTable;
