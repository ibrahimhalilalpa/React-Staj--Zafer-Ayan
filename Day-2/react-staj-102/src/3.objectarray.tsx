const App = () => {
  const insanlar = [
    { ad: "Zafer", yas: 34, cinsiyet: "Erkek" },
    { ad: "Gökay", yas: 21, cinsiyet: "Erkek" },
  ];

  return (
    <div>
      {insanlar.map((insan) => (
        <li>
          {insan.ad} {insan.yas}
        </li>
      ))}
    </div>
  );
};

export default App;


/*
📌 ÖZET:
Bu bileşen, array içinde birden fazla objeyi ekrana yazdırır.
Her objede ad ve yaş bilgisi bulunur.
Array of objects yapısını React içinde map() ile render etmeyi gösterir.
Sonuç, kullanıcıya kişiler ve yaşları şeklinde liste olarak gösterilir.
*/

