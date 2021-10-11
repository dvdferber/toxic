import {getById, createNewObj, updateObj, getAll} from './DAL'
import { usersUrl, commentsUrl, toxicUrl } from './Urls'

const usersAddress = usersUrl()
const CommentsAddress = commentsUrl()
const toxicAddress = toxicUrl()

export async function getUserInfo(id){
    let user = await getById(usersAddress, id)
    return user
}
export async function getAllCommentsByToxicId(id){
    const reqUrl = `${CommentsAddress}/commentsfortoxic/${id}`
    const commentArray = await getAll(reqUrl)
    return commentArray
}
export async function publishNewComment(commentObj, toxic){
    commentObj.toxicId = toxic._id
    const responsComment = await createNewObj(CommentsAddress, commentObj)
    const responsToxic = await addCommentCount(toxic)
    if(responsComment && responsToxic){
        return true
    }else{
        return false
    } 
}
export async function addCommentCount(toxic){
    let commentCount = toxic.comments + 1
    toxic.comments = commentCount
    // you need to know if is a comment or toxic
    if(Object.keys(toxic).includes("toxicId")){
        const respons = await updateObj(CommentsAddress, toxic._id, toxic)
        return respons
    }else{
        const respons = await updateObj(toxicAddress, toxic._id, toxic)
        return respons
    }
    
}
export async function addLike(userId, comment){
    let likeCount = comment.likes + 1
    comment.likes = likeCount
    let newLikedUserArray = comment.usersHowLiked
    newLikedUserArray.push(userId)
    comment.usersHowLiked = newLikedUserArray
    const respons = await updateObj(CommentsAddress, comment._id,  comment)
    return respons
}
export async function removeLike(userId, comment){
    let likeCount = comment.likes - 1
    comment.likes = likeCount
    let removedFromLikeUser = comment.usersHowLiked.filter(id => id !== userId)
    comment.usersHowLiked = removedFromLikeUser
    const respons = await updateObj(CommentsAddress, comment._id,  comment)
    return respons
}
