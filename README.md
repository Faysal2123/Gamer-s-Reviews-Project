Game Glimpse - Full Stack Application
Game Glimpse is a platform for managing game reviews, watchlists, and exclusive deals. This repository contains both the frontend and backend code for the application.

Tech Stack:
Frontend:

React: JavaScript library for building user interfaces
Tailwind CSS: Utility-first CSS framework
React Router: For routing between different pages
React Hot Toast: For toast notifications


Backend:

Node.js: JavaScript runtime for server-side code
Express.js: Web framework for building APIs
MongoDB: NoSQL database for storing reviews and watchlist data
CORS: For handling cross-origin requests
dotenv: For managing environment variables
Frontend Features:
Homepage: Displays top-rated games and promotional banners.
Game Reviews: Users can view, add, update, and delete game reviews.
Watchlist: Users can manage their personal watchlist of games.
Coupons: Collect and view discounts and coupon codes from various stores.
Responsive Design: The application is mobile-friendly.
Backend Features:
Game Reviews Management:

Add, view, update, and delete game reviews.
Sort and filter reviews by genre and rating.
Watchlist:

Add and remove games from the user's watchlist.
Top-rated Games: Fetch top-rated games sorted by ratings.

API Endpoints:
1. Game Reviews
POST /addReview: Add a new game review.
GET /addReview: Retrieve all game reviews, with optional genre and sort filters.
GET /addReview/:id: Get a specific review by ID.
PUT /addReview/:id: Update a specific review.
DELETE /addReview/:id: Delete a review by ID.
2. Watchlist
POST /watchlist: Add a game to the watchlist.
GET /watchlist: Retrieve all games in the watchlist.
DELETE /watchlist/:id: Remove a game from the watchlist by ID.
3. High-Rated Games
GET /highestRatedGames: Fetch the top 6 highest-rated games.
4. Game Collection
GET /getAllGames: Retrieve a paginated list of games.


5.Environment Variables:
Frontend:

Set the API URL for the backend.
Backend:

DB_USER: MongoDB username
DB_PASS: MongoDB password
