import ProfileCard from "../../components/Profile/ProfileCard";


const AllPlayers = () => {
    return (
        <div className="mt-10">
            <ProfileCard></ProfileCard>
            <footer className="bg-[#031716] text-white py-6 mt-10">
                <div className="container mx-auto px-6 text-center">
                    <p>&copy; 2024 REC Sports Club. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default AllPlayers;