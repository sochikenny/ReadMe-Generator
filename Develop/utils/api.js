const axios = require("axios");
const api = {
  getUser() {
    const username = "sochikenny";
    const queryUrl = `https://api.github.com/users/${username}`
    return axios.get(queryUrl);
  }

};

api.getUser();

module.exports = api;
