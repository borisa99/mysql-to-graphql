const { fetch } = require("./hasuraClient");
const { mySqlQuery } = require("./mySqlClient");
const { getUserById } = require("./graphql/queries");

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
  try {
    // Enter code
    //Get current user id
    const userId = users[counter].id;
    console.log("🚀 ~ user_id", userId);

    //Query mySql
    const project_user = await mySqlQuery(
      `SELECT * FROM project_user WHERE user_id = ${userId}`
    );
    console.log("🚀 ~ mySql => project_user", project_user);

    //Query Hasura
    const usersData = JSON.stringify({
      query: getUserById,
      variables: {
        id: userId,
      },
    });
    const usersResponse = await fetch(usersData);
    console.log("🚀 ~ hasura => usersResponse", usersResponse.data);

    if (counter < users.length - 1) {
      counter++;
      run();
    }
  } catch (error) {
    throw error;
  }
};

run();
