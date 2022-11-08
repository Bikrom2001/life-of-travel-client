import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const ServicesCart = ({ servic }) => {

    const {title, img,price, review, _id} = servic;

    return (
        <div>
            <div className=" mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                <img role="presentation" alt='' className="object-cover w-full rounded h-44 dark:bg-gray-500" src={img} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-violet-400">
                        <span>Price: ${price}</span>
                        <span className='flex items-center gap-1'><span>{review}</span> <FaStar></FaStar></span>
                    </div>
                    <p>{servic?.description?.length > 200 ?
                        servic?.description?.slice(0, 100) + '...' : <p>not found</p>
                    }</p>
                    <Link className="inline-flex items-center  space-x-2 text-sm dark:text-violet-400" to={`/servicedetails/${_id}`}>
                        <span>More Details</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;