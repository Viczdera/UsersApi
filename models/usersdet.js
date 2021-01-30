const { capitalize } = require('lodash');
const {mongoose} = require('./../server/mongoosedb');
const usersSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
    
    },

    github:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    mobile:{
        type: String,
        required: true,
    },
    twitter:{
        type: String,
        required: false,
    }
    
});

let User = mongoose.model('User', usersSchema);
module.exports ={
    User
};