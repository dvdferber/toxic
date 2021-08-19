const Toxics = require('./toxicModel')

function getAllToxics(){
    return new Promise((resolve, reject)=>{
        Toxics.find({}, (errer, toxics)=>{
            if(errer) reject(errer)
            else{
                resolve(toxics)
            }
        })
    })
}
function getToxicById(toxicId){
    return new Promise((resolve, reject)=>{
        Toxics.findById(toxicId, (errer, toxic)=>{
            if(errer) reject(errer)
            else{
                resolve(toxic)
            }
        })
    })
}
function getToxicsByUserId(userId){
    return new Promise((resolve, reject)=>{
        Toxics.find({userId: userId}, (errer, toxics)=>{
            if(errer) reject(errer)
            else{   
                resolve(toxics)
            }
        })
    })
}
function createNewToxic(toxicObj){
    return new Promise((resolve, reject)=>{
        const newToxic = new Toxics({
            userId: toxicObj.userId,
            post: toxicObj.post,
            image: [],
            createdDate: new Date(),
            updatedDate: new Date(),
            likes: 0,
            shares: 0,
            comments: 0,
            usersHowLiked: []
        })
        newToxic.save(errer =>{
            if(errer) reject(errer)
            else resolve(newToxic)
        })
    })
}
function updateToxic(toxicId, updateToxicObj){
    return new Promise((resolve, reject)=>{
        Toxics.findByIdAndUpdate(toxicId, {
            userId: updateToxicObj.userId,
            post: updateToxicObj.post,
            image: [],
            updatedDate: updateToxicObj.updatedDate,
            likes: updateToxicObj.likes,
            shares: updateToxicObj.shares,
            comments: updateToxicObj.comments,
            usersHowLiked: updateToxicObj.usersHowLiked
        }, errer => {
            if(errer){reject(errer)}
            else{
                resolve(`this toxic was updated`)
            }
        })
    })
}
function deleteToxicById(toxicId){
    return new Promise((resolve, reject)=>{
        Toxics.findByIdAndDelete(toxicId, (errer)=>{
            if(errer) reject(errer)
            else{
                resolve('the toxic was deleted')
            }
        })
    })
}
module.exports = {getAllToxics, getToxicById, createNewToxic, updateToxic, deleteToxicById, getToxicsByUserId}