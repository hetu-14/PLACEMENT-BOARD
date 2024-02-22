import React from 'react';
import { Link } from "react-router-dom";
import { csfnData } from "../constants/training";


function CSFundamentalsSKill() {
    return (
        <div>
            <h2 className="font-bold text-2xl mb-4 underline underline-offset-2 mt-16">
                CS FUNDAMENTALS
            </h2>
            <p className="font-normal mx-20 text-center ">
                Deepen your understanding of CS fundamentals – the bedrock of
                technology – through our comprehensive courses.It's important to note
                that the relative importance of these concepts can vary depending on
                the specific job role and industry. However, a strong foundation in
                DBMS, OS, OOPS, and CN is generally beneficial for a wide range of
                technical roles in the job market.
            </p>

            {/* CSFN Grid Section - Starts Here */}
            <div className="csfn">
                {csfnData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`relative flex bg-clip-border duration-700 hover:scale-110 hover:shadow-xl rounded-xl bg-white text-gray-700 shadow-md w-full h-72 max-w-[80rem] flex-row mx-32 mt-20 ${index % 2 === 0 ? "flex-row-reverse" : "" // Adjusts image position based on index
                            }`}
                    >
                        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white  bg-clip-border rounded-xl shrink-0">
                            <img
                                src={item.imageUrl}
                                alt="card-image"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6 m-4">
                            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                {item.title}
                            </h4>
                            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                {item.description}
                            </p>
                            <div className="inline-flex flex-wrap items-center gap-3  group">
                                <span class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                    <Link to={item.siteLink1} target="_blank">
                                        <img
                                            src="https://www.iconpacks.net/icons/1/free-youtube-icon-123-thumb.png"
                                            alt="ui/ux review check"
                                            class="h-5 w-5"
                                        />
                                    </Link>
                                </span>
                                <span class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                    <Link to={item.siteLink2} target="_blank">
                                        <img
                                            src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/plus-line-icon.png"
                                            alt="ui/ux review check"
                                            class="h-5 w-5"
                                        />
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CSFundamentalsSKill
