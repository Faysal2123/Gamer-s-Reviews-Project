import React, { useState, useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const AllReviews = () => {
  const reviews = useLoaderData();
  const [filteredReviews, setFilteredReviews] = useState(reviews);
  const [selectedSort, setSelectedSort] = useState("rating-asc");
  const [selectedGenre, setSelectedGenre] = useState("");
  const navigate=useNavigate()


  const sortReviews = (reviews, sortOption) => {
    let sortedData = [...reviews];

    if (sortOption === "rating-asc") {
      sortedData.sort((a, b) => a.rating - b.rating);
    } else if (sortOption === "rating-desc") {
      sortedData.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "year-asc") {
      sortedData.sort((a, b) => a.publishingYear - b.publishingYear);
    } else if (sortOption === "year-desc") {
      sortedData.sort((a, b) => b.publishingYear - a.publishingYear);
    }

    return sortedData;
  };

  const filterReviewsByGenre = (reviews, genre) => {
    if (!genre) return reviews;
    return reviews.filter((review) =>
      review.genre.toLowerCase().includes(genre.toLowerCase())
    );
  };

  useEffect(() => {
    let updatedReviews = filterReviewsByGenre(reviews, selectedGenre);
    updatedReviews = sortReviews(updatedReviews, selectedSort);
    setFilteredReviews(updatedReviews);
  }, [reviews, selectedSort, selectedGenre]);

  const genres = [...new Set(reviews.map((review) => review.genre))];

  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4 text-center text-gray-900">All Reviews</h1>
    <p className="text-center mb-8 text-gray-600">Total Reviews: {filteredReviews.length}</p>
  
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-x-4 space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-2">
        <label htmlFor="sort" className="text-lg text-gray-700 font-semibold">
          Sort By:
        </label>
        <select
          id="sort"
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="rating-asc">Rating (Low to High)</option>
          <option value="rating-desc">Rating (High to Low)</option>
          <option value="year-asc">Year (Old to New)</option>
          <option value="year-desc">Year (New to Old)</option>
        </select>
      </div>
  
      <div className="flex items-center space-x-2">
        <label htmlFor="genre" className="text-lg text-gray-700 font-semibold">
          Filter by Genre:
        </label>
        <select
          id="genre"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Genres</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredReviews.map((review) => (
        <div
          key={review._id}
          className="bg-white shadow-md rounded-lg p-4 border border-gray-200 md:hover:scale-105 md:hover:shadow-xl transition duration-300"
        >
          <img
            src={review.image}
            alt={review.gameTitle}
            className="w-full h-60 rounded-md mb-4 object-cover"
          />
          <h3 className="text-lg font-semibold mb-2 text-gray-900">{review.gameTitle}</h3>
          <p className="text-sm text-gray-600 mb-2">
            Rating: <span className="font-medium text-blue-500">{review.rating}</span>
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Published: <span className="font-medium text-blue-500">{review.publishingYear}</span>
          </p>
          <p className="text-sm text-gray-600 truncate mb-3">Description: {review.Description}</p>
          <button
            onClick={() => navigate(`/reviewDetails/${review._id}`)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Explore Details
          </button>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default AllReviews;
