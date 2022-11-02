const provider = require("../providers/AxiosProvider");

module.exports = {
  async listArticles() {
    const apiURL = `https://newsapi.org/v2/everything?q=keyword&apiKey=${process.env.API_KEY}`;

    const { data } = await provider.get(apiURL);

    return data.articles;
  }
};