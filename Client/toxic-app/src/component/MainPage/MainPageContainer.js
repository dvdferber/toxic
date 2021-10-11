import { useEffect, useState } from "react";
import { useLocation, useHistory} from "react-router-dom";
import { createUserPage } from "../Data/LoginStaffUtils";
import UserInfo from './UserInfo'
import AllToxics from "./AllToxics";
import SearchArea from "./UsersAndSearch/SearchArea";
import CreateNewToxic from "./CreateToxic";
import { getUserInfo } from "../Data/ToxicUtils";

export default function MainPageContainer(){

    const [userData, setUserData] = useState({})
    const [allToxic, setAllToxic] = useState([])
    const location = useLocation()
    const history = useHistory()

    
    useEffect(()=>{
        let id = location.id
        if(!id){
            id = localStorage.getItem('id')
        }
        const toxics = createUserPage(id) 
        toxics.then(toxics =>{
             setAllToxic(toxics)})
        const user = getUserInfo(id)
        user.then(user => 
            setUserData(user))
    },[])
    const logOut = ()=>{
        localStorage.clear()
        history.push('/')
    }


    return (
        <div className='main-page-container'>
            <h1>Main Page</h1>
            <input type='button' value='log out' onClick={logOut}/>
            <UserInfo   key={1} user={userData}/>
            <AllToxics  key={2} toxics={allToxic}/>
            <CreateNewToxic key={3} user={userData}/>
            <SearchArea key={4}/>
        </div>
    )
}