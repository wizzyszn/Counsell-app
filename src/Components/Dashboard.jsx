import React from 'react'
import avatar from '../assets/1517358451617.jpeg'
import { AiFillAppstore } from "react-icons/ai";
import { MdGroupAdd } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { MdOutlineAlarm } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
const data  =[
    {
    name : 'Dashboard',
    icon : <AiFillAppstore size={25} />
},
{
    name : 'Student',
    icon : <MdGroup  size={25}/>
},
    {
    name : 'Reason for Counselling',
    icon :  <MdGroupAdd size={25} />
},
  
    {
    name : 'Appointment Schedule',
    icon : <MdOutlineAlarm size={25} />
},
    {
    name : 'Apppointment Reservation',
    icon : <FaRegCalendarCheck size={25} />
},
    {
    name : 'Counselling',
    icon : <AiOutlineUsergroupAdd size={25} />
},
    {
    name : 'Appointment Reports',
    icon : <BiSolidPieChartAlt2 size={25} />
},

]

export default function Dashboard() {
  return (
    <div className=' w-1/6 h-svh shadow-md p-3 justify-center flex-col space-y-9'>
        <div className=' flex justify-center gap-3 '>
            <div className=' size-14 rounded-[50%]'>
                <img src={avatar} alt="avatar" className=' w-full h-full rounded-[50%] object-cover'/>
            </div>
            <div>
            <h2 className=' text-xl'>Obaro Micheal</h2>
            <p className=' text-sm text-gray-400'>obaromicheal@gmail.com</p>
            </div>
        </div>
        <div className=' flex flex-col gap-8 p-4'>
        {
            data.map((elem,index) =>{
                return<div key={index} className='flex items-center gap-3'>
                     <div>{elem.icon}</div>
                     <p>{elem.name}</p>
                     </div>
            })
        }
        </div>
      
    </div>
  )
}
