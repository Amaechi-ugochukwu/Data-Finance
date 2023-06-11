import Typed from "react-typed"

export default function Hero(){
    return(
        <div className="text-white">
    <div className="max-w-[800] mt-[-30] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-green-400 font-bold text-3xl "> Growing With Data Analysis</p>

        <h4 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"> Grow With Data</h4>

    <div className="flex justify-center item-center">
           <p className="hidden md:text-green-500 font-bold text-3xl p-4"> Flexible Reliabe Transaction</p>
    </div>
        <Typed
        className="font-bold md:text-4xl text-green-500 mt-6 pt-6 sm:pt-6 mt-6 text-1xl text-green-500 "
        strings={['BTC','ETHEREUM','GOLD']}
        typeSpeed={300}
        backSpeed={100}
        loop
        />

        </div>
        </div>
    )
}