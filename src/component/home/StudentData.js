import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// ... (your existing imports)

function StudentData() {
    const [data, setData] = useState([]);

    const loadImage = (index) => {
        // Replace the following URLs with your actual image URLs
        const images = [
            "/images/st1.png",
            "/images/st2.png",
            "/images/st3.png",
            "/images/st4.png",
            "/images/st5.png",
            "/images/st6.png",
        ];
        return images[index % images.length];
    };

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/studentData", {
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
            <h1 className='text-5xl italic my-20 text-black-600'>
                <b>Our Alumni </b>
                <br />
                Working With the World’s Top Companies
            </h1>
            <div className="mt-20">
                <Slider {...settings}>
                    {data.map((d, index) => (
                        <div key={d.name} className="bg-[#D6CCC2] w-72 h-full text-black rounded-xl">
                            <div className='bg-gradient-to-b from-[#EDEDE9] to-[#D6CCC2] flex justify-center items-center '>
                                <img src={loadImage(index)} alt="" className="h-56 w-56" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-x font-semibold">Name: {d.name}</p>
                                <p className="text-center">Company: {d.company}</p>
                                <p className="text-center">Package: {d.packageLPA} LPA</p>
                                <p className="text-center">Department: {d.department}</p>
                                <p className="text-center">Role: {d.role}</p>
                                <button className='bg-[#B85042] text-white my-5 text-lg px-6 py-1 rounded-xl'>Read More</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default StudentData;

