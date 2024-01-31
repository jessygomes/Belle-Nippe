import { createSlice } from "@reduxjs/toolkit";

import data from '../data';

export const initialState = {
    listItems: data,
};

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        setItemsFromApi: (state, action) => {
            return {
                ...state,
                list: data,
            };
        }
    }
})

export const { setItemsFromApi } = shopSlice.actions;

export default shopSlice.reducer;