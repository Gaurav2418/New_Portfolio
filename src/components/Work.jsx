import React from 'react';
import bookStore from './../assets/bookStore.jpg';
import movieApp from './../assets/movieApp.jpg'


const Work = () => {

    // projects file
    
    //setProject(data);
  
  return (
    <div name='work' className='bg-[#0a192f] text-white py-9 '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
         <div className=''>

              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
              
              <p className='py-4 font-bold text-2xl sm:text-3xl text-[#8892b0]'> These are my some of the featured projects </p>
              <p className='font-semibold p-2'>More Interesting Projects are Comming soon</p>
          </div>


          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Currently Working on</p>
              <h2 className='text-2xl font-semibold p-3 ml-3'>Offline Shopkeeper Companion</h2>
              </div>
              

<section className="bg-[#0a192f] dark:bg-gray-900 ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="bg-[#EFF3EA] dark:bg-[#EFF3EA] border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            {/* <a href="#" class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                    <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                </svg>
                Tutorial
            </a> */}
            <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Offline Shopkeeper Companion</h1>
            <h2 class="text-gray-600 font-extrabold m-3 dark:text-white">Building a Seamless Platform to Help Offline Businesses Expand Their Reach and to Grow in a Competative Environment</h2>
            <p class="text-lg font-normal text-gray-600 dark:text-gray-400 mb-6">This project aims to empower offline shopkeepers by providing them with a platform that increases their reach and helps them compete with online e-commerce giants. The app provides a solution to a key problem faced by consumers shopping online — the inability to verify product quality in person and deal with inconvenient return/replacement policies.</p>
            <a href="#" class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Read more
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-[#EFF3EA] dark:bg-[#EFF3EA] border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                {/* <a href="#" class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                    <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                        <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
                    </svg>
                    Design
                </a> */}
                <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Features</h2>
                {/* List */}
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                      {/* <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements:</h2> */}
                      <ul class="max-w-md space-y-1 text-gray-600 list-inside dark:text-gray-400">
                          <li class="flex items-center">
                              <svg class="w-3.5 h-3.5 me-2 text-green-600 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                              </svg>
                              Discover Local Shops and Navigate to Them
                          </li>
                          <li class="flex items-center">
                              <svg class="w-3.5 h-3.5 me-2 text-green-600 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                              </svg>
                              Verify Product Quality in Person
                          </li>
                          <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-600 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                              </svg>
                              Product Listings and Business Profiles
                          </li>
                          <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-600 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                              </svg>
                              Avoid Online Shopping Inconveniences
                          </li>
                          <li class="flex items-center">
                              <svg class="w-3.5 h-3.5 me-2 text-gray-600 dark:text-gray-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                              </svg>
                              Subscription Model
                          </li>
                      </ul>
                </p>

                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </div>

            <div class="bg-[#EFF3EA] dark:bg-[#EFF3EA] border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                {/* <a href="#" class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                    <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"/>
                    </svg>
                    Conclusion
                </a> */}
                <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Conclusion</h2>
                <p class="text-lg font-normal text-gray-600 dark:text-gray-400 mb-4">With this project, we aim to help offline shopkeepers compete with online e-commerce giants by providing them with a digital platform to increase their reach. The unique selling point of the app is that it allows users to verify product quality in person before making a purchase, avoiding common inconveniences like return hassles and poor product quality that often come with online shopping. This helps small local businesses gain a more trusted digital presence while offering customers the benefits of convenient and trustworthy offline shopping.</p>
                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>

          <div> 


          {/* 1st project div movie store app */}
          <h2 className='text-2xl font-semibold p-3 ml-3'>1. Movie Listing App</h2>
          <div className='w-full grid sm:grid-cols-2 gap-8 px-4 place-content-center'>
              <div className='flex justify-center p-5 '>
                  {/* div for image/screenshot of project */}
                  
                  <div>
                    
                    <p className='text-xl'>This is a Movie Listing App like Disney and Hotstar,where i am fetching data from free API provided by TMDB for movie data.This is a multi-page movie application with multiple movies listed in different catagories like Popular, Upcoming, Top Rated Movies</p>
                    <h3 className='font-semibold text-2xl text-[#8892b0]'>Features</h3>
                    <ul className='text-xl list-disc pt-1'>
                      <li>Automatic Image slider</li>
                      <li>Fetching Data from TMDB API </li>
                      
                    </ul>
                    <span>
                    check the code and live preview for this project here 
                      <a href="https://github.com/Gaurav2418/The-Movie-App">
                        <button className='bg-[#48b3bb] p-1 px-3 mx-2 rounded-lg'>Code</button>
                      </a>
                      {/* link for live preview */}
                      {/* <a href="https://gaurav-movie-app.netlify.app/">
                        <button className='bg-[#48b3bb] p-1 px-3 mx-2 rounded-lg'>Live Preview</button>
                      </a> */}
                    </span>
                  </div>
              </div>
              <div className='font-semibold text-2xl text-[#8892b0] flex justify-center'>
                  {/* div for description of project */}
                  <img className='w-full p-4 rounded-xl' src={movieApp} alt="Book Store UI" />
              </div>
          </div>




          {/* 2nd project div */}
          <h2 className='text-2xl font-semibold p-3 ml-3'>2. Book Store Mangement App</h2>
          <div className='w-full grid sm:grid-cols-2 gap-8 px-4 place-content-center'>

            
              <div className='flex justify-center p-5 '>
                  {/* div for image/screenshot of project */}
                  
                  <div>
                    
                    <p className='text-xl'>This is a Book Store Managment App where you can manage your book inventory by performing Add, Delete, Update operation on books data stored on database.</p>
                    <h3 className='font-semibold text-2xl text-[#8892b0]'>Features</h3>
                    <ul className='text-xl list-disc pt-1'>
                      <li>You can change UI in One Click</li>
                      <li>REST API Integration</li>
                      <li>Robust Backend System</li>
                    </ul>
                    <span>
                    check the code for this project here 
                      <a href="https://github.com/Gaurav2418/Book-Store-App-Fullstack">
                        <button className='bg-[#48b3bb] p-1 px-3 mx-2 rounded-lg'>Code</button>
                      </a>
                    </span>
                  </div>
              </div>
              <div className='font-semibold text-2xl text-[#8892b0] flex justify-center'>
                  {/* div for description of project */}
                  <img className='w-full p-4 rounded-xl' src={bookStore} alt="Book Store UI" />
              </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Work;
