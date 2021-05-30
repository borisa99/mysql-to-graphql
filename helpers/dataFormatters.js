const formatUsersArray = async (users) => {
  await users.forEach((user) => {
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
  });
  return users;
};
const formatContactUs = async (data) => {
  await data.forEach((obj) => {
    obj.mobile = obj.phone;
    delete obj.phone;
  });
  return data;
};
const formatCountries = async (countries) => {
  await countries.forEach((country) => {
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
    delete country.deleted_at;
  });
  return countries;
};

const formatProjects = async (projects) => {
  await projects.forEach((project) => {
    if (project.starting_at instanceof Date) {
      project.start_at = project.starting_at;
    }
    if (!project.work_location) {
      delete project.work_location;
    }
    if (!project.special) {
      delete project.special;
    }
    project.duration_days = project.estimated_duration;
    project.hours_day = project.expected_hours;
    project.external_id = JSON.stringify(project.external_id);
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
  return projects;
};
const formatProjectSkills = async (projectSkills) => {
  await projectSkills.forEach((projectSkill) => {
    if (!projectSkill.created_at) {
      delete projectSkill.created_at;
    }
    if (!projectSkill.updated_at) {
      delete projectSkill.updated_at;
    }
    delete projectSkill.deleted_at;
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
    delete answer.deleted_at;
  });
  return answers;
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
module.exports = {
  formatUsersArray,
  formatContactUs,
  formatCountries,
  formatProjects,
  formatProjectSkills,
  formatAnswers,
  formatAvailabilities,
};
