const { gql } = require('apollo-server');

module.exports = gql`
type Item {
    id: ID!
    itemName: String!
    itemPrice: String!
    itemDescription: String!
    itemImg: String!
    itemType: String!
}
type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    token: String!
}
input RegisterInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    confirmPassword: String!
}
input ItemInput {
    itemName: String!
    itemPrice: String!
    itemDescription: String!
    itemImg: String!
    itemType: String!
}
type Query {
    getItems: [Item]
    getItem(itemId: ID!): Item
}
type Mutation {
    register(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User!
    addItem(itemInput: ItemInput): Item!
}
`