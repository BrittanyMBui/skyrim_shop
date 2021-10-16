const { gql } = require('apollo-server');

module.exports = gql`
type Item {
    id: ID!
    itemName: String!
    itemPrice: String!
    itemDescription: String!
}
type User {
    id: ID!
    name: String!
    email: String!
    token: String!
}
`