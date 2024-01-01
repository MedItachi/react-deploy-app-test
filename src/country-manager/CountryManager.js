import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./component/Main";
import Home from "./component/Home";
import AddCountry from "./component/AddCountry";
import CountryList from "./component/CountryList";
import "./CountryManager.css";

export default function CountryManager() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="country-list" element={<CountryList />} />
            <Route path="add-country" element={<AddCountry />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
