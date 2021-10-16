const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { UserInputError } = require('apollo-server');
const User = require('../../models/User');

function generateToken(user) {
    return jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name
    }, process.env.SECRET_KEY, { expiresIn: '6d' });
};

module.exports = {
    Mutation: {
        // LOGIN
        async login(_, { email, password }) {
            const {errors, valid}
        }
    }
}