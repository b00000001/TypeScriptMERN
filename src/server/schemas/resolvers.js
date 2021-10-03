"use strict";
const { User } = require('../models');
const resolvers = {
    Query: {
        users: async () => {
            return await User.findAll();
        }
    },
    Mutation: {
        createUser: async (_, { name, email }) => {
            return await User.create({ name, email });
        }
    },
};
module.exports = resolvers;
