const insertUsers = `mutation ($objects: [users_insert_input!]! = {}) {
    insert_users(objects: $objects) {
      affected_rows
    }
  }`;

const insertSkills = `mutation ($objects: [skills_insert_input!]! = {}) {
    insert_skills(objects: $objects) {
      affected_rows
    }
  }
  `;
module.exports = {
  insertUsers,
  insertSkills,
};
