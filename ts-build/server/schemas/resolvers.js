"use strict";
const { User } = require('../models');
const resolvers = {
    Query: {
        users: async () => {
            return await User.findAll();
        },
        user: async (_, { email }) => {
            return User.findOne({ where: { email: email } });
        }
    },
    Mutation: {
        createUser: async (_, { name, email }) => {
            const userData = await User.findOne({ where: { email: email } });
            if (userData) {
                return userData;
            }
            return await User.create({ name, email });
        }
    },
};
module.exports = resolvers;
