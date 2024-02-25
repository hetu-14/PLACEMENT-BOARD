import React from "react";
import { useNavigate } from "react-router-dom";

function User({ setLoginUser, user }) {
    const navigate = useNavigate();

    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/css/main.d7f96858.css" />
            </head>
            <body >
            <div class="flex flex-col justify-center items-center h-[130vh] pt-96">
                    <div class="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[576px] mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                        <div class="flex items-center justify-between rounded-t-3xl p-3 w-full">
                        

                            <div class="text-lg font-bold text-navy-700 dark:text-white">
                                Profile
                            </div>
                            
<div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>




                            {/* <button class="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
                        See all
                    </button> */}
                        </div>



                        
                        <div class="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                            <div class="flex items-center gap-3">
                                <div class="flex h-16 w-16 items-center justify-center">
                                    {/* <img
                            class="h-full w-full rounded-xl"
                            src="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft1.0fea34cca5aed6cad72b.png"
                            alt=""
                        /> */}
                                    <svg class="h-10 w-10 text-gray-900" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                                </div>
                                <div class="flex flex-col">
                                    <h5 class="text-base font-bold text-navy-700 dark:text-white">
                                        E-mail:
                                    </h5>
                                    <p class="mt-1 text-sm font-normal text-gray-600">
                                        {user.email}
                                    </p>
                                </div>
                            </div>

                            <div class="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
                                {/* <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div> */}
                                <div class="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                                    {/* <p>   </p>
                        0.4<p class="ml-1">ETH</p> */}
                                </div>
                                <div class="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                                    {/* <p>30s</p>
                        <p class="ml-1">ago</p> */}
                                </div>
                            </div>
                        </div>
                        <div class="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                            <div class="flex items-center gap-3">
                                <div class="flex h-16 w-16 items-center justify-center">
                                    {/* <img
                            class="h-full w-full rounded-xl"
                            src="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft6.9ff5403226e81a6fd390.png"
                            alt=""
                        /> */}
                                    <svg class="h-10 w-10 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>

                                </div>
                                <div class="flex flex-col">
                                    <h5 class="text-base font-bold text-navy-700 dark:text-white">
                                        Name:
                                    </h5>
                                    <p class="mt-1 text-sm font-normal text-gray-600">
                                        {user.name}
                                    </p>
                                </div>
                            </div>
                            <div class="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
                                {/* <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div> */}
                                <div class="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                                    {/* <p>   </p>
                        0.4<p class="ml-1">ETH</p> */}
                                </div>
                                <div class="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                                    {/* <p>30s</p>
                        <p class="ml-1">ago</p> */}
                                </div>
                            </div>
                        </div>
                        <div class="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                            <div class="flex items-center gap-3">
                                <div class="flex h-16 w-16 items-center justify-center">
                                    {/* <img
                            class="h-full w-full rounded-xl"
                            src="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft4.5fc37877b25c9fb9a52d.png"
                            alt=""
                        /> */}
                                    <svg class="h-10 w-10 text-gray-900" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="4" width="6" height="6" rx="1" />  <rect x="4" y="14" width="6" height="6" rx="1" />  <rect x="14" y="14" width="6" height="6" rx="1" />  <line x1="14" y1="7" x2="20" y2="7" />  <line x1="17" y1="4" x2="17" y2="10" /></svg>
                                </div>
                                <div class="flex flex-col">
                                    <h5 class="text-base font-bold text-navy-700 dark:text-white">
                                        Enrollment.No:
                                    </h5>
                                    <p class="mt-1 text-sm font-normal text-gray-600">
                                        {user.Enrollment_no}                        </p>
                                </div>
                            </div>
                            <div class="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
                                {/* <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div> */}
                                <div class="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                                    {/* <p>   </p>
                        0.4<p class="ml-1">ETH</p> */}
                                </div>
                                <div class="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                                    {/* <p>4h</p>
                        <p class="ml-1">ago</p> */}
                                </div>
                            </div>
                        </div>
                        <div class="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                            <div class="flex items-center gap-3">
                                <div class="flex h-16 w-16 items-center justify-center">
                                    {/* <img
                            class="h-full w-full rounded-xl"
                            src="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                            alt=""
                        /> */}
                                    <svg class="h-10 w-10 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="8" r="7" />  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                                </div>
                                <div class="flex flex-col">
                                    <h5 class="text-base font-bold text-navy-700 dark:text-white">
                                        10th Marks:
                                    </h5>
                                    <p class="mt-1 text-sm font-normal text-gray-600">
                                        {user.tenthMarks}                        </p>
                                </div>
                            </div>
                            <div class="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
                                {/* <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div> */}
                                <div class="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                                    {/* <p>   </p>
                        0.4<p class="ml-1">ETH</p> */}
                                </div>
                                <div class="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                                    {/* <p>30s</p>
                        <p class="ml-1">ago</p> */}
                                </div>
                            </div>
                        </div>


                        <div class="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                            <div class="flex items-center gap-3">
                                <div class="flex h-16 w-16 items-center justify-center">
                                    {/* <img
                            class="h-full w-full rounded-xl"
                            src="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft4.5fc37877b25c9fb9a52d.png"
                            alt=""
                        /> */}
                                    <svg class="h-10 w-10 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="8" r="7" />  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                                </div>
                                <div class="flex flex-col">
                                    <h5 class="text-base font-bold text-navy-700 dark:text-white">
                                        12th Marks:
                                    </h5>
                                    <p class="mt-1 text-sm font-normal text-gray-600">
                                        {user.twelfthMarks}                         </p>
                                </div>
                            </div>
                            <div class="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
                                {/* <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div> */}
                                <div class="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                                    {/* <p>   </p>
                        0.4<p class="ml-1">ETH</p> */}
                                </div>
                                <div class="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                                    {/* <p>4h</p>
                        <p class="ml-1">ago</p> */}
                                </div>
                            </div>
                        </div>


                        <div class="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                            <div class="flex items-center gap-3">
                                <div class="flex h-16 w-16 items-center justify-center">
                                    {/* <img
                            class="h-full w-full rounded-xl"
                            src="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft4.5fc37877b25c9fb9a52d.png"
                            alt=""
                        /> */}
                                    <svg class="h-10 w-10 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>



                                </div>
                                <div class="flex flex-col">
                                    <h5 class="text-base font-bold text-navy-700 dark:text-white">
                                        Current CPI:
                                    </h5>
                                    <p class="mt-1 text-sm font-normal text-gray-600">
                                        {user.CPI}
                                    </p>
                                </div>
                            </div>
                            <div class="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
                                {/* <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div> */}
                                <div class="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                                    {/* <p>   </p>
                        0.4<p class="ml-1">ETH</p> */}
                                </div>
                                <div class="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                                    {/* <p>4h</p>
                        <p class="ml-1">ago</p> */}
                                </div>
                            </div>
                        </div>





                        <div class="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                            <div class="flex items-center gap-3">
                                <div class="flex h-16 w-16 items-center justify-center">
                                    {/* <img
                            class="h-full w-full rounded-xl"
                            src="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft4.5fc37877b25c9fb9a52d.png"
                            alt=""
                        /> */}
                                    <svg class="h-10 w-10 text-gray-900" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M3 12h1M12 3v1M20 12h1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7" />  <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />  <line x1="9.7" y1="17" x2="14.3" y2="17" /></svg>
                                </div>
                                <div class="flex flex-col">
                                    <h5 class="text-base font-bold text-navy-700 dark:text-white">
                                        Skills:
                                    </h5>
                                    <p class="mt-1 text-sm font-normal text-gray-600">
                                        {user.skills}
                                    </p>
                                </div>
                            </div>
                            <div class="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
                                {/* <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div> */}
                                <div class="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                                    {/* <p>   </p>
                        0.4<p class="ml-1">ETH</p> */}
                                </div>
                                <div class="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                                    {/* <p>4h</p>
                        <p class="ml-1">ago</p> */}
                                </div>
                            </div>
                        </div>



                        <div class="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                            <div class="flex items-center gap-3">
                                <div class="flex h-16 w-16 items-center justify-center">
                                    {/* <img
                            class="h-full w-full rounded-xl"
                            src="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft4.5fc37877b25c9fb9a52d.png"
                            alt=""
                        /> */}
                                    <svg class="h-10 w-10 text-gray-900" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />  <line x1="8" y1="8" x2="12" y2="8" />  <line x1="8" y1="12" x2="12" y2="12" />  <line x1="8" y1="16" x2="12" y2="16" /></svg>
                                </div>
                                <div class="flex flex-col">
                                    <h5 class="text-base font-bold text-navy-700 dark:text-white ">
                                        Department:
                                    </h5>
                                    <p class="mt-1 text-sm font-normal text-gray-600">
                                        {user.department}
                                    </p>
                                </div>
                            </div>
                            <div class="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
                                {/* <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div> */}
                                <div class="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                                    {/* <p>   </p>
                        0.4<p class="ml-1">ETH</p> */}
                                </div>
                                <div class="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                                    {/* <p>4h</p>
                        <p class="ml-1">ago</p> */}
                                </div>
                            </div>
                        </div>


                        <div class="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                            <div class="flex items-center gap-3">
                                <div class="flex h-16 w-16 items-center justify-center">
                                    {/* <img
                            class="h-full w-full rounded-xl"
                            src="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft4.5fc37877b25c9fb9a52d.png"
                            alt=""
                        /> */}
                                    <svg class="h-10 w-10 text-gray-900" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />  <path d="M13 15v-6l3 4l3 -4v6" /></svg>
                                </div>
                                <div class="flex flex-col">
                                    <h5 class="text-base font-bold text-navy-700 dark:text-white">
                                        Semester:
                                    </h5>
                                    <p class="mt-1 text-sm font-normal text-gray-600">
                                        {user.semester}
                                    </p>
                                </div>
                            </div>
                            <div class="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
                                {/* <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div> */}
                                <div class="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                                    {/* <p>   </p>
                        0.4<p class="ml-1">ETH</p> */}
                                </div>
                                <div class="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                                    {/* <p>4h</p>
                        <p class="ml-1">ago</p> */}
                                </div>
                            </div>
                        </div>
                        <div class="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                            <div class="flex items-center gap-3">
                                <div class="flex h-16 w-16 items-center justify-center">
                                    {/* <img
                            class="h-full w-full rounded-xl"
                            src="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft5.62dbaf7dd91b4180035c.png"
                            alt=""
                        /> */}
                                    <svg class="h-10 w-10 text-gray-900" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="3" y1="21" x2="21" y2="21" />  <path d="M5 21v-14l8 -4v18" />  <path d="M19 21v-10l-6 -4" />  <line x1="9" y1="9" x2="9" y2="9.01" />  <line x1="9" y1="12" x2="9" y2="12.01" />  <line x1="9" y1="15" x2="9" y2="15.01" />  <line x1="9" y1="18" x2="9" y2="18.01" /></svg>
                                </div>
                                <div class="flex flex-col">
                                    <h5 class="text-base font-bold text-navy-700 dark:text-white">
                                        College Name:
                                    </h5>
                                    <p class="mt-1 text-sm font-normal text-gray-600">
                                        {user.clg_name}      </p>
                                </div>
                            </div>
                            <div class="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
                                {/* <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div> */}
                                <div class="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                                    {/* <p>   </p>
                        0.4<p class="ml-1">ETH</p> */}
                                </div>
                                <div class="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                                    {/* <p>30s</p>
                        <p class="ml-1">ago</p> */}


                                    <div class="mt-14 flex justify-center w-full">
                                        <button class="bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded" onClick={() => {
                                            navigate("/")
                                        }} >
                                            Back
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </body>
        </html>


    );
}

export default User;