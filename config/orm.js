// Connects to connection.js
const connection = require("../config/connection.js");

let orm = {
    selectAll: function (table) {
        connection.query("SELECT * FROM ??", [table], function (err, result) {
            if (err) throw err;
            console.log(result);
        })
    },

    insertOne: function (name) {
        connection.query("INSERT INTO burgers (burger_name) VALUES ?",[name], function (err,result){
            if (err) throw err;
            console.log(result)
        }) 
    }
};
module.exports = orm;