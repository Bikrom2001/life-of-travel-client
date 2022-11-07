import React from 'react';

const Travel = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/3981957/pexels-photo-3981957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <h1 className="mb-5 text-5xl font-bold text-white">Get 10% Off On Your Next Travel</h1>
                    <p className="mb-5 text-white">Travel between 22 April to 21 May and get existing offers along with a sure 10% cash discount</p>

                    <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Explore Tour</button>
                </div>
            </div>
        </div>
    );
};

export default Travel;