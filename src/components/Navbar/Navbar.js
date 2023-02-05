import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../images'
import { selectSearch, toggleText } from '../../store/slices/searchSlice/searchSlice'


function Navbar() {
  const dispatch = useDispatch()
  const searchText = useSelector(selectSearch)
  return (
    <nav className="navbar">
        <div className="nav-wrapper">
            <NavLink to='/main'><img src={IMAGES.logo} className="brand-img" alt="" /></NavLink>
            <input type="text" value={searchText} onChange={(e)=>dispatch(toggleText(e.target.value))} className="search-box" placeholder="search"/>
            <div className="nav-items">
                <NavLink to='/main/'><img src={IMAGES.home} className="icon" alt=""/> </NavLink>
                <NavLink to='/main/messenger'><img src={IMAGES.messenger} className="icon" alt=""/> </NavLink>
                <NavLink to='/main/create'><img src={IMAGES.add} className="icon" alt=""/></NavLink>
                <NavLink to='/main/explore'><img src={IMAGES.explore} className="icon" alt=""/></NavLink>
                <NavLink to='/main/notification'><img src={IMAGES.like} className="icon" alt=""/></NavLink>
                <NavLink to='/main/profile'><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png"} className="icon user-profile" /></NavLink>
                {/* <NavLink to={"/"}>Registration</NavLink> */}
            </div>
        </div>
    </nav>
  )
}

export default Navbar