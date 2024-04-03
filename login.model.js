const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let New_login = new Schema({
    username:{type:String},
    password:{type:String}
});

module.exports = mongoose.model("login", New_login);
