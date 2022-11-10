import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/UserContext';
import ReviewTable from '../ReviewTable/ReviewTable';
import UserTitle from '../UserTitle/UserTitle';

const MyReview = () => {

    UserTitle('My-Review');

    const { user } = useContext(AuthContext);

    const [reviews, setreviews] = useState([]);

    useEffect(() => {
        fetch(`https://life-of-travel-server-three.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('doctor-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setreviews(data);
            })
    }, [user?.email])


    const handleDelete = (id) => {
        fetch(`https://life-of-travel-server-three.vercel.app/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('successfully Delete !', { autoClose: 1500 });
                    const remaining = reviews.filter(rev => rev._id !== id);
                    setreviews(remaining);
                }
            })
    }


    return (
        <div>

            <div className="space-y-2 text-center pt-6">
                <h2 className="text-3xl font-bold">My Services Review </h2>
                <p className="font-serif text-sm dark:text-gray-400">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>

            {
                reviews.length > 0 ?
                    <div className="overflow-x-auto w-full p-6">
                        <table className="table w-full border shadow-lg border-gray-500">
                            <thead>
                                <tr>
                                    <th>Author</th>
                                    <th>Review Title</th>
                                    <th>Review</th>
                                    <th>update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reviews.map(review => <ReviewTable key={review._id} review={review} handleDelete={handleDelete}></ReviewTable>)
                                }
                            </tbody>
                        </table>
                    </div>
                    : <p className="px-6 py-8 text-center text-3xl font-bold"><span className='font-serif text-lg dark:text-gray-400'>Don't have a review yet?</span> <br /> No reviews were added !
                        <Link to='/allservices' className="hover:underline dark:text-violet-400"> Add Review</Link>
                    </p>
            }

        </div>
    );
};

export default MyReview;