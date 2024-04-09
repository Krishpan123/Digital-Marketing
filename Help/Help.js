import React from 'react';
import help from './img/help.png';
import ButtonFormet from '../ContactPage/ButtonFormet';
import { Link } from 'react-router-dom';

const Help = () => {
    return (
        <div className='container mt-40'>
            <h1 className='text-5xl font-bold'>How Can We <span className='text-blue-500'>Help You?</span></h1>
            <p className='mt-2 '>Let's Do Work Together Take Your First Step</p>
            <div>
            </div> <img src={help} alt="" />
            <div className='mt-4 flex xs:flex-col sm:flex-row   text-center items-center justify-center gap-4'>
                <Link to='/contactpage'>  <ButtonFormet>Get A Free Consultation</ButtonFormet></Link>
                <Link to='/contactpage'> <ButtonFormet>Get Demo</ButtonFormet></Link>
            </div>

        </div>
    );
};

export default Help;