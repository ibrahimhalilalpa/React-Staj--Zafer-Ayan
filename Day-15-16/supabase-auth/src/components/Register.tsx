import React from 'react'
import { supabase } from '../supabase';

const App = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        //Tarayıcı tarafından formun submit edilmesini engelle
        e.preventDefault();
        //Formdan gelen verileri al
        // Form içindeki inputların name'leri ile formData'dan verileri al
        const formData = new FormData(e.currentTarget);
        // email ve password parametrelerini formData'dan alıyoruz (get ile)
        const email = formData.get("email");
        const password = formData.get("password");
        // Supabase ile kullanıcı kaydı oluştur
        // Supabase auth.signUp metodunu kullanarak kullanıcı kaydı oluştur
        // createClient ile oluşturulan supabase nesnesini kullanarak auth.signUp metodunu
        // çağırıyoruz. Bu metod, email ve password parametrelerini alır.
        const { data, error } = await supabase.auth.signUp({
            email: email as string,
            password: password as string,
        });
        console.log(data, error);
        alert("Kayıt işlemi başarılı! Lütfen e-posta adresinizi kontrol edin.");
    };


    return (
        <form className='p-4' onSubmit={handleSubmit}>
            <h1 className=''>Register</h1>
            <input type="text" name="email" id="email" placeholder='email' defaultValue={"ozcanzaferayan@gmail.com"} />
            <input type="password" name="password" id="password" placeholder='password' defaultValue={"passw0rd!"} />
            <br />
            <button>Kayıt ol</button>

        </form>
    )
}

export default App