const insertUsers = `mutation ($objects: [users_insert_input!]! = {}) {
    insert_users(objects: $objects) {
      affected_rows
    }
  }`;
module.exports = {
  insertUsers,
};
