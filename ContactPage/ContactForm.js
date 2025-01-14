import React, { useRef, useState } from 'react';
import 'react-phone-number-input/style.css';
import './Contact.css';
import emailjs from '@emailjs/browser';



const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',

    });
    const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        phoneNumber: false,
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_p3jakff', 'template_cszjdjo', form.current, 'uELA4WD47qGEFXLdA')
            .then((result) => {
                window.alert('Email Sent Successfully');
                setFormData({
                    name: '',
                    email: '',
                    phoneNumber: '',
                    subject: '',
                    message: '',
                    recaptchaValue: '',
                });
            })
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = true;
        }
        if (!formData.email.trim()) {
            errors.email = true;
        }
        if (!formData.phoneNumber.trim()) {
            errors.phoneNumber = true;
        }
        setFormErrors(errors);

        if (Object.keys(errors).length === 0 && formData.recaptchaValue) {
            console.log('Form submitted:', formData);
        } else {
            console.log('Please fill all required fields and verify reCAPTCHA');
        }
    };

    return (
        <div className="contact-form-container container relative overflow-hidden   bg-slate-900 ">
            <div className='how-can  mb-5'> <h3 className='font-bold'>How Can We Help You?</h3></div>
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                <div className='name-email flex w-full'>
                    <input
                        className='w-full  text-white'
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        className='ms-3 w-full   text-white'
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='phoneinput flex'>

                    <input
                        className='mt-3 w-full text-white'
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        className='mt-3 ms-3 w-full   text-white'
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <textarea
                    className='mt-3 w-full text-area   text-white'
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
