import {getById} from './DAL'
import { usersUrl } from './Urls'
const url = usersUrl()


export async function getUserInfo(id){
    let user = await getById(url, id)
    return user
}