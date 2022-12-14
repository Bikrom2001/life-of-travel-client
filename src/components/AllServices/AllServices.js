import React, { useEffect, useState } from 'react';
import ServicesCart from '../Services/ServicesCart';
import UserTitle from '../UserTitle/UserTitle';

const AllServices = () => {

    UserTitle('All-Services');

    const [allService, setAllservice] = useState([]);

    useEffect(() => {
        fetch('https://life-of-travel-server-three.vercel.app/allservices')
            .then(res => res.json())
            .then(data => setAllservice(data))
    }, [])


    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8 sm:space-y-12">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Our Service Keeps you Smile</h2>
                    <p className="font-serif text-sm dark:text-gray-400">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {
                        allService.map(servic => <ServicesCart key={servic._id} servic={servic}></ServicesCart>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AllServices;