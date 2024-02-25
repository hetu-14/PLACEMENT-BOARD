import React from 'react'

function Job(props) {
    let { imageUrl1, job_title1, job_state1, job_employment_type1, job_publisher1, job_country1, job_city1, employer_company_type1, job_apply_link1, description1, timeAgoPoste
    } = props
    // console
    // console.log(description1)
    let dd = description1.slice(0, 100)

    return (
        <div className="mx-4">
            {/* Hello */}
            <div className="skfn w-auto  grid grid-cols-1 lg:grid-cols-1 md:grid-cols-2 justify-items-center justify-center mb-5">
                <img src={imageUrl1} className="h-52 w-52  border-8 rounded-full border-black " alt="..." />
                <div className="w-full card-body text-center">
                    <h5 className="h-5 text-left mx-6"> <b>Job Title:</b> {job_title1}</h5>
                    <br />
                    <h5 className="h-5 text-left mx-6"><b>Job Type: </b>{job_employment_type1}</h5>
                    <br />
                    <h5 className="h-5 text-left mx-6"><b>Company Name :</b> {job_publisher1}</h5>
                    <br />
                    <h5 className="h-5 text-left mx-6"><b>Location :</b>{job_state1}</h5>
                    <br />
                    <p className="h-5 text-left mx-6"><b>Description :</b> {dd}</p>
                    <br />
                    <p className=" mt-5 text-right">
                        <small className="text-muted text-right">
                            {timeAgoPoste}
                        </small>
                    </p>
                    <h5 className="h-5 text-center -mt-6"></h5>
                    <button target="_blank" className="btn btn-sm btn-dark">
                        Apply
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Job