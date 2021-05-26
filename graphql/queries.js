const getUsers = `query {
    users (limit:3){
      name
    }
  }`;

module.exports = {
  getUsers,
};
