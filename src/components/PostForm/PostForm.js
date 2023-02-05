import React, { memo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { commentsOpenComment } from '../../hoc/commentsOpenClose'
import IMAGES from '../../images'
import { selectCurrentUser } from '../../store/slices/currentUserSlice/currentUserSlice'
import { addComment } from '../../store/slices/postsSlice/postsSlice'




function PostForm({setOpenComments,id,isShowComment}) {
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)

    function handleSubmit(e){
        e.preventDefault()
        const body = formRef.current[0].value
        dispatch(addComment({id,body,username:currentUser?.username}))
        formRef.current.reset()
    }
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
        <div className="comment-wrapper">
            <img src={IMAGES.smile} className="icon" alt=""/>
            <input onFocus={(e)=> isShowComment(true)} onBlur={(e)=> isShowComment(false)} type="text" className="comment-box" placeholder="Add a comment"/>
            <button className="comment-btn">post</button>
        </div>
    </form>
  )
}
export default memo(PostForm)