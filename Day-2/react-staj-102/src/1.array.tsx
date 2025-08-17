const App = () => {
  const isimler = ["Fatih", "Mehmet", "Tuğçe"];

  return (
    <ul>
      {isimler.map((isim) => (
        <li>{isim}</li>
      ))}
    </ul>
  );
};

export default App;


/*
📌 ÖZET:
Bu bileşen, bir array içerisindeki isimleri liste olarak ekrana yazdırır.
İsimler ["Fatih", "Mehmet", "Tuğçe"] dizisinde saklanır.
React'ta JSX içinde map() kullanarak array elemanlarını render etmeyi gösterir.
Sonuç, kullanıcıya basit bir liste şeklinde gösterilir.
*/