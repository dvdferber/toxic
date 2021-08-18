const Users = require('./usersModel')

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
            password: userObj.password
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
            password: updateUserObj.password
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
module.exports = {getAllUsers, getUserById, createNewUser, updateUser, deleteUserById}