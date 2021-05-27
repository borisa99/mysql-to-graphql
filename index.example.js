const { fetch } = require("./hasuraClient");
const { mySqlQuery } = require("./mySqlClient");

const { getUsers } = require("./graphql/queries");

//Hasura query example
// const usersResponse = await fetch(
//   JSON.stringify({
//     query: getUsers,
//   })
// );

//MySql example
// const queryResponse =  await mySqlQuery(`SELECT * FROM users`);

const run = async () => {
  // Enter code
};

run();
