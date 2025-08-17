


# 🌀 React State ve Hesaplama Uygulamaları

Bu proje, **React öğrenme sürecinde** temel konuları (state yönetimi, event handling, component mantığı) eğlenceli örneklerle pekiştirmek için hazırlanmıştır.  
Her dosya farklı bir mini uygulama içerir ve `useState` hook’unun gücünü basit ama etkili senaryolarla gösterir.  

---

## 🚀 Başlangıç

Projeyi kendi bilgisayarında çalıştırmak için:

```bash
# Bağımlılıkları yükle
npm install

# Projeyi başlat
npm run dev
```

> Ardından tarayıcıda [http://localhost:5173](http://localhost:5173) adresine giderek uygulamayı görüntüleyebilirsin.

---

## 📂 Proje Yapısı

- `main.tsx` → React uygulamasının giriş noktasıdır. `App` bileşeni buradan DOM’a bağlanır.
    
- `App.jsx` → Mizahi bir “Ne zaman öleceksin testi” uygulamasıdır.
    
- `stategiris.tsx` → Basit sayaç örneği. State mantığını kavramak için ideal.
    
- `alanHesaplama.tsx` → Kare alanı hesaplayan mini uygulama.
    
- `daireHesaplama.tsx` → Dairenin alanını ve çevresini hesaplar.
    
- `bmiHesapla.tsx` → Boy ve kiloya göre BMI hesaplayan uygulama.
    

---

## 🧩 Uygulama Açıklamaları

### 🔢 1. Sayaç (`stategiris.tsx`)

Kullanıcı butonlara tıkladığında sayı artar veya azalır.  
Bu örnek, **state güncellemenin ekrana anında yansımasını** gösterir.  
👉 React’ın `useState` hook’unu anlamanın en kısa yolu.

---

### ⬛ 2. Kare Alan Hesaplama (`alanHesaplama.tsx`)

Kenar uzunluğu üzerinden alanı hesaplar.  
👉 React’te **event handling (onClick)** ve **state güncelleme** nasıl çalışır, pratik bir şekilde öğrenilir.

---

### ⚪ 3. Daire Hesaplama (`daireHesaplama.tsx`)

Dairenin hem **alanını** hem de **çevresini** hesaplar.  
👉 Aynı bileşende **birden fazla state** yönetmenin mantığını öğretir.

---

### ⚖️ 4. BMI Hesaplama (`bmiHesapla.tsx`)

Boy ve kilo üzerinden BMI hesaplar, sonucu ise kategorilere ayırarak kullanıcıya gösterir.  
👉 Burada koşullu ifadelerle (`if-else`) **farklı çıktılar** vermeyi öğrenirsin.  
Sonuç, sadece sayı değil, aynı zamanda bir yorumdur:  
“Zayıf”, “Normal insan”, “Fazla kilolu” vb.

---

### ☠️ 5. Ne Zaman Öleceksin Testi (`App.jsx`)

Kullanıcının yaşına ve cinsiyetine göre kalan yaşam süresini hesaplarken biraz da mizah katar.  
👉 State, event handling ve koşullu mantık **eğlenceli bir senaryo** üzerinden öğretilir.

---

## 🎯 Öğrenilen Temel React Konuları

- `useState` hook’u ile **state yönetimi**
    
- **Event handling** (butonlara tıklama gibi kullanıcı etkileşimleri)
    
- State değiştikçe UI’nin **otomatik yeniden render edilmesi**
    
- Bir bileşende **birden fazla state kullanımı**
    
- **Koşullu ifadeler** ile farklı çıktılar üretmek
    
- React uygulamasının **giriş dosyası (main.tsx)** mantığı


---

## ✨ Sonuç

Bu proje, React öğrenmeye yeni başlayanlar için temel kavramları eğlenceli örneklerle öğretmeyi amaçlar.  
Her dosya bağımsız bir mini uygulamadır ve state mantığını daha iyi kavramak için oynayabileceğin küçük birer “React oyuncağı” gibidir. 🚀

## 🛠️ Not

Bu proje **React + TypeScript + Vite** şablonu kullanılarak oluşturulmuştur.  
Varsayılan Vite README’sinde bulunan ESLint ve yapılandırma bilgileri için bkz: Vite Dokümantasyonu.