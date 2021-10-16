const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { UserInputError } = require('apollo-server');
const { validateRegisterInput, validateLoginInput } = require('../../util/validators');
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
            const { valid, errors } = validateLoginInput(email, password)

            if (!valid) {
                throw new UserInputError('Errors', { errors })
            }

            const user = await User.findOne({ email });

            if (!user) {
                errors.general = 'User not found';
                throw new UserInputError('User not found', { errors });
            };

            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                errors.general = 'Invalid credentials';
                throw new UserInputError('Invalid credentials', { errors });
            };

            const token = generateToken(user);

            return {
                ...user._doc,
                id: user._id,
                token
            };
        },
        // REGISTER
        async register(
            _,
            {
                registerInput: { firstName, lastName, email, password, confirmPassword }
            },
            ) {
                const { valid, errors } = validateRegisterInput(
                    firstName,
                    lastName,
                    email,
                    password,
                    confirmPassword
                );

                if (!valid) {
                    throw new UserInputError('Errors', { errors })
                }

                const user = await User.findOne({ email });

                if (user) {
                    throw new UserInputError('Email in use', {
                        errors: {
                            email: 'Email in use'
                        }
                    })
                }

                password = await bcrypt.hash(password, 12);

                const newUser = new User({
                    firstName,
                    lastName,
                    email,
                    password
                });

                const res = await newUser.save();

                const token = generateToken(res)

                return {
                    ...rest._doc,
                    id: res._id,
                    token
                }
            }
    }
}