import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import UserInfo from './UserInfo'
import AllToxics from "./AllToxics";
import CreateNewToxic from "./CreateToxic";

export default function MainPageContainer(){

    const [allData, setAllData] = useState({user:{}, toxic: {}})
    const location = useLocation()
    
    useEffect(()=>{
        const data = location.data
        setAllData(data)
    },[])
    


    return (
        <div className='main-page-container'>
            <h1>Main Page</h1>
            <UserInfo   key={1} user={allData.user}/>
            <AllToxics  key={2} toxics={allData.toxics}/>
            <CreateNewToxic key={3} user={allData.user}/>
        </div>
    )
}