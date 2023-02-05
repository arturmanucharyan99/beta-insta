import { createSlice } from "@reduxjs/toolkit";



const currentUserSlice = createSlice({
    name:"currentUser",
    initialState:null,
    reducers:{
        addCurrentUser:(state,{payload})=>{
            return {
                ...payload
            }
        },
       
        logOut(){
            return null
        }
    }
})


export const selectCurrentUser = state => state.currentUser

export const {addCurrentUser,logOut} = currentUserSlice.actions

export const currentUserReducer = currentUserSlice.reducer