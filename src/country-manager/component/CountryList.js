import { useState, useEffect } from "react";
import Country from "./Country";
export default function App() {
  const url = "https://restcountries.com/v3/all";
  let [countries, setCountries] = useState([]);
  let content = countries.map((c) => (
    <Country
      key={c.name.common}
      name={c.name.common}
      flag={c.flags[0]}
      officalName={c.name.official}
      arabicName={c.translations.ara.official}
    />
  ));
  useEffect(() => {
    fetch(url)
      .then((rsp) => rsp.json())
      .then((data) => {
        const dataFiltered = data.filter((c) => c.name.common !== "Israel");
        setCountries(dataFiltered);
      });
  }, []);

  return (
    <div className="country-list">
      <h1>Liste De Pays</h1>
      <div>{content}</div>
    </div>
  );
}
