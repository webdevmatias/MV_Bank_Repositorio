const Home = () => {
    return (
        <section className="w-full h-screen grid md:grid-cols-2">
            <div className="bg-yellow-500 md:col-span-1 h-full
            flex flex-col justify-center items-center">
                Item 1
            </div>
            <div className="bg-green-500 md:col-span-1 h-full
            flex flex-col justify-center items-center">
                Item 2
            </div>
        </section>
    );
};

export default Home;
