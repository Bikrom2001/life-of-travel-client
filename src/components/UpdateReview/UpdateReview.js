import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateReview = () => {

    const review = useLoaderData();
    const [user, setUser] = useState(review);


    const handleAddSubmit = (event) => {
        event.preventDefault();
        // console.log(user);
        fetch(`https://life-of-travel-server-three.vercel.app/reviews/${review._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Update User', { autoClose: 1500 });
                }
            })


    }
    const handleInputChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }



    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form onSubmit={handleAddSubmit} className="container max-w-6xl p-6 mx-auto flex flex-col space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">{review?.serviceName}</p>
                        <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="name" className="text-sm">Name</label>
                            <input onChange={handleInputChange} name='name' defaultValue={review.name} id="name" type="text" placeholder="Name" className="w-full rounded-md focus:ring p-3 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Email</label>
                            <input name='lastname' id="lastname" type="text" readOnly defaultValue={review?.userEmail} placeholder="Email" className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="rating" className="text-sm">Rating</label>
                            <input onChange={handleInputChange} name='rating' id="rating" type="text" defaultValue={review?.rating} placeholder="Rating" className="w-full rounded-md focus:ring p-3 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="photoURL" className="text-sm">Photo URL</label>
                            <input onChange={handleInputChange} name='photoURL' defaultValue={review?.photoURL} id="photoURL" type="text" placeholder="Photo URL" className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white" required />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="description" className="text-sm"> Description</label>
                            <textarea onChange={handleInputChange} required name='description' defaultValue={review?.description} id="description" rows='3' placeholder="Description" className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white"></textarea>
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