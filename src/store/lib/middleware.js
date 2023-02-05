

export const ignoreSpaceInSearchInput = store => next => action =>{
    if(action.type === "searchText/toggleText" && action.payload.at(-1) === " ")return
    return next(action)
}


export const ignoreCommentEmptyText = store => next => action =>{
    if(action.type === "posts/addComment" && !action.payload.body) return
    return next(action)
} 


export const ignoreSpaceComment = store => next => action =>{
    if(action.type === "posts/addComment" && action.payload.body.startsWith(" ")) return
    return next(action)
} 