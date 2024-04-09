import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import banner from './img/banner.png';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Headline from '../Headline';
import { useNavigate } from 'react-router-dom';

const clipPathStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const clipPathStyletwo = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


export function fetchBlogData(currentPage, setBlog, setPageCount) {
    // Fetch blog data based on the current page
    fetch(`http://localhost:5000/blogs?page=${currentPage}&size=10`)
        .then(res => res.json())
        .then(data => setBlog(data));

    // Fetch blog count for pagination
    fetch('http://localhost:5000/blogcount')
        .then(res => res.json())
        .then(data => { 
            const count = data.count;
            const page = Math.ceil(count / 9);
            setPageCount(page);
        });
}

export default function Blog() {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [blog, setBlog] = useState([]);


    useEffect(() => {
        fetchBlogData(currentPage, setBlog, setPageCount);
    }, [currentPage]);

    // useEffect(() => {
    //     // Fetch blog data based on the current page
    //     fetch(`http://localhost:5000/blogs?page=${currentPage}&size=10`)
    //         .then(res => res.json())
    //         .then(data => setBlog(data));
    // }, [currentPage]);

    // useEffect(() => {
    //     // Fetch blog count for pagination
    //     fetch('http://localhost:5000/blogcount')
    //         .then(res => res.json())
    //         .then(data => {
    //             const count = data.count;
    //             const page = Math.ceil(count / 10);
    //             setPageCount(page);
    //         });
    // }, []);

    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/blogsdetails/${id}`);
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div>
            <div style={clipPathStyle} className='bg-slate-200 relative w-full h-[400px] flex flex-col'>
                <div style={clipPathStyletwo} className='pt-10 w-full h-[400px] flex flex-col text-center'>
                    <h1 className='text-slate-100 mt-10 max-auto text-5xl font-sans font-bold'>
                        Plexus For <span className='text-blue-500'>Knowledge</span>
                    </h1>
                    <div className='text-slate-100'></div>
                    <p className='text-slate-300 xs:text-justify xs:p-4 sm:w-[50%] lg:w-[50%] mx-auto mt-4 font-nunito'>
                        Unlocking the Power of Mindfulness! Learn how practicing mindfulness can transform your daily
                        life, reduce stress, and enhance well-being in this comprehensive guide
                    </p>
                    <Link to='/contactpage'>
                        {' '}
                        <button className='bg-blue-500 hover:bg-blue-600 font-nunito text-white w-[100px] h-[40px] rounded mx-auto mt-4'>
                            Write Query
                        </button>
                    </Link>
                </div>
            </div>

            <div className='container flex justify-center items-center xs:top-[530px] lg:top-[270px] sm:top-[360px] md:top-[270px] top-[250px]'>
                <div className='bg-blue-50 xs:w-[100%] p-3 mt-3 w-full h-auto rounded'>
                    <Headline to='/blog' child='Blogs' isPshow={false}>
                        {' '}
                    </Headline>

                    <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3 my-4'>


                        {blog.map((unit) => (
                            <div key={unit._id} className='max-w-sm bg-white rounded mt-3 shadow hover:-translate-y-2 duration-300' style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <img className='w-full rounded-t-md' src={unit.photourl} alt='Sunset in the mountains' />
                                <div className='px-6 py-4' style={{ flex: 1 }}>
                                    <div className='font-bold text-xl mb-2'>{unit.name}</div>
                                    <p
                                        className='text-gray-700 font-nunito text-justify overflow-hidden text-base'
                                        style={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}
                                        dangerouslySetInnerHTML={{ __html: unit.description }}
                                    ></p>
                                </div>
                                <div className='px-6 flex justify-between pt-4 pb-2'>
                                    <div>
                                        {' '}
                                        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 lg:text-sm xs:text-[11px] text-sm font-semibold text-gray-700 mr-2 mb-2'>
                                            {' '}
                                            {unit.date}
                                        </span>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => navigateToServiceDetail(unit._id)}
                                            className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm lg:text-sm xs:text-[11px] font-semibold text-gray-700 mr-2 mb-2'
                                        >
                                            See More <FontAwesomeIcon className='ms-1' icon={faArrowRight} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>

                    <div className='flex items-center text-center justify-center mt-14 mb-4'>
                        <Stack spacing={2}>
                            <Pagination
                                count={pageCount}
                                page={currentPage}
                                onChange={handlePageChange}
                                variant='outlined'
                                shape='rounded'
                            />
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    );
}
