import { useState, useEffect } from 'react';
import playersData from '../../assets/playersData.json';

// Define the team data with player ID arrays
const teams = [
    { name: 'Phroton Falkons', gradient: 'bg-[#031716]', playerIds:[62, 2, 5, 10, 19, 16, 59, 60, 61, 65, 68, 30, 51, 57, 9] },
    { name: 'Talukder Sporting Club', gradient: 'bg-[#032F30]', playerIds: [41, 33, 36, 24, 18, 34, 44, 63, 23, 53, 58, 64, 45, 67, 29] },
    { name: 'ICE BREAKERS', gradient: 'bg-[#6BA3BE]', playerIds: [28,15,11,1,7,25,39,26,31,12,32,43,40,22,20] },
    { name: 'Teesta Smashers', gradient: 'bg-[#274D60]', playerIds: [38, 14, 17, 37, 47, 35, 66, 56, 69, 50, 13
        , 42, 27, 46, 49] }
];

// Function to assign players to teams based on specified player IDs
const assignPlayersToTeams = (players) => {
    return teams.map(team => {
        const filteredPlayers = players.filter(player =>
            team.playerIds.includes(player.id) // Match players by ID
        );
        return { ...team, players: filteredPlayers };
    });
};

const Teams = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [teamData, setTeamData] = useState([]);

    // Load and assign players from JSON
    useEffect(() => {
        setTeamData(assignPlayersToTeams(playersData));
    }, []);

    // Open the modal with the selected team
    const openModal = (team) => {
        setSelectedTeam(team);
        setIsModalOpen(true);
    };

    // Close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTeam(null);
    };

    // Calculate the total cost of the selected team's players
    const calculateTotalCost = () => {
        if (!selectedTeam || !selectedTeam.players) return 0;
        return selectedTeam.players.reduce((total, player) => {
            return total + (parseInt(player.price) || 0); // Ensure price is treated as a number
        }, 0);
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-[#0A7075] py-10 px-4 sm:px-6 lg:px-8 shadow-2xl">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#FDE047] mb-8">Cricket Draft Teams</h1>
            
            {/* Display Team Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {teamData.map((team, index) => (
                    <div
                        key={index}
                        onClick={() => openModal(team)}
                        className={`flex items-center justify-center h-36 sm:h-48 w-full sm:w-48 rounded-xl shadow-lg text-[#FDE047] text-lg sm:text-2xl font-semibold ${team.gradient} transition transform hover:scale-105 cursor-pointer px-8 `}
                    >
                        {team.name}
                    </div>
                ))}
            </div>

            {/* Modal for displaying team details */}
            {isModalOpen && selectedTeam && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 max-h-[80vh] rounded-lg shadow-lg p-4 sm:p-6 overflow-hidden">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 text-center">
                            {selectedTeam.name} Players
                        </h2>

                        <div className="overflow-y-auto max-h-[60vh]">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr>
                                        <th className="border-b-2 py-2 px-2 sm:px-4 text-gray-700">S.No</th>
                                        <th className="border-b-2 py-2 px-2 sm:px-4 text-gray-700">Name</th>
                                        <th className="border-b-2 py-2 px-2 sm:px-4 text-gray-700">Category</th>
                                        <th className="border-b-2 py-2 px-2 sm:px-4 text-gray-700">Role</th>
                                        <th className="border-b-2 py-2 px-2 sm:px-4 text-gray-700">Base Price</th>
                                        <th className="border-b-2 py-2 px-2 sm:px-4 text-gray-700">Final Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedTeam.players.map((player, index) => (
                                        <tr key={index} className="hover:bg-gray-100">
                                            <td className="border-b py-2 px-2 sm:px-4 text-gray-700">{index + 1}</td>
                                            <td className="border-b py-2 px-2 sm:px-4 text-gray-700">{player.name}</td>
                                            <td className="border-b py-2 px-2 sm:px-4 text-gray-700">{player.category}</td>
                                            <td className="border-b py-2 px-2 sm:px-4 text-gray-700">{player.role}</td>
                                            <td className="border-b py-2 px-2 sm:px-4 text-gray-700">
                                                {parseInt(player.price).toLocaleString() || 'N/A'}
                                            </td>
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
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 block mx-auto"
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
