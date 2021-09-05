import {getById, createNewObj, updateObj} from './DAL'
import { usersUrl, toxicUrl } from './Urls'

const usersAddress = usersUrl()
const toxicAddress = toxicUrl()

export async function getUserInfo(id){
    let user = await getById(usersAddress, id)
    return user
}
export async function publishNewToxic(toxicObj){
    const respons = await createNewObj(toxicAddress, toxicObj)
    return respons
}
export async function addLike(userId, toxic){
    let likeCount = toxic.likes + 1
    toxic.likes = likeCount
    let newLikedUserArray = toxic.usersHowLiked
    newLikedUserArray.push(userId)
    toxic.usersHowLiked = newLikedUserArray
    const respons = await updateObj(toxicAddress, toxic._id,  toxic)
    return respons
}
export async function removeLike(userId, toxic){
    let likeCount = toxic.likes - 1
    toxic.likes = likeCount
    let removedFromLikeUser = toxic.usersHowLiked.filter(id => id !== userId)
    toxic.usersHowLiked = removedFromLikeUser
    const respons = await updateObj(toxicAddress, toxic._id,  toxic)
    return respons
}
