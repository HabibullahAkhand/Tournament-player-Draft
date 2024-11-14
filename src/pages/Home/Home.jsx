import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#0D1B1E]">
            {/* Banner Section */}
            <section className="banner bg-gradient-to-br from-[#004d60] to-[#082c34] text-center py-20 shadow-2xl">
                <div className="container mx-auto px-6">
                    <div className="relative inline-block mb-8">
                        <span className="absolute -inset-1 bg-yellow-500 rounded-full blur opacity-30 animate-pulse"></span>
                        <h1 className="relative text-5xl sm:text-6xl font-extrabold uppercase tracking-wide text-[#FFD700] drop-shadow-lg">
                            REC Sports Club
                        </h1>
                    </div>
                    <p className="text-2xl sm:text-3xl font-light tracking-wide max-w-2xl mx-auto mt-4 text-[#c5e4e7] drop-shadow-md">
                        Cricket Tournament Player Draft
                    </p>
                </div>
            </section>

            {/* Team Owners Section */}
            <section className="py-16 mt-4 bg-gradient-to-tl from-[#032F30] to-[#0D1B1E]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-10 text-[#FDE047] animate-slideInDown">
                        Team Owners & Team Names
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {[
                            { owner: 'John Doe', team: 'Warriors' },
                            { owner: 'Jane Smith', team: 'Tigers' },
                            { owner: 'Alice Johnson', team: 'Eagles' },
                            { owner: 'Bob Lee', team: 'Lions' }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#031716] p-6 rounded-lg shadow-lg text-center text-[#FDE047] transform transition-all duration-300 hover:scale-105 hover:bg-[#044E50] hover:shadow-2xl relative group"
                            >
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-[#0D1B1E] opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                                <h3 className="text-2xl font-semibold mb-2 animate-fadeInUp group-hover:translate-y-2 group-hover:opacity-90 transition-all">
                                    Owner: {item.owner}
                                </h3>
                                <p className="text-lg animate-fadeInDown group-hover:translate-y-2 group-hover:opacity-90 transition-all">
                                    Team Name: {item.team}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advertisement Section */}
            <section className="py-16 bg-[#6BA3BE] relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-10 text-white animate-fadeIn">
                        Sponsored By
                    </h2>
                    <div className="flex flex-col space-y-6 items-center">
                        {[
                            { name: 'Arif Cha Ghor', bg: 'bg-[#274D60]' },
                            { name: 'Limon Shop', bg: 'bg-[#032F30]' },
                            { name: 'Shopnochowa Coaching Center', bg: 'bg-[#031716]' }
                        ].map((sponsor, index) => (
                            <div
                                key={index}
                                className={`${sponsor.bg} text-white p-6 rounded-md shadow-md text-center w-3/4 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg relative group`}
                            >
                                <span className="absolute -inset-1 bg-gradient-to-r from-[#facc15] to-[#f97316] blur opacity-25 group-hover:opacity-50 rounded-lg"></span>
                                <p className="relative text-2xl animate-slideInRight">{sponsor.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-80 h-80 bg-[#031716] rounded-full blur-2xl opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#032F30] rounded-full blur-2xl opacity-20"></div>
            </section>

            {/* Footer Section */}
            <footer className="bg-[#031716] text-white py-8 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm opacity-80 animate-slideInUp">&copy; 2024 REC Sports Club. All rights reserved.</p>
                </div>
                {/* Decorative Footer Elements */}
                <div className="absolute top-1/3 left-0 w-40 h-40 bg-yellow-600 rounded-full blur-2xl opacity-10 animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#045C5C] rounded-full blur-3xl opacity-10 animate-pulse"></div>
            </footer>
        </div>
    );
};

export default Home;
