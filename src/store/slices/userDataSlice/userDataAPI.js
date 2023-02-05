import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const fetchUsers = createAsyncThunk(
    "userData/fetchUsers",
    async function(){
        const {data:usersData} = await axios.get("https://jsonplaceholder.typicode.com/users")
        const {data :postsData} = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=500")


        const data = usersData.map(user =>({
            id:user.id.toString(),
            username:user.username,//?
            name:user.name,
            email:user.email,
            password:user.address.city.toLowerCase(),
            bio:user.company.catchPhrase +" " +user.company.catchPhrase,
            followers:Math.round(Math.random() * 500 +1000),
            following:Math.round(Math.random() * 500 +1000),
            masseges:[],
            defualtMassege:"",
            avatar:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png",  
            posts:[...postsData.filter(post => post.albumId === user.id)
                .map(post =>({
                id:post.id.toString(),
                img:post.url,
                name:user.username,
                likesCount:Math.round(Math.random() * 500 +500),
                postText:post.title.slice(" " + 1),
                timeAgo:Math.round(Math.random() * 10 + 2)+" Minutes ago",
                comments:[]
            }))]
        }))


        return data
    }
)