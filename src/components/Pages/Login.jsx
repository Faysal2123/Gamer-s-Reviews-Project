import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const {userLogin,signInWithGoogle,setUser}=useContext(AuthContext)
    const [error,setError]=useState("")
    const handleLoginIn=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log({email,password})
        userLogin(email,password)
        .then(result =>{
            const user=result.user;
            setUser(user)
            toast.success("Login Successful")
        })
    }
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success("Google login successful", {
                    position: 'top-center'
                });
            })
            .catch((err) => {
                toast.error(`Google Login Failed: ${err.message}`, {
                    position: 'top-center',
                });
            });
    }
        
  return (
    <div className="flex justify-center ">
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
            <p>Don't have an account <Link to='/register' className="font-semibold text-blue-600">Register</Link></p>
          </div>
          <div className="divider">OR</div>
          <button className="btn btn-outline btn-info" onClick={handleGoogleLogin}>Sign in with Google</button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
