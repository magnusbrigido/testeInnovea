const axios = require("axios");

module.exports = {
  async get(apiURL) {
    return await axios.get(apiURL);
  }
};