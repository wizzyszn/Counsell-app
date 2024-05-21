import React from 'react'
import Navbar from '../Components/Navbar'
import SideNav from '../Components/SideNav'
import { AiFillAppstore } from "react-icons/ai";
import { MdGroupAdd } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { MdOutlineAlarm } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
const data = [
  {
      name : 'Number of Appointments',
      icon : <FaRegCalendarCheck />,
      color : " bg-blue-400 "
  },
  {
      name : 'Number of Completed',
      icon : <MdOutlineAlarm />,
      color : 'bg-teal-300'
  },
 
  {
      name : 'Number of Students',
      icon : <MdGroup />,
      color : "bg-red-300"
  },
  {
      name : 'Number of Reasons for Referral',
      icon : <MdGroupAdd />,
      color: 'bg-purple-300'

  },
]

export default function Dashboard() {
  return (
    <div className=' w-full h-full grid grid-cols-6 grid-rows-8'>
        <Navbar  />
        <SideNav />
        <div className=' col-start-2 col-end-7 row-start-2 row-end-9 p-4 m-3 flex flex-col gap-4'>
          <div className=' flex items-center gap-2'><AiFillAppstore size={20} /><h2 className=' text-lg'>Dashboard</h2></div>
          <div className=' mt-3 bg-white shadow-sm p-4 space-y-4'>
           <h2 className=' text-lg'>Feeds</h2>
        <div className=' flex flex-col gap-9'>
            {
                data.map((elem,index) =>{
                    return <div className=' flex items-center gap-4' key={index}><div className={`${elem.color} p-4 rounded-full`}>{elem.icon}</div> <p>{elem.name}</p> </div>
                })
            }
        </div>
          </div>
         
            
        </div>
    </div>
  )
}