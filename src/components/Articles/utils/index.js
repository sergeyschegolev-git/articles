export const filterByDescription = (string) => (articles) => articles.filter((article) => !string || article.description.includes(string));
export const filterByAuthor = (author) => (articles) => articles.filter((article) => !author || article.author === author);
