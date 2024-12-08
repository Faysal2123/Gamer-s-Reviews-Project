import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const ReviewDetailsPage = () => {
  const reviewDetails = useLoaderData();
  console.log(reviewDetails)
  
  const { user } = useContext(AuthContext);
  const { _id, image, gameTitle, Description, rating, genre, userName, email } = reviewDetails;

  const handleAddToWatch = () => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to be logged in to add to the watchlist!',
      });
      return;
    }

    // Fetch request to add the item to the watchlist
    fetch("http://localhost:5000/watchlist", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reviewId: _id,
        gameTitle,
        addedBy: user.email,
        image,
        rating,
        userName
      
    })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire('Added!', 'The review has been added to your watchlist.', 'success');
        } else {
          Swal.fire('Failed!', 'Unable to add to the watchlist. Try again later.', 'error');
        }
      })
      .catch((error) => console.error('Error adding to watchlist:', error));
  };

  return (
    <div className="w-11/12 mx-auto px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border">
        <img
          src={image}
          alt={gameTitle}
          className="w-full md:h-96 h-60"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{gameTitle}</h2>
          <p className="text-gray-600 mt-2">{Description}</p>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
              Rating: {rating}/10
            </span>
            <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
              Genre: {genre}
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Reviewer Info:
            </h3>
            <p className="text-gray-600">Name: {userName}</p>
            <p className="text-gray-600">Email: {email}</p>
          </div>
          <button
            onClick={handleAddToWatch}
            className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetailsPage;
