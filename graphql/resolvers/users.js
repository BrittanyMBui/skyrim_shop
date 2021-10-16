const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

function generateToken(user) {
    return jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name
    }, process.env.SECRET_KEY, { expiresIn: '6d' });
};