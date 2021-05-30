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
const insertQuestions = `mutation ($objects: [questions_insert_input!]! = {}) {
    insert_questions(objects: $objects) {
      affected_rows
    }
  }
  `;
const insertCurrencies = `mutation ($objects: [currencies_insert_input!]! = {}) {
    insert_currencies(objects: $objects) {
      affected_rows
    }
  }  
  `;
const insertBadUrls = `mutation ($objects: [bad_urls_insert_input!]! = {}) {
    insert_bad_urls(objects: $objects) {
      affected_rows
    }
  } 
  `;
const insertContactUs = `mutation ($objects: [contact_us_insert_input!]! = {}) {
    insert_contact_us(objects: $objects) {
      affected_rows
    }
  } 
  `;
const insertCountries = `mutation ($objects: [countries_insert_input!]! = {}) {
    insert_countries(objects: $objects) {
      affected_rows
    }
  } 
  `;
module.exports = {
  insertUsers,
  insertSkills,
  insertQuestions,
  insertCurrencies,
  insertBadUrls,
  insertContactUs,
  insertCountries,
};
