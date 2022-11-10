import React, { useContext, } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/UserContext';
import ShowReview from './ShowReview';

const ReviewSection = ({ service }) => {


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

        fetch('https://life-of-travel-server-three.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form.reset();
                    toast.success('successfully create review !', { autoClose: 1500 });
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


            <ShowReview service={service}></ShowReview>



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
                                        <input name='firstname' id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring p-3 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white" required />
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