import React, { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2'

const AddReview = () => {
  const {user}=useContext(AuthContext)
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const image=form.image.value
        const gameTitle=form.gameTitle.value
        const Description=form.Description.value
        const rating=form.rating.value;
        const publishingYear=form.publishingYear.value;
        const genre=form.genre.value;
        const userName = user?.displayName || "";
        const email=user?.email || "";
        const review={image,gameTitle,Description,rating,publishingYear,genre,userName,email}
        console.log(review)
        fetch('http://localhost:5000/addReview',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(review)
        })
        .then(res => res.json())
  .then(data => {
    console.log(data);
    if (data.insertedId) {
      Swal.fire(
        'Review Added!',
        'Your review has been successfully submitted.',
        'success'
      );
    }
  })
    }
    return (
        <div>
            <div className="max-w-3xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-semibold text-center mb-4">Add New Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Game Cover Image (URL)</label>
          <input
            name="image"
            type="text"              
            placeholder="Enter game cover image URL"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Game Title</label>
          <input
            name="gameTitle"
            type="text"
           
            placeholder="Enter game title"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Review Description</label>
          <textarea
            name="Description"
          
            placeholder="Write your detailed review here"
            className="textarea textarea-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rating (1-10)</label>
          <input
            type="number"
            name="rating"
          
            min="1"
            max="10"
            placeholder="Enter rating"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Publishing Year</label>
          <input
            type="number"
            name="publishingYear"
          
            placeholder="e.g., 2024"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Genre</label>
          <select
            name="genre"
            
            className="select select-bordered w-full"
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
        <div className="mb-4">
          <label className="block text-gray-700">User Email</label>
          <input
            type="email"
            name='email'
            value={user?.email || ""}
            readOnly
            className="input input-bordered w-full text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 ">User Name</label>
          <input          
            type="text"
            name='userName'
            value={user?.displayName || ""}
            readOnly
            className="input input-bordered w-full text-black"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Submit Review
        </button>
      </form>
      <Toaster />
    </div>
        </div>
    );
};

export default AddReview;