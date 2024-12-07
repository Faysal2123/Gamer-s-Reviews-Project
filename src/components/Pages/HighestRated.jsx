import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HighestRated = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/highestRatedGames")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error fetching highest-rated games:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Highest Rated Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game._id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"
          >
            <img
              src={game.image}
              alt={game.gameTitle}
              className="w-full h-60  rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{game.gameTitle}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {game.Description?.slice(0, 100)}...
            </p>
            <p className="text-yellow-500 font-bold">Rating: {game.rating}</p>
            <button
              onClick={() => navigate(`/reviewDetails/${game._id}`)}
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

export default HighestRated;
