import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../Firebase/Firebase.init';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const auth = getAuth(app);

const Adminpage = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='container h-[80vh]  flex'>
            <div className='w-[20%] h-[70vh] border rounded mx-2 my-2'>
                <div className='text-center items-center'>
                    <FontAwesomeIcon className='text-blue mt-6 mb-4 hover:text-blue-500 duration-300' icon={faUser} size='2xl' />{user.userName} <br />
                    <button onClick={() => signOut(auth)} className='text-black'>logout</button>
                </div>

            </div>
            <div className='w-[80%]  mb-10'>
                <h1 className='text-center font-bold text-5xl mt-5'>Admin Pannel</h1>
                <div className='grid grid-cols-3 gap-3 mt-10'>
                    <Link to='/addblog'> <div className='w-full flex h-32 rounded bg-red-600 text-white text-2xl items-center text-center justify-center font-verdina'>Add Blog</div></Link>
                    <Link to='/manageblog'> <div className='w-full flex h-32 rounded   text-white text-2xl items-center text-center justify-center font-verdina bg-blue-600'>Delete Blog</div> </Link>
                    <Link to='/edit'> <div className='w-full flex h-32 rounded   text-white text-2xl items-center text-center justify-center font-verdina bg-green-600'>Edit Blog</div> </Link>

                </div>

            </div>

        </div>
    );
};

export default Adminpage;