import React, { useState } from 'react';

// Define the team data
const teams = [
    { name: 'Team A', gradient: 'bg-[#031716]', categories: ['A', 'C'] },
    { name: 'Team B', gradient: 'bg-[#032F30]', categories: ['B'] },
    { name: 'Team C', gradient: 'bg-[#6BA3BE]', categories: ['A', 'B'] },
    { name: 'Team D', gradient: 'bg-[#274D60]', categories: ['D'] },
];

// Define the player data
const playersData = [
    { name: 'Shakib Al Hasan', price: 10000000, category: 'A', role: 'All Rounder (c)' },
    { name: 'Tamim Iqbal', price: 9000000, category: 'A', role: 'Batsman' },
    { name: 'Mashrafe Mortaza', price: 8000000, category: 'B', role: 'Bowler' },
    { name: 'Mushfiqur Rahim', price: 7500000, category: 'A', role: 'Batsman (wk)' },
    { name: 'Mustafizur Rahman', price: 6000000, category: 'B', role: 'Bowler' },
    { name: 'Mahmudullah Riyad', price: 7000000, category: 'A', role: 'All Rounder' },
    { name: 'Taskin Ahmed', price: 5000000, category: 'B', role: 'Bowler' },
    { name: 'Liton Das', price: 4000000, category: 'C', role: 'Batsman' },
    { name: 'Mehidy Hasan', price: 3000000, category: 'A', role: 'All Rounder' },
    { name: 'Soumya Sarkar', price: 3500000, category: 'B', role: 'All Rounder' },
    { name: 'Nasum Ahmed', price: 2500000, category: 'C', role: 'Bowler' },
    { name: 'Afif Hossain', price: 1500000, category: 'C', role: 'All Rounder' },
    { name: 'Shoriful Islam', price: 2800000, category: 'B', role: 'Bowler' },
    { name: 'Mohammad Naim', price: 1800000, category: 'C', role: 'Batsman' },
    { name: 'Rubel Hossain', price: 3000000, category: 'B', role: 'Bowler' },
    { name: 'Saifuddin', price: 4000000, category: 'B', role: 'All Rounder' },
    { name: 'Anamul Haque', price: 2000000, category: 'C', role: 'Batsman' },
    { name: 'Mohammad Mithun', price: 2200000, category: 'C', role: 'Batsman' },
    { name: 'Nayeem Hasan', price: 1500000, category: 'C', role: 'Bowler' },
    { name: 'Al-Amin Hossain', price: 3500000, category: 'B', role: 'Bowler' },
    { name: 'Mohammad Ashraful', price: 1000000, category: 'D', role: 'Batsman' },
    { name: 'Imrul Kayes', price: 1200000, category: 'D', role: 'Batsman' },
    { name: 'Ziaur Rahman', price: 900000, category: 'D', role: 'All Rounder' },
    { name: 'Junaid Siddique', price: 800000, category: 'D', role: 'Batsman' },
    { name: 'Arafat Sunny', price: 600000, category: 'D', role: 'Bowler' },
];

const Teams = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState(null);

    const openModal = (team) => {
        setSelectedTeam(team);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTeam(null);
    };

    const getTeamPlayers = () => {
        if (!selectedTeam) return [];
        return playersData.filter(player => selectedTeam.categories.includes(player.category));
    };

    const calculateTotalCost = () => {
        return getTeamPlayers().reduce((total, player) => total + player.price, 0);
    };

    return (
        <div className="min-h-screen flex flex-col items-center  bg-[#0A7075] py-10 px-4 sm:px-6 lg:px-8 shadow-2xl">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#FDE047] mb-8">Cricket Draft Teams</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {teams.map((team, index) => (
                    <div
                        key={index}
                        onClick={() => openModal(team)}
                        className={`flex items-center justify-center h-36 sm:h-48 w-full sm:w-48 rounded-xl shadow-lg text-[#FDE047] text-lg sm:text-2xl font-semibold ${team.gradient} transition transform hover:scale-105 cursor-pointer`}
                    >
                        {team.name}
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white w-full sm:w-3/4 lg:max-w-2xl rounded-lg shadow-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">{selectedTeam.name} Players</h2>
                        <div className="overflow-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr>
                                        <th className="border-b-2 py-2 px-2 sm:px-4 text-gray-700">S.No</th>
                                        <th className="border-b-2 py-2 px-2 sm:px-4 text-gray-700">Name</th>
                                        <th className="border-b-2 py-2 px-2 sm:px-4 text-gray-700">Category</th>
                                        <th className="border-b-2 py-2 px-2 sm:px-4 text-gray-700">Role</th>
                                        <th className="border-b-2 py-2 px-2 sm:px-4 text-gray-700">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getTeamPlayers().map((player, index) => (
                                        <tr key={index} className="hover:bg-gray-100">
                                            <td className="border-b py-2 px-2 sm:px-4 text-gray-700">{index + 1}</td>
                                            <td className="border-b py-2 px-2 sm:px-4 text-gray-700">{player.name}</td>
                                            <td className="border-b py-2 px-2 sm:px-4 text-gray-700">{player.category}</td>
                                            <td className="border-b py-2 px-2 sm:px-4 text-gray-700">{player.role}</td>
                                            <td className="border-b py-2 px-2 sm:px-4 text-gray-700">{player.price.toLocaleString()}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td colSpan="4" className="border-t py-2 px-2 sm:px-4 font-bold text-gray-700">Total Cost</td>
                                        <td className="border-t py-2 px-2 sm:px-4 font-bold text-gray-700">
                                            {calculateTotalCost().toLocaleString()}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button
                            onClick={closeModal}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Teams;
