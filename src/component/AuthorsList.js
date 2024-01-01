import authors from "../data/authors";
import Card from "./Card";

export default function AuthorsList() {
  let cards = authors.map((author) => <Card key={author.id} {...author} />);
  return <div className="authors-list">{cards}</div>;
}
