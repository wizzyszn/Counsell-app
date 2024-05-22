export default function HomePage(){
    return(
        <div>
            {/* nav section */}
            <nav class="relative container max-w-6xl mx-auto p-6">
        {/* <!-- flex container --> */}
        <div class="flex justify-start items-center md:justify-between space-x-6">
            {/* <!-- logo &  menu container --> */}
            <div class="flex items-center space-x-20 ">
                {/* <!-- logo --> */}
                {/* <img src="https://t3.ftcdn.net/jpg/02/17/40/34/360_F_217403476_dNHrQLSa2SyevxLHSX9ws4SP3E9dO4Yr.jpg" alt=""  className="w-[70px] h-[50px] mr-12"/> */}
                {/* <!-- left menu --> */}
                <div class=" space-x-8 font-bold lg:flex">
                    <a href="#" class="text-grayishViolet hover:text-Violet">Home</a>

                    <a href="#" class="text-grayishViolet hover:text-Violet">About</a>

                    <a href="#" class="text-grayishViolet hover:text-Violet">Service</a>

                    <a href="#" class="text-grayishViolet hover:text-Violet">Contact</a>
                </div>
            </div>

            {/* <!-- right buttons container --> */}
            <div class=" lg:flex items-center justify-center space-x-6 font-bold text-grayishViolet">
                <div class="hover:text-veryDarkViolet">
                    <a href="#">Login</a></div>
                <button class="px-6 py-4 bg-black rounded-full text-white hover:opacity-70">Sign Up</button>
            </div>
        </div>
    </nav>

    {/* hero section */}
    <section id="Hero" className="w-full">
        {/* <!-- hero container --> */}
        <div class=" flex   flex-col-reverse mx-auto  p-6 lg:flex-row bg-blue-200 w-full">
            {/* <!-- content container --> */}
            <div class="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52 ">
                <h1 class="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left capitalize text-violet-900">
                    Compassion and evidence based therapy
                </h1>
                <p class="text-2xl text-center text-gray-900 lg:max-w-md lg:text-left">
                    Balancing your academic life and challenges. Our experienced team is here to empower students through comprehensive counselling services
                </p>
                <div class="mx-auto lg:mx-0">
                    <a href="" class="px-10 py-5 font-bold text-2xl text-white bg-violet-500 rounded-full lg:py-4 hover:opacity-70">
                        Get Started
                    </a>
                </div>
            </div>
            {/* <!-- image --> */}
            <div classNa=" mx-auto md:w-180 lg:mb-0 lg:w-1/2 rounded-3xl">
                <img src="https://cdn5.vectorstock.com/i/1000x1000/88/19/therapy-and-counselling-under-stress-vector-44558819.jpg" alt="" className=" rounded-3xl" />
            </div>
        </div>
    </section>
        </div>
    )
}