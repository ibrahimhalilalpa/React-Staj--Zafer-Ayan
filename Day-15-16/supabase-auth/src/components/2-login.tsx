import React from 'react'
import { supabase } from './subabase';

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
        // Supabase ile kullanıcı girişi yap
        // Supabase auth.signInWithPassword metodunu kullanarak kullanıcı girişi yap
        // createClient ile oluşturulan supabase nesnesini kullanarak auth.signInWithPassword metodunu
        // çağırıyoruz. Bu metod, email ve password parametrelerini alır.
        // Eğer bir hata oluşursa error değişkenine atanır.
        // Eğer hata yoksa, kullanıcı girişi yapmış olur.

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email as string,
            password: password as string,
        });
        console.log(data, error);
        alert("Giriş işlemi başarılı!");
    };


    return (
        <form className='p-4' onSubmit={handleSubmit}>
            <h1 className=''>Giriş Yap</h1>
            <input type="text" name="email" id="email" placeholder='email' defaultValue={"ibrahimhalilalpa@gmail.com"} />
            <input type="password" name="password" id="password" placeholder='password' defaultValue={"alpa1903"} />
            <br />
            <button>Giriş Yap</button>

        </form>
    )
}

export default App