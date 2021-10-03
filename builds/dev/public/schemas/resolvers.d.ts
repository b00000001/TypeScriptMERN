interface UserInterface {
    name: string;
    email: string;
}
declare const resolvers: {
    Query: {
        users: () => Promise<any>;
    };
    Mutation: {
        createUser: (_: any, { name, email }: UserInterface) => Promise<any>;
    };
};
export = resolvers;
