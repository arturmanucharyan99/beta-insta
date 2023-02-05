import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import IMAGES from '../images'
import "./Error.css"


function Error() {
    const navigate=useNavigate()
  return (
    <div>
        <div className='errorInstagram'>
            <div className='errorLogo'>
                <NavLink to='/main'><img src={IMAGES.logo} className="brand-img" alt="" /></NavLink>
                
            </div>
            <div className='errorSignUpReg'>
               <NavLink to={navigate("/reg")}><button className='signUp'>Sign up</button></NavLink> 
                <NavLink to={navigate("/")}><button className='logIn'>Log In</button></NavLink>
            </div>
            
        </div>
        
            <div className='textError'>
                <h2 className='textErrorH2'>Sorry, this page isn't available.</h2>
            </div>
            <div className='errorGoBack'>The link you followed may be broken, or the page may have been removed.<NavLink className="errorBackHome" to="/"> Go back to Instagram.</NavLink></div>
        
    </div>
  )
}

export default Error