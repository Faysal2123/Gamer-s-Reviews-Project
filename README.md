Game Application
The Game Application is a full-stack platform designed for game enthusiasts. It allows users to share and explore game reviews, manage their personal watchlist, and discover highly rated games across different genres. Built with React, Express.js, and MongoDB, this application offers an interactive and user-friendly experience.

Key Features
User Authentication: Secure login and sign-up functionality using Firebase Authentication.
Game Reviews: Users can add, update, delete, and view detailed reviews for games they’ve played.
Watchlist Management: Users can easily add and remove games from their personalized watchlist.
Top Rated Games: Users can browse the highest-rated games based on community reviews.
Responsive Design: A mobile-friendly UI that provides a seamless experience across all device types.
Sorting and Filtering: Game reviews can be filtered by genre and sorted by rating, making it easier for users to find relevant content.
Technology Stack
Frontend: React, React Router, Tailwind CSS, React Hot Toast, SweetAlert2
Backend: Node.js, Express.js
Database: MongoDB
Authentication: Firebase Authentication (via Email and Google)

API Endpoints
Reviews
POST /addReview: Add a new game review.

Request Body: JSON object containing game details like title, genre, rating, etc.
GET /addReview: Retrieve all reviews. Supports filtering by email, genre, and sorting by rating.

DELETE /addReview/:id: Delete a specific review by its ID.

PUT /addReview/:id: Update a specific review by its ID.

Watchlist
POST /watchlist: Add a new game to the user's watchlist.

Request Body: JSON object with game details and the user’s email.
GET /watchlist: Retrieve the user's watchlist based on their email address.

DELETE /watchlist/:id: Remove a game from the watchlist by its ID.

Miscellaneous
GET /highestRatedGames: Get the top 6 highest-rated games based on user reviews.

GET /getAllGames: Retrieve the next set of 9 games (for pagination purposes).