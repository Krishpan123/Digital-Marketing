import React from 'react';
import mainlogo from './img/mainlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faCode, faEnvelope, faGears, faHeadset, faLayerGroup, faMap, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div id='footer' className=' bottom-0 w-full'  >
            <div className='bg-slate-950 xs:h-[540px]  md:h-auto sm:h-auto  w-full h-[200px]'>
                <div className='container pb-4 grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center text-center'>
                    <div className='w-full h-full xs:text-center  xs:items-center xs:justify-center flex flex-col items-center justify-center overflow-hidden'>
                        <div>
                            <img className='w-[150px] py-2 items-center justify-center text-center' src={mainlogo} alt="" />
                        </div>
                        <div className='font-nunito     text-sm text-slate-300 whitespace-normal py-2  text-justify'>
                            Your gateway to digital success! Elevate your brand with our cutting-edge strategies, driving meaningful growth.
                        </div>
                    </div>
                    <div className='grid xs:grid-cols-2 '>
                        <div className='w-full  text-slate-300 h-full text-start mt-0'>
                            <p className='ps-10 xs:ps-2 sm:ps-10 font-bold  delay-75 text-blue-500   py-4'>About</p>
                            <p className='ps-10 xs:ps-2 sm:ps-10  delay-75 font-nunito text-sm mt-2'><FontAwesomeIcon className='me-2' icon={faPeopleGroup} />Team</p>
                            <p className='ps-10 xs:ps-2 sm:ps-10  delay-75 font-nunito text-sm mt-2'><FontAwesomeIcon className='me-2' icon={faHeadset} />Support</p>
                            <p className='ps-10 xs:ps-2 sm:ps-10  delay-75 font-nunito text-sm mt-2'><FontAwesomeIcon className='me-2' icon={faBriefcase} />Career</p>
                        </div>

                        <div className='w-full md:hidden text-slate-300 h-full text-start mt-0'>
                            <p className='ps-10 xs:ps-2 sm:ps-10 font-bold  delay-75 text-blue-500   py-4'>Service</p>
                            <p className='ps-10 xs:ps-2 sm:ps-10  delay-75 font-nunito xs:text-sm sm:text-1xl mt-2'><FontAwesomeIcon className='me-2' icon={faCode} />Web  </p>
                            <p className='ps-10 xs:ps-2 sm:ps-10  delay-75 font-nunito xs:text-sm sm:text-1xl mt-2'><FontAwesomeIcon className='me-2' icon={faLayerGroup} />SEO</p>
                            <p className='ps-10 xs:ps-2 sm:ps-10  delay-75 font-nunito xs:text-sm sm:text-1xl mt-2'><FontAwesomeIcon className='me-2' icon={faGears} />Social Media</p>
                        </div>
                    </div>

                    <div className='w-full xs:hidden md:block  text-slate-300 h-full text-start mt-0'>
                        <p className='ps-10 xs:ps-2 sm:ps-10 font-bold  delay-75 text-blue-500   py-4'>Service</p>
                        <p className='ps-10 xs:ps-2 sm:ps-10  delay-75 font-nunito xs:text-sm sm:text-1xl mt-2'><FontAwesomeIcon className='me-2' icon={faCode} />Web  </p>
                        <p className='ps-10 xs:ps-2 sm:ps-10  delay-75 font-nunito xs:text-sm sm:text-1xl mt-2'><FontAwesomeIcon className='me-2' icon={faLayerGroup} />SEO</p>
                        <p className='ps-10 xs:ps-2 sm:ps-10  delay-75 font-nunito xs:text-sm sm:text-1xl mt-2'><FontAwesomeIcon className='me-2' icon={faGears} />Social Media</p>
                    </div>

                    <div className='w-full  text-slate-300 h-full text-start  xs:mt-14 sm:mt-0 '>
                        <p className='ps-10 xs:ps-2 font-bold  delay-75  text-blue-500 py-3'>Contact</p>
                        <p className='ps-10 xs:ps-2  delay-75 font-nunito xs:text-sm sm:text-1xl mt-2'><FontAwesomeIcon className='me-2' icon={faMap} />Rajkot,Gujarat,India.</p>
                        <p className='ps-10 xs:ps-2  delay-75 font-nunito xs:text-sm sm:text-1xl mt-2'><FontAwesomeIcon className='me-2' icon={faEnvelope} />services@plexus.org.in</p>
                        <p className='ps-10 xs:ps-2   font-nunito text-sm mt-3'>
                            <a href="https://www.facebook.com/profile.php?id=61555155673334" target='blank'><FontAwesomeIcon className='icon-main me-3 hover:text-blue-500 delay-75' icon={faFacebook} size="2x" /></a>
                            <a href="https://www.instagram.com/plexus_dgm/" target='blank'>  <FontAwesomeIcon className='icon-main me-3 hover:text-blue-500 delay-75' icon={faInstagram} size="2x" /></a></p>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;
