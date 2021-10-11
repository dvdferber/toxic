import {getAll, updateObj, getById } from './DAL'
import {usersUrl} from './Urls'

const usersAddressUrl = usersUrl()

export async function getAllPeople(){
    const respons = await getAll(usersAddressUrl)
    return respons
}
export async function addUserToFollow(userId, userIdToAdd){
    const userObj = await getById(usersAddressUrl, userId)
    let newFollowersArray = userObj.follow
    newFollowersArray.push(userIdToAdd)
    userObj.follow = newFollowersArray

    const respons = await updateObj(usersAddressUrl, userObj._id, userObj)
    return respons
}
export async function removeUserFromFollow(userId, userIdToRemove){
    const userObj = await getById(usersAddressUrl, userId)
    let tempArray = userObj.follow
    let newFollowersArray = tempArray.filter(userId => userId !== userIdToRemove)
    userObj.follow = newFollowersArray
    const respons = await updateObj(usersAddressUrl, userObj._id, userObj)
    return respons
}
export async function getUsersByArrayId(followArray = [{}], userLogId){
    let resp = await getAll(usersAddressUrl)
    
    let followUsers = resp.filter(user => {
        let userId = user._id
        if(followArray.includes(userId) && userId !== userLogId){
            return user
        }
    })
    return followUsers
}