"use client"
import { Menu } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  return (
    <div>

        {/* Top logo */}
        <div className='flex gap-3 justify-between md:justify-between items-center pt-8'>
            <div>logo</div>
            <h1 className=' font-extrabold text-2xl'>JustInventory</h1>
       
        <button 
          className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' 
          onClick={() =>{}}>
          <Menu className='w-4 h-4' />
        </button>
        </div>

        {/* Links */}
        <div className='flex-grow mt-8'>
           {/*Links here*/} 
        </div>

        {/* Footer */}
        <div>
            <p className='text-center text-xs text-gray-500'>© 2024 JustInventory</p>
        </div>
    </div>
  )
}

export default Sidebar