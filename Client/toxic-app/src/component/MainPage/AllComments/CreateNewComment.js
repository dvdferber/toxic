import { useState } from "react";
import { publishNewComment} from "../../Data/CommentsUtiles"


export default function CreateNewComment(props){
 
    const [newComment, setNewComment] = useState({post: ''})
    const [isWantToAddNew, setIsWantToAddNew] = useState(false)

    const createComment = async() => {
        newComment.userId = localStorage.getItem('id')
        let resp = await publishNewComment(newComment, props.toxic)
        if(resp){
            setIsWantToAddNew(!isWantToAddNew)
        }
    }
    let createArea = <div className='new-comment'>
                        <span>Enter new Comment</span>
                        <textarea onChange={e => setNewComment({...newComment, post: e.target.value})}></textarea>
                        <input type='button' value='Save' onClick={createComment}/><br/>
                        <input type='button' value='Cancel' onClick={() => setIsWantToAddNew(!isWantToAddNew)}/>
                    </div>
    return (
        <div className='create-new-comment'>
            <input type='button' value='Comment' onClick={()=>{setIsWantToAddNew(!isWantToAddNew)}}/>
            {isWantToAddNew && createArea}
        </div>
    )
}