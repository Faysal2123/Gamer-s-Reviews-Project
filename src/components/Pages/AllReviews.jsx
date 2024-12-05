import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllReviews = () => {
    // Fetch reviews data from loader
    const reviews = useLoaderData();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 flex justify-center">All Reviews</h1>
            <p className=''>Total Reviews: {reviews.length}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map(review => (
                    <div
                        key={review._id}
                        className="bg-white shadow-md rounded-lg p-4 border border-gray-200 md:hover:scale-105 md:hover:shadow-xl"
                    >
                        <img
                            src={review.image}
                            alt={review.gameTitle}
                            className="w-full h-60  rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2">{review.gameTitle}</h3>
                        <p className="text-sm text-gray-600 mb-2">
                            Rating: <span className="font-medium">{review.rating}</span>
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                            Published: <span className="font-medium">{review.publishingYear}</span>
                        </p>
                        <p className="text-sm text-gray-600 truncate">
                            Description: {review.Description}
                        </p>
                        <Link
                            to={`/review/${review._id}`}
                            className="mt-4 inline-block bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
                        >
                            Explore Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllReviews;
