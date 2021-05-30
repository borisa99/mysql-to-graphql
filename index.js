//Initialize time counter
let start = process.hrtime();
const { hasuraClient } = require("./hasuraClient");
const { mySqlQuery } = require("./mySqlClient");
const { formatUsersArray } = require("./helpers/usersHelper");
const { insertUsers } = require("./graphql/insertMutations");

const run = async () => {
  try {
    const usersMySql = await mySqlQuery(
      `SELECT * FROM users ORDER BY created_at DESC LIMIT 1`
    );
    const usersJson = Object.values(JSON.parse(JSON.stringify(usersMySql)));
    const usersFormated = await formatUsersArray(usersJson);

    const inserUsersResponse = await hasuraClient.request(insertUsers, {
      objects: usersFormated,
    });
    console.log(
      "🚀 ~ file: index.js ~ line 19 ~ run ~ inserUsersResponse",
      inserUsersResponse
    );
  } catch (error) {
    console.log("🚀 ~ file: index.js ~ line 67 ~ run ~ error", error);
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
