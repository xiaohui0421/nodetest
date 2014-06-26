var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    title: String
    , content: String
});

module.exports = mongoose.model('User', UserSchema);