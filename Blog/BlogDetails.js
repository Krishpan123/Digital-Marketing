
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const BlogDetails = () => {
    const { blogid } = useParams();
    const navigate = useNavigate();

    const [blog, setBlog] = useState({});
    const [getblog, setGetblog] = useState([]);
    
    useEffect(() => {
        const url = `http://localhost:5000/blogs/${blogid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, [blogid]);

    useEffect(() => {
        const url = 'http://localhost:5000/blogs';
        fetch(url)
            .then(res => res.json())
            .then(dat => setGetblog(dat));
    }, []);

    const navigateToServiceDetail = id => {
        navigate(`/blogsdetails/${id}`);
    };
    return (
        <div className=' bg-slate-50 pb-10'>
            <div className=' container '>

                <div className='flex gap-2 pt-4'>
                    <div className='w-[20%] flex flex-col xs:hidden md:block md:w-[40%] lg:w-[30%] border bg-white rounded h-auto p-2'>
                        {
                            getblog.map((unite) => (
                                // <Link key={unite._id} to={`/blogsdetails/${unite._id}`} className='w-[100%] flex h-32 hover:shadow border-b' onClick={(e) => { e.preventDefault(); navigateToServiceDetail(unite._id); }}>
                                <Link key={unite._id} to={`/blogsdetails/${unite._id}`} className='w-[100%] flex h-32 hover:shadow border-b' onClick={(e) => { e.preventDefault(); navigateToServiceDetail(unite._id); }}>
                                    <div className='w-[40%] h-32 flex items-center'>
                                        <img className='w-full rounded' src={unite.photourl} alt="" />
                                    </div>
                                    <div className='ps-2 w-[60%] font-bold flex items-center'>
                                        {unite.name}
                                    </div>
                                </Link>

                            ))
                        }

                    </div>
                    <div className='w-[60%] xs:w-[100%] md:w-[60%] border bg-white rounded h-auto p-2'>

                        <p className=' font-verdina font-bold text-4xl mt-6 tracking-wide'> {blog.name}</p>
                        <p className='mt-1 text-slate-600 text-sm'>Date: <span>{blog.date}</span></p>

                        <img className='w-full rounded mt-4' src={blog.photourl} alt="" />

                        <div className='text-justify pt-10 font-nunito text-xl' dangerouslySetInnerHTML={{ __html: blog.description }} />
                    </div>
                    <div className='w-[20%] border lg:block xs:hidden  bg-white rounded h-[400px]'></div>
                </div>

            </div>
        </div>

    );
};

export default BlogDetails;