import { useEffect, useRef } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { resolvePath, useNavigate } from 'react-router-dom';
import IMAGES from '../../images';
import { addCurrentUser, selectCurrentUser } from '../../store/slices/currentUserSlice/currentUserSlice';
import { addAllPost } from '../../store/slices/postsSlice/postsSlice';
import { addPost, selectUserData } from '../../store/slices/userDataSlice/userDataSlice';
import { flushSync } from 'react-dom';
import './CreatePost.css'
const CreatePost = () => {
    const currentUser = useSelector(selectCurrentUser)
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userData = useSelector(selectUserData)
    useEffect(()=>{
        if(!currentUser){
            navigate("/")
        }
    },[currentUser])
    useEffect(() => {
        dispatch(addCurrentUser(userData.find(user => user.id === currentUser.id)))
    }, [userData])
    function handelSubmit(e){
        e.preventDefault()
        let postId = new Date().getTime().toString()
        dispatch(addPost({
            postId,
            id: currentUser.id,
            img: formRef.current[0].value,
            name: currentUser.username,
            description: formRef.current[1].value,
        }))


        dispatch(addAllPost({
            postId,
            id: currentUser.id,
            img: formRef.current[0].value,
            name: currentUser.username,
            description: formRef.current[1].value,
            timeAgo:Math.round(Math.random() * 10 + 2)+" Minutes ago",
            avatar:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png",
            comments:[]
        }))
        // dispatch(addCurrentUser(userData.find(user => user.id === currentUser.id)))
        formRef.current.reset()

       setTimeout(()=>{
        navigate("/main")
       },500)
    }
    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='container'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />
            <br/>
            <div className='addPostsContainer'>
                <div>
                    <form  className='formPostsContainer' onSubmit={handelSubmit} ref={formRef} >
                        <div>
                            <input type="text" placeholder='img/url'/>
                        </div> 
                        <div>
                            <input type="text" placeholder='description'/>  
                        </div>
                        <div className='submitContainer'>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default CreatePost;