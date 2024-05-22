import React from 'react'
import Navbar from '../Components/Navbar'
import SideNav from '../Components/SideNav'
import { AiOutlineUsergroupAdd } from "react-icons/ai"
import { MdDelete } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
export default function Counselling() {
  return (
    <div className=' w-full h-full grid grid-cols-6  grid-rows-8'>
    <Navbar  />
    <SideNav />
    <div className=' col-start-2 col-end-7 row-start-2 row-end-9 p-4'>
          <div className=' flex p-4 gap-3 items-center'> <AiOutlineUsergroupAdd size={25} /><h1 className=' text-lg'>Counselling</h1> </div>
          <div className='bg-white shadow-sm m-4'>
              <table className=' w-full'>
                <div className=' pt-4 pb-4 ml-5 flex gap-3 text-sm'><div className=' p-2 bg-teal-300 flex gap-1 items-center'><FaPlus /> <span>Add New</span></div></div>
                <tr>
                <th>Student Name</th>
                <th>Guidance Message</th>
                <th>Strategies use</th>
                <th>Video Record Link</th>
                <th>Remarks</th>
                <th>Date</th>
                <th>Action </th>
                </tr>
                <tr>
                  <td>Osato David</td>
                  <td>Information Technology</td>
                  <td>Strategy name</td>
                  <td>	https://videolink101.com</td>
                  <td>Good</td>
                  <td>	March 10, 2024</td>
                  <td><div className=' flex items-center gap-2'><IoIosCreate size={20} /><MdDelete size={20} /></div></td>
                  
                  
                </tr>
                <tr>
                  <td>Information Technology</td>
                  <td>Engineering</td>
                  <td>Strategy name</td>
                  <td>	https://videolink101.com</td>
                  <td>Great</td>
                  <td>	June 12, 2024</td>
                  <td><div className=' flex items-center gap-2'><IoIosCreate size={20} /><MdDelete size={20} /></div></td>
                
                  
               
                </tr>
                <tr>
                  <td>Ishaya Grace</td>
                  <td>Pure Mathematics and Statistics</td>
                  <td>Strategy name</td>
                  <td>	https://videolink101.com</td>
                  <td>Excellent</td>
                  <td>	January 10, 2024</td>
                  <td><div className=' flex items-center gap-2'><IoIosCreate size={20} /><MdDelete size={20} /></div></td>
           
               
                </tr>
                <tr>
                  <td> Olumese David</td>
                  <td>Medical and Biological Sciences</td>
                  <td>Strategy name</td>
                  <td>	https://videolink101.com</td>
                  <td>Poor</td>
                  <td>	April 5, 2024</td>
                  <td><div className=' flex items-center gap-2'><IoIosCreate size={20} /><MdDelete size={20} /></div></td>
                 
                  
                </tr>
                <tr>
                  <td>Ayaba Esther</td>
                  <td>Enterprenuership</td>
                  <td>Strategy name</td>
                  <td>	https://videolink101.com</td>
                  <td>Fair  </td>
                  <td>	May 3, 2024</td>
                  <td><div className=' flex items-center gap-2'><IoIosCreate size={20} /><MdDelete size={20} /></div></td>
            
                  
                  
                </tr>
        
              </table>
            
           
          </div>
 
        </div>
   
</div>
  )
}
