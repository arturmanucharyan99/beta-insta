import React, { memo } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function LogReg({page,text,namePage}) {
    const navigate = useNavigate()

  return (
    <div className='logOrReg'>
        <p>{text}
             <NavLink to={navigate(page)}>{namePage}</NavLink>
        </p>
    </div>
  )
}

export default memo(LogReg)