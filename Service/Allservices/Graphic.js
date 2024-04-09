import React, { useRef } from 'react';
import HomePage from '../../HomePage';
import graphic from './img/graphic.png'
import graphiccc from './img/graphiccc.png';
import ButtonFormet from '../../ContactPage/ButtonFormet';
import Headline from '../../Headline';
import logo from './img/logo.png';
import flayer from './img/flayer.png';
import social from './img/social.png';
import banner from './img/banner.png';
import billbord from './img/billbord.png';
import poster from './img/poster.png';
import pak from './img/pak.png';
import aii from './img/aii.png';
import ps from './img/ps.png';
import figma from './img/figma.png';
import canva from './img/canva.png';
import { Link } from 'react-router-dom';
import Article from '../../Article/Article';


const Graphic = () => {
    const interviewRef = useRef(null);
    const scroll = (scrollOffset) => {
        if (interviewRef.current) {
            const container = interviewRef.current;
            const start = container.scrollLeft;

            const startTime = performance.now();
            const duration = 500; // Adjust the duration as needed

            const animateScroll = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const scroll = easeInOutQuad(elapsedTime, start, scrollOffset, duration);
                container.scrollLeft = scroll;

                if (elapsedTime < duration) {
                    requestAnimationFrame(animateScroll);
                }
            };

            requestAnimationFrame(animateScroll);
        }
    };
    // Easing function for smooth scroll animation
    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const webItems = [
        {
            id: 1,
            img: logo,
            title: "Logo Design",
            details: "Focus on simplicity, scalability, and uniqueness.Ensure it represents the brand's identity and values.",
        },
        {
            id: 2,
            img: flayer,
            title: " Flyer Design",
            details: "Keep it concise and visually appealing.Highlight key information using a hierarchy of text and visuals.",
        },
        {
            id: 3,
            img: social,
            title: "Social Media Post",
            details: " Adapt designs to suit the platform's requirements.Use captivating visuals and concise, engaging copy.",
        },
        {
            id: 4,
            img: banner,
            title: "Banner Design",
            details: "Consider the location and purpose of the banner for size and design elements.Emphasize the main message with bold visuals and text.",
        },
        {
            id: 4,
            img: billbord,
            title: "Billboard Design",
            details: "Opt for minimal text due to limited viewing time.Use high-resolution images and bold fonts for better visibility.",
        },
        {
            id: 5,
            img: poster,
            title: "Poster Design",
            details: "Balance visuals and information to attract attention Use a clear hierarchy to guide the viewer's eye.",
        },
        {
            id: 5,
            img: pak,
            title: "Package Design",
            details: "Prioritize functionality and aesthetics Ensure the design reflects the brand identity and stands out on shelves.",
        },

    ];
    const techItem = [
        {
            id: 1,
            img: ps,
            title: "Javascript",

        },
        {
            id: 2,
            img: aii,
            title: "React",

        },
        {
            id: 3,
            img: figma,
            title: "Typescript",

        },
        {
            id: 4,
            img: canva,
            title: "Express JS",

        },


    ]
    return (
        <div className=' bg-slate-100'>
            <div className='container'>
                <HomePage showHeadButton={true} showInterviewDiv={false} showImgDiv={true} headline='Graphic Design'
                    description='We specialize in designing fantastic websites that not only look great but also function smoothly.' image={graphic}>
                </HomePage>

                <div className='xs:mt-[480px] md:mt-[300px] lg:mt-[50px]'>
                    <Headline short='Service' parent="Our " child="Services"></Headline>
                </div>

                <div className='px-5 my-10 p-5  bg-white relative  '>
                    <div className=' grid grid-flow-col auto-cols-max gap-3 mt-4 overflow-x-auto  ' ref={interviewRef}>
                        {webItems.map((unit) => (
                            <Link
                                key={unit.id}
                                to={unit.link}
                                className='  w-[320px] xs:w-[220px] xs:h-[430px] sm:h-[350px]  sm:w-[320px] h-[350px] bg-slate-100   p-3 shadow-sm rounded transition ease-in-out delay-50    hover:scale-40 duration-400 hover:shadow'
                            >
                                <div className='  rounded    flex flex-col items-center justify-center'>
                                    <div>
                                        <img className='w-[150px] rounded ' src={unit.img} alt='' />
                                    </div>
                                    <div className='text-slate-900 mt-3  font-nunito text-sm flex flex-col items-center  '>
                                        <p className='text-2xl font-bold'>{unit.title}</p>
                                        <p className='flex mt-2 flex-col items-center text-justify'>{unit.details}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <button
                        className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full'
                        onClick={() => scroll(-500)}
                    >
                        {'<'}
                    </button>

                    <button
                        className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full'
                        onClick={() => scroll(500)}
                    >
                        {'>'}
                    </button>

                </div>

                <div className='flex xs:flex-col xs:h-full   sm:flex-col md:flex-row  sm:h-full md:h-[300px] w-full h-[300px] rounded  bg-sky-200 mt-[100px]'>
                    <div className='flex ms-4 flex-col xs:pt-5  xs:w-[90%] sm:pt-5 md:pt-0 w-[50%] sm:w-[90%] md:w-[50%]  justify-center'>
                        <h1 className='font-bold text-3xl font-nunito'>
                            Exploring Top-tier Graphic Design Studios?
                        </h1>
                        <p className='mt-2  text-justify  font-nunito'>
                            Integrating experience with innovative approaches, we offer scalable solutions that harness the latest trends and technologies to elevate visual creativity
                        </p>
                        <p className='mt-6'>
                            <Link to='/contactpage'> <ButtonFormet>Get Free Consultation</ButtonFormet>
                            </Link>
                        </p>
                    </div>

                    <div className='w-[50%] sm:w-[100%]  xs:w-[100%] xs:mt-3 sm:mt-0 md:w-[50%] flex items-center text-center justify-center'>
                        <img className=' p-2 xs:w-[300px] sm:w-[300px] h-full' src={graphiccc} alt="" />
                    </div>

                </div>
                <div className='mt-[100px]'>

                    <Headline parent="Technology On We " child="Working" short='Technology'></Headline>

                    <div className="  flex bg-white xs:text-center xs:items-center xs:justify-center xs:flex-col-1 sm:text-start sm:items-start sm:justify-start p-5 flex-wrap gap-3 mt-4">
                        {
                            techItem.map((tutorial) => (
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <a key={tutorial.id}
                                    href="#"
                                    className='shadow-sm rounded  transition ease-in-out delay-50  hover:-translate-y-2 hover:scale-40  duration-400 '
                                >
                                    <div className='w-[300px] xs:w-[200px]  sm:w-[180px] xs:h-35 sm:h-48 h-36 rounded bg-slate-200 hover:bg-slate-200 flex flex-col items-center justify-center'>
                                        <div>
                                            <img className='w-[70px] h-[70px]' src={tutorial.img} alt="" />
                                        </div>
                                        <div className='text-black xs:mt-2 flex text-center mt-3 font-nunito text-sm'>
                                            {tutorial.title}
                                        </div>
                                    </div>
                                </a>
                            ))}
                    </div>
                </div>
                <Article />
            </div>
        </div>
    );
};

export default Graphic;