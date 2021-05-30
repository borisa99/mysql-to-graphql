//Initialize time counter
let start = process.hrtime();
const { hasuraClient } = require("./hasuraClient");
const { mySqlQuery } = require("./mySqlClient");
const {
  formatUsersArray,
  formatContactUs,
  formatCountries,
} = require("./helpers/dataFormatters");
const {
  insertUsers,
  insertSkills,
  insertQuestions,
  insertCurrencies,
  insertBadUrls,
  insertContactUs,
  insertCountries,
} = require("./graphql/insertMutations");

const run = async () => {
  try {
    console.log("Migrating Users....");
    // const usersMySql = await mySqlQuery(
    //   `SELECT * FROM users`
    // );
    // const usersJson = Object.values(JSON.parse(JSON.stringify(usersMySql)));
    // const usersFormated = await formatUsersArray(usersJson);
    // await hasuraClient.request(insertUsers, {
    // objects: usersFormated,
    // });
    console.log("Success!");
    console.log("Migrating Skills....");
    // const skillsMysql = await mySqlQuery(
    //   "SELECT * FROM skills"
    // );
    // const skillsJson = Object.values(JSON.parse(JSON.stringify(skillsMysql)));
    // await hasuraClient.request(insertSkills, {
    //   objects: skillsJson,
    // });
    console.log("Success!");
    console.log("Migrating Questions....");
    // const questionsMysql = await mySqlQuery("SELECT * FROM questions");
    // const questionsJson = Object.values(
    //   JSON.parse(JSON.stringify(questionsMysql))
    // );
    // await hasuraClient.request(insertQuestions, {
    //   objects: questionsJson,
    // });
    console.log("Success!");
    console.log("Migrating Currencies....");
    // const currenciesMysql = await mySqlQuery(
    //   "SELECT * FROM currencies"
    // );
    // const currenciesJson = Object.values(
    //   JSON.parse(JSON.stringify(currenciesMysql))
    // );
    // await hasuraClient.request(insertCurrencies, {
    //   objects: currenciesJson,
    // });
    console.log("Success!");
    console.log("Migrating Bad URLs....");
    // const badUrlsMysql = await mySqlQuery("SELECT * FROM bad_urls");
    // const badUrlsJson = Object.values(JSON.parse(JSON.stringify(badUrlsMysql)));
    // await hasuraClient.request(insertBadUrls, {
    //   objects: badUrlsJson,
    // });
    console.log("Success!");
    console.log("Migrating Contact Us....");
    // const contactUsMysql = await mySqlQuery(
    //   "SELECT * FROM contact_us"
    // );
    // const contactUsJson = await formatContactUs(
    //   Object.values(JSON.parse(JSON.stringify(contactUsMysql)))
    // );
    // await hasuraClient.request(insertContactUs, {
    //   objects: contactUsJson,
    // });
    console.log("Success!");
    console.log("Migrating Countries....");
    const countriesMysql = await mySqlQuery(
      "SELECT * FROM countries ORDER BY id DESC LIMIT 1"
    );
    const countriesJson = await formatCountries(
      Object.values(JSON.parse(JSON.stringify(countriesMysql)))
    );
    await hasuraClient.request(insertCountries, {
      objects: countriesJson,
    });
    console.log("Success!");
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
