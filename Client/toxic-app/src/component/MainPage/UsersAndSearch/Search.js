import {useState } from "react";


export default function Search(props){

    const [searchInput, setSeachInput] = useState('');
    const search = ()=>{
        let input = searchInput.toLowerCase()
        props.inputRes(input)
    }

    return (
        <div className='sreach'>
            <input type='text' placeholder='search for people' onChange={e => setSeachInput(e.target.value)}/>
            <input type='button' value='search' onClick={search}/>
        </div>
    )
}