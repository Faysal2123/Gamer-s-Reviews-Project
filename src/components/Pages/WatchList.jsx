import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider"; // AuthContext import
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const WatchList = () => {
  const { user } = useContext(AuthContext); 
  const [watchlists, setWatchlists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      
      fetch(`http://localhost:5000/watchlist?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setWatchlists(data);
        })
        .catch((error) => {
          console.error("Error fetching watchlist:", error);
          toast.error("Failed to load watchlist");
        });
    } else {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleRemove = (id) => {
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
        fetch(`http://localhost:5000/watchlist/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
              const remaining = watchlists.filter((watch) => watch._id !== id);
              setWatchlists(remaining);
            }
          })
          .catch((error) => {
            console.error("Error removing item:", error);
            toast.error("Failed to remove item");
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">My Watchlist</h1>
      {watchlists.length === 0 ? (
        <p className="text-gray-600">Your watchlist is empty.</p>
      ) : (
        <div className="block sm:hidden">
          {watchlists.map((item) => (
            <div key={item._id} className="border rounded-lg p-4 mb-4 bg-white shadow">
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.gameTitle}
                  className="h-16 w-16 object-cover rounded"
                />
                <div>
                  <h2 className="font-bold text-lg">{item.gameTitle}</h2>
                  <p className="text-sm text-gray-500">User Name: {item.userName}</p>
                  <p className="text-sm text-gray-500">User: {item.addedBy}</p>
                  <p className="text-sm text-gray-500">Rating: {item.rating}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="mt-3 w-full bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="hidden sm:block">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Game Title</th>
              <th className="px-4 py-2 border">User Name</th>
              <th className="px-4 py-2 border">User</th>
              <th className="px-4 py-2 border">Rating</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {watchlists.map((item) => (
              <tr key={item._id} className="text-center">
                <td className="px-4 py-2 border">
                  <img
                    src={item.image}
                    alt={item.gameTitle}
                    className="h-16 w-16 object-cover mx-auto rounded"
                  />
                </td>
                <td className="px-4 py-2 border">{item.gameTitle}</td>
                <td className="px-4 py-2 border">{item.userName}</td>
                <td className="px-4 py-2 border">{item.addedBy}</td>
                <td className="px-4 py-2 border">{item.rating}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WatchList;
