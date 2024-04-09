import React from 'react';
import './Home.css'
import Sl from './Sl';
import { Link } from 'react-router-dom';
 

const Home = () => {
    const clipPathStyle = {
        clipPath: 'polygon(0 0, 100% 0%, 100% 40%, 50% 74%, 0 40%)',
    };

    return (
        <div clsssName='xs:w-full'>
            <div style={clipPathStyle} className='bg-slate-200   absolute w-full xs:w-full xs:h-[1000px] sm:h-[700px] h-[700px] flex flex-col text-center'>
                <div className='container xs:w-full'>
                    <h1 className='text-slate-950 mt-10 max-auto   text-5xl font-sans font-bold'>Plexus Digital <span className='text-blue-500'>Marketing</span>   </h1>
                    <p className='text-slate-600 xs:w-[100%]  sm:w-full md:w-[50%] w-[50%] mx-auto mt-4  font-nunito '>Welcome to Plexus Service, your gateway to digital success! Elevate your brand with our cutting-edge strategies, driving meaningful growth. </p>
                    <Link to='/contactpage'> <button className='bg-blue-500 hover:bg-blue-600 font-nunito text-white w-[100px] h-[40px] rounded mx-auto mt-4'>Get Start</button>
                    </Link>
                </div>
            </div>
            <div className='container flex justify-center relative items-center  xs:top-[530px]   lg:top-[250px] sm:top-[360px]  md:top-[270px]  top-[250px]'>
                <div className='bg-slate-950 xs:w-[100%]  w-full h-[400px] text-center items-center flex  justify-center rounded'>
                    <Sl />
                    

                </div>
            </div>
        </div>
    );
};

export default Home;


