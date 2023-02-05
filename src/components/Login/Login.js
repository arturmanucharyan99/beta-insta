import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import IMAGES from '../../images'
import { addCurrentUser } from '../../store/slices/currentUserSlice/currentUserSlice'
import { fetchUsers } from '../../store/slices/userDataSlice/userDataAPI'
import { selectUserData } from '../../store/slices/userDataSlice/userDataSlice'
import { Facebook } from '../../svg/svg'
import LogReg from '../LogReg/LogReg'
import "./Login.css"

function Login() {
    const formRef = useRef(null)
    const userData = useSelector(selectUserData)
    const navigate = useNavigate()
    const dispatch = useDispatch()



    useEffect(()=>{

        if(!userData.length){
            dispatch(fetchUsers())
        }
        
    },[])




    function handleSubmit(e){
        e.preventDefault()
        if(userData.some(el => (el.email === formRef.current[0].value || el.username === formRef.current[0].value ) && el.password === formRef.current[1].value)){
            dispatch(addCurrentUser(userData.find(el => (el.email === formRef.current[0].value || el.username === formRef.current[0].value ) && el.password === formRef.current[1].value))) 

            navigate("/main")
        }
    }

  return (
    <>
        <div className='login'>
            <form className='loginForm' ref={formRef} onSubmit={handleSubmit}>
                <div className='loginFormImg'>
                    <img src={IMAGES.logo} className="brand-img" alt="" />
                </div>
                <input defaultValue="Bret" placeholder='Email' type="text"/><br/>
                <input defaultValue="gwenborough" placeholder='Password' type="password"/><br/>
                {/* <NavLink to="/reg">Register</NavLink><br/> */}
                <div className='buttonLogSubmit'>
                    <button className='buttonLog' type='submit'>Log In</button>
                </div>
                <div className='line'>
                    <div className='lineLeft content'></div>
                    <div className='centerLine '>OR</div>
                    <div className='lineRight content'></div>
                </div>
                <div>
                    <Facebook/>  <NavLink className="faceBoolLink"> Log in with Facebook</NavLink>
                </div>
            </form>

        </div>
        <LogReg page="/reg" text={"Don't have an account?"} namePage={"Sign up"}/>
    </>
  )
}

export default Login