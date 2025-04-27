import Navbar from '@/components/ui/Nav'
import React from 'react'

const HomePage = ({children}) => {
  return (
    <div className='px-5'>
        <Navbar />
        <div>{children}</div>
    </div>
  )
}

export default HomePage