//Initialize time counter
let start = process.hrtime();
const { fetch } = require("./hasuraClient");
const { mySqlQuery } = require("./mySqlClient");
const { formatUsersArray } = require("./helpers/usersHelper");

// //Query mySql
// const project_user = await mySqlQuery(
//   `SELECT * FROM project_user WHERE user_id = ${userId}`
// );
// console.log("🚀 ~ mySql => project_user", project_user);

// //Query Hasura
// const usersResponse = await fetch(
//   JSON.stringify({
//     query: getUserById,
//     variables: {
//       id: userId,
//     },
//   })
// );

const run = async () => {
  try {
    const usersMySql = await mySqlQuery(
      `SELECT * FROM users ORDER BY created_at DESC LIMIT 1`
    );
    const usersJson = Object.values(JSON.parse(JSON.stringify(usersMySql)));
    const usersFormated = await formatUsersArray(usersJson);
    console.log(
      "🚀 ~ file: index.js ~ line 30 ~ run ~ usersFormated",
      usersFormated
    );

    // Insert users
    // const response = await fetch({
    //   query: JSON.stringify(`mutation {
    //       insert_users(objects: ${usersJson}) {
    //         returning {
    //           id
    //         }
    //       }
    //     }`),
    // });
  } catch (error) {
    console.log("🚀 ~ file: index.js ~ line 67 ~ run ~ error", error);
    throw error;
  }
  console.log("Finsihed!");
  //Get elapsed time
  const precision = 3; // 3 decimal places
  const elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
  console.log(
    "Execution time: " +
      Number(process.hrtime(start)[0] / 60).toFixed(0) +
      " m, " +
      process.hrtime(start)[0] +
      " s, " +
      elapsed.toFixed(precision) +
      " ms - "
  ); // print message + time
  start = process.hrtime(); // reset the timer
};

run();
