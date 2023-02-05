import React, { useCallback, useState } from "react"
export function commentsOpenComment(Component){
    return (props)=>{
        const [openComments,setOpenComments] = useState(false)
        const isShowComment = useCallback((bool)=>{
            if(bool === true) return setOpenComments(true)
            return setOpenComments(false)
        },[])
        return <Component {...{isShowComment,openComments,setOpenComments}} {...props}/>
    }
}


