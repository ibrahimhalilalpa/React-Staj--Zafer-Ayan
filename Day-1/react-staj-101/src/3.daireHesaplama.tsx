import { useState } from "react";

// Dairenin alan ve çevresini hesaplama uygulaması
const App = () => {
  // yarıçap için state, başlangıç değeri 42
  const [yaricap, setYaricap] = useState(42);

  // alan ve çevre değerlerini tutacak state'ler
  const [alan, setAlan] = useState(0);
  const [cevre, setCevre] = useState(0);

  return (
    <>
      {/* Butona basıldığında alan ve çevre hesaplanır */}
      <button
        onClick={() => {
          setAlan(3 * yaricap * yaricap); // π ≈ 3
          setCevre(2 * 3 * yaricap); // 2πr formülü
        }}
      >
        Daire alanı hesapla
      </button>

      {/* Sonuçların ekranda gösterilmesi */}
      <h1>Yarıçap: {yaricap}</h1>
      <h1>Alan: {alan}</h1>
      <h1>Çevre: {cevre}</h1>
    </>
  );
};

export default App;

/*
ÖZET:
Bu uygulama, dairenin alanını ve çevresini hesaplar.
Kullanıcı butona tıkladığında formüller çalışır ve sonuçlar ekrana yazdırılır.
Bu örnek, React bileşenlerinde birden fazla state’in
aynı anda nasıl yönetilebileceğini ve kullanıcı etkileşimlerine göre
nasıl güncellenebileceğini gösterir.
*/