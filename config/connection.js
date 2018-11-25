const mysql = require('mysql');
require('dotenv').config();
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Geauxtigers1',
        database: 'burger_db'

    });
}

connection.connect(function(err) {
    console.log(`Connected to Database!`);
});

module.exports = connection;