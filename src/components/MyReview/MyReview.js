import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import ReviewTable from '../ReviewTable/ReviewTable';

const MyReview = () => {
    const { user } = useContext(AuthContext);

    const [reviews, setreviews] = useState([]);
    console.log(reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setreviews(data);
            })
    }, [user?.email])


    return (
        <div>
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
                                    reviews.map(review => <ReviewTable key={review._id} review={review}></ReviewTable>)
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