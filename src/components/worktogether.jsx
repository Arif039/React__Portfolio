
import whiteImage from '../images/whitearrow.png';

export default function WorkTogether () {
    return (
        <div className='bg-[#132238] text-white'>

            <div className='w-5/6 m-auto'>
                <div className='text-center p-13 md:p-20'>
                    <h1 className='text-xl md:text-3xl font-semibold'>Do you have Project idea?</h1>
                    <h1 className='text-xl md:text-3xl font-semibold'>Let's discuss your project! </h1>
                </div>

                <div className='w-full md:w-1/2 m-auto text-center text-[#a5acb5]'>
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium blanditiis quasi perspiciatis eveniet eligendi molestiae neque corporis aspernatur quisquam quis!</h3>
                </div>

                <div className='flex justify-center mt-10'>
                    <button type="submit" className='flex flex-row bg-violet-700 px-10 py-4 group hover:scale-105 transition-transform delay-100 ease-in-out gap-2 cursor-pointer mb-20 rounded-lg'>Let's Work Together <img src={whiteImage} alt="" className='p-1 group-hover:translate-x-2 transition-transform delay-100 ease-in-out'/></button>
                </div>
            </div>
           
        </div>
    )
}