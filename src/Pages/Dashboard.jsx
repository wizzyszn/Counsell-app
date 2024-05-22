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
                    return <div className=' flex items-center gap-4' key={index}><div className={`${elem.color} p-3 rounded-full`}>{elem.icon}</div> <p className=' text-sm'>{elem.name}</p> </div>
                })
            }
        </div>
          </div>
         
          <div className='bg-white shadow-sm'>
              <table className=' w-full'>
                <div className=' pt-4 pb-4 ml-5'><thead>Reservation List</thead></div>
                <tr>
                <th>Student Name</th>
                <th>Referral Reason</th>
                <th>Concern</th>
                <th>Date</th>
                <th>Time</th>
                <th>Meeting Link</th>
                <th>Status</th>
                </tr>
                <tr>
                  <td>Osato David</td>
                  <td>Addiction</td>
                  <td>Addiction</td>
                  <td>March 10, 2024</td>
                  <td>10:00 AM</td>
                  <td className=' underline text-blue-600'>https://meetinglink101.com</td>
                  <td><div className=' bg-green-600 text-white text-center rounded-sm w-fit p-1'> Approved</div></td>
                </tr>
                <tr>
                  <td>Gbenga Daniel</td>
                  <td>Lying</td>
                  <td>Lying</td>
                  <td>May 13, 2024</td>
                  <td>10:00 AM</td>
                  <td className=' underline text-blue-600'>https://meetinglink101.com</td>
                  <td><div className=' bg-green-600 text-white text-center rounded-sm w-fit p-1'> Approved</div></td>
                </tr>
                <tr>
                  <td>Ishaya Isaiah</td>
                  <td>Depression</td>
                  <td>Depression</td>
                  <td>May 1, 2024</td>
                  <td>10:00 AM</td>
                  <td className=' underline text-blue-600'>https://meetinglink101.com</td>
                  <td><div className=' bg-blue-600 text-white text-center rounded-sm w-fit p-1'>Completed</div></td>
                </tr>
                <tr>
                  <td>Isagi Emmanuela</td>
                  <td>Stress</td>
                  <td>Stress</td>
                  <td>April 17, 2024</td>
                  <td>10:00 AM</td>
                  <td className=' underline text-blue-600'>https://meetinglink101.com</td>
                  <td><div className=' bg-amber-600 text-white text-center rounded-sm w-fit p-1'> Pending</div></td>
                </tr>
                <tr>
                  <td>King David</td>
                  <td>Bullying</td>
                  <td>Bullying</td>
                  <td>March 14, 2024</td>
                  <td>10:00 AM</td>
                  <td className=' underline text-blue-600'>https://meetinglink101.com</td>
                  <td><div className=' bg-red-600 text-white text-center rounded-sm w-fit p-1'>Canceled</div></td>
                </tr>
        
              </table>
            
           
          </div>
         
            
        </div>
    </div>
  )
}