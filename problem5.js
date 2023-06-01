var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "your username",
  password: "your password",
  database: "your database name",
});
connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected!:)");
  }
});
module.exports = connection;

// the code establishes a connection to a MySQL database. The connection is established, and any faults are checked. A success message is logged to the console after a successful connection. After that, the connection object is exported for use in other application components that need database connectivity.