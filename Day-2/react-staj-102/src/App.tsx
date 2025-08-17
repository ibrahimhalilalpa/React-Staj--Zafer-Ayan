import { useEffect, useState } from "react";

const App = () => {
  const [turler, setTurler] = useState([]);

  useEffect(() => {
    fetch("https://swapi.info/api/species")
      .then((res) => res.json())
      .then((turler) => setTurler(turler));
  }, []);

  return (
    <ul>
      {!turler.length && <h1>Yükleniyor...</h1>}
      {turler.map((tur) => (
        <li>{tur.name}</li>
      ))}
    </ul>
  );
};

export default App;


/*
📌 ÖZET:
Bu bileşen, Star Wars API'den türleri çeker ve ekrana listeler.
useEffect hook'u fetch işlemini başlatır ve useState ile state güncellenir.
Loading sırasında "Yükleniyor..." mesajı gösterilir.
Bu örnek, **API verisi çekme + state güncelleme + liste render** mantığını gösterir.
*/

