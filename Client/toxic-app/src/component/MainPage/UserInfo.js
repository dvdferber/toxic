import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { userImageUrl } from '../Data/Urls'


export default function UserInfo(props){

    const history  = useHistory()

    const [user, setUser] = useState({name: ''})
    useEffect(()=>{
        setUser(props.user)
    },[])
    
    const editUser = ()=>{
        history.push({
            pathname:'/edituser',
            user:user
        })
    }

    return (
        <div className='user-info'>
            <div >
                <img className='user-image' src={userImageUrl()}/>
            </div>
            <h3>@{user.userName}</h3>
            <div>
                <span>following</span><br/>
                <span>{user.following}</span><br/>
            </div>
            <div>
                <span>followers</span><br/>
                <span>{user.followers}</span><br/>
            </div>
            <div>
                <span>likes</span><br/>
                <span>{user.likes}</span><br/>
            </div>
            <input type='button' value='Edit' onClick={editUser} />
        </div>
    )
}