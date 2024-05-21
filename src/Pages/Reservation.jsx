import React from 'react'
import Navbar from '../Components/Navbar'
import SideNav from '../Components/SideNav'

export default function Reservation() {
  return (
    <div className=' w-full h-full grid grid-cols-6 grid-rows-8'>
        <Navbar  />
        <SideNav />
        <div className=' col-start-2 col-end-7 row-start-2 row-span-9'>
            .jjahsid
        </div>
    </div>
  )
}
