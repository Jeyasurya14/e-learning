import Navbar from '@/components/ui/Nav'
import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div>
        <Navbar />
       <div>{children}</div> 
    </div>
  )
}

export default AuthLayout