import React from 'react'
import avatar from '../assets/1517358451617.jpeg'
import { AiFillAppstore } from "react-icons/ai";
import { MdGroupAdd } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { MdOutlineAlarm } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { Link } from 'react-router-dom';
const data  =[
    {
    name : 'Dashboard',
    link : '/',
    icon : <AiFillAppstore size={25} />
},
{
    name : 'Student',
    icon : <MdGroup  size={25}/>,
    link : '/student'
},
    {
    name : 'Reason for Counselling',
    icon :  <MdGroupAdd size={25} />,
    link : '/reason-for-counselling'
},
  
    {
    name : 'Appointment Schedule',
    icon : <MdOutlineAlarm size={25} />,
    link  : '/schedule'
},
    {
    name : 'Apppointment Reservation',
    icon : <FaRegCalendarCheck size={25} />,
    link : '/reservation'
},
    {
    name : 'Counselling',
    icon : <AiOutlineUsergroupAdd size={25} />,
    link : '/counselling'
},
    {
    name : 'Appointment Reports',
    icon : <BiSolidPieChartAlt2 size={25} />,
    link : '/reports'
},

]

export default function SideNav() {
  return (
    <div className=' shadow-md p-3 col-span-1 row-span-8 bg-white'>
        <div className=' flex gap-5 mt-5'>
            <div className=' size-14 rounded-[50%]'>    
                <img src={avatar} alt="avatar" className=' w-full h-full rounded-[50%] object-cover'/>
            </div>
            <div>
            <h2 className=' text-lg'>Obaro Micheal</h2>
            <p className=' text-sm text-gray-400'>obaromicheal@gmail.com</p>
            </div>
        </div>
        <div className=' flex flex-col gap-8 p-4 mt-4'>
        {
            data.map((elem,index) =>{
                return<Link key={index} to={elem.link} className='flex items-center gap-3 cursor-pointer'>
                     <div>{elem.icon}</div>
                     <p className=' text-gray-600'>{elem.name}</p>
                     </Link>
            })
        }
        </div>
      
    </div>
  )
}
