import { useEffect, useState } from "react";
import {userImageUrl} from '../../Data/Urls'
import AllComments from "./allComments";
import { addLike, removeLike  } from "../../Data/CommentsUtiles";
import CreateNewComment from "./CreateNewComment";


export default function Comment(props){
 
    const [comment, setComment] = useState({})
    const [showComments, setShowComments] = useState(false)

    const [userId, setUserId] = useState('')

    useEffect(()=>{
        let unmount = true
        const getComment = async()=>{
            let data  = await props.comment
            unmount && setComment(data)
            unmount && setUserId(localStorage.getItem('id'))
        }
        unmount && getComment()
        return ()=>{
            unmount = false
        }
    },[])

    const addOrRemoveLike = async()=>{
        if(comment.usersHowLiked.includes(userId)){
            await removeLike(userId, comment)
        }else{
            await addLike(userId, comment)
        }
    }

    // const showAllTheComments = ()=>{
    //     setShowComments(!showComments)
    // }
    return (
        <div className='toxic'>
            <div >
                <img className='user-image' src={userImageUrl()}/>
                {/* <b>{user.name}</b> */}
            </div>
            {/* <span>{user.userName}</span><br/> */}
            <span>date: {comment.createdDate}</span><br/>
            <p>{comment.post}</p>
            <span>{comment.likes}</span>
            <input type='button' value="like" onClick={addOrRemoveLike}/>
            <span>{comment.comments}</span>
            <input type='button' value="comment"/>
            {comment.comments > 0 && <input type='button' value="show comments" onClick={e => setShowComments(!showComments)}/>}
            <CreateNewComment toxic={comment}/>
            {showComments && <AllComments key={comment._id} toxicId={comment._id}/>}
        </div>
    )
}