var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var db = require('../config/c_mongo.js');


autoIncrement.initialize(db);
var OldHouseSchema = new mongoose.Schema({
    oldHouseId: Number,
    showKeyword: String,
    houseAbout: {
        roomC: {
            bedR: String,
            livingR: String,
            restR: String
        },
        size: String,
        decoration: String,
        born: String,
        direction: String,
        allPrice: String
    },
    otherMsg: {
        lookTime: String,
        specials: [String],
        recommend: String
    },
    houseAddress: {
        detail: String,
        community: String,
        buildingBlock: String,
        floors: {
            heightType: String,
            floor: String
        },
        roomN: String
    },
    owner: {
        xingming: String,
        tel: String,
        sex: String
    },
    imgUrls: [String],
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
OldHouseSchema.plugin(autoIncrement.plugin, {
    model: 'OldHouseModel',
    field: 'oldHouseId',
    startAt: 1,
    incrementBy: 1
});
OldHouseSchema.statics = {
    fetch: function(cb) {
        return this
            .find({})
            .sort("meta.updateAt")
            .exec(cb)
    },
    findById: function(key, cb) {
        return this
            .findOne({showKeyword: key})
            .exec(cb)
    },
    fetchByType: function(type, cb) {
        return this
            .find({"otherMsg.specials": type})
            .sort("meta.updateAt")
            .exec(cb);
    }

}
module.exports = mongoose.model("OldHouseModel", OldHouseSchema);
