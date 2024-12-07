import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal"; // Using Slide animation

const WatchVideo = () => {
  const [games, setGames] = useState([]);

  // Fetch games from the backend
  useEffect(() => {
    fetch("http://localhost:5000/getAllGames")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error fetching games:", error));
  }, []);

  if (games.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-gradient-to-b from-gray-100 via-white to-gray-200 dark:bg-gray-900 p-6">
      <h2 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-300 mb-8">
        Watch Video of Popular Games
      </h2>

     
      <Slide cascade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {games.map((game) => (
            <div
              key={game._id}
              className="relative bg-blue-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
            
              <img
                src={game.image}
                alt={game.gameTitle}
                className="w-full h-60"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {game.gameTitle}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                  {game.Description.slice(0, 120)}...
                </p>
              </div>

              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition">
                <a
                  href={game.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700"
                >
                  Watch Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </div>
  );
};

export default WatchVideo;
