

export default function Footer () {

    return (

       <div className="bg-[#132238] lg:relative   lg:translate-y-200 xl:translate-y-190 md:text-sm">
             <div className=" w-5/7 m-auto text-white flex flex-row justify-between gap-4 space-y-20 ">

                <div className="mt-20 md:mt-40 flex flex-row gap-4">
                    <h1 className="bg-violet-500 px-4 py-2 rounded-full">A</h1>
                    <h1 className="py-2">Arif</h1>
                </div>

                <div className="md:mt-40 py-2">
                    <ul className="hidden lg:flex flex-row gap-4">
                        <li><a href="#home" className="hover:border-b-2 hover:border-violet-500 w-full cursor-pointer transition-all">Home</a></li>
                        <li><a href="#about" className="hover:border-b-2 hover:border-violet-500 w-full cursor-pointer transition-all">About</a></li>
                        <li><a href="services" className="hover:border-b-2 hover:border-violet-500 w-full cursor-pointer transition-all">Services</a></li>
                        <li><a href="process" className="hover:border-b-2 hover:border-violet-500 w-full cursor-pointer transition-all">Process</a></li>
                        <li><a href="projects" className="hover:border-b-2 hover:border-violet-500 w-full cursor-pointer transition-all">Projects</a></li>
                        <li><a href="blog" className="hover:border-b-2 hover:border-violet-500 w-full cursor-pointer transition-all">Blog</a></li>
                        <li><a href="contact" className="hover:border-b-2 hover:border-violet-500 w-full cursor-pointer transition-all">Contact</a></li>
                    </ul>
                </div>

                <div className="mt-20 py-2 md:mt-40 text-xs ">
                    <h1>Copyright &copy; 2025. All Rights Reserved </h1>
                </div>

            </div>
       </div>
    )
}