

export default function About () {

    return (

        <div className=" bg-gray-100" id="about">

            <div className="w-5/7 m-auto grid grid-cols-1 lg:grid-cols-2 py-30">

                <div className="p-4 flex flex-col justify-center gap-8 w-full md:w-2/3">
                    <div className="space-y-8">
                        <h1 className="text-3xl font-bold">What I do?</h1>
                        <h2 className="text-[#7f8794]">Driven by the revolutionary potential of blockchain technology. At the forefront of this exciting evolution.  </h2>
                        <h2 className="text-[#7f8794]">The architects and engineers crafting the decentralized applications (dApps) and infrastructure that are reshaping industries.</h2>
                    </div>

                    <div>
                        <button type="" className="bg-violet-600 p-4 rounded-lg text-white cursor-pointer font-semibold hover:scale-105 transition-transform duration-300 ease-in-out">Say Hello</button>
                    </div>
                </div>


                <div className="flex flex-col gap-y-8 p-4">

                    <div className="bg-white p-10 space-y-3 shadow-2xl rounded-lg hover:border-l-4 border-violet-600 transition-transform duration-300 ease-in-out">
                        <h1 className="text-lg md:text-2xl font-bold ">Decentralized Application (dApp)</h1>
                        <h2 className="text-xs md:text-base text-gray-500">An application that runs on a decentralized computing system, such as a blockchain or a peer-to-peer (P2P) network, rather than on a single, centralized server. </h2>
                    </div>

                    <div className="bg-white p-10 space-y-3 shadow-2xl rounded-lg hover:border-l-4 border-violet-600 transition-transform duration-300 ease-in-out">
                        <h1 className="text-lg md:text-2xl font-bold "> Decentralized Finance (DeFi)</h1>
                        <h2 className="text-xs md:text-base text-gray-500">an emerging financial technology based on secure distributed ledgers, similar to those used by cryptocurrencies. In essence, it aims to recreate traditional financial services </h2>
                    </div>

                    <div className="bg-white p-10 space-y-3 shadow-2xl rounded-lg hover:border-l-4 border-violet-600 transition-transform duration-300 ease-in-out">
                        <h1 className="text-lg md:text-2xl font-bold ">Non-Fungible Token (NFT)</h1>
                        <h2 className="text-xs md:text-base text-gray-500">Think of it as a digital certificate of authenticity and ownership that is recorded on a blockchain, most commonly the Ethereum blockchain, but also others like Solana, Tezos, and Flow </h2>
                    </div>

                </div>

            </div>

        </div>
    )
}