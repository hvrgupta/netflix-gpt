import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: 'gptSearch',
    initialState: {
        showGptSearch: false,
        movies: null
    },
    reducers: {
        toggle: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addMovies: (state, action) => {
            state.movies = action.payload
        }
    }
})

export const { toggle, addMovies } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;