//Initialize time counter
let start = process.hrtime();
const { fetch } = require("./hasuraClient");
const { mySqlQuery } = require("./mySqlClient");
const { getUserById } = require("./graphql/queries");

const users = require("./jsonData/users.json");

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
    const usersMySql = await mySqlQuery(`SELECT * FROM users LIMIT 10`);
    await usersMySql.forEach((user) => {
      delete user.crew_id;
      delete user.currency;
      delete user.skype;
      delete user.landline;
      delete user.website;
      delete user.rating;
      delete user.freelancer;
      delete user.job_rating;
      delete user.awarded;
      delete user.first_project;
      delete user.hours_first;
      delete user.cost_first;
      delete user.manager_comment;
      delete user.remember_token;
      delete user.social_provider;
      delete user.social_nickname;
      delete user.social_id;
      delete user.social_token;
      delete user.social_token_secret;
      delete user.social_refresh_token;
      delete user.social_expires_in;
      delete user.social_avatar;
      delete user.social_avatar_original;
      delete user.mattermost_id;
      delete user.wekan_id;
    });
    console.log(
      "🚀 ~ file: index.js ~ line 28 ~ run ~ usersMySql",
      JSON.stringify(usersMySql)
    );
  } catch (error) {
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
