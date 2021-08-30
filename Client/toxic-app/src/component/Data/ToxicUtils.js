import {getById, createNewObj} from './DAL'
import { usersUrl, toxicUrl } from './Urls'

const usersAddress = usersUrl()
const toxicAddress = toxicUrl()

export async function getUserInfo(id){
    let user = await getById(usersAddress, id)
    console.log(user);
    return user
}
export async function publishNewToxic(toxicObj){
    const respons = await createNewObj(toxicAddress, toxicObj)
    return respons
}
