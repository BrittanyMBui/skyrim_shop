const usersResolvers = require('./users');
const itemsResolvers = require('./items');

module.exports = {
    // Query: {
    //     ...itemsResolvers.Query
    // },
    Mutation: {
        ...usersResolvers,
        ...itemsResolvers
    }
};