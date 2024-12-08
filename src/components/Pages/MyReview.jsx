import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";


const MyReview = () => {
  const { user } = useContext(AuthContext)  
  const [reviews, setReviews] = useState([]);

  
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/addReview?email=${user.email}`) 
        .then((res) => res.json())
        .then((data) => setReviews(data))
        .catch((err) => console.error("Error fetching reviews:", err));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addReview/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = reviews.filter((rev) => rev._id !== id);
              setReviews(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto px-6 py-10">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
        My Reviews
      </h1>
      {reviews.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden border">
            <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Game Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Published
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr
                  key={review._id}
                  className="border-b transition-colors hover:bg-gray-100"
                >
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {review.gameTitle}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {review.rating}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {review.publishingYear}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <Link
                      to={`/updateReview/${review._id}`}
                      className="inline-block bg-blue-500 text-white text-sm md:text-base py-1 px-3 md:px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 mx-1"
                    >
                      Update
                    </Link>

                    <button
                      onClick={() => handleDelete(review._id)}
                      className="inline-block bg-red-500 text-white text-sm md:text-base py-1 px-3 md:px-4 rounded-lg shadow-md hover:bg-red-600 transition-colors mx-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600 text-center text-lg mt-10">
          No Reviews Found
        </p>
      )}
    </div>
  );
};

export default MyReview;
