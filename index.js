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
  console.log(users[counter]);
  if (counter < users.length - 1) {
    counter++;
    run();
  } else {
    console.log(counter);
  }
};

run();
