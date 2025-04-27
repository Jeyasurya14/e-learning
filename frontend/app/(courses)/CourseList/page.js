'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, DollarSign, Book, StarIcon } from 'lucide-react';
export default function CourseCard() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/course/courses/')
            .then(response => response.json())
            .then(data => {
                setCourses(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setError('Failed to load courses.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center text-xl">Loading courses...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className='flex flex-wrap justify-center gap-4 p-4'>
            {Array.isArray(courses) && courses.map(courseItem => (
                <div key={courseItem.id} className="w-full max-w-sm bg-gray-900 rounded-lg shadow-md overflow-hidden">
                    <img className="h-48 w-full object-cover" src={courseItem.thumbnail} alt="Course Image" />
                    <div className="p-4">
                        <h5 className="text-2xl font-bold text-gray-100 mb-2">{courseItem.title}</h5>
                        <p className="text-gray-300 mb-2">{courseItem.description}</p>
                        <div className='flex p-2 text-sm text-white font-bold gap-2 bg-yellow-950 w-16 rounded-lg mb-3'>
                        <StarIcon className='mt-0.5' color='yellow' size={15}/> {courseItem.rating}
                        </div>
                        <div className="text-white text-lg font-bold mb-2">{ courseItem.paid ? <span>₹ {courseItem.price} /-</span> : <span>Free</span>}</div>
                        <div className='flex gap-2'>
                            <div className={`rounded-lg p-2 mb-4 w-full ${courseItem.paid ? 'bg-green-950' : 'bg-blue-950'}`}>
                                <p className='text-gray-800 font-semibold '>
                                    {courseItem.paid ? <span className='text-green-400'><DollarSign color="green" size={15} />Paid Course</span> : <span className='text-blue-400'><DollarSign color='blue' size={15} /> Free Course</span>}
                                </p>
                            </div>
                            <div className={`rounded-lg p-2 mb-4 w-full ${courseItem.instructor ? 'bg-violet-950' : 'bg-blue-950'}`}>
                                <p className='text-gray-800 font-mono'>
                                    {courseItem.instructor ? <span className=' text-violet-400 font-mono '><User color="violet" size={15} /> {courseItem.instructor}</span> : <span className='text-blue-400'><User color="blue" size={15} /> Instructor : Unknown</span>}
                                </p>
                            </div>
                            <div className={`rounded-lg p-2 mb-4 w-full ${courseItem.level ? 'bg-yellow-950' : 'bg-blue-950'}`}>
                                <p className='text-gray-800 font-mono'>
                                    {courseItem.level ? <span className=' text-yellow-400 font-mono '><Book color="yellow" size={15} /> {courseItem.level}</span> : <span className='text-blue-400'><Book color="yellow" size={15} />  Unknown</span>}
                                </p>
                            </div>
                        </div>
                        <Button className="w-full bg-gray-800 hover:bg-gray-950 text-white font-bold py-2">Course detail</Button>
                    </div>
                </div>
            ))}
        </div>
    );
}
