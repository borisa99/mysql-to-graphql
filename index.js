const { fetch } = require("./hasuraClient");
const { mySqlClient } = require("./mySqlClient");

const { getUsers } = require("./graphql/queries");

const users = require("./jsonData/users.json");

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

let counter = 0;
const run = async () => {
  // Enter code
  const userId = users[counter].id;
  const response = await mySqlClient.query(
    `SELECT * FROM project_user WHERE user_id = ${userId}`
  );
  console.log(response);
  if (counter < users.length - 1) {
    counter++;
    run();
  }
};

run();
