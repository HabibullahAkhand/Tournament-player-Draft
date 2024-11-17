const Fixtures = () => {
    const fixtures = [
        { date: '', time: '', teams: '', location: '' },
        { date: '', time: '', teams: '', location: '' },
        { date: '', time: '', teams: '', location: '' },
        { date: '', time: '', teams: '', location: '' },
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
