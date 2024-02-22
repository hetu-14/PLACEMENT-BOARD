import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLocation } from "react-router-dom";
import Job from './Job';
import Spinner from './Spinner';

const JobItem = (props) => {
  const location = useLocation();
  let heading;

  heading = "Placement Opportunities";

  const [searchQuery, setSearchQuery] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRemote, setSelectedRemote] = useState('');
  const [selectedEmployetype, setSelectedEmployetype] = useState('');
  const [selectedDatePosted, setSelectedDatePosted] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');


  const locations = ['India', 'United State', 'China', 'Japan', 'Russia'];
  const Remote = [true, false];
  const EmployeType = ['fulltime', 'parttime', 'intern', 'contractor']
  const DatePosted = ['month', 'week', 'today', '3days']


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
    const searchValue = document.getElementById('searchbar').value;

    props.setProgress(30);
    setLoading(true);
    const url = `https://jobs-api14.p.rapidapi.com/list?query=${searchQuery}&location=${selectedLocation}&distance=1.0&language=en_GB&remoteOnly=${selectedRemote}&datePosted=${selectedDatePosted}&employmentTypes=${selectedEmployetype}&index=0`;
    props.setProgress(60);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7b1089f9e9msh0c84e4c9c9b774ap15c242jsnfb59b26f2efd',
        'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
      }
    };
    props.setProgress(90);

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data.jobs)
      setJobs(data.jobs)
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
    props.setProgress(100);
    console.log(jobs)
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
            fontFamily: "sans-serif"
          }}
        >{heading}</h1>
        <div display="flex" className="grid grid-cols-4 ">
          <div className='align-center'>

            <input
              style={{
                "margin-top": "7rem",
                "width": "450px",
                "border-radius": "55px",
                "border": "2px solid #000"
              }}
              className="mt-28 w-72 rounded-full border-2 border-black pl-8 pr-4 py-2 focus:outline-none  text-center"
              type="text"
              id="searchbar"
              placeholder="Search for Any type of Jobs Online here"
              onChange={handleSearchChange}
            />
            <i
              className="fa-solid fa-magnifying-glass px-2"
              style={{
                color: "#f8fe8",
                size: "5xl",
                cursor: "pointer"
              }}
              onClick={handleSearch}
            ></i>
          </div>
          <div>
            <h2>Select a Location</h2>
            <select value={selectedLocation} onChange={handleLocationChange}>
              {/* <option value="" disabled>Select a location</option> */}
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>

            <div>
              {selectedLocation && (
                <p>You selected: {selectedLocation}</p>
              )}
            </div>
          </div>
          <div>
            <h2>Remote Job ? </h2>
            <select value={selectedRemote} onChange={handleRemoteChange}>
              {/* <option value="" disabled>Select a location</option> */}
              {Remote.map((remote, index) => (
                <option key={index} value={remote}>
                  {remote === true ? "YES" : "NO"}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h2>Select a Employe Type</h2>
            <select value={selectedEmployetype} onChange={handleEmployeTypeChange}>
              {/* <option value="" disabled>Select a location</option> */}
              {EmployeType.map((EmployeType, index) => (
                <option key={index} value={EmployeType}>
                  {EmployeType}
                </option>
              ))}
            </select>

            <div>
              {selectedEmployetype && (
                <p>You selected: {selectedEmployetype}</p>
              )}
            </div>
          </div>
          <div>

            <h2>Select a Recent Post</h2>
            <select value={selectedDatePosted} onChange={handleDatePostedChange}>
              {/* <option value="" disabled>Select a location</option> */}
              {DatePosted.map((DatePosted, index) => (
                <option key={index} value={DatePosted}>
                  {DatePosted}
                </option>
              ))}
            </select>

            <div>
              {selectedDatePosted && (
                <p>You selected: {selectedDatePosted}</p>
              )}
            </div>
          </div>
        </div>
      </div >

      {loading && <Spinner />
      }
      <InfiniteScroll
        dataLength={jobs.length}
      >
        <div className="container">
          <div className="row">
            {/* console.log(jobs)  */}
            {jobs.map((job) => {
              // console.log(job)
              return (
                <div className="col-md-5 mx-4 py-3 border-blue-600" key={job.id}>
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
                  >
                  </Job>
                </div>
              )
            })}
          </div>
        </div>
      </InfiniteScroll>


    </>
  )
}

export default JobItem;