const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Banner Section */}
            <section className="banner bg-[#0A7075] text-[#FDE047] py-16 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold mb-4">REC SPORTS CLUB</h1>
                    <p className="text-2xl">Cricket Tournament Player Draft</p>
                </div>
            </section>

            {/* Team Owners Section */}
            <section className="py-16" style={{ backgroundColor: '#032F30' }}>
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-10 text-[#FDE047]">Team Owners & Team Names</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <div className="bg-[#031716] p-6 rounded-lg shadow-md text-center text-[#FDE047]">
                            <h3 className="text-2xl font-semibold mb-2">Owner: John Doe</h3>
                            <p className="text-lg">Team Name: Warriors</p>
                        </div>
                        <div className="bg-[#031716] p-6 rounded-lg shadow-md text-center text-[#FDE047]">
                            <h3 className="text-2xl font-semibold mb-2">Owner: Jane Smith</h3>
                            <p className="text-lg">Team Name: Tigers</p>
                        </div>
                        <div className="bg-[#031716] p-6 rounded-lg shadow-md text-center text-[#FDE047]">
                            <h3 className="text-2xl font-semibold mb-2">Owner: Alice Johnson</h3>
                            <p className="text-lg">Team Name: Eagles</p>
                        </div>
                        <div className="bg-[#031716] p-6 rounded-lg shadow-md text-center text-[#FDE047]">
                            <h3 className="text-2xl font-semibold mb-2">Owner: Bob Lee</h3>
                            <p className="text-lg">Team Name: Lions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advertisement Section */}
            <section className="py-16" style={{ backgroundColor: '#6BA3BE' }}>
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-10 text-white">Sponsored By</h2>
                    <div className="flex flex-col space-y-4 items-center">
                        <div className="bg-[#274D60] text-white p-4 rounded-md shadow-md text-center w-3/4">
                            <p className="text-2xl">Arif Cha Ghor</p>
                        </div>
                        <div className="bg-[#032F30] text-white p-4 rounded-md shadow-md text-center w-3/4">
                            <p className="text-2xl">Limon Shop</p>
                        </div>
                        <div className="bg-[#031716] text-[#FDE047] p-4 rounded-md shadow-md text-center w-3/4">
                            <p className="text-2xl">Shopnochowa Coaching Center</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-[#031716] text-white py-6">
                <div className="container mx-auto px-6 text-center">
                    <p>&copy; 2024 REC Sports Club. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
