const ListArticlesUseCase = require("./ListArticlesUseCase");

test("Should return all articles", async () => {

  const response = await ListArticlesUseCase.execute();

  expect(response[0]).toHaveProperty("author", "title", "description");
});