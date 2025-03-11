import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../utils/store';
import { Player } from './RoundPage';

// Define a type for the slice state
interface RoundState {
    players: Array<Player>;
    winner?: Player;
}

// Define the initial state using that type
const initialState: RoundState = {
    players: [],
};

export const roundSlice = createSlice({
    name: 'round',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setPlayers: (state, action: PayloadAction<Array<Player>>) => {
            state.players = action.payload;
        },
        setWinner: (state, action: PayloadAction<Player | undefined>) => {
            state.winner = action.payload;
        },
    },
});

export const { setPlayers, setWinner } = roundSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPlayers = (state: RootState) => state.round.players;
export const selectWinner = (state: RootState) => state.round.winner;

export default roundSlice.reducer;
