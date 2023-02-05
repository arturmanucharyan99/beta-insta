import React, { memo } from 'react'

function Comment({...comment}) {
  return (
    <>
        <p className="description"><span>{comment.username} </span> {comment.body}</p>

    </>
  )
}

export default memo(Comment)