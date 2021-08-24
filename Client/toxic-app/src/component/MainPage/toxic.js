import { useEffect, useState } from "react";
import {getUserInfo} from '../Data/ToxicUtils'


export default function Toxic(props){
 
    const [toxic, setToxic] = useState({})
    const [user, setUser] = useState({})

    useEffect(()=>{
        let unmount = true
        const getToxic = async()=>{
            let data  = await props.toxic
            unmount && setToxic(data)
            let user = getUserInfo(data.userId)
            unmount && setUser(user)
        }
        unmount && getToxic()
        return ()=>{
            unmount = false
        }
    },[props.toxic])
    
    return (
        <div className='toxic'>
            <div className='user-image'>Image</div>
            <span>{user.userName} date: {toxic.createdDate}</span><br/>
            <p>{toxic.post}</p>

        </div>
    )
}