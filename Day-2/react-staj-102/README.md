

# 🌀 React State ve API / Array / Object Uygulamaları (Day-2)

Bu proje, **React öğrenme sürecinde Day-2 mini uygulamalarını** kapsar.  
Temel konular: **array, object, array of objects, useEffect ile API fetch** ve state yönetimi.

---

## 🚀 Başlangıç

Projeyi kendi bilgisayarında çalıştırmak için:

```bash
npm install
npm run dev
```

> Tarayıcıda [http://localhost:5173](http://localhost:5173) adresine giderek uygulamayı görüntüleyebilirsin.

---

## 📂 Proje Yapısı

- `array.tsx` → Array içerisindeki isimleri liste olarak gösterir.
    
- `object.tsx` → Object içindeki bilgileri ekrana yazar.
    
- `objectarray.tsx` → Array of objects yapısını liste olarak render eder.
    
- `placeholder.tsx` → JSONPlaceholder API’den kullanıcı verilerini çekip ekrana yazdırır.
    
- `App.tsx` → Star Wars API’den türleri çeker ve liste olarak gösterir.


---

## 🧩 Uygulama Açıklamaları

### 🔢 1. Array (`array.tsx`)

Array elemanlarını JSX ile render etmeyi gösterir.  
👉 Kullanıcıya basit bir liste olarak sunulur.

### ⬛ 2. Object (`object.tsx`)

Objeyi JSX ile ekrana yazdırır.  
👉 React’ta object kullanımı ve property erişimi öğretir.

### ⚪ 3. Object Array (`objectarray.tsx`)

Array of objects yapısını render eder.  
👉 Birden fazla objeyi map ile ekrana göstermek için ideal.

### ⚡ 4. API Kullanımı - JSONPlaceholder (`placeholder.tsx`)

API’den kullanıcı verisi çekilir ve ekrana yazdırılır.  
👉 useEffect + fetch + state yönetimi mantığını gösterir.

### 🌌 5. API Kullanımı - Star Wars (`App.tsx`)

Star Wars API’den türleri çekip liste halinde gösterir.  
👉 API’den veri çekme ve liste render mantığı pekiştirilir.

---

## 🎯 Öğrenilen Temel React Konuları

- `useState` ile **state yönetimi**
    
- `useEffect` ile **component mount sırasında veri çekme**
    
- JSX içinde **array ve object verilerini render etme**
    
- **API fetch ve asenkron veri kullanımı**
    
- State değiştikçe UI’nin **otomatik yeniden render edilmesi**


---

## ✨ Sonuç

Bu proje, Day-2 mini uygulamaları ile React’ta array, object ve API kullanımını öğretir.  
Her dosya bağımsızdır ve **state ile veri yönetimi mantığını pekiştiren küçük React örnekleridir**. 🚀

## 🛠️ Not

Bu proje **React + TypeScript + Vite** şablonu kullanılarak oluşturulmuştur.  
Varsayılan Vite README’sinde bulunan ESLint ve yapılandırma bilgileri için bkz: Vite Dokümantasyonu.