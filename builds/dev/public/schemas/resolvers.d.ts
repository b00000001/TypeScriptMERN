declare const resolvers: {
    Query: {
        users: () => Promise<any>;
    };
};
export = resolvers;
