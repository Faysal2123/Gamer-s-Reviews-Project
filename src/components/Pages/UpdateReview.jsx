import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const { _id,image, gameTitle, Description, rating, publishingYear, genre } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const gameTitle = form.gameTitle.value;
    const Description = form.Description.value;
    const rating = form.rating.value;
    const publishingYear = form.publishingYear.value;
    const genre = form.genre.value;
    const userName = user?.displayName || "";
    const email = user?.email || "";
    const updateReview = { image, gameTitle, Description, rating, publishingYear, genre, userName, email };

    console.log(updateReview);
    fetch(`http://localhost:5000/addReview/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          Swal.fire("Review Update!", "Review update successfully .", "success");
        }
      });
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full p-8 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Update Your Review</h2>
        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Game Cover Image (URL)</label>
            <input
              name="image"
              defaultValue={image}
              type="text"
              placeholder="Enter game cover image URL"
              className="input input-bordered w-full px-4 py-2 border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Game Title</label>
            <input
              name="gameTitle"
              defaultValue={gameTitle}
              type="text"
              placeholder="Enter game title"
              className="input input-bordered w-full px-4 py-2 border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Review Description</label>
            <textarea
              name="Description"
              defaultValue={Description}
              placeholder="Write your detailed review here"
              className="textarea textarea-bordered w-full px-4 py-2 border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              rows="4"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Rating (1-10)</label>
              <input
                name="rating"
                defaultValue={rating}
                type="number"
                min="1"
                max="10"
                placeholder="Enter rating"
                className="input input-bordered w-full px-4 py-2 border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Publishing Year</label>
              <input
                name="publishingYear"
                defaultValue={publishingYear}
                type="number"
                placeholder="e.g., 2024"
                className="input input-bordered w-full px-4 py-2 border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Genre</label>
            <select
              name="genre"
              defaultValue={genre}
              className="select select-bordered w-full px-4 py-2 border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              required
            >
              <option value="" disabled>
                Select Genre
              </option>
              <option value="Action">Action</option>
              <option value="RPG">RPG</option>
              <option value="Adventure">Adventure</option>
              <option value="Puzzle">Puzzle</option>
              <option value="Strategy">Strategy</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">User Email</label>
            <input
              name="email"
              type="email"
              value={user?.email || ""}
              readOnly
              className="input input-bordered w-full px-4 py-2 bg-gray-100 text-gray-600 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">User Name</label>
            <input
              name="userName"
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="input input-bordered w-full px-4 py-2 bg-gray-100 text-gray-600 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Submit Review
          </button>
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default UpdateReview;
