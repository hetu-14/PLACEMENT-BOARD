import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import Job from "./Job";
import Spinner from "./Spinner";

const JobItem = (props) => {
  const location = useLocation();
  let heading;

  heading = "Placement Opportunities";

  const [searchQuery, setSearchQuery] = useState("1");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRemote, setSelectedRemote] = useState("1");
  const [selectedEmployetype, setSelectedEmployetype] = useState("1");
  const [selectedDatePosted, setSelectedDatePosted] = useState("1");
  const [selectedLocation, setSelectedLocation] = useState("1");
  // setSelectedEmployetype("1");
  const locations = ["India", "United State", "China", "Japan", "Russia"];
  const Remote = [true, false];
  const EmployeType = ["Fulltime", "Parttime", "Intern", "Contractor"];
  const DatePosted = ["Month", "Week", "Today", "3days"];

  // State to store the selected location

  // Handle the change when a location is selected
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };
  const handleEmployeTypeChange = (event) => {
    setSelectedEmployetype(event.target.value);
  };
  const handleRemoteChange = (event) => {
    setSelectedRemote(event.target.value);
  };
  const handleDatePostedChange = (event) => {
    setSelectedDatePosted(event.target.value);
  };

  const handleSearch = async () => {
    if (searchQuery !== "1" && selectedLocation !== "1" && selectedEmployetype !== "1" && selectedRemote !== "1" && selectedDatePosted !== "1") {
      props.setProgress(30);
      setLoading(true);
      const url = `https://jobs-api14.p.rapidapi.com/list?query=${searchQuery}&location=${selectedLocation}&distance=1.0&language=en_GB&remoteOnly=${selectedRemote}&datePosted=${selectedDatePosted}&employmentTypes=${selectedEmployetype}&index=0`;
      props.setProgress(60);
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "ff208bbf45mshaa6b8e57de208f3p1a6c19jsnc4be9a21ae81",
          "X-RapidAPI-Host": "jobs-api14.p.rapidapi.com",
        },
      };
      props.setProgress(90);

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        // console.log(data.jobs);
        setJobs(data.jobs);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
      props.setProgress(100);

    }
    else {
      toast.error("Please select fields...", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    // console.log(jobs);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="align-middle">
        <h1
          style={{
            fontWeight: "bolder",
            textDecoration: "underline",
            fontSize: "30px",
            fontFamily: "sans-serif",
          }}
        >
          {heading}
        </h1>
        <div display="flex">
          <div className="align-center">
            <div className="flex flex-wrap justify-between mt-5">
              {/* location */}
              <div className="w-full md:w-1/4">
                <select
                  value={selectedLocation}
                  onChange={handleLocationChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="1" disabled>
                    Select a location
                  </option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>

                <div>
                  {selectedLocation !== "1" && (
                    <p className="mt-2 text-sm">
                      You selected: {selectedLocation}
                    </p>
                  )}
                </div>
              </div>
              {/* remote job */}
              <div className="w-full md:w-1/4">
                {/* <h2 className="text-lg font-semibold mb-2">Remote Job ? </h2> */}
                <select
                  value={selectedRemote}
                  onChange={handleRemoteChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="1" disabled>
                    Select a Remote Job
                  </option>
                  {Remote.map((remote, index) => (
                    <option key={index} value={remote}>
                      {remote === true ? "YES" : "NO"}
                    </option>
                  ))}
                </select>
                <div>
                  {selectedRemote !== "1" && (
                    <p className="mt-2 text-sm">
                      You selected: {selectedRemote}
                    </p>
                  )}
                </div>
              </div>
              {/* emplyment */}
              <div className="w-full md:w-1/4">
                <select
                  value={selectedEmployetype}
                  onChange={handleEmployeTypeChange}
                  className="border border-gray-300 rounded-md p-2 w-full "
                >
                  <option value="1" disabled>
                    Select a Employee Type
                  </option>
                  {EmployeType.map((EmployeType, index) => (
                    <option key={index} value={EmployeType}>
                      {EmployeType}
                    </option>
                  ))}
                </select>

                <div>
                  {selectedEmployetype !== "1" && (
                    <p className="mt-2 text-sm">
                      You selected: {selectedEmployetype}
                    </p>
                  )}
                </div>
              </div>
              {/* post */}
              <div className="w-full md:w-1/4">
                <select
                  value={selectedDatePosted}
                  onChange={handleDatePostedChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="1" disabled>
                    Select a Recent Post
                  </option>
                  {DatePosted.map((DatePosted, index) => (
                    <option key={index} value={DatePosted}>
                      {DatePosted} Ago
                    </option>
                  ))}
                </select>

                <div>
                  {selectedDatePosted !== "1" && (
                    <p className="mt-2 text-sm">
                      You selected: {selectedDatePosted}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* //search bar */}

            <div class="flex items-center justify-center p-5">
              <div class="rounded-lg w-96 p-5">
                <div class="flex">
                  <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      class="pointer-events-none absolute w-5 fill-gray-500 transition"
                    >
                      <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-full max-w-[300px] bg-white pl-2 text-base font-semibold outline-0"
                    placeholder="Search for Online Jobs here"
                    id="searchbar"
                    onChange={handleSearchChange}

                  />
                  <input
                    type="button"
                    value="Search"
                    class="bg-[#A7BEAE] p-2 rounded-tr-lg rounded-br-lg text-black font-semibold"
                    onClick={handleSearch}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading && <Spinner className="flex items-center space-x-2" />}
      <InfiniteScroll dataLength={jobs.length}>
        <div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center justify-center  mt-10 mb-5 duration-500 hover:shadow-xl shadow-lg">
            {/* console.log(jobs)  */}
            {jobs.map((job) => {
              // console.log(job)
              return (
                <div
                  className=" w-3/4 mx-16 mt-5 mb-10 rounded-xl bg-white bg-clip-border text-gray-700 text-justify"
                  key={job.id}
                >
                  <Job
                    imageUrl1={job.image}
                    job_title1={job.title}
                    job_state1={job.location}
                    job_publisher1={job.company}
                    job_employment_type1={job.employmentType}
                    job_country1={job.job_country}
                    job_city1={job.job_city}
                    employer_company_type1={job.employmentType}
                    timeAgoPoste={job.datePosted}
                    job_apply_link1={job.job_apply_link}
                    description1={job.description}
                  ></Job>
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default JobItem;
