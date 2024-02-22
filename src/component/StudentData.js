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
                        <div key={d.name} className="bg-white h-[350px] text-black rounded-xl">
                            <div className='h-10 bg-[#B85042] flex justify-center items-center rounded-t-xl'>
                               <img src={d.img1} alt="" className="h-44 w-44 rounded-full" />
                            </div>

                            <div className="flex flex-col items-center justify-center gap-4 p-4">
                                <p className="text-x font-semibold">Name: {d.name}</p>
                                <p className="text-center">Company: {d.company}</p>
                                <p className="text-center">Package: {d.packageLPA} LPA</p>

                                <p className="text-center">Departmenet: {d.department}</p>
                                <p className="text-center">Role: {d.role}</p>


                                <button className='bg-[#B85042] text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    )
}

export default StudentData
