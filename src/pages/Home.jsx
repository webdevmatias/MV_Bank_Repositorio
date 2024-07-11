import piggy from '/piggy.png';

const Home = () => {
    return (
        <section className="w-full h-auto md:h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-600 col-span-1 w-full h-full flex flex-col justify-center items-stretch p-8 md:pl-16 pt-32 md:pt-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Olá! Conheça o MVBank!</h1>
                <p className="text-lg md:text-2xl text-white">O MVBank é a plataforma mais confiável e segura do mundo para você guardar, movimentar e investir seu dinheiro.</p>
            </div>
            <div className="bg-gray-700 col-span-1 h-full flex flex-col justify-center items-center p-8 md:p-0">
                <img src={piggy} className='w-2/4 md:w-1/2' alt="Piggy Bank" />
            </div>
        </section>
    );
};

export default Home;
