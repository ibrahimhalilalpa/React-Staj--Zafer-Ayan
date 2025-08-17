const App = () => {
  const insan = {
    ad: "Zafer",
    yas: 34,
    cinsiyet: "Erkek",
  };
  return (
    <div>
      <li>Ad: {insan.ad}</li>
      <li>Yaş: {insan.yas}</li>
      <li>Cinsiyet: {insan.cinsiyet}</li>
    </div>
  );
};

export default App;


/*
📌 ÖZET:
Bu bileşen, bir objenin içerisindeki bilgileri ekrana yazdırır.
Objemiz: { ad: "Zafer", yas: 34, cinsiyet: "Erkek" }
JSX içinde objenin property'lerini gösterir.
Bu örnek, React'ta **object verilerini JSX ile kullanmayı** öğretir.
Sonuç, kullanıcıya profil listesi şeklinde gösterilir.
*/

