import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const goBackToHome = ()=>{
        navigate("/");

    }
    return (
        <>
        <div className='flex'>
            <span>Something went wrong in the application</span>
            <button onClick={goBackToHome} className='border border-blue-500 p-4'></button>

        </div>
        </>
    );
}


export default ErrorPage;
