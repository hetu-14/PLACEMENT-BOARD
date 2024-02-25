import React from 'react'

function Job(props) {
    let { imageUrl1, job_title1, job_state1, job_employment_type1, job_publisher1, job_country1, job_city1, employer_company_type1, job_apply_link1, description1, timeAgoPoste
    } = props
    // console
    // console.log(description1)
    let dd = description1.slice(0, 100)
    //     <div>
    //     <h2 className="font-bold text-2xl mb-4 underline underline-offset-2 mt-16">
    //         Skills
    //     </h2>
    //     <p className="font-normal mx-20 text-center ">
    //         Deepen your understanding of CS fundamentals – the bedrock of
    //         technology – through our comprehensive courses.
    //     </p>
    //     <div className="skfn w-auto mx-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-14 gap-x-14 mt-10 mb-5">
    //         {skfnData.map((item, index) => (
    //             <div
    //                 className="max-w-[26rem] mt-5 mb-10 rounded-xl bg-white bg-clip-border text-gray-700 duration-700 hover:scale-110 hover:shadow-xl shadow-lg"
    //                 key={index}
    //             >
    //                 <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    //                     <img src={item.imageUrl} alt={"Loading"} />
    //                 </div>
    //                 <div className="p-6">
    //                     <div className="items-center justify-between mb-3">
    //                         <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 ">
    //                             {item.title}
    //                         </h5>
    //                     </div>
    //                     <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
    //                         {item.description}
    //                     </p>
    //                     <div className="inline-flex flex-wrap items-center gap-3 mt-8 group">
    //                         <span class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
    //                             <Link to={item.siteLink1} target="_blank">
    //                                 <img
    //                                     src="https://www.iconpacks.net/icons/1/free-youtube-icon-123-thumb.png"
    //                                     alt="ui/ux review check"
    //                                     class="h-5 w-5"
    //                                 />
    //                             </Link>
    //                         </span>
    //                         <span class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
    //                             <Link to={item.siteLink2} target="_blank">
    //                                 <img
    //                                     src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/plus-line-icon.png"
    //                                     alt="ui/ux review check"
    //                                     class="h-5 w-5"
    //                                 />
    //                             </Link>
    //                         </span>
    //                     </div>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // </div>
    return (
        <div className="mx-4">
            {/* Hello */}
            <div className="skfn w-auto  grid grid-cols-1 lg:grid-cols-1 md:grid-cols-2 justify-items-center justify-center mb-5">
                {/* <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        right: "0",
                    }}
                >
                </div> */}
                <img src={imageUrl1} className="h-52 w-52 border-r-black" alt="..." />
                <div className="w-full card-body text-center">
                    <h5 className="h-5 text-center"> <b>Job Title:</b> {job_title1}</h5>
                    <h5 className="h-5 text-center"><b>Job Type: </b>{job_employment_type1}</h5>
                    <h5 className="h-5 text-center"><b>Company Name :</b> {job_publisher1}</h5>
                    {/* <h5 className="card-title"><b>Country :</b>{job_country1}</h5> */}
                    <h5 className="h-5 text-center"><b>Location :</b>{job_state1}</h5>
                    {/* <h5 className="card-title"><b>City :</b> {job_city1}</h5> */}
                    {employer_company_type1 ? <h5 className="h-5 text-center"><b>Company type:</b> {employer_company_type1}</h5> : " "}

                    <p className="h-5 text-center"><b>Description :</b> {dd}</p>
                    <p className=" mt-5 text-center">
                        <small className="text-muted">
                            {timeAgoPoste}
                        </small>
                    </p>
                    <h5 className="h-5 text-center -mt-6"></h5>
                    <a href={job_apply_link1} target="_blank" className="btn btn-sm btn-dark h-40 w-40">
                        Apply
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Job