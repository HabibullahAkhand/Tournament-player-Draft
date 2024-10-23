const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <section className="hero bg-gradient-to-r from-blue-900 via-blue-700 to-green-600 text-white py-16">
                <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2">
                        <h1 className="text-5xl font-bold mb-6">
                            Build Your Dream Team ⚽
                        </h1>
                        <p className="text-xl mb-6">
                            Draft players, track fixtures, and stay updated with live scores.
                            Compete and manage your fantasy league in real-time.
                        </p>
                        <div className="space-x-4">
                            <a href="#draft" className="btn bg-green-500 hover:bg-green-400 transition duration-300 px-6 py-3 text-lg font-semibold rounded-md shadow-lg">
                                Start Drafting
                            </a>
                            <a href="#scores" className="btn bg-white text-black hover:bg-gray-300 transition duration-300 px-6 py-3 text-lg font-semibold rounded-md shadow-lg">
                                View Live Scores
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-10 lg:mt-0">
                        <img
                            src="https://source.unsplash.com/featured/?sports"
                            alt="Sports Image"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Featured Players Section */}
            <section id="draft" className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-10">Top Players to Draft</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Example Player Cards */}
                        <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl font-semibold mb-4">Lionel Messi</h3>
                            <p className="text-gray-700">Position: Forward</p>
                        </div>
                        <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl font-semibold mb-4">Cristiano Ronaldo</h3>
                            <p className="text-gray-700">Position: Forward</p>
                        </div>
                        <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl font-semibold mb-4">Kylian Mbappé</h3>
                            <p className="text-gray-700">Position: Forward</p>
                        </div>
                        <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl font-semibold mb-4">Kevin De Bruyne</h3>
                            <p className="text-gray-700">Position: Midfielder</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fixtures Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-10">Upcoming Fixtures</h2>
                    <ul className="space-y-6">
                        <li className="bg-white p-4 rounded-md shadow-md">
                            <p className="text-xl">Team A vs Team B - October 28, 2024</p>
                        </li>
                        <li className="bg-white p-4 rounded-md shadow-md">
                            <p className="text-xl">Team C vs Team D - November 2, 2024</p>
                        </li>
                        <li className="bg-white p-4 rounded-md shadow-md">
                            <p className="text-xl">Team E vs Team F - November 10, 2024</p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Live Scores Section */}
            <section id="scores" className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-10">Live Scores</h2>
                    <div className="flex flex-col space-y-4">
                        <div className="bg-green-500 text-white p-4 rounded-md shadow-md text-center">
                            <p className="text-2xl">Team A 2 - 1 Team B</p>
                        </div>
                        <div className="bg-blue-500 text-white p-4 rounded-md shadow-md text-center">
                            <p className="text-2xl">Team C 0 - 0 Team D</p>
                        </div>
                        <div className="bg-yellow-500 text-white p-4 rounded-md shadow-md text-center">
                            <p className="text-2xl">Team E 1 - 3 Team F</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Join the Action Today!</h2>
                    <p className="text-xl mb-6">
                        Sign up now to start drafting your favorite players and competing in the league.
                    </p>
                    <a href="#draft" className="btn bg-white text-green-600 px-8 py-3 font-semibold rounded-md shadow-md hover:bg-gray-300">
                        Get Started
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
