import { useState } from "react";

// rafce → React Arrow Function Component Export (snippet kısayolu)
// Basit bir sayaç uygulaması
const App = () => {
  // useState ile "sayi" adında bir state tanımlıyoruz, başlangıç değeri 42
  // setSayi → sayi state'ini güncellemek için kullanılan fonksiyon
  //usss 
  const [sayi, setSayi] = useState(42);

  return (
    <>
      {/* Ekrana mevcut sayıyı yazdırıyoruz */}
      <h1>Sayı: {sayi}</h1>

      {/* Butona tıklandığında sayi 1 artar */}
      <button onClick={() => setSayi(sayi + 1)}>Arttır</button>

      {/* Butona tıklandığında sayi 1 azalır */}
      <button onClick={() => setSayi(sayi - 1)}>Azalt</button>
    </>
  );
};

export default App;

/*
ÖZET:
Bu bileşen, React'in useState hook'unu kullanarak bir sayı değerini yönetir.
Başlangıçta sayi = 42’dir. Kullanıcı "Arttır" veya "Azalt" butonuna tıkladığında
setSayi fonksiyonu çağrılır ve state güncellenir. State değişince bileşen yeniden render edilir
ve ekrandaki sayı anlık olarak güncellenmiş olur.
*/
