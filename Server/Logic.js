const toxicBL = require('./models/Toxics/toxicsBL')


async function createUserPageByFolwing(followArray){
    let relevantToxic = []
    for (let i = 0; i < followArray.length; i++) {
        let toxics = await toxicBL.getToxicsByUserId(followArray[i])
        if(toxics.length > 1){
            for (let j = 0; j < toxics.length; j++) {
                relevantToxic.push(toxics[j])
            }
        }else{
            relevantToxic.push(toxics[i])
        }
    }
    relevantToxic.sort((a, b) => {
        let dateA = new Date(a.createdDate)
        let dateB = new Date(b.createdDate)
        return dateA - dateB
    })
    // the fide shold not by more then 100 toxics
    if(relevantToxic.length > 100) relevantToxic.length = 100;
    return relevantToxic
}


module.exports = {createUserPageByFolwing}