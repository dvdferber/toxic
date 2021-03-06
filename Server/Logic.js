const toxicBL = require('./models/Toxics/toxicsBL')
const usersBL = require('./models/Users/usersBL')

async function getUserFollowArray(id){
    const user = await usersBL.getUserById(id)
    const followArray = user.follow
    return followArray
}
async function createUserPageByFolwing(followArray){
    if(followArray === undefined) return;
    let relevantToxic = []
    for (let i = 0; i < followArray.length; i++) {
        let toxics = await toxicBL.getToxicsByUserId(followArray[i])
        if(toxics.length > 1){
            for (let j = 0; j < toxics.length; j++) {
                toxics[j] && relevantToxic.push(toxics[j])
            }
        }else{
            toxics[0] && relevantToxic.push(toxics[0])
        }
    }
    relevantToxic.sort((a, b) => {
        let dateA = new Date(a.createdDate)
        let dateB = new Date(b.createdDate)
        return dateB - dateA
    })
    // the fide should not by more then 100 toxics
    if(relevantToxic.length > 100) relevantToxic.length = 100;
    return relevantToxic
}


module.exports = {createUserPageByFolwing, getUserFollowArray}