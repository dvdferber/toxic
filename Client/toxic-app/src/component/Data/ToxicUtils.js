import {getById, createNewObj} from './DAL'
import { usersUrl, toxicUrl } from './Urls'


export async function getUserInfo(id){
    let user = await getById(usersUrl(), id)
    return user
}
export async function publishNewToxic(toxicObj){
    const respons = await createNewObj(toxicUrl(), toxicObj)
    return respons
}
