import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../providers/AuthProvider';



const Registration = () => {


    const { user, createUser } = useContext(userContext);


    const handleRegistration = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="hero min-h-screen bg-slate-600">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-black">Registration!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm  bg-base-100">
                    <form
                        onSubmit={handleRegistration}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                        </div>
                        <p>have an account....<span className='btn btn-link'> <Link to="/login">login</Link> </span> </p>
                    
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;