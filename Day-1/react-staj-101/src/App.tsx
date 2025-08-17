import { useState } from "react";

// Mizahi bir "yaşam süresi" hesaplama uygulaması
const App = () => {
  const [yas, setYas] = useState(42); // yaş bilgisi
  const [cinsiyet, setCinsiyet] = useState("erkek"); // cinsiyet bilgisi
  const [sonuc, setSonuc] = useState(0); // kalan yıl bilgisi

  return (
    <>
      <h1>Ne zaman öleceksin testi</h1>

      {/* Butona basıldığında ortalama yaşam süresine göre kalan yıl hesaplanır */}
      <button
        onClick={() => {
          if (cinsiyet === "erkek") {
            setSonuc(75 - yas); // Erkekler için ortalama ömür: 75
          } else {
            setSonuc(80 - yas); // Kadınlar için ortalama ömür: 80
          }
        }}
      >
        Hesapla
      </button>

      {/* Sonuçların ekranda gösterilmesi */}
      <h1>Yaş: {yas}</h1>
      <h1>Cinsiyet: {cinsiyet}</h1>
      <h1>Sonuç: {sonuc} yıl zamanın kaldı, hemen React öğren!</h1>
    </>
  );
};

export default App;


/*
ÖZET:
Bu uygulama, yaş ve cinsiyete göre kalan yaşam süresini mizahi bir dille hesaplar.
Sonuç, kullanıcıya eğlenceli bir şekilde gösterilir.
Bu örnek, React'ın state yönetimi ve olay işleme mantığını 
basit ama dikkat çekici bir senaryo üzerinden anlatır.
*/
