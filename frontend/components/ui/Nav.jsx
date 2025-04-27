import Link from 'next/link';
import React from 'react'
import { User, UserCheck } from 'lucide-react';
export default function Navbar() {
    return (
        <>
            <div className='m-5 flex justify-between'>
                <h1 className='font-bold text-2xl'>Learn-Made</h1>
                <ul className='flex gap-3 font-bold text-white rounded-lg'>
                    <Link href='/login' className='bg-blue-600 p-3 flex hover:bg-blue-800'><UserCheck className='mt-1' size={15} />Login</Link>
                    <Link href='/signup' className='bg-blue-950 p-3 flex hover:bg-blue-900'><User size={15} className='mt-1'/>Signup</Link>
                </ul>
            </div>
        </>
    );
}