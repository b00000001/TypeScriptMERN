const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');

db.sync({ force:true }).then(async () => {
    try {
        await User.buldCreate(userSeeds, { 
        individualHooks: true,
        eturning: true,
    })
    } catch(err) {
        console.error(err);        
        process.exit(1);
    }
    process.exit(0);
})