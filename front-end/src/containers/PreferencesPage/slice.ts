import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../utils/store';
import { Player } from '../RoundPage/RoundPage';

// Define a type for the slice state
interface PreferencesState {
    userPlayers: Array<Player>;
}

// Define the initial state using that type
const initialState: PreferencesState = {
    userPlayers: [],
};

export const preferencesSlice = createSlice({
    name: 'preferences',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUserPlayers: (state, action: PayloadAction<Array<Player>>) => {
            state.userPlayers = action.payload;
        },
    },
});

export const { setUserPlayers } = preferencesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserPlayers = (state: RootState) => state.preferences.userPlayers;

export default preferencesSlice.reducer;
