import React from "react";
import { Link } from "react-router-dom";
import { skfnData } from "../constants/training";
function SoftSkills() {
    return (
        <div>
            <h2 className="font-bold text-2xl mb-4 underline underline-offset-2 mt-16">
                skilss
            </h2>
            <p className="font-normal mx-20 text-center ">
                Deepen your understanding of CS fundamentals – the bedrock of
                technology – through our comprehensive courses.
            </p>
            <div className="skfn w-auto mx-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-14 gap-x-14 mt-10 mb-5">
                {skfnData.map((item, index) => (
                    <div
                        className="max-w-[26rem] mt-5 mb-10 rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
                        key={index}
                    >
                        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                            <img src={item.imageUrl} alt={"Loading"} />
                        </div>
                        <div className="p-6">
                            <div className="items-center justify-between mb-3">
                                <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 ">
                                    {item.title}
                                </h5>
                            </div>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                                {item.description}
                            </p>
                            <div className="inline-flex flex-wrap items-center gap-3 mt-8 group">
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

export default SoftSkills
