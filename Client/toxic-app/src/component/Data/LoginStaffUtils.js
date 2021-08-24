import {createNewObj} from './DAL'
import { usersUrl } from './Urls'

const url = usersUrl()

export async function createNewUser(newUser){
    let respons = await createNewObj(url, newUser)
    if(respons){
        return true
    }
    return false
}