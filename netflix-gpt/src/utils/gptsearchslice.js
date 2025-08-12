import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: 'gptSearch',
    initialState: {
        showGptSearch: false
    },
    reducers: {
        toggle: (state) => {
            state.showGptSearch = !state.showGptSearch
        }
    }
})

export const { toggle } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;