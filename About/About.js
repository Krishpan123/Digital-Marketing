import React from 'react';
import { Link } from 'react-router-dom';
import ButtonFormet from '../ContactPage/ButtonFormet';
import Service from '../Service/Service';
import Help from '../Help/Help';
import aboutus from './img/aboutus.png';


const About = () => {

    return (
        <div id='about' className='mt-[400px] xs:mt-[750px] sm:mt-[550px] md:mt-[400px] '>
            <div className='bg-slate-950  xs:h-[750px]  sm:h-[700px]  mt-[250px] absolute w-full h-[700px] flex flex-col text-center'>
            </div>
            <div className='container flex justify-center relative items-center    '>
                <div className='bg-white border w-full h-[500px] xs:h-auto xs:flex-col  sm:flex   flex-row   rounded'>
                    <div className=' w-[50%] xs:w-[100%] sm:w-[50%] flex text-center items-center  '>
                        <img className=' h-full' src={aboutus} alt="" />
                    </div>
                    <div className=' w-[50%] xs:w-[100%] xs:items-center xs:px-2 sm:items-start sm:w-[50%] flex flex-col justify-center pe-4'>
                        <h1 className='text-5xl font-bold xs:mt-6 sm:mt-0 font-verdina '>About Us</h1>
                        <p className='text-2xl mt-2 xs:text-justify sm:text-start text-blue-500 font-nunito'>
                            We build relationship and reach clients worldwide.
                        </p>
                        <p className='text-sm font-nunito text-justify  mt-3'>
                            We are experienced and professional digital marketing agency that help business achieve massive success and build strong online presence with high quality personalized services to our clients.
                            We work together to guarantee smooth elevation of brands and execute the development campaign for all business online.
                            Each member of our team are equipped with professional skills to excel in their field. We provide personalized
                        </p>
                        <div className='mt-5 xs:mb-3 sm:mb-0'>
                            <Link to='/contactpage'><ButtonFormet >Take First Step</ButtonFormet></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative text-center items-center justify-center flex flex-col'>
                <h1 className='text-slate-200 text-5xl font-bold  font-verdina text-center pt-20'>Our <span className='text-blue-500'>Services</span></h1>
                <p className='text-slate-300 text-xl w-[50%] xs:w-[100%] xs:text-sm md:w-[50%] md:text-xl  font-nunito  mt-2'>With us we build relationship and get data driven result. Do your best while our agency guarantees your business strong online presence!
                </p>
                <Service />
                <Help />
            </div>
        </div>
    );
};

export default About;