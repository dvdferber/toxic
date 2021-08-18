//const { rejects } = require("node:assert");
//const { resolve } = require("path/posix");
const Users = require('./usersModel')

function getAllUsers(){
    return new Promise((resolve, rejects)=>{
        Users.find({}, (errer, users)=>{
            if(errer) rejects(errer)
            else{
                resolve(users)
            }
        })
    })
}
module.exports = {getAllUsers}