import { supabase } from "../supabase";

type Props = {
    logout: () => void;
};

const Logout = ({ logout }: Props) => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        //Tarayıcı tarafından formun submit edilmesini engelle
        e.preventDefault();
        // Supabase ile kullanıcı çıkışı yap
        // Supabase auth.signOut metodunu kullanarak kullanıcı çıkışı yap
        // createClient ile oluşturulan supabase nesnesini kullanarak auth.signOut metodunu
        // çağırıyoruz. Bu metod, kullanıcıyı çıkış yaptırır.
        // Eğer bir hata oluşursa error değişkenine atanır.
        // Eğer hata yoksa, kullanıcı çıkış yapmış olur.
        // Eğer hata varsa, error değişkeni null olmaz ve hata mesajı konsola yaz
        //dırılır.
        // Ayrıca kullanıcıya bir alert ile çıkış işleminin başarılı olduğunu
        // bildireceğiz.    const { error } = await supabase.auth.signOut();

        // Kullanıcıyı çıkış ediyoruz
        const { error } = await supabase.auth.signOut();
        console.log(error);
        alert("Çıkış başarılı");
        logout();
    };

    return (
        <form className="p-4" onSubmit={handleSubmit}>
            <h1>Çıkış Yap</h1>
            <button>Çıkış</button>
        </form>
    );
};

export default Logout;