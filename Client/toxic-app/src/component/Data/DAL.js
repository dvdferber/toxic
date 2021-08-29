import axios from 'axios'

export async function getAll(url){
    const respons = await axios.get(url)
    return respons.data
}
export async function getById(url, id){
    const respons = await axios.get(`${url}/${id}`)
    return respons.data
}
export async function updateObj(url, id, obj){
    const respons = await axios.put(`${url}/${id}`, obj)
    return respons.data
}
export async function createNewObj(url, obj){
    const respons = await axios.post(url, obj)
    return respons.data
}
export async function deleteObj(url, id){
    const respons = await axios.delete(`${url}/${id}`)
    return respons.data
}