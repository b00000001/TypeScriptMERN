const { User } = require('../models');

interface UserInterface {
    name: string, email: string
}

const resolvers = {
    Query: {
        users: async () => {
            return await User.findAll()
        }
    },
    Mutation: {
        createUser: async (_: any, { name, email }: UserInterface) => {
            return await User.create({ name, email });
        }
    },
}

export = resolvers