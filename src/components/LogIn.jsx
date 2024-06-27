import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../providers/AuthProvider';



const LogIn = () => {

    const {signUser}= useContext(userContext);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        signUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset();
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-slate-600">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-black">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm  bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
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
                            <button name='submit' className="btn btn-primary">Login</button>
                        </div>
                        <p>create account...<span className='btn btn-link'> <Link to="/registration">register</Link> </span> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;