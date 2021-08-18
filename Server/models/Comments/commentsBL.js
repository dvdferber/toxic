const Comments = require('./commentsModel')

function getAllComments(){
    return new Promise((resolve, reject)=>{
        Comments.find({}, (errer, comments)=>{
            if(errer) reject(errer)
            else{
                resolve(comments)
            }
        })
    })
}
function getCommentById(commentId){
    return new Promise((resolve, reject)=>{
        Comments.findById(commentId, (errer, comment)=>{
            if(errer) reject(errer)
            else{
                resolve(comment)
            }
        })
    })
}
function createNewComment(commentObj){
    return new Promise((resolve, reject)=>{
        const newToxic = new Comments({
            userId: commentObj.userId,
            toxicId: commentObj.toxicId,
            post: commentObj.post,
            createdDate: new Date(),
            updatedDate: new Date(),
            likes: 0,
            shares: 0,
            comments: 0,
            usersHowLiked : []
        })
        newToxic.save(errer =>{
            if(errer) reject(errer)
            else resolve(newToxic)
        })
    })
}
function updateComment(commentId, updateCommentObj){
    return new Promise((resolve, reject)=>{
        Comments.findByIdAndUpdate(commentId, {
            userId: updateCommentObj.userId,
            toxicId: updateCommentObj.toxicId,
            post: updateCommentObj.post,
            //createdDate: new Date(),
            updatedDate: updateCommentObj.updatedDate,
            likes: updateCommentObj.likes,
            shares: updateCommentObj.shares,
            comments: updateCommentObj.comments,
            usersHowLiked : updateCommentObj.usersHowLiked
        }, errer => {
            if(errer){reject(errer)}
            else{
                resolve(`this toxic was updated`)
            }
        })
    })
}
function deleteCommentById(commentId){
    return new Promise((resolve, reject)=>{
        Comments.findByIdAndDelete(commentId, (errer)=>{
            if(errer) reject(errer)
            else{
                resolve('the toxic was deleted')
            }
        })
    })
}
module.exports = {getAllComments, getCommentById, createNewComment, updateComment, deleteCommentById}