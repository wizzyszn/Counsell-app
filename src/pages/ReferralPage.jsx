import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

export default function ReferralPage(){
    return(
        // global container
        <div className="container max-w-6xl p-2 mx-auto bg-gray-300">
             <h2 className="text-lg font-bold mb-1 pl-3 ">Reasons for Counselling </h2>
<p><span className="text-blue-600 pl-3">Home</span>     {">"}   Reason </p>


            {/* button container */}
            <div className="p-2">
                <button className="px-4 py-2 bg-blue-400 mb-4">
                    Add New
                </button>
                {/* flex container */}
                <table>
  <tr className="">
    <th>Reason</th>
    <th>Description</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>Anxiety</td>
    <td>Persistent feelings of worry, fear, or dread often without a clear cause.</td>
    <td>
        <div className="flex flex-row justify-start gap-2 px-2 text-2xl">
             <MdDeleteOutline className="bg-red-500" /><FaRegEdit className="bg-blue-500" />
        </div>
       
        </td>
    {/* <td></td> */}

  </tr>
  <tr>
    <td>Bipolar Disorder</td>
    <td>Severe mood swings ranging from manic highs to depressive lows.</td>
    <td>
    <div className="flex flex-row justify-start gap-2 px-2 text-2xl">
    <MdDeleteOutline className="bg-red-500" /><FaRegEdit className="bg-blue-500" />
        </div>
    </td>
  </tr>
  <tr>
    <td>Friendship Issues</td>
    <td> Struggles in maintaining or ending friendships</td>
    <td>
    <div className="flex flex-row justify-start gap-2 px-2 text-2xl">
    <MdDeleteOutline className="bg-red-500" /><FaRegEdit className="bg-blue-500" />
        </div>
    </td>
  </tr>
  <tr>
    <td>Sexual Abuse</td>
    <td>Healing from past or recent sexual assault.</td>
    <td>
    <div className="flex flex-row justify-start gap-2 px-2 text-2xl">
    <MdDeleteOutline className="bg-red-500" /><FaRegEdit className="bg-blue-500" />
        </div>
    </td>
  </tr>
  <tr>
    <td>Academic Stress</td>
    <td> Coping with the pressures of school or college.</td>
    <td>
    <div className="flex flex-row justify-start gap-2 px-2 text-2xl">
    <MdDeleteOutline className="bg-red-500" /><FaRegEdit className="bg-blue-500" />
        </div>
    </td>
  </tr>
  <tr>
    <td>Self-Esteem Issues</td>
    <td>Low self-worth and lack of confidence.</td>
    <td>
    <div className="flex flex-row justify-start gap-2 px-2 text-2xl">
    <MdDeleteOutline className="bg-red-500" /><FaRegEdit className="bg-blue-500" />
        </div>
    </td>
  </tr>
</table>
    </div>
        </div>
    )
} 
