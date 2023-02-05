import React, { memo } from 'react'

function MassengerChatContinue({...massege}) {

    function check(){
        switch (massege.info) {
            case "Hello":
                return "Hi"
            case "How are you?":
                return "I'm fine and you?"
            case "good thanks":
                return "What are you doing?"
            default:
                return "chaskaca"
        }
    }

  return (
  <>
     <div className='userMassege'>
        <h2 >{massege.info}</h2>
    </div>
    <div className='botMassege'>
        <h2 className='botMassege'>{check()}</h2>
    </div>
  </>
  )
}

export default memo(MassengerChatContinue)