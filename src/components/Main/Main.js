import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import IMAGES from '../../images'
import { logOut, selectCurrentUser } from '../../store/slices/currentUserSlice/currentUserSlice'
import Posts from '../Posts/Posts'
import Stories from '../Stories/Stories'
import Suggestions from '../Suggestions/Suggestions'

function Main() {

    const currentUser = useSelector(selectCurrentUser)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!currentUser){
            navigate("/")
        }
    },[])
  return (
    <section className="main">
        <div className="wrapper">
            <div className="left-col">
                <Stories/>
                <Posts />
            </div>
            <div className="right-col">
                <NavLink to='/main/profile' className="profile-card">
                    <div className="profile-pic">
                        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png"} alt=""/>
                    </div>
                    <div>
                        <p className="username">{currentUser?.username}</p>
                        <p className="sub-text">{currentUser?.name}</p>
                    </div>
                    <button onClick={()=>dispatch(logOut())} className="action-btn">Log Out</button>
                </NavLink>
                <p className="suggestion-text">Suggestions for you</p>
                <Suggestions />
            </div>
        </div>
    </section>
  )
}

export default Main