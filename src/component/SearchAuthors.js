//Search
import { useState } from "react";
import authors from "../data/authors";
import Card from "./Card";

export default function SearchAuthors() {
  let [keyword, setKeyword] = useState({ name: "", technology: "" });

  let result = authors.filter(
    (author) =>
      author.name.includes(keyword.name) &&
      author.technology.includes(keyword.technology)
  );
  let cards = result.map((author) => <Card key={author.id} {...author} />);

  function handleChange(event) {
    let inputName = event.target.name;
    let inputValue = event.target.value.toLowerCase();
    setKeyword((os) => ({ ...os, [inputName]: inputValue }));
  }
  return (
    <div>
      <fieldset>
        <legend>Recherche d'auteurs</legend>
        <div>
          <label>Nom</label>
          <input type="text" size={20} name="name" onChange={handleChange} />
        </div>
        <div>
          <label>Technologie</label>
          <input
            type="text"
            size={20}
            name="technology"
            onChange={handleChange}
          />
        </div>
      </fieldset>

      <div className="authors-list">{cards}</div>
    </div>
  );
}
