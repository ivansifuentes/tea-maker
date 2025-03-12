import { CCol, CRow } from '@coreui/react';
import { useAppSelector } from '../../utils/store';
import { selectParticipantList } from './slice';

function TopParticipantsTable() {
    const topList = useAppSelector(selectParticipantList);

    return (
        <>
            <CRow>
                <CCol>
                    <h4>Top Participants</h4>
                </CCol>
            </CRow>
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
        </>
    )
}

export default TopParticipantsTable;
