import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Menu, MenuItem } from '@mui/material';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonFormet from '../ContactPage/ButtonFormet';
import mainlogo from './img/mainlogo.png';
import './Navbar.css'


const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

// Function to toggle the mobile menu visibility
const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen); // Toggle the state
};
    return (
        <div className=" bg-black  hgfdhgf" >
            <nav className='container'>
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                onClick={toggleMobileMenu} // Attach a function to toggle mobile menu visibility
                            >
                                <span class="absolute -inset-0.5"></span>
                                <span class="sr-only">Open main menu</span>

                                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden sm:flex sm:items-center sm:justify-center">
                            <Link to='/'>
                                <div className="flex-shrink-0">
                                    <img className='w-[200px] px-3' src={mainlogo} alt="" />
                                </div>
                            </Link>
                        </div>
                        <div class="hidden sm:ml-6 sm:block ">
                            <div className="flex space-x-4  ">
                                <Link to='/' class=" hover:bg-gray-700 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</Link>
                                <Link href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</Link>

                                <PopupState variant="popover" popupId="demo-popup-menu">
                                    {(popupState) => (
                                        <React.Fragment>
                                            <Button variant="contained" {...bindTrigger(popupState)}>
                                                Service <FontAwesomeIcon className='ms-2' icon={faAngleDown} />
                                            </Button>
                                            <Menu {...bindMenu(popupState)}>
                                                <Link to='/web'>  <MenuItem onClick={popupState.close}>Website Development</MenuItem></Link>
                                                <Link to='/seo'><MenuItem onClick={popupState.close}>SEO</MenuItem></Link>
                                                <Link to='/social'> <MenuItem onClick={popupState.close}>Social Media Marketing</MenuItem></Link>
                                                <Link to='/graphic'> <MenuItem onClick={popupState.close}>Graphic Design</MenuItem></Link>
                                            </Menu>
                                        </React.Fragment>
                                    )}
                                </PopupState>
                                <a href="#article" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Blog</a>
                                <a href='#footer' class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</a>
                                <Link to='/contactpage'>
                                    <ButtonFormet>Get A Free Consultation</ButtonFormet>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="sm:hidden block" id="mobile-menu">
                    <div class="space-y-1 px-2 pb-3 pt-2">
                        <Link href="#" class=" text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</Link>
                        <Link href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</Link>
                        <Link href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Service</Link>
                        <Link href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Blog</Link>
                        <Link href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</Link>
                        <Link to='/contactpage'>
                            <ButtonFormet>Get A Free Consultation</ButtonFormet>
                        </Link>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;