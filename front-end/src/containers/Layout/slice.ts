import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../utils/store';

// Define a type for the slice state
interface LayoutState {
    darkMode: boolean;
}

// Define the initial state using that type
const initialState: LayoutState = {
    darkMode: false,
};

export const layoutSlice = createSlice({
    name: 'layout',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            state.darkMode = !!action.payload;
        },
    },
});

export const { setDarkMode } = layoutSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectDarkMode = (state: RootState) => state.layout.darkMode;

export default layoutSlice.reducer;
