import { useEffect, useState } from "react";
import { userImageUrl} from '../Data/Urls'
import {getUserInfo, addLike, removeLike} from '../Data/ToxicUtils'


export default function Toxic(props){
 
    const [toxic, setToxic] = useState({})
    const [user, setUser] = useState({})

    useEffect(()=>{
        let unmount = true
        const getToxic = async()=>{
            let data  = await props.toxic
            unmount && setToxic(data)
            let user = await getUserInfo(data.userId)
            unmount && setUser(user)
        }
        unmount && getToxic()
        return ()=>{
            unmount = false
        }
    },[props.toxic])

    const addOrRemoveLike = async()=>{
        if(toxic.usersHowLiked.includes(user._id)){
            await removeLike(user._id, toxic)
        }else{
            await addLike(user._id, toxic)
        }
    }
    return (
        <div className='toxic'>
            <div >
                <img className='user-image' src={userImageUrl()}/>
                <b>{user.name}</b>
            </div>
            <span>{user.userName}</span><br/>
            <span>date: {toxic.createdDate}</span><br/>
            <p>{toxic.post}</p>
            <span>{toxic.likes}</span>
            <input type='button' value="like" onClick={addOrRemoveLike}/>
            <span>{toxic.comments}</span>
            <input type='button' value="comment"/>

        </div>
    )
}