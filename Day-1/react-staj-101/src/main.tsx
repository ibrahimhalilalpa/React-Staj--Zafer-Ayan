import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// React uygulamasının giriş noktası
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* App bileşeni render edilir */}
    <App />
  </StrictMode>
);


/*
ÖZET:
main.tsx, React uygulamasının başlangıç dosyasıdır.
App bileşeni DOM’a bağlanarak ekranda çalışır hale gelir.
Bu dosya, React projelerinde uygulamanın "giriş noktası" olduğunu gösterir.
*/