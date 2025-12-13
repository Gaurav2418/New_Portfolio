import React from "react";

const Experience = () => {
  return (
    // flex flex-col justify-center items-center w-full w-full h-screen
    <div name="experience" className=" bg-[#0a192f] ">
      <div className="w-full flex justify-center">
        <p className="bg-[#0a192f] text-white  text-4xl font-bold  border-b-4 border-pink-600 ">
          Work Experience
        </p>
      </div>

      <section class=" dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="bg-gray-300 mb-[100px] dark:bg-[#EFF3EA] border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            {/* <a href="#" class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                    <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                </svg>
                Tutorial
            </a> */}

            <div class="sm:flex sm:justify-between">
              <h2 class="text-gray-900 dark:text-black text-3xl md:text-5xl font-extrabold mb-2">
                Ridecell
              </h2>
              <h3 class="mt-5 font-semibold dark:text-black">
                August 2025- October 2025
              </h3>
            </div>
            <h3 class="font-semibold">
              (Product Based Company backed by Y Combinator)
            </h3>
            <h2 class="text-gray-600 font-extrabold m-3 dark:text-black">
              Software Engineering Intern
            </h2>

            <ul class="max-w-screen-xl sm:ml-6 sm:mr-[120px] space-y-1 text-gray-600 list-disc list-inside dark:text-gray-900">
              <li>
                Contributed to the successful product launch in Belgium by
                converting high-level customer ideas into intuitive,
                production-ready features. Demonstrated adaptability and
                ownership while working in a fast-paced, multi-platform
                development environment.
              </li>
              <li>
                Assisted in debugging, optimizing, and maintaining existing
                codebases to improve performance and reliability. Actively
                participated in code reviews and team discussions, ensuring
                clean, maintainable, and scalable code.
              </li>
              <li>
                Gained hands-on experience in real-world software development,
                focusing on clean code, collaboration, and problem-solving.
              </li>
            </ul>
          </div>

          <div className="bg-gray-300 mb-[100px] dark:bg-[#EFF3EA] border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            {/* <a href="#" class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                    <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                </svg>
                Tutorial
            </a> */}

            <div class="sm:flex sm:justify-between">
              <h2 class="text-gray-900 dark:text-black text-3xl md:text-5xl font-extrabold mb-2">
                Next Step Technologies.
              </h2>
              <h3 class="mt-5 font-semibold dark:text-black">
                December 2024 - July 2025
              </h3>
            </div>
            <h2 class="text-gray-600 font-extrabold m-3 dark:text-black">
              Junior Software Engineer
            </h2>

            <ul class="max-w-screen-xl sm:ml-6 sm:mr-[120px] space-y-1 text-gray-600 list-disc list-inside dark:text-gray-900">
              <li>
                Developed a fully automated testing system using LabVIEW to
                monitor and control the performance of electronic devices under
                various conditions. This system reduced testing time by 30% and
                improved accuracy.
              </li>
              <li>
                Created user-friendly graphical interfaces (using LabVIEW’s
                front panel) to display real-time data and Implemented OEE
                (Overall Equipment Efficiency) calculations within the system to
                monitor machine performance and identify areas for improvement,
                resulting in better resource utilization
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
