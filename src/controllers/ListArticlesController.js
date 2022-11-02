const ListArticlesUseCase = require("../useCases/ListArticlesUseCase");

module.exports = {
  async handle(request, response) {
    const articles = await ListArticlesUseCase.execute();

    if (articles === 0) return response.status(404).send("No content found");

    return response.json(articles);
  }
};