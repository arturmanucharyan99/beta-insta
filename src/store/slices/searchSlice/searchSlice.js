import { createSlice } from "@reduxjs/toolkit";

const searchTextSlice = createSlice({
    name:"searchText",
    initialState:"",
    reducers:{
        toggleText:(state,{payload})=>{
            return payload
        }
    }
})


export const selectSearch = state => state.searchText

export const {toggleText} = searchTextSlice.actions

export const searchTextReducer = searchTextSlice.reducer