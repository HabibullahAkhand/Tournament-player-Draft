import { useState} from 'react';
import playersData from '../../assets/playersData.json'; // Adjust the path if necessary
import './styleProfile.css';

// Function to convert price to lakh/crore format
const formatPrice = (price) => {
    const num = parseInt(price.replace(/\D/g, '')); // Removing any non-numeric characters
    if (num >= 10000000) return (num / 10000000).toFixed(1) + ' crore TK';
    if (num >= 100000) return (num / 100000).toFixed(1) + ' lakh TK';
    return num + ' TK';
};

const ProfileCard = () => {
    const [players, setPlayers] = useState(playersData);
    const [sortOption, setSortOption] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const playersPerPage = 10; // Display 10 players per page

    // Calculate total pages
    const totalPages = Math.ceil(players.length / playersPerPage);

    // Get current players to display
    const indexOfLastPlayer = currentPage * playersPerPage;
    const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
    const currentPlayers = players.slice(indexOfFirstPlayer, indexOfLastPlayer);

    const handleSort = (option) => {
        let sortedPlayers;
        switch (option) {
            case 'priceHighToLow':
                sortedPlayers = [...players].sort((a, b) => b.price - a.price);
                break;
            case 'priceLowToHigh':
                sortedPlayers = [...players].sort((a, b) => a.price - b.price);
                break;
            case 'roleBatsman':
                sortedPlayers = playersData.filter(player => player.role === 'Batsman');
                break;
            case 'roleBowler':
                sortedPlayers = playersData.filter(player => player.role === 'Bowler');
                break;
            case 'roleAllRounder':
                sortedPlayers = playersData.filter(player => player.role === 'All Rounder');
                break;
            case 'categoryA':
                sortedPlayers = playersData.filter(player => player.category === 'A');
                break;
            case 'categoryB':
                sortedPlayers = playersData.filter(player => player.category === 'B');
                break;
            case 'categoryC':
                sortedPlayers = playersData.filter(player => player.category === 'C');
                break;
            case 'categoryD':
                sortedPlayers = playersData.filter(player => player.category === 'D');
                break;
            default:
                sortedPlayers = playersData;
        }
        setPlayers(sortedPlayers);
        setSortOption(option);
        setCurrentPage(1); // Reset to the first page after sorting
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);

        // Scroll to the top of the page with a smooth effect
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <div className="dropdown-container">
                <select
                    className="dropdown"
                    value={sortOption}
                    onChange={(e) => handleSort(e.target.value)}
                >
                    <option value="">Sort By</option>
                    <option value="priceHighToLow">Price High to Low</option>
                    <option value="priceLowToHigh">Price Low to High</option>
                    <option value="roleBatsman">Role: Batsman</option>
                    <option value="roleBowler">Role: Bowler</option>
                    <option value="roleAllRounder">Role: All Rounder</option>
                    <option value="categoryA">Category A</option>
                    <option value="categoryB">Category B</option>
                    <option value="categoryC">Category C</option>
                    <option value="categoryD">Category D</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {currentPlayers.map((player, index) => (
                    <div
                        key={index}
                        className="profile-card-container transition-transform duration-500 animate-fade-in"
                    >
                        <div className="profile-card__card shadow-2xl shadow-[#095725]">
                            <div className="profile-card__profile-pic">
                                <img
                                    src={player.image}
                                    alt="Profile"
                                />
                            </div>
                            <div className="profile-card__details">
                                <div className="profile-card__content">
                                    <div className="bg-black bg-opacity-25 rounded-l-2xl md:pr-20">
                                        <h2>
                                            <span className="opacity-75">Category</span>{' '}
                                            <span className="font-extrabold">{player.category}</span>
                                        </h2>
                                        <p className="profile-card__tag">
                                            <span className="opacity-75">Role</span>{' '}
                                            <span className="font-bold">{player.role}</span>
                                        </p>
                                    </div>
                                    <p className="profile-card__about">{player.description}</p>
                                </div>
                                <div className="profile-card__buttons">
                                    <div className="profile-card__social bg-black bg-opacity-20 p-2 rounded-2xl font-semibold">
                                        {formatPrice(player.price)}
                                    </div>
                                    <a href="#" className="profile-card__link">
                                        <span className="font-bold hover:opacity-100">{player.name}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProfileCard;
