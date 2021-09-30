"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');
db.sync({ force: true }).then(async () => {
    try {
        await User.bulkCreate(userSeeds, {
            individualHooks: true,
            returning: true
        });
    }
    catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        process.exit(1);
    }
    process.exit(0);
});
