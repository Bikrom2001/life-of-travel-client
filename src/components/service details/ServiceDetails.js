import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';
import ReviewSection from '../ReviewSection/ReviewSection';

const ServiceDetails = () => {
    const service = useLoaderData();
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="space-y-2 text-center pt-6">
                    <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                    <p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                </div>
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">

                        <PhotoProvider>
                            <PhotoView src={service.img}>
                                <img src={service.img} alt="" className="object-cover w-full rounded cursor-pointer h-full lg:col-span-7 dark:bg-gray-500" />
                            </PhotoView>
                        </PhotoProvider>

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
                <ReviewSection service={service}></ReviewSection>
            </section>

        </div>
    );
};

export default ServiceDetails;