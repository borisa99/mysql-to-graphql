const nodeFetch = require("node-fetch");
require("dotenv").config();

const fetch = async (data) => {
  const response = await nodeFetch(process.env.API_URL, {
    method: "post",
    body: data,
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length,
      "X-hasura-admin-secret": process.env.API_SECRET,
      "User-Agent": "Node",
    },
  });
  const json = await response.json();
  return json;
};

module.exports = {
  fetch,
};
