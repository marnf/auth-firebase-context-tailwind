import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../providers/AuthProvider';



const Header = () => {

    const {user, logOut} = useContext(userContext);
    console.log(user);

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(error =>{console.error(error)})
    }


    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <button className="btn btn-ghost text-xl">Test-Context</button>
                <Link className="btn btn-ghost text-xl" to='/'>Home</Link>
                {user && <Link className="btn btn-ghost text-xl" to='/orders'>orders</Link>}
                <Link className="btn btn-ghost text-xl" to='/login'>login</Link>
                <Link className="btn btn-ghost text-xl" to='/Registration'>Register</Link>
                {
                    user ? <span>{user.email}  <button onClick={handleLogOut} className="btn btn-active btn-ghost ml-2">log out</button> </span>
                   : <Link to='/login' className="btn btn-active btn-ghost">log in</Link>
                }
            </div>

        </div>
    );
};

export default Header;