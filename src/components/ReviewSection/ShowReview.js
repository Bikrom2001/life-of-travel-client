import React, { useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../contexts/UserContext';
import ShowItems from './ShowItems';

const ShowReview = ({service}) => {

    // const {user} = useContext(AuthContext);
    const [show, setShow] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('doctor-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setShow(data))
    }, [])

    console.log(show);


    return (
        <section className='pt-9 container max-w-6xl p-6 mx-auto'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <tbody>
                           {
                            show.map(showItem => <ShowItems key={showItem._id} showItem={showItem}></ShowItems>)
                           }
                        </tbody>
                    </table>
                </div>
            </section>
    );
};

export default ShowReview;