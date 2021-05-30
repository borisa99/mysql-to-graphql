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
module.exports = {
  formatUsersArray,
};
