import { useState } from "react";
import {publishNewToxic} from '../Data/ToxicUtils'

export default function CreateNewToxic(props){
 
    const [newtoxic, setNewToxic] = useState({post: ''})
    const [isWantToAddNew, setIsWantToAddNew] = useState(false)
    //const [user, setUser] = useState({})

    const createToxic = async() => {
        newtoxic.userId = props.user._id
        let resp = await publishNewToxic(newtoxic)
        if(resp){
            //console.log(newtoxic);
        }
    }
    let createArea = <div className='new-toxic'>
                        <span>Enter new Toxic</span>
                        <textarea onChange={e => setNewToxic({...newtoxic, post: e.target.value})}></textarea>
                        <br/>
                        <input type='button' value='Save Toxic' onClick={createToxic}/>
                        <input type='button' value='Cancel' onClick={() => setIsWantToAddNew(!isWantToAddNew)}/>
                    </div>
    return (
        <div className='create-new-toxic'>
            <input type='button' value='Toxic' onClick={()=>{setIsWantToAddNew(!isWantToAddNew)}}/>
            {isWantToAddNew && createArea}
        </div>
    )
}