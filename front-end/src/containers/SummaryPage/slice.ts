import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../utils/store';

type ParticipantRow = {
    name: string;
    round_count: number;
}

type WinnerRankRow = {
    winner_id: string;
    name: string;
    win_count: number;
    rank_winner: number
}

// Define a type for the slice state
interface SummaryState {
    participantList: Array<ParticipantRow>;
    rankList: Array<WinnerRankRow>;
}

// Define the initial state using that type
const initialState: SummaryState = {
    participantList: [],
    rankList: [],
};

export const summarySlice = createSlice({
    name: 'summary',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setParticipantList: (state, action: PayloadAction<Array<ParticipantRow>>) => {
            state.participantList = action.payload;
        },
        setRankList: (state, action: PayloadAction<Array<WinnerRankRow>>) => {
            state.rankList = action.payload;
        },
    },
});

export const { setParticipantList, setRankList } = summarySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectParticipantList = (state: RootState) => state.summary.participantList;
export const selectRankList = (state: RootState) => state.summary.rankList;

export default summarySlice.reducer;
