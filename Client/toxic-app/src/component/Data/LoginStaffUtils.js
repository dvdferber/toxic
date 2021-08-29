import {createNewObj, getAll} from './DAL'
import { usersUrl } from './Urls'

const url = usersUrl()

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