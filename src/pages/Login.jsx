export default function Login(){
    return(
        <div>
                {/* <!-- Global container --> */}
    <div className="flex justify-center items-center min-h-screen bg-rose-50">
        {/* <!-- Card container --> */}
        <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0 w-full">
            {/* <!-- Left side --> */}
            <div className="p-6 md:p-20 mx-auto w-[752px]">
                {/* <!-- Top content --> */}
                <h2 className="mb-10 text-6xl font-bold text-center text-cyan-700 ">Login</h2>
                <p className="max-w-sm mb-12 text-2xl font-bold text-cyan-700">Log into your account
                </p> 

                <input type="text" className="py-4 px-6 w-full border border-gray-400 rounded-md mb-4"placeholder="Enter your Name " />
                <input type="text" className="py-4 px-6 w-full border border-gray-400 rounded-md mb-4"placeholder="Enter your Password" />
                {/* <input type="text" class="py-4 px-6 w-full border border-gray-400 rounded-md mb-4"placeholder="Enter your Email address"> --> */}


                {/* <!-- middle content --> */}
                <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-6">
                    {/* <!-- <div className="font-thin text-cyan-700"> <a href="#">Forgot Password</a> </div> --> */}

                    <button className="w-full flex justify-center items-center p-6 space-x-4 font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-200">
                        <span>Login</span>
                    </button>
                </div>

                {/* <!-- Border --> */}
                <div className="mt-12 border-b border-b-gray-300"></div>

                {/* <!-- buttom content --> */}
                <p className="py-6 text-sm text-center text-gray-400 font-thin">or Login with</p>

                {/* <!-- buttom button container --> */}
                <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
                    <button className="flex items-center py-2 space-x-3 justify-center border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-2xl hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqO2chLxpQYQ4czCKvOeFeCH8e3J_7u59Ej-xMql4sQ&s" alt="" className="w-9" />
                        <span className="font-thin">Facebook</span>
                    </button>

                    <button className="flex items-center py-2 space-x-3 justify-center border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                        <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" className="w-9" />
                        <span className="font-thin">Google</span>
                    </button>
                </div>
            </div>
            {/* <!-- Right side --> */}
            {/* <!-- <img src="https://media.istockphoto.com/id/1405778999/photo/psychologist-working-with-teenage-boy-at-office.jpg?s=612x612&w=0&k=20&c=X0QbEXz_IwYOFTViKIbWYuAn4ZCNsyQ4PFK0hIRlp3Q=" alt="" class="w-[100%] h-[750%] rounded-r-xl hidden md:block"> --> */}

            {/* <!-- close button --> */}
            <div className="group absolute -top-6 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5">
                <img src="https://t3.ftcdn.net/jpg/03/64/30/82/360_F_364308273_cV9OrZrqUpZ8En9rC8KxBqaxkVg95ZTY.jpg" className="w-6 h-6" alt="" />
            </div>

        </div>
    </div>
        </div>
    )
}