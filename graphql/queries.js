const getUsers = `query {
    users (limit:3){
      name
    }
  }`;

const getUserById = `query ($id:Int!){
    users( where:{ id:{_eq:$id } }){
      name
    }
  }`;

module.exports = {
  getUsers,
  getUserById,
};
