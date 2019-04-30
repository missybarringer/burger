// Setup the code to connect Node to MySQL.
// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "leHavre2019!",
    database: "burgers_db"
  });
};
// export the connection
connection.connect();
module.exports = connection;