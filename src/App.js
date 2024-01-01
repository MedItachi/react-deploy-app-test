import "./css/app.css";
import Header from "./component/Header";
import TextField from "./component/TextField";
import ButtonPanel from "./component/ButtonPanel";
import AuthorsList from "./component/AuthorsList";
import DayOfWeek from "./component/DayOfWeek";
import Timer from "./component/Timer";
import SearchAuthors from "./component/SearchAuthors";
import CountryList from "./component/CountryList";
function App() {
  return (
    <>
      <Header title="Application React -Header" />
      <TextField label="Nom" size={30} />
      <ButtonPanel labels={["Valider", "Chercher", "Annuler"]} />
      <DayOfWeek />
      <Timer />
      {/* <AuthorsList /> */}
      {/* <SearchAuthors /> */}
      <CountryList />
    </>
  );
}

export default App;
