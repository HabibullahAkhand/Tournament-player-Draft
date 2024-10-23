import './styleProfile.css';

// Function to convert price to lakh/crore format
const formatPrice = (price) => {
    const num = parseInt(price.replace(/\D/g, '')); // Removing "TK" and any non-numeric chars
    if (num >= 10000000) return (num / 10000000).toFixed(1) + ' crore TK';
    if (num >= 100000) return (num / 100000).toFixed(1) + ' lakh TK';
    return num + ' TK';
};

const players = [
    { name: 'Shakib Al Hasan', price: '10000000', grade: 'A', category: 'All Rounder', description: 'One of the best all-rounders in the world, excels in both batting and bowling.' },
    { name: 'Tamim Iqbal', price: '9000000', grade: 'A', category: 'Batsman', description: 'Aggressive opening batsman known for his explosive starts and big scores.' },
    { name: 'Mashrafe Mortaza', price: '8000000', grade: 'B', category: 'Bowler', description: 'Veteran fast bowler known for leadership and accuracy under pressure.' },
    { name: 'Mushfiqur Rahim', price: '7500000', grade: 'A', category: 'Batsman', description: 'Dependable middle-order batsman with great technique and finishing ability.' },
    { name: 'Mustafizur Rahman', price: '6000000', grade: 'B', category: 'Bowler', description: 'Specialist death bowler, known for his deceptive slower deliveries.' },
    { name: 'Mahmudullah Riyad', price: '7000000', grade: 'A', category: 'All Rounder', description: 'Experienced all-rounder with the ability to anchor innings and bowl economically.' },
    { name: 'Taskin Ahmed', price: '5000000', grade: 'B', category: 'Bowler', description: 'Fast bowler known for his pace and consistency in delivering breakthroughs.' },
    { name: 'Liton Das', price: '4000000', grade: 'C', category: 'Batsman', description: 'Talented top-order batsman with a solid technique and attacking mindset.' },
    { name: 'Mehidy Hasan', price: '3000000', grade: 'A', category: 'All Rounder', description: 'Off-spinner with the ability to contribute crucial runs in the lower order.' },
    { name: 'Soumya Sarkar', price: '3500000', grade: 'B', category: 'All Rounder', description: 'Aggressive batsman and part-time medium-pacer with match-winning capabilities.' },
    { name: 'Nasum Ahmed', price: '2500000', grade: 'C', category: 'Bowler', description: 'Skilled left-arm spinner with an eye for exploiting pitch conditions.' },
    { name: 'Afif Hossain', price: '1500000', grade: 'C', category: 'All Rounder', description: 'Young all-rounder with an aggressive batting approach and useful off-spin.' },
    { name: 'Shoriful Islam', price: '2800000', grade: 'B', category: 'Bowler', description: 'Promising left-arm fast bowler known for his pace and bounce.' },
    { name: 'Mohammad Naim', price: '1800000', grade: 'C', category: 'Batsman', description: 'Steady top-order batsman, capable of building strong innings in limited-overs cricket.' },
    { name: 'Rubel Hossain', price: '3000000', grade: 'B', category: 'Bowler', description: 'Fast bowler with a knack for bowling quick yorkers in crucial moments.' },
    { name: 'Saifuddin', price: '4000000', grade: 'B', category: 'All Rounder', description: 'Medium-pacer and hard-hitting lower-order batsman, adept at finishing games.' },
    { name: 'Anamul Haque', price: '2000000', grade: 'C', category: 'Batsman', description: 'Explosive opening batsman known for his big hitting and quick starts.' },
    { name: 'Mohammad Mithun', price: '2200000', grade: 'C', category: 'Batsman', description: 'Middle-order batsman with the ability to finish games under pressure.' },
    { name: 'Nayeem Hasan', price: '1500000', grade: 'C', category: 'Bowler', description: 'Talented young off-spinner with promising control and variations.' },
    { name: 'Al-Amin Hossain', price: '3500000', grade: 'B', category: 'Bowler', description: 'Right-arm medium pacer, known for consistency and wicket-taking ability in the middle overs.' }
];

const ProfileCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {players.map((player, index) => (
                <div key={index} className=" flex justify-center items-center rounded-[32px]">
                    <div className="profile-card__card shadow-2xl shadow-[#095725]">
                        <div className="profile-card__profile-pic">
                            <img src="https://i.ibb.co/0nPFx8T/d0506eda99d84993b8c4822f21f51966.jpg" alt="Profile" />
                        </div>
                        <div className="profile-card__details">
                            <div className="profile-card__content">
                                <div className="bg-black bg-opacity-25 rounded-l-2xl">
                                <h2 ><span className='opacity-75'>Category</span> <span className='font-extrabold'>{player.grade}</span></h2>
                                <p className="profile-card__tag">{player.category}</p>
                                </div>
                                <p className="profile-card__about">{player.description}</p>
                            </div>
                            <div className="profile-card__buttons">
                                <div className="profile-card__social bg-black bg-opacity-20 p-2 rounded-2xl">
                                    {formatPrice(player.price)}
                                </div>
                                <a href="#" className="profile-card__link"><span className='font-bold hover:opacity-100'>{player.name}</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProfileCard;
