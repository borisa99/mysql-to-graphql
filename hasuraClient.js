const { GraphQLClient } = require("graphql-request");
require("dotenv").config();

const hasuraClient = new GraphQLClient(process.env.API_URL, {
  headers: {
    "Content-Type": "application/json",
    "X-hasura-admin-secret": process.env.API_SECRET,
  },
});

module.exports = {
  hasuraClient,
};
