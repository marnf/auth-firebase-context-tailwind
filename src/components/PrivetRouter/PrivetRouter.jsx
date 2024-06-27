import React, { useContext } from 'react';
import { userContext } from '../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRouter = ({children}) => {

    const {user, loading} = useContext(userContext);

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' replace={true}></Navigate>



    return (
        <div>
            <h1>this is privet page</h1>
        </div>
    );
};

export default PrivetRouter;