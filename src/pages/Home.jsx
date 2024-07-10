import piggy from '/piggy.jpg';

const Home = () => {
    return (
        <section className="w-full h-screen grid md:grid-cols-2">
            <div className="bg-white md:col-span-1 w-full h-full flex flex-col justify-center items-stretch pl-16 pt-32 md:pt-0">
                <h1 className="text-4xl font-bold mb-4">Olá! Conheça o MVBank!</h1>
                <p className="text-2xl">O MVBank é a plataforma mais confiável e segura do mundo para você guardar, movimentar e investir seu dinheiro.</p>
            </div>
            <div className="bg-white md:col-span-1 h-full flex flex-col justify-center items-center">
                <img src={piggy} className='h-1/2' alt="Piggy Bank" />
            </div>
        </section>
    );
};

export default Home;


