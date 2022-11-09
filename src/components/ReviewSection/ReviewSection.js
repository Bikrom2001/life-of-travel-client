import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/UserContext';

const ReviewSection = ({service}) => {

    const { user } = useContext(AuthContext);

    const handlesubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstname.value} ${form.lastname.value}`;
        const rating = form.rating.value;
        const photoURL = form.photoURL.value;
        const description = form.description.value;


        const addReview = {
            userEmail: user.email,
            serviceName: service.title,
            service: service._id,
            name: name,
            rating: rating,
            photoURL: photoURL,
            description: description
        }
        
        fetch('http://localhost:5000/reviews',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                form.reset();
                toast.success('successfully create review !',{autoClose: 1500});
            }
        })
        .catch(error => console.error(error));
    }

    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">

            <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                <p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
            </div>


            <section className='pt-9 container max-w-6xl p-6 mx-auto'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <tbody>
                            <tr>
                                <td><div className="flex space-x-4">
                                    <div>
                                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Leroy Jenkins</h4>
                                        <span className="text-xs dark:text-gray-400">2 days ago</span>
                                    </div>
                                </div></td>
                                <td>{user?.email}</td>
                                <td><div className="flex items-center space-x-2 dark:text-yellow-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                    </svg>
                                    <span className="text-xl font-bold">4.5</span>
                                </div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>



            {
                user?.email ?
                    <>
                        <form onSubmit={handlesubmit} className="container max-w-6xl p-6 mx-auto flex flex-col space-y-12 ng-untouched ng-pristine ng-valid">
                            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                    <p className="font-medium">Add Services</p>
                                    <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                                </div>
                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="firstname" className="text-sm">First name</label>
                                        <input  name='firstname' id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring p-3 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white" required />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="lastname" className="text-sm">Last Name</label>
                                        <input name='lastname' id="lastname" type="text" placeholder="Last Name" className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white" required />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="rating" className="text-sm">Rating</label>
                                        <input name='rating' id="rating" type="text" placeholder="Rating" className="w-full rounded-md focus:ring p-3 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white" required />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="photoURL" className="text-sm">Photo URL</label>
                                        <input name='photoURL' id="photoURL" type="text" placeholder="Photo URL" className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white" required />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="description" className="text-sm"> Description</label>
                                        <textarea required name='description' id="description" rows='3' placeholder="Description" className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Review </button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </>
                    :
                    <>
                        <p className="px-6 py-8 text-center text-3xl font-bold"><span className='font-serif text-lg dark:text-gray-400'>Don't have an account yet?</span> <br /> Please login to add a review !
                            <Link to='/login' className="hover:underline dark:text-violet-400"> Login</Link>
                        </p>
                    </>
            }
        </section>
    );
};

export default ReviewSection;