import React, { useEffect, useState } from 'react';
import Headline from '../Headline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { fetchBlogData } from '../Blog/Blog';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Article = () => {



    const navigate = useNavigate();

    //create a fetch data in BLOG and call it from there
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetchBlogData(1, setBlog, () => { });
    }, []);



    const handleNavigatepage = id => {
        navigate(`/blogsdetails/${id}`);
    }

    return (
        <div id='article' className='bg-slate-100 pb-10'>
            <div className='container mt-16 pt-5'>
                <div>
                    <Headline isShowmore={false} parent='Article' child='Blog' short='News' isPshow={false}   > </Headline>
                    <p className='font-nunito xs:text-sm sm:text-xl text-xl mt-2'>Unlocking the Power of Mindfulness! Learn how practicing mindfulness can transform your daily life, reduce stress, and enhance well-being in this comprehensive guide</p>
                </div>
                <div className=' mt-4  pt-4 bg-white rounded  '>

                    < div className=' bg-slate-100' >




                        <div className='px-2      bg-white relative  '>
                            {/* <div className='grid grid-flow-col auto-cols-max gap-3 mt-3  xs:overflow-x-auto  sm:justify-center pb-10 '  > */}

                            <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3 my-4 xs:overflow-x-auto pb-10'>

                                {blog.slice(0, 3).map((unit) => (
                                    <div key={unit._id} className='max-w-sm bg-white rounded mt-3   shadow hover:-translate-y-2 duration-300' style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
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
                                                    onClick={() => handleNavigatepage(unit._id)}
                                                    className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm lg:text-sm xs:text-[11px] font-semibold text-gray-700 mr-2 mb-2'
                                                >
                                                    See More <FontAwesomeIcon className='ms-1' icon={faArrowRight} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>


                             
                        </div>
                    </div>

                    <div className='text-center mt-6 '>
                        <Link to='/blog'> <button className='bg-blue-500 text-white py-2 mb-6 w-[200px] rounded'>See more</button></Link>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Article;
