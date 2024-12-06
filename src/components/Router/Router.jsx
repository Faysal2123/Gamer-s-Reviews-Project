import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import AllReviews from "../Pages/AllReviews";
import AddReview from "../Pages/AddReview";
import MyReview from "../Pages/MyReview";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import WatchList from "../Pages/WatchList";
import UpdateReview from "../Pages/UpdateReview";
import ReviewDetailsPage from "../Pages/ReviewDetailsPage";

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
                element:<AllReviews></AllReviews>,
                loader:()=>fetch('http://localhost:5000/addReview')

            },
            {
                path:'/addReviews',
                element:<AddReview></AddReview>
            },
            {
                path:'/myReviews',
                element:<MyReview></MyReview>,
                loader:()=>fetch('http://localhost:5000/addReview')
            },
            {
                path:'/watchlists',
                element:<WatchList></WatchList>,
                loader:()=>fetch('http://localhost:5000/watchlist')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/updateReview/:id',
                element:<UpdateReview></UpdateReview>,
                loader:({params})=>fetch(`http://localhost:5000/addReview/${params.id}`)
            },
            {
                path:'/reviewDetails/:id',
                element:<ReviewDetailsPage></ReviewDetailsPage>,
                loader:({params})=>fetch(`http://localhost:5000/addReview/${params.id}`)
            }
        ]
    }
 ])

 export default router;