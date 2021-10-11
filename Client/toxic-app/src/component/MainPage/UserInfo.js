import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { userImageUrl } from '../Data/Urls'
import {getUsersByArrayId} from '../Data/SearchUtils'
import AllSearchResults from './UsersAndSearch/AllSearchResults'


export default function UserInfo(props){

    const history  = useHistory()

    const [user, setUser] = useState({name: '', follow: []})
    const [followUsers, setFollowUsers] = useState([])
    const [showFollow, setShowFollow] = useState(false)

    useEffect(()=>{
        setUser(props.user)
    },[])
    
    const editUser = ()=>{
        history.push({
            pathname:'/edituser',
            user:user
        })
    }
    const renderAllUserFollow = async() =>{
        if(!showFollow){
            const usersList = await getUsersByArrayId(user.follow, user._id)
            console.log(usersList);
            setFollowUsers(usersList)
            setShowFollow(true)
        }else{
            setShowFollow(false)
        }
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
                <input type='button' value='show list' onClick={renderAllUserFollow} />
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
            {showFollow && <AllSearchResults users={followUsers}/>}
        </div>
    )
}