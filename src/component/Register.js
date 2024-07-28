import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Register = () => {
const navigate = useNavigate();


  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
    Enrollment_no: "",
    password: "",
    confirmPassword: "",
    CPI: "",
    tenthMarks: "",
    twelfthMarks: "",
    resumePdf: null,
    address: "",
    skills: "",
    clg_name: "",
    department: "",
    semester: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const Register = async (e) => {
    e.preventDefault();

    const { name, email, number, Enrollment_no, password, confirmPassword } =
      user;
    if (
      name &&
      email &&
      number &&
      Enrollment_no &&
      password &&
      password === confirmPassword
    ) {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      const data1 = await res.json();
      // console.log(data);
      // alert(data1.message);
      toast.success(data1.message,{
        position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
     closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
     theme: "dark",
      });
      
      if (data1.success) navigate("/login");
      // history.push("/login");
    } else {
      toast.error("Invalid Input",{
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
  };

  return (
    <section style={{ 
      backgroundImage: 'url("https://t4.ftcdn.net/jpg/02/55/77/03/360_F_255770374_rbmJO9gkkIhMBcyVPc3iW016BCLDvcWc.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      width: '100vw', // 100% of viewport width
      height: '100vh', // 100% of viewport height
    }}>
    <div className="w-56 h-auto  mx-auto ">
      <img src="https://i.ibb.co/wJ9kwFZ/logo-removebg-preview.png"></img>
      </div>
      <div className="flex flex-col items-center justify-center  ">
        
        <div className="bg-white mx-96 rounded-lg shadow dark:border  dark:border-gray-700  backdrop-filter backdrop-blur-2 bg-opacity-25">
          <div className="p-6 space-y-4 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
              Sign Up
            </h1>
            
              {/* <div className="flex col-span-2"> */}
            <form className="w-auto mx-1 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-5 gap-x-5 mt-10 mb-10" onSubmit={Register}>
              <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Name</label>
                <input type="text" value={user.name} name="name" id="Name" onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Contact Number</label>
                <input type="text" value={user.number} name="number" id="number" onChange={handleChange}
                  placeholder="Your Contact number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Enrollment</label>
                <input type="text" value={user.Enrollment_no} name="Enrollment_no" id="Enrollment_no" onChange={handleChange}
                  placeholder="21BECE30327"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">email</label>
                <input type="email" value={user.email} name="email" id="email" onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
              </div>
              <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                <input type="password" value={user.password} name="password" id="password" placeholder="••••••••" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Confirm Password</label>
                <input type="password" value={user.confirmPassword} name="confirmPassword" id="confirmPassword" placeholder="••••••••" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">10th Marks</label>
                <input type="text" value={user.tenthMarks} name="tenthMarks" id="tenthMarks" placeholder="Enter your 10th Marks" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              
            
              <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">12th Marks</label>
                <input type="text" value={user.twelfthMarks} name="twelfthMarks" id="twelfthMarks" placeholder="Enter your 12th Marks" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">CPI</label>
                <input type="text" value={user.CPI} name="CPI" id="CPI" placeholder="Enter your CPI" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Address</label>
                <input type="text" value={user.address} name="address" id="address" placeholder="Enter your address" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Skills</label>
                <input type="text" value={user.skills} name="skills" id="skills" placeholder="Enter your skills" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Collage Name</label>
                <input type="text" value={user.clg_name} name="clg_name" id="clg_name" placeholder="Enter your Collage Name" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Department</label>
                <input type="text" value={user.department} name="department" id="department" placeholder="Enter your Department" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Current Semester</label>
                <input type="text" value={user.semester} name="semester" id="semester" placeholder="Enter your Semester" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>

             
            </form>
          </div>
          <button type="submit" onClick={Register} className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
              <p className="text-sm font-light  dark:text-white mb-10">
                Already have an account? <a href="" onClick={() => {
                  navigate("/login");
                }}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>

              </p>
          
        </div>
      </div>
    </section>
  );
};

export default Register;