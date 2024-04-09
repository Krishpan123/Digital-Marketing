import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import thumsup from './img/thumsup.png';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const AddBlogs = () => {
    const { register, handleSubmit, reset } = useForm();
    const [value, setValue] = useState('');
    const [success, setSuccess] = useState('');

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    };
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

    const onSubmit = (data) => {
        const url = `http://localhost:5000/blogs`;
        data.description = value;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {

                setSuccess("Blog add Successfully..")
                setValue('');
                reset();

            });
    };

    const handleCloseDialog = () => {
        setSuccess(false);
    };

    return (
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
            <h1 className=" text-center font-verdina text-5xl font-bold mt-10">Add Blog</h1>

            {
                success && (
                    <BootstrapDialog onClose={handleCloseDialog} aria-labelledby="customized-dialog-title" open={success}>
                        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                            <img className="w-[200px] text-center items-center justify-center" src={thumsup} alt="" />
                            Blog Added Successfully...
                        </DialogTitle>


                    </BootstrapDialog>
                )
            }
            <input {...register("name")} className="text-black mt-10 mb-4 w-full bg-slate-100 border" type="text" placeholder="Blog Title" />

            <ReactQuill theme="snow" formats={formats} modules={modules} value={value} onChange={setValue} style={{ height: '300px' }} />
            <input placeholder="Photo URL" className="text-black border w-full bg-slate-100 mt-14" type="text" {...register("photourl", { required: true })} />
            <input className="text-black border w-full bg-slate-100" type="date" {...register("date", { required: true })} />



            <input type="submit" className="text-white font-bold border w-full bg-blue-500 mb-20" value='Submit' />
        </form>
    );
};

export default AddBlogs;



