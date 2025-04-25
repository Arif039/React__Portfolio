import { HiOutlineLocationMarker } from "react-icons/hi";
import { TfiLocationPin } from "react-icons/tfi";
import { TbBrandFacebook } from "react-icons/tb";
import { FaDribbble } from "react-icons/fa6";
import { PiBehanceLogo } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { VscSend } from "react-icons/vsc";


export default function Contact () {

    

    return (

        <div className="lg:absolute lg:z-50 " id="contact">

            <div className='w-5/7 m-auto p-5 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-100 shadow-xl  mt-10 rounded-md'>

                <div className='p-1 lg:p-10'>

                    <div className='flex flex-col gap-6'>
                        <h1 className='text-xl lg:text-2xl font-bold'>Let's discuss your project</h1>
                        <h2 className='text-gray-500 text-xs w-full lg:text-base'>blockchain networks (like Bitcoin and Ethereum), the entire transaction history is publicly viewable. While the identities of the participants might be pseudonymous</h2>
                    </div>

                    <div className='group flex flex-row gap-4  p-1 lg:p-4 mt-10 mb-10 hover:bg-white rounded-md'>
                        <div className='bg-[#f6ebff] text-violet-500 text-2xl text-bold p-4 rounded-md group group-hover:bg-violet-500 group-hover:text-white'><HiOutlineLocationMarker /></div>
                        <div>
                            <h3 className="text-gray-600">Address:</h3>
                            <h2 className="font-semibold">Dhaka, Bangladesh</h2>
                        </div>
                    </div>

                    <div className='group flex flex-row gap-4  p-1 lg:p-4 mt-10 mb-10 hover:bg-white rounded-md'>
                        <div className='bg-[#f6ebff] text-violet-500 text-2xl text-bold p-4 rounded-md group group-hover:bg-violet-500 group-hover:text-white'><HiOutlineLocationMarker /></div>
                        <div>
                            <h3 className="text-gray-600">My Email:</h3>
                            <h2 className="font-semibold">mymail@mail.com</h2>
                        </div>
                    </div>

                    <div className='group flex flex-row gap-4  p-1 lg:p-4 mt-10 mb-10 hover:bg-white rounded-md'>
                        <div className='bg-[#f6ebff] text-violet-500 text-2xl text-bold p-4 rounded-md group group-hover:bg-violet-500 group-hover:text-white'><HiOutlineLocationMarker /></div>
                        <div>
                            <h3 className="text-gray-600">Call Me Now:</h3>
                            <h2 className="font-semibold">00-123 00000</h2>
                        </div>
                    </div>

                    

                    <div className='flex flex-row flex-wrap'>

                        <a href="" className='text-violet-500 text-3xl p-3  hover:bg-violet-600 hover:text-white hover:rounded-md'><TbBrandFacebook /></a>
                        <a href="" className='text-violet-500 text-3xl p-3 hover:bg-violet-600 hover:text-white hover:rounded-md'><FaDribbble /></a>
                        <a href="" className='text-violet-500 text-3xl p-3 hover:bg-violet-600 hover:text-white hover:rounded-md'><PiBehanceLogo /></a>
                        <a href="" className='text-violet-500 text-3xl p-3 hover:bg-violet-600 hover:text-white hover:rounded-md'><FaInstagram /></a>
                        <a href="" className='text-violet-500 text-3xl p-3 hover:bg-violet-600 hover:text-white hover:rounded-md'><FaLinkedinIn /></a>
                    </div>
                </div>

                <div className='p-6 lg:p-15'>

                    <div className=''>
                        <h2 className='text-gray-500 text-sm md:text-base'>Want to inquire about the services, or are ready to make an alliance?</h2>
                    </div>

                    <div className='mt-4 lg:mt-20 '>
                        <form action="" className="space-y-8">

                        <div className='relative group'>
                            <input
                                type="text"
                                id='name'
                                required
                                className='w-full peer outline-0 border-b-2 border-gray-400 focus:border-violet-400 pt-5' 
                            />
                            <label
                                htmlFor="name"
                                className='absolute top-4 left-0 peer-focus:top-0   peer-focus:text-violet-500 peer-focus:scale-75 origin-[0] text-gray-500 peer-placeholder-shown:scale-100  transition-all duration-300 ease-in-out'
                            >
                                Name*
                            </label>
                        </div>

                        <div className='relative group'>
                            <input
                                type="email"
                                id='email'
                                required
                                className='w-full peer outline-0 border-b-2 border-gray-400 focus:border-violet-400 pt-5' 
                            />
                            <label
                                htmlFor="email"
                                className='absolute top-4 left-0 peer-focus:top-0   peer-focus:text-violet-500 peer-focus:scale-75 origin-[0] text-gray-500 peer-placeholder-shown:scale-100  transition-all duration-300 ease-in-out'
                            >
                                Email*
                            </label>
                        </div>

                        <div className='relative group'>
                            <input
                                type="text"
                                id='location'
                                
                                className='w-full peer outline-0 border-b-2 border-gray-400 focus:border-violet-400 pt-5' 
                            />
                            <label
                                htmlFor="location"
                                className='absolute top-4 left-0 peer-focus:top-0   peer-focus:text-violet-500 peer-focus:scale-75 origin-[0] text-gray-500 peer-placeholder-shown:scale-100  transition-all duration-300 ease-in-out'
                            >
                                Location
                            </label>
                        </div>

                        <div className="flex flex-row flex-wrap gap-4">

                        <div className='relative group'>
                            <input
                                type="number"
                                id='budget'
                                required
                                className='w-full peer outline-0 border-b-2 border-gray-400 focus:border-violet-400 pt-5' 
                            />
                            <label
                                htmlFor="budget"
                                className='absolute top-4 left-0 peer-focus:top-0   peer-focus:text-violet-500 peer-focus:scale-75 origin-[0] text-gray-500 peer-placeholder-shown:scale-100  transition-all duration-300 ease-in-out'
                            >
                                Budget*
                            </label>
                        </div>

                        <div className='relative group'>
                            <input
                                type="text"
                                id='subject'
                                required
                                className='w-full peer outline-0 border-b-2 border-gray-400 focus:border-violet-400 pt-5' 
                            />
                            <label
                                htmlFor="subject"
                                className='absolute top-4 left-0 peer-focus:top-0   peer-focus:text-violet-500 peer-focus:scale-75 origin-[0] text-gray-500 peer-placeholder-shown:scale-100  transition-all duration-300 ease-in-out'
                            >
                                Subject*
                            </label>
                        </div>

                        </div>

                        <div className='relative group'>
                            <input
                                type="text"
                                id='message'
                                required
                                className='w-full peer outline-0 border-b-2 border-gray-400 focus:border-violet-400 pt-5' 
                            />
                            <label
                                htmlFor="message"
                                className='absolute top-4 left-0 peer-focus:top-0   peer-focus:text-violet-500 peer-focus:scale-75 origin-[0] text-gray-500 peer-placeholder-shown:scale-100  transition-all duration-300 ease-in-out'
                            >
                                Message*
                            </label>
                        </div>
                            

                        </form>

                        <div className="mt-10 text-white">
                            <button type="submit"  className="bg-violet-500 flex flex-row gap-4 group cursor-pointer text-sm md:text-2xl font-bold p-2 md:p-3 px-7 rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"> Submit <a href="" className="mt-1.5 group-hover:ml-5 transition-transform duration-300 ease-linear text-sm md:text-2xl text-bold"><VscSend /></a></button>
                            
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}