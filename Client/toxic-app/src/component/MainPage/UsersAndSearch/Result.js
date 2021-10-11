import {useEffect, useState } from "react";
import { userImageUrl } from '../../Data/Urls'
import {addUserToFollow, removeUserFromFollow} from '../../Data/SearchUtils'

export default function Result(props){

    const [user, setUser] = useState({})

    useEffect(()=>{
        setUser(props.user)
    },[props.user])

    const addUserToFollowArray = async() =>{
        const userId = localStorage.getItem('id')
        const respons = await addUserToFollow(userId, user._id)
    }
    const removeUserFromFollowArray = async() =>{
        const userId = localStorage.getItem('id')
        const respons = await removeUserFromFollow(userId, user._id)
    }
    return (
        <div className='result'>
            <div className='anther-user-info'>
                <img className='user-image' src={userImageUrl()}/>
                <h5>@{user.userName}</h5>
                <p>{user.name}</p>
                <p>desctption {user.desctption}</p>
                <p>following {user.following}</p>
                <p>followers {user.followers}</p>
                <p>likes {user.likes}</p>
            </div>
            <input type='button' value='follow' onClick={addUserToFollowArray}/>
            <input type='button' value='unfollow' onClick={removeUserFromFollowArray}/>
        </div>
    )
}