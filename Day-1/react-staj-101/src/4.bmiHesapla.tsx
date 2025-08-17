import { useState } from "react";

// BMI (Vücut Kitle İndeksi) hesaplama uygulaması
const App = () => {
  const [kg, setKg] = useState(120); // kilo (kg)
  const [boy, setBoy] = useState(1.73); // boy (metre)
  const [bmi, setBmi] = useState(0); // hesaplanan BMI değeri
  const [sonuc, setSonuc] = useState(""); // değerlendirme sonucu

  return (
    <>
      {/* Butona basıldığında BMI hesaplanır */}
      <button
        onClick={() => {
          const bmi = kg / (boy * boy); // Formül: kg / (boy²)
          setBmi(bmi);

          // BMI değerine göre sınıflandırma
          if (bmi < 18.5) {
            setSonuc("Zayıf");
          } else if (bmi < 24.9) {
            setSonuc("Normal insan");
          } else if (bmi < 29.9) {
            setSonuc("Fazla kilolu");
          } else if (bmi < 34.9) {
            setSonuc("1. derecede obezite");
          } else if (bmi < 39.9) {
            setSonuc("2. derecede obezite");
          } else {
            setSonuc("3. derecede obezite");
          }
        }}
      >
        BMI hesapla
      </button>

      {/* Sonuçların ekranda gösterilmesi */}
      <h1>Boy: {boy}</h1>
      <h1>Kilo: {kg}</h1>
      <h1>BMI: {bmi}</h1>
      <h1>Sonuç: {sonuc}</h1>
    </>
  );
};

export default App;

/*
ÖZET:
Bu uygulama, kullanıcının boy ve kilosuna göre BMI (vücut kitle indeksi) hesaplar.
Sonuç, farklı aralıklara göre yorumlanarak kullanıcıya gösterilir.
Bu örnek, React’te hesaplamaların state’e nasıl yansıtıldığını
ve koşullu ifadelerle (if-else) kullanıcıya farklı çıktılar sunulabileceğini anlatır.
*/
