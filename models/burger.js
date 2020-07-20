const orm = require('../config/orm');


var burger = {
    selectAll: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    createOne: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    // delete: function (condition, cb) {
    //     orm.delete("burgers", condition, function (res) {
    //         cb(res);
    //     });
    // }
};

module.exports = burger;