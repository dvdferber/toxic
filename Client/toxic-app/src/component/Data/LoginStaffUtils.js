import {createNewObj, getAll, getById} from './DAL'
import { usersUrl, userPageUrl } from './Urls'

const url = usersUrl()
const userpageUrl = userPageUrl()

export async function isUserAndPasswordValid(userName, password){
    const reqUrl = `${url}/userName=${userName}/password=${password}`
    const respons = await getAll(reqUrl)
    return respons
}

export async function createNewUser(newUser){
    let respons = await createNewObj(url, newUser)
    if(respons){
        return true
    }
    return false
}
export async function createUserPage(id){
    let respons =  await getById(userpageUrl, id)
    return respons
}