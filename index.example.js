const { fetch } = require("./hasuraClient");
const { mySqlQuery } = require("./mySqlClient");

const { getUsers } = require("./graphql/queries");

//Hasura query example
// const usersData = JSON.stringify({
//   query: getUsers,
// });
// const usersResponse = await fetch(usersData);

//MySql example
// const queryResponse =  await mySqlQuery(`SELECT * FROM users`);

const run = async () => {
  // Enter code
};

run();
