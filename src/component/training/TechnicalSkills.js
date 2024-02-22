import React from 'react';
import { Link } from "react-router-dom";
import { data } from "../constants/training";
function TechnicalSkills() {
    return (
        <div>
            <div>
                <h2 className="font-bold text-2xl mb-4 underline underline-offset-2 mt-16">
                    Technical courses
                </h2>
                <p className="font-normal mx-20 text-center ">
                    Elevate your skills with hands-on projects, unlocking a world of
                    innovation and career possibilities in the dynamic field of
                    technology.
                </p>
                <section className=" w-auto mx-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="w-full bg-white shadow-md rounded-xl duration-700 hover:scale-110 hover:shadow-xl"
                        >
                            <img
                                src={item.imageUrl}
                                alt="Product"
                                className="h-80 w-full object-cover rounded-t-xl"
                            />
                            <div className="px-4 py-3 text-center my-2">
                                <p className="text-lg font-bold text-black truncate block capitalize">
                                    {item.productName}
                                </p>
                                <div className="flex items-center mt-2">
                                    {
                                        <p className="text-sm text-gray-600 cursor-auto">
                                            {item.discountedPrice}
                                        </p>
                                    }
                                </div>
                                <div className="inline-flex flex-wrap items-center gap-3  mt-3 group">
                                    <span class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                        <Link to={item.link} target="_blank">
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
                            {/* </Link> */}
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default TechnicalSkills
