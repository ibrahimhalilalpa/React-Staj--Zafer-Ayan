import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((kullanicilar) => setUsers(kullanicilar));
  }, []);

  return (
    <>
      {!users.length && <h1>Loading</h1>}
      {users.map((user) => (
        <h1>{user.name}</h1>
      ))}
    </>
  );
};

export default App;


/*
📌 ÖZET:
Bu bileşen, JSONPlaceholder API'den kullanıcı verilerini çeker.
useEffect hook'u ile fetch işlemi yapılır ve useState ile state güncellenir.
Loading sırasında kullanıcıya "Loading" mesajı gösterilir.
Veriler geldiğinde kullanıcı isimleri ekrana yazdırılır.
Bu örnek, React'ta **useEffect + fetch + state yönetimi** mantığını gösterir.
*/

