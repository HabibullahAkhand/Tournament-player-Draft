const Fixtures = () => {
    const fixtures = [
        { date: 'Nov 20, 2024', time: '3:00 PM', teams: 'Team A vs Team B', location: 'Stadium 1' },
        { date: 'Nov 22, 2024', time: '5:00 PM', teams: 'Team C vs Team D', location: 'Stadium 2' },
        { date: 'Nov 25, 2024', time: '7:00 PM', teams: 'Team B vs Team C', location: 'Stadium 3' },
        { date: 'Nov 28, 2024', time: '3:00 PM', teams: 'Team D vs Team A', location: 'Stadium 4' },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center bg-[#0A7075] py-10">
            <h1 className="text-3xl font-bold text-white mb-8">Match Fixtures</h1>
            <div className="w-full max-w-2xl mx-auto grid gap-6">
                {fixtures.map((fixture, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row justify-between items-center p-6 rounded-lg shadow-lg bg-gradient-to-r from-[#032F30] to-[#0C969C] text-white"
                    >
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <h2 className="text-lg font-semibold text-yellow-300">{fixture.teams}</h2>
                            <p className="text-sm text-gray-300">{fixture.location}</p>
                        </div>
                        <div className="flex flex-col md:flex-row items-center text-center md:text-right">
                            <span className="block text-sm font-medium text-gray-100">{fixture.date}</span>
                            <span className="block md:ml-4 text-sm font-medium text-gray-100">{fixture.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fixtures;
