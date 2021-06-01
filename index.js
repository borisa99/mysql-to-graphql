//Initialize time counter
let start = process.hrtime();
const { hasuraClient } = require("./hasuraClient");
const { mySqlQuery } = require("./mySqlClient");
const _ = require("lodash");
const {
  formatUsersArray,
  formatContactUs,
  formatCountries,
  formatProjects,
  formatProjectSkills,
  formatAnswers,
  formatAvailabilities,
  formatLanguages,
  formatProjectUser,
  formatWebs,
  formatUserSkills,
} = require("./helpers/dataFormatters");
const { cleanTimeStamps } = require("./helpers/other");
const {
  insertUsers,
  insertSkills,
  insertQuestions,
  insertCurrencies,
  insertBadUrls,
  insertContactUs,
  insertCountries,
  insertProjects,
  insertProjectSkill,
  insertAnswers,
  insertAvailabilities,
  insertContacts,
  insertCustomers,
  insertEducations,
  insertEmployments,
  insertLanguages,
  insertPortfolios,
  insertProfiles,
  insertProjectUser,
  insertRates,
  insertUserSkills,
  insertTasks,
  insertUserCountries,
  insertTrackers,
  insertWebs,
} = require("./graphql/insertMutations");

const run = async () => {
  try {
    console.log("Migrating Users....");
    const usersMySql = await mySqlQuery(`SELECT * FROM users LIMIT 2800`);
    const usersJson = Object.values(JSON.parse(JSON.stringify(usersMySql)));
    const usersFormated = await formatUsersArray(usersJson);
    await hasuraClient.request(insertUsers, {
      objects: usersFormated,
    });

    const usersMySqlSecond = await mySqlQuery(
      `SELECT * FROM users LIMIT 1000 OFFSET 2800`
    );
    const usersJsonSecond = Object.values(
      JSON.parse(JSON.stringify(usersMySqlSecond))
    );
    const usersFormatedSecond = await formatUsersArray(usersJsonSecond);
    await hasuraClient.request(insertUsers, {
      objects: usersFormatedSecond,
    });
    console.log("Success!");
    console.log("Migrating Skills....");
    const skillsMysql = await mySqlQuery("SELECT * FROM skills");
    const skillsJson = Object.values(JSON.parse(JSON.stringify(skillsMysql)));
    await hasuraClient.request(insertSkills, {
      objects: skillsJson,
    });
    console.log("Success!");
    console.log("Migrating Questions....");
    const questionsMysql = await mySqlQuery("SELECT * FROM questions");
    const questionsJson = await cleanTimeStamps(
      Object.values(JSON.parse(JSON.stringify(questionsMysql)))
    );
    await hasuraClient.request(insertQuestions, {
      objects: questionsJson,
    });
    console.log("Success!");
    console.log("Migrating Currencies....");
    const currenciesMysql = await mySqlQuery("SELECT * FROM currencies");
    const currenciesJson = Object.values(
      JSON.parse(JSON.stringify(currenciesMysql))
    );
    await hasuraClient.request(insertCurrencies, {
      objects: currenciesJson,
    });
    console.log("Success!");
    console.log("Migrating Bad URLs....");
    const badUrlsMysql = await mySqlQuery("SELECT * FROM bad_urls");
    const badUrlsJson = Object.values(JSON.parse(JSON.stringify(badUrlsMysql)));
    await hasuraClient.request(insertBadUrls, {
      objects: badUrlsJson,
    });
    console.log("Success!");
    console.log("Migrating Contact Us....");
    const contactUsMysql = await mySqlQuery("SELECT * FROM contact_us");
    const contactUsJson = await formatContactUs(
      Object.values(JSON.parse(JSON.stringify(contactUsMysql)))
    );
    await hasuraClient.request(insertContactUs, {
      objects: contactUsJson,
    });
    console.log("Success!");
    console.log("Migrating Countries....");
    const countriesMysql = await mySqlQuery("SELECT * FROM countries");
    const countriesJson = await formatCountries(
      Object.values(JSON.parse(JSON.stringify(countriesMysql)))
    );
    await hasuraClient.request(insertCountries, {
      objects: countriesJson,
    });
    console.log("Success!");
    console.log("Migrating Projects....");
    const projectsMysql = await mySqlQuery("SELECT * FROM projects");
    const projectsJson = await formatProjects(
      Object.values(JSON.parse(JSON.stringify(projectsMysql)))
    );
    await hasuraClient.request(insertProjects, {
      objects: projectsJson,
    });
    console.log("Success!");
    console.log("Migrating Project Skills....");
    const projectSkillMysql = await mySqlQuery("SELECT * FROM project_skill");
    const projectSkillJson = await formatProjectSkills(
      Object.values(JSON.parse(JSON.stringify(projectSkillMysql)))
    );
    await hasuraClient.request(insertProjectSkill, {
      objects: projectSkillJson,
    });
    console.log("Success!");
    console.log("Migrating Answers....");
    const answersMysql = await mySqlQuery("SELECT * FROM answers");
    const answersJson = await formatAnswers(
      Object.values(JSON.parse(JSON.stringify(answersMysql)))
    );
    await hasuraClient.request(insertAnswers, {
      objects: answersJson,
    });
    console.log("Success!");
    console.log("Migrating Availibilites....");
    const availabilitiesMysql = await mySqlQuery(
      "SELECT * FROM availabilities"
    );
    const availabilitiesJson = await formatAvailabilities(
      Object.values(JSON.parse(JSON.stringify(availabilitiesMysql)))
    );
    await hasuraClient.request(insertAvailabilities, {
      objects: availabilitiesJson,
    });
    console.log("Success!");
    console.log("Migrating Contacts....");
    const contactsMysql = await mySqlQuery("SELECT * FROM contacts");
    const contactsJson = await cleanTimeStamps(
      Object.values(JSON.parse(JSON.stringify(contactsMysql)))
    );
    await hasuraClient.request(insertContacts, {
      objects: contactsJson,
    });
    console.log("Success!");
    console.log("Migrating Customers....");
    const customersMysql = await mySqlQuery("SELECT * FROM customers");
    const customersJson = await cleanTimeStamps(
      Object.values(JSON.parse(JSON.stringify(customersMysql)))
    );
    await hasuraClient.request(insertCustomers, {
      objects: customersJson,
    });
    console.log("Success!");
    console.log("Migrating Educations....");
    const educationsMysql = await mySqlQuery("SELECT * FROM educations");
    const educationsJson = await cleanTimeStamps(
      Object.values(JSON.parse(JSON.stringify(educationsMysql)))
    );
    await hasuraClient.request(insertEducations, {
      objects: educationsJson,
    });
    console.log("Success!");
    console.log("Migrating Employments....");
    const employmentsMysql = await mySqlQuery("SELECT * FROM employments");
    const employmentsJson = await cleanTimeStamps(
      Object.values(JSON.parse(JSON.stringify(employmentsMysql)))
    );
    await hasuraClient.request(insertEmployments, {
      objects: employmentsJson,
    });
    console.log("Success!");
    console.log("Migrating Languages....");
    const languagesMysql = await mySqlQuery("SELECT * FROM languages");
    const languagesJson = await formatLanguages(
      Object.values(JSON.parse(JSON.stringify(languagesMysql)))
    );
    await hasuraClient.request(insertLanguages, {
      objects: languagesJson,
    });
    console.log("Success!");
    console.log("Migrating Portfolios....");
    const portfoliosMysql = await mySqlQuery("SELECT * FROM portfolios");
    const portfoliosJson = await cleanTimeStamps(
      Object.values(JSON.parse(JSON.stringify(portfoliosMysql)))
    );
    await hasuraClient.request(insertPortfolios, {
      objects: portfoliosJson,
    });
    console.log("Success!");
    console.log("Migrating Profiles....");
    const profilesMysql = await mySqlQuery("SELECT * FROM profiles");
    const profilesJson = await cleanTimeStamps(
      Object.values(JSON.parse(JSON.stringify(profilesMysql)))
    );
    await hasuraClient.request(insertProfiles, {
      objects: profilesJson,
    });
    console.log("Success!");
    console.log("Migrating Project User....");
    const projectUserMysql = await mySqlQuery("SELECT * FROM project_user");
    const projectUserJson = await formatProjectUser(
      Object.values(JSON.parse(JSON.stringify(projectUserMysql)))
    );
    await hasuraClient.request(insertProjectUser, {
      objects: projectUserJson,
    });
    console.log("Success!");
    console.log("Migrating Rates....");
    // const ratesMysql = await mySqlQuery("SELECT * FROM rates");
    // const ratesJson = await cleanTimeStamps(
    //   Object.values(JSON.parse(JSON.stringify(ratesMysql)))
    // );
    // await hasuraClient.request(insertRates, {
    //   objects: ratesJson,
    // });
    console.log("Success!");
    console.log("Migrating User Skills....");
    const userSkillsMysql = await mySqlQuery(
      "SELECT * FROM users_skill LIMIT 5000"
    );
    const userSkillsJson = await formatUserSkills(
      Object.values(JSON.parse(JSON.stringify(userSkillsMysql)))
    );
    await hasuraClient.request(insertUserSkills, {
      objects: userSkillsJson,
    });
    const userSkillsMysqlSecond = await mySqlQuery(
      "SELECT * FROM users_skill LIMIT 5000 OFFSET 5000"
    );
    const userSkillsJsonSecond = await formatUserSkills(
      Object.values(JSON.parse(JSON.stringify(userSkillsMysqlSecond)))
    );
    await hasuraClient.request(insertUserSkills, {
      objects: userSkillsJsonSecond,
    });
    const userSkillsMysqlThird = await mySqlQuery(
      "SELECT * FROM users_skill LIMIT 5000 OFFSET 10000"
    );
    const userSkillsJsonThird = await formatUserSkills(
      Object.values(JSON.parse(JSON.stringify(userSkillsMysqlThird)))
    );
    await hasuraClient.request(insertUserSkills, {
      objects: userSkillsJsonThird,
    });
    const userSkillsMysqlFourth = await mySqlQuery(
      "SELECT * FROM users_skill LIMIT 5000 OFFSET 15000"
    );
    const userSkillsJsonFourth = await formatUserSkills(
      Object.values(JSON.parse(JSON.stringify(userSkillsMysqlFourth)))
    );
    await hasuraClient.request(insertUserSkills, {
      objects: userSkillsJsonFourth,
    });
    console.log("Success!");
    console.log("Migrating Tasks....");
    const tasksMysql = await mySqlQuery("SELECT * FROM tasks");
    const tasksJson = await cleanTimeStamps(
      Object.values(JSON.parse(JSON.stringify(tasksMysql)))
    );
    await hasuraClient.request(insertTasks, {
      objects: tasksJson,
    });
    console.log("Success!");
    console.log("Migrating User Countries....");
    const userCountriesMysql = await mySqlQuery("SELECT * FROM user_countries");
    const userCountriesJson = await cleanTimeStamps(
      Object.values(JSON.parse(JSON.stringify(userCountriesMysql)))
    );
    await hasuraClient.request(insertUserCountries, {
      objects: userCountriesJson,
    });
    console.log("Success!");
    console.log("Migrating Trackers....");
    const trackersMysql = await mySqlQuery("SELECT * FROM trackers");
    const trackersJson = await cleanTimeStamps(
      Object.values(JSON.parse(JSON.stringify(trackersMysql)))
    );
    await hasuraClient.request(insertTrackers, {
      objects: trackersJson,
    });
    console.log("Success!");
    console.log("Migrating Webs....");
    const websMysql = await mySqlQuery("SELECT * FROM webs");
    const websJson = await formatWebs(
      Object.values(JSON.parse(JSON.stringify(websMysql)))
    );
    await hasuraClient.request(insertWebs, {
      objects: websJson,
    });
    console.log("Success!");
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js ~ line 67 ~ run ~ error",
      JSON.stringify(error.message).substr(0, 1000)
    );
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
