import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/ui/Nav';
import Timer from '@/components/ui/Timer';
import Footer from '@/components/ui/Footer';

const Page = () => {
  return (
    <>
    <div className="min-h-screen bg-white px-8 py-2">
      <Timer endTime="2025-04-30T23:59:59" />
      <Navbar />

      <div className="flex flex-col items-center  justify-center w-full h-[250px] sm:h-[300px] md:h-[350px] p-4 bg-gradient-to-r from-blue-950 via-blue-500 to-blue-100 text-center ">
        <p className="font-bold flex flex-col text-blue-100 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Great learning platform for All levels
        </p>
        <p className="font-bold flex flex-col text-blue-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl"> (Free Learning platform)</p>
        <Link
          href="/CourseList"
          className="mt-4 px-4 sm:px-6 py-2 text-sm sm:text-base bg-blue-950 text-blue-200 font-bold rounded hover:bg-blue-900 transition-all"
        >
          Explore More
        </Link>

      </div>
      
    </div>
    <Footer /></>
  );
};

export default Page;
