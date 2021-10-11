import {useEffect, useState } from "react";
import Search from "./Search";
import AllSearchResults from "./AllSearchResults";
import {getAllPeople} from '../../Data/SearchUtils'

export default function SearchArea(props){

    const [input, setInput] = useState('')
    const [matchSearch, setMatchSearch] = useState([])

    useEffect(()=>{
        const getUsers = async() =>{
            const data = await getAllPeople()
            let temp = data.filter(user => 
                //user.name.toLowerCase().includes(input) || 
                user.userName.toLowerCase().includes(input))
                if(input == ''){
                    setMatchSearch([])
                }
                else{
                    setMatchSearch(temp)
                }
        }
        getUsers()
    },[input])

    return (
        <div className='sreach-area'>
            <Search inputRes={e => setInput(e)}/>
            <AllSearchResults users={matchSearch}/>
        </div>
    )
}