

const PointTable = () => {
    const teams = [
        { name: 'Team A', matches: 0, wins: 0, losses: 0, points: 0 },
        { name: 'Team B', matches: 0, wins: 0, losses: 0, points: 0 },
        { name: 'Team C', matches: 0, wins: 0, losses: 0, points: 0 },
        { name: 'Team D', matches: 0, wins: 0, losses: 0, points: 0},
    ];

    return (
        <div className="min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
            <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-4 sm:p-6">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Point Table</h1>
                
                {/* Add a scroll container for smaller screens */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-green-700 text-white">
                                <th className="py-2 px-4 border-b">#</th>
                                <th className="py-2 px-4 border-b">Team</th>
                                <th className="py-2 px-4 border-b">Matches</th>
                                <th className="py-2 px-4 border-b">Wins</th>
                                <th className="py-2 px-4 border-b">Losses</th>
                                <th className="py-2 px-4 border-b">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teams.map((team, index) => (
                                <tr
                                    key={index}
                                    className={`${
                                        index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-200'
                                    } text-gray-700`}
                                >
                                    <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                                    <td className="py-2 px-4 border-b">{team.name}</td>
                                    <td className="py-2 px-4 border-b text-center">{team.matches}</td>
                                    <td className="py-2 px-4 border-b text-center">{team.wins}</td>
                                    <td className="py-2 px-4 border-b text-center">{team.losses}</td>
                                    <td className="py-2 px-4 border-b text-center font-bold text-green-700">
                                        {team.points}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PointTable;
