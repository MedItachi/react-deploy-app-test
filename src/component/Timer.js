import { useEffect, useState } from "react";

function getTime() {
  const date = new Date();
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
}

export default function Timer() {
  let [time, setTime] = useState(getTime());
  /*
   * useEffect() est appelé à chaque fois que le composant est rendu
   * et donc à chaque fois que le state est modifié
   * pour éviter cela, on peut utiliser un tableau vide en deuxième paramètre
   * tout code d'un composant React nécessitant d'etre
   * exécuté une seule fois lors du premier rendring (et pas à chaque fois que le state est modifié)
   *re-rendering pourait créer un effet secondaire dans le cas
   *contraire.Pour assurer son execution une seule fois, on doit
   *le passer comme paramètre à useEffect() sous forme d'un tableau vide
   *Néanmoins, si on veut que le code soit exécuté à chaque fois que le state est modifié
   *on doit passer le state comme paramètre à useEffect(
   */

  useEffect(() => {
    setInterval(() => {
      setTime(getTime());
    }, 1000);
  }, []);

  return (
    <div className="time">
      Heure actuelle: {time.hours}h {time.minutes}m {time.seconds}s
    </div>
  );
}
