import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsAPI";



const postsSlice = createSlice({
    name:"posts",
    initialState:[],
    reducers:{
        addComment(state,{payload}){
          const index = state.findIndex(post => post.id===payload.id)
          state[index].comments.push({
            id:new Date().getTime() +"",
            username:payload.username,
            body:payload.body
          })
        },
        addAllPost(state,{payload}){
          state.unshift(payload)        
        }
    },
    extraReducers:{
        [fetchPosts.fulfilled]:(state,{payload})=>{
            return [...payload]
        }
    }
})

export const selectPosts =  state => state.posts


export const {addComment,addAllPost} = postsSlice.actions

export const postsReducer = postsSlice.reducer