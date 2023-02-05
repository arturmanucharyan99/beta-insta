import React from 'react'
import { Formik } from "formik";
import * as yup from "yup" 
import "./Registration.css"
import IMAGES from '../../images';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/slices/userDataSlice/userDataSlice';
import { useNavigate } from 'react-router-dom';
import LogReg from '../LogReg/LogReg';

function Registration() {
  const validationSchema = yup.object().shape({
    name:yup.string().typeError("petq e lini tox").required("partadir e"),
    username:yup.string().typeError("petq e lini tox").required("partadir e"),
    email:yup.string().typeError("petq e lini tox").email("partadir e"),
    password:yup.string().typeError("petq e lini tox").required("partadir e"),
    confirmPassword:yup.string().typeError("petq e lini tox").oneOf([yup.ref("password")], "sxal"),
})

const dispatch = useDispatch()
const navigate = useNavigate()
return (
    <>
    <div className='reg'>
        <Formik 
        initialValues={{
            name:"",
            username:"",
            email:"",
            password:"",
            confirmPassword:"",

        }}
        onSubmit={(values)=> {
        dispatch(addUser(values))

        navigate("/")
            
            
        }}
        validateOnBlur
        validationSchema={validationSchema}
        >
            {({values,errors,touched,handleChange,handleBlur,isValid,handleSubmit,dirty}) => (
                <div className='forms'>
                    <form onSubmit={handleSubmit}>
                        <img src={IMAGES.logo} className="brand-img regImg" alt="" />
                        <h2 className='regText'>Sign up to see photos and videos from your friends.</h2>
                        <div className='fbDiv'>
                            <button >Log In with Facebook</button>
                        </div>
                        
                        <div className='line'>
                            <div className='lineLeft content'></div>
                            <div className='centerLine '>OR</div>
                            <div className='lineRight content'></div>
                        </div>
                        
                        <input type={"text"} 
                        name="name"
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={values.name} 
                        placeholder="Name"/><br/><br/>
                        {touched.name && errors.name && <p  style={{
                            color:"red"
                        }}>{errors.name}</p>}


                        <input type={"text"} 
                        name="username"
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={values.username} 
                        placeholder="UserName"/><br/><br/>
                        {touched.username && errors.username && <p  style={{
                            color:"red"
                        }}>{errors.username}</p>}

                        <input type={"text"} 
                        name="email"
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={values.email} 
                        placeholder="Email"/><br/><br/>
                        {touched.email && errors.email && <p  style={{
                            color:"red"
                        }}>{errors.email}</p>}

                        <input type={"text"} 
                        name="password"
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={values.password} 
                        placeholder="Password"/><br/><br/>
                        {touched.password && errors.password && <p  style={{
                            color:"red"
                        }}>{errors.password}</p>}

                        <input type={"text"} 
                        name="confirmPassword"
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        value={values.confirmPassword} 
                        placeholder="confirmPassword"/><br/><br/>
                        {touched.confirmPassword && errors.confirmPassword && <p style={{
                            color:"red"
                        }}>{errors.confirmPassword}</p>}
                        <div className='textBeforeSubmit'>
                            <p>People who use our service may have uploaded your contact information to Instagram.</p>
                        </div>
                        <div className='buttonRegSubmit'>
                            <button className='button' type='submit' disabled={!isValid && !dirty}>Submit</button>
                        </div>
                        
                </form>
            </div>
            )}
            
        </Formik>
    </div>
    <LogReg page="/" text="Have an account? "namePage="Log In" />
    </>
    )
}

export default Registration