const mongoose = require('mongoose');

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: {
            type: String,
            required: 'Field username can\'t be empty',
        },
        email: {
            type: String,
            required: 'Field email can\'t be empty',
        },
        password: {
            type: String,
            required: 'Field password can\'t be empty',
        },
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ],
    })
);

module.exports = User;
