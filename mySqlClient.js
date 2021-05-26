const mysql = require("mysql");
require("dotenv").config();

const mySqlClient = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

mySqlClient.connect((err) => {
  if (err) throw err;
});

module.exports = {
  mySqlClient,
};
