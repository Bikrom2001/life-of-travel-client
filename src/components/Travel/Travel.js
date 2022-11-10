import React from 'react';

const Travel = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <h1 className="mb-5 text-5xl font-bold text-white">We Provide Free Dental Care Consultation</h1>
                    <p className="mb-5 text-white">Your Health is Our Top Priority with Comprehensive, Affordable medical.</p>

                    <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Free Consultation</button>
                </div>
            </div>
        </div>
    );
};

export default Travel;