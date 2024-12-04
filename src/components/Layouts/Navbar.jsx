
import {NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div className="bg-base-300">
         <div className="w-11/12 mx-auto">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold"
            >
              <li>
                <NavLink to="/" className="text-base">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/allReviews" className="text-base">
                  All Reviews
                </NavLink>
              </li>
              <li>
                <NavLink to="/addReviews" className="text-base">
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/myReviews" className="text-base">
                  My Reviews
                </NavLink>
              </li>
              <li>
                <NavLink to="/watchlists" className="text-base">
                  Game WatchList
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center text-center">
            <img
              className="lg:h-20 lg:w-20 h-12 w-12 rounded-full"
              src={logo}
              alt="Game Glimpse Logo"
            />
            <a className="btn btn-ghost md:text-3xl text-2xl font-bold text-blue-950">
              Game Glimpse
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <NavLink to="/" className="text-base">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/allReviews" className="text-base">
                All Reviews
              </NavLink>
            </li>
            <li>
              <NavLink to="/addReviews" className="text-base">
                Add Review
              </NavLink>
            </li>
            <li>
              <NavLink to="/myReviews" className="text-base">
                My Reviews
              </NavLink>
            </li>
            <li>
              <NavLink to="/watchlists" className="text-base">
                Game WatchList
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-accent font-bold">
            Login
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
