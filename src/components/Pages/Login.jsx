import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import animation1 from '../../assets/lottie/Animation1.json'
import Lottie from "lottie-react";

const Login = () => {
  const { userLogin, signInWithGoogle, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;

        
        fetch(`https://assignment-10-server-sigma-blond.vercel.app/addReview/${email}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email, lastSignInTime }),
        })
          .then((res) => res.json())
          .then((data) => console.log("Sign-in info updated in DB",data));

        toast.success("Login Successful");
        setTimeout(() => {
          navigate(location?.state || "/");
        }, 1000);
      })
      .catch((err) => {
        console.log("Error during Login:", err.message);
        setError(err.message);
        toast.error("Login Failed");
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);

        const lastSignInTime = user.metadata?.lastSignInTime;

       
        fetch(`https://assignment-10-server-sigma-blond.vercel.app/addReview/${user.email}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: user.email, lastSignInTime }),
        })
          .then((res) => res.json())
          .then((data) => console.log("Google login info updated in DB",data));

        toast.success("Google Login Successful");
      })
      .catch((err) => {
        console.error("Error during Google Login:", err.message);
        toast.error(`Google Login Failed: ${err.message}`);
      });
  };

  return (
    <div className="flex justify-center md:flex-row flex-col items-center ">
      <div className="flex items-center justify-center">
        <Lottie className="lg:h-80 lg:w-80 h-48" animationData={animation1}></Lottie>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-6 mb-6 lg:mt-14">
        <form className="card-body" onSubmit={handleLoginIn}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <div>
            <p>
              Don't have an account{" "}
              <Link to="/register" className="font-semibold text-blue-600">
                Register
              </Link>
            </p>
          </div>
          <div className="divider">OR</div>
          <button
            className="btn btn-outline btn-info"
            onClick={handleGoogleLogin}
          >
            Sign in with Google
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
