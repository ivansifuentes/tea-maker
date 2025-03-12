import { CCol, CRow } from '@coreui/react';
import { selectRankList } from './slice';
import { useAppSelector } from '../../utils/store';

function WinnerRankTable() {
    const rankList = useAppSelector(selectRankList);

    return (
        <>
            <CRow>
                <CCol>
                    <h4>Most Tea Maker Selections</h4>
                </CCol>
            </CRow>
            <CRow>
                <CCol>
                    <div className='d-flex flex-row summary-list-row summary-header'>
                        <div className='summary-list-column'>
                            Name
                        </div>
                        <div className='summary-list-column'>
                            Tea Maker Times
                        </div>
                        <div className='summary-list-column'>                        
                            Ranking
                        </div>
                    </div>
                    {rankList.map((r, i) => (
                        <div key={`${r.winner_id}-${i}`} className='d-flex flex-row summary-list-row'>
                            <div className='summary-list-column'>
                                {r.name}
                            </div>
                            <div className='summary-list-column'>
                                {r.win_count}
                            </div>
                            <div className='summary-list-column'>                        
                                {r.dense_rank_winner}
                            </div>
                        </div>
                    ))}
                </CCol>
            </CRow>
        </>
    )
}

export default WinnerRankTable;
