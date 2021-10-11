import {useEffect, useState } from "react";
import Result from "./Result";

export default function AllSearchResults(props){

    const [users, setUsers] = useState([])
    useEffect(()=>{
        setUsers(props.users)
    },[props.users])

    
    let usersToRender = users.map(user => {
        return <div key={user._id} className='user'>
            <Result  user={user}/>
        </div>
    })
    return (
        <div className=''>
            <h3>all search erea</h3>
            {usersToRender}
        </div>
    )
}