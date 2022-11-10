import React, {  useEffect, useState } from 'react';
// import { AuthContext } from '../../contexts/UserContext';
import { Table, Tbody } from 'react-super-responsive-table';
import ShowItems from './ShowItems';

const ShowReview = ({ service }) => {

    // const {user} = useContext(AuthContext);
    const [show, setShow] = useState([]);

    useEffect(() => {
        fetch('https://life-of-travel-server-three.vercel.app/review', {
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
                <Table className="table w-full">
                    <Tbody>
                        {
                            show.map(showItem => <ShowItems key={showItem._id} showItem={showItem}></ShowItems>)
                        }
                    </Tbody>
                </Table>
            </div>
        </section>
    );
};

export default ShowReview;