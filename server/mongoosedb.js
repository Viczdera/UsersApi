const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017',{useNewUrlParser: true});
module.exports = {
    mongoose
} ;


//mongodb+srv://user_1:12345@cluster0.ouxsq.mongodb.net/users-api?retryWrites=true&w=majority