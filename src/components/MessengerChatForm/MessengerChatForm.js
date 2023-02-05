import './MessengerChatForm.css'
import IMAGES from '../../images'
import { useDispatch, useSelector } from 'react-redux'
import { addCurrentUser, selectCurrentUser } from '../../store/slices/currentUserSlice/currentUserSlice'
import { addMassege, changeMassege, clearInput, selectUserData } from '../../store/slices/userDataSlice/userDataSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function MessengerChatForm() {
	const currentUser = useSelector(selectCurrentUser)
	const userData = useSelector(selectUserData)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	useEffect(()=>{
		if(!currentUser){
			navigate("/")
		}
	},[])

	useEffect(()=>{
		dispatch(addCurrentUser(userData.find(user => user.id === currentUser?.id)))
	},[userData])


	function handleSubmit(e){
		e.preventDefault()
		dispatch(addMassege({id:currentUser?.id,info:currentUser.defualtMassege}))
		dispatch(clearInput({id:currentUser.id}))
	}
	
  return (
	<form  onSubmit={handleSubmit}>
		<div className='Chat-input'>
			<input type='text' value={currentUser?.defualtMassege} onChange={(e)=>dispatch(changeMassege({id:currentUser?.id,info:e.target.value}))} placeholder='Message...'/>
			<img src={IMAGES.like} alt=''/>
		</div>
	</form>
  )
}

export default MessengerChatForm
