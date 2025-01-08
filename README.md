🎮 Game Application

The Game Application is a full-stack gaming platform designed for game enthusiasts to explore, share, and manage game reviews. It provides secure user authentication, a personalized watchlist, and game discovery features with an intuitive, responsive user interface. Built with React, Express.js, and MongoDB, the application ensures a seamless and engaging user experience.

🚀 Key Features

🔐 Authentication & User Management

1.User Registration: Secure account creation via Firebase Authentication (Email & Google).

2.User Login: Fast and secure authentication using Firebase.

3.Password Validation: Strong password enforcement for enhanced security.

📝 Game Review System

4.Add, Update & Delete Reviews: Users can write, edit, and remove their game reviews.
Detailed Review Insights: Each review includes title, genre, rating, and user feedback.

5.Sorting & Filtering: Reviews can be filtered by genre and sorted by rating.

📌 Personalized Watchlist

6.Add & Remove Games: Users can curate their own list of games to follow.

7.Easy Access: Retrieve the watchlist anytime based on user authentication.
🌟 Top-Rated Games & Discovery

8.Highest-Rated Games: Browse the top 6 games based on community reviews.

9.Paginated Game Listings: Load games dynamically with pagination support.

📱 Responsive & Interactive UI


10.Mobile-Friendly: Optimized for seamless performance across all devices.
Smooth User Experience: Clean UI with interactive elements using SweetAlert2 & React Hot Toast.

🛠 Technology Stack



Frontend:


🔹 React.js, React Router, Tailwind CSS

🔹 UI Enhancements: SweetAlert2, React Hot Toast

Backend:


🔹 Node.js, Express.js

Database:


🔹 MongoDB (NoSQL Database)

Authentication & Security:

🔹 Firebase Authentication (Email & Google)

🔹 JWT (JSON Web Token) for secure API access

Tools & Workflow:

🔹 Git & GitHub for version control

🔹 NPM for package management

🔹 RESTful API architecture

📌 API Endpoints

🔐 User Authentication

📌 POST /register – Create a new user account.

📌 POST /login – Authenticate user login credentials.

📌 POST /validatePassword – Verify password strength.


📝 Game Reviews

📌 POST /addReview – Add a new game review.

📌 GET /reviews – Retrieve all reviews (filters: email, genre, rating).

📌 PUT /review/:id – Update an existing review.

📌 DELETE /review/:id – Delete a review.


📌 Watchlist Management

📌 POST /watchlist – Add a game to the user’s watchlist.

📌 GET /watchlist – Retrieve the user’s saved games.

📌 DELETE /watchlist/:id – Remove a game from the watchlist.


🎮 Game Discovery & Miscellaneous

📌 GET /highestRatedGames – Retrieve the top 6 highest-rated games.

📌 GET /getAllGames – Fetch the next set of 9 games (for pagination).


📦 Dependencies & DevDependencies

🔹 Dependencies

Frontend: React.js, React Router, Tailwind CSS, Firebase

Backend: Express.js, MongoDB, Mongoose, CORS, JWT

UI Enhancements: SweetAlert2, React Hot Toast

🔹 DevDependencies


Nodemon – Automatic server restart during development

ESLint & Prettier – Code formatting & linting

🌐 Live Demo

🔗 Live Link: https://assignment-10-212c3.web.app/
