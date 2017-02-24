var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var db = require('../config/c_mongo.js');


autoIncrement.initialize(db);
var UserSchema = new mongoose.Schema({
    userId: Number,
    username: String,
    password: String,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});
UserSchema.plugin(autoIncrement.plugin, {
    model: 'UserModel',
    field: 'userId',
    startAt: 1,
    incrementBy: 1
});
UserSchema.statics = {
    fetch: function(cb) {
        return this
            .find({})
            .sort("meta.updateAt")
            .exec(cb)
    },
    findById: function(key, cb) {
        return this
            .findOne({username: key})
            .exec(cb)
    },
    isExist: function(username, cb) {
        var self = this;
        console.log("----");
        console.log(username);
        var userArr = this.find({}, function(err, docs) {
            if(err) {
                console.log(err);
                return;
            }
            self.isFlag = docs.some(function(ele) {
                console.log(ele.username == username);
                return ele.username == username;
            });
            console.log("2----");
            console.log(self.isFlag);
        }).exec(cb);
    },
    isFlag: false
}
module.exports = mongoose.model("UserModel", UserSchema);
