import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'light'
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
            document.querySelector('html').classList.toggle('dark');
        }
    }
});


export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;