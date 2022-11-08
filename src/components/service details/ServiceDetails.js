import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                <img src={service.img} alt="" className="object-cover w-full rounded h-full lg:col-span-7 dark:bg-gray-500" />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{service?.title}</h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-violet-400">
                        <span>Price: ${service?.price}</span>
                        <span className='flex items-center gap-1'><span>{service?.review}</span> <FaStar></FaStar></span>
                    </div>
                    <p>{service?.description}</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ServiceDetails;