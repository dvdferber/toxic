const Users = require('./usersModel')
const Logic = require('../../Logic')

function getAllUsers(){
    return new Promise((resolve, reject)=>{
        Users.find({}, (errer, users)=>{
            if(errer) reject(errer)
            else{
                resolve(users)
            }
        })
    })
}
function getUserById(userId){
    return new Promise((resolve, reject)=>{
        Users.findById(userId, (errer, user)=>{
            if(errer) reject(errer)
            else{
                resolve(user)
            }
        })
    })
}
function createNewUser(userObj){
    return new Promise((resolve, reject)=>{
        const newUser = new Users({
            userName: userObj.userName,
            password: userObj.password,
            email: userObj.email,
            name: userObj.name,
            desctption: userObj.desctption,
            userImage: userObj.userImage,
            userCoverImage: userObj.userCoverImage,
            createdDate: new Date(),
            following: 0,
            followers: 0,
            follow: [],
            likes: 0
        })
        newUser.save(errer =>{
            if(errer) reject(errer)
            else resolve(newUser)
        })
    })
}
function updateUser(userId, updateUserObj){
    return new Promise((resolve, reject)=>{
        Users.findByIdAndUpdate(userId, {
            userName: updateUserObj.userName,
            password: updateUserObj.password,
            email: updateUserObj.email,
            name: updateUserObj.name,
            desctption: updateUserObj.desctption,
            userImage: updateUserObj.userImage,
            userCoverImage: updateUserObj.userCoverImage,
            following: updateUserObj.following,
            followers: updateUserObj.followers,
            follow: updateUserObj.follow,
            likes: updateUserObj.likes
        }, errer => {
            if(errer){reject(errer)}
            else{
                resolve(`user: ${updateUserObj.userName} was updated`)
            }
        })
    })
}
function deleteUserById(userId){
    return new Promise((resolve, reject)=>{
        Users.findByIdAndDelete(userId, (errer, user)=>{
            if(errer) reject(errer)
            else{
                resolve('the user was deleted')
            }
        })
    })
}
function isUserAndPasswordValid(userName, password){
    return new Promise((resolve, reject)=>{
        Users.find({userName: userName, password: password}, async(error, user)=>{
            if(error) {reject(error)}
            else{
                let followArray = user[0].follow ?  user[0].follow : [] 
                let toxics = await Logic.createUserPageByFolwing(followArray)
                resolve([user, toxics])
            }
        })
        
    })
}
module.exports = {getAllUsers, getUserById, createNewUser, updateUser, deleteUserById, isUserAndPasswordValid}