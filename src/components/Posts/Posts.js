import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import IMAGES from '../../images'
import { selectCurrentUser } from '../../store/slices/currentUserSlice/currentUserSlice'
import { fetchPosts } from '../../store/slices/postsSlice/postsAPI'
import { selectPosts } from '../../store/slices/postsSlice/postsSlice'
import { selectSearch } from '../../store/slices/searchSlice/searchSlice'
import Post from '../Post/Post'

function Posts() {
    // const posts = [
    //     {
    //         id: '1',
    //         img: IMAGES.cover1,
    //         name: 'user1',
    //         likesCount: '1,200',
    //         postText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?',
    //         timeAgo: '2 Minutes Ago'

    //     },
    //     {
    //         id: '2',
    //         img: IMAGES.cover2,
    //         name: 'user2',
    //         likesCount: '1,200',
    //         postText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?',
    //         timeAgo: '2 Minutes Ago'
    //     },
    //     {
    //         id: '3',
    //         img: IMAGES.cover3,
    //         name: 'user3',
    //         likesCount: '1,200',
    //         postText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?',
    //         timeAgo: '2 Minutes Ago'
    //     },
    //     {
    //         id: '4',
    //         img: IMAGES.cover4,
    //         name: 'user4',
    //         likesCount: '1,200',
    //         postText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?',
    //         timeAgo: '2 Minutes Ago'
    //     }
    // ]
    const dispatch = useDispatch()
    const posts = useSelector(selectPosts)
    const searchText = useSelector(selectSearch)
    const currentUser = useSelector(selectCurrentUser)
    const navigate = useNavigate()
    const filteredPosts = useMemo(()=>{
        return posts.filter(post => post.name.includes(searchText))
    },[posts,searchText])
    // const [addPosts, setAddPosts] = useState([])

    useEffect(()=>{
        if(!posts.length){
            dispatch(fetchPosts())
        }

        // document.addEventListener("scroll",scroolHandler)
        // return ()=>{
        //     document.removeEventListener("scroll",scroolHandler)
        // }

    },[])
    useEffect(()=>{

        if(!currentUser){
            navigate("/")
        }
    },[currentUser])



    // function scroolHandler(e){
    //     console.log("scroll");
    // }



  return (
    <>
        {   
            filteredPosts.map((el) => {
                // console.log(el.id);
                return <Post key={el.id} id={el.id} comments={el.comments} avatar={el.avatar} img={el.img} name={el.name} likesCount={el.likesCount} postText={el.postText} timeAgo={el.timeAgo} />
        })
        }
    </>
  )
}

export default Posts