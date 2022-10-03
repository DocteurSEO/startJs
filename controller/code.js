const knex = require('../model/knex') 

async function getOneCode(idNicolas){

    const data = await knex('html')
    .select('*')
    .where({id:idNicolas})
    return data 
}

module.exports = {
    getOneCode
}