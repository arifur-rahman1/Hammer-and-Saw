import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://hammer-and-saw-server.vercel.app/review'
    ).then(res => res.json())); //https://hammer-and-saw-server.vercel.app

    if (isLoading) {
        return <Loading></Loading>
    }
    // console.log(reviews.);
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-6 place-items-center'>
            {
                
                reviews!== undefined ? reviews.map(review => <ReviewCard
                    key={review._id}
                    review={review}
                ></ReviewCard>): <div className='col-span-3'>Reviews are not available at this moment</div>
            }
        </div>
    );
};

export default Reviews;