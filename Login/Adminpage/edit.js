import React, { useState } from 'react';
import useBlogs from '../../Hooks/useBlogs';

const Edit = () => {
    const [blogs, setBlogs] = useBlogs();
    const [editMode, setEditMode] = useState(false);
    const [editedBlog, setEditedBlog] = useState({});
    const [editedName, setEditedName] = useState('');
    const [editedPhotoUrl, setEditedPhotoUrl] = useState('');
    const [editedDescription, setEditedDescription] = useState('');

    const handleEdit = (blog) => {
        setEditedBlog(blog);
        setEditedName(blog.name);
        setEditedPhotoUrl(blog.photourl);
        setEditedDescription(blog.description);
        setEditMode(true);
    };

    const handleSave = () => {
        const updatedBlog = {
            name: editedName,
            photourl: editedPhotoUrl,
            description: editedDescription
        };

        const url = `http://localhost:5000/blogs/${editedBlog._id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedBlog)
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                const updatedBlogs = blogs.map(blog => {
                    if (blog._id === editedBlog._id) {
                        return {
                            ...blog,
                            ...updatedBlog
                        };
                    }
                    return blog;
                });
                setBlogs(updatedBlogs);
                setEditMode(false);
            } else {
                console.error('Error updating blog:', data.error);
                // You can handle error scenarios here
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // You can handle error scenarios here
        });
    };

    const handleCancel = () => {
        setEditMode(false);
    };

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {  
            const url = `http://localhost:5000/blogs/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.message === 'Blog deleted successfully') {
                        const remaining = blogs.filter(blog => blog._id !== id);
                        setBlogs(remaining);
                    } else {
                        console.error('Error:', data.error);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    };

    return (
        <div className='container'>
            <h1 className='text-center font-bold text-5xl mt-5'>Edit Blog</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                {blogs.map(blog => (
                    <div key={blog._id} className='border rounded overflow-hidden'>
                        <img className='w-full h-64 object-cover object-center' src={blog.photourl} alt={blog.name} />
                        <div className='p-4'>
                            {editMode && editedBlog._id === blog._id ? (
                                <div>
                                    <input type="text" className='mb-2 px-3 py-2 border rounded w-full bg-white' value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                                    <input type="text" className='mb-2 px-3 py-2 border rounded w-full bg-white' value={editedPhotoUrl} onChange={(e) => setEditedPhotoUrl(e.target.value)} />
                                    <textarea className='mb-2 px-3 py-2 border rounded w-full bg-white' value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)}></textarea>
                                    <div className='flex justify-end'>
                                        <button className='bg-green-600 text-white font-thin text-sm px-4 py-2 rounded-full mr-2' onClick={handleSave}>Save</button>
                                        <button className='bg-red-600 text-white font-thin text-sm px-4 py-2 rounded-full' onClick={handleCancel}>Cancel</button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <p className='font-bold text-xl mb-2'>{blog.name}</p>
                                    <p className='text-gray-700 mb-4'>{blog.description}</p>
                                    <div className='flex justify-end'>
                                        <button className='bg-blue-600 text-white font-thin text-sm px-4 py-2 rounded-full mr-2' onClick={() => handleEdit(blog)}>Edit Post</button>
                                        <button className='bg-red-600 text-white font-thin text-sm px-4 py-2 rounded-full' onClick={() => handleDelete(blog._id)}>Delete Post</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Edit;
