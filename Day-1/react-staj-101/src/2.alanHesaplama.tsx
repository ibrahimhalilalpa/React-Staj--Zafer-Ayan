import { useState } from "react";

// Kare alan hesaplama uygulaması
const App = () => {
  // kenar uzunluğu için state (başlangıç değeri 4)
  const [kenar, setKenar] = useState(4);

  // hesaplanan alan değeri için state (başlangıç değeri 0)
  const [alan, setAlan] = useState(0);

  return (
    <>
      {/* Butona basınca kenar * kenar formülüyle kare alanı hesaplanır */}
      <button onClick={() => setAlan(kenar * kenar)}>
        Kare alan hesapla
      </button>

      {/* Sonuçların ekranda gösterilmesi */}
      <h1>Kenar: {kenar}</h1>
      <h1>Alan: {alan}</h1>
    </>
  );
};

export default App;

/*
ÖZET:
Bu uygulama, kare alanı hesaplayarak state kullanımını örnekler.
Kullanıcı butona bastığında kenar uzunluğuna göre alan hesaplanır
ve ekranda gösterilir. Böylece, React'ta olayların (onClick) 
ve state güncellemelerinin nasıl çalıştığı net bir şekilde görülür.
*/