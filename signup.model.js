const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let New_user = new Schema({
    name:{type:String},
    email:{type:String},
    phone:{type:Number},
    username:{type:String},
    password:{type:String}
});

module.exports = mongoose.model("signup", New_user);
