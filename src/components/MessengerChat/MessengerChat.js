import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/slices/currentUserSlice/currentUserSlice'
import MassengerChatContinue from '../MassengerChatContinue/MassengerChatContinue'
import './MessengerChat.css'

function MessengerChat() {
  const currentUser = useSelector(selectCurrentUser)

  return (
	 <div className='MessengerChat'>
      {
        currentUser?.masseges.map(massege =>{
          return <MassengerChatContinue key={massege.id} {...massege}/>
        })
      }
	 </div>
  )
}

export default MessengerChat
