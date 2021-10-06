const { User } = require('../models');

interface UserInterface {
    name: string, email: string
}

const resolvers = {
    Query: {
        users: async () => {
            return await User.findAll()
        },
        user: async (_: any, { email }:{ email: String }) => {
            return User.findOne({ where: { email: email } })
        }
    },
    Mutation: {
        createUser: async (_: any, { name, email }: UserInterface) => {
            const userData = await User.findOne({ where: { email: email } })
            if (userData) {
                return
            }
            return await User.create({ name, email });
        }
    },
}

export = resolvers