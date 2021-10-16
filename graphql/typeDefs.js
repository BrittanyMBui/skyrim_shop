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
type Mutation {
    register(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User!
}
`