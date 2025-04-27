import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/ui/Nav'
const page = () => {
  return (
    <div>
      <Navbar/>
      <Link href='/CourseList'>Explore</Link>
    </div>
  )
}

export default page