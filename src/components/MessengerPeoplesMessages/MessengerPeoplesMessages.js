import './MessengerPeoplesMessages.css'
import IMAGES from '../../images'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectCurrentUser } from '../../store/slices/currentUserSlice/currentUserSlice'

function MessengerPeoplesMessages() {

	const currentUser = useSelector(selectCurrentUser)
	const navigate = useNavigate()

	useEffect(()=>{
		if(!currentUser){
			navigate("/")
		}
	},[currentUser])
  return (
	 <div className='Messenger-left-col-peoples-messages'>
		<div className='Messenger-left-col-people-message'>
			<div className='Messsage-img'>
				<img src="https://camo.githubusercontent.com/0d517f168dc77ac4a085c2463c52c551812d55dad6f089c31749c97116db405d/687474703a2f2f692e696d6775722e636f6d2f504d75365834442e706e67"alt=''/>
			</div>
			<div className='Message-info'>
				<p>Bot</p>
			</div>
	 	</div>
		{/* {
			message.map(el => <MessengerPeoplesMessage key={el.id} img={el.img} name={el.name} active={el.active}/>)
		} */}
	 </div>
  )
}

export default MessengerPeoplesMessages
