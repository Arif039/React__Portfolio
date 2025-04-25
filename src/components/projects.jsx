import arrowImage from '../images/arrow.png';
import supplyImage from '../images/supplychain.png';
import votingImage from '../images/voting.jpg';
import todoImage from '../images/todo.jpg';
import nftImage from '../images/nft.jpg';
import portfolioImage from '../images/portfolio.jpg';
import multiplicationImage from '../images/multiplication.jpg';

export default function Projects () {

    return (

        <div className='w-5/6 m-auto mt-20' id='projects'>

            

            <div className='text-center flex flex-col gap-6'>
                <h1 className='text-4xl font-bold'>Projects</h1>
                <h3 className='text-[#697484] text-sm md:w-4/7 m-auto mb-8 md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam neque sequi minus expedita perferendis enim delectus, asperiores accusantium magni. Praesentium</h3>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

                <div className='flex flex-col gap-4 border-1 border-gray-300  rounded-md shadow-md'>
                    <img src={supplyImage} alt="supplychain" className='h-90 bg-fixed'/>
                    <h2 className='text-[#697484] px-4'>Decentralize SupplyChain</h2>
                    <h3 className='text-sm  text-[#697484] px-4'>The core benefits of decentralization in a supply chain stem from distributing control and data across multiple participants rather than relying on a central authority.</h3>
                    <button type='submit'  className='relative overflow-hidden group flex flex-row gap-4 border-1 rounded-lg ml-4 mb-4 w-3/7 md:w-3/7 xl:w-2/7 text-sm  cursor-pointer text-violet-600 font-bold px-2 py-3 border-violet-600 hover:scale-105 transition-transform duration-300' onClick={() => window.open('https://arif039.github.io/simple_supply_chain/', '_blank')} >Case Study <img src={arrowImage} alt="arrowImage" className='transition-transform duration-300 ease-in-out group-hover:translate-x-3'/> </button>
                </div>

               
                <div className='flex flex-col gap-4 border-1 border-gray-300  rounded-md shadow-md'>
                    <img src={votingImage} alt="voting" className='h-90 bg-fixed'/>
                    <h2 className='text-[#697484] px-4'>Decentralize Voting</h2>
                    <h3 className='text-sm  text-[#697484] px-4'>The core benefits of decentralization in a voting system is the from distributing control and data across multiple participants rather than relying on a central authority.</h3>
                    <button className='relative overflow-hidden group flex flex-row gap-4 border-1 rounded-lg ml-4 mb-4 w-3/7 md:3/7 xl:w-2/7 text-sm  cursor-pointer text-violet-600 font-bold px-2 py-3 border-violet-600 hover:scale-105 transition-transform duration-300'  onClick={() => window.open('https://arif039.github.io/Voting_dApp/', '_blank')}>Case Study <img src={arrowImage} alt="arrowImage" className='transition-transform duration-300 ease-in-out group-hover:translate-x-3'/> </button>
                </div>

                <div className='flex flex-col gap-4 border-1 border-gray-300  rounded-md shadow-md'>
                    <img src={todoImage} alt="todo" className='h-90 bg-fixed'/>
                    <h2 className='text-[#697484] px-4'>Decentralize ToDo</h2>
                    <h3 className='text-sm  text-[#697484] px-4'>A decentralized to-do app aims to remove reliance on a central server for storing and managing your tasks. Instead, data is typically distributed across a network of computers. </h3>
                    <button className='relative overflow-hidden group flex flex-row gap-4 border-1 rounded-lg ml-4 mb-4 w-3/7 md:3/7 xl:w-2/7 text-sm  cursor-pointer text-violet-600 font-bold px-2 py-3 border-violet-600 hover:scale-105 transition-transform duration-300' onClick={() => window.open('https://arif039.github.io/todo-app/', '_blank')}>Case Study <img src={arrowImage} alt="arrowImage" className='transition-transform duration-300 ease-in-out group-hover:translate-x-3'/> </button>
                </div>

                <div className='flex flex-col gap-4 border-1 border-gray-300  rounded-md shadow-md'>
                    <img src={nftImage} alt="supplychain" className='h-90 bg-fixed'/>
                    <h2 className='text-[#697484] px-4'>ERC20 TOKENS</h2>
                    <h3 className='text-sm  text-[#697484] px-4'>The core benefits of decentralization in a supply chain stem from distributing control and data across multiple participants rather than relying on a central authority.</h3>
                    <button className='relative overflow-hidden group flex flex-row gap-4 border-1 rounded-lg ml-4 mb-4 w-3/7 md:3/7 xl:w-2/7 text-sm  cursor-pointer text-violet-600 font-bold px-2 py-3 border-violet-600 hover:scale-105 transition-transform duration-300' onClick={() => window.open('https://arif039.github.io/erc20_Token/', '_blank')}>Case Study <img src={arrowImage} alt="arrowImage" className='transition-transform duration-300 ease-in-out group-hover:translate-x-3'/> </button>
                </div>

                <div className='flex flex-col gap-4 border-1 border-gray-300  rounded-md shadow-md'>
                    <img src={portfolioImage} alt="supplychain" className='h-90 bg-fixed'/>
                    <h2 className='text-[#697484] px-4'>Decentralize Portfolio</h2>
                    <h3 className='text-sm  text-[#697484] px-4'>A decentralized portfolio takes the principles of decentralization – control, transparency, and resilience – and applies them to how you showcase your work, skills, and achievements.</h3>
                    <button className='relative overflow-hidden group flex flex-row gap-4 border-1 rounded-lg ml-4 mb-4 w-3/7 md:3/7 xl:w-2/7 text-sm  cursor-pointer text-violet-600 font-bold px-2 py-3 border-violet-600 hover:scale-105 transition-transform duration-300' onClick={() => window.open('https://arif039.github.io/decentralize_portfolio1/', '_blank')}>Case Study <img src={arrowImage} alt="arrowImage" className='transition-transform duration-300 ease-in-out group-hover:translate-x-3'/> </button>
                </div>

                <div className='flex flex-col gap-4 border-1 border-gray-300  rounded-md shadow-md'>
                    <img src={multiplicationImage} alt="supplychain" className='h-90 bg-fixed'/>
                    <h2 className='text-[#697484] px-4'>Multiplication Table Generator</h2>
                    <h3 className='text-sm  text-[#697484] px-4'>A multiplication table generator is a straightforward tool designed to display the results of multiplying a specific number by a range of consecutive integers. </h3>
                    <button className='relative overflow-hidden group flex flex-row gap-4 border-1 rounded-lg ml-4 mb-4 w-3/7 md:3/7 xl:w-2/7 text-sm  cursor-pointer text-violet-600 font-bold px-2 py-3 border-violet-600 hover:scale-105 transition-transform duration-300' onClick={() => window.open('https://arif039.github.io/Multiplication-Table-Generator/', '_blank')}>Case Study <img src={arrowImage} alt="arrowImage" className='transition-transform duration-300 ease-in-out group-hover:translate-x-3'/> </button>
                </div>
               

                

            </div>

            <div className='w-full place-items-center-safe mb-20'>
                <button type='submit' className='mt-20 flex bg-violet-600 p-4 text-white rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer font-semibold'>More Projects</button>
            </div>

           
            
        </div>
    )
}