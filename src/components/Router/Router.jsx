import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import AllReviews from "../Pages/AllReviews";
import AddReview from "../Pages/AddReview";
import MyReview from "../Pages/MyReview";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import WatchList from "../Pages/WatchList";

 const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'/allReviews',
                element:<AllReviews></AllReviews>
            },
            {
                path:'/addReviews',
                element:<AddReview></AddReview>
            },
            {
                path:'/myReviews',
                element:<MyReview></MyReview>
            },
            {
                path:'/watchlists',
                element:<WatchList></WatchList>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
 ])

 export default router;