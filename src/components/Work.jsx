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
                      <a href="https://gaurav-movie-app.netlify.app/">
                        <button className='bg-[#48b3bb] p-1 px-3 mx-2 rounded-lg'>Live Preview</button>
                      </a>
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
