import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function(){
        const {data : dataPosts} = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=100&_page2")
        const {data : dataComments} = await axios.get("https://jsonplaceholder.typicode.com/comments")


         const data = dataPosts.map(post =>({
            id:post.id.toString(),
            img:post.url,
            name:post.title.slice(0,post.title.indexOf(" ")),
            likesCount:Math.round(Math.random() * 500 +500),
            postText:post.title.slice(" " + 1),
            avatar:"https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg",
            timeAgo:Math.round(Math.random() * 10 + 2)+" Minutes ago",
            comments:dataComments.filter(comment => comment.postId === post.id)
                .map(comment => ({
                    id:comment.id +"",
                    username:comment.name.slice(0,comment.name.indexOf(" ")),
                    body:comment.body
                }))
        }))
        return data
    }
)