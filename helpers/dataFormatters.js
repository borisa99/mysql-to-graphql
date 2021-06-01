const { cleanTimeStamps } = require("./other");
const { hasuraClient } = require("../hasuraClient");
const { getUserById } = require("../graphql/queries");
const moment = require("moment");
const users = require("../jsonData/users.json");
const _ = require("lodash");
const formatUsersArray = async (users) => {
  const usersFormated = await cleanTimeStamps(users);

  await usersFormated.forEach((user) => {
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
    delete user.manager_rating;
    delete user.ratings;
    if (!user.birth) {
      delete user.birth;
    }
  });
  return usersFormated;
};
const formatContactUs = async (data) => {
  await data.forEach((obj) => {
    obj.mobile = obj.phone;
    delete obj.phone;
  });
  return data;
};
const formatCountries = async (countries) => {
  const countriesFormated = await cleanTimeStamps(countries);

  await countriesFormated.forEach((country) => {
    delete country.capital;
    delete country.capital;
    delete country.citizenship;
    delete country.country_code;
    delete country.currency_sub_unit;
    delete country.currency_decimals;
    delete country.full_name;
    delete country.iso_3166_2;
    delete country.iso_3166_3;
    delete country.region_code;
    delete country.sub_region_code;
    if (country.deleted_at) {
      delete country.deleted_at;
    }
  });
  return countriesFormated;
};

const formatProjects = async (projects) => {
  const projectsFormated = await cleanTimeStamps(projects);

  await projectsFormated.forEach((project, index) => {
    project.duration_days = project.estimated_duration;
    project.hours_day = project.expected_hours;
    project.external_id = JSON.stringify(project.external_id);

    if (project.starting_at instanceof Date) {
      project.start_at = project.starting_at;
    }
    if (!project.work_location) {
      delete project.work_location;
    }
    if (!project.special) {
      delete project.special;
    }
    if (!project.customer_id) {
      delete project.customer_id;
    }
    if (!project.updated_by) {
      delete project.updated_by;
    }
    if (!project.referer_id) {
      delete project.referer_id;
    }
    if (!project.duration_days) {
      delete project.duration_days;
    }
    if (!project.hours_day) {
      delete project.hours_day;
    }
    if (!project.budget_min) {
      delete project.budget_min;
    }
    if (!project.budget_min) {
      delete project.budget_max;
    }
    if (!project.status) {
      delete project.status;
    }

    delete project.starting_at;
    delete project.date_time;
    delete project.candidates;
    delete project.customer_location;
    delete project.customer_name;
    delete project.customer_rating;
    delete project.customer_ratings;
    delete project.expected_hours;
    delete project.estimated_duration;
  });
  return projectsFormated;
};
const formatProjectSkills = async (projectSkills) => {
  await projectSkills.forEach((projectSkill) => {
    if (!projectSkill.created_at) {
      delete projectSkill.created_at;
    }
    if (!projectSkill.updated_at) {
      delete projectSkill.updated_at;
    }
    if (!projectSkill.deleted_at) {
      delete projectSkill.deleted_at;
    }
  });
  return projectSkills;
};
const formatAnswers = async (answers) => {
  await answers.forEach((answer) => {
    if (!answer.created_at) {
      delete answer.created_at;
    }
    if (!answer.updated_at) {
      delete answer.updated_at;
    }
    answer.user_id = parseInt(answer.answer.split(":")[1].split(";")[0]);
    if (!answer.deleted_at) {
      delete answer.deleted_at;
    }
    delete answer.deleted_at;
  });
  // await answers.filter(async (answer) => {
  //   const response = await hasuraClient.request(getUserById, {
  //     id: answer.user_id,
  //   });

  //   const isTrue = !(
  //     !answer.user_id ||
  //     !response.users[0] ||
  //     answer.id === 632 ||
  //     answer.id === 633 ||
  //     answer.id === 634 ||
  //     answer.id === 635
  //   );

  //   return isTrue;
  // });
  const answersFiltered = await answers.filter(async (answer, index) => {
    const user = _.find(users, function (user) {
      return user.id == answer.user_id;
    });
    if (!user) {
      console.log(answer.id + ",");
    }
    // if (!answer.user_id) {
    //   console.log(answer.id + ",");
    // }
    return answer.user_id ? true : false;
  });
  return answersFiltered;
};
const formatAvailabilities = async (availabilities) => {
  await availabilities.forEach((availability) => {
    if (!availability.created_at) {
      delete availability.created_at;
    }
    if (!availability.updated_at) {
      delete availability.updated_at;
    }
    availability.when = `[${availability.from_date},${availability.to_date}]`;
    delete availability.deleted_at;
    delete availability.from_date;
    delete availability.to_date;
  });
  return availabilities;
};
const formatLanguages = async (languages) => {
  const languagesFormated = await cleanTimeStamps(languages);
  await languagesFormated.forEach((language) => {
    language.language = language.name;
    language.user_id = 88;

    delete language.name;
    delete language.iso;
  });
  return languagesFormated;
};
const formatProjectUser = async (array) => {
  const arrayFormated = await cleanTimeStamps(array);
  await arrayFormated.forEach((obj) => {
    delete obj.id;
  });
  return arrayFormated;
};
const formatUserSkills = async (userSkills) => {
  const userSkillsFormated = await cleanTimeStamps(userSkills);
  await userSkillsFormated.forEach((skill) => {
    if (!skill.started_at) {
      delete skill.started_at;
    } else {
      const date = moment(skill.started_at, "YYYY-MM-DD", true);
      if (!date.isValid()) {
        delete skill.started_at;
      }
    }
  });
  return userSkillsFormated;
};
const formatWebs = async (webs) => {
  const websFormated = await cleanTimeStamps(webs);
  await websFormated.forEach((web) => {
    delete web.link_url;
    delete web.username;
    delete web.main;
    delete web.exists;
    if (!web.contacted_by) {
      delete web.contacted_by;
    }
  });
  // const websFiltered = await websFormated.filter(async (web, index) => {
  //   const user = _.find(users, function (user) {
  //     return user.id == web.user_id;
  //   });
  //   if (!user) {
  //     console.log(web.id + ",");
  //   }
  //   return true;
  // });
  return websFormated;
};

const formatRates = async (rates) => {
  const ratesFormated = await cleanTimeStamps(rates);
  await ratesFormated.forEach((skill) => {
    if (parseInt(skill.minimum_hour)) {
      skill.minimum_hour = parseInt(skill.minimum_hour).toFixed(0);
    } else {
      delete skill.minimum_hour;
    }
    if (parseFloat(skill.hourly_rate)) {
      skill.hourly_rate = parseFloat(skill.hourly_rate).toFixed(2);
    } else {
      delete skill.hourly_rate;
    }
    if (parseFloat(skill.hourly_rate_max)) {
      skill.hourly_rate_max = parseFloat(skill.hourly_rate_max).toFixed(2);
    } else {
      delete skill.hourly_rate_max;
    }
    if (!skill.type) {
      delete skill.type;
    }
  });

  return ratesFormated;
};
module.exports = {
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
  formatRates,
};
