const { fetch } = require("./hasuraClient");
const { mySqlClient } = require("./mySqlClient");

const { getUsers } = require("./graphql/queries");

//Hasura query example
// const usersData = JSON.stringify({
//   query: getUsers,
// });
// const usersResponse = await fetch(usersData);
// console.log(usersResponse.data);

//MySql example
// await mySqlClient.query("SELECT * FROM users", (err, result, fields) => {
//   if (err) throw err;
//   console.log(result);
// });

const run = async () => {
  // Enter code
};

run();
