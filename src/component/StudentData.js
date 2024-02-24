import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function StudentData() {
    const [data, setData] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/studentData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data2 = await response.json();
        setData(data2)
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    useEffect(() => {
        loadData()
    }, [])
    return (
        <div className='w-3/4 m-auto'>
            <div className="mt-20">
                <Slider {...settings}>
                    {data.map((d) => (
                        <div key={d.name} className="bg-[#A7BEAE] w-72 h-full text-black rounded-xl">
                            <div className='bg-gradient-to-b from-[#e7e8d1] to-[#a7beae] flex justify-center items-center '>
                                <img src={"/images/st1.jpeg"} alt="" className="h-56 w-56 " />
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <p className="text-x font-semibold">Name: {d.name}</p>
                                <p className="text-center">Company: {d.company}</p>
                                <p className="text-center">Package: {d.packageLPA} LPA</p>

                                <p className="text-center">Departmenet: {d.department}</p>
                                <p className="text-center">Role: {d.role}</p>


                                <button className='bg-[#B85042] text-white my-5 text-lg px-6 py-1 rounded-xl'>Read More</button>
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    )
}

export default StudentData
