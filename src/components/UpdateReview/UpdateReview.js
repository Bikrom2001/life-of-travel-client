import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {

    const review = useLoaderData();

    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form className="container max-w-6xl p-6 mx-auto flex flex-col space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">{review?.serviceName}</p>
                        <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm">Name</label>
                            <input name='firstname' defaultValue={review.name} id="firstname" type="text" placeholder="Name" className="w-full rounded-md focus:ring p-3 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Email</label>
                            <input name='lastname' id="lastname" type="text" readOnly={review?.userEmail} placeholder="Email" className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="rating" className="text-sm">Rating</label>
                            <input name='rating' id="rating" type="text" defaultValue={review?.rating} placeholder="Rating" className="w-full rounded-md focus:ring p-3 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="photoURL" className="text-sm">Photo URL</label>
                            <input name='photoURL' defaultValue={review?.photoURL} id="photoURL" type="text" placeholder="Photo URL" className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white" required />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="description" className="text-sm"> Description</label>
                            <textarea required name='description' defaultValue={review?.description} id="description" rows='3' placeholder="Description" className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Update</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default UpdateReview;