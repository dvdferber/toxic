import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { createUserPage } from "../Data/LoginStaffUtils";
import UserInfo from './UserInfo'
import AllToxics from "./AllToxics";
import CreateNewToxic from "./CreateToxic";
import { getUserInfo } from "../Data/ToxicUtils";

export default function MainPageContainer(){

    const [userData, setUserData] = useState({})
    const [allToxic, setAllToxic] = useState([])
    const location = useLocation()
    
    useEffect(()=>{
        const id = location.id
        const toxics = createUserPage(id) 
        toxics.then(toxics =>{
             setAllToxic(toxics)})
        const user = getUserInfo(id)
        user.then(user => 
            setUserData(user))
    },[])
    


    return (
        <div className='main-page-container'>
            <h1>Main Page</h1>
            <UserInfo   key={1} user={userData}/>
            <AllToxics  key={2} toxics={allToxic}/>
            <CreateNewToxic key={3} user={userData}/>
        </div>
    )
}