import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./userDataAPI";



const userDataSlice = createSlice({
    name:"userData",
    initialState:[],
    reducers:{
        addUser:(state,{payload})=>{

            return [
                ...state,
                {
                    id:new Date().getTime()+"",
                    ...payload,
                    
                    bio:"",
                    followers:0,
                    following:0,
                    avatar:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png",
                    posts:[],
                    masseges:[],
                    defualtMassege:"",
                }
            ]
        },
        changeMassege:(state,{payload})=>{
            state.find(user => user.id === payload.id).defualtMassege = payload.info
            
        },
        addMassege:(state,{payload})=>{
            state.find(user => user.id === payload.id).masseges.push({
                id:new Date().getTime().toString(),
                info:payload.info,

            })
        },
        clearInput:(state,{payload})=>{
            state.find(user => user.id === payload.id).defualtMassege=""
            // state[ind].defualtMassege=""
        },
        addPost:(state,{payload})=>{
            const ind = state.findIndex(user => user.id === payload.id) 
            state[ind].posts.unshift({
                id:new Date().getTime().toString(),
                img:payload.img,
                name:payload.name,
                likesCount:0,
                postText:payload.description,
                timeAgo:Math.round(Math.random() * 10 + 2)+" Minutes ago",
                comments:[]
            })
        }
    },
    extraReducers:{
        [fetchUsers.fulfilled]:(state,{payload})=>{
            return[
                ...payload
            ]
        }
    }
    
})


export const selectUserData = state => state.userData

export const {addUser,changeMassege,addMassege,clearInput,addPost} = userDataSlice.actions

export const userDataReducer = userDataSlice.reducer
