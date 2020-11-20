const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.users = require('./user.model');
db.roles = require('./role.model');

db.ROLES = ["user", "admin", "owner"];

module.exports = db;