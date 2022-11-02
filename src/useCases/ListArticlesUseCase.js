const ArticlesRepository = require("../repositories/ArticlesRepository");

function formatResponse(articles) {
  const formattedResponse = articles.map(article => {
    const { author, title, description } = article;

    return { author, title, description };
  });

  return formattedResponse;
}

module.exports = {
  async execute() {
    const articles = await ArticlesRepository.listArticles();

    const formattedResponse = formatResponse(articles);

    return formattedResponse;
  }
};