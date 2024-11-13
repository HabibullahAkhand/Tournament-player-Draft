import React from 'react';

const PointTable = () => {
    const teams = [
        { name: 'Team A', matches: 10, wins: 7, losses: 3, points: 14 },
        { name: 'Team B', matches: 10, wins: 5, losses: 5, points: 10 },
        { name: 'Team C', matches: 10, wins: 6, losses: 4, points: 12 },
        { name: 'Team D', matches: 10, wins: 3, losses: 7, points: 6 },
    ];

    return (
        <div className="min-h-screen  flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
            <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Point Table</h1>
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
    );
};

export default PointTable;
