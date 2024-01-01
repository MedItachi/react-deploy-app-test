import { useState } from "react";

const DAYS = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];
export default function DayOfWeek() {
  const [day, setDay] = useState(new Date().getDay());
  /* 
  * une variable d'état, ici day, est une variable dont dépends l'affichage au la réalisation d'un composant React.
  *Si une variable d'état change de valeur,Il sera nécessaire
  *d'aviserr React pour qu'il mette à jour l'affichage.
  *du composant ,ce qu'on appelle 'Rendering' ou 'Re-rendering'.
  *Il faudra donc 'repaint' le composant.
  *Il sera donc nécessaire d'interagir avec React
  *a React .Nous utilisons ainsi ce qu'on appelle un 'Hook' qui est une fonction
  *Dans ce cas ,la nous utilisons le "Hook" useSatate();
  *d'état (valeur passée en paramètre) et retourne un tableau de deux éléments:
    * -la valeur de la variable d'état
    * -une fonction qui permet de modifier la valeur de la variable d'état
    * Pour récuperé la valeur de la variable  Il suffit d'appler la fonction useState()

  */
  function clickHandler() {
    //setDay((day + 1) % 7);
    setDay((day) => (day < 6 ? day + 1 : 0));
  }
  return (
    <div className="day-of-week">
      <span>Jour de la semaine: </span>
      <span>{DAYS[day]}</span>
      <button onClick={clickHandler}>Suivant</button>
    </div>
  );
}
