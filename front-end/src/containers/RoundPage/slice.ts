import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../utils/store';
import { Player } from './RoundPage';

// Define a type for the slice state
interface RoundState {
    players: Array<Player>;
    spotlighted?: number;
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
        setSpotlighted: (state, action: PayloadAction<number | undefined>) => {
            state.spotlighted = action.payload;
        },
    },
});

export const { setPlayers, setWinner, setSpotlighted } = roundSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPlayers = (state: RootState) => state.round.players;
export const selectWinner = (state: RootState) => state.round.winner;
export const selectSpotlighted = (state: RootState) => state.round.spotlighted;

export default roundSlice.reducer;
