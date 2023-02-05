import React, {  memo, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import IMAGES from '../../images'
import Comment from '../Comment/Comment'
import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../store/slices/postsSlice/postsSlice';
import { selectCurrentUser } from '../../store/slices/currentUserSlice/currentUserSlice';
import { commentsOpenComment } from '../../hoc/commentsOpenClose';
import PostForm from '../PostForm/PostForm';



function Post({id, img, name,comments,avatar, likesCount,isShowComment, postText, timeAgo,openComments,setOpenComments}) {
    const currentUser = useSelector(selectCurrentUser)
    const navigate = useNavigate()


    useEffect(()=>{
        if(!currentUser){
            navigate("/")
        }
    },[])


    // function handleSubmit(e){
    //     e.preventDefault()
    //     const body = formRef.current[0].value
    //     dispatch(addComment({id,body,username:currentUser?.username}))
    //     formRef.current.reset()
    // }

    // function open(comments){
    //     if(comments.length>0)setOpenComments(true)

    //     // if(comment.leng)
    // }
  return (
    <div className="post">
        <div className="info">
            <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`} className="user">
                <div className="profile-pic">
                    {console.log(avatar)}
                    <img src={avatar} alt="" /></div>
                <p className="username">{name}</p>
            </NavLink>
            <img src={IMAGES.option} className="options" alt=""/>
        </div>
        {/* {console.log(img)} */}
        <img src={img} className="post-image" alt=""/>
        <div className="post-content">
            <div className="reaction-wrapper">
                <img src={IMAGES.like} className="icon" alt=""/>
                <img src={IMAGES.comment} className="icon" alt=""/>
                <img src={IMAGES.send} className="icon" alt=""/>
               <div className='saveIcon'>
                    <img src={IMAGES.save} className="save icon" alt=""/>
               </div>
            </div>
            <p className="likes">{likesCount}</p>
            <p className="description"><span>{name} </span> {postText}</p>
            <p className="post-time">{timeAgo}</p>
            { openComments ?  
                comments.map(comment => {
                    return  <Comment key={comment.id} {...comment}/>
                }) :  <p onClick={()=>isShowComment(true)} style={{
                    fontSize:1.5+"em",
                    cursor:"pointer",
                    fontWeight: "bold",
                    
                }}>View all Comments</p>
            }
        </div>
        {/* <form ref={formRef} onSubmit={handleSubmit}>
            <div className="comment-wrapper">
                <img src={IMAGES.smile} className="icon" alt=""/>
                <input onFocus={(e)=> setOpenComments(true)} onBlur={(e)=> setOpenComments(false)} type="text" className="comment-box" placeholder="Add a comment"/>
                <button className="comment-btn">post</button>
            </div>
        </form> */}
        <PostForm id={id} isShowComment={isShowComment}/>
       
    </div>
  )
}

export default memo(commentsOpenComment(Post))