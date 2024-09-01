import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";



function Post() {
    const [data, setData] = useState([]);

    

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/showpost", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data2 = await response.json();
        setData(data2);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className='w-3/4 m-auto'>
            <h1 className='text-4xl italic my-20 text-black-600'>
                <b>Post</b>
                <br />
               
            </h1>
            <div className="mt-20">
                <Slider {...settings}>
                    {data.map((d, index) => (
                        <div key={d.name} className="bg-[#E1BD92] w-72 h-full text-black duration-700 hover:scale-105 hover:shadow-xl shadow-lg rounded-xl">
                            <div className='bg-gradient-to-b from-[#eae0d5] to-[#E1BD92] flex  justify-center items-center '>
                               
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-x font-semibold"> Company Name: {d.company_name}</p>
                                <p className="text-x font-semibold">Description: {d.description}</p>
                                <p className="text-center">Department: {d.department}</p>
                                <p className="text-center">Location: {d.location} LPA</p>
                                <p className="text-center">CTC: {d.CTC}</p>
                                <p className="text-center">Role: {d.role}</p>
                                <p className="text-center mb-5">Link: {d.link}</p>
                                <p className="text-center mb-5">Vacancy: {d.vacancy}</p>
                                <p className="text-center mb-5">Stipend: {d.stipend}</p>
                                <p className="text-center mb-5">Eligibility: {d.eligibility}</p>
                                <p className="text-center mb-5">Last Date To Apply: {d.last_date}</p>
                                <button className="text-center mb-5">Apply</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Post;

