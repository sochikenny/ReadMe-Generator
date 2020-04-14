const axios = require("axios");
const api = {
  getUser() {
    const username = "sochikenny";
    const queryUrl = `https://api.github.com/users/${username}`
    axios.get(queryUrl).then(function (res) {
      //console.log(res.data);
      const user = res.data

      return user;
    });
  }

};

api.getUser();

module.exports = api;
