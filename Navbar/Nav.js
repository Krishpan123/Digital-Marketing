import React from 'react';
// import '.././Responsive.css';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import mainlogo from './img/mainlogo.png';
import { Link } from 'react-router-dom';
import ButtonFormet from '../ContactPage/ButtonFormet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../Firebase/Firebase.init';

const auth = getAuth(app);

const Nav = () => {


    const [user] = useAuthState(auth);
    const navigation = [
        { name: 'Home', link: '/', current: false },
        { name: 'About', link: '/#about', current: false },
        { name: 'Services', link: '/#service', current: false },
        { name: 'Blog', link: '/blog', current: false },
        { name: 'Testimonials', link: '/#testimonials', current: false },
        { name: 'Contact', link: '/#contact', current: false }
    ];



    function classNames(...classes) {
        return classes.filter(Boolean).join('');
    }

    return (
        <Disclosure as="nav" className="bg-black     top-0 w-full z-50 nav-nav-nav  ">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 navbar-head-parants">
                        <div className="relative flex h-16 items-center justify-between navbar-head-child">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 justify-center items-center text-center sm:items-stretch sm:justify-start navbar-head-child1">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link to='/'>
                                        <img
                                            className="w-[200px] px-3"
                                            src={mainlogo}
                                            alt="my logo"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 my-2 md:ml-[0px] lg:ml-[300px] xl:ml-[440px]  text-right items-end justify-end   sm:block navbar-head-child2">
                                    <div className="flex space-x-1 navbar-head-child3">
                                        {navigation.map((item) => {
                                            if (item.name === 'Blog') {
                                                return (
                                                    <Link
                                                        key={item.name}
                                                        to={item.link}
                                                        className={classNames(
                                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'rounded-md px-2 py-2 text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                );
                                            } else {
                                                return (
                                                    <a
                                                        key={item.name}
                                                        href={item.link}
                                                        className={classNames(
                                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'rounded-md px-2 py-2 text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                );
                                            }
                                        })}
                                    </div>

                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 sm:hidden md:block xs:hidden  flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 navbar-child-child">
                                <Link to='/contactpage'>

                                    <ButtonFormet > Get a Free Call</ButtonFormet>
                                </Link>
                            </div>
                            {user?.uid ?

                                <Link to='/adminpage'><FontAwesomeIcon className='text-blue-500 ms-4 ' icon={faUserPen} size='xl' /> </Link> :
                                <div>
                                    <Link to='/signin' >
                                        <FontAwesomeIcon className='text-white ms-4 hover:text-blue-500 duration-300' icon={faUser} size='xl' />
                                    </Link>
                                </div>}
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    link={item.link}

                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Nav;
