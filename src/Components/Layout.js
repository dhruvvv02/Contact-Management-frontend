import React from 'react'
import { Navbar } from './Navbar'

export const Layout = ({navbar = true, children}) => {
  return (
    <>
        {navbar && <Navbar/>}
        <div className='container mt-3'>
            {children}
        </div>
    </>
  )
}
