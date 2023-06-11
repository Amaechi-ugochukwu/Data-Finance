import double from "../assets/double.png"
import single from "../assets/single.png"
import triple from "../assets/triple.png"


export default function Card(){
    return(

        <div className="w-full px-10 py-10 bg-white text-black">
            <div className="max-w-[1240px] grid md: mx-10 my-10 lg:grid-cols-3 gap-8  ">
                <div className="flex flex-col shadow-xl rounded-lg hover:scale-105 duration-300 text-center ">
                    <img className=" w-20 mx-auto  bg-white m-6" src={single} alt="/"/>
                  <h1 className=" text-green-500 text-2xl">Single user</h1>
                  <p>$149</p>
                  <div className="text-center  mx-auto my-5 font-bold">
                  <p className="md:p-3 sm: p-2">500 gig storage</p>
                  <p className="md:p-3 sm: p-2">1 granted user</p>
                  <p className="md:p-3 sm: p-2"> send up to 2 gig</p>
                  
                  <button className="bg-green-500 text-grey p-4 w-[200px]">Start Trial</button>
                  </div>
                </div>

                <div className="flex flex-col shadow-xl rounded-lg hover:scale-105 duration-300 text-center p-4 my-4">
                    <img className=" w-20 mx-auto  bg-white m-6" src={double} alt="/"/>
                  <h1 className=" text-green-500 text-2xl">Double user</h1>
                  <p>$149</p>
                  <div className="text-center  mx-auto my-5 font-bold">
                  <p className="md:p-3 sm: p-2">500 gig storage</p>
                  <p className="md:p-3 sm: p-2">1 granted user</p>
                  <p className="md:p-3 sm: p-2"> send up to 2 gig</p>
                  
                  
                  <button className="bg-green-500 text-grey w-[200px] p-4">Start Trial</button>
                  </div>
                </div>

                <div className="flex flex-col shadow-xl rounded-lg hover:scale-105 duration-300 text-center">
                    <img className=" w-20 mx-auto bg-white m-4" src={triple} alt="/"/>
                  <h1 className=" text-green-500 text-2xl">Tripple user</h1>
                  <p>$149</p>
                  <div className="text-center mx-auto my-5 font-bold">
                  <p className="md:p-3 sm: p-2">500 gig storage</p>
                  <p className="md:p-3 sm: p-2">1 granted user</p>
                  <p className="md:p-3 sm: p-2"> send up to 2 gig</p>
                  
                  
                  <button className="bg-green-500 text-grey p-4 w-[200px]">Start Trial</button>
                  </div>
                </div>

            </div>


        </div>
    )
} 