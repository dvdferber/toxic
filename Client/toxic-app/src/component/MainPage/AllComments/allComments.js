import { useEffect, useState } from "react";
import {getAllCommentsByToxicId} from '../../Data/CommentsUtiles'
import Comment from "./Comment";


export default function AllComments(props){
 
    const [allComments, setComments] = useState([123, 123, 123])


    useEffect(()=>{
        let unmount = true
        const getComments = async()=>{
            let toxicId = props.toxicId
            const comments = getAllCommentsByToxicId(toxicId)
            comments.then(comments => setComments(comments))
            .catch("not found")
            
        }
        unmount && getComments()
        return ()=>{
            unmount = false
        }
    },[])

    let commentToRrender = allComments.map((comment, i) => {
        let id = comment._id
        return (
            <div key={id}><Comment key={i} comment={comment}/></div>
        )
    })
    
    return (
        <div className='all-comment' style={{border:'2px solid blue', borderRadius: '25px'}}>
            <h3>comment section</h3>
            {commentToRrender}
        </div>
    )
}