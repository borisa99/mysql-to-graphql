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
module.exports = {
  formatUsersArray,
  formatContactUs,
  formatCountries,
};
