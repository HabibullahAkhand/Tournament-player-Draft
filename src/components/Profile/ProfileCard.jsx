import { useState } from 'react';
import './styleProfile.css';

// Function to convert price to lakh/crore format
const formatPrice = (price) => {
    const num = parseInt(price.replace(/\D/g, '')); // Removing "TK" and any non-numeric chars
    if (num >= 10000000) return (num / 10000000).toFixed(1) + ' crore TK';
    if (num >= 100000) return (num / 100000).toFixed(1) + ' lakh TK';
    return num + ' TK';
};

const playersData = [
    { name: 'Shakib Al Hasan', price: '10000000', category: 'A', role: 'All Rounder', description: 'One of the best all-rounders in the world, excels in both batting and bowling.' },
    { name: 'Tamim Iqbal', price: '9000000', category: 'A', role: 'Batsman', description: 'Aggressive opening batsman known for his explosive starts and big scores.' },
    { name: 'Mashrafe Mortaza', price: '8000000', category: 'B', role: 'Bowler', description: 'Veteran fast bowler known for leadership and accuracy under pressure.' },
    { name: 'Mushfiqur Rahim', price: '7500000', category: 'A', role: 'Batsman', description: 'Dependable middle-order batsman with great technique and finishing ability.' },
    { name: 'Mustafizur Rahman', price: '6000000', category: 'B', role: 'Bowler', description: 'Specialist death bowler, known for his deceptive slower deliveries.' },
    { name: 'Mahmudullah Riyad', price: '7000000', category: 'A', role: 'All Rounder', description: 'Experienced all-rounder with the ability to anchor innings and bowl economically.' },
    { name: 'Taskin Ahmed', price: '5000000', category: 'B', role: 'Bowler', description: 'Fast bowler known for his pace and consistency in delivering breakthroughs.' },
    { name: 'Liton Das', price: '4000000', category: 'C', role: 'Batsman', description: 'Talented top-order batsman with a solid technique and attacking mindset.' },
    { name: 'Mehidy Hasan', price: '3000000', category: 'A', role: 'All Rounder', description: 'Off-spinner with the ability to contribute crucial runs in the lower order.' },
    { name: 'Soumya Sarkar', price: '3500000', category: 'B', role: 'All Rounder', description: 'Aggressive batsman and part-time medium-pacer with match-winning capabilities.' },
    { name: 'Nasum Ahmed', price: '2500000', category: 'C', role: 'Bowler', description: 'Skilled left-arm spinner with an eye for exploiting pitch conditions.' },
    { name: 'Afif Hossain', price: '1500000', category: 'C', role: 'All Rounder', description: 'Young all-rounder with an aggressive batting approach and useful off-spin.' },
    { name: 'Shoriful Islam', price: '2800000', category: 'B', role: 'Bowler', description: 'Promising left-arm fast bowler known for his pace and bounce.' },
    { name: 'Mohammad Naim', price: '1800000', category: 'C', role: 'Batsman', description: 'Steady top-order batsman, capable of building strong innings in limited-overs cricket.' },
    { name: 'Rubel Hossain', price: '3000000', category: 'B', role: 'Bowler', description: 'Fast bowler with a knack for bowling quick yorkers in crucial moments.' },
    { name: 'Saifuddin', price: '4000000', category: 'B', role: 'All Rounder', description: 'Medium-pacer and hard-hitting lower-order batsman, adept at finishing games.' },
    { name: 'Anamul Haque', price: '2000000', category: 'C', role: 'Batsman', description: 'Explosive opening batsman known for his big hitting and quick starts.' },
    { name: 'Mohammad Mithun', price: '2200000', category: 'C', role: 'Batsman', description: 'Middle-order batsman with the ability to finish games under pressure.' },
    { name: 'Nayeem Hasan', price: '1500000', category: 'C', role: 'Bowler', description: 'Talented young off-spinner with promising control and variations.' },
    { name: 'Al-Amin Hossain', price: '3500000', category: 'B', role: 'Bowler', description: 'Right-arm medium pacer, known for consistency and wicket-taking ability in the middle overs.' },
    { name: 'Mohammad Ashraful', price: '1000000', category: 'D', role: 'Batsman', description: 'Once a teenage sensation, now a seasoned veteran.' },
    { name: 'Imrul Kayes', price: '1200000', category: 'D', role: 'Batsman', description: 'Experienced opening batsman with a steady hand.' },
    { name: 'Ziaur Rahman', price: '900000', category: 'D', role: 'All Rounder', description: 'Powerful lower-order hitter and medium-pace bowler.' },
    { name: 'Junaid Siddique', price: '800000', category: 'D', role: 'Batsman', description: 'Stylish top-order batsman, known for his technique.' },
    { name: 'Arafat Sunny', price: '600000', category: 'D', role: 'Bowler', description: 'Left-arm spinner, handy with his variations in T20s.' }
];

const ProfileCard = () => {
    const [players, setPlayers] = useState(playersData);
    const [sortOption, setSortOption] = useState('');

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
                {players.map((player, index) => (
                    <div key={index} className="profile-card-container transition-transform duration-500">
                        <div className="profile-card__card shadow-2xl shadow-[#095725]">
                            <div className="profile-card__profile-pic">
                                <img src="https://i.ibb.co/0nPFx8T/d0506eda99d84993b8c4822f21f51966.jpg" alt="Profile" />
                            </div>
                            <div className="profile-card__details">
                                <div className="profile-card__content">
                                    <div className="bg-black bg-opacity-25 rounded-l-2xl">
                                        <h2><span className='opacity-75'>Category</span> <span className='font-extrabold'>{player.category}</span></h2>
                                        <p className="profile-card__tag"><span className='opacity-75'>Role</span> <span className='font-bold'>{player.role}</span></p>
                                    </div>
                                    <p className="profile-card__about">{player.description}</p>
                                </div>
                                <div className="profile-card__buttons">
                                    <div className="profile-card__social bg-black bg-opacity-20 p-2 rounded-2xl font-semibold">
                                        {formatPrice(player.price)}
                                    </div>
                                    <a href="#" className="profile-card__link"><span className='font-bold hover:opacity-100'>{player.name}</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileCard;
