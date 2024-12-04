import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
const Register = () => {
    const{createUser,setUser}=useContext(AuthContext)
    const[error,setError]=useState("")
    const validatePassword = (password) => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasMinLength = password.length >= 6;

        if (!hasUppercase) {
            toast.error("Password must contain at least one uppercase letter.");
            return false;
        }
        if (!hasLowercase) {
            toast.error("Password must contain at least one lowercase letter.");
            return false;
        }
        if (!hasMinLength) {
            toast.error("Password must be at least 6 characters long.");
            return false;
        }

        return true;
    };
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const photo=form.photo.value;
        const password=form.password.value;
        if(!validatePassword(password)){
            return
        }
        console.log({name,email,photo,password})
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            setUser(user)
            toast.success("Registration successful!")
        })
        .catch((err)=>{
            setError(err.message)
            toast.error(`Registration Failed:${err.message}`,{
                position:'top-center'
            })
        })

    }
  return (
    <div className="flex justify-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-5 mb-5">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo Url"
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
            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-error">Register</button>
          </div>
          <div>
            <p>
              Already have an account{" "}
              <Link to="/login" className="font-semibold text-blue-600">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
